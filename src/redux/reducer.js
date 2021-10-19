import { ADD_DATA, DELETE, SCEARCHING, SELECTION, SUBMITING } from "./Action";

let init ={
    country:
        {data:{
            name:"",
            main:{temp:null ,temp_min:null , temp_max:null },
            weather:[{main:"", description:""}],
            sys:{country:""}
        }}
    ,
    scearch:"",
    select:[]
}


const apiReducer =(state=init,{type,payload})=>{
    
   switch (type) {
    case ADD_DATA :
            
        return{
        ...state, country:payload
        };

    case SCEARCHING :
            
        return{
        ...state, scearch:payload
        };

    case SUBMITING :
            
        return{
        ...state, scearch:payload
        };

    case SELECTION :
            let newCountry={
            name:payload.name,
            id:payload.id,
            temp:payload.temp,
            temp_min:payload.temp_min,
            temp_max:payload.temp_max,
            weatherIcon:payload.main,
            description:payload.description
            }
        return{
        ...state, select: [...state.select,newCountry]
        };

        case DELETE :
            
        return{
        ...state, select: state.select.filter(el=>el.name!==payload)
        };

   
       default:
           return state 
   }
}
export default apiReducer