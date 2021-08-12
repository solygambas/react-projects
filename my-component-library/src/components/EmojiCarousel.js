import { useState } from "react";
import { animated, useTransition } from "react-spring";

/*
 ** Exercise 2: useToggle
 ** In this exercise you'll transition between two emojis: sad and happy
 ** You should have a happy state which will be a boolean denoting whether or not the emoji should
 ** be happy or sad.
 ** The emojis should transition from opacity: 0 to opacity: 1
 ** The button text should change depending upon the happy state: "Make sad" if currently happy and "Make happy" if currently sad
 */

const EmojiCarousel = () => {
  // Add happy state here
  const [happy, setHappy] = useState(true);
  // Add transition here
  const transition = useTransition(happy, null, {
    from: { opacity: 0, position: "absolute" },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  });
  return (
    <div className="emoji-carousel">
      <button onClick={() => setHappy((prev) => !prev)}>
        Make {happy ? "happy" : "unhappy"}
      </button>
      {/* Refactor this and add transitions */}
      {transition.map(({ item: state, props }) => {
        return state ? (
          <animated.span style={props} role="img" aria-label="Happy">
            😀
          </animated.span>
        ) : (
          <animated.span style={props} role="img" aria-label="Sad">
            😭
          </animated.span>
        );
      })}
    </div>
  );
};

export default EmojiCarousel;
