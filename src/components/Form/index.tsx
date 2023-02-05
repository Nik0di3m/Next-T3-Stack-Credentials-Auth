import React, { useState } from "react";
import { api } from "../../utils/api";

type TForm = {
  username: string;
  password: string;
};

const Form: React.FC = () => {
  const [userName, setUserName] = useState<string>("");
  const [userPassword, setPassword] = useState<string>("");
  const hello2 = api.example.hello2.useMutation();
  const signIn = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log(e);
    if (!userName || !userPassword) return;
    const result = await hello2.mutateAsync({
      username: userName,
      password: userPassword,
    });
    console.log(result);
  };

  return (
    <form className="h-52" onSubmit={(e) => signIn(e)}>
      <input
        name="username"
        className="rounded-md border border-neutral-500"
        type="text"
        onChange={(e) => setUserName(e.target.value)}
      />
      <input
        name="password"
        className="rounded-md border border-neutral-500"
        type="text"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit"> SignIn</button>
    </form>
  );
};

export default Form;
