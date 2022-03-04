import React, {useState} from 'react';
import {v1} from 'uuid';
import {StoreType} from '../../../Store/Store';
import {Button, ButtonGroup, Grid, Paper} from '@material-ui/core';

export type CategoryListPropsType = {
    store: StoreType
    category: string
}
export type ValueType = {
    id: number
    valueAction: boolean
    valueIngredients: boolean
    valueApply: boolean
}

export const CategoryList = (props: CategoryListPropsType) => {
    console.log("CategoryList")
    const specialProductsItems = props.store.items.filter(f => f.category === props.category)
    const [buttonsValue, setButtonsValue] = useState<ValueType[]>([
            {id: 372, valueAction: true, valueIngredients: false, valueApply: false}, {
            id: 306,
            valueAction: true,
            valueIngredients: false,
            valueApply: false
        }, {id: 832, valueAction: true, valueIngredients: false, valueApply: false}, {
            id: 1111,
            valueAction: true,
            valueIngredients: false,
            valueApply: false
        }, {id: 991312, valueAction: true, valueIngredients: false, valueApply: false}, {
            id: 889,
            valueAction: true,
            valueIngredients: false,
            valueApply: false
        }, {id: 367, valueAction: true, valueIngredients: false, valueApply: false}, {
            id: 888,
            valueAction: true,
            valueIngredients: false,
            valueApply: false
        }, {id: 369, valueAction: true, valueIngredients: false, valueApply: false}, {
            id: 991039,
            valueAction: true,
            valueIngredients: false,
            valueApply: false
        }, {id: 111, valueAction: true, valueIngredients: false, valueApply: false}, {
            id: 222,
            valueAction: true,
            valueIngredients: false,
            valueApply: false
        }, {id: 223, valueAction: true, valueIngredients: false, valueApply: false},
        ])

    const onClickChanger = (id: number, valueOfButton: 'valueAction' | 'valueIngredients' | 'valueApply') => {
        setButtonsValue(buttonsValue.map(m => m.id === id ? {
            ...m,
            valueAction: valueOfButton === 'valueAction' ? !m.valueAction : false,
            valueIngredients: valueOfButton === 'valueIngredients' ? !m.valueIngredients : false,
            valueApply: valueOfButton === 'valueApply' ? !m.valueApply : false
        } : m))
    }

    return (
        <Grid container justifyContent={'center'} spacing={1} style={ {marginTop: "10px"} }>
            {specialProductsItems.map(m => {
                console.log("Item")
                return (
                    <Grid item key={m.id}>
                        <Paper elevation={6} style={{padding: '15px', width: '85vw'}}>
                            <Grid container alignItems={'center'} justifyContent={'center'} direction={'column'}>
                                <Grid item style={{textAlign: 'center'}}>
                                    <h3 style={{margin: '0px'}}>
                                        {m.name}
                                    </h3>
                                    <span style={{fontStyle: 'italic', fontSize: '15px'}}><b>Цена - {m.priceRegular} руб.</b> (Объём {m.volume} мл.)</span>
                                </Grid>
                                <Grid item style={{margin: '10px 0px'}}>
                                    <img src={props.store.description.find(f => f.id === m.id)?.picture}
                                         alt={'Изображение'} style={{height: '250px'}}/>
                                </Grid>
                                {/*<Grid item>
                                    <div>Цена - <b>{m.priceRegular} руб.</b></div>
                                    <div>В день процедуры - <b>{m.priceDiscounted} руб.</b></div>
                                </Grid>*/}
                            </Grid>
                            <Grid container style={{paddingTop: '10px'}}>
                                <Grid container justifyContent={'center'}>
                                    <ButtonGroup size="small" color={'primary'}>
                                        <Button
                                            variant={buttonsValue.filter(f => f.id === m.id)[0].valueAction ? 'contained' : 'outlined'}
                                            onClick={() => onClickChanger(m.id, 'valueAction')}>Действие</Button>
                                        <Button
                                            variant={buttonsValue.filter(f => f.id === m.id)[0].valueIngredients ? 'contained' : 'outlined'}
                                            onClick={() => onClickChanger(m.id, 'valueIngredients')}>Ингредиенты</Button>
                                        <Button
                                            variant={buttonsValue.filter(f => f.id === m.id)[0].valueApply ? 'contained' : 'outlined'}
                                            onClick={() => onClickChanger(m.id, 'valueApply')}>Применение</Button>
                                    </ButtonGroup>
                                </Grid>
                                {buttonsValue.filter(f => f.id === m.id)[0].valueAction && <Grid item>
                                    <ul>
                                        {props.store.description.find(f => f.id === m.id)?.action.map(m2 => <li
                                            key={v1()}>{m2}</li>)}
                                    </ul>
                                </Grid>}
                                {buttonsValue.filter(f => f.id === m.id)[0].valueIngredients && <Grid item>
                                    <ul>
                                        {props.store.description.find(f => f.id === m.id)?.ingredients.map(m2 => <li
                                            key={v1()}>{m2}</li>)}
                                    </ul>
                                </Grid>}
                                {buttonsValue.filter(f => f.id === m.id)[0].valueApply && <Grid item>
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