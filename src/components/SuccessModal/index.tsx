import { PropsWithChildren } from "react";
import Modal from "../Modal";
import { useRouter } from "next/router";
import Image from "next/image";
import win from "@/assets/win.png";

interface ModalProps {
  isOpen: boolean;
  user?: string;
}

export default function SuccessModal({
  isOpen,
  user,
}: PropsWithChildren<ModalProps>) {
  const router = useRouter();
  const handleReload = () => {
    router.reload();
  };

  return (
    <Modal isOpen={isOpen}>
      <div className="flex flex-col items-center p-8 max-sm:justify-center max-sm:h-full max-sm:text-center">
        <span className="font-semibold text-lg ">¡Felicitaciones, {user}!</span>
        <Image src={win} alt="win" width={100} height={100} className="my-4" />
        <span className="whitespace-pre-line text-center">
          {"Haz completado el juego.\n¿Quieres jugar nuevamente?"}
        </span>
        <button
          className="bg-orange-300 hover:bg-orange-200 transition-colors font-semibold py-4 rounded-md mt-6 w-full"
          type="button"
          onClick={handleReload}
        >
          Volver a jugar
        </button>
      </div>
    </Modal>
  );
}
