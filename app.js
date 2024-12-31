const express = require('express');
const { render } = require('./src/render'); // 确保路径正确
//const cors = require('cors'); // 可选，使用 CORS 处理允许跨域请求

const app = express();
const PORT = process.env.PORT || 9000;

// 中间件
app.use(express.json()); // 解析 JSON 请求体
//app.use(cors()); // 允许跨域请求

// 处理 POST 请求
app.post('/render', async (req, res) => {
  console.log('Received request:', req.body);
  try {
    const params = req.body;
    // 进行参数验证
    const validationErrors = [];
    if (!params.compositionId) {
      validationErrors.push('compositionId is required');
    }
    if (!params.inputProps) {
      validationErrors.push('inputProps is required');
    }

    if (validationErrors.length > 0) {
      console.error('Validation errors:', validationErrors);
      return res.status(400).json({
        success: false,
        errors: validationErrors,
        message: 'Validation failed'
      });
    }

    console.log('Starting render process with compositionId:', params.compositionId);
    const renderResult = await render({
      enterpoint: params.enterpoint,
      compositionId: params.compositionId,
      inputProps: params.inputProps,
      outputFormat: params.outputFormat || 'mp4'
    });
    console.log('Render result:', renderResult);

    res.status(200).json({
      success: true,
      data: renderResult
    });
  } catch (error) {
    console.error('Error details:', {
      message: error.message,
      stack: error.stack,
      name: error.name
    });

    const statusCode = error.name === 'SyntaxError' ? 400 : 500;
    const errorMessage = statusCode === 400 ? 'Invalid request format' : 'Internal Server Error';

    res.status(statusCode).json({
      success: false,
      error: {
        message: errorMessage,
        type: error.name,
        details: error.message
      }
    });
  }
});

// 启动服务器
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
