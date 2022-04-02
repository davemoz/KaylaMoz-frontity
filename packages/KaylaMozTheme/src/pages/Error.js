import React from "react";
import { connect } from "frontity";

const Error = ({ state }) => {
  const data = state.source.get(state.router.link);

  return (
    <>
      <h2>{data.errorStatus} Error</h2>
      <p>
        {data.errorStatusText}
      </p>
    </>
  );
};

export default connect(Error);
