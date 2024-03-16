import { useSelector } from "react-redux";

const Home = () => {
  const user = useSelector((state) => state.user);
  console.log(user);

  return (
    <div className="container">
      <h2>CRUD app with JSONserver</h2>
      <button className="btn btn-success mty-3">create +</button>
      <table className="table">
        <thead>
          <tr>
            <td className="fw-bold">ID</td>
            <td className="fw-bold">Name</td>
            <td className="fw-bold">Email</td>
            <td className="fw-bold">Action</td>
          </tr>
        </thead>
        <tbody>
          {user.map((user, index) => (
            <tr key={index}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>
                <button className="btn btn-sm btn-primary">Edit</button>
              </td>
              <td>
                <button className="btn btn-sm btn-danger ms-2">Danger</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Home;
