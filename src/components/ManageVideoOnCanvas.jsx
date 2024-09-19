import { useFaceDetection } from "react-use-face-detection";
import React, { useEffect, useRef, useState } from "react";
import * as tf from "@tensorflow/tfjs";
import "../stylesheet/WebcamModified.css";
// import { URL_EMOTION_RECOGNITION_MODEL } from "../Constants/url.constant";
import drawOnCanvas from "../Common/canvas";
import VideoOnCanvas from "./VideoOnCanvas";
import SwitchCamera from "./SwitchCamera";
import { FACE_DETECTION_PROPS } from "../Constants/faceDetection";
import { loadModel } from "../Common/tensorflowModel";

const _init_state = {
  model: null,
  isModelSet: false,
};

const ManageVideoOnCanvas = () => {
  const { webcamRef, boundingBox } = useFaceDetection(FACE_DETECTION_PROPS);
  let canvasRef = useRef(null);

  const [state, setState] = useState(_init_state);
  const [constraints, setConstraints] = useState({
    facingMode: "user",
  });

  useEffect(() => {
    const context = canvasRef.current.getContext("2d");
    let animationFrameId;
    const render = () => {
      drawOnCanvas(
        state,
        context,
        webcamRef.current.video,
        boundingBox,
        state.model
      );
      animationFrameId = window.requestAnimationFrame(render);
    };
    render();
    return window.cancelAnimationFrame(animationFrameId);
  }, [canvasRef, webcamRef, boundingBox, state]);

  useEffect(() => {
    if (!state.isModelSet) {
      // MODEL EMOTION RECOGNITION
      tf.ready().then(() =>
        loadModel("https://raw.githubusercontent.com/clementreiffers/emotion-recognition-website/main/resnet50js_ferplus/model.json", setState, state)
      );
    }
  }, [state, setState]);

  return (
    <div>
      <SwitchCamera
        setConstraints={setConstraints}
        isModelLoaded={state.isModelSet}
      />
      <VideoOnCanvas
        canvasRef={canvasRef}
        webcamRef={webcamRef}
        constraints={constraints}
      />
    </div>
  );
};

export default ManageVideoOnCanvas;
