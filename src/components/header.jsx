import React from 'react'
import '../styles/header.css'
import { GrLanguage } from "react-icons/gr";
import { BiSolidUser } from "react-icons/bi";
import { HiUserAdd } from "react-icons/hi";
import Container85 from '../containers/container85';
function header() {
    return (
        <div>
            <div className="container-flute  myHeader">
                <Container85>
                    <div className="row myHeader">
                        <div className="col d-flex justify-content-start align-items-center  header-heingth">
                            <div><a href="#">getir</a></div>
                            <div><a href="#">getiryemek</a></div>
                            <div><a href="#">getirbüyük</a></div>
                            <div><a href="#">getirsu</a></div>
                            <div><a href="#">getirçarşı</a></div>
                        </div>
                        <div className="col d-flex justify-content-end align-items-center  display">
                            <div><a href="#"><GrLanguage /><span className='display-none' >Türkçe (TR)</span>  </a></div>
                            <div><a href="#"><BiSolidUser /><span className='display-none'>Giriş yap</span>  </a></div>
                            <div><a href="#"><HiUserAdd /><span className='display-none'>Kayıt Ol</span>  </a></div>
                        </div>

                    </div>
                </Container85>
            </div>
        </div>
    )
}

export default header 