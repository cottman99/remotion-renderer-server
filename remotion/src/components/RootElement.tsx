import { AbsoluteFill, useCurrentFrame, interpolate, Audio, Sequence } from 'remotion';
import { FONT_FAMILY, BUBBLE_PADDING, getAudioSource } from '../utils';
import React from 'react';

type Props = {
  root: {
    en: string;
    cn: string;
    soundEn: string;
    soundCn: string;
  };
}; 

export const RootElement: React.FC<Props> = ({ root }) => {
  const frame = useCurrentFrame();
  const scale = interpolate(frame, [0, 5], [3, 1], { extrapolateRight: 'clamp' });
  const opacity = interpolate(frame, [0, 5], [0, 1], { extrapolateRight: 'clamp' });


  return (
    <AbsoluteFill style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    }}>
        <div
          style={{
            position: 'absolute',
            top: '55%',
            transform: `translate(0, -50%) scale(${scale})`, // 平移至元素中心
            opacity: opacity,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
             <div style={{
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                color: '#ffc107',
                fontSize: '48px',
                fontFamily: FONT_FAMILY,
                padding: `${BUBBLE_PADDING}px ${BUBBLE_PADDING * 2}px`,
                borderRadius: '15px',
                whiteSpace: 'nowrap',
                lineHeight: '1.5',
                fontWeight: 'bold',
                textAlign: 'center',
              }}>
               <div>{root.en}</div>
               <div>{root.cn}</div>
             </div>
           </div>
         
           <Sequence from={10}>
              <Audio src={getAudioSource(root.soundEn)} />
           </Sequence>
           <Sequence from={40}>
              <Audio src={getAudioSource(root.soundCn)} />
           </Sequence>
    </AbsoluteFill>
  );
};