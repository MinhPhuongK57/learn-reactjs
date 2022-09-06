import React, { useState } from 'react';
import PropTypes from 'prop-types';
import TodoList from './components/TodoList';
import './styles.scss';

TodoFeature.propTypes = {
  initTodoList: PropTypes.array.isRequired,
};
TodoFeature.defaultProps = {
  initTodoList: [],
};

function TodoFeature(props) {
  const initTodoList = [
    { id: 1, title: 'Ăn Sáng xong code', status: 'completed' },
    { id: 2, title: 'Ăn Trưa xong code', status: 'new' },
    { id: 3, title: 'Ăn Tối xong code', status: 'new' },
  ];

  const [todoList, setTodoList] = useState(initTodoList);

  const [filterStatus, setFilterStatus] = useState('all');

  const handleTodoClick = (todo, index) => {
    const newTodoList = [...todoList];

    console.log(todo, index, newTodoList[index].status);

    newTodoList[index] = {
      ...newTodoList[index],
      status: newTodoList[index].status === 'new' ? 'completed' : 'new',
    };
    setTodoList(newTodoList);
  };

  const handleShowAllClick = () => {
    setFilterStatus('all');
  };

  const handleShowCompletedClick = () => {
    setFilterStatus('completed');
  };

  const handleShowNewClick = () => {
    setFilterStatus('new');
  };

  const renderedTodoList = todoList.filter((todo) => filterStatus === 'all' || filterStatus === todo.status);
  //   console.log(renderedTodoList);
  return (
    <>
      <h2>TodoList</h2>
      <TodoList todoList={renderedTodoList} onTodoClick={handleTodoClick} />
      <div>
        <button onClick={handleShowAllClick}>Show All</button>
        <button onClick={handleShowCompletedClick}>Show Completed</button>
        <button onClick={handleShowNewClick}>Show New</button>
      </div>
    </>
  );
}
export default TodoFeature;
