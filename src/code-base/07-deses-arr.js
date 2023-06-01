export const returnArray = () =>{
    return ['ABC', 123];
}

export const usState = ( value ) => {
    return [ value, ()=>{ console.log('Hello World') } ];
}
