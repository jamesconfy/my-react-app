import { Link } from "react-router-dom";

const NoPage = () => {
  return (
    <>
      <h1>404</h1>
      <Link to="/" className="link">
        Home
      </Link>
    </>
  );
};

export default NoPage;
