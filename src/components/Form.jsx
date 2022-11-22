import React, {useState, useEffect} from 'react'
import iconComplete from "../images/icon-complete.svg"
import Card from "./Card";

export default function Form(props) {
  const [isComplete, setIsComplete] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [cardNumberError, setCardNumberError] = useState('');
  const [monthError, setMonthError] = useState('');
  const [yearError, setYearError] = useState('');
  const [CVCError, setCVCError] = useState('');

  const defaultData = {
    cardHolderName: 'Jane Appleseed',
    cardNumber: '0000000000000000',
    expMonth: '00',
    expYear: '00',
    CVC: '000'
};
  const [data, setData] = useState(defaultData);

const saveValue = (e) => {
    setIsSubmitting(false);
    const { name, value } = e.target;
    setData({...data, [name]: value});
  };


const onSubmit = (e) => {
  setIsSubmitting(true);
  const rightRegex = /\d{16}$/.test(data.cardNumber.replace(/\s/g, ''));
  if (!rightRegex){
    setCardNumberError("Wrong format, numbers only");
    console.log(1);
  };
  if (data.cardNumber === '' || data.cardNumber === defaultData.cardNumber){
    setCardNumberError("Can't be blank");
    console.log(2);
  };
  if (data.expMonth === '' || data.expMonth === defaultData.expMonth){
    setMonthError("Can't be blank");
    console.log(3);
  };
  if (data.expYear === '' || data.expYear === defaultData.expYear){
    setYearError("Can't be blank");
    console.log(4);
  };
  if (data.CVC === '' || data.CVC === defaultData.CVC){
    setCVCError("Can't be blank");
    console.log(5);
  };

};

const handleContinue = () =>{
  setIsSubmitting(false);
  setIsComplete(false);
  setData(defaultData);
};

useEffect(() => {
  if (isSubmitting && !(cardNumberError || monthError || yearError || CVCError)){
    setIsComplete(true);
  };
}, [isSubmitting, cardNumberError, monthError, yearError, CVCError])

  return (
    <>
    <Card cardData={data} />
    {isComplete ? 
    <div className="complete">
    <img src={iconComplete} alt="Thank you!" />
    <h2>Thank you!</h2>
    <p>We've added your card details.</p>
    <button onClick={handleContinue}>Continue</button>
    </div>
    : <div className='form'>
        <label htmlFor="cardHolderName" className="labelForName">Cardholder Name</label><br />
        <input type="text" name="cardHolderName" id="cardHolderName" placeholder="e.g. Jane Appleseed" onChange={saveValue}/>
        <label htmlFor="cardNumber" className="labelForNumber">Card Number </label><br />
        <input className={Boolean(cardNumberError) ? "error" : ""} type="text" name="cardNumber" id="cardNumber" placeholder="e.g. 1234 5678 9123 0000" onChange={saveValue} />
        <br />
        <span className="error-text span1"> {cardNumberError} </span>
        <label htmlFor="expDate" className="labelForDate" >Exp. Date (MM/YY)</label><br />
        <input className={monthError ? "error" : ""} type="text" name="expMonth" id="expMonth" placeholder="MM" onChange={saveValue} />
        <br /> <span className="error-text span2">{monthError}</span>
        <input className={yearError ? "error" : ""}type="text" name="expYear" id="expYear" placeholder="YY" onChange={saveValue} />
        <br /> <span className="error-text span3">{yearError}</span>
        <label htmlFor="CVC" className="labelForCVC" >CVC</label><br />
        <input className={CVCError ? "error" : ""} type="text" name="CVC" id="CVC" placeholder="e.g. 123" onChange={saveValue} />
        <br /> <span className="error-text span4">{CVCError}</span>
        <button className="submitBtn" onClick={onSubmit}>Confirm</button>
    </div>
}
    </>
  )
}