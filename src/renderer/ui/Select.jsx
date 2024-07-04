import React from 'react';

const Select = React.forwardRef((props, ref) => (
  <select {...props} ref={ref}>
    {props.children}
  </select>
));

export default Select;
