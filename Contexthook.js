import {React,useState,useContext,createContext} from 'react'
    const UserContext = createContext();

export default function Contexthook() {
    const [user, setUser] = useState('John Morgan');

    return (
        <>
            <UserContext.Provider value={user}>
                <h2>This is Parent Component Showing user {user} .</h2>
                <button onClick={() => {setUser('Ramakant Yadav')}}>Change-User</button>
                <Component1></Component1>
            </UserContext.Provider>
        </>
    )
}

function Component1() {
    return (
        <div>
            <h2>This is Component1.</h2>
            <Component2></Component2>
        </div>
    )
}
function Component2() {
    return (
        <div>
            <h2>This is Component2.</h2>
            <Component3></Component3> 
        </div>
    )
}
function Component3() {
    return (
        <div>
            <h2>This is Component3.</h2>
            <Component4></Component4>
        </div>
    )
}
function Component4() {
    const hii = useContext(UserContext);
    return (
        <div>
            {hii}
            <h2>This is Component4.</h2>
            <Component5></Component5>
        </div>
    )
}
function Component5() {
    const user = useContext(UserContext);
    return (
        <div>
            {`Hello ${user} again.`}
        </div>
    )
}

