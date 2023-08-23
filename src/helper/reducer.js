const reducer = (state, action) => {
  switch (action.type) {
    case "Show-explore":
      return {
        ...state,
        showExplore: true,
      };
    default:
      return state;
  }
};

export default reducer