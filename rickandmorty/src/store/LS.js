export const loadState = () => {
  try {
    let serialState = localStorage.getItem('game');
    if (serialState === null) {
      return undefined;
    }
    return JSON.parse(serialState);
  } catch (error) {
    return undefined;
  }
};

export const savedState = state => {
  try {
    const serialState = JSON.stringify(state);
    localStorage.setItem('game', serialState);
  } catch (error) {
    console.log(error);
  }
};
