
const Product = (props) => {
    const {id, productName, price, productImage} = props.data;
  return (
    <div className="product"> 
    <img src={productImage}/>
    <div className="description">
        <b><p>{productName}</p></b>
        <p>Price: ${price}</p>
    </div>
    <button className="addToCartBttn">Add To Cart </button>
    </div>
  )
}

export default Product
