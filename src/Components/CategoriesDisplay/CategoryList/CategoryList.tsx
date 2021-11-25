import React from 'react';
import {StoreType} from '../../../Store/Store';

export type CategoryListPropsType = {
    store: StoreType
    category: string
    callbackForMenu: () => void
}

export const CategoryList = (props: CategoryListPropsType) => {
    const specialProductsItems = props.store.items.filter(f => f.category === props.category)
    const onClickBackToMenu = () => {
        props.callbackForMenu()
    }

    return (
        <div>
            <button onClick={onClickBackToMenu}>Назад к категориям</button>
            {specialProductsItems.map(m => {
                return (
                    <div>
                        <h3>
                            {`${m.name} Объём ${m.volume} мл.`}
                        </h3>
                        <img src={props.store.description.find(f => f.id === m.id)?.picture} alt={"Изображение"}/>
                        <div>
                            <h4>Действие:</h4>
                            <ul>
                                {props.store.description.find(f => f.id === m.id)?.action.map(m1 => <li>{m1}</li>)}
                            </ul>
                            <h4>Ингридиенты:</h4>
                            <ul>
                                {props.store.description.find(f => f.id === m.id)?.ingredients.map(m2 => <li>{m2}</li>)}
                            </ul>
                            <h4>Способ применения:</h4>
                            <ul>
                                {props.store.description.find(f => f.id === m.id)?.apply}
                            </ul>
                            <h4>Цены:</h4>
                            <div><span>Регулярная - <b>{m.priceRegular} рублей</b></span></div>
                            <div><span> В день процедуры - <b>{m.priceDiscounted} рублей</b> (скидка от регулярной цены - <b>{m.discount})</b></span></div>
                        </div>
                    </div>
                )
            })}
            <button onClick={onClickBackToMenu}>Назад к категориям</button>
        </div>
    )
}