const Search = () => {
  return (
    <div style={{ width: '100%' }}>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          border: '1px solid #a0aec0',
          padding: '1.25rem',
          borderRadius: '0.375rem',
          boxShadow:
            '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',

          maxWidth: '280px',
          margin: '0 auto',
          gap: '2rem',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: '1rem',
            position: 'relative',
          }}
        >
          <div>
            <img
              src="https://www.pngmart.com/files/12/Shopee-Logo-Transparent-PNG.png"
              alt="Shopee Logo"
              style={{ width: '5rem', height: '5rem' }}
            />
          </div>
          <div
            style={{
              fontSize: '1.5rem',
              fontWeight: 'bold',
              color: '#4a5568',
              cursor: 'pointer',
              position: 'absolute',
              top: '-0.5rem',
              right: '0',
            }}
          >
            X
          </div>
        </div>

        <div>
          <input
            style={{
              maxWidth: '100%',
              padding: '0.5rem',
              border: '1px solid #e2e8f0',
              borderRadius: '0.25rem',
              marginBottom: '1rem',
            }}
            type="text"
            placeholder="Busque aqui"
          />
          <button
            style={{
              width: '100%',
              padding: '0.75rem',
              backgroundColor: '#4299e1',
              color: '#ffffff',
              borderRadius: '0.25rem',
              fontWeight: 'bold',
            }}
          >
            Grab
          </button>
        </div>
      </div>
    </div>
  );
};

export default Search;
