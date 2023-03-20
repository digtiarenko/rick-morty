import loadingGif from '../../images/gif/loading.gif';

function Loading() {
  return (
    <div className="container">
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: '25%',
        }}
      >
        <div style={{ height: '150px' }}>
          <img width={150} src={loadingGif} alt="Ooops" />
        </div>

        <p style={{ fontWeight: '600', fontSize: '42px', marginTop: '0px' }}>LOADING ...</p>
      </div>
    </div>
  );
}

export default Loading;
