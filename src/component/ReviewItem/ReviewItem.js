import React from 'react';
import './ReviewItem.css';

import shippingCosts from '../../fakeData/shippingCosts';
import ShippingOption from '../ShippingOption/ShippingOption';

const ReviewItem = (props) => {
	console.log(props);
	const { name, price, seller, quantity, key } = props.product;

	return (
		<div className="cart-item">
			<h4>{name}</h4>
			<div className="cart-item-container">
				<div className="cart-item-description">
					<p className="price">${price}</p>
					<p>
						<small>sold by:{seller}</small>
					</p>
					<p>Quantity:{quantity}</p>
					<button className="main-button" onClick={() => props.removeProduct(key)}>
						Remove
					</button>
				</div>
				<div className="shipping-options">
					{/* <h5>Shipping options</h5>
					{shippingOptions.map((option) => (
						<ShippingOption key={option.type} option={option} shipping={shipping} />
					))} */}
				</div>
			</div>
		</div>
	);
};

export default ReviewItem;
