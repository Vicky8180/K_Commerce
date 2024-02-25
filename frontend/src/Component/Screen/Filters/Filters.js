
import React, { useState } from 'react';
import './Filters.css'; 
import CategoryInput from "./CategoryInput"
import PriceSilder from "./priceSilder"
import BrandInput from "./BrandInput"
const FilterComponent = ({ onFilter }) => {
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('');
  const [brand, setBrand] = useState('');
  const [rating, setRating] = useState('');

  const handleFilter = () => {
    onFilter({ price, category, brand, rating });
  };


  const names = [
  'smartphones',
  'laptops',
  'fragrances',
  'mens-watches',
  'skincare',
  'mens-shoes',
  'home-decoration',
  'tops'
];

const namesBrand = [
  'Apple',
  'Samsung',
  'Infinix"',
  'Microsoft Surface',
  'HP Pavilion',
  'Impression of Acqua Di Gio',
  'Royal_Mirage',
  'Dermive"'
];

  return (
    <div className="filter-container">
      <h2>Filter Products</h2>
      <div className="filter-section">
        {/* <label>Price:</label> */}
        {/* <input type="text" value={price} onChange={(e) => setPrice(e.target.value)} />         */}
      <PriceSilder/>
      </div>
      <div className="filter-section">
        <label>Category:</label>
        {/* <input type="text" value={category} onChange={(e) => setCategory(e.target.value)} /> */}
        <CategoryInput  names={names}/>

        
      </div>
      <div className="filter-section">
        <label>Brand:</label>
        <BrandInput  names={namesBrand}/>
        {/* <input type="text" value={brand} onChange={(e) => setBrand(e.target.value)} /> */}
      </div>
      {/* <div className="filter-section">
        <label>Rating:</label>
        <PriceSilder/>
        <input type="text" value={rating} onChange={(e) => setRating(e.target.value)} />
      </div> */}

      <button onClick={handleFilter}>Apply Filter</button>
    </div>
  );
};

export default FilterComponent;

