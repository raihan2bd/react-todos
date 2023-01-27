import React, { useState } from 'react';
import { FaPlusCircle } from 'react-icons/fa';
import PropTypes from 'prop-types';

const InputTodo = ({ addTodoItem }) => {
  const [inputText, setInputText] = useState({
    title: '',
  });

  const onChange = (e) => {
    setInputText({
      ...inputText,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputText.title.trim()) {
      addTodoItem(inputText.title);
      setInputText({
        title: '',
      });
    } else {
      alert('Please write item'); // eslint-disabled-line
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <input
        type="text"
        className="input-text"
        placeholder="Add todo..."
        value={inputText.title}
        name="title"
        onChange={onChange}
      />
      <button type="submit" className="input-submit">
        <FaPlusCircle
          style={{ color: 'darkcyan', fontSize: '20px', marginTop: '2px' }}
        />
      </button>
    </form>
  );
};

InputTodo.propTypes = {
  addTodoItem: PropTypes.func.isRequired,
};

export default InputTodo;
