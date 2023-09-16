import axios from 'axios'


const apiKey = process.env.REACT_APP_SERVER_URL;

export const getPrice = async()=>{
    try{
          const response = await axios.get(`${apiKey}/api/products/getprice/pepe/USDT/24478`);
        return response.data
    }
    catch(e: any){
        console.log(e.response.data.message)
    }
}

export const getPondPrice = async()=>{
    try{
          const response = await axios.get(`${apiKey}/api/products/getpondprice/pond0x/USDT/27712`);
        return response.data
    }
    catch(e: any){
        console.log(e.response.data.message)
    }
}

export const getTransactions = async(address: string | undefined, email: string, value: any, pondCount: any, paymentInfo: any, cart: any)=>{
    try{
          const response = await axios.get(`${apiKey}/api/products/checktr/${address}/${email}/${value}/${pondCount}/${paymentInfo}/${cart}`);
        return response.data
    }
    catch(e: any){
        console.log(e.response.data.message)
    }
}
