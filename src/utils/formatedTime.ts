export const formatedTime = (seconds: number) => {
	const minutes = Math.floor(seconds / 60);
	const secs = seconds % 60 < 10 ? `0${seconds % 60}` : seconds % 60;
	return `${minutes}:${secs}`;
};
