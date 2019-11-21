import React from 'react';
// import { buyItem } from '../App';

const AdditionalFeature = props => {
  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button onClick = {() => props.buyItem (props.feature, props.car)} className="button">Add This Item</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

export default AdditionalFeature;
