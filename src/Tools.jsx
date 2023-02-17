export function randInt(min, max=min) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function pointDistance(point1, point2) {
	return Math.sqrt(Math.pow((point2[0]-point1[0]), 2) + Math.pow((point2[1]-point1[1]), 2));
}