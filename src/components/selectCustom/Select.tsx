import React, {useState} from 'react';
import style from './select.module.css'

type ItemType = {
    title: string,
    id: any
}
type selectPropsType = {
    //noneValue: string
    title: string,
    selectedItem: string
    onItemClick: (value: any) => void
    items: ItemType[]
    setSelectedItem: (item: string) => void
}

export const Select = (props: selectPropsType) => {
    const [isVisible, setVisible] = useState<boolean>(false)

    const onVisibleHandler = () => {
        setVisible(!isVisible)
    }
    const onBlurHandler = () => {
        console.log('onBluur')
        setVisible(false)
    }
    const onItemClickHandler = (title: string) => {
        console.log(title)
        props.setSelectedItem(title)
        setVisible(false)
    }
    const itemList = props.items.map(el =>
        <div key={el.id}
             className={style.item}
             onClick={() => onItemClickHandler(el.title)}
        >{el.title}</div>)
    return (
        <div
            className={style.wrapper}
            onBlur={onBlurHandler}
            onClick={onVisibleHandler}
            tabIndex={0}>

            <div className={style.title}>
                {props.selectedItem ? props.selectedItem : props.title}
            </div>
            {isVisible == true &&
                <div className={style.itemList}>
                    {itemList}
                </div>
            }
        </div>
    );
};

