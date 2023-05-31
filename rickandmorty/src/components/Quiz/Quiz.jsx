import React from 'react';
import {useEffect, useContext} from 'react';
import {globalContext} from '../../contexts/globalContext';

export default function Quiz() {
  const {state, dispatch} = useContext(globalContext);

  useEffect(() => {
    const random = Math.ceil(Math.random() * 826);
    fetch(`https://rickandmortyapi.com/api/character/${random}`)
      .then(data => data.json())
      .then(res => dispatch({
        type: 'SAVE_CURRENT_CHARACTER',
        payload: res,
      }));
  }, [state.listRight, state.listWrong]);

  function checkAnswer(answer) {
    if (answer === state.character.gender) {
      dispatch({
        type: 'ADD_RIGHT_ANSWER',
        payload: state.character,
      })
    } else {
      dispatch({
        type: 'ADD_WRONG_ANSWER',
        payload: state.character,
      })
    }
  }

  return (
    <>
      <div className='quizCard'>
        <img
          src={state.character.image}
          className='quizImage'
          alt='Изображение персонажа'
        />
        <div className='question'>
          <h5 className='card-title titleQuestion'>
            Какого пола этот персонаж?
          </h5>
          <div className='d-grid gap-2 d-md-block'>
            <button
              type='button'
              className='btn answerBtn'
              onClick={() => checkAnswer('Female')}>
              Женский
            </button>
            <button
              type='button'
              className='btn answerBtn'
              onClick={() => checkAnswer('Male')}>
              Мужской
            </button>
          </div>
          <div className='d-grid gap-2 d-md-block'>
            <button
              type='button'
              className='btn answerBtn'
              onClick={() => checkAnswer('Genderless')}>
              Бесполый
            </button>
            <button
              type='button'
              className='btn answerBtn'
              onClick={() => checkAnswer('unknown')}>
              Неизвестно
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
