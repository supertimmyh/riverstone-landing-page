import React from 'react'
import Link from 'gatsby-link'
import Signup from '../components/signup'
import heroImage from '../assets/hero.png'

const IndexPage = () => (
  <div className="container">
    <div className="columns">
      <div className="column col-6">
        <div className="hero">
          <div>
            <h1>Build a truly distrubted Bitcoin network with RiverStone</h1>
            <Signup />
          </div>
        </div>
      </div>
      <div className="column col-6">
        <img className="hero-image" src={heroImage} />
      </div>
    </div>
  </div>
)

export default IndexPage
