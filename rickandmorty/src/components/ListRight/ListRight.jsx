import React from 'react';
import Cards from '../Cards/Cards';
import { useSelector } from 'react-redux';

export default function ListRight() {
  const {listRight} = useSelector((store) => store.mainStore)

  return (
    <>
      <Cards list= {listRight} />
    </>
  );
}