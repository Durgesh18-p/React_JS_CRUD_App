import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deleteUser } from "./UserReducer";

const Home = () => {
  const users = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const handleDelete = (user) => {
    dispatch(deleteUser({ id: user.id }));
    console.log("delete clicked");
  };

  return (
    <div className="container">
      <h2>CRUD app in React JS and Redux Tool-kit</h2>
      <Link to="/create" className="btn btn-success mty-3">
        create +
      </Link>
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
          {users.map((user, index) => (
            <tr key={index}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>
                <Link
                  to={`/edit/${user.id}`}
                  className="btn btn-sm btn-primary"
                >
                  Edit
                </Link>
              </td>
              <td>
                <button
                  className="btn btn-sm btn-danger ms-2"
                  onClick={() => handleDelete(user)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Home;
