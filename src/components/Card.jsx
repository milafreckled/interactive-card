import React from 'react'
import cardLogo from "../images/card-logo.svg";

export default function Card(props) {
  const { cardNumber, cardHolderName, expMonth, expYear, CVC } = props.cardData;

  return (
    <div className="card-container">
        <div className="card-front">
            <div className="card-logo">
            <img src={cardLogo} alt="white circle" />
            </div>
            <div className="card-number">
            <span>{cardNumber?.substring(0, 4)}</span><span>{cardNumber?.substring(4, 8)}</span> 
            <span>{cardNumber?.substring(8, 12)}</span> <span>{cardNumber?.substring(12, 16)}</span>
            </div>
            <div className="card-holder">  
            <span>{cardHolderName}</span>
            <span>{expMonth}</span>/<span>{expYear}</span>
            </div>
        </div>
        <div className="card-back">  
        <span className="CVC">{CVC}</span>         
        </div>
    </div>
  )
}
