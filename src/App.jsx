// CSS
import './App.scss';

// React Router Dom
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Context
import { CartProvider } from './contexts/CartContext';

// Components
import Navigator from './components/Navigator/Navigator';

// Pages
import Home from './pages/Home/Home';
import ItemsCategories from './pages/ItemsCategories/ItemsCateogries';
import ItemDetail from './pages/ItemDetail/ItemDetail';
import Cart from './pages/Cart/Cart';
import OrderForm from './pages/OrderForm/OrderForm';
import UserData from './pages/User/UserData';

// TanStack
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

/* Imports */

function App() {
    const client = new QueryClient();
    return (
        <div className='App'>
            <Router>
                <CartProvider>
                    <QueryClientProvider client={client}>
                        <Navigator />

                        <Routes>
                            <Route
                                path='/'
                                element={<Home pageNum={1} />}
                            />

                            <Route
                                path='/page/:pageNum'
                                element={<Home />}
                            />

                            <Route
                                path='/category/:categoryId'
                                element={<ItemsCategories />}
                            />

                            <Route
                                path='/item/:id'
                                element={<ItemDetail />}
                            />

                            <Route
                                path='/cart'
                                element={<Cart />}
                            />

                            <Route
                                path='/order'
                                element={<OrderForm />}
                            />

                            <Route
                                path='/user'
                                element={<UserData />}
                            />
                        </Routes>
                    </QueryClientProvider>
                </CartProvider>
            </Router>
        </div>
    );
}

export default App;
