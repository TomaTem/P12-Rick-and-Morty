import {useEffect, useReducer} from 'react';
import {reducer} from '../reducers/reducer';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';


export function useLocalStorage(key, initialValue) {
  // const dispatch = useDispatch();
  // const {character, listRight, listWrong} = useSelector((store) => store.mainStore)

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
