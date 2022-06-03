import Head from "next/head";
import { At } from "tabler-icons-react";
import { Card, Input, Button, Anchor } from "@mantine/core";
import { useRouter } from "next/router";
import { useCallback, useState } from "react";
import { loginUser } from "../utils/services";

const Home = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const login = useCallback(async () => {
    const res = await loginUser(email, pass);
    console.log(res);
    // if (res) router.push("/dashboard");
  }, [email, pass]);

  const goToRegister = () => {
    router.push("/register");
  };

  return (
    <div className="login-page">
      <div className="bg-circle circle-1" />
      <div className="bg-circle circle-2" />
      <div className="bg-color" />

      <Head>
        <title>Login</title>
      </Head>

      <Card shadow="sm" p="lg" radius="xl" className="login-form">
        <div className="form-logo" />

        <Input
          icon={<At />}
          placeholder="Your email"
          radius="xl"
          size="md"
          className="input"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          type="password"
          placeholder="Password"
          radius="xl"
          size="md"
          className="input"
          value={pass}
          onChange={(e) => setPass(e.target.value)}
        />

        <Button radius="xl" className="submit-btn" onClick={() => login()}>
          Logare
        </Button>

        <Anchor className="link" onClick={() => goToRegister()}>
          Utilizator nou
        </Anchor>
      </Card>
    </div>
  );
};

export default Home;
