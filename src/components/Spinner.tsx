import React from "react";
import { BsDisplay } from "react-icons/bs";
import { BounceLoader } from "react-spinners";

function Spinner({ loading }: { loading: true }) {
  const override = {
    display: "block",
    margin: "100px auto",
  };
  return (
    <div>
      <BounceLoader color="#4338ca" loading={loading} cssOverride={override} />
    </div>
  );
}

export default Spinner;
