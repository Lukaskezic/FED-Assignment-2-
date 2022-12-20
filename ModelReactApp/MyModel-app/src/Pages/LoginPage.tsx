import { ChangeEvent, useState } from "react";
import { Button, Label, TextInput } from "flowbite-react";
import type { AccountLoginDto } from "../Interface/AccountInterface";
import { useLogin } from "../APIs/PostLogin";

const Login = () => 
{
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { mutate: login } = useLogin();

  const handleLoginSubmit = (e: any) => 
  {
    e.preventDefault();
    const userLogin: AccountLoginDto = 
    {
      email: email,
      password: password,
    };
    login(userLogin);
  };
  return (
    <div className="flex justify-center border-4 rounded border-black-500 py-4">
      <form className="flex flex-col items-center">
        <div className="flex flex-col items-center py-2">
          <Label className="mx-4 pb-2">Email</Label>
          <TextInput
            type="Email"
            required
            placeholder="batu12600@outlook.com"
            value={email}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setEmail(e.target.value)
            }
          />
        </div>

        <div className="flex flex-col items-center py-2">
          <Label className="mx-4 pb-2">Password</Label>
          <TextInput
            type="Password"
            required
            placeholder="***********"
            value={password}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setPassword(e.target.value)
            }
          />
        </div>
        <div className="flex justify-center py-2">
          <Button onClick={handleLoginSubmit}>Log in</Button>
        </div>
      </form>
    </div>
  );
};

export default Login;