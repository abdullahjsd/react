import React, { useEffect, useState } from 'react'
import Container85 from '../../containers/container85'
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { TfiWorld } from "react-icons/tfi";
import { SlArrowUp } from "react-icons/sl";
function Footer({ props }) {
    console.log(props)

    const [click, setClick] = useState(false)

    const ArrowUp = () => {
        setClick(!click)


    }




    return (
        <div >
            <Container85>
                <div className="row  getir-fother ">
                    <div className="col-auto flex-100 ">
                        <div >
                            <h5 className='fs-4' style={{ color: "#6b44da" }}>Getir İndir</h5>
                            <div className=' download-app'>
                                <div >
                                    <a href="#" >
                                        <img src="	https://getir.com/_next/static/images/appstore-tr-141ed939fceebdcee96af608fa293b31.svg" alt="" />
                                    </a>
                                    <a href="#">
                                        <img src="https://getir.com/_next/static/images/googleplay-tr-6b0c941b7d1a65d781fb4b644498be75.svg" alt="" />
                                    </a>
                                    <a href="#">
                                        <img src="	https://getir.com/_next/static/images/huawei-appgallery-tr-4b890fa3167bc62f9069edaf45aa7f30.svg" alt="" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* acordiona start */}
                    <div className="col">
                        <div class="accordion" id="accordionPanelsStayOpenExample">
                            <div className="col">
                                <div class="accordion-item">
                                    <h2 class="accordion-header" id="panelsStayOpen-headingOne">
                                        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded={click} aria-controls="panelsStayOpen-collapseOne">
                                            <h5 className='fs-5' style={{ color: "#6b44da" }}>Getir'i keşfet</h5>
                                        </button>
                                    </h2>
                                    <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
                                        <div class="accordion-body">
                                            <div>
                                                <ul>
                                                    <li><a href="#">Hakkımızda</a></li>
                                                    <li><a href="#">Kariyer</a></li>
                                                    <li><a href="#">Teknoloji Kariyerleri</a></li>
                                                    <li><a href="#">İletişim</a></li>
                                                    <li><a href="#">Sosyal Sorumluluk Projeleri</a></li>
                                                    <li><a href="#">Basın Bültenleri</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col">
                                <div class="accordion-item">
                                    <h2 class="accordion-header" id="panelsStayOpen-headingTwo">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded={click} aria-controls="panelsStayOpen-collapseTwo">
                                            <h5 className='fs-5' style={{ color: "#6b44da" }}>Yardıma mı ihtiyacın var?</h5>
                                        </button>
                                    </h2>
                                    <div id="panelsStayOpen-collapseTwo" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
                                        <div class="accordion-body">
                                            <div>
                                                <ul>
                                                    <li><a href="#">Sıkça Sorulan Sorular</a></li>
                                                    <li><a href="#">Kişisel Verilerin Korunması</a></li>
                                                    <li><a href="#">Gizlilik Politikası</a></li>
                                                    <li><a href="#">Kullanım Koşulları</a></li>
                                                    <li><a href="#">Çerez Politikası</a></li>
                                                    <li><a href="#">İşlem Rehberi</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div class="accordion-item">
                                    <h2 class="accordion-header" id="panelsStayOpen-headingThree">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded={click} aria-controls="panelsStayOpen-collapseThree">
                                            <h5 className='fs-5' style={{ color: "#6b44da" }}>İş Ortağımız Ol</h5>
                                        </button>
                                    </h2>
                                    <div id="panelsStayOpen-collapseThree" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
                                        <div class="accordion-body">
                                            <div>
                                                <ul>
                                                    <li><a href="#">Bayimiz Olun</a></li>
                                                    <li><a href="#">Deponu Kirala</a></li>
                                                    <li><a href="#">GetirYemek Restoranı Ol</a></li>
                                                    <li><a href="#">GetirÇarşı İşletmesi Ol</a></li>
                                                    <li><a href="#">Zincir Restoranlar</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* acordiona end */}


                    <div className="col-auto codeCover-parent">
                        <div className='codeCover'>
                            <a href="#">
                                <img src="https://cdn.getir.com/getirweb-images/common/etbis.png" alt="" />
                            </a>

                        </div>
                    </div>
                </div>
                <div className="row floter-row">
                    <div className="col">
                        <div className='floter-spans'>
                            <span className='getir-floter-span'>© 2024 Getir</span >
                            <span className='none-750'>-</span>
                            <span>
                                <a href="#">Bilgi Toplumu Hizmetleri</a>
                            </span>
                        </div>
                    </div>
                    <div className="col d-flex justify-content-end">
                        <div className='d-flex'>
                            <div className='floter-icon'>
                                <a href="#"><FaFacebook /></a>
                                <a href="#"><FaTwitter /></a>
                                <a href="#"><FaInstagram /></a>
                            </div>
                            <div>
                                <div className='language'>
                                    <TfiWorld />  <span>Türkçe (TR)</span>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

            </Container85>
        </div>
    )
}

export default Footer



{/* <div className="col flex-100 ">
<div className='d-flex justify-content-between'>
    <h5 className='fs-5' style={{ color: "#6b44da" }}>Getir'i keşfet</h5>
    <div>
        <SlArrowUp onClick={ArrowUp} className={`'rotate-180' ${click ? 'plus_180' : ''}`} />
    </div>
</div>
{
    click ?
        <div className='mt-3'>
            <ul>
                <li><a href="#">Hakkımızda</a></li>
                <li><a href="#">Kariyer</a></li>
                <li><a href="#">Teknoloji Kariyerleri</a></li>
                <li><a href="#">İletişim</a></li>
                <li><a href="#">Sosyal Sorumluluk Projeleri</a></li>
                <li><a href="#">Basın Bültenleri</a></li>
            </ul>
        </div>
        : null
}
</div>


<div className="col flex-100">
<div className='d-flex justify-content-between'>
    <h5 className='fs-5' style={{ color: "#6b44da" }}>Yardıma mı ihtiyacın var?</h5>
    <div>
        <SlArrowUp onClick={ArrowUp} className={`'rotate-180' ${click ? 'plus_180' : ''}`} />
    </div>
</div>
<div className='mt-3'>
    <ul>
        <li><a href="#">Sıkça Sorulan Sorular</a></li>
        <li><a href="#">Kişisel Verilerin Korunması</a></li>
        <li><a href="#">Gizlilik Politikası</a></li>
        <li><a href="#">Kullanım Koşulları</a></li>
        <li><a href="#">Çerez Politikası</a></li>
        <li><a href="#">İşlem Rehberi</a></li>
    </ul>
</div>
</div>




<div className="col">
<h5 className='fs-5' style={{ color: "#6b44da" }}>İş Ortağımız Ol</h5>
<div className='mt-3'>
    <ul>
        <li><a href="#">Bayimiz Olun</a></li>
        <li><a href="#">Deponu Kirala</a></li>
        <li><a href="#">GetirYemek Restoranı Ol</a></li>
        <li><a href="#">GetirÇarşı İşletmesi Ol</a></li>
        <li><a href="#">Zincir Restoranlar</a></li>
    </ul>
</div>
</div> */}