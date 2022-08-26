import styled from "styled-components";
import { motion } from "framer-motion";
import { useRef } from "react";

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: pink;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const BiggerBox = styled(motion.div)`
  width: 400px;
  height: 400px;
  background-color: rgba(255,255,255, 0.2);
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  //overflow: hidden;
`;
const Box = styled(motion.div)`
  width: 200px;
  height: 200px;
  background-color: rgba(255,255,255, 1);
  border-radius: 10px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const boxVariants = {
  hover: {scalle: 1.5, rotateZ: 90},
  click: { scale: 1, borderRadius: "100px"},
  drag: {backgroundColor:"rgba(84, 160, 255,1.0)", transition: {duration: 2}},
};

/* function TextInputWithFocusButton() {
  const inputEl = useRef<HTMLDivElement>(null);
  const onButtonClick = () => {
    // `current` points to the mounted text input element
    inputEl.current.focus();
  };
  return (
    <>
      <input ref={inputEl} type="text" />
      <button onClick={onButtonClick}>Focus the input</button>
    </>
  );
}

 */
function App() {
  const biggerBoxRef = useRef<HTMLDivElement>(null);

  return (
    <Wrapper>
      <BiggerBox ref={biggerBoxRef}>
        <Box 
          drag
          dragSnapToOrigin 
          dragElastic={0}
          dragConstraints={biggerBoxRef} 
          variants={boxVariants} 
          whileHover="hover" 
          whileTap="click" />
      </BiggerBox>
    </Wrapper>
  );
}

// dragSnapToOrigin : 원래 자리로 돌아감
// dragElastic : 탄성
// dragConstraints={{top: -50, bottom: 50, left: -50, right: 50}}

export default App;
