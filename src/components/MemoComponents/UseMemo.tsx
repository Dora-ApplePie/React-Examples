import React, {useCallback, useMemo, useState} from 'react'


export const UseMemoDifficult = React.memo(() => {

    const [a, setA] = useState<number>(5)
    const [b, setB] = useState<number>(5)

    let resultA = 1;
    let resultB = 1;

    resultA = useMemo(() => {
        let tempResA = 1;
        for (let i = 1; i <= a; i++) {
            let fake = 0;
            while (fake < 10000000) {
                fake++;
                const fakeValue = Math.random()
            }
            tempResA = tempResA * i;
        }
        return tempResA;
    }, [a]);

    //Вместо того, что бы при изменении переменной в компоненте не производился пересчет
    //всего подряд, мы повесили useMemo на затратную по произв-ти функцию,
    //который начинает пересчет переменной когда произойдет взаимодействие конкретно с ней

    for (let i = 1; i <= b; i++) {
        resultB = resultB * i;
    }

    console.log('Result memo is rendering...')

    return (
        <>
            <input value={a} onChange={(event) => setA(+event.currentTarget.value)}/>
            <input value={b} onChange={(event) => setB(Number(event.currentTarget.value))}/>
            {/*//Number and + это одно и тоже приведение к типу*/}

            <hr/>
            <div>
                Result for a: {resultA}
            </div>

            <div>
                Result for b: {resultB}
            </div>
        </>
    )
})


export const UsersSecret = (props: { users: Array<String> }) => {
    console.log('USERS SECRET')
    return (
        <div>
            {props.users.map((user, index) => <div key={index}>{user}</div>)}
        </div>
    )
}

export const Users = React.memo(UsersSecret) //юзерс не меняются и не будут переисовываться


export const HelpsForReactMemo = React.memo(() => {
    console.log('HelpsForReactMemo')
    const [counter, setCounter] = useState(0)
    const [users, setUsers] = useState(['pic', 'helps-pic'])

    const newArr = useMemo(() => {
            return users.filter(u => u.toLowerCase().indexOf('h') > -1)
        },
        [users]
        //внимательно анализируем зависимости
    )
    const addUser = () => {
        let newUser = 'Count-h ' + new Date().getTime()
        setUsers([...users, newUser])
        //будет вызываться юзер сикрет заново так как, мы добавляем нового юзера
        //и реакт сравнивает старый массив юзеров с новым и перерисовывает
    }
    return (
        <>
            <button onClick={() => setCounter(counter + 1)}>Add</button>
            <button onClick={() => addUser()}>Add user</button>
            {counter}
            <Users users={newArr}/>
            {/*//фильтр юзеров помещает их в новый массив и происходит перерисовка даже с реакт мемо юзерс комп,
                поэтому помещаем фильтр в useMemo */}
        </>
    )
})

export const LikeCallback = React.memo(() => {
    console.log('LikeCallback')
    const [counter, setCounter] = useState(0)
    const [books, setBooks] = useState(['React', 'JS Book', 'CSS&HTML', 'Kotlin'])


    // const memoizedAddBook = useMemo(() => {
    //     return () => {
    //         console.log(books)
    //         let newUser = 'Angular ' + new Date().getTime()
    //         setBooks([...books, newUser])
    //     }
    // }, [books]);

    const memoizedAddBook2 = useCallback(() => {
        console.log(books)
        let newUser = 'Angular ' + new Date().getTime()
        setBooks([...books, newUser])
    }, [books]);

    return (
        <>
            <button onClick={() => setCounter(counter + 1)}>Add</button>
            {counter}
            <Book addBook={memoizedAddBook2}/>
            {/*//фильтр юзеров помещает их в новый массив и происходит перерисовка даже с реакт мемо юзерс комп,
                поэтому помещаем фильтр в useMemo */}
        </>
    )
})

type BookSecretType = {
    addBook: () => void
}

export const BooksSecret = (props: BookSecretType) => {
    console.log('BOOKS SECRET')
    return (
        <div>
            <button onClick={() => props.addBook()}>Add book</button>
        </div>
    )
}

export const Book = React.memo(BooksSecret)

