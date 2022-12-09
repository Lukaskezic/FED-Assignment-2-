import { ChangeEvent, useState } from "react";
import type { ManagerRegisterDto } from "../Interface/ManagerInterface";
import { UserRegisteredManager } from "../APIs/PostManager";
import { Button, Label, TextInput } from "flowbite-react";
import React from "react";

const CreateAManager = () => 
{
  const { mutate: register } = UserRegisteredManager();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");

  const handleSubmit = () => {
    const manager: ManagerRegisterDto = {
      email: email,
      password: password,
      firstName: firstname,
      lastName: lastname,
    };
    register(manager);
  };
  return (
    <div className="manager">
      <div className="flex flex-col">
        <form className="flex flex-wrap">
          <div className="flex flex-col mx-2">
            <Label>First name</Label>
            <TextInput
              type="Text"
              required
              placeholder="Lukas"
              value={firstname}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setFirstname(e.target.value)
              }
            />
          </div>
          <div className="flex flex-col mx-2">
            <Label>Last name</Label>
            <TextInput
              type="Text"
              required
              placeholder="Batuhan"
              value={lastname}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setLastname(e.target.value)
              }
            />
          </div>
          <div className="flex flex-col mx-2">
            <Label>Email</Label>
            <TextInput
              type="Email"
              required
              placeholder="Batuhan@outlook.com"
              value={email}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setEmail(e.target.value)
              }
            />
          </div>
          <div className="flex flex-col mx-2">
            <Label>Password</Label>
            <TextInput
              type="Password"
              required
              placeholder="**********"
              value={password}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setPassword(e.target.value)
              }
            />
          </div>
          <div className="flex flex-col mx-2">
            <Label>Create a Manager</Label>
            <Button onClick={handleSubmit}>Submit</Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateAManager;