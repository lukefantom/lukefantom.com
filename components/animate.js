import React, { useEffect, useRef, useState } from "react";
import smoothscroll from "smoothscroll-polyfill";

export default function Animate({
  suggestions = ["creator.", "music producer.", "software developer."],
}) {
  const textWrapper = useRef(null);

  const speed = 100;
  let charCounter = 0;
  let currentIndex = 0;
  let currentText = suggestions[0];
  let timeOut = null;
  let forward = true;

  const createAnimation = () => {
    if (charCounter < currentText.length && charCounter > -1) {
      textWrapper.current.innerHTML = forward
        ? textWrapper.current.innerHTML + currentText.charAt(charCounter)
        : textWrapper.current.innerHTML.replace(/(\s+)?.$/, "");
      charCounter = forward ? charCounter + 1 : charCounter - 1;
      timeOut = setTimeout(createAnimation, speed);
    } else if (charCounter === currentText.length) {
      forward = false;
      charCounter -= 1;
      timeOut = setTimeout(createAnimation, speed * 4);
    } else if (charCounter === -1) {
      currentIndex =
        currentIndex + 1 === suggestions.length ? 0 : currentIndex + 1;
      currentText = suggestions[currentIndex];
      charCounter = 0;
      forward = true;
      timeOut = setTimeout(createAnimation, speed);
    }
  };

  useEffect(() => {
    smoothscroll.polyfill();
    createAnimation();

    return function cleanup() {
      clearTimeout(timeOut);
    };
  }, [createAnimation, timeOut]);

  return (
    <>
      <span ref={textWrapper}></span>
    </>
  );
}
