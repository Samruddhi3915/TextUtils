import React from "react";

function AlertReact(props) {
  //to make first letter of props.alert.type(success) as Success
  const capitalize = (word) => {
    const lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
    // will make first letter captial and others all in lower case
  };

  /* //if props.alert is null ie not invoked then no need to display alert box therfore we use && ie.if true then only it will show   */

  return (
    <div style={{ height: "55px" }}>
      {props.alert && (
        <div
          className={`alert alert-${props.alert.type} alert-dismissible fade show`}
          role="alert"
        >
          <strong>{capitalize(props.alert.type)}</strong> : {props.alert.msg}
        </div>
      )}
    </div>
  );
}

export default AlertReact;
