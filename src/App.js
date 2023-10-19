import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import "./App.css";
import ContactForm from "./components/ContactForm";
import { MDBContainer, MDBRow, MDBCol } from "mdb-react-ui-kit";
import shantanu from '../src/me.jpg'


const Card = () => {
  return (
    <div>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
      />
      <div class="page shadow">
        <div class="main-container shadow">
          <MDBContainer>
            <br />
            <br />
            <MDBRow>
              <MDBCol sm={12} md={4}>
                <div class="container">
                  <img
                    src={shantanu}
                    alt="John"
                    style={{ width: "65%", }}
                  />
                  <br />
                  <a href="#">
                    <i className="fa fa-twitter" />
                  </a>
                  <a href="#">
                    <i className="fa fa-linkedin" />
                  </a>
                  <a href="#">
                    <i className="fa fa-facebook" />
                  </a>
                </div>
              </MDBCol>

              <MDBCol>
                <div class="container">
                  <h2>Shantanu Saraf</h2>
                  <p>VESIT</p>
                  <p>Chembur,Maharastra,India</p>
                </div>

                <hr />

                <MDBContainer>
                  <MDBRow>
                    <MDBCol sm={2} lg={2} md={2}>
                      <h6 className="m-4">Bio </h6>
                    </MDBCol>
                    <MDBCol>
                      <p class="bio">
                       
                        As an Engineering student from Mumbai, I have always
been passionate about learning new languages. With a
natural ability to quickly grasp new concepts, I love
immersing myself in different languages and cultures.
In my free time, I enjoy playing badminton and table
tennis, which not only helps me stay active but also
relieves stress. Additionally, I have a keen interest in
online gaming, particularly Valorant, which allows me
to connect with players from around the world. When it
comes to my academic work and projects, I am
dedicated and committed to achieving the best results
possible. I am constantly seeking new opportunities to
learn and grow, and to make a positive impact on day-to-day life
                      </p>
                    </MDBCol>
                  </MDBRow>
                </MDBContainer>
                <br />
                <br />
                <div class="container">
        <h6>Contact Me</h6>
        <ContactForm />
      </div>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </div>
        

      
      </div>
    </div>
    
  );
};
export default Card;
