import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Addtodo from './components/Addtodo';
import Todoitems from './components/Todoitems';
import Welcomemessage from './components/Welcomemessage';
import Appheading from './components/Appheading';



function App(){  
  const [ todoitems , setTodoitems] = useState([]);
  const [mode , setMode] = useState(false);
  const handleNewItem = (itemName , itemDate) => {
    const newTodoitems = [
      ...todoitems , 
      { name : itemName , date : itemDate },
    ];
    setTodoitems(newTodoitems);

  };
  const handleDeleteItem = (todoitemName) => {
    const  newTodoitems = todoitems.filter(item => item.name !== todoitemName);
    setTodoitems(newTodoitems);
  };
  const handleDarkMode = () => {
    
  }
  return (
    <div className="App" onChange={handleDarkMode}>
    <Navbar />
    <Appheading></Appheading>
    <Addtodo onNewItem={handleNewItem}/>
    {todoitems.length === 0 && <Welcomemessage></Welcomemessage>}
    <Todoitems todoitems={todoitems} onDeleteClick={handleDeleteItem}/>
    <Footer />
    </div> 
  );
}
export default App;