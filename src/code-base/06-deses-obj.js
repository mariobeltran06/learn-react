export const usContext = ({ secret, name, age, range = 'Captain' }) => { 
    return {
        nameSecret: secret,
        age,
        position: {
            lat: 14.1232,
            lng: -12.3232
        }
    }

}
