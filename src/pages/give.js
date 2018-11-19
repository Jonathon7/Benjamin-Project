import React from 'react'
import Layout from '../components/layout'
import TopFooter from '../components/topfooter'
import Heading from '../components/heading'
import Content from '../components/content'

const Give = () => {
  return (
    <Layout>
      <div className="give-container">
        <div className="give-content">
          <Heading
            title="Give to the Benjamin Project"
            subText="Ways to give to the ministry lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas,
          ipsam itaque non"
          />
          <Content />
        </div>
      </div>
      <TopFooter />
    </Layout>
  )
}

export default Give
