import React from 'react';
import AdditionalFeature from './AdditionalFeature';
import {connect} from 'react-redux';
import { addFeature } from '../actions';

const AdditionalFeatures = ({ addFeature, additionalFeatures }) => {

  return (

    <div className="content">
      <h4>Additional Features</h4>

      {additionalFeatures.length ? (
        <ol type="1">
          {additionalFeatures.map(item => (
            <AdditionalFeature 
            key={item.id} 
            feature={item}
            addFeature = {addFeature} />
          ))}
        </ol>

      ) : (
        
        <p>I need a car like that!!!</p>
      )}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    additionalFeatures: state.additionalFeatures
  }
}

export default connect (mapStateToProps, { addFeature })(AdditionalFeatures);
