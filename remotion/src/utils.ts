import { staticFile } from 'remotion';
import {loadFont} from "@remotion/google-fonts/ZCOOLQingKeHuangYou"
const { fontFamily } = loadFont();


export const VIDEO_WIDTH = 1080;
export const VIDEO_HEIGHT = 1440;
export const FONT_FAMILY = fontFamily;
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
    if (path.startsWith('http://') || path.startsWith('https://')) {
        return path;
    } else {
        return staticFile(path);
    }
}