import { PropsWithChildren } from "react";

interface HeaderProps {
  errors: number;
  matches: number;
}

export default function Score({
  errors,
  matches,
}: PropsWithChildren<HeaderProps>) {
  return (
    <div className="flex flex-col w-full items-center">
      <div className="flex">
        <span className="mr-4">Aciertos: {matches}</span>
        <span>Errores: {errors}</span>
      </div>
    </div>
  );
}
