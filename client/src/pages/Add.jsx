import React, { useState } from 'react';
import {useNavigate, Link} from 'react-router-dom';
import axios from 'axios';
const Add = () => {
  const [book, setBook] = useState({
    title: "",
    desc: "", price: null, cover: ""
  })
  const navigate = useNavigate();
  const handleChange = (e) => {
    setBook(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }
  const [error,setError] = useState(false)
  const handleClick = async(e)=>{
    e.preventDefault();
    try {
      await axios.post("http://localhost:8800/books",book)
      navigate("/")
    } catch (error) {
      console.log(error);
      setError(true);
    }

  }
  return (
    <div className='form'>
      <h1>Add new Book</h1>
      <input type="text" placeholder='title' onChange={handleChange} name='title' />
      <input type="text" placeholder='desc' onChange={handleChange} name='desc' />
      <input type="number" placeholder='price' onChange={handleChange} name='price' />
      <input type="text" placeholder='cover' onChange={handleChange} name='cover' />
      <button onClick={handleClick}>Add</button>
      {error && "Something went wrong!"}
      <Link to="/">See all books</Link>
    </div>
  );
}

export default Add;
