import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';
import createAxiosInstance from '../api/AxiosInstance';
import ProductCard from '../components/ItemCard';
import { Toaster } from 'sonner';

export const useAuth = () => {
    const [cookies, removeCookie] = useCookies();

    if (cookies.userToken.length>0) {
        return true;
    } else {
        return false
    }
};

const Home = () => {
    const navigate = useNavigate();
    const [cookies, removeCookie] = useCookies([]);
    const [username, setUsername] = useState("");
    const [items,setItems]=useState([])
    console.log(items);
  
    const fetcher= async ()=>{
        try {
            const instance = createAxiosInstance(cookies);

            const response = await instance.get("/items");
            setItems(response.data)
            

        } catch (error) {
            console.log(error);
        }
    
    }
    useEffect(() => {
        fetcher();
        if (cookies.userToken === undefined) {
          removeCookie('userToken');
          navigate('/login');
        }
      }, [cookies, navigate, removeCookie]);
      
      
  return (
    <div className='grid grid-cols-1 gap-4 lg:grid-cols-3 md:grid-cols-2 place-items-center	'>
        
        {items.length>0 && items.map((item,i)=>(
            <ProductCard
            key={i}
            item={item}
             />
        ))}
                  <Toaster richColors />

    </div>
  )
}

export default Home
