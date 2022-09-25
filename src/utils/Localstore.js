export const setInLocal = (token) => {
	const setItem = localStorage.setItem("token", token);
	console.log(setItem);
};
