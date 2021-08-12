import { useState } from "react";
import { animated, useSpring } from "react-spring";

/*
 ** Exercise 1: useSpring
 ** In this exercise you'll animate text in and out depending upon the state
 ** You'll add the state useing useState and then the accompanying animation
 ** The text will slide in and fade in from the top (30%) on show
 ** and fade out and slide out towards the top on hide
 */

const FadeIn = () => {
  const [showText, setShowText] = useState(true);
  const animation = useSpring({
    opacity: showText ? 1 : 0,
    transform: showText ? `translateY(0%)` : `translateY(-30%)`,
  });
  return (
    <div>
      <button onClick={() => setShowText((prev) => !prev)}>
        Toggle animation
      </button>
      <animated.p style={animation}>Animate me on click!</animated.p>
    </div>
  );
};

export default FadeIn;
