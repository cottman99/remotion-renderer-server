import './tailwind.css';
import { Composition } from "remotion";
import { MyComposition } from "./Composition";
import { VIDEO_WIDTH, VIDEO_HEIGHT, DEFAULT_FPS } from "./utils";

export const RemotionRoot: React.FC = () => {
  const inputProps = {
    bgImg: 'https://www.publicdomainpictures.net/pictures/20000/velka/abstract-background.jpg',
    title: 'Learn with Root',
    root: {
        en: 'test',
        cn: '测试词根',
        soundEN: `https://lf26-appstore-sign.oceancloudapi.com/ocean-cloud-tos/VolcanoUserVoice/speech_7426720361733062665_bd1c3402-f3c0-428d-9c61-4cc42763d0bc.mp3?lk3s=da27ec82&x-expires=1735575632&x-signature=zdJIqlBw6MrBXgsEHpMR7gNpn%2Bg%3D`, // 使用有道字典语音api
        soundCN: `https://lf26-appstore-sign.oceancloudapi.com/ocean-cloud-tos/VolcanoUserVoice/speech_7426720361733062665_bd1c3402-f3c0-428d-9c61-4cc42763d0bc.mp3?lk3s=da27ec82&x-expires=1735575632&x-signature=zdJIqlBw6MrBXgsEHpMR7gNpn%2Bg%3D`, // 使用有道字典语音api
    },
    words: [
        {
            en: 'testWordt1',
            phonetic: '/test1/',
            cn: '测试单词1',
            soundEN: `https://lf26-appstore-sign.oceancloudapi.com/ocean-cloud-tos/VolcanoUserVoice/speech_7426720361733062665_bd1c3402-f3c0-428d-9c61-4cc42763d0bc.mp3?lk3s=da27ec82&x-expires=1735575632&x-signature=zdJIqlBw6MrBXgsEHpMR7gNpn%2Bg%3D`, // 使用有道字典语音api
            soundCN: `https://lf26-appstore-sign.oceancloudapi.com/ocean-cloud-tos/VolcanoUserVoice/speech_7426720361733062665_bd1c3402-f3c0-428d-9c61-4cc42763d0bc.mp3?lk3s=da27ec82&x-expires=1735575632&x-signature=zdJIqlBw6MrBXgsEHpMR7gNpn%2Bg%3D`, // 使用有道字典语音api
        },
         {
            en: 'testWord2',
            phonetic: '/test2/',
            cn: '测试单词2',
            soundEN: `https://lf26-appstore-sign.oceancloudapi.com/ocean-cloud-tos/VolcanoUserVoice/speech_7426720361733062665_bd1c3402-f3c0-428d-9c61-4cc42763d0bc.mp3?lk3s=da27ec82&x-expires=1735575632&x-signature=zdJIqlBw6MrBXgsEHpMR7gNpn%2Bg%3D`, // 使用有道字典语音api
            soundCN: `https://lf26-appstore-sign.oceancloudapi.com/ocean-cloud-tos/VolcanoUserVoice/speech_7426720361733062665_bd1c3402-f3c0-428d-9c61-4cc42763d0bc.mp3?lk3s=da27ec82&x-expires=1735575632&x-signature=zdJIqlBw6MrBXgsEHpMR7gNpn%2Bg%3D`, // 使用有道字典语音api
        },
        {
            en: 'testWord3',
            phonetic: '/test3/',
            cn: '测试单词3',
            soundEN: `https://lf26-appstore-sign.oceancloudapi.com/ocean-cloud-tos/VolcanoUserVoice/speech_7426720361733062665_bd1c3402-f3c0-428d-9c61-4cc42763d0bc.mp3?lk3s=da27ec82&x-expires=1735575632&x-signature=zdJIqlBw6MrBXgsEHpMR7gNpn%2Bg%3D`, // 使用有道字典语音api
            soundCN: `https://lf26-appstore-sign.oceancloudapi.com/ocean-cloud-tos/VolcanoUserVoice/speech_7426720361733062665_bd1c3402-f3c0-428d-9c61-4cc42763d0bc.mp3?lk3s=da27ec82&x-expires=1735575632&x-signature=zdJIqlBw6MrBXgsEHpMR7gNpn%2Bg%3D`, // 使用有道字典语音api
        },
        {
             en: 'testWord4',
            phonetic: '/test4/',
            cn: '测试单词4',
            soundEN: `https://lf26-appstore-sign.oceancloudapi.com/ocean-cloud-tos/VolcanoUserVoice/speech_7426720361733062665_bd1c3402-f3c0-428d-9c61-4cc42763d0bc.mp3?lk3s=da27ec82&x-expires=1735575632&x-signature=zdJIqlBw6MrBXgsEHpMR7gNpn%2Bg%3D`, // 使用有道字典语音api
            soundCN: `https://lf26-appstore-sign.oceancloudapi.com/ocean-cloud-tos/VolcanoUserVoice/speech_7426720361733062665_bd1c3402-f3c0-428d-9c61-4cc42763d0bc.mp3?lk3s=da27ec82&x-expires=1735575632&x-signature=zdJIqlBw6MrBXgsEHpMR7gNpn%2Bg%3D`, // 使用有道字典语音api
        },
         {
            en: 'testWord5',
            phonetic: '/test5/',
            cn: '测试单词5',
            soundEN: `https://lf26-appstore-sign.oceancloudapi.com/ocean-cloud-tos/VolcanoUserVoice/speech_7426720361733062665_bd1c3402-f3c0-428d-9c61-4cc42763d0bc.mp3?lk3s=da27ec82&x-expires=1735575632&x-signature=zdJIqlBw6MrBXgsEHpMR7gNpn%2Bg%3D`, // 使用有道字典语音api
            soundCN: `https://lf26-appstore-sign.oceancloudapi.com/ocean-cloud-tos/VolcanoUserVoice/speech_7426720361733062665_bd1c3402-f3c0-428d-9c61-4cc42763d0bc.mp3?lk3s=da27ec82&x-expires=1735575632&x-signature=zdJIqlBw6MrBXgsEHpMR7gNpn%2Bg%3D`, // 使用有道字典语音api
        },
         {
            en: 'testWord6',
            phonetic: '/test6/',
            cn: '测试单词6',
            soundEN: `https://lf26-appstore-sign.oceancloudapi.com/ocean-cloud-tos/VolcanoUserVoice/speech_7426720361733062665_bd1c3402-f3c0-428d-9c61-4cc42763d0bc.mp3?lk3s=da27ec82&x-expires=1735575632&x-signature=zdJIqlBw6MrBXgsEHpMR7gNpn%2Bg%3D`, // 使用有道字典语音api
            soundCN: `https://lf26-appstore-sign.oceancloudapi.com/ocean-cloud-tos/VolcanoUserVoice/speech_7426720361733062665_bd1c3402-f3c0-428d-9c61-4cc42763d0bc.mp3?lk3s=da27ec82&x-expires=1735575632&x-signature=zdJIqlBw6MrBXgsEHpMR7gNpn%2Bg%3D`, // 使用有道字典语音api
        },
    ],
  };  
  return (
    <>
      <Composition
        id="MyComp"
        component={MyComposition}
        durationInFrames={600}
        fps={DEFAULT_FPS}
        width={VIDEO_WIDTH}
        height={VIDEO_HEIGHT}
        defaultProps={inputProps}
      />
    </>
  );
};