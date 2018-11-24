import React, { Component } from 'react';
import './WEB.css'
import './Grid.css'
import './normalize.css'
import ScrollAnimation from 'react-animate-on-scroll';
import Card from './Card.js';
// IMAGES
import logo from './img/logo-white.png'
import jpg1 from './img/1.jpg';
import jpg2 from './img/2.jpg';
import jpg3 from './img/3.jpg';
import jpg4 from './img/4.jpg';
import jpg5 from './img/5.jpg';
import jpg6 from './img/6.jpg';
import jpg7 from './img/7.jpg';
import jpg8 from './img/8.jpg';
import jpg9 from './img/back-customers.jpg';
// Phone Pics
import phonepic from './img/app-iPhone.png';
import appledownload from './img/download-app.svg';
import androiddownload from './img/download-app-android.png';
// City Pics
import sanFran from './img/san-francisco.jpg';
import london from './img/london.jpg';
import berlin from './img/berlin.jpg';
// customers 
import customer1 from './img/customer-1.jpg';
import customer2 from './img/customer-2.jpg';
import customer3 from './img/customer-3.jpg';


const Header = () => {
	return(
		<header>
			<nav>
				<div className="row">
					<img className="logo" src={logo} alt="omnifoodlogo" />
					<ul className="main-nav">
						<li><a href="#food-delivery">Food delivery</a></li>
						<li><a href="#how-it-works">How it works</a></li>
						<li><a href="#our-cities">Our cities</a></li>
						<li><a href="#">Sign up</a></li>
					</ul>
				</div>
			</nav>

			<div className="hero-text-box">
				<h1>Goodbye junk food.<br/>Hello super healthy meals.</h1>
				<a className="btn btn-full" href="#">I am hungry</a>
				<a className="btn btn-ghost" href="#">Show me more</a>
			</div>
		</header>
	)
}

const Feature = () => {
	return(
		<section id="food-delivery" className="section-features">
			<div className="row">
				<h2>Get food fast &mdash; not fast food</h2>
				<p className="long-copy">
				Hello, we're Omnifood, your new premium food delivery service. We know you're always busy. 
				No time for cooking. So let us take care of that, we're really good at it, we promise!
				</p>
			</div>

			<div className="row">
				<div className="col span-1-of-4 box">
					<ScrollAnimation animateIn="fadeIn" animateOnce>
						 <i class="icon ion-ios-infinite icon-big"></i>
					 	<h3>UP TO 365 DAYS/YEAR</h3>
					 	<p>
					 		Never cook again! We really mean that. 
					 		Our subscription plans include up to 365 days/year coverage. 
					 		You can also choose to order more flexibly if that's your style.
					 	</p>
					 </ScrollAnimation>
				</div>

				<div className="col span-1-of-4 box">
					<ScrollAnimation animateIn="fadeIn" animateOnce>
						 <i class="icon ion-md-stopwatch icon-big"></i>
						 <h3>READY IN 20 MINUTES</h3>
						 <p>
						 	You're only twenty minutes away from your delicious and super healthy meals delivered right to your home. 
						 	We work with the best chefs in each town to ensure that you're 100% happy.
						 </p>
					</ScrollAnimation>
				</div>

				<div className="col span-1-of-4 box">
					<ScrollAnimation animateIn="fadeIn" animateOnce>
						 <i class="icon ion-ios-nutrition icon-big"></i>
						 <h3>100% ORGANIC</h3>
					 	<p>
							Never cook again! We really mean that. Our subscription plans include up to 365 days/year coverage. 
							You can also choose to order more flexibly if that's your style.
						 </p>
					</ScrollAnimation>
				</div>

				<div className="col span-1-of-4 box">
					<ScrollAnimation animateIn="fadeIn" animateOnce>
					 	<i class="icon ion-ios-cart icon-big"></i>
						 <h3>ORDER ANYTHING</h3>
						 <p>
						 	We don't limit your creativity, which means you can order whatever you feel like. 
						 	You can also choose from our menu containing over 100 delicious meals. It's up to you!
						 </p>
					</ScrollAnimation>
				</div>
			</div>

		</section>
	);
}

