import { React, useEffect, useState } from 'react'

const Product = () => {
    const [data, setData] = useState([]);
    const [filter, setFilter] = useState(data);
    const [loading, setLoading] = useState(false);
    let componentMounted = true;
    useEffect(() => {
            getProducts();
    }, [])
    const getProducts = async () => {
        setLoading(false); 
        console.log("test")
        const responce = await fetch("https://fakestoreapi.com/products");
        if (componentMounted) {
            setData(await responce.clone().json());
            setFilter(await responce.json());
            setLoading(false);
        }
        return () => {
            componentMounted = false;
        }
    }


    return (
        <>
            <div className="container">
                <div className="row mt-5 ">
                    <div className="col-sm-12 d-flex justify-content-center">
                        <h3>Latest Product</h3>
                    </div>
                </div>
                <div className="row mt-2 mb-5">
                    <div className="col-sm-12 d-flex justify-content-center">
                        <a class="btn btn-outline-dark mx-2" > All </a>
                        <a class="btn btn-outline-dark mx-2" > <i class="fa-solid fa-user-tie me-1"></i>Men's cloth</a>
                        <a class="btn btn-outline-dark mx-2" ><i class="fa-solid fa-person-dress me-1"></i>women's cloth</a>
                        <a class="btn btn-outline-dark mx-2" > <i class="fa-solid fa-gem me-1"></i>Jewelery</a>
                        <a class="btn btn-outline-dark mx-2" ><i class="fa-solid fa-charging-station me-1"></i>Electronic</a>
                    </div>
                    {filter.map((product, index) => {
                        return (
                              <div className="col-sm-3 my-4  " key={index}>
                                    <div className="card" >
                                        <img src={product.image} className="card-img-top" alt="" />
                                        <div className="card-body">
                                            <h5 className="card-title"> {product.title} </h5>
                                            <p className="card-text d-flex">${product.price}</p>
                                            <div className='d-flex align-items-end justify-content-end h-50'>
                                            <a href="#" className="btn btn-primary ">More Detail</a>
                                        </div>
                                        </div>
                                    </div>
                                </div>
                            
                        )
                    })}
                </div>

            </div>
        </>
    )
}

export default Product