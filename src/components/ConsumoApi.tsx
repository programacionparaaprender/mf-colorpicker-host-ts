import { useState, useEffect, useMemo, useCallback } from 'react';

interface Beer {
  id: number;
  name: string;
  price: string;
  rating: {
    average: number;
    reviews: number;
  };
  image: string;
}

function ConsumoApi() {
  const [data, setData] = useState<Beer[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [filterText, setFilterText] = useState<string>('');

  // useCallback para memoizar la función getData
  // Solo se recrea si las dependencias cambian (en este caso, no tiene dependencias)
  const getData = useCallback(async () => {
    try {
      setLoading(true);
      const respuesta = await fetch('https://api.sampleapis.com/beers/ale');
      
      if (!respuesta.ok) {
        throw new Error(`Error HTTP: ${respuesta.status}`);
      }
      
      const json: Beer[] = await respuesta.json();
      setData(json);
      setError(null);
    } catch (e) {
      const errorMessage = e instanceof Error ? e.message : 'Error desconocido';
      setError(errorMessage);
      console.error('Error fetching data:', e);
    } finally {
      setLoading(false);
    }
  }, []); // Array de dependencias vacío significa que la función se crea solo una vez

  useEffect(() => {
    getData();
  }, [getData]); // Ahora getData es estable gracias a useCallback

  // useMemo para formatear el JSON
  const formattedData = useMemo(() => {
    if (!data) return null;
    return JSON.stringify(data, null, 2);
  }, [data]);

  // useCallback para la función de filtrado
  const handleFilterChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setFilterText(e.target.value);
  }, []); // Sin dependencias, se crea solo una vez

  // useMemo para filtrar los datos
  const filteredData = useMemo(() => {
    if (!data) return null;
    
    if (!filterText.trim()) return data;
    
    return data.filter(beer => 
      beer.name.toLowerCase().includes(filterText.toLowerCase())
    );
  }, [data, filterText]); // Se recalcula cuando data o filterText cambian

  // useMemo para datos formateados filtrados
  const formattedFilteredData = useMemo(() => {
    if (!filteredData) return null;
    return JSON.stringify(filteredData, null, 2);
  }, [filteredData]);

  // useCallback para función de recarga
  const handleReload = useCallback(() => {
    console.log('Recargando datos...');
    getData();
  }, [getData]); // Dependencia: getData (que es estable)

  if (loading) {
    return <div>Cargando datos...</div>;
  }

  if (error) {
    return (
      <div>
        <div>Error: {error}</div>
        <button onClick={handleReload}>Reintentar</button>
      </div>
    );
  }

  return (
    <div>
      <h2>Lista de Cervezas (Ales)</h2>
      
      {/* Control de filtro */}
      <div style={{ marginBottom: '20px' }}>
        <input
          type="text"
          placeholder="Filtrar por nombre..."
          value={filterText}
          onChange={handleFilterChange} // Usando la función memoizada
          style={{ padding: '8px', width: '300px' }}
        />
        <button 
          onClick={handleReload} 
          style={{ marginLeft: '10px', padding: '8px 16px' }}
        >
          Recargar datos
        </button>
      </div>
      
      {/* Contador usando useMemo */}
      <BeerCounter data={filteredData} />
      
      {/* Datos filtrados */}
      <div>
        <h3>Datos Filtrados ({filteredData?.length || 0} resultados):</h3>
        {formattedFilteredData ? (
          <pre style={{ maxHeight: '400px', overflow: 'auto' }}>{formattedFilteredData}</pre>
        ) : (
          <div>No hay datos disponibles</div>
        )}
      </div>
      
      <hr style={{ margin: '20px 0' }} />
      
      {/* Datos completos (solo si hay filtro aplicado) */}
      {filterText && data && (
        <>
          <h3>Datos Completos ({data.length} resultados):</h3>
          {formattedData ? (
            <pre style={{ maxHeight: '200px', overflow: 'auto', fontSize: '12px' }}>
              {formattedData}
            </pre>
          ) : null}
        </>
      )}
      
      {/* Estadísticas usando useMemo */}
      {filteredData && (
        <BeerStats data={filteredData} />
      )}
    </div>
  );
}

// Componente BeerCounter que recibe una función memoizada
interface BeerCounterProps {
  data: Beer[] | null;
}

