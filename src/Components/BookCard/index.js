import { Link } from "react-router-dom"
import './index.css'


const BookCard = (props) => {
  const {bookData} = props
  const {coverImageURL, title, author, publishedYear} = bookData
 
    return(
        <li>
            <Link className ="link-item">
                <div className='book-container'>
                <img src={coverImageURL} alt='cover' className='thumbnail'/>
                <p className='title'>{title}</p>
                <p className='author'>{author}</p>
                <p className='published-year'>Published Year: {publishedYear}</p>
                <button className="borrow-button">Borrow</button>
                </div>
            </Link>
        </li>
    )
}

export default BookCard