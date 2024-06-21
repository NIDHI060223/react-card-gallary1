import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

function ImageGallery() {

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
        n('/image-popup/');
    }
  return (
    <div>
      <div className='container'>
        <div className='row'>
             {card.map((v)=>(
                 <div className="col-md-4 mb-3">
                 <img style={{height:"150px"}} data-bs-toggle="modal" data-bs-target="#exampleModal"
                  src={v.image}
                 className="img-fluid rounded-start img-thumbnail" 
                 alt={card.title}
                 onClick={handleImage}/>
             </div>
             ))}
        </div>
      </div>
    </div>
  )
}

export default ImageGallery
