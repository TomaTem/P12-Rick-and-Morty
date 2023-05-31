import React from 'react';
import {Link} from 'react-router-dom';
import {useContext} from 'react';
import {globalContext} from '../../contexts/globalContext';

export default function Restart() {
  const {dispatch} = useContext(globalContext);

  return (
    <>
      <div className='d-grid gap-2 d-md-flex justify-content-md-end'>
        <Link to='/'>
          <button
            type='button'
            className='btn btn-light my-1 mx-3'
            onClick={() => dispatch({
              type: 'DELETE_RESULTS',
            })}>
            Сбросить результаты
          </button>
        </Link>
      </div>
    </>
  );
}
