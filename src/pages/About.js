import React, { Component } from 'react';
import "./About.css";
import pfp from "../assets/pfp.jpg";
import Footer from "../component/footer.js";
  
export default class About extends Component {
  render() {
    return (
      <div className="about">
        <div className="content">
          <div className="split left">
            <div className="centered">
              <img 
                  className="profile_image"
                  alt="Profile Pic"
                  src={pfp}
              ></img>
            </div>
          </div>
          <div className="split right">
            <div className="centered">
              <div className="name_title">Michael Crabb</div>
              <div className="brief_description">
                Hello! My name is Michael Crabb and I am a student at the University of Oklahoma in Norman, Oklahoma. I
                study computer science and mathematics and feel so privileged to be here with you all. My interests vary,
                I am insanely captivated by the Earth, I have many plans of traveling the world and seeing how it can
                surprise me next and I enjoy playing video games with my friends.
              </div>
            </div>
          </div>
        </div>
        <Footer/> {this.footer}
      </div>
    )
  }
}