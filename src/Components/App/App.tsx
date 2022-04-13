import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import React from 'react';
import {Route, Routes} from 'react-router-dom';
import {WelcomePage} from '../WelcomePage/WelcomePage';
import {Categories} from '../CategoriesDisplay/Categories';
import {Price} from '../Price/Price';
import {store} from '../../Store/Store';
import styles from './App.module.css'

export const App = () => {
    console.log('APP')

    return <div>
        <div className={styles.body}>
            <Routes>
                {/*https://stackoverflow.com/questions/36904185/react-router-scroll-to-top-on-every-transition*/}
                <Route path='' element={<WelcomePage callbackButton={()=> ""}/>}/>
                <Route path='/categories' element={<Categories store={store}/>}/>
                <Route path='/price' element={<Price/>}/>
                {/*<Route path='' element={<Navigate to=''/>}/>*/}
            </Routes>
        </div>

        {/*Footer*/}
        <AppBar position={'static'} className={styles.footer}>
            <div>
                <Typography align={'center'} variant="inherit"
                            style={{fontFamily: 'cursive'}}>Pedicure.cabinet</Typography>
            </div>
        </AppBar>
    </div>
}