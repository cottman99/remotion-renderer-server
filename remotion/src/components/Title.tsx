import { AbsoluteFill } from 'remotion';
import { FONT_FAMILY, BUBBLE_PADDING } from '../utils';

type Props = {
  title: string;
};

export const Title: React.FC<Props> = ({ title }) => {
  return (
    <AbsoluteFill style={{
        display: "flex",
        alignItems: "center",
        top: '10%',
    }}>
      <div style={{
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          color: '#ffc107',
          fontSize: '50px',
          fontFamily: FONT_FAMILY,
          padding: `${BUBBLE_PADDING}px ${BUBBLE_PADDING * 2}px`,
          borderRadius: '20px',
          whiteSpace: 'nowrap',
          fontWeight: 'bold',
      }}>
        {title}
      </div>
    </AbsoluteFill>
  );
}; 