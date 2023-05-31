import React from 'react';


export default function Cards({list}) {
  return (
    <>
      <div className='container my-3'>
        <div className='row row-cols-1 row-cols-md-4 g-4'>
          {list.map(character => (
            <div key={character.id} className='col'>
              <div className='card h-100'>
                <img
                  src={character.image}
                  className='card-img-top listImg'
                  alt='Изображение персонажа'
                />
                <div className='card-body'>
                  <h5 className='card-title'>{character.name}</h5>
                  <p className='card-text'>
                    Место происхождения:{' '}
                    {character.rus.origin || character.origin.name}, последний
                    раз был замечен:{' '}
                    {character.rus.location || character.location.name}.
                  </p>
                </div>
                <ul className='list-group list-group-flush'>
                  <li className='list-group-item'>
                    Пол: {character.rus.gender}
                  </li>
                  <li className='list-group-item'>
                    Статус: {character.rus.status}
                  </li>
                  <li className='list-group-item'>Вид: {character.species}</li>
                  <li className='list-group-item'>
                    Количество эпизодов, в которых встречается:{' '}
                    {character.episode.length}
                  </li>
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
