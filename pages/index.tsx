import React from 'react';
import Footer from '../src/components/commons/Footer';
import Menu from '../src/components/commons/Menu';

const Home: React.FC = () => {
  return (
    <React.Fragment>
      <div style={{
        flex: '1',
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}>
        <Menu />
        <Footer />
      </div>
    </React.Fragment>
  )
}


export default Home;