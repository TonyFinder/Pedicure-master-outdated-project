import React, {useState} from 'react';
import {Categories} from '../CategoriesDisplay/Categories';
import {store} from '../../Store/Store';
import {WelcomePage} from '../WelcomePage/WelcomePage';
import {Price} from '../Price/Price';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';

function App() {
    console.log('APP')
    const [welcome, showWelcome] = useState(true)
    const [price, showPrice] = useState(false)
    const [goods, showGoods] = useState(false)
    const callbackButton = () => {
        showWelcome(true)
        showPrice(false)
        showGoods(false)
    }
    const callbackPageShow = (value: string) => {
        if (value === 'price') {
            showWelcome(false)
            showPrice(true)
            showGoods(false)
        }
        if (value === 'goods') {
            showWelcome(false)
            showPrice(false)
            showGoods(true)
        }
    }

    return (
        <div>
            <div style={{minHeight: '100vh', border: '1px solid black'}}>
                {welcome && <WelcomePage callbackButton={callbackPageShow}/>}
                {goods && <Categories store={store} callbackWelcome={callbackButton}/>}
                {price && <Price callbackWelcome={callbackButton}/>}
            </div>
            <AppBar position={'static'} style={{height: '30px', display: "flex", alignItems: "center", justifyContent: "center"}}>
                <div>
                    <Typography align={'center'} variant="inherit"
                                style={{fontFamily: 'cursive'}}>Pedicure.cabinet</Typography>
                </div>
            </AppBar>
        </div>
    );
}

export default App;
