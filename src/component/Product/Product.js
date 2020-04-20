import React from 'react';
import './Product.css';
import '../../../node_modules/font-awesome/css/font-awesome.min.css';
import { Link } from 'react-router-dom';

const Product = (props) => {
	const { img, name, seller, price, stock, features, key } = props.product;

	return (
		<div className="product">
			<div>
				<img src={img} alt="" />
			</div>
			<div>
				<h4 className="product-name">
					<Link to={'/product/' + key}>{name}</Link>
				</h4>
				<p>
					<small> by: {seller}</small>
				</p>
				<div className="product-description">
					<div>
						<p>${price}</p>
						<p>
							<small>only {stock} left in stock - order soon</small>
						</p>
						{props.showAddToCart && (
							<button onClick={() => props.handleAddProduct(props.product)} className="main-button">
								<i className="fa fa-shopping-cart"></i>
								<span> add to cart</span>{' '}
							</button>
						)}
					</div>
					<div>
						<h4>Features:</h4>
						<ul>
							{features.map((pd, i) => (
								<li key={i}>
									{pd.description}: <strong style={{ color: 'orange' }}>{pd.value}</strong>
								</li>
							))}
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Product;
