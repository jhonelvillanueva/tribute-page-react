import React from 'react';
import './App.css';
import Crew from './components/Crew.js';

const App = () => {
	return (
		<div className='container'>
			<div className='about-author'>
				<div className='author-name'>
					<h1 id='title'>Eiichiro Oda</h1>
				</div>
				<div className='author-description'>
					<figure>
						<img src={require('./images/oda_image.jpg')} alt='Eiichiro Oda' />
					</figure>
					<p>
						<strong>Eiichiro Oda</strong>
						(Japanese: 尾田 栄一郎, Hepburn: Oda Eiichirō, born January 1, 1975)
						is a Japanese manga artist and the creator of the series One Piece
						(1997-present). With more than 490 million tankōbon copies in
						circulation worldwide, One Piece is both the best-selling manga in
						history and the best-selling comic series printed in volume, in turn
						making Oda one of the best-selling fiction authors. The series'
						popularity resulted in Oda being named one of the manga artists that
						changed the history of manga.
					</p>
				</div>
			</div>
			<div className='famous-work'>
				<h2 className='famous-work-title'>Famous Work</h2>
				<img
					src={require('./images/one_piece_logo.png')}
					alt='One Piece logo'
				/>
				<p>
					The series focuses on Monkey D. Luffy, a young man made of rubber,
					whom, inspired by his childhood idol, the powerful pirate Red-Haired
					Shanks, sets off on a journey from the East Blue Sea to find the
					mythical treasure, the One Piece, and proclaim himself the King of the
					Pirates.
				</p>
			</div>
			<div className='crew-container'>
				<h2>Meet the Straw Hats</h2>
				<Crew />
			</div>
			<div className='wiki-link-container'>
				<p className='wiki-link'>
					For more information, you can find out more in his{' '}
					<a
						href='https://en.wikipedia.org/wiki/Eiichiro_Oda'
						target='_blank'
						rel='noopener noreferrer'>
						Wikipedia Entry
					</a>
				</p>
			</div>
		</div>
	);
};

export default App;
