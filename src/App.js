import './index.css'
import Header from './Component/Header';
import Main from './Component/Main';
import Basket from './Component/Basket';
import { useEffect, useState } from 'react';
import data from './Component/data';
import UserInfo from './Component/UserInfo';
function App() {



  const [cartItem,setCartItem]=useState([]);
  //const products = data.products;
  const [products, setProducts] = useState([]);
  const [hasError, setErrors] = useState(false);

  async function fetchData() {
    const res = await fetch("https://dummyjson.com/products");
    res
      .json()
      .then(res => setProducts(res.products))
      .catch(err => setErrors(err));
  }

  useEffect(() => {
    fetchData();
  }, []);

  const onAdd=(product)=>{
    const exist = cartItem.find(x => x.id === product.id)
    if(exist){
      setCartItem(
        cartItem.map((x) =>x.id === product.id ?{...exist, qty : exist.qty+1} :x
        )
        );
    }else {
      setCartItem([...cartItem,{...product , qty:1}])
    }
  };

  const totalCount = cartItem.map(ele => ele.qty).reduce((a,c) => a+c, 0);

  const onRemove=(product)=>{
    const exist = cartItem.find((x) => x.id === product.id)
    if(exist.qty === 1){
      setCartItem(
        cartItem.filter((x)=> x.id!==product.id));
      
    }else {
      setCartItem(
        cartItem.map((x) =>x.id === product.id ?{...exist, qty : exist.qty-1} :x
        )
        );    }
  };



  return (
    <div className="App">
      <Header countCartItem={totalCount}/>
      <div className="row">
        <Main onAdd ={onAdd} products ={products}/>
        <Basket onAdd= {onAdd} onRemove={onRemove} cartItem={cartItem}/>
      </div>
      <UserInfo />
    </div>
    
  );
}

export default App;
