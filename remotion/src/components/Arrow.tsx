import React from 'react';
import { interpolate, useCurrentFrame, AbsoluteFill } from 'remotion';

type ArrowProps = {
  startX: number;
  startY: number;
  endX: number;
  endY: number;
  startFrame: number;
};

export const Arrow: React.FC<ArrowProps> = ({ startX, startY, endX, endY, startFrame }) => {
  const frame = useCurrentFrame();
  const opacity = interpolate(frame, [startFrame, startFrame + 10], [0, 1], { extrapolateRight: 'clamp' });

  const angle = Math.atan2(endY - startY, endX - startX) * 180 / Math.PI;
  const length = Math.sqrt(Math.pow(endX - startX, 2) + Math.pow(endY - startY, 2));
  const arrowHeadSize = 10; // 箭头大小

  return (
    <AbsoluteFill style={{ justifyContent: 'center', alignItems: 'center' }}>
      <div
        style={{
          position: 'absolute',
          top: `55%`,
          left: `50%`,
          width: length/3,
          height: 4, // 加粗线条
          backgroundColor: 'white',
          opacity,
          transform: `rotate(${angle}deg) translate(${length / 3}px)`,
          transformOrigin: '0 0',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-end',
        }}
      >
        <div
          style={{
            width: 0,
            height: 0,
            borderLeft: `${arrowHeadSize * 3}px solid white`, // 增大箭头
            borderTop: `${arrowHeadSize / 2 * 3 }px solid transparent`,
            borderBottom: `${arrowHeadSize / 2 * 3}px solid transparent`,
            opacity,
          }}
        />
      </div>
    </AbsoluteFill>
  );
};