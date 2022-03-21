import React from 'react';
import {AppBar, Button, Grid, Toolbar} from '@material-ui/core';
import style from './Price.module.css'
import {store} from '../../Store/Store';

type PricePropsType = {
    callbackWelcome: () => void
}

export const Price = (props: PricePropsType) => {
    return (
        <div>
            <AppBar position={'sticky'}>
                <Toolbar>
                    <Grid container justifyContent={'center'} alignItems={'center'}>
                        <Grid item>
                            <Button color="inherit" variant={'outlined'} style={{margin: '10px'}}
                                    onClick={props.callbackWelcome}>На главную</Button>
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
            <div className={style.main}>
                <h2>Аппаратный педикюр</h2>
                <div className={style.underHeader}>
                    <div className={style.prices}>
                        {store.priceList.map(m => <div className={style.priceItemAll}>
                            <div className={style.itemName}>{m.item}</div>
                            <span className={style.itemPrice}>{`${m.price} руб.`}</span>
                            <div className={style.line}></div>
                        </div>)}
                    </div>
                    <div className={style.priceIncludeSigh}>В стоимость включено:</div>
                    <ul>
                        {store.priceInclude.map(m => <li>{m}</li>)}
                    </ul>
                    <div className={style.priceIncludeSigh}>Дизайн оплачивается отдельно!</div>
                </div>
            </div>
        </div>
    )
}