import { IToken } from "../../../../types";
import styles from "./styles.module.scss";

interface ITokenItemProps {
  token: IToken;
  onSelect: (token: IToken) => void;
}

const TokenItem = ({ token, onSelect }: ITokenItemProps): JSX.Element => {
  const handleTokenItemClick = () => {
    onSelect(token);
  };

  return (
    <li onClick={handleTokenItemClick}>
      <img alt="token" src={token.logoURI} />
      {token.symbol} · {token.name}
    </li>
  );
};

interface ITokensListProps {
  tokens: IToken[];
  onChange: (token: IToken) => void;
}

export default function TokensList({ tokens, onChange }: ITokensListProps) {
  const handleOnSelect = (token: IToken) => {
    onChange(token);
  };

  return (
    <ul className={styles.tokensList}>
      {tokens.map((token) => (
        <TokenItem key={token.symbol} token={token} onSelect={handleOnSelect} />
      ))}
    </ul>
  );
}
