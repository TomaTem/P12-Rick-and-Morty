import Card from '../Cards/Cards';
import React from 'react';

export default function List({users, setUsers}) {
  return (
    <>
      <ul className='list-group list-group-flush'>
        {users.map((user, i) => (
          <li
            className='list-group-item list-group-item-action'
            key={i}
            onClick={() => {
              let newUsers = users.map((el, j) => {
                if (i === j) {
                  if (!Object.hasOwn(el, 'showCard')) {
                    el.showCard = true;
                  } else {
                    el.showCard = !el.showCard;
                  }
                }
                return {...el};
              });
              setUsers(newUsers);
            }}>
            {user.name}
            <Card
              showCard={user.showCard}
              email={user.email}
              phone={user.phone}
              city={user.address.city}
              zipcode={user.address.zipcode}
            />
          </li>
        ))}
      </ul>
    </>
  );
}
