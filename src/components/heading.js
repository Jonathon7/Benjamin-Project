import React from 'react'

const Heading = props => {
  return (
    <div>
      <div
        style={{
          height: '200px',
          margin: '80px 0px 0px 80px',
          maxWidth: '65%',
        }}
      >
        <h1 style={{ fontSize: '50px' }}>{props.title}</h1>
        <h4
          style={{
            fontWeight: 'lighter',
            paddingTop: '30px',
          }}
        >
          {props.subText}
        </h4>
        <h3>{props.subText1}</h3>
        <hr />
      </div>
    </div>
  )
}

export default Heading
