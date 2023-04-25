import React from "react";
import "./Properties.css";
import "typeface-roboto";
import Product from "./Product.js";
import { useContext } from "react";
import roomcontext from "../Context/roomdesc/roomcontext";
import styled from "styled-components";


const product = {
  place: "Pani tanki",
  images: [
    {
      url: "https://cdn02.hamrobazaar.com/User/Posts/2023/4/8/69e49e80-8c81-4a9f-a930-88f54dfc00d2.webp?x-image-process=image/resize,m_lfit,h_500,w_500",
    },
  ],
  price: "रु3500",
  _id: "1",
};
const Properties = () => {
  
  return (
    <>
    <Button>
    <button className="post">Post +</button>
    </Button>
      <h2 className="header">Latest Rooms Near You</h2>
      <div className="container" id="ccontainer">
        <Product product={product} />
        <Product product={product} />
        <Product product={product} />
        <Product product={product} />
        <Product product={product} />
        <Product product={product} />
        <Product product={product} />
        <Product product={product} />
        <Product product={product} />
      </div>
    </>
  );
};

export default Properties;


const Button= styled.div`
button{
width: 100px;
background: #00bcd4;
color: #fff;
border: none;
cursor: pointer;
padding: 10px;
font-size: 18px;
border-radius: 10px;
margin-left:105rem;
margin-top:20px;
}
`