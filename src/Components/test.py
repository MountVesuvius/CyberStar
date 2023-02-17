'''
Using this to figure out block placement.
Gotta get my brain around it.
'''


from random import randint
from math import sqrt

def distance(point1, point2):
	return sqrt((point2[0] - point1[0])**2 + (point2[1] - point1[1])**2)

pointArray = []
for i in range(5):
	newPoint = [randint(1, 10), randint(1,10)]

	if len(pointArray) < 1:
		pointArray.append(newPoint)
		continue

	for e in pointArray:
		if distance(e, newPoint) > 5:
			pointArray.append(newPoint)


a = [randint(1, 10), randint(1,10)]
b = [randint(1, 10), randint(1,10)]
print(a, b)
print(distance(a, b))

