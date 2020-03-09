import React from 'react';
import Counter from './Counter';
import Header from './Header';
import Main from './Main';
import Selection from './Selection';
import MobileTip from './MobileTip';
import Footer from './Footer';

class App extends React.Component {

render() {
  return (
    <div className="container-fluid">
      <Counter />
      <Header />
      <Main />
      <Selection />
      <MobileTip />
      <Footer />
    </div>
  ); 
  }
}

export default App;
