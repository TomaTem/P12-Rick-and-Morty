import React from 'react';
import {useState, useEffect} from 'react';

export default function Quiz() {
  const [character, setCharacter] = useState([]);

  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character/83')
      .then(data => data.json())
      .then(res => setCharacter(res));
  }, []);

  function checkAnswer(answer) {
    if (answer === character.gender) {
      alert('Верно!');
    } else {
      alert('Неверно!');
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
              onClick={() => checkAnswer('Unknown')}>
              Неизвестно
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
