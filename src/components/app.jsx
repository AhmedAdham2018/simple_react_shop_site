import React, { Component } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import axios from 'axios';
import '../App.css';
import Header from './header';
import ShoppingCart from './shoppingCart';
import About from './about';
import ProductDetails from './product_details';
import NotFound from './404';
import Menu from './menu';
import Login from './login';
import Admin from './admin';
import AddProduct from './addProduct';


class App extends Component {
    state = { 
        products: []
     }

     async componentDidMount(){
        //fetch('https://jsonplaceholder.typicode.com/todos/')
        //.then(res => res.json())
        //.then(json => console.log(json));

        const res = await axios.get('http://localhost:3005/products/');

        this.setState({products: res.data});
        //console.log(res.data);
     }

     deleteHandler =  async product => {
         const oldProd = [...this.state.products];

         const products = this.state.products.filter((prod) => prod.id !== product.id);
         this.setState({products});
         
        //backend ...

        try {
            axios.delete(`http://localhost:3005/products/${product.id}`);
        } catch (error) {
            alert("Can't delete product.");
            this.setState({products: oldProd});
        }
     }

     resetHandler = () => {
         let products = this.state.products.map((prod) => {
             prod.count = 0;
             return prod;   
            });
        this.setState({products});    
     }
     
     incrementProductsHandler = product => {
         const products = [...this.state.products];
         const prodIndex = products.indexOf(product);
         products[prodIndex] = {...products[prodIndex]};
         products[prodIndex].count++;
         this.setState({products});
    }

    isInCartHandler = product => {
        const products = [...this.state.products];
        const prodIndex = products.indexOf(product);
        products[prodIndex] = {...products[prodIndex]};
        products[prodIndex].isInCart = !products[prodIndex].isInCart;
        this.setState({products});
    }


    render() { 
        return (<div className="App">
        <Header productsCount={this.state.products.filter((prod) => prod.isInCart).length}/>
        <main className="container">
            <Switch>
                <Route path="/products/:id/:name?" render={props => <ProductDetails products={this.state.products} {...props}/>}></Route>
                <Route path="/cart" render={props => <ShoppingCart
                        {...props}
                         products={this.state.products.filter(prod => prod.isInCart)}
                         onReset={this.resetHandler}
                         onIncrement={this.incrementProductsHandler}
                         onDelete={this.isInCartHandler}/>}></Route>
                <Route path="/admin" render={props => <Admin products={this.state.products} onDeleteProd={this.deleteHandler} {...props}/>}></Route>
                <Route path="/addProd/:id" render={props => <AddProduct {...props} />}></Route>         
                <Route path="/login" component={Login}></Route>         
                <Route path="/about" component={About}></Route>
                <Route path="/404" component={NotFound}></Route>
                <Route path="/menu" render={props => <Menu  products={this.state.products} onInCart={this.isInCartHandler} {...props} />}></Route>
                <Redirect path="/" to="/menu"></Redirect>
                <Redirect to="/404"></Redirect>   
            </Switch>
        </main>
        </div>);
    }
}
 
export default App;