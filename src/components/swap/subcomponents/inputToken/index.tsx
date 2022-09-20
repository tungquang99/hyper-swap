import { ICurrency, ICurrencySide } from "../../types";
import styles from "./styles.module.scss";

interface IInputToken {
  token: ICurrency;
  currencySide: ICurrencySide;
  setModalOpened: () => void;
  onChange: ({ currencySide: ICurrencySide, value: ICurrency }) => void;
}

enum CurrencySideTitle {
  base = "From",
  quote = "To"
}

export default function InputToken({
  token,
  currencySide,
  setModalOpened,
  onChange
}: IInputToken): JSX.Element {
  const tokenSelected = !!Object.keys(token.selected).length;

  const handleSelectTokenClick = () => {
    setModalOpened();
  };

  const handleMaxClick = () => {
    onChange({
      currencySide,
      value: {
        amount: token.balance
      }
    });
  };

  return (
    <div className={styles.inputToken}>
      <div className={styles.headerInfo}>
        <span>{CurrencySideTitle[currencySide]}</span>
        <span>Balance: {token.balance}</span>
      </div>
      <div className={styles.detailInfo}>
        <input
          type="number"
          placeholder="0.0"
          defaultValue={tokenSelected ? token.amount : ""}
        />
        {tokenSelected && token.balance > 0 && (
          <button className={styles.btnMaxBalance} onClick={handleMaxClick}>
            MAX
          </button>
        )}
        {!tokenSelected && (
          <button
            className={styles.btnOpenCurrency}
            onClick={handleSelectTokenClick}
          >
            Select a token
          </button>
        )}
        {tokenSelected && (
          <button
            className={styles.btnCurrency}
            onClick={handleSelectTokenClick}
          >
            <img alt="token" src={token.selected.logoURI} />
            {token.selected.symbol}
          </button>
        )}
      </div>
    </div>
  );
}
