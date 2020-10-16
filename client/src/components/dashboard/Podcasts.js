import React from 'react';

const Podcasts = ({ podcasts, loading }) => {
  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <ul className='list-group mb-4'>
      {podcasts.map(podcasts => (
        <li key={podcasts.id} className='list-group-item'>
          <div style={{textAlign: 'left', color:'black'}}>{podcasts.name}  </div>
          <div style={{textAlign: 'right', color:'black'}}> Subscriber count: {Math.floor(Math.random() * 115) + 1}k <img height="60px" width="60px"src={podcasts.images[0].url} /></div>
        </li>
      ))}
    </ul>
  );
};

export default Podcasts;