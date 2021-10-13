import React from 'react';
import {ItemType} from "../../App";
import s from './select.module.css';

type SelectPropsType = {
    items: ItemType[]
    selectValue: string
    onItemClick: (value: any) => void
}

export const Select: React.FC<SelectPropsType> = ({items, selectValue, onItemClick}) => {

    const [collapsed, setCollapsed] = React.useState<boolean>(true);

    return <div className={s.selectWrapper}>
        <div className={s.select} onClick={() => setCollapsed(!collapsed)}>
            {selectValue.toString()}
            <button className={s.buttonSelect}>v</button>
        </div>
        {!collapsed && <div className={s.items}>
            {items.map((item) => {
                const onChangeSelect =() => {
                    onItemClick(item.value);
                    setCollapsed(true);
                }
                return <div key={item.id}
                           className={s.item}
                           onClick={onChangeSelect}>
                    {item.title}
                </div>
            })}
        </div> }

    </div>
}
