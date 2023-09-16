import React, { useState, ChangeEvent, FormEvent, useEffect } from 'react';
import axios from 'axios';
import { getProducts } from '../api/items-api';

interface AdminPanelProps {

}

const serverUrl = process.env.REACT_APP_SERVER_URL;

const AdminPanel: React.FC<AdminPanelProps> = () => {
  const [name, setName] = useState<string>('');
  const [cost, setCost] = useState<number>(0);
  const [shippingCost, setShippingCost] = useState<number>(0);
  const [category, setCategory] = useState<string>('');
  const [colors, setColors] = useState<string>('');
  const [sizes, setSizes] = useState<string>('');
  const [images, setImages] = useState<File[]>([]);
  const [description, setDescription] = useState<string>('');
  const [details, setDetails] = useState<string>('');
  const [imgUrl, setImgUrl]= useState<string[]>([])

  const [featured, setFeatured] = useState<string>('');
  const [newsDrop, setNewsDrop] = useState<string>('');

  const [count,setCount]=useState<string>('')

  const [featuresData, setFeaturesData] = useState<any[]>([]);

useEffect(()=>{
    const fetchProducts = async () => {
      try {
        const products = await getProducts();
        setFeaturesData(products) 

      } catch (error) {
        alert(error);
      }
    };
    fetchProducts();
  }, []);
  console.log(featuresData)

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      setImages(prevImages => [...prevImages, ...Array.from(files)]);
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    

    try {
      const imageUrls = await uploadImages(images);
      setImgUrl(imageUrls)
      await Promise.all(imageUrls);

      const newProduct = {
        name,
        cost,
        shippingCost,
        category,
        colors: colors.split(',').map(color => color.trim()),
        sizes: sizes.split(',').map(size => size.trim()),
        imgUrl: imageUrls,
        description,
        details,
        featured,
        newsDrop,
        count
      };

      const response =await axios.post(`${serverUrl}/api/products/addproduct`, {newProduct});
      alert('Товар успешно добавлен!');
    } catch (error) {
      console.error('Ошибка при добавлении товара:', error);
    }
  };

  const uploadImages = async (imageFiles: File[]): Promise<string[]> => {
    const imageUrls: string[] = [];

    try {
      const formData = new FormData();
      imageFiles.forEach(file => {
        formData.append('images', file);
      });
      const response = await axios.post('http://localhost:5000/api/products/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });

      imageUrls.push(...response.data);
    } catch (error) {
      console.error('Ошибка при загрузке изображений:', error);
    }

    return imageUrls;
  };


  return (
    <div className='flex justify-center mt-10'>
      <form onSubmit={handleSubmit} className='flex flex-col justify-center items-center gap-5 '>
        <input
          type="text"
          placeholder="Название"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="number"
          placeholder="Стоимость"
          value={cost === 0 ? '' : cost}
          onChange={(e) => setCost(Number(e.target.value))}
        />
       

        <input
          type="text"
          placeholder="Категория"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />
         <input
          type="text"
          placeholder="Цвета (разделены запятой)"
          value={colors}
          onChange={(e) => setColors(e.target.value)}
        />
        <input
          type="text"
          placeholder="Размеры (разделены запятой)"
          value={sizes}
          onChange={(e) => setSizes(e.target.value)}
        />
        <input type="file" multiple onChange={handleImageChange} />
        {/* ...отображение выбранных изображений... */}
        {images.map((image, index) => (
          <img
            key={index}
            src={URL.createObjectURL(image)}
            alt={`Image ${index}`}
            style={{ width: '100px', height: '100px' }}
          />
        ))}
        <textarea
          placeholder="Описание"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <textarea
          placeholder="Детали"
          value={details}
          onChange={(e) => setDetails(e.target.value)}
        />
        <input
          type="t"
          placeholder="featured? (0(нет) или 1(да))"
          value={featured}
          onChange={(e) => setFeatured(e.target.value)}
        />
        <input
          type="text"
          placeholder="newsDrop? (0(нет) или 1(да))"
          value={newsDrop}
          onChange={(e) => setNewsDrop(e.target.value)}
        />
        <input
          type="text"
          placeholder="Количество"
          value={count}
          onChange={(e) => setCount(e.target.value)}
        />
        <button type="submit">Добавить товар</button>
      </form>
    </div>
  );
};

export default AdminPanel;
