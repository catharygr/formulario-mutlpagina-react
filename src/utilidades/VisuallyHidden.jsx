/* eslint-disable react/prop-types */
const hiddenStyles = {
  display: "inline-block",
  position: "absolute",
  overflow: "hidden",
  clip: "rect(0 0 0 0)",
  height: 1,
  width: 1,
  margin: -1,
  padding: 0,
  border: 0,
};

const VisuallyHidden = ({ children }) => {
  return <span style={hiddenStyles}>{children}</span>;
};

export default VisuallyHidden;
