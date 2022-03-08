import React, { useEffect, useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import {addToDb, getStoredCart} from '../../utilities/databaseManager'
import fakeData from '../../fakeData';
import Cart from '../Cart/Cart';
import Header from '../Header/Header';
import Product from '../Product/Product';
import './Shop.css';
import Rating from 'react-rating';


const Shop = () => {
    const fakeData15 =fakeData.slice(0,15);
    const [products ,setProducts] = useState(fakeData15);
    
    
    const[cart ,setCart]=useState([])
    const [searchProduct ,setSearchProduct]= useState([fakeData15]);
    
  const handleAddToCart = (product) => {
  const newCart =[...cart,product];
  console.log(product);
  setCart(newCart); 
  addToDb(product.key )
    

  }
  useEffect(()=>{
    if(products.length){
      const saveCart =getStoredCart();
      const storedCart = [];
    for(const key in saveCart) {
    
      const addedProduct = products.find(product => product.key === key)
      storedCart.push(addedProduct);
    }
 
    }
  },[products])
  const icon =<FontAwesomeIcon icon={faShoppingCart}  />
  const searchIcon =<FontAwesomeIcon icon={faSearch} />
  const handleSearch = (event)=>{
   
    const searchText = event.target.value ;
    const matchedProducts = products.filter(product =>product.name.toLowerCase().includes(searchText.toLowerCase()))
    console.log(matchedProducts.length);
    setSearchProduct(matchedProducts);
   
  }
    return (
        <>
        <div className="topnavs">
       <span className="search-icon"> <input type="text" onChange={handleSearch} placeholder="Search.."/> </span>

        </div>
        <div className="shop-container">
            <div className="product-container">
            {
                products.map((product)=>(
                 <div className="product-cart">
                   
            
                      <Card border='0' style={{ width: '18rem'  }}>
  <Card.Img variant="top" src={product.img}  />
  <Card.Body className="description">
    <Card.Title className="title">{product.name}</Card.Title>
    <Card.Text className="price">
      <h1  >${product.price}</h1>
                  <Rating className="rating" initialRating={product.star}>
                 
                  </Rating>
      
    </Card.Text>
    
  </Card.Body>
  <Button variant="primary" onClick={()=>handleAddToCart(product)}>{icon}
   Add to cart</Button> 
</Card>  
                 </div>   
                ))

            }
              
              </div>
                
            
          
            <div className="cart-container">
               <Cart cart={cart}></Cart>
            </div>
            
        </div>
        </>
    );
};

export default Shop;