import React from "react";
import Chattisgarh from './Chattisgarh.jpg';
import "./Home.css";
import Pune from './Pune.png';

import "./Destination.css";
const Home=()=>{
    return(
        <>
        
        
  <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel"style={{marginTop:"80px"}}>
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="https://images.unsplash.com/photo-1524492412937-b28074a5d7da?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Z2F0ZXdheSUyMG9mJTIwaW5kaWElMjBtdW1iYWklMjBtdW1iYWklMjBpbmRpYXxlbnwwfHwwfHx8MA%3D%3D" class="d-block w-100" alt="Tajmahal"/>
      <div class="carousel-caption d-none d-md-block">
        <h1>Tajmahal</h1>
        <p>It is considered a symbol of love and one of the most beautiful buildings in the world.</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src="https://media.istockphoto.com/id/512832839/photo/illuminated-gateway-of-india-mumbai.jpg?s=612x612&w=0&k=20&c=LF8ObAbZTk7ztaH1aMH0AE8G2CMuEtChWUMOVR2b6C8=" class="d-block w-100" alt="Gate way of india"/>
      <div class="carousel-caption d-none d-md-block">
        <h1>Gate way of India</h1>
        <p>A Majestic Gateway to Mumbai: The Gateway of India.</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src="https://static.toiimg.com/photo/107112949.cms" class="d-block w-100" alt="Ram Madir"/>
      <div class="carousel-caption d-none d-md-block">
        <h1>Ram Mandir</h1>
        <p>Ayodhya Ram Mandir: A Symbol of Faith and Unity.</p>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>

      <div style={{marginTop:"100px",marginBottom:"2rem"}}>
        <h1 style={{color:'black',textAlign:'center',fontSize:"4rem",paddingBottom:'2rem'}}>Top Destination in India</h1>
        <div style={{ display:'flex',justifyContent:"space-evenly",flexDirecion:"row",marginLeft:'0px'}}>
          <div className="card-container">
        <div class="card" style={{width: "18rem",height:"200px"}}>
        <div
        className="card"
            style={{
                height:'200px',
              width: "18rem",
              textDecoration: "none",
              color: "inherit",
              border: "1px solid #ccc",
              borderRadius: "8px",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
              overflow: "hidden",
              cursor: "pointer",
            }}
          >
  <img src={ Chattisgarh} class="card-img-top" alt="..."></img>
  <div class="card-body">
    <h5 class="card-title" style={{textAlign:"center"}}>Aagra</h5>
   
   
  </div>
  </div>
</div>

<div class="card" style={{width: "18rem",height:"200px"}}>
                <div
                className="card"
                    style={{
                        height:'400px',
                      width: "18rem",
                      textDecoration: "none",
                      color: "inherit",
                      border: "1px solid #ccc",
                      borderRadius: "8px",
                      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                      overflow: "hidden",
                      cursor: "pointer",
                    }}
                  >
          <img src="https://indiatravel.com/wp-content/uploads/2022/03/Mumbai.jpg"class="card-img-top" alt="..."></img>
          <div class="card-body">

          </div>
          </div>
          </div>

          <div class="card" style={{width: "18rem",height:"200px"}}>
                <div
                className="card"
                    style={{
                        height:'400px',
                      width: "18rem",
                      textDecoration: "none",
                      color: "inherit",
                      border: "1px solid #ccc",
                      borderRadius: "8px",
                      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                      overflow: "hidden",
                      cursor: "pointer",
                    }}
                  >
          <img src="https://indiatravel.com/wp-content/uploads/2022/03/Goa.jpg"class="card-img-top" alt="..."></img>
          <div class="card-body">
          </div>
          
          </div>
        </div>

    
       
        <div class="card" style={{width: "18rem",height:"200px"}}>
        <div
        className="card"
            style={{
                height:'200px',
              width: "18rem",
              textDecoration: "none",
              color: "inherit",
              border: "1px solid #ccc",
              borderRadius: "8px",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
              overflow: "hidden",
              cursor: "pointer",
            }}
          >
  <img src="https://indiatravel.com/wp-content/uploads/2022/03/Nubra-Valley.jpg" class="card-img-top" alt="..."></img>
  <div class="card-body">
    <h5 class="card-title" style={{textAlign:"center"}}>Aagra</h5>
   
   
  </div>
  </div>
</div>
<div class="card" style={{width: "18rem",height:"200px"}}>
                <div
                className="card"
                    style={{
                        height:'400px',
                      width: "18rem",
                      textDecoration: "none",
                      color: "inherit",
                      border: "1px solid #ccc",
                      borderRadius: "8px",
                      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                      overflow: "hidden",
                      cursor: "pointer",
                    }}
                  >
          <img src={Pune} style={{height:"220px"}}class="card-img-top" alt="..."></img>
          <div class="card-body">
          </div>
          
          </div>
        </div>
<div class="card" style={{width: "18rem",height:"200px"}}>
        <div
        className="card"
            style={{
                height:'200px',
              width: "18rem",
              textDecoration: "none",
              color: "inherit",
              border: "1px solid #ccc",
              borderRadius: "8px",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
              overflow: "hidden",
              cursor: "pointer",
            }}
          >
  <img src="https://indiatravel.com/wp-content/uploads/2022/03/Leh.jpg" class="card-img-top" alt="..."></img>
  <div class="card-body">
    <h5 class="card-title" style={{textAlign:"center"}}>Aagra</h5>
   
   
  </div>
  </div>
</div>
<div class="card" style={{width: "18rem",height:"200px"}}>
        <div
        className="card"
            style={{
                height:'200px',
              width: "18rem",
              textDecoration: "none",
              color: "inherit",
              border: "1px solid #ccc",
              borderRadius: "8px",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
              overflow: "hidden",
              cursor: "pointer",
            }}
          >
  <img src="https://indiatravel.com/wp-content/uploads/2022/03/Mandawa.jpg" class="card-img-top" alt="..."></img>
  <div class="card-body">
    <h5 class="card-title" style={{textAlign:"center"}}>Aagra</h5>
   
   
  </div>
  </div>
</div>
<div class="card" style={{width: "18rem",height:"200px"}}>
        <div
        className="card"
            style={{
                height:'200px',
              width: "18rem",
              textDecoration: "none",
              color: "inherit",
              border: "1px solid #ccc",
              borderRadius: "8px",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
              overflow: "hidden",
              cursor: "pointer",
            }}
          >
  <img src="https://indiatravel.com/wp-content/uploads/2022/03/Periyar-National-Park.jpg"class="card-img-top" alt="..."></img>
  <div class="card-body">
    <h5 class="card-title" style={{textAlign:"center"}}>Aagra</h5>
   
   
  </div>
  </div>
</div>



</div>
</div>
     </div>
     
    
     
        </>
    );
};

export default Home