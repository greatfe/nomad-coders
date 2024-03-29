import styled from "styled-components";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";


const Wrapper = styled(motion.div)`
  height: 100vh;
  width: 100vw;
  background-color: pink;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Box = styled(motion.div)`
  width: 400px;
  height: 200px;
  font-size: 28px;
  background-color: rgba(255, 255, 255, 1);
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
  border-radius: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 100px;
`;

const boxVariant = {
  entry: (isBack:boolean) => ({
    x: isBack ? -500 : 500,
    opacity: 0,
    scale: 0,
  }),
  center: (isBack:boolean) => ({
    x: 0,
    opacity: 1,
    scale: 1,
    transition: {duration: 0.3},
  }),
  exit: (isBack:boolean) => ({
    x: isBack ? 500 : -500,
    opacity: 0,
    scale: 0,
    transition: {duration: 0.3},
  }),
};

function App() {
  const [visible, setVisible] = useState(1);
  const [back, setBack] = useState(false);

  const nextClick = () => {
    setBack(false);
    setVisible(prev => prev==10 ? 10 : prev+1)
  };
  const prevClick = () => {
    setBack(true);
    setVisible(prev => prev==1 ? 1 : prev-1);
  }

  return (
    <Wrapper>
      <AnimatePresence mode="wait" custom={back}>
        <Box 
          custom={back}
          variants={boxVariant}
          initial="entry"
          animate="center"
          exit="exit"
          key={visible}
        >{visible}</Box>
      </AnimatePresence>
      <button onClick={prevClick}>prev</button>
      <button onClick={nextClick}>next</button>
    </Wrapper>
  );
}

export default App;
