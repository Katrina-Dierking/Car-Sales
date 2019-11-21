import React from 'react';

const AddedFeature = props => {

  const removeFeature = () => {
    props.removeFeature(props.feature)
  };
  
  return (
    <li>
      <button onClick = {removeFeature} 
        className="button"
          > Remove This Feature
          console.log('kd: AddedFeature.js : AddFeature : button: remove: This button was clicked')
      </button>

      {props.feature.name}
    </li>
  );
};

export default AddedFeature;
