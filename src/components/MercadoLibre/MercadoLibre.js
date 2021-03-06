import {useEffect, useState} from 'react';

const MercadoLibre = () => {
    const [products, setProducts] = useState([]);
    const [input, setInput] = useState('');
    
    //con handleSearch ya no se necesitaría
    // useEffect(() => {
    //     fetch(`https://api.mercadolibre.com/sites/MLA/search/?q=${input}`)
    //     .then(res => {
    //         return res.json()
    //     })
    //     .then(json => {
    //         console.log(json);
    //         setProducts(json.results);
    //     })
    // }, [])

    const handleSearch = (e) => {
        e.preventDefault();
        fetch(`https://api.mercadolibre.com/sites/MLA/search/?q=${input}`)
        .then(res => {
            return res.json()
        })
        .then(json => {
            console.log(json);
            setProducts(json.results);
        })

    }

    return (
        <div>
            <h1>Mercado Libre</h1>
            <form onSubmit={handleSearch}>
                <input type='text' onChange={(e) => setInput(e.target.value)}/>
                <button type='submit'>Buscar</button>
            </form>
            <ul>
                {products.map(p => {
                    return (
                        <li key={p.id}>
                            <img src={p.thumbnail} alt={p.title}/>
                            <p>{p.title}</p>
                            <p>{p.price}</p>
                        </li>
                    ) 
                })}
            </ul>
        </div>
    )
}

export default MercadoLibre;