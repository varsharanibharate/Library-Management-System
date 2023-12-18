import { Component } from "react";

import Popup from 'reactjs-popup'
import {IoMdClose} from 'react-icons/io'
import 'reactjs-popup/dist/index.css'

import {
 
  ModalContainer,
 
  CloseButton,
} from './styledComponents'

import "./index.css"

class Header extends Component {
  render() {
    return(
      <div className="header-conteiner">
          <div className="upper-header-container">
            <div className="left-header">
              <img src="https://designerapp.officeapps.live.com/designerapp/Media.ashx/?id=bec6264c-808f-423a-ab70-e634592e46ec.gif&fileToken=6cad1a23-f885-44bf-a2eb-3b7baff60996&dcHint=WestEurope" 
              alt="logo" className="logo"/>
              <h1 className="logo-heading">Digital Library</h1>
            </div>
            <div className="right-header">
              <p className="right-header-text">Opening Hours</p>
              <p className="right-header-text">Language</p>
            </div>
            <div className="popup-container">
            <Popup
              modal
              trigger={
                <button type="button" className="login-button">
                  Login
                </button>
              }
              className="popup-content"
            >
              {close => (
                <ModalContainer>
                    
                      <CloseButton
                        type="button"
                        data-testid="closeButton"
                        onClick={() => close()}
                      >
                        <IoMdClose size={20} color="#231f20" />
                      </CloseButton>
                
                    <form>
                      <h1 className="form-heading">Log In</h1>
                      <label htmlFor="email" className="label">Email:</label><br />
                      <input
                        type="email"
                        id="email"
                        className="input"
                        placeholder="Enter Email"
                        required
                      /> <br />

                      <label htmlFor="password" className="label" >Password:</label><br />
                      <input
                        type="password"
                        id="password"
                        className="input"
                        placeholder="Enter Password"
                        required
                      />
                      <br />
                      <button type="submit" className="submit-button">Submit</button>
                      {/* <p>New to library? Register Account</p> */}
                      <div className="popup-container">
                        <Popup
                          modal
                          trigger={
                            <p className="form-text">
                              New to library? Sign up to register
                            </p>
                          }
                          className="popup-content"
                        >
                          {close => (
                            <ModalContainer>
                                
                                  <CloseButton
                                    type="button"
                                    data-testid="closeButton"
                                    onClick={() => close()}
                                  >
                                    <IoMdClose size={20} color="#231f20" />
                                  </CloseButton>
                            
                                <form>
                                  <h1 className="register-form-heading">Register</h1>
                                  <label htmlFor="firstname" className="register-label">Full Name:</label><br />
                                  <input
                                    type="firstname"
                                    id="firstname"
                                    className="register-input"
                                    placeholder="Enter First Name"
                                    required
                                  /> <br />

                                  <label htmlFor="lastname" className="register-label" >Last Name:</label><br />
                                  <input
                                    type="lastname"
                                    id="lastname"
                                    className="register-input"
                                    placeholder="Enter Last Name"
                                    required
                                  />
                                  <br />
                                  <label htmlFor="contactnumber" className="register-label" >Contact Number:</label><br />
                                  <input
                                    type="contactnumber"
                                    id="contactnumber"
                                    className="register-input"
                                    placeholder="Enter Contact Number"
                                    required
                                  />
                                  <br />
                                  <label htmlFor="email" className="register-label">Email:</label><br />
                                  <input
                                    type="email"
                                    id="email"
                                    className="register-input"
                                    placeholder="Enter Email"
                                    required
                                  /> <br />

                                  <label htmlFor="password" className="register-label" >Password:</label><br />
                                  <input
                                    type="password"
                                    id="password"
                                    className="register-input"
                                    placeholder="Enter Password"
                                    required
                                  />
                                  <br />
                                 
                                  <button type="submit" className="register-submit-button">Submit</button>
                                  
                                </form>
                            </ModalContainer>
                          )}
                        </Popup>
                      </div>
                    </form>
                </ModalContainer>
              )}
            </Popup>
            </div>
          
              
          </div>
          {/* <div className="lower-header-container">
            <p className="lower-header-text">Start Page</p>
            <p className="lower-header-text">Our Libraries</p>
            <p className="lower-header-text">Event</p>
            <p className="lower-header-text">Using the library</p>
            <p className="lower-header-text">Tips from us</p>
            <div className="header-search-container">
              <BsSearch className="header-search-icon" />
              <p className="lower-header-text">Search</p>
            </div>
            
          </div> */}
      </div>
    )
  }
}

export default Header