import React from 'react';
import './Cart.css';

const Cart = (props) => {
	const roundTwoDecimal = (number) => {
		return Math.round(number * 100) / 100;
	};
	var itemPrice = props.cart.reduce((prev, item) => item.price * (item.quantity || 1) + prev, 0);

	var shippingPrice = props.cart.reduce((prev, item) => item.shipping * (item.quantity || 1) + prev, 0);

	var price = roundTwoDecimal(itemPrice);
	var shipping = roundTwoDecimal(shippingPrice);
	var tax = roundTwoDecimal((price + shipping) * 0.1);
	var beforeTax = roundTwoDecimal(price + shipping);
	var total = roundTwoDecimal(price + shipping + tax);

	const cart = props.cart;

	return (
		<div className="cart">
			<h3>Order Summary</h3>
			<p>Items ordered:{cart.length}</p>
			<table>
				<tbody>
					<tr>
						<td>Items:</td>
						<td>${price}</td>
					</tr>
					<tr>
						<td>Shipping & Handling:</td>
						<td>${shipping}</td>
					</tr>
					<tr>
						<td>Total before tax:</td>
						<td>${beforeTax}</td>
					</tr>
					<tr>
						<td>Estimated Tax:</td>
						<td>${tax}</td>
					</tr>
					<tr className="total-row">
						<td>Order Total:</td>
						<td>${total}</td>
					</tr>
				</tbody>
			</table>
			{props.children}
		</div>
	);
};

export default Cart;
