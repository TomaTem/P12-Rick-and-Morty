import React from 'react';
import {useEffect, useState} from 'react';

export default function Cards() {
  const [character, setCharacter] = useState([]);

  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character/78')
      .then(data => data.json())
      .then(res => setCharacter(res));
  }, []);

  console.log(character);
  const [gender, setGender] = useState(character.gender);
  console.log(gender);

  switch (gender) {
    case 'Female':
      setGender('Женский');
      break;
    case 'Male':
      setGender('Мужской');
      break;
    case 'Genderless':
      setGender('Бесполый');
      break;
    case 'Unknown':
      setGender('Неизвестно');
      break;
    default:
      break;
  }
  console.log(gender);

  // console.log(character.origin.name);
  return (
    <>
      <div className='container my-3'>
        <div className='row row-cols-1 row-cols-md-4 g-4'>
          <div className='col'>
            <div className='card h-100'>
              <img
                src={character.image}
                className='card-img-top listImg'
                alt='Изображение персонажа'
              />
              <div className='card-body'>
                <h5 className='card-title'>{character.name}</h5>
                <p className='card-text'>
                  Место происхождения: {character.origin.name}, последний раз был замечен: {character.location.name}.
                </p>
              </div>
              <ul className='list-group list-group-flush'>
                <li className='list-group-item'>Пол: {gender}</li>
                <li className='list-group-item'>Статус: {character.status}</li>
                <li className='list-group-item'>Вид: {character.species}</li>
                <li className='list-group-item'>Количество эпизодов, в которых встречается: {character.episode.length}</li>
              </ul>
            </div>
          </div>

          <div className='col'>
            <div className='card h-100'>
              <img
                src={character.image}
                className='card-img-top'
                alt='Изображение персонажа'
              />
              <div className='card-body'>
                <h5 className='card-title'>{character.name}</h5>
                <p className='card-text'>
                  Место происхождения: неизвестно, последний раз был замечен:
                  рамоуом.
                </p>
              </div>
              <ul className='list-group list-group-flush'>
                <li className='list-group-item'>Пол: {gender}</li>
                <li className='list-group-item'>Статус: </li>
                <li className='list-group-item'>Вид: </li>
              </ul>
            </div>
          </div>


          <div className='col'>
            <div className='card h-100'>
              <img
                src={character.image}
                className='card-img-top'
                alt='Изображение персонажа'
              />
              <div className='card-body'>
                <h5 className='card-title'>{character.name}</h5>
                <p className='card-text'>
                  Место происхождения: неизвестно, последний раз был замечен:
                  рамоуом.
                </p>
              </div>
              <ul className='list-group list-group-flush'>
                <li className='list-group-item'>Пол: {gender}</li>
                <li className='list-group-item'>Статус: </li>
                <li className='list-group-item'>Вид: </li>
              </ul>
            </div>
          </div>


          <div className='col'>
            <div className='card h-100'>
              <img
                src={character.image}
                className='card-img-top'
                alt='Изображение персонажа'
              />
              <div className='card-body'>
                <h5 className='card-title'>{character.name}</h5>
                <p className='card-text'>
                  Место происхождения: неизвестно, последний раз был замечен:
                  рамоуом.
                </p>
              </div>
              <ul className='list-group list-group-flush'>
                <li className='list-group-item'>Пол: {gender}</li>
                <li className='list-group-item'>Статус: </li>
                <li className='list-group-item'>Вид: </li>
              </ul>
            </div>
          </div>



          <div className='col'>
            <div className='card h-100'>
              <img
                src={character.image}
                className='card-img-top'
                alt='Изображение персонажа'
              />
              <div className='card-body'>
                <h5 className='card-title'>{character.name}</h5>
                <p className='card-text'>
                  Место происхождения: неизвестно, последний раз был замечен:
                  рамоуом.
                </p>
              </div>
              <ul className='list-group list-group-flush'>
                <li className='list-group-item'>Пол: {gender}</li>
                <li className='list-group-item'>Статус: </li>
                <li className='list-group-item'>Вид: </li>
              </ul>
            </div>
          </div>




          <div className='col'>
            <div className='card h-100'>
              <img
                src={character.image}
                className='card-img-top'
                alt='Изображение персонажа'
              />
              <div className='card-body'>
                <h5 className='card-title'>{character.name}</h5>
                <p className='card-text'>
                  Место происхождения: неизвестно, последний раз был замечен:
                  рамоуом.
                </p>
              </div>
              <ul className='list-group list-group-flush'>
                <li className='list-group-item'>Пол: {gender}</li>
                <li className='list-group-item'>Статус: </li>
                <li className='list-group-item'>Вид: </li>
              </ul>
            </div>
          </div>




          <div className='col'>
            <div className='card h-100'>
              <img
                src={character.image}
                className='card-img-top'
                alt='Изображение персонажа'
              />
              <div className='card-body'>
                <h5 className='card-title'>{character.name}</h5>
                <p className='card-text'>
                  Место происхождения: неизвестно, последний раз был замечен:
                  рамоуом.
                </p>
              </div>
              <ul className='list-group list-group-flush'>
                <li className='list-group-item'>Пол: {gender}</li>
                <li className='list-group-item'>Статус: </li>
                <li className='list-group-item'>Вид: </li>
              </ul>
            </div>
          </div>




        </div>
      </div>
    </>
  );
}
