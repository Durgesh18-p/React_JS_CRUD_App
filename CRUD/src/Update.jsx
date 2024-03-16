import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { upateUser } from "./UserReducer";
import { useNavigate } from "react-router-dom";

const Update = () => {
  const { id } = useParams();
  const user = useSelector((state) => state.user);
  const existingUser = user.filter((f) => f.id == id);
  const { name, email } = existingUser[0];
  const [userName, setName] = useState(name);
  const [userEmail, setEmail] = useState(email);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleUpdate = (e) => {
    e.preventDefault();
    dispatch(
      upateUser({
        id: id,
        name: userName,
        email: userEmail,
      })
    );
    navigate("/");
  };

  return (
    <div className="d-flex w-100 vh-100 justify-content-center align-items-center">
      <div className="w-50 border bg-secondary text-white p-5">
        <h3 className="text-black">Update User</h3>
        <form onSubmit={handleUpdate}>
          <div>
            <label htmlFor="name">Name :</label>
            <input
              type="text"
              name="name"
              className="form-control"
              placeholder="Enter name....."
              value={userName}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="email">Email :</label>
            <input
              type="email"
              name="email"
              className="form-control"
              placeholder="Enter E-mail....."
              value={userEmail}
              onChange={(e) => setEmail(e.target.mail)}
            />
          </div>
          <br />
          <button type="submit" className="btn btn-info">
            Update
          </button>
        </form>
      </div>
    </div>
  );
};

export default Update;
