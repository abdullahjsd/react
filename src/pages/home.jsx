import React from 'react'
import '../styles/home.css'
import Container85 from '../containers/container85'
import Advert from '../components/homeComponent/advert'
import Categories from '../components/homeComponent/categories'
import Download from '../components/homeComponent/download'
import Footer from '../components/homeComponent/footer'

function Home() {
    return (
        <div className='home-container'>
            <Container85>
                <Advert />
                <Categories />
            </Container85>
            <Download />
            <Footer />
        </div>
    )
}

export default Home