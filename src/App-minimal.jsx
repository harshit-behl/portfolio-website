function App() {
  return (
    <div style={{
      backgroundColor: 'black',
      color: 'white',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      fontSize: '24px',
      fontFamily: 'Arial, sans-serif'
    }}>
      <h1 style={{ fontSize: '48px', marginBottom: '20px' }}>
        🚀 PORTFOLIO TEST 🚀
      </h1>
      <p style={{ fontSize: '24px', marginBottom: '20px' }}>
        Can you see this black screen with white text?
      </p>
      <div style={{
        padding: '20px',
        border: '2px solid yellow',
        backgroundColor: 'red',
        color: 'white',
        borderRadius: '10px'
      }}>
        If you see this red box, React is working!
      </div>
    </div>
  )
}

export default App