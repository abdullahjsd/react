import React from 'react'

function deneme() {
    return (
        <div>
            <div className="col flex-100 ">
                <div className='d-flex justify-content-between'>
                    <h5 className='fs-5' style={{ color: "#6b44da" }}>Getir'i keşfet</h5>

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




            <div className="col">
                <h5 className='fs-5' style={{ color: "#6b44da" }}>İş Ortağımız Ol</h5>
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
    )
}

export default deneme