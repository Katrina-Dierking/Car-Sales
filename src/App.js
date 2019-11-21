import React from 'react';
import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';
import { connect } from 'react-redux'
import { addFeature, removeFeature, updateTotal } from './actions';



const App = props => {

  const removeFeature = (item) => {
    // console.log(kd: app.js: App: removeFeature: item)
    props.removeFeature(item)
    props.updateTotal(-item.price);
   
  };

  const buyItem = (item)=> {
    props.addFeature(item);
    props.updateTotal(item.price);
  };

  return (
    <div className="boxes">
      <div className="box">
        <Header car={props.car}
        additionalPrice = {props.additionalPrice} />


        <AddedFeatures 
          car={props.car}
          additionalFeatures={props.additionalFeatures}
          removeFeature = {removeFeature}/>
      </div>

      <div className="box">
        <AdditionalFeatures 
          car = {props.car}
          additionalFeatures={props.additionalFeatures} 
          buyItem = {buyItem}/>

        <Total 
          car={props.car} 
          additionalPrice={props.additionalPrice} />
      </div>
    </div>
  );
  };

const mapStateToProps = state => {
  return {
    additionalPrice: state.additionalPrice,
    car: state.car,
    additionalFeatures: state.additionalFeatures
  
  }
}

export default connect (mapStateToProps, {addFeature, removeFeature, updateTotal})(App);
