import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import "./App.css";

type Profile = {
  firstname: string;
  lastname: string;
  age: number;
};

function App() {
  const {
    register,
    reset,
    formState: { errors },
    handleSubmit,
  } = useForm<Profile>();

  const onSubmit: SubmitHandler<Profile> = (data: Profile) => {
    alert(JSON.stringify(`your information sent successfully. thanks!🙏`));
    reset();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      style={{ textAlign: "center", marginTop: "200px" }}>
      <div>
        <label htmlFor="firstname">First name</label>
        <br />
        <input
          {...register("firstname", { required: true })}
          type="text"
          id="firstname"
          name="firstname"
        />
        {errors.firstname && (
          <div style={{ color: "red" }} className="error">
            Enter your first name
          </div>
        )}
      </div>
      <div>
        <label htmlFor="lastname">Last name</label>
        <br />
        <input
          {...register("lastname", { required: true, maxLength: 20 })}
          type="text"
          id="lastname"
          name="lastname"
        />
        {errors.lastname && (
          <div style={{ color: "red" }} className="error">
            Enter your last name
          </div>
        )}
      </div>
      <div>
        <label htmlFor="age">Age</label>
        <br />
        <input
          {...register("age", { required: true, maxLength: 3 })}
          type="text"
          id="age"
          name="age"
        />
        {errors.age && (
          <div style={{ color: "red" }} className="error">
            Enter your age
          </div>
        )}
      </div>
      <button type="submit">Save</button>
    </form>
  );
}

export default App;
