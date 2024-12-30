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
  word: {
    en: string;
    phonetic: string;
    cn: string;
    soundEn: string;
    soundCn: string;
  };
  index: number; // 单词的索引，用于控制出现顺序
};

export const WordElement: React.FC<Props> = ({root, word, index }) => {
  const frame = useCurrentFrame();
  const startFrame = 80 + index * 80; // 根据索引计算起始帧
  const opacity = interpolate(frame, [startFrame, startFrame + 10], [0, 1], { extrapolateRight: 'clamp' });
  const scale = interpolate(frame, [startFrame, startFrame + 5], [3, 1], { extrapolateRight: 'clamp' });

  const angle = ((index - 1) / 6) * 2 * Math.PI; // 计算单词的分布角度
  const radius = 350; // 分布半径
  const x = Math.cos(angle) * radius;
  const y = Math.sin(angle) * radius;

  return (
    <AbsoluteFill style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    }}>
      <div
        style={{
          position: 'absolute',
          top: '55%', 
          transform: `scale(${scale}) translate(${x}px, ${y}px) translate(0, -50%) `,
          opacity: opacity,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <div style={{
            backgroundColor: 'rgba(0, 0, 0, 0.2)',
            color: 'white',
            fontSize: '24px',
            fontFamily: FONT_FAMILY,
            padding: `${BUBBLE_PADDING / 2}px ${BUBBLE_PADDING}px`,
            borderRadius: '10px',
            whiteSpace: 'nowrap',
            lineHeight: '1.5',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
        }}>
            <div style={{fontSize: '48px', fontWeight: 'bold'}}>
                {word.en.split(new RegExp(`(${root.en})`, 'gi')).map((part, index) => 
                    part.toLowerCase() === root.en.toLowerCase() 
                    ? <span key={index} style={{color: '#ffc107'}}>{part}</span> 
                    : part
                )}
            </div>
            <div style={{fontSize: '36px', fontWeight: 'bold'}}>{word.phonetic}</div>
            <div style={{fontSize: '42px', fontWeight: 'bold', color: '#ffc107'}}>{word.cn}</div>
        </div>
      </div>
      <Sequence from={startFrame + 5}>
        <Audio src={getAudioSource(word.soundEn)} />
      </Sequence>
      <Sequence from={startFrame + 45}>
        <Audio src={getAudioSource(word.soundCn)} />
      </Sequence>
   </AbsoluteFill>
  );
}; 