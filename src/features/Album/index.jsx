import React from 'react';
import PropTypes from 'prop-types';
import AlbumList from './components/AlbumList/AlbumList';

Album.propTypes = {

};

function Album(props) {
	const albumList = [
		{
			id: 1,
			name: 'Đừng Lo Nhé! Có Anh Đây',
			thumbnail: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/f/7/d/2/f7d2ad2e4354ea922b79d9e061a8a8bd.jpg'
		},
		{
			id: 2,
			name: 'Sao Cũng Được',
			thumbnail: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/0/a/9/e/0a9e43f3bc9346957f2750d2f1c0fb32.jpg'
		},
		{
			id: 3,
			name: 'Tòng Phu',
			thumbnail: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/b/0/7/4/b074234c204669ca3d6dfa78de29ceb6.jpg'
		}
	];

	return (
		<div>
			<AlbumList albumList={albumList}/>
		</div>
	);
}

export default Album;