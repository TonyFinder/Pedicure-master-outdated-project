import React, {useState} from 'react';
import {v1} from 'uuid';
import {StoreType} from '../../../Store/Store';
import {Button, Grid, Paper} from '@material-ui/core';

export type CategoryListPropsType = {
    store: StoreType
    category: string
}
export type CollapsedType = {
    [key: string]: ValueType[]
}
export type ValueType = {
    id: number
    value: boolean
}

export const CategoryList = (props: CategoryListPropsType) => {
    const specialProductsItems = props.store.items.filter(f => f.category === props.category)
    const [ingredients, setIngredients] = useState<CollapsedType>({
            ['372']: [{id: 372, value: false}],
            ['306']: [{id: 306, value: false}],
            ['832']: [{id: 832, value: false}],
            ['1111']: [{id: 1111, value: false}],
            ['991312']: [{id: 991312, value: false}],
            ['889']: [{id: 889, value: false}],
            ['367']: [{id: 367, value: false}],
            ['888']: [{id: 888, value: false}],
            ['369']: [{id: 369, value: false}],
            ['991039']: [{id: 991039, value: false}],
            ['111']: [{id: 111, value: false}],
            ['222']: [{id: 222, value: false}],
            ['223']: [{id: 223, value: false}],
        }
    )

    const [apply, setApply] = useState<CollapsedType>({
            ['372']: [{id: 372, value: false}],
            ['306']: [{id: 306, value: false}],
            ['832']: [{id: 832, value: false}],
            ['1111']: [{id: 1111, value: false}],
            ['991312']: [{id: 991312, value: false}],
            ['889']: [{id: 889, value: false}],
            ['367']: [{id: 367, value: false}],
            ['888']: [{id: 888, value: false}],
            ['369']: [{id: 369, value: false}],
            ['991039']: [{id: 991039, value: false}],
            ['111']: [{id: 111, value: false}],
            ['222']: [{id: 222, value: false}],
            ['223']: [{id: 223, value: false}],
        }
    )

    const onClickIngredients = (key: number) => {
        if (ingredients[key.toString()][0].value) {
            setIngredients({
                ...ingredients,
                [key.toString()]: ingredients[key.toString()].map(m => ({...m, value: false}))
            })
            setApply({
                ...apply,
                [key.toString()]: apply[key.toString()].map(m => ({...m, value: false}))
            })
        } else {
            setIngredients({
                ...ingredients,
                [key.toString()]: ingredients[key.toString()].map(m => ({...m, value: true}))
            })
            setApply({
                ...apply,
                [key.toString()]: apply[key.toString()].map(m => ({...m, value: false}))
            })
        }
    }
    const onClickApply = (key: number) => {
        if (apply[key.toString()][0].value) {
            setApply({
                ...apply,
                [key.toString()]: apply[key.toString()].map(m => ({...m, value: false}))
            })
            setIngredients({
                ...ingredients,
                [key.toString()]: ingredients[key.toString()].map(m => ({...m, value: false}))
            })
        } else {
            setApply({
                ...apply,
                [key.toString()]: apply[key.toString()].map(m => ({...m, value: true}))
            })
            setIngredients({
                ...ingredients,
                [key.toString()]: ingredients[key.toString()].map(m => ({...m, value: false}))
            })
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
                                    <Button variant={ingredients[m.id][0].value ? 'contained' : 'outlined'} color={'primary'}
                                            style={{margin: '2px'}}
                                            onClick={() => onClickIngredients(m.id)}>Ингредиенты</Button>
                                    <Button variant={apply[m.id][0].value ? 'contained' : 'outlined'} color={'primary'}
                                            style={{margin: '2px'}}
                                            onClick={() => onClickApply(m.id)}>Способ применения</Button>
                                </Grid>
                                {ingredients[m.id][0].value && <Grid item>
                                    <ul>
                                        {props.store.description.find(f => f.id === m.id)?.ingredients.map(m2 => <li
                                            key={v1()}>{m2}</li>)}
                                    </ul>
                                </Grid>}
                                {apply[m.id][0].value && <Grid item>
                                    <div style={{
                                        textAlign: 'center',
                                        paddingTop: '15px'
                                    }}>{props.store.description.find(f => f.id === m.id)?.apply}</div>
                                </Grid>}
                            </Grid>
                        </Paper>
                    </Grid>
                )
            })}
        </Grid>
    )
}