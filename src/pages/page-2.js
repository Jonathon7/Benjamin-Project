import React from 'react'
//import Heading from '../components/heading'
//import Header from '../components/header'
//import { Link } from 'gatsby'
import Layout from '../components/layout'
import Sidebar from '../components/sidebar'
import TopFooter from '../components/topfooter'
import icon from './images/gatsby-icon.png'

const SecondPage = () => (
  <Layout>
    <div className="about-sidebar">
      <div className="about-container">
        <div className="about-heading">
          <h1>About</h1>
          <h4>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem,
            facilis quo. Lorem ipsum dolor sit amet consectetur adipisicing
            elit.
          </h4>
          <hr />
        </div>
        <div className="about-icon">
          <img src={icon} alt="" />
        </div>
        <div className="about-text">
          <p>
            {' '}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem,
            facilis quo. Ducimus repellendus distinctio quia! Recusandae
            suscipit, repellendus eum ipsum neque sequi dolorum f ugiat,
            explicabo assumenda vero accusantium consequatur animi? Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Autem, facilis quo.
            Ducimus repellendus distinctio quia! Recusandae suscipit,
            repellendus eum ipsum neque sequi dolorum f ugiat, explicabo
            assumenda vero accusantium consequatur animi?
          </p>
          <br />
          <hr />
          <br />
        </div>
      </div>
      <div>
        <Sidebar
          title="Our Vision"
          text=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem,
            facilis quo. Ducimus repellendus distinctio quia! Recusandae
            suscipit, repellendus eum ipsum neque sequi dolorum f ugiat,
            explicabo assumenda vero accusantium consequatur animi? Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Autem, facilis quo.
            Ducimus repellendus distinctio quia! Recusandae suscipit,
            repellendus eum ipsum neque sequi dolorum f ugiat, explicabo
            assumenda vero accusantium consequatur animi?"
        />
      </div>
    </div>
    <div>
      <TopFooter />
    </div>
  </Layout>
)

export default SecondPage
