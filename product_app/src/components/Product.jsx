import React from 'react'

function Poduct({ data }) {
    console.log(data)
    //ilk harfini büyük harf yapar
    const capitalizeFirsLetter = (str) => {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }
    return (
        <div >
            <div className="card p-3" style={{ width: "18rem" }}>
                <img className="card-img-top" style={{ height: "270px" }} src={data.img} alt="Card image cap" />
                <div className="card-body">
                    <h5 className="card-title">{capitalizeFirsLetter(data.name)}</h5>
                    <span className='text-danger' style={{ fontWeight: "bold" }}>{data.price} TL </span>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="btn btn-primary">Detay</a>
                </div>
            </div>

        </div>
    )
}

export default Poduct