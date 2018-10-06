import React from 'react'
import Heading from '../components/heading'
//import Header from '../components/header'
//import { Link } from 'gatsby'
import Layout from '../components/layout'
import icon from './images/gatsby-icon.png'

const SecondPage = () => (
  <Layout>
    <Heading
      title="About The Benjamin Project"
      subText="This is the about page Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, facilis quo. Ducimus repellendus distinctio quia! Recusandae suscipit, repellendus eum ipsum neque sequi dolorum f ugiat, explicabo assumenda vero accusantium consequatur animi? "
    />
    <div className="about-icon">
      <img src={icon} alt="" />
    </div>
    <div className="about-text">
      <p>
        {' '}
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, facilis
        quo. Ducimus repellendus distinctio quia! Recusandae suscipit,
        repellendus eum ipsum neque sequi dolorum f ugiat, explicabo assumenda
        vero accusantium consequatur animi? Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Autem, facilis quo. Ducimus repellendus
        distinctio quia! Recusandae suscipit, repellendus eum ipsum neque sequi
        dolorum f ugiat, explicabo assumenda vero accusantium consequatur animi?
      </p>
    </div>
  </Layout>
)

export default SecondPage
