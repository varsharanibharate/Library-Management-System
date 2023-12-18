import {Component,React} from 'react'

import Header from '../Header'
import {BsSearch} from 'react-icons/bs'
import './index.css'

class Home extends Component{
    state = {
        searchInput: ''
    }


    onChangeSearchInput = event => {
        this.setState({searchInput: event.target.value})
      }

    renderSearchInput = () => {
        const {searchInput} = this.state
        return (
          <div className="search-input-container">
            <input
              placeholder="Search books, movies, music...."
              type="search"
              value={searchInput}
              onChange={this.onChangeSearchInput}
              className="search-input"
            />
            <button
              onClick={this.onClickSearch}
              className="search-btn"
              testid="searchButton"
              type="button"
            >
             <BsSearch className="search-icon" /> 
            </button>
          </div>
        )
      }

    render() {
        return (
            <div className="main-container">
                <Header />
                <div>
                    {this.renderSearchInput()} 
                    
                </div>
                            
            </div>
        )
    }
}

export default Home