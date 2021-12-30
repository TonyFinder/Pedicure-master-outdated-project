import {AppBar, Button, Grid, Toolbar, Typography} from '@material-ui/core';
import React from 'react';
import {FavoriteTwoTone} from '@material-ui/icons';
import whatsapp from '../../pictures/whatsapp.jpg'
import instagram from '../../pictures/instagram.png'

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
                <Button onClick={props.callbackButton} variant={'outlined'} color={'primary'} size={'large'}
                        style={{margin: '30px 0px'}}>Средства для ухода в наличии</Button>
                {/*<Grid item>
                    <Grid container>*/}
                        <Grid item>
                            <a href={'https://instagram.com/pedicure.cabinet?utm_medium=copy_link'}><img
                                src={instagram}
                                alt={'Instagram'} style={{width: '150px'}}/></a>
                        </Grid>
                        <Grid item>
                            <a href={'https://wa.me/79510215025'}><img
                                src={whatsapp}
                                alt={'WhatsApp'} style={{width: '150px'}}/></a>
                        {/*</Grid>
                    </Grid>*/}
                </Grid>
            </Grid>
        </div>
    )
}