const Meals = () => {
	return(
		<section className="section-meals">
			<ul className="meal-showcase clearfix">
				<li>
					<figure className="meal-photo">
						<img src={jpg1} alt="egg"className="meals"/>
					</figure>
				</li>
				<li>
					<figure className="meal-photo">
						<img src={jpg2} alt="pizza"className="meals"/>
					</figure>
				</li>
				<li>
					<figure className="meal-photo">
						<img src={jpg3} alt="salad"className="meals"/>
					</figure>
				</li>
				<li>
					<figure className="meal-photo">
						<img src={jpg4} alt="soup"className="meals"/>
					</figure>
				</li>
			</ul>

			<ul className="meal-showcase clearfix">
				<li>
					<figure className="meal-photo">
						<img src={jpg5} alt="steak"className="meals"/>
					</figure>
				</li>
				<li>
					<figure className="meal-photo">
						<img src={jpg6} alt="sandwich"className="meals"/>
					</figure>
				</li>
				<li>
					<figure className="meal-photo">
						<img src={jpg7} alt="burger"className="meals"/>
					</figure>
				</li>
				<li>
					<figure className="meal-photo">
						<img src={jpg8} alt="desert"className="meals"/>
					</figure>
				</li>
			</ul>
		</section>
	);
}

const HowItWorks = () =>{
	return(
		<section className="section-steps" id="how-it-works">
			<div className="row">
				<h2>how it works &mdash; simple as 1, 2, 3</h2>
			</div>
			<div className="row">
				<div className="col span-1-of-2 steps-box">
					<ScrollAnimation animateIn="fadeInUpBig" animateOnce>
						<img src={phonepic} alt="phonepic" className="app-screen"/>
					</ScrollAnimation>
				</div>
				<div className="col span-1-of-2 steps-box">
					<div className="work-steps">
						<div>1</div>
						<p>
						Choose the subscription plan that best fits your needs
						and sign up today.
						</p>
					</div>
					<div className="work-steps">
						<div>2</div>
						<p>
						Order your delicious meal using our mobile 
						app or website. Or you can even call us!
						</p>
					</div>
					<div className="work-steps">
						<div>3</div>
						<p>
						Enjoy your meal after less than 20 minutes. See you the next time!
						</p>
					</div>

					<a href="#" className="btn-app">
					<img src={appledownload}/>
					</a>

					<a href="#" className="btn-app">
					<img src={androiddownload}/>
					</a>
				</div>
			</div>
		</section>
	);
}

