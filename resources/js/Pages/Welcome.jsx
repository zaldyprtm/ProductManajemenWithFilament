import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Head } from '@inertiajs/react';

import Navbar from '@/Components/Navbar'; // Impor komponen Navbar

export default function Welcome({ auth }) {
    return (
        <>
            <Head title="Welcome" />
            <motion.div
                className="bg-gradient-to-r from-blue-900 via-purple-900 to-gray-900 text-gray-100"
                initial="hidden"
                animate="visible"
            >
                {/* Menggunakan komponen Navbar */}
                <Navbar />

                {/* Example Background and Main Content */}
                <div className="relative min-h-screen flex flex-col items-center justify-center bg-cover bg-center"
                    style={{ backgroundImage: 'url(https://source.unsplash.com/1600x900/?technology)' }}>
                    <div className="text-center space-y-6">
                        <motion.h1
                            className="text-5xl font-extrabold text-white drop-shadow-lg"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1 }}
                        >
                            Mau Cari Apa Nich
                        </motion.h1>
                        <motion.p
                            className="text-xl text-gray-300"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 0.3 }}
                        >
                            Kita lagi jualan Bre.
                        </motion.p>
                    </div>
                </div>
            </motion.div>

            {/* Animasi saat scroll dengan whileInView */}
            <motion.div
                className="py-20"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                animate={{ x: 20 }}
            >
                <div className="container mx-auto text-center">
                    <motion.h2
                        className="text-4xl font-bold "
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                    >
                        <h1>Gass Belanja disini bre!!</h1>
                    </motion.h2>
                    <motion.p
                        className="text-lg  mt-4"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.3 }}
                    >
                        Banyak produk yang kece dan yang tentunya terjangkau.
                    </motion.p>
                </div>
            </motion.div>

            <motion.div
                className="py-10 rounded-4xl mb-10 bg-gradient-to-r from-blue-900 via-purple-900 rounded-full  to-gray-900 "
                initial={{ opacity: 0, x: -200 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
            >
                <div className="container flex flex-row items-center justify-center p-10 text-black mx-auto rounded-2xl  mb-6 gap-20 text-center">
                        <img src="https://p2-ofp.static.pub/fes/cms/2023/02/14/l4izz1nzdy43ql41ll67up9emzl0xm207544.png" alt="Thinkpad T16" className='w-96' />

                
                            <img src="https://p3-ofp.static.pub/fes/cms/2023/02/21/71hippme0mno109uvlhv1rpz4x823r648545.png" alt="" className='w-96' />
                 
                </div>
                    <div className='flex items-center justify-center'>

                    <p className="text-4xl font-semibold text-white mt-10">
                            Produk berkualitas tinggi
                    </p>
                    </div>
            </motion.div>
        </>
    );
}
