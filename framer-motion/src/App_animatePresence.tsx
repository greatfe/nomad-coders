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
`;

const Box = styled(motion.div)`
  width: 400px;
  height: 200px;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 40px;
  position: absolute;
  top: 100px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const boxVariant = {
  initail: {
    opacity: 0,
    scale: 0,
  },
  visible: {
    opacity: 1,
    scale: 1,
    rotateZ: 360,
  },
  leaving: {
    opacity: 0,
    scale: 0,
    y: 50,
  },
}

function App() {
  const [showing, setShowing] = useState(false);

  const onClick = () => setShowing(prev => !prev);

  return (
    <Wrapper>
      <button onClick={onClick}>click</button>
      <AnimatePresence>
        {showing ? <Box 
          variants={boxVariant} 
          initial="inital"
          animate="visible"
          exit="leaving"
          /> : null}
      </AnimatePresence>
    </Wrapper>
  );
}

export default App;
