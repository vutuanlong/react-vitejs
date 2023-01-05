import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

AlbumList.propTypes = {
	albumList: PropTypes.array,
};

AlbumList.defaultProps = {
	albumList: [],
};

function AlbumList(props) {
	const { albumList } = props;
	return (
		<ul className='album-list'>
			{
				albumList.map( album => (
					<li key={album.id}>
						<div className='zm-card-image'>
							<img src={album.thumbnail} />
						</div>
						<h2>{album.name}</h2>
					</li>
				) )
			}
		</ul>
	);
}

export default AlbumList;