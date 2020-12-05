//feature-1
import React from "react";
import Cart from "./components/Cart";
import Filter from "./components/Filter";
import Products from "./components/Products";
import data from "./data.json";

class App extends React.Component {
  constructor(){
    super();
    this.state ={
      products: data.products,
      cartItems: [],
      size: "",
      sort: "",
      totalPiece: 0,
    };
  }
  removeFromCart = (product) => {
    const cartItems = this.state.cartItems.slice();
    var totalPiece = this.state.totalPiece;
    var removedTotalPiece = 0;
    cartItems.forEach(item =>{
      if(item._id === product._id){
        removedTotalPiece = totalPiece - product.count;
      }
    })
    this.setState({
      cartItems: cartItems.filter(x => x._id !== product._id),
      totalPiece: removedTotalPiece
    });
  }
  addToCart = (product) => {
    const cartItems = this.state.cartItems.slice();
    var totalPiece = this.state.totalPiece;
    let alreadyInCart = false;
    cartItems.forEach(item => {
      if(item._id === product._id){
        item.count++;
        totalPiece++;
        alreadyInCart = true;
      }
    });
    if(!alreadyInCart){
      cartItems.push({...product, count: 1})
      totalPiece++;
    };
    this.setState({cartItems});
    this.setState({totalPiece});
    console.log(totalPiece);
  }

  sortProducts = (event) => {
    const sort =event.target.value;
    console.log(event.target.value);
    this.setState(state => ({
      sort: sort,
      products: this.state.products.slice().sort((a,b) => (
        sort === "Lowest"?
        ((a.price > b.price)? 1:-1):
        sort === "Highest"?
        ((a.price < b.price)? 1:-1):
        ((a._id < b._id)? 1:-1)
      ))
    }))
  };
  filterProducts = (event) => {
    console.log(event.target.value);
    if(event.target.value === ""){
      this.setState({size: event.target.value, product: data.products})
    }else{
      this.setState({
        size: event.target.value,
        products: data.products.filter(product => product.availableSizes.indexOf(event.target.value) >= 0)
      })
    }
  };
  render() {
    return (
      <div className='grid-container'>
        <header>
          <a href='/'>React Shopping Cart</a>
        </header>
        <main>
          <div className="content">
            <div className="main">
              <Filter count={this.state.products.length}
                size={this.state.size}
                sort={this.state.sort}
                filterProducts={this.filterProducts}
                sortProducts={this.sortProducts}
              ></Filter>
              <Products products={this.state.products} 
              addToCart={this.addToCart}
              ></Products>
            </div>
            <div className="sidebar">
              <Cart cartItems={this.state.cartItems}
              removeFromCart={this.removeFromCart}
              totalPiece={this.state.totalPiece}
              ></Cart>
            </div>
          </div>
        </main>
        <footer>All right is reserved.</footer>
      </div>
    );
  }
  
}

export default App;
