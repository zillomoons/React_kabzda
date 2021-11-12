import React, {useCallback, useMemo, useState} from 'react';

export default {
    title: 'useMemo',
}

export const ComplexCalcExample = () => {
    const [a, setA] = useState(5);
    const [b, setB] = useState(5);

    let resultA = 1;
    let resultB = 1;

    resultA = useMemo(() => {
        let tempResultA = 1;
        for (let i = 1; i <= a; i++) {
            let fake = 0;
            while (fake < 100000000) {
                fake++;
                let fakeValue = Math.random();
            }
            tempResultA *= i;
        }
        return tempResultA;
    }, [a])

    for (let j = 1; j <= b; j++) {
        resultB *= j;
    }

    return <>
        a <input value={a} onChange={(e => setA(Number(e.currentTarget.value)))}/>
        b <input value={b} onChange={(e => setB(+e.currentTarget.value))}/>
        <hr/>
        <div>
            Result for a: {resultA}
        </div>
        <div>
            Result for b: {resultB}
        </div>
    </>
};

const UsersPrivate = (props: { users: string[] }) => {
    console.log('USERS')
    return <div>
        {props.users.map((u, i) => <div key={i}>{u}</div>)}
    </div>
}
const Users = React.memo(UsersPrivate)

export const SupplementReactMemo = () => {
    console.log('SupplementReactMemo');
    const [counter, setCounter] = useState(0);
    const [users, setUsers] = useState(['Kate', 'John', 'Oliver', 'Diana']);
    const addUser = () => {
        const newUsers = [...users, 'Alex' + new Date().getTime()];
        setUsers(newUsers);
    }
    const usersArray = useMemo(() => users.filter(u => u.toLowerCase().indexOf('a') > -1),
        [users]);

    return <>
        <button onClick={() => setCounter(counter + 1)}>+</button>
        <button onClick={addUser}>add user</button>

        {counter}
        <Users users={usersArray}/>
    </>
}

export const LikeUseCallback = () => {
    console.log('LikeUseCallback');
    const [counter, setCounter] = useState(0);
    const [books, setBooks] = useState(['React', 'JS', 'HTML', 'CSS']);

    const memoizedAddBook = useMemo(() => () => {
        console.log(books)
        const newBooks = [...books, 'Angular' + new Date().getTime()];
        setBooks(newBooks);
    }, [books])
    const memoizedAddBook2 = useCallback(() => {
        console.log(books)
        const newBooks = [...books, 'Angular' + new Date().getTime()];
        setBooks(newBooks);
    }, [books])
    const booksArray = useMemo(() => books.filter(b => b.toLowerCase().indexOf('a') > -1),
        [books]);
    return <>
        <button onClick={() => setCounter(counter + 1)}>+</button>
        {counter}
        <Books addBook={memoizedAddBook}/>
    </>
}
const BooksPrivate = (props: { addBook: () => void }) => {
    console.log('BooksPrivate')
    return <div>
        <button onClick={props.addBook}>add book</button>
        {/*{props.books.map((book, i) => <div key={i}>{book}</div>)}*/}
    </div>
}
const Books = React.memo(BooksPrivate)

