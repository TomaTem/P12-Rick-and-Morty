import React from 'react';
import winGif from '../Gifs/1_1.gif';
import loseGif from '../Gifs/2_4.gif';
import evenGif from '../Gifs/2_2.gif';
import {useSelector} from 'react-redux';

export default function Results() {
  const {listRight, listWrong} = useSelector(store => store.mainStore);
  const score = listRight.length - listWrong.length;
  let image, text, quote, author;

  if (score > 0) {
    image = winGif;
    text = 'Поздравляю! Ты победитель!';
    quote = `Послушайте, я не самый хороший человек во Вселенной. Потому что я умный. А хорошими становятся только глупые люди, чтобы подстраховаться.`;
    author = `РИК САНЧЕЗ`;
  } else if (score === 0) {
    image = evenGif;
    text = 'Ты не выиграл... Но и не проиграл!';
    quote =
      'Никто не существует по определенной причине, никто ни к чему не привязан, все однажды умрут, пойдем посмотрим телик.';
    author = 'МОРТИ СМИТ';
  } else {
    image = loseGif;
    text = 'Жаль, но ты проиграл. Попробуй еще раз!';
    quote =
      'Не могу поверить что Снафл стал таким злым, только потому, что поумнел. Поэтому я — троечница.';
    author = `САММЕР СМИТ`;
  }

  return (
    <>
      <div className='container my-4'>
        <h5 className='cardTitle'>{text}</h5>
        <div className='card'>
          <div className='row g-0'>
            <div className='col-md-4'>
              <img
                src={image}
                alt='Гифка'
                className='img-fluid rounded-start'
              />
            </div>
            <div className='col-md-8 cardResultOut'>
              <div className='card-body cardResult'>
                <p className='card-text cardText'>{quote}</p>
                <p className='card-text cardText'>{author}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
