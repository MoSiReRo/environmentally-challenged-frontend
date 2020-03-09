import React from 'react';
import Counter from './Counter';
import Header from './Header';
import Main from './Main';
import Selection from './Selection';
import MobileTip from './MobileTip';
import Footer from './Footer';

class App extends React.Component {

 state = {
   date: ""
 };
 
 componentDidMount() {
   this.getDate();
 }

 getDate = () => {
  let today = new Date()
  let dd = today.getDate();
  let mm = today.getMonth() + 1;
  let yyyy = today.getFullYear();
    if (dd < 10) {
      dd=`0${dd}`;
  }
    if (mm < 10) {
      mm=`0${mm}`;
  }
const fullDate = dd + "/" + mm + "/" + yyyy;

   this.setState({
     date: fullDate
   });
 }

render() {
  return (
    <div className="container-fluid">
      <Counter />
      <Header 
        getDateFunc={this.state.date}/>
      <Main />
      <Selection />
      <MobileTip />
      <Footer />
    </div>
  ); 
  }
}

export default App;
