const wishReducer = (state = [], action) => {
	if (action.type === 'ADD_WISH') {
		return [...state, 'sleep'];
	}
	return state;
};

export default wishReducer;
