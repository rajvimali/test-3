import React from 'react'
import { useSelector } from 'react-redux'
import './Style.css'
// const dispatch =useDispatch()

function Action() {
    const state = useSelector((state) => state.product)
    console.log(state)

    return (
        <>
            <div className='row  d-flex'>

                {state && state.map((item, index) =>
                    <div className="product-card col-3" key={item.id}>
                        <div class="product-tumb">
                            <img src={item.img} alt="" className="img-fliud" />
                        </div>
                        <div class="product-details">
                            <span class="product-catagory">{item.type}</span>
                            <h4><a href="">{item.name}</a></h4>
                            <p>{item.color}</p>
                            <a className='btn btn-secondary'>
                                Add Cart +
                            </a>
                            <a className='btn ms-2 btn-secondary'>
                                Delete Cart -
                            </a>
                        </div>
                    </div>
                )}

            </div>
        </>
    )
}
export default Action