import React, { useRef } from 'react';

const Block = ({width, height, xPos, yPos}) => {

	const BlockStyles = useRef({
		position: 'absolute',
		width: `${width}px`,
		height: `${height}px`,
		top: `${yPos}px`,
		left: `${xPos}px`,
		transform: 'translate(-50%, -50%)'
	});

	return (
		<div className="block" style={BlockStyles.current}>
			<span>Width: {width}</span>	
			<br/>
			<span>Height: {height}</span>	
			<br/>
			<span>x: {xPos} y: {yPos}</span>
		</div>
	)
}

export default Block;

/*

Might need this later

let className = 'class1';
if (this.props.isActive) {
	className += ' another-class';
}
return <span className={className}>Menu</span>
Source: https://reactjs.org/docs/faq-styling.html
*/