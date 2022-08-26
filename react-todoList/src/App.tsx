import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { Helmet } from "react-helmet";
import styled from "styled-components";
import ToDoList from "./components/ToDoList";

function App() {
  const Wrapper = styled.div`
    display: flex;
    max-width: 480px;
    width: 100%;
    margin: 0 auto;
    justify-content: center;
    align-items: center;
    height: 100vh;
  `;
  const Board = styled.div`
    background-color: ${(props) => props.theme.boardColor};
  `;
  const Card = styled.div`
    background-color: ${(props) => props.theme.cardColor};
  `;


  const onDragEnd = () => {};


  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Wrapper>
        <Droppable droppableId="one">
          {(magic) => (
            <Board ref={magic.innerRef} {...magic.droppableProps}>
              <Draggable draggableId="first" index={0}>
                {(magic) => (<Card ref={magic.innerRef} {...magic.draggableProps} >
                              <span {...magic.dragHandleProps}>💖</span>One</Card>)}
              </Draggable>
              <Draggable draggableId="second" index={0}>
                {(magic) => (<Card ref={magic.innerRef} {...magic.draggableProps} >
                              <span {...magic.dragHandleProps}>💖</span>Two</Card>)}
              </Draggable>
              {magic.placeholder}
            </Board>
          )}
        </Droppable>
      </Wrapper>
    </DragDropContext>

    );
}
//    <ToDoList></ToDoList>

export default App;
