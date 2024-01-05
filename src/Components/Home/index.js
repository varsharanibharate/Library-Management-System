import {Component,React} from 'react'
import Footer from '../Footer'
import Header from '../Header'
import './index.css'

const eventList = [
  {id: 1, name: 'Winter writing with the writing circle', date: 'Mon 8 Jan 2024 09:00 - 12:00', image: 'https://api.axiell.com/assets/api/assets/652664c38094f32abf6290b3?size=MEDIUM'},
  {id: 2, name: 'Library', date: 'Mon 8 Jan 2024 14:00 - 16:00', image: 'https://api.axiell.com/assets/api/assets/64df24ca8094f32abf618d14?size=MEDIUM'},
  {id: 3, name: 'Knitting cafe', date: 'Mon 8 Jan 2024 16:00 - 19:00', image: 'https://api.axiell.com/assets/api/assets/647618e28094f30ccf29b9cf?size=MEDIUM'},
  {id: 4, name: 'Short Story + Art', date: 'Tue 9 Jan 2024 10:00 - 11:30', image: 'https://api.axiell.com/assets/api/assets/65659a7e589bdd03e03f4f19?size=MEDIUM'},
  {id: 5, name: 'The library of the future', date: 'Tue 9 Jan 2024 16:00 - 17:00', image: 'https://api.axiell.com/assets/api/assets/64ef07408094f32abf61d554?size=MEDIUM'},
  {id: 6, name: 'Fika', date: 'Tue 9 Jan 2024 12:00 - 14:00', image: 'https://api.axiell.com/assets/api/assets/64649d298094f30ccf2982fd?size=MEDIUM'},
]

class Home extends Component {
  render() {
    return(
      <>
        <Header />
        <h1 className='heading'>Event</h1>
        <ul>
          {eventList.map(event => (
            <li key={event.id}>
              <div className='event-card-container'>
                <img src={event.image} alt='cover' className='image'/>
                <p className='name'>{event.name}</p>
                <p className='date'>{event.date}</p>
            
              </div>
            </li>
          ))}
        </ul>
        <Footer />
      </>
    )
  }
}

export default Home