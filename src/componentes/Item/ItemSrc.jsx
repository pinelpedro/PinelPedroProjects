import  { useState, useEffect } from 'react';

function ItemSrc() {
    let cout = 0
    const [data, setData] = useState(null);

    useEffect(() => {
        fetchData();
    }, []);
//https://api.thecatapi.com/v1/images/search
    const fetchData = async () => {
        try {
            const response = await fetch('https://api.thecatapi.com/v1/images/search');
            if (!response.ok) {
                throw new Error('Erro ao buscar dados');
            }
            const jsonData = await response.json();
            setData(jsonData);
        } catch (error) {
            console.error('Erro:', error);
        }
    };

    return (
        <div>
            {data ? (
                <>
                    {data.map(item => (
                        <img key={cout++} width={'200px'} height={'200px'} overflow={'hidden'} src={item.url} alt='drogas'></img>                   ))}
                </>
            ) : (
                <p>Carregando...</p>
            )}
        </div>
    );
}

export default ItemSrc;
