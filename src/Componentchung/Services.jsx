import React from 'react'

const Services = () => {
    return (
        <div>
            <div className="container mt-5 text-center mb-5">
                <div className="row">
                    <div className="col-6 ps-0 pe-4">
                        <div className="bg-body-tertiary" style={{paddingBottom:30,paddingLeft:80,paddingRight:80}}>
                            <div className='mb-4 bg-primary text-white mt-4 ' style={{display:'inline-block',width:60,height:60,verticalAlign:'middle',lineHeight:'auto', alignItems:'center',margin:'auto',paddingTop:12,borderRadius:10}}><i class="fa-solid fa-book " style={{fontSize:35,lineHeight:'auto',verticalAlign:"middle"}}></i></div>
                            <h2 className="fs-4 fw-bold">Fresh new layout</h2>
                            <p className='mb-0'>With Bootstrap 5, we've created a fresh new layout for this template!</p>
                        </div>
                        <div className="bg-body-tertiary  mt-5 " style={{paddingBottom:30,paddingLeft:80,paddingRight:80}}>
                            <div className='mb-4 bg-primary text-white mt-4 ' style={{display:'inline-block',width:60,height:60,verticalAlign:'middle',lineHeight:'auto', alignItems:'center',margin:'auto',paddingTop:12,borderRadius:10}}><i class="fa-solid fa-address-card" style={{fontSize:35,lineHeight:'auto',verticalAlign:"middle"}}></i></div>
                            <h2 className="fs-4 fw-bold">Jumbotron hero header</h2>
                            <p className='mb-0'>The heroic part of this template is the jumbotron hero header!</p>
                        </div>
                        <div className="bg-body-tertiary mt-5 " style={{paddingBottom:30,paddingLeft:70,paddingRight:70}}>
                            <div className='mb-4 bg-primary text-white mt-4 ' style={{display:'inline-block',width:60,height:60,verticalAlign:'middle',lineHeight:'auto', alignItems:'center',margin:'auto',paddingTop:12,borderRadius:10}}><i class="fa-solid fa-code" style={{fontSize:35,lineHeight:'auto',verticalAlign:"middle"}}></i></div>
                            <h2 className="fs-4 fw-bold">Simple clean code</h2>
                            <p className='mb-0'>We keep our dependencies up to date and squash bugs as they come!</p>
                        </div>
                    </div>
                    <div className="col-6 pe-0 ps-4">
                        <div className="bg-body-tertiary " style={{paddingBottom:30,paddingLeft:80,paddingRight:80}}>
                            <div className='mb-4 bg-primary text-white mt-4 'style={{display:'inline-block',width:60,height:60,verticalAlign:'middle',lineHeight:'auto', alignItems:'center',margin:'auto',paddingTop:12,borderRadius:10}}><i class="fa-solid fa-cloud-arrow-down" style={{fontSize:35,lineHeight:'auto',verticalAlign:"middle"}}></i></div>
                            <h2 className="fs-4 fw-bold">Free to download</h2>
                            <p className='mb-0'>As always, Start Bootstrap has a powerful collectin of free templates.</p>
                        </div>
                        <div className="bg-body-tertiary mt-5 " style={{paddingBottom:30,paddingLeft:80,paddingRight:80}}>
                            <div className='mb-4 bg-primary text-white mt-4 ' style={{display:'inline-block',width:60,height:60,verticalAlign:'middle',lineHeight:'auto', alignItems:'center',margin:'auto',paddingTop:12,borderRadius:10}}><i class="fa-brands fa-bootstrap" style={{fontSize:35,lineHeight:'auto',verticalAlign:"middle"}}></i></div>
                            <h2 className="fs-4 fw-bold">Feature boxes</h2>
                            <p className='mb-0'>We've created some custom feature boxes using Bootstrap icons!</p>
                        </div>
                        <div className="bg-body-tertiary mt-5 " style={{paddingBottom:30,paddingLeft:80,paddingRight:80}}>
                            <div className='mb-4 bg-primary text-white mt-4 ' style={{display:'inline-block',width:60,height:60,verticalAlign:'middle',lineHeight:'auto', alignItems:'center',margin:'auto',paddingTop:12,borderRadius:10}}><i class="fa-regular fa-circle-check" style={{fontSize:35,lineHeight:'auto',verticalAlign:"middle"}}></i></div>
                            <h2 className="fs-4 fw-bold">A name you trust</h2>
                            <p className='mb-0'>Start Bootstrap has been the leader in free Bootstrap templates since 2013!</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services