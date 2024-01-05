import React, {useState, useEffect} from 'react';
import axios from 'axios';
import BookCard from '../BookCard';
import Header from '../Header';
import Footer from '../Footer';
import './index.css'

function Books() {
  const [data, setData] = useState([]);
  const [category, setCategory] = useState('All');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios({
          method: 'get',
          url: `https://localhost:7268/api/Books`,
          withCredentials: false,
        });
        console.info(response.data)
        setData(response.data);
        } catch(error) {
          console.error('Error fetching data:', error);
        }
        };
        fetchData();
    }, []);

    const handleCategoryChange = (e) => {
      setCategory(e.target.value);
    };
  
    const getFilteredBooks = data.filter((book) => {
      return (
        book.category === category);
    });
    
    console.log(getFilteredBooks)
 
    const filteredBooks =  data.filter((book) => {
      if(category=== "All")
        {return book;}
      else{
        return (
          book.category === category);
      }});
    
      return(
      <>
        <Header/>
        <div>
          <select onChange={handleCategoryChange} className='dropdown'>
            <option value="All">Select Category</option>
            <option value="Kids">Kids</option>
            <option value="Story">Story</option>
            <option value="Action And Adventure">Action And Adventure</option>
            <option value="Thrillers">Thrillers</option>
            <option value="Economics">Economics</option>
            <option value="Trending Book">Trending Book</option>
            <option value="Romance">Romance</option>
          </select>
          <ul >
            {filteredBooks.map(item => (
              <BookCard bookData={item} key={item.id}  /> 
              
            ))}
          </ul>
        </div>
        <Footer/>
      </>
    )
}

export default Books;