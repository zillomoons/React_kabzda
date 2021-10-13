import React, {KeyboardEvent, useEffect} from 'react';
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

    useEffect(() => {
        setHoveredElementValue(value);
    }, [value])

    const onChangeSelect = (value: any) => {
        onChange(value);
        setCollapsed(true);
    }
    const OnBLur =()=>setCollapsed(true)
    const OnKeyUp = (e: KeyboardEvent<HTMLDivElement>) => {
        if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
            for (let i = 0; i < items.length; i++) {
                if (items[i].value === hoveredElementValue) {
                    const pretendentElement = e.key === 'ArrowDown'
                        ? items[i + 1]
                        : items[i - 1]
                    if (pretendentElement) {
                        onChange(pretendentElement.value);
                        return;
                    }
                }
            }
            if (!selectedItem){
                onChange(items[0].value)
            }
        }
        if (e.key === 'Enter' || e.key === 'Escape'){
            setCollapsed(true)
        }
    }

    return <div className={s.selectWrapper} onBlur={OnBLur} onKeyUp={OnKeyUp} tabIndex={0}>
        <div className={s.select} onClick={() => setCollapsed(!collapsed)}>
            {selectedItem && selectedItem.title}
            <button className={s.buttonSelect}>v</button>
        </div>
        {!collapsed && <div className={s.items}>
            {items.map((item) => {
                return <div key={item.id}
                            onMouseEnter={() => {
                                setHoveredElementValue(item.value)
                            }}
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

