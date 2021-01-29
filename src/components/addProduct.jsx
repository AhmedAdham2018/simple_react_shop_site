import React, { Component } from 'react';
import axios from 'axios';



class AddProduct extends Component {
    state = { 
        id: "",
        name: "",
        price: ""
     }


    async componentDidMount(){
        const id  = this.props.match.params.id;
        if (id !== "new") {
          const res = await axios.get(`http://localhost:3005/products/${id}`);
          const state = { ...this.state};
          state.name = res.data.name;
          state.price = res.data.price;
          state.id = res.data.id;
          this.setState(state); 
        }
    }    

    addProdSubmitHandler = async e => {
        e.preventDefault();
        //call backend...
        //Add product...
        
        if(this.props.match.params.id === "new") {
            const prod = { ...this.state , count: 0, isInCart: false};
            await axios.post('http://localhost:3005/products/',prod);
        }
        else{
            const prod = { ...this.state , count: 0 , isInCart: false};
            delete prod.id;
            await axios.put(`http://localhost:3005/products/${this.state.id}`, prod);
        }

        this.props.history.replace("/admin");
    };



    changeInputHandler = e => {
        let state = { ...this.state};
        state[e.currentTarget.name] = e.currentTarget.value;
        this.setState(state);
    }

    render() { 
        return ( <React.Fragment>
            <h1>{this.props.match.params.id === "new" ? "Please Add Product" : "Edit Product"}</h1>
            <form onSubmit={this.addProdSubmitHandler}>
                <div className="form-group">
                    <label htmlFor="prodName">Product Name</label>
                    <input autoFocus type="text" onChange={this.changeInputHandler} name="name" value={this.state.name} className="form-control" id="prodName"/>
                </div>
                <div className="form-group">
                    <label htmlFor="prodPrice">Product Price</label>
                    <input type="number" onChange={this.changeInputHandler} name="price" value={this.state.price} className="form-control" id="prodPrice"/>
                </div>
                <button type="submit" className="btn btn-primary">{this.props.match.params.id === "new" ? "Add Product" : "Edit Product"}</button>
             </form> 
        </React.Fragment> );
    }
}
 
export default AddProduct;