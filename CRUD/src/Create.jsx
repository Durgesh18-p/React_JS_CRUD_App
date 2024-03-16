import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addUSer } from "./UserReducer";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    console.log(name);
  }, [name]);

  useEffect(() => {
    console.log(email);
  }, [email]);

  const handleNameOnchange = (e) => {
    setName(e.target.value);
  };

  const handleEmailOnchange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      addUSer({
        id: user[user.length - 1].id + 1,
        name,
        email,
      })
    );
    setEmail("");
    setName("");
    console.log("Clicked");
    navigate("/");
  };

  return (
    <div className="d-flex w-100 vh-100 justify-content-center align-items-center">
      <div className="w-50 border bg-secondary text-white p-5">
        <h3 className="text-black">Add New User</h3>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Name :</label>
            <input
              type="text"
              name="name"
              className="form-control"
              placeholder="Enter name....."
              onChange={(e) => handleNameOnchange(e)}
            />
          </div>
          <div>
            <label htmlFor="email">Email :</label>
            <input
              type="email"
              name="email"
              className="form-control"
              placeholder="Enter E-mail....."
              onChange={(e) => handleEmailOnchange(e)}
            />
          </div>
          <br />
          <button type="submit" className="btn btn-info">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Create;
