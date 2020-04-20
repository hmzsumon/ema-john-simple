import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { getDatabaseCart, removeFromDatabaseCart, processOrder } from '../../utilities/databaseManager';
import fakeData from '../../fakeData';
import ReviewItem from '../ReviewItem/ReviewItem';
import Cart from '../Cart/Cart';
import happyImage from '../../images/giphy.gif';
import { Link } from 'react-router-dom';
import { useAuth } from '../Login/useAuth';

const Review = () => {
	const [cart, setCart] = useState([]);
	const [orderPlaced, setOrderPlaced] = useState(false);

	const auth = useAuth();

	const hendlePlaceOrder = () => {
		setCart([]);
		setOrderPlaced(true);
		processOrder();
	};

	const removeProduct = (productKey) => {
		const newCart = cart.filter((pd) => pd.key !== productKey);
		setCart(newCart);
		removeFromDatabaseCart(productKey);
	};
	useEffect(() => {
		const savedCart = getDatabaseCart();
		const productKeys = Object.keys(savedCart);
		const cartProduct = productKeys.map((key) => {
			const product = fakeData.find((pd) => pd.key === key);
			product.quantity = savedCart[key];
			return product;
		});
		setCart(cartProduct);
	}, []);

	let thankYou;
	if (orderPlaced) {
		thankYou = <img src={happyImage} alt="" />;
	}
	return (
		<div className="shop-container">
			<div className="product-container">
				{cart.map((pd) => (
					<ReviewItem key={pd.key} removeProduct={removeProduct} product={pd}></ReviewItem>
				))}
				{thankYou}
				{!cart.length && (
					<h2>
						Your Cart is empty. <a href="/shop">Keep Shopping</a>
					</h2>
				)}
			</div>
			<div className="cart-container">
				<Cart cart={cart}>
					<Link to="/shipment">
						{auth.user ? (
							<button className="main-button">Proceed CheckOut</button>
						) : (
							<button className="main-button">Login To Proceed</button>
						)}
					</Link>
				</Cart>
			</div>
		</div>
	);
};

export default Review;
