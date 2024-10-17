import React from 'react'
import Container85 from '../../containers/container85'
function Download() {
    return (
        <div className='download pt-4'>
            <Container85>
                <div className="download-bg-img pt-4">
                    <div className="row text-white">
                        <div className="col  download-col-parent">
                            <div >
                                <h3>Getir'i indir!</h3>
                                <h5>İstediğiniz ürünleri dakikalar içinde kapınıza   getirelim.</h5>
                                <div className='mt-4 download-app'>
                                    <a href="#">
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
                        <div className="col-5 d-flex justify-content-end" style={{ marginRight: "-9px" }}>
                            <img className='phone-img' src="https://cdn.getir.com/getirweb-images/common/landing/phoneLanding.png" alt="" />
                        </div>
                    </div>
                </div>
                <div className="row mt-md-5 mt-3 gap-md-4 mb-md-5 mb-2">
                    <div className="col mt-3 ">
                        <div className='text-center bg-white download-box'>
                            <img src="https://getir.com/_next/static/images/intro-in-minutes-a7a9238a73013642a6597c4db06653c1.svg" alt="" />
                            <h5 className='mt-4' style={{ color: "#6b44da" }}>Her siparişine bir kampanya</h5>
                            <p className='fs-6 mt-2'>Getir’de vereceğin her siparişe uygun bir kampanya bulabilirsin.</p>
                        </div>
                    </div>
                    <div className="col mt-3">
                        <div className='text-center bg-white download-box'>
                            <img src="https://getir.com/_next/static/images/intro-market-courier-34cd8b0ca1d547580d506566edfacf8d.svg" alt="" />
                            <h5 className='fs-5 mt-4' style={{ color: "#6b44da" }}>Dakikalar içinde kapında</h5>
                            <p className='fs-6 mt-2'>Getir’le siparişin dakikalar içinde kapına gelir.</p>
                        </div>
                    </div>
                    <div className="col mt-3">
                        <div className='text-center bg-white download-box'>
                            <img src="https://getir.com/_next/static/images/intro-discount-6248544cb695830a2e25debd3c0f3d29.svg" alt="" />
                            <h5 className='fs-5 mt-4' style={{ color: "#6b44da" }}>Binlerce çeşit mutluluk</h5>
                            <p className='fs-6 mt-2'>Getir’de binlerce çeşit arasından seçimini yapabilirsin.</p>
                        </div>
                    </div>
                </div>

            </Container85>
        </div>
    )
}

export default Download