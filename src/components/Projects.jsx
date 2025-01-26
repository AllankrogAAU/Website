import React from 'react'
import { Link } from 'react-router-dom'

const Projects = () => {
  return (
    <>
    <section id="projects" className="mb-5">
        <h2 className="mb-4">Projects</h2>
        <div className="row">
          <div className="col-md-4 mb-4">
            <div className="card">
              <img
                src='/images/asciiArt.jpg'
                className="card-img-top"
                alt="Ascii Art Generator"
              />
              <div className="card-body">
                <h5 className="card-title">Ascii Art Generator</h5>
                <p className="card-text">
                  This is a simple ascii art generator. Future version will take live video input and output live ascii art. 
                </p>
                <a href="/projectOne" className="btn btn-primary">
                  View Project
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card">
              <img
                src="/images/movieApp.jpg"
                className="card-img-top"
                alt="Movie catalogue"
              />
              <div className="card-body">
                <h5 className="card-title">Movie catalogue</h5>
                <p className="card-text">
                  This application uses 'The Movie Database' API to fetch all movies. It was developed to practice react. 
                </p>
                <a href="/projectTwo" className="btn btn-primary">
                  View Project
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card">
              <img
                src="./images/portfolioPic.jpg"
                className="card-img-top"
                alt="Portfolio"
              />
              <div className="card-body">
                <h5 className="card-title">Portfolio</h5>
                <p className="card-text">
                  This website is made to showcase my personal projects while proving web development skills.
                </p>
                <a href="/projectThree" className="btn btn-primary">
                  View Project
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Projects