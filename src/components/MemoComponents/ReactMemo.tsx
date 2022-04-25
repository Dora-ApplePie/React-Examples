import React, {useState} from 'react'

export const NewMessagesCounter = React.memo((props: { count: number }) => {
    return (
        <div>
            {props.count}
        </div>
    )
})

export const UsersSecret = (props: { users: Array<String> }) => {
    console.log('USERS RENDERING')
    return (
        <div>
            {props.users.map((user, index) => <div key={index}>{user}</div>)}
        </div>
    )
}

const Users = React.memo(UsersSecret) //юзерс не меняются и не будут переисовываться

export const Example = React.memo(() => {
    const [counter, setCounter] = useState(0)
    const [users, setUsers] = useState(['pic', 'example-pic'])
    const addUser = () => {
        let newUser = 'Count ' + new Date().getTime()
        setUsers([...users, newUser])
    }
    return (
        <>
            <div><b>React.memo</b></div>
            <button onClick={() => setCounter(counter + 1)}>Add</button>
            <button onClick={addUser}>Add user</button>
            <NewMessagesCounter count={counter}/>
            <Users users={users}/>
        </>
    )
})