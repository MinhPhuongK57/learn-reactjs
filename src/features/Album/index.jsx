import React from 'react';
import PropTypes from 'prop-types';
import AlbumList from './components/AlbumList';
import './styles.scss';
AlbumFeature.propTypes = {
  albumList: PropTypes.array,
};
AlbumFeature.defaultProps = {
  albumList: [],
};

function AlbumFeature() {
  const albumList = [
    {
      id: 1,
      name: 'MinhPhuong 1',
      thumbnailUrl:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
    },
    {
      id: 2,
      name: 'MinhPhuong 2',
      thumbnailUrl:
        'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
    },
    {
      id: 3,
      name: 'MinhPhuong 3',
      thumbnailUrl:
        'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80',
    },
  ];
  return (
    <div className="container">
      <h1>AlbumList</h1>
      <AlbumList albumList={albumList} />
    </div>
  );
}

export default AlbumFeature;
