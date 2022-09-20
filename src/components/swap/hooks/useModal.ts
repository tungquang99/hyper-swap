import { useState } from "react";
import { ICurrencySide } from "../types";

export default function useModal() {
  const [modalOpened, setModalOpened] = useState<boolean>(false);
  const [modalCurrencySide, setModalCurrencySide] = useState<ICurrencySide>(
    "base"
  );

  const handleModalOpened = () => {
    setModalOpened((prevState) => !prevState);
  };

  return {
    modalOpened,
    modalCurrencySide,
    setModalOpened: handleModalOpened,
    setModalCurrencySide
  };
}
