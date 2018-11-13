import React from 'react'

const Content = () => {
  return (
    <div>
      <div className="contact-component">
        <div className="content-text">
          <h3>Header</h3>
          <p>
            {' '}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas,
            ipsam itaque non dignissimos praesentium fuga repellendus, expedita
            quasi necessitatibus beatae unde eaque aliquid exercitationem quis
            omnis amet officiis laudantium enim?{' '}
          </p>
        </div>
        <div className="content-video">
          <iframe
            title="It's time to let your light shine"
            name="main-video"
            width="560"
            height="315"
            src="https://www.youtube.com/embed/-Ct-FjFefx4"
            frameborder="0"
            allow="autoplay; encrypted-media"
            allowfullscreen
          />
        </div>
      </div>
    </div>
  )
}

export default Content
