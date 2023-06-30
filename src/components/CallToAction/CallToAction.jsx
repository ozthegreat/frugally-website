import * as React from 'react';

export default function CallToAction() {
  return (
    <div
      className="container"
      style={{
        margin: 'auto',
        background: '#000',
        display: 'flex',
        padding: '60px',
        borderRadius: '10px',
        marginBottom: '100px',
      }}
    >
      <div
        style={{
          color: '#fff',
          bottom: 0,
          paddingLeft: '2rem',
          paddingRight: '2rem',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'baseline',
          flexDirection: 'column',
        }}
      >
        <h3 style={{ fontSize: '36px' }}>Call to Action</h3>
        <p style={{ maxWidth: 800 }}> Once you've worked through the getting started guide</p>
        <button
          style={{
            background: '#f93d6b',
            color: '#fff',
            borderRadius: '70px',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '26px 50px',
            fontSize: '17px',
            fontWeight: 500,
            display: 'flex',
            border: 'none',
            cursor: 'pointer',
          }}
        >
          My Action
        </button>
      </div>
      <img style={{ borderRadius: '10px' }} src="https://placehold.co/500x350" alt="cta" />
    </div>
  );
}
