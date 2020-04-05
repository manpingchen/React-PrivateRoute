import * as localforage from 'localforage'


export const authLogin = () => {
    
    let newData = {
        expire_at: 12047192084,
        token: "0124-12948-12084wpejgpwrg",
    }

    localforage.setItem('expire_at', newData.expire_at)
    localforage.setItem('token', newData.token)

}

