import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../../services/products";
import ItemDetail from "../ItemDetail";

export default function ItemDetailContainer(){
    const{id} = useParams();
    const[product, setProduct] = useState(null);

  useEffect(() => {
    getProductById(id)
      .then((data) => setProduct(data))
      .catch((err) => console.error(err));
  }, [id]);


    return(
        <div>
            <ItemDetail {...product}/>
        </div>
    )
}