const Cities = () =>{
	return(
		<section className="section-cities" id="our-cities">
			<div className="row">
				<h2>We're currently in these cities</h2>
			</div>
			<div className="row">
				<ScrollAnimation animateIn="fadeIn" animateOnce>
					<div className="col span-1-of-4 box">
						<img src={"https://media-cdn.tripadvisor.com/media/photo-s/0e/9a/e3/1d/freedom-tower.jpg"} className="city-pics" alt="NY"/>
						<h3 className="city-name">New York</h3>
						<div className="city-feature">
							<i class="icon ion-ios-contacts icon-small"></i> 
							&nbsp;1600+ happy eaters
						</div>
						<div className="city-feature">
							<i class="icon ion-md-star-outline icon-small"></i>
							&nbsp;60+ top chefs
						</div>
						<div className="city-feature">
							<i class="icon ion-logo-instagram icon-small"></i>
							&nbsp;<span className="instagram">@omnifood_ny</span>
						</div>
					</div>
					<div className="col span-1-of-4 box">
						<img src={sanFran} className="city-pics" alt="san-fran"/>
						<h3 className="city-name">San Francisco</h3>
						<div className="city-feature">
							<i class="icon ion-ios-contacts icon-small"></i>
							&nbsp;3700+ happy eaters
						</div>
						<div className="city-feature">
							<i class="icon ion-md-star-outline icon-small"></i>
							&nbsp;120+ top chefs
						</div>
						<div className="city-feature">
							<i class="icon ion-logo-instagram icon-small"></i>
							&nbsp;<span className="instagram">@omnifood_sf</span>
						</div>
					</div>
					<div className="col span-1-of-4 box">
						<img src={berlin} className="city-pics"alt="berlin"/>
						<h3 className="city-name">Berlin</h3>
						<div className="city-feature">
							<i class="icon ion-ios-contacts icon-small"></i>
							&nbsp;2300+ happy eaters
						</div>
						<div className="city-feature">
							<i class="icon ion-md-star-outline icon-small"></i>
							&nbsp;90+ top chefs
						</div>
						<div className="city-feature">
							<i class="icon ion-logo-instagram icon-small"></i>
							&nbsp;<span className="instagram">@omnifood_br</span>
						</div>
					</div>
					<div className="col span-1-of-4 box">
						<img src={london} className="city-pics" alt="london"/>
						<h3 className="city-name">London</h3>
						<div className="city-feature">
							<i class="icon ion-ios-contacts icon-small"></i>
							&nbsp;4200+ happy eaters
						</div>
						<div className="city-feature">
							<i class="icon ion-md-star-outline icon-small"></i>
							&nbsp;70+ top chefs
						</div>
						<div className="city-feature">
							<i class="icon ion-logo-instagram icon-small"></i>
							&nbsp; <span className="instagram">@omnifood_ln</span>
						</div>
					</div>
				</ScrollAnimation>
				</div>

		</section>
	);
}

const Reviews = () =>{
	return(
		<section className="section-reviews">
			<div className="row">
				<h2>OUR CUSTOMERS DEPEND ON OUR HEALTHY STEALTHY <br/>MEALS.</h2>
			</div>
			<div className="row">
				<div className="col span-1-of-3">

					<blockquote>
						Omnifood is just awesome! I just launched a startup which leaves me with no time for cooking, so Omnifood is a life-saver. Now that I got used to it, I couldn't live without my daily meals!
						<cite>
							<img src={customer1} alt="customer1"/>
							Tasneem Razvi
						</cite>
					</blockquote>
				</div>
				<div className="col span-1-of-3">
					<blockquote>
						Inexpensive, healthy and great-tasting meals, delivered right to my home. We have lots of food delivery here in Lisbon, but no one comes even close to Omifood. Me and my family are so in love!
						<cite>
							<img src={customer2} alt="customer1"/>
							Faisal Harris
						</cite>
					</blockquote>
				</div>
				<div className="col span-1-of-3">
					<blockquote>
						I was looking for a quick and easy food delivery service in San Franciso. I tried a lot of them and ended up with Omnifood. Best food delivery service in the Bay Area. Keep up the great work!
						<cite><img src={customer3} alt="customer1"/>Givon Givonsha</cite>
					</blockquote>
				</div>
			</div>
		</section>
	);
}

