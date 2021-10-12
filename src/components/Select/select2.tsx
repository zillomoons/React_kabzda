import React from 'react';
import {ItemType} from "../../App";
import s from './select.module.css';

type SelectPropsType = {
    items: ItemType[]
    value: any
    onChange: (value: any) => void
}

export const Select2: React.FC<SelectPropsType> = ({items, value, onChange}) => {
    const selectedItem = items.find(i => i.value === value)
    const [collapsed, setCollapsed] = React.useState<boolean>(true);
    const [hoveredElementValue, setHoveredElementValue] = React.useState(value)

    const hoveredItem = items.find(i => i.value === hoveredElementValue)

    const onChangeSelect = (value: any) => {
        onChange(value);
        setCollapsed(true);
    }

    return <div className={s.selectWrapper}>
        <div className={s.select} onClick={() => setCollapsed(!collapsed)}>
            {selectedItem && selectedItem.title}
            <button className={s.buttonSelect}>v</button>
        </div>
        {!collapsed && <div className={s.items}>
            {items.map((item) => {
                return <div key={item.id}
                            onMouseEnter={() => {setHoveredElementValue(item.value)}}
                            className={s.item + ' ' + (hoveredItem === item ? s.selected : '')}
                            onClick={() => {
                                onChangeSelect(item.value)
                            }}>
                    {item.title}
                </div>
            })
            }
        </div>}

    </div>
}

