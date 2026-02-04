import { useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();

  return (
    <div style={{ padding: "20px" }}>
      <h1>Something went wrong 🚨</h1>
      <h2>Hello Error!</h2>
      <p>
        {error?.statusText || error?.message || "Unknown error"}
      </p>
    </div>
  );
};

export default Error;