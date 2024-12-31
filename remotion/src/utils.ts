import { staticFile } from 'remotion';


export const VIDEO_WIDTH = 1080;
export const VIDEO_HEIGHT = 1440;
export const FONT_FAMILY = 'Arial, sans-serif';
export const BUBBLE_PADDING = 10;
export const DEFAULT_FPS = 30; 

const isUrl = (path: string) => {
    try {
      new URL(path);
      return true;
    } catch (e) {
      return false;
    }
  };

export const getAudioSource = (path: string) => {
      if (isUrl(path)) {
        return path;
      } else {
        return staticFile(path);
      }
  }