const favorit = [

]



export default function favorites(state = favorit , action) {
  if(action.type == "IZOBRANIYA"){
    let nimadir = action.peolad
    state.push(
      nimadir
    )
 
    return state
  }
  if(action.type == "Delete"){

        state.slice(1 , action.peoalad)

      return state
  }


  return state
}
