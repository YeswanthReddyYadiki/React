import  {legacy_createStore as createStore} from 'redux'
//store
//action
//reducer

const intialState={
   balance :0,
   fullname:"",
   mobile:null
}

  function accountReducer (state=intialState, action){
    switch(action.type){
        case "deposite":
        return {...state, balance:state.balance + action.playload}
        case "withdraw":
            return {...state, balance:state.balance - action.playload}
        case "mobile":
            return {...state, mobile:action.playload}
        case "nameUpdate":
            return {...state, fullname:action.playload}    
        default :
            return state;
    }
  }

  const store=createStore(accountReducer)
  console.log(store.getState())
  //Dispatch

  store.dispatch({type:"deposite",playload:0})
  console.log(store.getState())
  store.dispatch({type:"withdraw",playload:0})
  console.log(store.getState())
 
  export default store