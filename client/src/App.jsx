import React, { Component } from 'react';
import './App.css';
import Inputs from './components/input'
import Outputs from './components/output'

class App extends Component {
  render() { 
    return (
      <div>
        <nav className="navbar navbar-light bg-secondary">
          <div className="container-fluid">
            <a className="navbar-brand text-light fw-bold" href="/">Peaceful Sea</a>
            <button type="button" class="navbar-brand text-light btn btn-lg fst-italic" data-bs-toggle="modal" data-bs-target="#about-us">About us</button>
            <div class="modal fade" id="about-us" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
              <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                <div class="modal-content">
                  <div class="modal-header bg-info">
                    <h5 className="heading-3">Peaceful Sea <small className="fs-6 fst-italic fw-light"> A stress reliver app</small></h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div class="modal-body">
                    <p>Welcome to Peaceful Sea - A stress reliver app. Here you can see and send your messages to the cloud and find many others who are also equally as stressed as you.</p>
                    <p>The app is not just meant for people who are stressed but also for people who are happy to help others in stress or anger. If anyone sends any message to the cloud, his/her identity will remain anonymous and other people will find that message in the message box and help them if they find a stressful message from an anonymous person or they can send a message, sharing their feelings so that they will feel less burdened.</p>
                    <p>However, it is recommended that the messages should be kept PG and a sincere request to everyone to not share any of their personal details, like phone number or bank info, in the messages.</p>
                    <h3 className="fw-bold fst-italic">Happy texting!!!</h3>
                  </div>
                  <div class="modal-footer">
                    <button type="button" class="btn btn-info" data-bs-dismiss="modal">Okay, I agree</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
        <div className="container mt-4">
          <div className="alert alert-info alert-dismissible">Before you move on to using this app, it is a humble request to read from the "About us" tab above.<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>
          <Inputs/>
          <Outputs/>
        </div>
      </div>
    );
  }
}
 
export default App;
