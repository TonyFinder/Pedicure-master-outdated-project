import {AppBar, Button, Grid, Toolbar, Typography} from '@material-ui/core';
import React from 'react';
import {FavoriteTwoTone} from '@material-ui/icons';

export type WelcomePageType = {
    callbackButton: () => void
}

export const WelcomePage = (props: WelcomePageType) => {

    return (
        <div>
            <AppBar position={'sticky'}>
                <Toolbar>
                    <Grid container justifyContent={'center'} alignItems={'center'}
                          style={{margin: '10px 0px'}}>
                        <Typography align={'center'} variant="h6"
                                    style={{marginRight: '5px', fontFamily: 'cursive'}}>Ваш
                            Pedicure.cabinet</Typography>
                        <FavoriteTwoTone/>
                    </Grid>
                </Toolbar>
            </AppBar>
            <Grid container justifyContent={'center'} alignItems={'center'} direction={'column'}>
                <Button onClick={props.callbackButton} variant={'outlined'} color={'primary'} size={'large'} style={{margin: '30px 0px'}}>Средства для ухода в наличии</Button>
                <Grid item>
                    <a href={'https://wa.me/79510215025'}><img
                        src={'https://live.staticflickr.com/65535/51708193253_5cd29eecb5_m.jpg'}
                        alt={'WhatsApp'} style={{width: '150px'}}/></a>
                </Grid>
            </Grid>
        </div>
    )
}