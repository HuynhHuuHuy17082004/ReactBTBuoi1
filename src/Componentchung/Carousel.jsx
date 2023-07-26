import React from 'react'

const Carousel = () => {
  return (
    <div>
        <div className='container bg-body-tertiary mt-5' style={{paddingTop:100,paddingBottom:100,paddingLeft:150,paddingRight:150,textAlign:'center'}}>
            <h1 className='display-5 fw-bold'>A warm welcome!</h1>
            <p className='fs-4'>Bootstrap utility classes are used to create this jumbotron since the old component has been removed from the framework. Why create custom CSS when you can use utilities?</p>
            <button className='btn btn-primary btn-lg'>Call to action</button>
        </div>
    </div>
  )
}

export default Carousel