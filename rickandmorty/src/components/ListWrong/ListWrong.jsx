import React from 'react';
import Cards from '../Cards/Cards';
import { useSelector } from 'react-redux';

export default function ListWrong() {
  const {listWrong} = useSelector((store) => store.mainStore)
  
  return (
    <>
      <Cards list= {listWrong} />
    </>
  );
}
