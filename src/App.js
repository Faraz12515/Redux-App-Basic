import React from 'react';
import About from './components/About';
import Home from './components/Home';
import NavBar from './NavBar';

import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { anothername, addWish } from './actions/myaction';

function App(props) {
	const myWish = props.myWish.map((item) => {
		return <h2 key={Math.random()}>{item}</h2>;
	});

	console.log(props);

	return (
		<BrowserRouter>
			<div className='App'>
				<NavBar />
				<Route exact path='/' component={Home} />
				<Route path='/about' component={About} />
				<h1>My name is {props.myName}</h1>
				<h1>My wishes are {props.myWish}</h1>
				<button
					onClick={() => {
						props.changeName();
					}}
				>
					Change Name
				</button>
				<button
					onClick={() => {
						props.addWish();
					}}
				>
					Add Wish
				</button>
			</div>
		</BrowserRouter>
	);
}

const mapStateToProps = (state) => {
	return {
		myName: state.name,
		myWish: state.wish,
	};
};
const mapDispatchToProps = (dispatch) => {
	return {
		changeName: () => {
			dispatch(anothername());
		},
		addWish: () => {
			dispatch(addWish());
		},
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
