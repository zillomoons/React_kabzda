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


// export const Select: React.FC<SelectPropsType> = ({ items}) => {
//     const [collapsed, setCollapsed] = React.useState<boolean>(false)
//     const [valueSt, setValue] = React.useState('')
//     const onChooseItem = (value: string) => setValue(value)
//     const collapseOnBlur = () => setCollapsed(true)
//
//     return (
//         <div>
//             <SelectTitle collapsed={collapsed} setCollapsed={setCollapsed} titleValue={valueSt} collapseOnBlur={collapseOnBlur}/>
//             {!collapsed && <SelectBody items={items} onItemClick={onChooseItem}/>}
//         </div>
//     );
// };
//
// type SelectTitlePropsType = {
//     collapsed: boolean
//     setCollapsed: (collapsed: boolean) => void
//     titleValue: string
//     collapseOnBlur: ()=>void
// }
// const SelectTitle: React.FC<SelectTitlePropsType> = ({collapsed, setCollapsed, titleValue, collapseOnBlur}) => {
//     return <h4 onClick={()=> setCollapsed(!collapsed)} onBlur={collapseOnBlur}>{titleValue} <button>v</button></h4>
// }
//
// type SelectBodyPropsType = {
//     items: ItemType[]
//     onItemClick: (value: string)=>void
// }
//
// const SelectBody: React.FC<SelectBodyPropsType> = ({items, onItemClick}) => {
//     return  <ul>
//         {
//             items.map((i)=> {
//                 return (
//                     <li key={i.id} onClick={()=> onItemClick(i.value)}>
//                         {i.title}
//                     </li>
//                 )
//             })
//         }
//     </ul>
// }
