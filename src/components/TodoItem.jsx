import React from 'react'
import styled, { css } from 'styled-components';
import { MdDone, MdDelete } from 'react-icons/md';



const Remove = styled.div`
  width: 32px;
  height: 32px;
  border: 1px solid #333;
  font-size: 24px;
  text-align: center;
  margin-right: 20px;
  cursor: pointer;
  color: #ff6b6b;
  display: none;
`;

const TodoItemBlock = styled.div`
  display: flex;
  align-items: center;
  padding-top: 12px;
  padding-bottom: 12px;
  &:hover {
    ${Remove} {
      display: initial;
    }
    background: #F4F4F4;
  }
`;

const CheckRect = styled.div`
  width: 32px;
  height: 32px;
  border: 1px solid #333;
  font-size: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  margin-left: 20px;
  cursor: pointer;
  ${props =>
    props.done &&
    css`
      border: 1px solid #333;
      color: #38d9a9;
    `}
`;

const Text = styled.div`
  flex: 1;
  font-size: 21px;
  color: #495057;
  ${props =>
    props.done &&
    css`
      color: #ced4da;
    `}
`;

function TodoItem({id, done, text}) {
    return (
        <TodoItemBlock>
            <CheckRect done={done}>{done && <MdDone />}</CheckRect>
            <Text done={done}>{text}</Text>
            <Remove>
                <MdDelete />
            </Remove>
        </TodoItemBlock>
    ); 
}

export default TodoItem