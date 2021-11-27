import React, {useState} from 'react';
import {v1} from 'uuid';
import {StoreType} from '../../../Store/Store';
import {Button, Grid, Paper} from '@material-ui/core';

export type CategoryListPropsType = {
    store: StoreType
    category: string
}

export const CategoryList = (props: CategoryListPropsType) => {
    const specialProductsItems = props.store.items.filter(f => f.category === props.category)
    const [ingredients, setIngredients] = useState<boolean>(false)
    const [apply, setApply] = useState<boolean>(false)

    const onClickIngredients = () => {
        if (ingredients) {
            setIngredients(false)
            setApply(false)
        } else {
            setIngredients(true)
            setApply(false)
        }
    }
    const onClickApply = () => {
        if (apply) {
            setApply(false)
            setIngredients(false)
        } else {
            setApply(true)
            setIngredients(false)
        }
    }

    return (
        <Grid container justifyContent={'center'} spacing={1}>
            {specialProductsItems.map(m => {
                return (
                    <Grid item key={m.id}>
                        <Paper elevation={6} style={{padding: '15px'}}>
                            <Grid container alignItems={'center'} justifyContent={'center'} direction={'column'}>
                                <Grid item style={{textAlign: 'center'}}>
                                    <h3 style={{margin: '0px'}}>
                                        {m.name}
                                    </h3>
                                    <span style={{fontStyle: 'italic', fontSize: '15px'}}>Объём {m.volume} мл.</span>
                                </Grid>
                                <Grid item style={{margin: '10px 0px'}}>
                                    <img src={props.store.description.find(f => f.id === m.id)?.picture}
                                         alt={'Изображение'}/>
                                </Grid>
                                <Grid item>
                                    <div>Цена - <b>{m.priceRegular} руб.</b></div>
                                    <div>В день процедуры - <b>{m.priceDiscounted} руб.</b></div>
                                </Grid>
                            </Grid>
                            <Grid container style={{paddingTop: '25px'}}>
                                <Grid item>
                                    <h4 style={{margin: '0px'}}>Действие:</h4>
                                    <ul>
                                        {props.store.description.find(f => f.id === m.id)?.action.map(m1 => <li
                                            key={v1()}>{m1}</li>)}
                                    </ul>
                                </Grid>
                                <Grid container justifyContent={'center'}>
                                    <Button variant={'outlined'} color={'primary'}
                                            style={{margin: '2px'}}
                                            onClick={onClickIngredients}>Ингридиенты</Button>
                                    <Button variant={'outlined'} color={'primary'}
                                            style={{margin: '2px'}}
                                            onClick={onClickApply}>Способ применения</Button>
                                </Grid>
                                {ingredients && <Grid item>
                                    <ul>
                                        {props.store.description.find(f => f.id === m.id)?.ingredients.map(m2 => <li
                                            key={v1()}>{m2}</li>)}
                                    </ul>
                                </Grid>}
                                {apply && <Grid item>
                                    <div style={{textAlign: 'center', paddingTop: '15px'}}>{props.store.description.find(f => f.id === m.id)?.apply}</div>
                                </Grid>}
                            </Grid>
                        </Paper>
                    </Grid>
                )
            })}
        </Grid>
    )
}