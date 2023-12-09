import { useState } from "react";
import React from "react";
import kurtha from './kurtha.jpg';
import anarkali from './anarkali.jpg';
import './Product1.css';

function Product1(){
    const [p, setP]=useState([["CarTool",9000,kurtha],["Shose",12000,anarkali]]);
    let [cl, setCl]=useState([]);
    const [tp, setTp]=useState(0);

    const addProduct=(items)=>{
        setCl(cl.concat(items));

    }

    const removeItem=(name)=>{
        let ucl=cl.filter((item) => name!==item[0]);
        setCl(ucl);  
        setTp(getTotalPrice());
    }

    const getTotalPrice=()=>{
        let tp=0;
        cl.map((item)=>tp+=item[1]);
        return tp;
    }

    return(
        <body>
            <h2>Available Products for you..</h2>
            {
                p.map((items)=>{
                    return(
                        <p className="catalogue">
                            <div className="p1">
                                <img src={items[2]} width={200} height={200}/><br/><br/>
                                <b>Details of the product</b><br/>                  
                                Name: {items[0]}<br/>
                                Price: {items[1]} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                <button className="addbtn" onClick={()=>{addProduct([items]); }}>Add to Cart</button>
                            </div>
                            
                        </p>
                    )
                })
            }
            <div>
                <h3>Shopping Cart</h3>
                {
                    cl.map((item)=>{
                        return(
                            <p className="catalogue">
                                <div className="p1">
                                    <img src={item[2]} width={200} height={200}/><br/><br/>
                                    <b>Details of the product:</b><br/>
                                    Product: {item[0]}<br/>
                                    Price: {item[1]} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    <button onClick={()=>{removeItem(item[0]);}}>Remove Cart</button>
                                </div>
                            </p>
                        )
                    })
                }
            </div>
            <button onClick={()=>{let gtp=getTotalPrice(); document.getElementById("tp").value=gtp;}}>Total price</button>
            <input type="text" id="tp" value="Total Price"></input>
        </body>
    )
}

export default Product1;