import React from "react";
import Chattisgarh from './Chattisgarh.jpg';
import "./Home.css";
import khajuraho from './Khajuraho.jpg';
import orccha from './orccha.jpg';
import Pune from './Pune.png';
import Varanasi from './Varanasi.jpg';
import './Destination.css';
import { Link } from "react-router-dom";

import { useNavigate } from "react-router-dom";

const Destination=()=>{
  const navigate = useNavigate();
    return(
        <>

<h1 style={{marginTop:"130px",textAlign:"center"}}>DESTINATIONS</h1>
<div style={{marginTop:"50px",marginBottom:"2rem"}}>
        <div style={{ display:'flex',justifyContent:"space-evenly",flexDirecion:"row",marginLeft:'0px'}}>
          
        <div className="card-container">
        <div class="card" style={{width: "18rem",height:"400px"}}>
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
           <p class="card-caption">Mumbai, is the capital city of the Indian state of Maharashtra. lies on the west coast of India and has a deep natural harbour.</p>
           <button type="button" class="btn btn-outline-primary"  onClick={() => navigate('/Mumbai')}>Explore</button>
          </div>
          </div>

        </div>
      


        <div class="card" style={{width: "18rem",height:"400px"}}>
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
            <p class="card-caption">Goa is popular world-over for its beach trance parties, especially on the Anjuna beach. The beach is a major attraction for vacationers.</p>
            <button type="button" class="btn btn-outline-primary"  onClick={() => navigate('/Goa')}>Explore</button>
          </div>
          
          </div>
        </div>

        <div class="card" style={{width: "18rem",height:"400px"}}>
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
     
          <div class="card-body" >
            <p class="card-caption">Pune has earned its name for its deep-rooted history, culture, and academic facilities.  </p>
            <button type="button" class="btn btn-outline-primary"  onClick={() => navigate('/Pune')}>Explore</button>
          </div>
          </div>
        </div>
        <div class="card" style={{width: "18rem",height:"400px"}}>
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
          <img src={ Chattisgarh} class="card-img-top" alt="..."></img>
          <div class="card-body">
            <p class="card-caption">Chattisgarh is the state in Central India, endowed with a rich cultural heritage and  also known land of waterfalls</p>
            <button type="button" class="btn btn-outline-primary"  onClick={() => navigate('/Chhatisgarh')}>Explore</button>
          
        </div>
        </div>
        </div>
      
        
        
            
       
               
                <div class="card" style={{width: "18rem",height:"400px"}}>
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
          <img src={khajuraho} class="card-img-top" alt="..."></img>
          <div class="card-body">
            <p class="card-caption">The 9th to 12th century temples of Khajuraho is the evidences of the architectural geniuses during the times of Chandela dynasty.</p>
            <button type="button" class="btn btn-outline-primary"  onClick={() => navigate('/Khajuraho')}>Explore</button>
          </div>
          
          </div>
        </div>
        <div class="card" style={{width: "18rem",height:"400px"}}>
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
          <img src="https://indiatravel.com/wp-content/uploads/2022/03/Pangong-Tso.jpg"class="card-img-top" alt="..."></img>
          <div class="card-body">
            <p class="card-caption">Situated at a height of about 4,350 m, the 6 km long and 130 km wide Lake is bisected by the International border between China and India.</p>
            <button type="button" class="btn btn-outline-primary"  onClick={() => navigate('/Pangcong')}>Explore</button>
          </div>
          
          </div>
        </div>
        <div class="card" style={{width: "18rem",height:"400px"}}>
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
          <img src={ Varanasi} class="card-img-top" alt="..."></img>
          <div class="card-body">
           <p class="card-caption">The land of Varanasi (Kashi) has been the ultimate pilgrimage spot for Hindus for ages. Varanasi is the oldest city</p>
           <button type="button" class="btn btn-outline-primary"  onClick={() => navigate('/Varanasi')}>Explore</button>
          
          </div>
          </div>
        </div>
        
        <div class="card" style={{width: "18rem",height:"400px"}}>
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
          <img src={orccha} class="card-img-top" alt="..."></img>
          <div class="card-body">
            <p class="card-caption">A town in Tikamgarh district of Madhya Pradesh state, India. Orcha combines the architectural beauty of a medieval town</p>
           
            <button type="button" class="btn btn-outline-primary"  onClick={() => navigate('/Orchha')}>Explore</button>
          </div>
          </div>
        </div>

        
        
        
        
             
             
               
                <div class="card" style={{width: "18rem",height:"400px"}}>
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
          <img src="https://indiatravel.com/wp-content/uploads/2022/03/Nubra-Valley.jpg" class="card-img-top" alt="..."></img>
          <div class="card-body">
            <p class="card-caption">Situated north of Leh across the Khardung La Pass, Nubra Valley is a true adventurous destination. Nubra is a high altitude cold desert</p>
           
            <button type="button" class="btn btn-outline-primary"  onClick={() => navigate('/NubraValley')}>Explore</button>
          </div>
          </div>
        </div>
        <div class="card" style={{width: "18rem",height:"400px"}}>
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
          <img src="https://indiatravel.com/wp-content/uploads/2022/03/Jaisalmer.jpg" class="card-img-top" alt="..."></img>
          <div class="card-body">
            <p class="card-caption">In Rajasthan’s Thar Desert, lies the golden city of Jaisalmer which reminds one excerpt from the Arabian Nights tales.</p>
           
            <button type="button" class="btn btn-outline-primary"  onClick={() => navigate('/Jaisalmer')}>Explore</button>
          </div>
          </div>
        </div>
        <div class="card" style={{width: "18rem",height:"400px"}}>
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
          <img src="https://indiatravel.com/wp-content/uploads/2022/03/Pelling.jpg" class="card-img-top" alt="..."></img>
          <div class="card-body">
           <p class="card-caption">A tiny but heavenly-beautiful town nestled in the interiors of Sikkim, Pelling is perhaps the second most popular destination in Sikkim</p>
           <button type="button" class="btn btn-outline-primary"  onClick={() => navigate('/Pelling')}>Explore</button>
          </div>
          
          </div>
        </div>

        <div class="card" style={{width: "18rem",height:"400px"}}>
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
          <img src="https://indiatravel.com/wp-content/uploads/2022/03/Leh.jpg" class="card-img-top" alt="..."></img>
          <div class="card-body">
            <p class="card-caption">Leh is a District located in the Indian state of Jammu and Kashmir. The largest town of Ladakh, Leh boasts of a nine-storey palace</p>
            <button type="button" class="btn btn-outline-primary"  onClick={() => navigate('/Leh')}>Explore</button>
           </div>
           
          </div>
          </div>
      
        
            
           
                
                <div class="card" style={{width: "18rem",height:"400px"}}>
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
          <img src="https://indiatravel.com/wp-content/uploads/2022/03/Mahabalipuram.jpg" class="card-img-top" alt="..."></img>
          <div class="card-body">
            <p class="card-caption">Mahabalipuram, located around 60 km away from Chennai in Tamil Nadu, is known as the City of Temples.</p>
            <button type="button" class="btn btn-outline-primary"  onClick={() => navigate('/Mahabalipuram')}>Explore</button>
           
          </div>
          </div>
        </div>
        <div class="card" style={{width: "18rem",height:"400px"}}>
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
          <img src="https://indiatravel.com/wp-content/uploads/2022/03/Alleppey.jpg" class="card-img-top" alt="..."></img>
          <div class="card-body">
            <p class="card-caption">Alleppey is the hub for backwater tourism in Kerala. House boats locally called “kettuvallam” are available on hire on a daily basis</p>
           
            <button type="button" class="btn btn-outline-primary"  onClick={() => navigate('/Allepy')}>Explore</button>
          </div>
          </div>
        </div>
        <div class="card" style={{width: "18rem",height:"400px"}}>
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
          <img src="https://indiatravel.com/wp-content/uploads/2022/03/Periyar-National-Park.jpg" class="card-img-top" alt="..."></img>
          <div class="card-body">
            <p class="card=caption">Titled as ‘God’s own country’, Kerala, best known for the beautiful backwaters, waterfalls, the rich flora and fauna attract visitors</p>
            <button type="button" class="btn btn-outline-primary"  onClick={() => navigate('/Periyar')}>Explore</button>
           </div>
          </div>
          </div>
          <div class="card" style={{width: "18rem",height:"400px"}}>
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
          <img src="https://indiatravel.com/wp-content/uploads/2022/03/Kalimpong.jpg" class="card-img-top" alt="..."></img>
          <div class="card-body">
            <p class="card=caption">Kalimpong is a bustling town in the northern part of West Bengal. Apart from being a busy business hub, educational institutions</p>
            <button type="button" class="btn btn-outline-primary"  onClick={() => navigate('/Kalimpong')}>Explore</button>
           </div>
          </div>
          </div>
       </div>

       </div>
       </div>  

        </>
    )
}

export default Destination