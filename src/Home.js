import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Home() {

    const [card, setCard] = useState([]);
    const n = useNavigate();

    useEffect(()=>{
        fetch('http://localhost:4000/cards')
        .then((res)=>{return res.json()})
        .then((data)=>{
            setCard(data)
        })
    }, [])

    const handleImage = ()=>{
        n('/image-gallery/')
    }
  return (
    <div className="container">
    <div className="row">
        <h1 style={{color:"#2a52be"}}>Visit Delhi Places</h1>
        {card.map((card) => (
            <div className="col-sm-6 mb-3" key={card.id}>
                <div className="card" style={{width:"350px", height:"135px"}} >
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img style={{height: "80px", margin:"25px 10px"}}
                             src={card.image}
                            className="img-fluid rounded-start" 
                            alt={card.title}
                            onClick={handleImage}/>
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title" style={{fontSize:"14px"}}>{card.title}</h5>
                                <p className="card-text" style={{fontSize:"10px"}}>{card.content}</p>
                                <a href="/" className="btn btn-primary btn-sm" 
                                style={{fontSize:"8px"}}>View Details</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        ))}
    </div>
</div>
  );
}

export default Home;
