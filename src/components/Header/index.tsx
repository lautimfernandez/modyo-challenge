import { PropsWithChildren } from "react";

interface HeaderProps {
  user: string;
  handleResetUser: () => void;
}

export default function Header({
  user,
  handleResetUser,
}: PropsWithChildren<HeaderProps>) {
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-4xl mb-3 font-semibold">Concentration</h1>
      <span>{user}</span>
      <button
        className="bg-orange-300 hover:bg-orange-200 transition-colors text-sm font-semibold px-2 py-1 mt-2 rounded-md "
        type="button"
        onClick={handleResetUser}
      >
        Cambiar usuario
      </button>
    </div>
  );
}
