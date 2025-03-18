import React from 'react'
import './Home.css'
import {useState, useEffect} from 'react'

const Home = () => {

    const [cnpj, setCnpj] = useState('')
    const [periodo, setPeriodo] = useState('')
    const [link, setLink] = useState('')
    const [status, setStatus] = useState('')
    const [errorMessage, setErrorMessage] = useState('')
    const [successMessage, setSuccessMessage] = useState('')
    const [loading, setLoading] = useState(false)
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        if (cnpj && periodo) {
            setIsVisible(true)
        } else {
            setIsVisible(false)
        }
    }, [cnpj, periodo])

  return (
    <div id='container-main'>
        <div id='box-home'>
            <h1>Home</h1>
            <div id='box-cnpj'>
                <label htmlFor="cnpj">Selecione o CNPJ:</label>
                <select name="cnpj" id="cnpj" onChange={(e) => setCnpj(e.target.value)}>
                    <option value="12345678">12345678</option>
                    <option value="87654321">87654321</option>
                    <option value="13579086">13579086</option>
                </select>
            </div>

            <div>

                <div id='box-periodo'>
                    <label htmlFor="period">Selecione o período:</label>
                    <select name="period" id="period" onChange={(e) => setPeriodo(e.target.value)}>
                        <option value="02/2025">02/2025</option>
                        <option value="03/2025">03/2025</option>
                        <option value="04/2025">04/2025</option>
                    </select>
                </div>

                {/* TODO: Implementar a parte de baixar o pdf */}

            </div>
            <button id='btn-search' type='submit'>Buscar</button>

            <div id='box-faturas' style={{ visibility: isVisible ? 'visible' : 'hidden' }}>
                    <h3>Faturas</h3>
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