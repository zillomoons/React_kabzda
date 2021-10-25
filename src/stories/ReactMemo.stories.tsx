import React from "react";
import {useState} from "react";

export default {
    title: 'React.memo demo'
}
const Counter = (props: {count: number}) => {
    return <div>{props.count}</div>
}
const UsersPrivate = (props: { users: string[] } ) => {
    console.log('USERS')
    return <div>
        {props.users.map((u, i)=> <div key={i}>{u}</div>)}
    </div>
}
const Users = React.memo(UsersPrivate)

export const Example1 = () => {
    console.log('Example1')
    const [counter, setCounter] = useState(0)
    const [users, setUsers] = useState(['Kate', 'John', 'Oliver', 'Diana'])
    const addUsers = () => {
        setUsers([...users, 'Sveta ' + new Date().getTime()])
    }
    return <>
        <button onClick={()=>setCounter(counter +1)}>+</button>
        <button onClick={addUsers}>add users</button>
        <Counter count={counter}/>
        <Users users={users} />
    </>
}