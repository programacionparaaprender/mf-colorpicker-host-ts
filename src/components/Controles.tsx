function Controles({setCount}:{setCount:React.Dispatch<React.SetStateAction<number>>}) {
  return (
    <div className="card">
      <button onClick={() => setCount(prev => prev + 1)}>
          increment count 
        </button>
        <button onClick={() => setCount(prev => prev - 1)}>
          decrement count
        </button>
        <button onClick={() => setCount(0)}>
          clear count
        </button>
    </div>
  )
}

export default Controles
