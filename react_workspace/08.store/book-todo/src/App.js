
import {Menu,Segment} from 'semantic-ui-react';
import React,{useState} from 'react';
import BookPage from './view/BookPage';
import TodoPage from './view/TodoPage';

function App(props) {
  const [activeItem , setActivItem] =useState('');
  const handleItemClick =(e, { name }) => {
    setActivItem(name);
  }

  return (
    <>
    <Menu>
    <Menu.Item
      name='home'
      active={activeItem === 'editorials'}
      onClick={handleItemClick}
    >
      home
    </Menu.Item>

    <Menu.Item
      name='book'
      active={activeItem === 'reviews'}
      onClick={handleItemClick}
    >
      Book List
    </Menu.Item>

    <Menu.Item
      name='todo'
      active={activeItem === 'upcomingEvents'}
      onClick={handleItemClick}
    >
      Todo
    </Menu.Item>

    <Menu.Item
      name='login'
      active={activeItem === 'login'}
      onClick={handleItemClick}
      position='right'
    >
     Login
    </Menu.Item>
  </Menu>
  <Segment>
    {activeItem==="home" &&<h1>WELCOME!</h1>}
    {activeItem==="book" &&<BookPage/>}
    {activeItem==="todo" &&<h1><TodoPage/></h1>}
    {activeItem==="login" &&<h1>SING IN!</h1>}
  </Segment>
  </>
  );
}

export default App;