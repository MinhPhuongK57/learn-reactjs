import React from 'react';
import PropTypes from 'prop-types';
import AlbumItem from '../AlbumItem';
import './styles.scss';

AlbumList.propTypes = {
  albumList: PropTypes.array,
};
AlbumList.defaultProps = { albumList: [] };

function AlbumList({ albumList }) {
  return (
    <ul className="album">
      {albumList.map((album) => (
        <AlbumItem key={album} album={album} />
      ))}
    </ul>
  );
}

export default AlbumList;
