import React from 'react';

const cardData = {
    cardHolderName: 'Jane Appleseed',
    cardNumber: '0000000000000000',
    expMonth: '00',
    expYear: '00',
    CVC: '000'
};

const CardContext = React.createContext(cardData);

export default CardContext;