import TokensList from "./subcomponents/TokensList";
import useTokenInfo from "../../hooks/useTokenInfo";
import { IToken, ICurrencySide } from "../../types";
import { randomNumber } from "../../../../utils";
import styles from "./styles.module.scss";

interface IProps {
  opened: boolean;
  currencySide: ICurrencySide;
  setModalOpened: () => void;
  onChange: ({ currencySide: ICurrencySide, value: ICurrency }) => void;
}

export default function Modal({
  opened,
  currencySide,
  setModalOpened,
  onChange
}: IProps) {
  const { tokensList } = useTokenInfo();

  const handleOnChange = (token: IToken) => {
    // TODO: get balance from wallet
    onChange({
      currencySide,
      value: {
        balance: randomNumber(),
        amount: 0,
        selected: token
      }
    });
    setModalOpened();
  };

  if (!opened) return null;
  return (
    <div className={styles.modalContainer}>
      <h4>Select a token</h4>
      <input type="text" placeholder="Search name or paste address" />
      <hr />
      <TokensList tokens={tokensList.tokens} onChange={handleOnChange} />
      <hr />
      <button className={styles.btnManageToken}>Manage Token List</button>
    </div>
  );
}
