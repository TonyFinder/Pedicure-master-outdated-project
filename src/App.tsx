import React, {useState} from 'react';
import {Categories} from './Components/CategoriesDisplay/Categories';
import {store} from './Store/Store';
import {WelcomePage} from './Components/WelcomePage/WelcomePage';
import {Price} from './Components/Price/Price';

function App() {
    console.log("APP")
    const [welcome, showWelcome] = useState(true)
    const [price, showPrice] = useState(false)
    const [goods, showGoods] = useState(false)
    const callbackButton = () => {
        showWelcome(true)
        showPrice(false)
        showGoods(false)
    }
    const callbackPageShow = (value: string) => {
        showWelcome(false)
        value === "price" ? showPrice(true) : showGoods(true)
    }

    return (
    <div>
        {welcome && <WelcomePage callbackButton={callbackPageShow}/>}
        {goods && <Categories store={store} callbackWelcome={callbackButton}/>}
        {price && <Price callbackWelcome={callbackButton}/>}
    </div>
  );
}

export default App;
