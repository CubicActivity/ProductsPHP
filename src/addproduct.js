import React from "react";
import "./index.css";
import { useNavigate } from "react-router-dom";
const AddProduct = () => {
  const navigate = useNavigate();

  let URL ="http://"+window.location.hostname+"/devtest/reactjs/PHP/setProducts.php/";

  return (
    <div>
      <div id="product_form">
        <form
          action={URL}
          method="POST"
          id="form1"
        >
          <h1 id="title">Product Add</h1>
          <div className="ButtonsGroup">
            <iframe
              name="dummyframe"
              id="dummyframe"
              style={{ display: "none" }}
              title="."
            ></iframe>
            <button id="save-btn" type="SUBMIT">
              Save
            </button>
            <button
              id="cancel-btn"
              onClick={() => {
                navigate("/");
              }}
            >
              Cancel
            </button>
          </div>

          <hr />
          <br />

          <label for="SKU">SKU </label>
          <input
            type="text"
            id="sku"
            name="SKU"
            required
            placeholder="Please, provide SKU"
          />
          <br />
          <br />
          <label for="Name">Name </label>
          <input
            type="text"
            id="name"
            name="Name"
            required
            placeholder="Please, provide name"
          />
          <br />
          <br />
          <label for="Price">Price ($) </label>
          <input
            type="number"
            id="price"
            name="Price"
            required
            placeholder="Please, provide Price"
          ></input>
          <br />
          <br />

          <label for="productType">Type Switcher </label>
          <select
            id="productType"
            name="productType"
            onChange={() => {
              if (document.getElementById("productType").value === "DVD") {
                document.getElementById("section_add").innerHTML =
                  "<br/><label>Size (MB) </label><input type='number' name='size' placeholder='Please, provide size' required title='Please, provide size' id='size'></input>";
              } else if (
                document.getElementById("productType").value === "Furniture"
              ) {
                document.getElementById("section_add").innerHTML =
                  "<br/><label>Height (CM) </label><input type='number' id='height' placeholder='Please, provide height' name='height' required></input><br/><br/><label>Width (CM) </label><input type='number' id='width' name='width' required placeholder='Please, provide width'></input><br/><br/><label>Length (CM) </label><input id='length' type='number' name='length' required placeholder='Please, provide length'></input>";
              } else if (
                document.getElementById("productType").value === "Book"
              ) {
                document.getElementById("section_add").innerHTML =
                  "<br/><label>Weight (KG) </label><input type='number' id='weight' name='weight' required placeholder='Please, provide weight'></input>";
              } else {
                document.getElementById("section_add").innerHTML = "";
              }
            }}
          >
            <option id="DVD" selected value="DVD">
              DVD
            </option>
            <option id="Furniture" value="Furniture">
              Furniture
            </option>
            <option id="Book" value="Book">
              Book
            </option>
          </select>

          <div id="section_add">
            <br />
            <label>Size (MB) </label>
            <input
              type="number"
              name="size"
              required
               title="Please, provide size"
              id="size"
              placeholder="Please, provide size"
            ></input>
            ;
          </div>
        </form>
      </div>
      <br />
      <br />
      <hr />
      <br />
      <h3 className="footer">Scandiweb Test assignment</h3>
    </div>
  );
};

export default AddProduct;
