import React from 'react';
import Quiz from '../Quiz/Quiz';
import CounterRight from '../CounterRight/CounterRight';
import CounterWrong from '../CounterWrong/CounterWrong';

export default function Main() {
  return (
    <main className='container mt-5 main'>
      <div><CounterRight /></div>
      <div><Quiz /></div>
      <div><CounterWrong /></div>
    </main>
  );
}