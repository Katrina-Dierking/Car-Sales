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
      </button>

      {props.feature.name}
    </li>
  );
};

export default AddedFeature;
