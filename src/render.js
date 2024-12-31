const { bundle } = require('@remotion/bundler');
const { selectComposition, renderMedia } = require('@remotion/renderer');
const path = require('path');
const fs = require('fs').promises;
const OSS = require('ali-oss');

const ossClient = new OSS({
  region: process.env.OSS_REGION,
  accessKeyId: process.env.accessKeyID,
  accessKeySecret: process.accessKeySecret,
  bucket: process.env.OSS_BUCKET
});

const log = (message) => {
  const timestamp = new Date().toISOString();
  console.log(`[${timestamp}] ${message}`);
};

async function render({ enterpoint, compositionId, inputProps, outputFormat }) {
  log('Render function called with parameters:');
  log(`|-- enterpoint: ${enterpoint}`);
  log(`|-- compositionId: ${compositionId}`);
  log(`|-- inputProps: ${JSON.stringify(inputProps)}`);
  log(`|-- outputFormat: ${outputFormat}`);

  const tmpDir = path.join(__dirname, '../out'); // 指定输出目录
  await fs.mkdir(tmpDir, { recursive: true }); // 创建输出目录（如果不存在）
  
  log(`Temporary directory at ${tmpDir}`);
  
  const outputFile = path.join(tmpDir, `${compositionId}.${outputFormat}`);

  try {

    const bundledserveUrl = await bundle({
      entryPoint: path.join(process.cwd(), enterpoint), 
      webpackOverride: (config) => config,
      outDir: path.join(tmpDir, `remotion-webpack-bundle`)
    });

    if (!bundledserveUrl) {
      throw new Error('bundled_serverurl is required');
    } else {
      log(`bundled_serverurl: ${bundledserveUrl}`);
    }

    log('Selecting composition...');
    const composition = await selectComposition({
      serveUrl: bundledserveUrl,
      id: compositionId,
      inputProps,
    });
    
    if (!composition) {
      throw new Error(`Composition "${compositionId}" not found`);
    }
    log(`Composition "${compositionId}" found.`);

    log('Starting media rendering...');
    log(`|-- Composion ID: ${compositionId}`);
    log(`|-- Server URL: ${bundledserveUrl}`);
    log(`|-- Output file path: ${outputFile}`);
    log(`|-- Output format: ${outputFormat}`);
    log(`|-- Input props: ${JSON.stringify(inputProps)}`); 

    await renderMedia({
      composition,
      codec: 'h264',
      outputLocation: outputFile,
      inputProps,
      serveUrl: bundledserveUrl,
    });
    log('Media rendering completed.');

    const ossKey = `renders/${compositionId}-${Date.now()}.${outputFormat}`;
    log(`Uploading rendered media to OSS with key: ${ossKey}`);
    await ossClient.put(ossKey, outputFile);
    log('Upload to OSS completed.');

    return {
      success: true,
      url: ossClient.signatureUrl(ossKey, { expires: 3600 })
    };
  } catch (error) {
    log(`Error occurred: ${error.message}`);
    log(`Stack trace: ${error.stack}`);
    throw error;
  } finally {
    log('Cleaning up temporary files...');
    const files = await fs.readdir(tmpDir);
    for (const file of files) {
      if (file.endsWith(`.${outputFormat}`)) {
      await fs.unlink(path.join(tmpDir, file));
      }
    }
    log('Temporary files cleaned up.');
  }
}

module.exports = { render };