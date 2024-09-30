import '../css/app.css';
import './bootstrap';
import { createInertiaApp } from '@inertiajs/react';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './Components/Footer';

// Halaman React tambahan untuk Product Detail
import Product from './Pages/Product';

const appName = import.meta.env.VITE_APP_NAME || 'Laravel';

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) =>
        resolvePageComponent(
            `./Pages/${name}.jsx`,
            import.meta.glob('./Pages/**/*.jsx'),
        ),
    setup({ el, App, props }) {
        const root = createRoot(el);

        root.render(
            <Router>
                {/* Gunakan React Router di sini */}
                <Routes>
                    {/* Route utama yang akan menghandle seluruh routing Inertia */}
                    <Route path="/*" element={<App {...props} />} />
                    {/* Tambahkan route React langsung untuk halaman produk */}
                    <Route path="/products/:id" element={<Product />} />
                </Routes>
                <Footer />
            </Router>
        );
    },
    progress: {
        color: '#4B5563',
    },
});
