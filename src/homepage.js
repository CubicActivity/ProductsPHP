import React from "react";
import "./index.css";
import { withRouter } from "./withRouter";

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { products: [] };
    this.headers = [
      { key: "SKU", label: "SKU" },
      { key: "Name", label: "Name" },
      { key: "Price", label: "Price" },
      { key: "Size", label: "Size" },
      { key: "Weight", label: "Weight" },
      { key: "Width", label: "Width" },
      { key: "Length", label: "Length" },
      { key: "Height", label: "Height" },
      { key: "Type", label: "Type" },
    ];
    this.state = { checkedBoxes: [] };
    this.deleteProducts = this.deleteProducts.bind(this);
    this.toggleCheckbox = this.toggleCheckbox.bind(this);
    this.navigateTo = this.navigateTo.bind(this);
  }

  navigateTo() {
    this.props.navigate("/addproduct");
  }

  deleteProducts = async (event) => {
    event.preventDefault();
    if (window.confirm("Are you sure, want to delete the selected Products?")) {
      for (let i = 0; i < this.state.checkedBoxes.length; i++) {
        document.getElementById(this.state.checkedBoxes[i]).outerHTML = "";
      }
      
      const res = await fetch(
        "http://"+window.location.hostname+"/devtest/reactjs/PHP/deleteProducts.php",
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            'Access-Control-Allow-Origin':'*',
            mode:'cors',
          },
          body: JSON.stringify(this.state.checkedBoxes),
          
        }
      );
      console.log(await res.text());

      for (let i = 0; i <= this.state.checkedBoxes.length; i++) {
        this.state.checkedBoxes.shift();
      }
      window.location.reload()
      alert(this.state.checkedBoxes + " Succesfully Deleted");
      
    }
  };

  toggleCheckbox = (e, item) => {
    if (e.target.checked) {
      let arr = this.state.checkedBoxes;
      arr.push(item.SKU);

      this.setState = { checkedBoxes: arr };
    } else {
      let items = this.state.checkedBoxes.splice(
        this.state.checkedBoxes.indexOf(item.SKU),
        1
      );

      this.setState = {
        checkedBoxes: items,
      };
    }
    console.log(this.state.checkedBoxes);
  };

  componentDidMount() {
    fetch("http://"+window.location.hostname+"/devtest/reactjs/PHP/products.php/", {
      headers: { 'Access-Control-Allow-Origin':'*' },
      mode:'cors',
    })
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then((result) => {
        // Work with JSON data here
        console.log(result);
        this.setState({
          products_rs: result,
        });
      })
      .catch((err) => {
        // Do something for an error here
        console.log("Error Reading data " + err);
      });
  }

  render() {
    const productsFound =
      this.state.products_rs && this.state.products_rs.length;
    if (productsFound) {
      return (
        <div className="container">
          <h1>Product List</h1>
          <div className="ButtonsGroup">
            <button
              type="button"
              id="add-product-btn"
              className="btn btn-danger"
              onClick={() => {
                this.navigateTo();
              }}
            >
              ADD
            </button>
            <button
              type="button"
              id="delete-product-btn"
              className="btn btn-danger"
              onClick={this.deleteProducts}
            >
              MASS DELETE
            </button>
          </div>
          <hr />

          <div className="MainContent">
            {this.state.products_rs.map(
              function (item, index) {
                if (item.Type === "DVD") {
                  return (
                    <div className="ProductBox" id={item.SKU}>
                      <input
                        type="checkbox"
                        className="delete-checkbox"
                        value="{item.SKU}"
                        checked={this.state.checkedBoxes.find(
                          (p) => p.SKU === item.SKU
                        )}
                        onChange={(e) => this.toggleCheckbox(e, item)}
                      />
                      <br></br>
                      {item.SKU}
                      <br></br>
                      {item.Name}
                      <br></br>
                      {item.Price} $<br></br>
                      Size: {item.Size} MB
                      <br />
                      <br />
                    </div>
                  );
                } else if (item.Type === "Furniture") {
                  return (
                    <div className="ProductBox" id={item.SKU}>
                      <input
                        type="checkbox"
                        className="delete-checkbox"
                        value="{item.SKU}"
                        checked={this.state.checkedBoxes.find(
                          (p) => p.SKU === item.SKU
                        )}
                        onChange={(e) => this.toggleCheckbox(e, item)}
                      />
                      <br />
                      {item.SKU}
                      <br />
                      {item.Name}
                      <br />
                      {item.Price} $<br />
                      Dimensions: {item.Height}x{item.Width}x{item.Length}
                      <br />
                      <br />
                    </div>
                  );
                } else if (item.Type === "Book") {
                  return (
                    <div className="ProductBox" id={item.SKU}>
                      <input
                        type="checkbox"
                        className="delete-checkbox"
                        value="{item.SKU}"
                        checked={this.state.checkedBoxes.find(
                          (p) => p.SKU === item.SKU
                        )}
                        onChange={(e) => this.toggleCheckbox(e, item)}
                      />
                      <br></br>
                      {item.SKU} <br />
                      {item.Name}
                      <br />
                      {item.Price} $ <br />
                      Weight: {item.Weight}KG <br /> <br />
                    </div>
                  );
                }
              }.bind(this)
            )}
          </div>
          <br></br>
          <hr />
          <br />
          <h3 className="footer">Scandiweb Test assignment</h3>
        </div>
      );
    }else{
      return (
        <div className="container">
          <h1>Product List</h1>
          <div className="ButtonsGroup">
            <button
              type="button"
              id="add-product-btn"
              className="btn btn-danger"
              onClick={() => {
                this.navigateTo();
              }}
            >
              ADD
            </button>
            <button
              type="button"
              id="delete-product-btn"
              className="btn btn-danger"
              onClick={this.deleteProducts}
            >
              MASS DELETE
            </button>
          </div>
          <hr />
          <br />
          <h2>No products found!</h2>
          <br/>
          <hr />
          <br />
          <h3 className="footer">Scandiweb Test assignment</h3>
          </div>
          )
    }
  }
}
export default withRouter(HomePage);