function BeerCounter({ data }: BeerCounterProps) {
  // useMemo para el contador
  const beerCount = useMemo(() => {
    return data ? data.length : 0;
  }, [data]);

  // useCallback para una función interna del componente
  const handleCountMessage = useCallback(() => {
    if (beerCount === 0) return "No hay cervezas";
    if (beerCount === 1) return "Hay 1 cerveza";
    return `Hay ${beerCount} cervezas`;
  }, [beerCount]); // Dependencia: beerCount

  return (
    <div style={{ 
      backgroundColor: '#f0f0f0', 
      padding: '10px', 
      borderRadius: '5px',
      marginBottom: '15px'
    }}>
      <h4>Contador de Cervezas:</h4>
      <p><strong>{handleCountMessage()}</strong></p>
    </div>
  );
}

// Componente BeerStats que usa useMemo y recibe callbacks memoizados
interface BeerStatsProps {
  data: Beer[];
}

function BeerStats({ data }: BeerStatsProps) {
  // useMemo para calcular estadísticas
  const stats = useMemo(() => {
    console.log('Calculando estadísticas...');
    
    const totalBeers = data.length;
    if (totalBeers === 0) {
      return {
        totalBeers: 0,
        averageRating: '0.00',
        averagePrice: '$0.00',
      };
    }
    
    const averageRating = data.reduce((sum, beer) => sum + beer.rating.average, 0) / totalBeers;
    const averagePrice = data.reduce((sum, beer) => {
      const price = parseFloat(beer.price.replace('$', '')) || 0;
      return sum + price;
    }, 0) / totalBeers;
    
    return {
      totalBeers,
      averageRating: averageRating.toFixed(2),
      averagePrice: `$${averagePrice.toFixed(2)}`,
    };
  }, [data]);

  // useCallback para formatear el precio
  const formatPrice = useCallback((price: string) => {
    const numericPrice = parseFloat(price.replace('$', '')) || 0;
    return `$${numericPrice.toFixed(2)}`;
  }, []); // Sin dependencias, función pura

  // useCallback para calcular el precio total
  const calculateTotalPrice = useCallback(() => {
    return data.reduce((total, beer) => {
      const price = parseFloat(beer.price.replace('$', '')) || 0;
      return total + price;
    }, 0);
  }, [data]); // Dependencia: data

  return (
    <div style={{ 
      marginTop: '20px', 
      padding: '15px', 
      border: '1px solid #ccc',
      borderRadius: '8px'
    }}>
      <h3>Estadísticas de Cervezas:</h3>
      <p><strong>Cantidad total:</strong> {stats.totalBeers} cervezas</p>
      <p><strong>Rating promedio:</strong> {stats.averageRating} / 5</p>
      <p><strong>Precio promedio:</strong> {stats.averagePrice}</p>
      <p><strong>Precio total:</strong> {formatPrice(`$${calculateTotalPrice()}`)}</p>
      
      {/* Botón que usa una función memoizada */}
      <ShowDetailsButton data={data} />
    </div>
  );
}

// Componente adicional para demostrar useCallback con parámetros
interface ShowDetailsButtonProps {
  data: Beer[];
}

function ShowDetailsButton({ data }: ShowDetailsButtonProps) {
  const [showDetails, setShowDetails] = useState(false);

  // useCallback para toggle con estado previo
  const toggleDetails = useCallback(() => {
    setShowDetails(prev => !prev);
  }, []); // Sin dependencias, función estable

  // useCallback para función con parámetro
  const getTopRatedBeer = useCallback((threshold: number = 4) => {
    const topBeers = data.filter(beer => beer.rating.average >= threshold);
    return topBeers.length;
  }, [data]); // Dependencia: data

  return (
    <div style={{ marginTop: '10px' }}>
      <button 
        onClick={toggleDetails}
        style={{
          padding: '8px 16px',
          backgroundColor: showDetails ? '#dc3545' : '#007bff',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer'
        }}
      >
        {showDetails ? 'Ocultar detalles' : 'Mostrar detalles'}
      </button>
      
      {showDetails && (
        <div style={{ marginTop: '10px', padding: '10px', backgroundColor: '#f8f9fa' }}>
          <p><strong>Cervezas con rating ≥ 4:</strong> {getTopRatedBeer(4)}</p>
          <p><strong>Cervezas con rating ≥ 4.5:</strong> {getTopRatedBeer(4.5)}</p>
          <small>Usando función memoizada getTopRatedBeer</small>
        </div>
      )}
    </div>
  );
}

export default ConsumoApi;