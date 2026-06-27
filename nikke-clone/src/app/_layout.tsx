import { Stack } from "expo-router";
import { UIProvider } from "../context/UIContext";
import Header from "../../components/header"; 
import Footer from "../../components/footer";   
import MailOverlay from "../../components/mailOverlay";
import { useUI } from "../../src/context/UIContext";

function GlobalUI() {
  const { showMail, setShowMail } = useUI();

  return (
    <>
      <Header />

      <Stack screenOptions={{ headerShown: false }} />

      {showMail && <MailOverlay onClose={() => setShowMail(false)} />}
    </>
  );
}

export default function RootLayout() {
  return (
    <UIProvider>
      <GlobalUI />
    </UIProvider>
  );
}
