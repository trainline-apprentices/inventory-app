import React, { useState, useEffect } from 'react';
import { SaucesList } from './SaucesList';
import ItemPage from './ItemPage';
import './react/style.css';
import NavigationBar from '.ItemPage/NavigationBar';

// import and prepend the api url to any fetch calls
import apiURL from '../api';

export const App = () => {

	const [sauces, setSauces] = useState([]);

	async function fetchSauces(){
		try {
			const response = await fetch(`${apiURL}/sauces`);
			const saucesData = await response.json();
			
			setSauces(saucesData);
		} catch (err) {
			console.log("Oh no an error! ", err)
		}
	}

	useEffect(() => {
		fetchSauces();
	}, []);

	return (
		<main>	
      <h1>Sauce Store</h1>
			<h2>All things 🔥</h2>
			<SaucesList sauces={sauces} />
		</main>
	)
};


const App = () => {
  // Replace these with actual data from your application state or API
  const product = { id: 1, name: 'Sample Product', description: 'Sample description', price: 50.00 };
  const relatedProducts = [{ id: 2, name: 'Related Product 1' }, { id: 3, name: 'Related Product 2' }];
  const reviews = [{ id: 1, comment: 'Great product!', rating: 5 }, { id: 2, comment: 'Not bad', rating: 3 }];

  return (
    <div>
      <ItemPage product={product} relatedProducts={relatedProducts} reviews={reviews} />
    </div>
  );
  
  return (
    <div>
      <Header />
      <NavigationBar />
      <ItemPage product={product} relatedProducts={relatedProducts} reviews={reviews} />
    </div>
  );
};

export default App;
