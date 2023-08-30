import { PropsWithChildren } from "react";
import Modal from "../Modal";
import { useForm } from "react-hook-form";

interface ModalProps {
  isOpen: boolean;
  onSubmit: (data: FormValues) => void;
}

type FormValues = {
  name: string;
};

export default function NameModal({
  isOpen,
  onSubmit,
}: PropsWithChildren<ModalProps>) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  return (
    <Modal isOpen={isOpen}>
      <form
        className="flex flex-col items-center p-8 max-sm:justify-center max-sm:h-full"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h2 className="text-xl font-bold mb-3">¡Bienvenido a Concentration!</h2>
        <span className="text-sm">Ingresa tu nombre para comenzar a jugar</span>
        <input
          placeholder="Nombre"
          className="border-black text-sm rounded-md border py-2 px-3 mt-6 w-full"
          {...register("name", { required: "Requerido" })}
        />
        {errors["name"] && (
          <span className="text-xs mt-[2px] ml-[2px] text-red-900 self-start">
            {errors["name"].message}
          </span>
        )}
        <button
          className="bg-orange-300 hover:bg-orange-200 transition-colors font-semibold py-4 rounded-md mt-6 w-full"
          type="submit"
        >
          Ingresar
        </button>
      </form>
    </Modal>
  );
}
