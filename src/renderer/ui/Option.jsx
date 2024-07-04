function Option(props) {
  const { children, ...rest } = props;
  return <option {...rest}>{children}</option>;
}

export default Option;
