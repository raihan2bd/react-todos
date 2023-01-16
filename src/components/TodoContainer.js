import React, { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import Header from './Header';
import InputTodo from './InputTodo';
import TodosList from './TodosList';

import About from '../pages/About';
import NotMatch from '../pages/NotMatch';
import Navbar from './Navbar';

function getInitialTodos() {
  // getting stored items
  const temp = localStorage.getItem('todos');
  const savedTodos = JSON.parse(temp);
  return savedTodos || [];
}

const TodoContainer = () => {
  const [todos, setTodos] = useState(getInitialTodos()); // eslint-disabled-line

  useEffect(() => {
    // storing todos items
    const temp = JSON.stringify(todos);
    localStorage.setItem('todos', temp);
  }, [todos]);

  const handleChange = (id) => {
    setTodos((prevState) => prevState.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          completed: !todo.completed,
        };
      }
      return todo;
    }));
  };

  const delTodo = (id) => {
    setTodos([...todos.filter((todo) => todo.id !== id)]);
  };

  const addTodoItem = (title) => {
    const newTodo = {
      id: uuidv4(),
      title,
      completed: false,
    };
    setTodos([...todos, newTodo]);
  };

  const setUpdate = (updatedTitle, id) => {
    setTodos((prevState) => prevState.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          title: updatedTitle,
        };
      }
      return todo;
    }));
  };

  return (
    <>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={(
            <div className="container">
              <Header />
              <InputTodo addTodoItem={addTodoItem} />
              <TodosList
                todos={todos}
                handleChangeProps={handleChange}
                deleteTodoProps={delTodo}
                setUpdate={setUpdate}
              />
            </div>
          )}
        />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotMatch />} />
      </Routes>
    </>
  );
};

export default TodoContainer;
