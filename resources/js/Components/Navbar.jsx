// Navbar.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { Link, usePage } from '@inertiajs/react';

const MotionLink = motion(Link);
const MotionA = motion.a;

export default function Navbar() {
    const { auth } = usePage().props; // Mengambil properti auth dari props Inertia.js

    // Variants for animations
    const navVariants = {
        hidden: { opacity: 0, y: -20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: 'spring',
                stiffness: 80,
                damping: 20,
            },
        },
    };

    const linkHoverEffect = {
        hover: {
            scale: 1.1,
            textShadow: '0px 0px 8px rgba(255, 255, 255, 0.8)',
            transition: {
                duration: 0.3,
            },
        },
    };

    return (
        <motion.nav
            className="flex justify-between items-center p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
        >
            {/* Logo */}
            <motion.div
                className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500"
                whileHover={{ scale: 1.1 }}
            >
                MyApp
            </motion.div>

            {/* Links */}
            <div className="space-x-6 flex items-center">
                <MotionLink
                    href="/"
                    className="text-lg font-semibold hover:text-blue-300"
                    variants={linkHoverEffect}
                    whileHover="hover"
                >
                    Home
                </MotionLink>

                <MotionLink
                    href="#about"
                    className="text-lg font-semibold hover:text-blue-300"
                    variants={linkHoverEffect}
                    whileHover="hover"
                >
                    About
                </MotionLink>
                <MotionLink
                    href={route('products')}
                    className="text-lg font-semibold hover:text-blue-300"
                    variants={linkHoverEffect}
                    whileHover="hover"
                >
                    Products
                </MotionLink>

                {/* Auth Links */}
                {auth.user ? (
                    <MotionLink
                        href={route('dashboard')}
                        className="bg-blue-600 py-2 px-5 rounded-full text-white font-semibold hover:bg-blue-500"
                        variants={linkHoverEffect}
                        whileHover="hover"
                    >
                        Dashboard
                    </MotionLink>
                ) : (
                    <>
                        <MotionLink
                            href={route('login')}
                            className="text-lg font-semibold hover:text-blue-300"
                            variants={linkHoverEffect}
                            whileHover="hover"
                        >
                            Login
                        </MotionLink>
                        <MotionA
                            href={route('register')}
                            className="bg-gradient-to-r from-blue-500 to-purple-500 py-2 px-5 rounded-full text-white font-semibold hover:from-blue-400 hover:to-purple-400 shadow-lg"
                            variants={linkHoverEffect}
                            whileHover="hover"
                        >
                            Register
                        </MotionA>
                    </>
                )}
            </div>
        </motion.nav>
    );
}
