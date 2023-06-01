import React from 'react';
import {useEffect} from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import {addRightAnswerAC, addWrongAnswerAC, saveCurrentCharacterAC} from '../../store/actions/mainActions'

export default function Quiz() {
const dispatch = useDispatch();
const {character, listRight, listWrong} = useSelector((store) => store.mainStore)

  useEffect(() => {
    const random = Math.ceil(Math.random() * 826);
    fetch(`https://rickandmortyapi.com/api/character/${random}`)
      .then(data => data.json())
      .then(res => dispatch(saveCurrentCharacterAC(res)));
  }, [listRight, listWrong]);

  function checkAnswer(answer) {
    if (answer === character.gender) {
      dispatch(addRightAnswerAC(character))
    } else {
      dispatch(addWrongAnswerAC(character))
    }
  }

  return (
    <>
      <div className='quizCard'>
        <img
          src={character.image}
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
