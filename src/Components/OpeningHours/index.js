import Footer from "../Footer"
import Header from "../Header"
import './index.css'

const OpeningHours = () => {
    return(
        <>
            <Header/>
            <div className="container">
                <h1 className="heading">Opening Hours</h1>
                <p className="description">Here you can see opening hours for our library</p>
                <p className="description">Monday To Friday</p>
                <p className="description">10 AM to 7 PM</p>
                <p className="description">On weekend we are closed</p>
            </div>
            <Footer/>
        </>
    )
}

export default OpeningHours