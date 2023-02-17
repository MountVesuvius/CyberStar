import React, { useEffect, useRef } from 'react';
import { randInt, pointDistance } from '../Tools';

import Block from './Block';

const BlockGallery = () => {

	const blockPointArray = [];
	const blockStorageArray = [];

	const MAX_WIDTH = 100;
	const MAX_DISTANCE = 300;

	function isPointOutside(pointArray, newPoint, range) {
		pointArray.forEach((element) => {
			if (pointDistance([element[0], element[1]], newPoint) < range) {
				return false;
			} 
		});
		return true;
	}

	for (let i = 0; i < 4; i++) {
		const width = randInt(MAX_WIDTH);
		const height = randInt(MAX_WIDTH);

		while(true) {
			const x = randInt(0, 700);
			const y = randInt(0, 700);
			if (isPointOutside(blockPointArray, [x, y], MAX_DISTANCE) === true) {
				blockPointArray.push([x, y, width, height]);
				break;
			}
		}
	}

	blockPointArray.forEach((e) => {
		blockStorageArray.push(
			<Block 
				xPos={e[0]} yPos={e[1]}
				width={e[2]} height={e[3]}
			/>
		)
	})

	return (
		<div className="block-gallery">
			{blockStorageArray}
		</div>	
	)
}

export default BlockGallery;

/*
do N times
{
start:
  x = rand(0, width)
  y = rand(0, height)
  for each other point, p
    if distance(p.x, p.y, x, y) < radius * 2
      goto start
  add_point(x, y);
}
*/