import React, { useEffect, useState } from "react";
import LayOut from '../../components/LayOut/LayOut'
import classes from "./Results.module.css";
import {useParams} from 'react-router-dom'
import axios from 'axios'
import {productUrl} from '../../Api/endPoints'
import ProductCard from '../../components/Product/ProductCard'
import Loader from '../../components/Loader/Loader'


function Results() {
  const [results, setResults] = useState([])
    const [isLoading, setisLoading] = useState(false);
const {categoryName} =useParams()
  
useEffect(()=> {
axios.get(`${productUrl}/products/category/${categoryName}`)
    .then((res) => {
      setResults(res.data)
          setisLoading(false)
          console.log(res.data)
    })
    .catch((err) => {
      console.log(err)
      setisLoading(false)

    })
}, [])

return (
  <LayOut>
    <section>
      <h1 style={{ padding: "30px" }}> Results</h1>
      <p style={{ padding: "30px" }}>category / {categoryName}</p>
      <hr />
      {isLoading ? (
        <Loader />
      ) : (
        <div className={classes.products__container}>
          {results?.map((product) => (
            <ProductCard
              key={product.id}
              renderDesc={false}
              renderAdd={true}
              product={product}
            />
          ))}
        </div>
      )}
    </section>
  </LayOut>
);
}

export default Results