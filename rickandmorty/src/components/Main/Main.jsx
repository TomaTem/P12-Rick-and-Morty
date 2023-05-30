import {useState, useEffect} from 'react';
import List from '../List/List';
import React from 'react';
import Quiz from '../Quiz/Quiz';
import CounterRight from '../CounterRight/CounterRight';

export default function Main(moreUsers) {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(data => data.json())
      .then(res => setUsers(prev => [...prev, ...res]));
  }, [moreUsers]);

  return (
    <main className='container my-5 main'>
      <div><CounterRight /></div>
      <div><Quiz /></div>
      <div><CounterRight /></div>
      {/* <List users={users} setUsers={setUsers}/> */}
    </main>
  );
}