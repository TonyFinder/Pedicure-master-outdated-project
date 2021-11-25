import React, {useState} from 'react';
import {CategoriesType, DescriptionItemsType, ItemsType} from '../../Store/Store';
import {CategoryList} from './CategoryList/CategoryList';
import s from './Categories.module.css'

type CategoriesPropsType = {
    store: DescriptionItemsType & ItemsType & CategoriesType
}

export const Categories = (props: CategoriesPropsType) => {
    const [menu, setMenu] = useState<boolean>(true)
    const [category, setCategory] = useState<string>("Сухая кожа стопы")
    const onClickHandler = (category: string) => {
        setCategory(category)
        setMenu(false)
    }

    return (
        <div>
            { menu ?
                (<div>{props.store.categories.map(category =>
                    <div key={category.id}>
                        <input value={category.category} type={'button'}
                               onClick={() => onClickHandler(category.category)}/>
                    </div>)}
                </div>)
                :
                <div className={s.blocks}>
                <CategoryList store={props.store} category={category} callbackForMenu={() => setMenu(!menu)}/>
                </div>
            }
        </div>
    )

}