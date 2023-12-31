"use client";

import Lottie from "react-lottie-player";
import loadingAnimation from "public/assets/image/LoadingFallback/loadingAnimation.json";

function loading() {
  return (
    <>
      <Lottie loop animationData={loadingAnimation} />
    </>
  );
}

export default loading;
