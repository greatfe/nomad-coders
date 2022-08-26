import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: pink;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  width: 50vw;
  gap: 10px;
`;

const Box = styled(motion.div)`
  background-color: rgba(255, 255, 255, 1);
  border-radius: 40px;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const Circle = styled(motion.div)`
  background-color: #00a5ff;
  height: 50px;
  width: 50px;
  border-radius: 50px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const Overlay = styled(motion.div)`
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const overlay = {
  hidden: { backgroundColor: "rgba(0, 0, 0, 0)" },
  visible: { backgroundColor: "rgba(0, 0, 0, 0.5)" },
  exit: { backgroundColor: "rgba(0, 0, 0, 0)" },
};

const boxVariants = {
  hover: { scale: 1.1},
  // click: { scale: 1, borderRadius: "100px" },
  // drag: { backgroundColor: "rgb(46, 204, 113)", transition: { duration: 10 } },
};

function App() {
  const [id, setId] = useState<null | string>(null);
  const [clicked, setClicked] = useState(false);

  const btnClick = () => setClicked((prev) => !prev);

  return (
    <Wrapper>
      <Grid>
          <Box variants={boxVariants} whileHover="hover" onClick={() => setId("1")} key={"1"} layoutId={"1"} />
          <Box variants={boxVariants} whileHover="hover" onClick={() => setId("2")} key={"2"} layoutId={"2"}>
            {!clicked ? (
              <Circle layoutId="circle" />
            ) : null}
          </Box>
          <Box variants={boxVariants} whileHover="hover" onClick={() => setId("3")} key={"3"} layoutId={"3"}>
            {clicked ? (
              <Circle layoutId="circle" />
            ) : null}
          </Box>
          <Box variants={boxVariants} whileHover="hover" onClick={() => setId("4")} key={"4"} layoutId={"4"} />
          <button onClick={btnClick}>switch</button>
      </Grid>
      <AnimatePresence>
        {id ? (
          <Overlay
            variants={overlay}
            onClick={() => setId(null)}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <Box layoutId={id} style={{ width: 400, height: 200 }} />
          </Overlay>
        ) : null}
      </AnimatePresence>
    </Wrapper>
  );
}

export default App;