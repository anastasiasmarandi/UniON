import Head from "next/head";
import { At } from "tabler-icons-react";
import { Card, Input, Button, Anchor } from "@mantine/core";
import { useRouter } from "next/router";
import { useCallback, useState } from "react";
import { registerUser } from "../../utils/services";

const Register = () => {
  const router = useRouter();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [cnp, setCnp] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const register = useCallback(async () => {
    const res = await registerUser(firstName, lastName, cnp, email, password);
    console.log(res);
    // router.push("/dashboard");
  }, [firstName, lastName, cnp, email, password]);

  const goToLogin = () => {
    router.push("/");
  };

  return (
    <div className="login-page">
      <div className="bg-circle circle-1" />
      <div className="bg-circle circle-2" />

      <Head>
        <title>Login</title>
      </Head>

      <Card shadow="sm" p="lg" radius="xl" className="login-form">
        <div className="form-logo" />

        <Input
          placeholder="First Name"
          radius="xl"
          size="md"
          className="input"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <Input
          placeholder="Last Name"
          radius="xl"
          size="md"
          className="input"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
        <Input
          placeholder="CNP"
          radius="xl"
          size="md"
          className="input"
          value={cnp}
          onChange={(e) => setCnp(e.target.value)}
        />
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
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <Button radius="xl" className="submit-btn" onClick={() => register()}>
          Inregistrare
        </Button>

        <Anchor className="link" onClick={() => goToLogin()}>
          Am cont
        </Anchor>
      </Card>
    </div>
  );
};

export default Register;
