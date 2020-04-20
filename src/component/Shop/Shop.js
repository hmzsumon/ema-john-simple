import React, { useEffect } from 'react';
import fakeData from '../../fakeData';
import { useState } from 'react';
import './Shop.css';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import { Link } from 'react-router-dom';
import { addToDatabaseCart, getDatabaseCart } from '../../utilities/databaseManager';
const Shop = () => {
	const first10 = fakeData.slice(0, 10);
	const [products, setProducts] = useState(first10);
	const [cart, setCart] = useState([]);

	useEffect(() => {
		const savedCart = getDatabaseCart();
		const productKeys = Object.keys(savedCart);
		const previousCart = productKeys.map((existingKey) => {
			const product = fakeData.find((pd) => pd.key === existingKey);
			product.quantity = savedCart[existingKey];
			return product;
		});
		setCart(previousCart);
	}, []);

	const handleAddProduct = (product) => {
		console.log('added Product', product);
		const newCArt = [...cart, product];
		setCart(newCArt);
		const sameProduct = newCArt.filter((pd) => pd.key === product.key);
		const count = sameProduct.length;
		addToDatabaseCart(product.key, count);
	};
	return (
		<div>
			<div className="search-container">
				<input type="text" placeholder="type here to search" />
				<span className="cart-count">{cart.length}</span>
			</div>
			<div className="shop-container">
				<div className="product-container">
					{products.map((pd) => (
						<Product
							key={pd.key}
							showAddToCart={true}
							handleAddProduct={handleAddProduct}
							product={pd}
						></Product>
					))}
				</div>
				<div className="cart-container">
					<Cart cart={cart}>
						<Link to="/review">
							<button className="main-button">
								<span>Review Order</span>
							</button>
						</Link>
					</Cart>
				</div>
			</div>
		</div>
	);
};

export default Shop;
