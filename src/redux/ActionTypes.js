import { ADD_DATA, DELETE, SCEARCHING, SELECTION, SUBMITING } from "./Action"


export const addData=(newData)=>{
    return{
        type:ADD_DATA,
        payload:newData
    }
}
export const scearchCountry=(country)=>{
    return{
        type:SCEARCHING,
        payload:country
    }
}
export const selectionCountry=(name,id,temp,temp_min,temp_max,main,description)=>{
    return{
        type:SELECTION,
        payload:{name,id,temp,temp_min,temp_max,main,description}
    }
}
export const submitSearch=(x)=>{
    return{
        type:SUBMITING,
        payload:x
    }
}
export const deleteOne=(name)=>{
    return{
        type:DELETE,
        payload:name
    }
}