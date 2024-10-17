import React, { useEffect, useState } from 'react';
import Data from '../../data/db.json'


function Categories() {
    const [data, setData] = useState()

    useEffect(() => {
        setData(Data.catogaries)
    }, [])


    return (
        <div>
            <h5>Kategoriler</h5>
            <div className='categories-parent ' >
                {
                    data && data.map(dt => (
                        <div className="categories-child" key={dt.id}>
                            <div >
                                <div className='categori-img-div'>
                                    <img src={dt.img} />
                                </div>
                                <h6 className='mt-2'><a href="#">{dt.name}</a>  </h6>
                            </div>
                        </div>
                    ))
                }
            </div>

        </div>
    )
}

export default Categories