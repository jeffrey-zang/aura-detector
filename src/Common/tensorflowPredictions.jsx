import { NO_MODEL } from "../Constants/emotionRecognizer.constant";
import * as tf from "@tensorflow/tfjs";
import { treatImg } from "./tensorflowImages";

let prediction = ''

const _predictTensor = (state, model, tfResizedImage) => {
  if (state.isModelSet) {
    let predict = Array.from(model.predict(tfResizedImage).dataSync());
    tfResizedImage.dispose();
    console.log(predict[4])
    return (predict[4] > 0.5) ? "DAS AURA" : "NO AURA";
  } else {
    return NO_MODEL;
  }
};
const _predictImg = (emotionRecognizer, state, face) =>
  _predictTensor(state, emotionRecognizer, treatImg(face));

const predict = (emotionRecognizer, state, face) => {
  tf.engine().startScope();
  tf.tidy(() => {
    prediction = _predictImg(emotionRecognizer, state, face);
  });
  // console.log(prediction)
  // Check tensor memory leak stop
  tf.engine().endScope();
  return(prediction);
};

const getPrediction = () => {
  return prediction;
}

export { predict, prediction, getPrediction };