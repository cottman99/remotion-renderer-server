import { AbsoluteFill } from 'remotion';
import { Background } from './components/Background';
import { Title } from './components/Title';
import { RootElement } from './components/RootElement';
import { WordElement } from './components/WordElement';
import React from 'react';
import { Arrow } from './components/Arrow';

type Props = {
  bgImg: string;
  title: string;
  root: {
    en: string;
    cn: string;
    soundEN: string;
    soundCN: string;
  };
  words: {
    en: string;
    phonetic: string;
    cn: string;
    soundEN: string;
    soundCN: string;
  }[];
};
export const MyComposition: React.FC<Props> = ({ bgImg, title, root, words }) => {
  return (
    <AbsoluteFill>
      <Background bgImg={bgImg} />
      <Title title={title} />
        
       {words.map((word, index) => (
         <React.Fragment key={index}>
            <Arrow
             startX={0}
             startY={0}
             endX={Math.cos(((index-1) / 6) * 2 * Math.PI) * 350}
             endY={Math.sin(((index-1) / 6) * 2 * Math.PI) * 350}
             startFrame={80 + index * 80}
           />
           <WordElement root={root} word={word} index={index}/>

         </React.Fragment>
        ))}

        <RootElement root={root}/>  
    </AbsoluteFill>
  );
};
