import styled from "styled-components";
import { motion, useMotionValue, useScroll, useTransform, useViewportScroll } from "framer-motion";
import { useEffect, useRef } from "react";

const Wrapper = styled(motion.div)`
  height: 200vh;
  width: 100vw;
  /* background-color: pink; */
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(135deg, rgb(238, 0, 153), rgb(0, 238, 59));
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


function App() {
  const x = useMotionValue(0);
  const transedScale = useTransform(x, [-800, 800], [2, 0.1]);
  const transedRotate = useTransform(x, [-800, 800], [-360, 360]);
  const transedGradient = useTransform(
    x, 
    [-800, 0, 800], 
    ["linear-gradient(135deg, rgb(238, 0, 153), rgb(0, 238, 59))",
    "linear-gradient(135deg, rgba(238, 0, 155, 0.473), rgba(0, 238, 59, 0.575))",
    "linear-gradient(135deg, rgba(238, 0, 155, 0.137), rgba(0, 238, 59, 0.164))"
  ]);

  const {scrollY, scrollYProgress} = useScroll();
  const yScale = useTransform(scrollYProgress, [0, 1], [1, 5]);

  useEffect(() => {
    //x.onChange(() => console.log(x.get()));
    // x.onChange(() => console.log(transedScale.get()));
  }, [x])

  return (
    <Wrapper style={{background: transedGradient}}>
      <button onClick={() => x.set(200)}>click me</button>
      <Box 
        style={{x, scale:transedScale}}
        drag="x" 
      />
      <Box 
        style={{x, rotateZ:transedRotate, scale: yScale}}
        drag="x" 
      />
    </Wrapper>
  );
}

// dragSnapToOrigin : 원래 자리로 돌아감
// dragElastic : 탄성
// dragConstraints={{top: -50, bottom: 50, left: -50, right: 50}}

export default App;
