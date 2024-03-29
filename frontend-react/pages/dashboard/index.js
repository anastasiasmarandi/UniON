import Head from "next/head";
import { useRouter } from "next/router";
import { useCallback, useState } from "react";
import { registerUser } from "../../utils/services";
import { AppShell, Navbar, Anchor, Text } from "@mantine/core";

const DashboardPage = () => {
  const router = useRouter();
  const goToLogin = () => {
    router.push("/");
  };
  const goToDatePersonale = () => {
    router.push("/datepersonale");
  };
  return (
    <div className="dashboard-page">
      <AppShell
        padding="md"
        navbar={
          <Navbar width={{ base: 300 }} height={600} p="xs" className="nav-bar">
            {
              <>
                <div className="logo-dash" />
                <Anchor className="link1">Dashboard</Anchor>
                <Anchor className="link2" onClick={() => goToDatePersonale()}>
                  Date Personale
                </Anchor>
                <Anchor className="link3">Contract de studii</Anchor>
                <Anchor className="link4">Orar</Anchor>
                <Anchor className="link5">Catalog</Anchor>
                <Anchor className="link6" onClick={() => goToLogin()}>
                  Logout
                </Anchor>
                <div className="line" />
              </>
            }
          </Navbar>
        }
        styles={(theme) => ({
          main: {
            backgroundColor:
              theme.colorScheme === "dark"
                ? theme.colors.dark[8]
                : theme.colors.gray[0],
          },
        })}
      >
        {
          <>
            <Text color="#9A6D38" className="welcome">
              BINE AI VENIT,
            </Text>
            <Text size="sm" className="student">
              Student!
            </Text>
            <div className="schema" />
          </>
        }
      </AppShell>
      <div>
        <Head>
          <title>Dashboard</title>
        </Head>
      </div>
    </div>
  );
};

export default DashboardPage;
