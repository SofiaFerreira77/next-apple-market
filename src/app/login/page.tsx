"use client"

import { useState } from "react";
import { postJsonData } from "@/utils/mutations";
import useAuthStore from '@/store/authStore';

import Button from "@/components/shared/Button";
import Field from "@/components/shared/Field";
import Heading from "@/components/shared/Heading";
import Input from "@/components/shared/Input";

export default function Login() {
  const authStore = useAuthStore();

  const [username, setUsername] = useState("johnd");
  const [password, setPassword] = useState("m38rmF$");

  const handleLogin = async (event) => {
    event.preventDefault();

    const loggedIn = await postJsonData({
      endPoint: `https://fakestoreapi.com/auth/login`,
      data: { username, password }
    })

    const token = await loggedIn.token;
    authStore.login({ username, password }, token);
  };

  return (
    <main className="Login">
      <div className="container">
        <Heading title="Login form" />
        <br />
        <form onSubmit={handleLogin} className="flex flex-row gap-1">
          <Field label="Username">
            <Input type="text" placeholder="Username" value={username} required
              onChange={(event) => setUsername(event.target.value)} />
          </Field>

          <Field label="Password">
            <Input type="password" placeholder="Password" value={password} required
              onChange={(event) => setPassword(event.target.value)} />
          </Field>

          {/* <input list="browsers" name="browser" id="browser" />
          <datalist id="browsers">
            <option value="Chrome" />
            <option value="Firefox" />
            <option value="Safari" />
            <option value="Edge" />
            <option value="Opera" />
          </datalist> */}

          <Button type="submit">
            Login
          </Button>
        </form>
      </div>
    </main>
  )
}