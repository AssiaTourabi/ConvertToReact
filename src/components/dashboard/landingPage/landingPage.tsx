'use client';
import React, { useEffect } from 'react';
import Head from 'next/head';

const LandingPage: React.FC = () => {
  useEffect(() => {
    let slideIndex = 1;
    showDivs(slideIndex);

    function plusDivs(n: number) {
      showDivs(slideIndex += n);
    }

    function showDivs(n: number) {
      const x = document.getElementsByClassName('mySlides') as HTMLCollectionOf<HTMLElement>;
      if (n > x.length) { slideIndex = 1 }
      if (n < 1) { slideIndex = x.length }
      for (let i = 0; i < x.length; i++) {
        x[i].style.display = 'none';
      }
      x[slideIndex - 1].style.display = 'block';
    }

    const leftArrow = document.querySelector('.fa-arrow-circle-left');
    const rightArrow = document.querySelector('.fa-arrow-right');

    if (leftArrow && rightArrow) {
      leftArrow.addEventListener('click', () => plusDivs(-1));
      rightArrow.addEventListener('click', () => plusDivs(1));
    }

    return () => {
      if (leftArrow && rightArrow) {
        leftArrow.removeEventListener('click', () => plusDivs(-1));
        rightArrow.removeEventListener('click', () => plusDivs(1));
      }
    };
  }, []);

  return (
    <>
      <Head>
        <title>Black & White</title>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
        />
      </Head>
      <div style={{
        position: 'absolute',
        backgroundColor: '#404040',
        width: '100%',
        height: '50vh',
        zIndex: -1,
      }}>
        <div style={{
          position: 'absolute',
          fontFamily: 'Montserrat, sans-serif',
          top: '40vh',
          right: '30vh',
          color: 'white',
        }}>
          Beyond World <br /> Be Your Expectation
        </div>
      </div>
      <div style={{
        position: 'absolute',
        margin: '2vh 2vh',
        width: '98%',
        height: '96vh',
        border: '5px solid black',
      }}></div>

      <div className="container" style={{ marginTop: '15vh' }}>
        <span id="logo" style={{
          fontFamily: 'Major Mono Display, monospace',
          fontSize: '10vh',
        }}>
          <span style={{ color: 'white' }}>B</span><span style={{ color: 'black', fontWeight: 'bold' }}>W</span>
        </span>

        <div className="row" style={{ marginTop: '5vh' }}>
          <div className="col-12">
            <div className="menu" style={{ textAlign: 'center', marginLeft: '6vh', fontFamily: 'Montserrat, sans-serif' }}>
              <ul>
                <li className="ml-5"><a href="#" style={{ textDecoration: 'none', color: '#BFBFBF', textTransform: 'uppercase', transition: 'ease-in-out 200ms' }}>Home</a></li>
                <li className="mr-5"><a href="#" style={{ textDecoration: 'none', color: '#BFBFBF', textTransform: 'uppercase', transition: 'ease-in-out 200ms' }}>About</a></li>
                <li><a href="#" style={{ textDecoration: 'none', color: '#BFBFBF', textTransform: 'uppercase', transition: 'ease-in-out 200ms' }}>Contact</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="row" style={{ marginTop: '5vh' }}>
          <div className="col-3">
            <div className="goLeft" style={{ position: 'absolute', color: 'white', marginTop: '10vh', right: '-30px', fontSize: '8vh', cursor: 'pointer' }}>
              <i className="fas fa-arrow-circle-left"></i>
            </div>
          </div>
          <div className="col-6">
            <div className="slider" style={{ backgroundColor: 'black', height: '450px', width: '450px', margin: '0 auto', textAlign: 'center', overflow: 'hidden', borderRadius: '50%', boxShadow: '3px 20px 25px grey' }}>
              <img className="mySlides" src="https://images.unsplash.com/photo-1520262494112-9fe481d36ec3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80" style={{ height: '450px', width: '450px', borderRadius: '50%', animation: 'zoom 30s ease-in-out alternate infinite' }} />
              <img className="mySlides" src="https://images.unsplash.com/photo-1501648060331-445082feb607?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" style={{ height: '450px', width: '450px', borderRadius: '50%', animation: 'zoom 30s ease-in-out alternate infinite' }} />
              <img className="mySlides" src="https://images.unsplash.com/photo-1454782767667-13a17aac30c3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1052&q=80" style={{ height: '450px', width: '450px', borderRadius: '50%', animation: 'zoom 30s ease-in-out alternate infinite' }} />
              <img className="mySlides" src="https://images.unsplash.com/photo-1496629062893-b0f566065d44?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" style={{ height: '450px', width: '450px', borderRadius: '50%', animation: 'zoom 30s ease-in-out alternate infinite' }} />
            </div>
          </div>
          <div className="col-3">
            <div className="goRight" style={{ position: 'absolute', color: 'black', left: '-50px', bottom: '0', marginBottom: '10vh', fontSize: '8vh', textShadow: '5px 6px 20px gray', cursor: 'pointer' }}>
              <i className="fas fa-arrow-right"></i>
            </div>
          </div>
        </div>

        <div className="lightContent" style={{ position: 'absolute', fontFamily: 'Montserrat, sans-serif', top: '55vh', right: '70%', color: 'black' }}>
          This text is for with <br /> some more random text light area
        </div>

        <footer style={{ marginTop: '7vh' }}>
          <div className="SocialMedia" style={{ color: 'black', display: 'inline' }}>
            Social Media
            <i className="fab fa-facebook"></i>
            <i className="fab fa-instagram"></i>
            <i className="fab fa-twitter"></i>
            <i className="fab fa-github"></i>
          </div>
          <div className="CopyRight" style={{ color: 'black', display: 'inline', float: 'right' }}>
            Copyright©2019
          </div>
        </footer>
      </div>
    </>
  );
};

export default LandingPage;
