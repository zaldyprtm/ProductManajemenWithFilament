import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Head } from '@inertiajs/react';
import { animate, motion, spring } from 'framer-motion';
import { FaBeer, FaRemoveFormat } from "react-icons/fa";
import Navbar from '@/Components/Navbar';
import { Delete } from 'lucide-react';

const Product = () => {

    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        axios.get('/api/laptops').then((response) => {
            setProducts(response.data.data);
        });
    }, []);

    const addToCart = (product) => {
        const existingProduct = cart.find((item) => item.id === product.id);
        
        if (existingProduct) {
            setCart(cart.map((item) => 
                item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
            ));
        } else {
            setCart([...cart, { ...product, quantity: 1 }]);
        }
    };

    const incrementQuantity = (productId) => {
        setCart(cart.map((item) =>
            item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
        ));
    };

    const decrementQuantity = (productId) => {
        setCart(cart.map((item) =>
            item.id === productId && item.quantity > 1
                ? { ...item, quantity: item.quantity - 1 }
                : item
        ));
    };

    const removeFromCart = (productId) => {
        setCart(cart.filter((item) => item.id !== productId));
    };

    const handleCheckout = () => {
        console.log("Checkout with: ", cart);
        alert("Checkout berhasil!");
        setCart([]);
    };

    return (
        <>
            <Head title="Product" />
            <motion.div
                className="bg-gradient-to-r from-blue-900 via-purple-900 to-gray-900 text-gray-100"
                initial="hidden"
                animate="visible"
            >
                <Navbar />



                <div className='mt-10'>
                    <div className='text-center font-bold mb-10 text-2xl uppercase'>
                <motion.h1
                animate={{  opacity: 1, type: "spring", rotate: 360, in: true, y: 0 }}
                >
                        <h1>Products</h1>
                </motion.h1>
                    </div>

                    <motion.div
                        className="text-md font-extrabold text-white drop-shadow-lg"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{  opacity: 1, type: "spring", }}
                        transition={{ delay: 0.5 }}
                      
                    >
                        <div className='w-[900px] mx-auto gap-8 mt-6 grid grid-cols-3'>
                            {products.map((product) => (
                                <div
                                    key={product.id}
                                    className='w-56 bg-white/20 mb-6 backdrop-blur-lg text-black flex flex-col justify-center items-center rounded-xl shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl'
                                >
                                    <img
                                        src={product.image}
                                        alt={product.title}
                                        className='w-44 object-cover mt-4'
                                    />
                                    <h1 className='text-center text-lg text-white font-bold mt-4 mb-4'>
                                        {product.title}
                                    </h1>
                                    <p className='text-center text-white text-sm'>Rp {product.price}</p>
                                    <button
                                        className='mt-4 bg-blue-600 text-white px-4 py-2 mb-5 rounded-lg hover:bg-blue-800 transition'
                                        onClick={() => addToCart(product)}
                                    >
                                        Add to Cart
                                    </button>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Tampilkan keranjang */}
                    {cart.length > 0 && (
                        <div className='mt-10 w-[900px] mx-auto'>
                            <h2 className='text-lg font-bold text-white mb-4'>Cart:</h2>
                            <div className="bg-white p-4 rounded-lg shadow-lg">
                                {cart.map((item) => (
                                    <div key={item.id} className="flex text-black justify-between items-center border-b py-2">
                                        <div className="flex items-center">
                                            <img
                                                src={item.image}
                                                alt={item.title}
                                                className='w-16 h-16 object-cover rounded-md'
                                            />
                                            <div className="ml-4">
                                                <h3 className='font-bold'>{item.title}</h3>
                                                <p className='text-sm'>Rp {item.price}</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center">
                                            <button
                                                className="bg-red-500 text-white px-2 rounded-lg"
                                                onClick={() => decrementQuantity(item.id)}
                                            >
                                                -
                                            </button>
                                            <p className='text-sm mx-4'>{item.quantity}</p>
                                            <button
                                                className="bg-green-500 text-white px-2 rounded-lg"
                                                onClick={() => incrementQuantity(item.id)}
                                            >
                                                +
                                            </button>
                                        </div>
                                        <div className='flex flex-col items-center'>
                                            <p className='text-sm mb-2'>Subtotal: Rp {item.price * item.quantity}</p>
                                            <button
                                                className="bg-red-600 text-white px-3 py-1 rounded-lg hover:bg-red-800 transition"
                                                onClick={() => removeFromCart(item.id)}
                                            >
                                           
                                                <Delete />
                                            </button>
                                        </div>
                                    </div>
                                ))}
                                <div className='text-black px-4'>
                                    Total Price: Rp {cart.reduce((total, item) => total + item.price * item.quantity, 0)}
                                </div>
                            </div>
                            <button
                                className='mt-4 mb-10 bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-800 transition w-full'
                                onClick={handleCheckout}
                            >
                                Checkout
                            </button>
                        </div>
                    )}

                </div>
            </motion.div>
        </>
    );
}

export default Product;
