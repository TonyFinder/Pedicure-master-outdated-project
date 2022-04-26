import React from 'react';
import whatsapp from '../../pictures/whatsapp.jpg'
import instagram from '../../pictures/instagram.png'
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import FavoriteTwoTone from '@material-ui/icons/FavoriteTwoTone';

export type WelcomePageType = {
    callbackButton: (value: string) => void
}

export const WelcomePage = (props: WelcomePageType) => {
    console.log('WelcomePage')
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
                <Button onClick={() => props.callbackButton('price')} variant={'outlined'} color={'primary'}
                        size={'large'}
                        style={{marginTop: '35px', marginBottom: '10px'}}>Мой прайс
                </Button>
                <Button onClick={() => props.callbackButton('goods')} variant={'outlined'} color={'primary'}
                        size={'large'}
                        style={{marginBottom: '40px'}}>Средства для ухода в наличии
                </Button>
                <Grid item>
                    {/*https://www.youtube.com/watch?v=1rKa7l_iASI deeplink information*/}
                    <a href={'https://urlgeni.us/instagram/z7RW'} target={'_blank'} rel="noreferrer"><img
                        src={instagram}
                        alt={'Instagram'} style={{width: '150px'}}/></a>
                </Grid>
                <Grid item>
                    <a href={'https://wa.me/79510215025'}><img
                        src={whatsapp}
                        alt={'WhatsApp'} style={{width: '150px'}}/></a>
                </Grid>
            </Grid>
        </div>
    )
}