import axios from 'axios';

const productionURL = 'https://strapi-store-server.onrender.com/api';

export const customFetch = axios.create( {
    baseURL: productionURL,
});

export const formatPrice =(price) => {
    const dollarAmount = new Intl.NumberFormat('en-AU', {
        style:"currency",
        currency: "AUD"
    }).format((price /100).toFixed(2));
return dollarAmount;
}

export const generateAmountOptions = (number) =>{
    // how big will be the array
    return Array.from({length:number}, (_,index) =>{
        const amount = index +1;
        return (
            <option key={amount} value={amount}>{amount}</option>
        )

    });
}