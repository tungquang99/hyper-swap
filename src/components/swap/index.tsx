// tokens getting from the next link:
// https://raw.githubusercontent.com/pangolindex/tokenlists/main/defi.tokenlist.json
import InputToken from "./subcomponents/inputToken";
import ConnectWallet from "./subcomponents/connectWallet";
import Modal from "./subcomponents/modal";
import useModal from "./hooks/useModal";
import useTokenInfo from "./hooks/useTokenInfo";
import styles from "./styles.module.scss";

export default function Swap(): JSX.Element {
  const {
    modalOpened,
    setModalOpened,
    modalCurrencySide,
    setModalCurrencySide
  } = useModal();
  const { token, setTokenInfo } = useTokenInfo();

  const handleBaseCurrency = () => {
    setModalOpened();
    setModalCurrencySide("base");
  };

  const handleQuoteCurrency = () => {
    setModalOpened();
    setModalCurrencySide("quote");
  };

  return (
    <div className={styles.swapContainer}>
      <InputToken
        token={token.base}
        currencySide="base"
        setModalOpened={handleBaseCurrency}
        onChange={setTokenInfo}
      />
      <InputToken
        token={token.quote}
        currencySide="quote"
        setModalOpened={handleQuoteCurrency}
        onChange={setTokenInfo}
      />
      <ConnectWallet />

      <Modal
        opened={modalOpened}
        currencySide={modalCurrencySide}
        setModalOpened={handleBaseCurrency}
        onChange={setTokenInfo}
      />
    </div>
  );
}
