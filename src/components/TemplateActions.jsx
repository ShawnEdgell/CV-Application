import PropTypes from 'prop-types';

function TemplateActions({ addTemplate, clearTemplate }) {
    return (
      <div className="template-buttons">
        <button className="example-add" onClick={addTemplate}>Add Example</button>
        <button className="example-clear" onClick={clearTemplate}>Clear Example</button>
      </div>
    );
  }
  
  TemplateActions.propTypes = {
    addTemplate: PropTypes.func.isRequired, // Assuming these props are functions
    clearTemplate: PropTypes.func.isRequired,
  };
  
  export default TemplateActions;
  