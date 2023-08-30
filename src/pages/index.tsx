import { useState } from "react";
import dynamic from "next/dynamic";
import { Inter } from "next/font/google";
import { useRouter } from "next/router";
import useLocalStorage from "@/hooks/useLocalStorage";
import Board from "@/components/Board";
const NameModal = dynamic(() => import("@/components/NameModal"), {
  ssr: false,
});
const SuccessModal = dynamic(() => import("@/components/SuccessModal"), {
  ssr: false,
});
const Header = dynamic(() => import("@/components/Header"), {
  ssr: false,
});

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const router = useRouter();

  const [user, setUser] = useLocalStorage("user", "");
  const [isNameModalOpen, setIsNameModalOpen] = useState(user ? false : true);
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);

  type FormValues = {
    name: string;
  };

  const onSubmit = (data: FormValues) => {
    setUser(data.name);
    setIsNameModalOpen(false);
  };

  const handleToggleSuccesModal = () => {
    setIsSuccessModalOpen(true);
  };

  const handleResetUser = () => {
    router.reload();
    setUser("");
  };

  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-center p-10 ${inter.className}`}
    >
      <Header user={user} handleResetUser={handleResetUser} />
      <Board onSuccess={handleToggleSuccesModal} />
      <NameModal onSubmit={onSubmit} isOpen={isNameModalOpen} />
      <SuccessModal user={user} isOpen={isSuccessModalOpen} />
    </main>
  );
}
