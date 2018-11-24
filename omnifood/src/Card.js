import React from 'react';
import './WEB.css';

const CardComponent = ({h3 ,price, priceMeal,l1,l2,l3,l4,checkmark,btn}) =>{
	return(
		<div className="plan-box">
			<div>
				<h3>{h3}</h3>
				<p className="plan-price">{price}  <span className="price-month">/ month</span></p>
				<p className="plan-price-meal">{priceMeal}</p>
			</div>
			<div>
				<ul>
					<li><i className="icon ion-ios-checkmark icon-small "></i>{l1}</li>
					<li><i class="icon ion-ios-checkmark icon-small"></i>{l2}</li>
					<li><i class={"icon ion-ios-"+checkmark+" icon-small"}></i>{l3}</li>
					<li><i class="icon ion-ios-checkmark icon-small"></i>{l4}</li>
				</ul>
			</div>
			<div>
				<a href="#" className={"btn btn-"+btn}>Sign Up Now</a>
			</div>
		</div>
	);
}

export default CardComponent;