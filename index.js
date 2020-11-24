const applySystemizedStyling = async (palette) => {
	if (!palette) {
		throw new Error('You have to provide palette number between 1-14');
	}
	await import(`./palettes/palette${palette}.css`);
};

export default applySystemizedStyling;
