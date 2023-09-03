import axios from 'axios'


const serverUrl = process.env.REACT_APP_SERVER_URL;

export const getProducts = async()=>{
    try{
        const response =await axios.get(`${serverUrl}/api/products/getproducts`)
        return response.data
    }
    catch(e: any){
        console.log(e.response.data.message)
    }
}

export const getProductById = async (productId: any) => {
    try {
      const response = await axios.get(`${serverUrl}/api/products/getproduct/${productId}`);
      return response.data;
    } catch (error) {
      console.error('Ошибка при получении продукта по ID:', error);

    }
  };
  