const SignUp = () =>{
	return(
		<section className="section-signup">
			<div className="row">
				<h2>START EATING HEALTHY TODAY</h2>
			</div>
			<div className="row">
				<div className="col span-1-of-3">
					<ScrollAnimation animateIn="pulse" animateOnce initiallyVisible="true">
						<Card h3="Premium" price="399" priceMeal="That's only $14.90 per meal" l1="1 meal every day" l2="Order 24/7" l3="Access to newest creations" l4="Free delivery" checkmark="checkmark"btn="full"/>
					</ScrollAnimation>
				</div>
				<div className="col span-1-of-3">
					<ScrollAnimation animateIn="pulse" delay="500" initiallyVisible="true" animateOnce>
						<Card h3="Pro" price="149" priceMeal="That's only $13.30 per meal" l1="1 meal 10 days a month" l2="Order 24/7" l3="Access to newest creations" l4="Free delivery"checkmark="checkmark"btn="ghost"/>
					</ScrollAnimation>
				</div>
				<div className="col span-1-of-3">
					<ScrollAnimation animateIn="pulse" delay="1000"initiallyVisible="true" animateOnce>
						<Card h3="Starter" price="$19" priceMeal="&nbsp;" l1="1 meal" l2="Order from 8 am to 12 pm" l3="N/A" l4="Free delivery"checkmark="close" btn="ghost"/>
					</ScrollAnimation>
				</div>
			</div>
		</section>
	);
}

const Contact = () =>{
	return(
		<section className="section-contact">
			<div className="row">
				<h2>we're happy to hear from you</h2>
			</div>
				<div className="row">
					<form method="post" className="contact-form">
						<div className="row">
							<div className="col span-1-of-3">
								<label>Name</label>
							</div>
							<div className="col span-2-of-3">
								<input type="text" placeholder="Your Name" required/>
							</div>
						</div>
						<div className="row">
							<div className="col span-1-of-3">
								<label>Email</label>
							</div>
							<div className="col span-2-of-3">
								<input type="email" placeholder="Your Email"required/>
							</div>
						</div>
						<div className="row">
							<div className="col span-1-of-3">
								<label>How did you find us?</label>
							</div>
							<div className="col span-2-of-3">
								<select name="choose">
									<option value="Friends">Friends</option>
									<option value="Google">Google</option>
									<option value="Facebook">Facebook</option>
									<option value="Other">Other</option>
								</select>
							</div>
						</div>
						<div className="row">
							<div className="col span-1-of-3">
								<label>Newsletter?</label>
							</div>
							<div className="col span-2-of-3">
								<input type="checkbox" checked/> Yes Please!
							</div>
						</div>
						<div className="row">
							<div className="col span-1-of-3">
								<label>Drop us a message</label>
							</div>
							<div className="col span-2-of-3">
								<textarea name="message" placeholder="Your Message"></textarea>
							</div>
						</div>
						<div className="row">
							<div className="col span-1-of-3">
								
							</div>
							<div className="col span-2-of-3">
								<a href="#" className="btn btn-ghost">Send It!</a>
							</div>
						</div>
					</form>
				</div>
			
		</section>
	);
}

const Footer = () =>{
	return(
		<footer>
			<div className="row">
			 	<div className="col span-1-of-2">
			 		<ul className="footer-nav">
			 			<li><a href="#">About us</a></li>
			 			<li><a href="#">Blog</a></li>
			 			<li><a href="#">Press</a></li>
			 			<li><a href="#">IOS Download</a></li>
			 			<li><a href="#">Android Download</a></li>
			 		</ul>
			 	</div>
			 	<div className="social-links">
			 		<ul>
			 			<li><a href="#" className="icon-links"><i class="icon ion-logo-facebook "></i></a></li>
			 			<li><a href="#" className="icon-links"><i class="icon ion-logo-instagram"></i></a></li>
			 			<li><a href="#" className="icon-links"><i class="icon ion-logo-twitter "></i></a></li>
			 			<li><a href="#" className="icon-links"><i class="icon ion-logo-googleplus"></i></a></li>
			 		</ul>
			 	</div>
			</div>
			<div className="row">
				<p>Copyright © 2019 built by Amaan Harris. All rights reserved</p>
			</div>
		</footer>
	);
}

class WEB extends Component{
	render(){
		return(
			<div>
       			<Header/>
       			<Feature/>
       			<Meals/>
       			<HowItWorks/>
       			<Cities/>
       			<Reviews/>
       			<SignUp/>
       			<Contact/>
       			<Footer/>
    		</div>
		);
	}
}

export default WEB;