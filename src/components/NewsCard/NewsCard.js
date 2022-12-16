import React from 'react'

const NewsCard = ({ article:{urlToImage,author,description,title} }) => {
    return (
        <div className='cards' style={{
           maxWidth:"400px",
           margin:"1rem",
           backgroundColor:"whitesmoke"
        }}>
            <div className="card" style={{
                display:"flex",
                alignItems:"center",
                flexDirection:"column",
                backgroundColor:"rgb(230,230,230)",
                color:"black",
                padding:"1rem 1rem"
                
            }}>
                
                <img src={urlToImage} style={{width:"100%",marginBottom:"1rem"}} alt="" />
                <div className="container">
                    <h5><b>{author}</b></h5>
                    <h3 style={{marginTop:"1rem",fontFamily:"inherit"}} >{title}</h3>
                    <p style={{marginTop:"1rem",fontFamily:"inherit"}} >{description}</p>
                </div>
            </div>
        </div>
    )
}

export default NewsCard
