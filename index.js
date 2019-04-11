'use strict';

module.exports = (minimumValue, maximumValue) => {
	if (maximumValue === undefined) {
		maximumValue = minimumValue;
		minimumValue = 0;
	}

	if (typeof minimumValue !== 'number' || typeof maximumValue !== 'number') {
		throw new TypeError('Expected all arguments to be numbers');
	}

	return (Math.random() * (maximumValue - minimumValue)) + minimumValue;
};
