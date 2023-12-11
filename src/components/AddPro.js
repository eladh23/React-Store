import React, { useState } from 'react';
import axios from 'axios';

const Addpro = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState(null);
  const [price, setPrice] = useState('');
  const [stock, setStock] = useState('');

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
  };

  const clearForm = () => {
    setName('');
    setDescription('');
    setImage(null);
    setPrice('');
    setStock('');
  };

  const addProduct = async () => {
    try {
      const formData = new FormData();
      formData.append('name', name);
      formData.append('description', description);
      formData.append('image', image);
      formData.append('price', price);
      formData.append('stock', stock);

      const response = await axios.post('http://127.0.0.1:8000/products/', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      console.log('Product added:', response.data);
      clearForm();
    } catch (error) {
      console.error('Error adding product:', error);
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Add Product</h2>
      <form onSubmit={(e) => e.preventDefault()} className="text-left">
        <div className="form-group">
          <label>Name:</label>
          <input className="form-control" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div className="form-group">
          <label>Description:</label>
          <textarea className="form-control" value={description} onChange={(e) => setDescription(e.target.value)} />
        </div>
        <div className="form-group">
          <label>Image:</label>
          <input type="file" className="form-control-file" onChange={handleFileChange} />
        </div>
        <div className="form-group">
          <label>Price:</label>
          <input type="number" className="form-control" value={price} onChange={(e) => setPrice(e.target.value)} />
        </div>
        <div className="form-group">
          <label>Stock:</label>
          <input type="number" className="form-control" value={stock} onChange={(e) => setStock(e.target.value)} />
        </div>
        <button className="btn btn-success" onClick={addProduct}>
          Add Product
        </button>
      </form>
    </div>
  );
};

export default Addpro;
