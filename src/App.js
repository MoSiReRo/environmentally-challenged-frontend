import React from 'react';
import Counter from './Counter';
import Header from './Header';
import Main from './Main';
import MobileTip from './MobileTip';
import Footer from './Footer';

class App extends React.Component {

 state = {
   date: "",
   challenges: [
  "Bring a reusable bag when you go shopping",
  "Don't buy anything packaged in plastic",
  "Use a reusable water bottle",
  "Use a reusable coffee cup",
  "Reuse a plastic bag as a bin bag",
  "Buy reusable straws",
  "Use a compost bin for your food waste",
  "Switch all your bills and bank statements to paperless",
  "Don't eat meat today",
  "Try a plant-based milk alternative",
  "Take a 4 minute shower",
  "Don't overfill your kettle; only boil the amount you need",
  "Replace your light bulbs with more energy-efficient ones",
  "Don't leave water running longer than it needs to",
  "Do your laundry at a lower temperature",
  "Use a drying rack instead of the tumble dryer",
  "Use public transport instead of driving",
  "Walk or cycle instead of driving",
  "Buy your next item of clothing at a second-hand store",
  "Give your unwanted clothes to charity instead of throwing them away",
  "Read up on what can and can't be recycled in your borough",
  "Encourage someone else to adopt eco-friendly habits"
   ]
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


// Temporary array of challenges
newChallenge = () => {
const challenges = this.state.challenges;
const i = (Math.floor(Math.random()*challenges.length));
const randomChallenge = challenges[i];
console.log(randomChallenge);
return randomChallenge;
}




render() {
  return (
    <div className="container-fluid">
      <Counter />
      <Header 
        getDateFunc={this.state.date}/>
      <Main 
        newChallengeFunc={this.newChallenge}/>
      <MobileTip />
      <Footer />
    </div>
  ); 
  }
}

export default App;
