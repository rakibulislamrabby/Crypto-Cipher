import React, { useEffect, useState } from 'react';
import CoinCard from '../CoinCard/CoinCard';
import Spinner from '../Spinner/Spinner';


const Coins = () => {
    const [coins, setcoins] = useState([]);
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        setLoading(true)
        fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=false")
            .then(res => res.json())
            .then(data => setcoins(data));
        setLoading(false)
    }, [])
    return (
        <>
            {loading ? (<Spinner />) :
                (
                    <div className='px-4 pt-10 pb-24 mx-auto max-w-7xl md:px-2
        '>
                        <h1 className='text-center text-3xl font-bold text-gray-800'>Available Crypto Currencies</h1>
                        <p className='text-xl pb-10 font-normal text-gray-500'>Total coins: {coins.length}</p>

                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-items-center '>
                            {
                                coins.map(coin => <CoinCard
                                    key={coin.id}
                                    coin={coin}
                                ></CoinCard>)
                            }
                        </div>
                    </div>
                )}
        </>
    );
};

export default Coins;