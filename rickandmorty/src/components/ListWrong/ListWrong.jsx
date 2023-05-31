import React from 'react';
import Cards from '../Cards/Cards';
import {useContext} from 'react';
import {globalContext} from '../../contexts/globalContext';

export default function ListRight() {
  const {state} = useContext(globalContext);

  return (
    <>
      <Cards list= {state.listWrong} />
    </>
  );
}
