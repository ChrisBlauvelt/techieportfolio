import React, { useEffect } from 'react';
import Head from 'next/head';

const ResumePage = () => {
  useEffect(() => {
    // You can add analytics or other side effects here
    console.log('Resume page viewed');
  }, []);

  return (
    <div style={{ height: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Head>
        <title>My Resume</title>
        <meta name="Chris Blauvelt's Resume" content="View my professional resume" />
      </Head>
      <h1 style={{ textAlign: 'center' }}>My Resume</h1>
      <iframe 
        src="/resume.pdf"
        style={{
          width: '100%',
          height: '100%',
          border: 'none'
        }}
      />
    </div>
  );
};

export default ResumePage;
