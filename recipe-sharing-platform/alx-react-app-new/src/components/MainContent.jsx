import React from 'react';

function MainContent() {
  return (
    <main style={{ padding: '20px', backgroundColor: '#eef2f3', minHeight: '200px' }}>
      <h2 style={{ textAlign: 'center', color: 'darkslategray' }}>Welcome to My Travel Blog</h2>
      <p style={{ lineHeight: '1.6', fontSize: '16px' }}>
                I love to visit New York, Paris, and Tokyo.
        Here, I share my favorite cities, travel experiences, and recommendations. 
        Traveling allows me to explore new cultures, cuisines, and meet amazing people.
      </p>
    </main>
  );
}

export default MainContent;
