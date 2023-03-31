import React from 'react';
import Header from './components/Header/Header';
import Card from './components/Card/Card';

const App = () => {
  return (
    <div className='container mx-auto'>
      <Header></Header>
      <hr className='mt-2' />
      <Card></Card>
    </div>
  );
};

export default App;