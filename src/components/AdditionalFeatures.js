import React from 'react';
import AdditionalFeature from './AdditionalFeature';

const AdditionalFeatures = props => {
  return (
    <div className="content">
      <h4>Additional Features</h4>
      {props.additionalFeatures.length ? (
        <ol type="1">
          {props.additionalFeatures.map(item => (
            <AdditionalFeature 
            key={item.id} 
            feature={item}
            add = {props.addFeature} />
          ))}
        </ol>
      ) : (
        <p>I need a car like that!!!</p>
      )}
    </div>
  );
};

export default AdditionalFeatures;
