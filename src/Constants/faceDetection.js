import fd from "@mediapipe/face_detection";
import { Camera } from "@mediapipe/camera_utils";
// import { Face } from "@mui/icons-material";
// import { URL_JS_DELIVR } from "./url.constant";

// const locateFaceDetectionFile = (file) =>
//   `https://cdn.jsdelivr.net/npm/@mediapipe/face_detection/${file}`;

console.log('fd', fd);

const FACE_DETECTION_PROPS = {
  faceDetectionOptions: {
    model: "short",
  },
  faceDetection: new fd.FaceDetection({
    locateFile: (path) => {      
      if (typeof WebAssembly === "undefined") {
        console.error("WebAssembly is not supported in this environment");
      }
      
      return `/${path}`;
    }
  }),
  camera: ({ mediaSrc, onFrame, width, height }) =>
    new Camera(mediaSrc, {
      onFrame,
      width,
      height,
    }),
};

export { FACE_DETECTION_PROPS };
