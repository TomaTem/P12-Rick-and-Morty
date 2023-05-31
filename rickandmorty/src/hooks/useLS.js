import {useEffect, useReducer} from 'react';
import {reducer} from '../reducers/reducer';

export function useLocalStorage(key, initialValue) {
  const [state, dispatch] = useReducer(reducer, initialValue, () => {
    let savedValue;
    try {
      savedValue = JSON.parse(
        window.localStorage.getItem(key) || String(initialValue)
      );
      if (!Array.isArray(savedValue.listRight) || !Array.isArray(savedValue.listWrong)) {
        savedValue = initialValue;
      }
    } catch (error) {
      savedValue = initialValue;
    }
    return savedValue;
  });
  useEffect(
    () => window.localStorage.setItem(key, JSON.stringify(state)),
    [key, state]
  );
  return [state, dispatch];
}
