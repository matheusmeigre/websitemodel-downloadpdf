import React from 'react'
import './Home.css'

const Home = () => {
  return (
    <div id='container-main'>
        <div id='box-home'>
            <h1>Home</h1>
            <p>Baixar faturas abaixo</p>
            <div id='box-faturas'>
                <a href="/7356699.pdf" target='_blank'>Fatura 1</a>
                <a href="/7356700.pdf" target='_blank'>Fatura 2</a>
                <a href="/7356701.pdf" target='_blank'>Fatura 3</a>
                <a href="/7356702.pdf" target='_blank'>Fatura 4</a>
            </div>
        </div>
    </div>
  )
}

export default Home