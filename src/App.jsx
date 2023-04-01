import React from 'react';
import Header from './components/Header/Header';
import Card from './components/Card/Card';
import Blog from './components/Blog/Blog';

const App = () => {
  return (
    <div className='container mx-auto'>
      <Header></Header>
      <hr className='mt-2 border-2' />
      <Card></Card>
      <Blog></Blog>
    </div>
  );
};

export default App;