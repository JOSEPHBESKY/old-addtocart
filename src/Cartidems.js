
import { useContext } from "react";
import { stateContext } from "./Context";
import products from "./Products.json";


const Cartidems = () => {
  const [ state, dispatch ] = useContext(stateContext);
  function rmvItem(val) {
    let res = state.CartArr.filter((el) => el !== val);
    dispatch({
      type: "rmvItem",
      payLoad: res,
    });
  }

  function qtyIncmt( id) {
    let resl = state.qty
    resl[id] = resl[id] + 1
    dispatch({
      type : "qtyIncmt",
      payLoad : resl
    })  }
     
  

  function qtyDecmt(id) {
    let resl = state.qty
   
    resl[id] = resl[id] - 1
    if (resl[id] < 1){
      rmvItem(id)
    } else{
      dispatch({
        type : "qtyDecmt",
        payLoad : resl
      })
    }
    
}
  let item = products.map((product) => {
    return state.CartArr.map((car) => { 
      if (product.id === car) {
         (
          <div key={product.id} >
            <p>{product.name}</p>
            
              <span onClick={() => rmvItem(product.id)}>(-)</span>
           
                <span onClick={() => qtyIncmt( product.id)}>+</span>
                <span>{state.qty[product.id]}</span>
                <span onClick={() => qtyDecmt(product.id)}>-</span>
              </div>    
        
     ) }
    })
  });

  return (
    <div>
      <navbar />
      Cart
      <div >{item}</div>
    </div>
  );

}
export default Cartidems;