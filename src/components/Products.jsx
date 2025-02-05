import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../store/cartSlice';
import { fetchProducts } from '../store/productSlice';


const Products = () => {
    const dispatch=useDispatch();
    const [products, setProducts] = useState([]);

    useEffect(() => {
        //dispatching the event to call the redux thunk
        //dispatched call will get the payload, thats why used data.payload
        dispatch(fetchProducts())
            .then((finalData)=>setProducts(finalData.payload))

        // useEffect(()=>{
        //     fetch(`https://api.themoviedb.org/3/movie/${params.movieId}?api_key=8354900fa8128c3718d78af6c4422d08`)
        //     .then((res)=>res.json())
        //     .then((data)=>setMovieDetail(data))
        
        // const fetchProducts = async () => {
        //     const res = await fetch('https://fakestoreapi.com/products');
        //     const data = await res.json();
        //     console.log(data);
        //     setProducts(data);
        // };
        // fetchProducts();
    }, []);
    
    //dispatching an actiontype with payload to the reducer in the store
    //the addTocart action type was declared in the reducer in cartSlice
    const handleAdd=(product)=>{
        dispatch(addToCart(product))
    }

    return (
        <div className="productsWrapper">
            {products.map((product) => (
                <div className="card" key={product.id}>
                    <img src={product.image} alt="" />
                    <h4>{product.title}</h4>
                    <h5>{product.price}</h5>
                    <button onClick={() => handleAdd(product)} className="btn">
                        Add to cart
                    </button>
                </div>
            ))}
        </div>
    );
};

export default Products;