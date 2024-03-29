import React from 'react';
import styled from 'styled-components';
import TodoItem from './TodoItem';
import { useTodoState } from '../TodoContext';

const TodoListBlock = styled.div`
  flex: 1;
//   padding: 20px 32px;
  padding-top: 20px;
  overflow-y: auto;
//   background: #666; /* 사이즈 조정이 잘 되고 있는지 확인하기 위한 임시 스타일 */
`;

function TodoList() {
  const todos = useTodoState();

  return (
        <TodoListBlock>
            <TodoListBlock>
              {todos.map(todo => (
                  <TodoItem
                    key={todo.id}
                    id={todo.id}
                    text={todo.text}
                    done={todo.done}
                  />
              ))}
            </TodoListBlock>
        </TodoListBlock>
    );
}

export default TodoList;