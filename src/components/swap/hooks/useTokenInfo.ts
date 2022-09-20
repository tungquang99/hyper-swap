import { useState } from "react";
import { IToken, ICurrency, ICurrencySide } from "../types";
import tokensList from "../tokensList.json";

interface ITokenState {
  base: ICurrency;
  quote: ICurrency;
}

// (default) initial state
const initialTokenState = {
  base: {
    amount: 0,
    balance: 0,
    selected: {}
  },
  quote: {
    amount: 0,
    balance: 0,
    selected: {}
  }
};

export default function useTokenInfo() {
  const [token, setToken] = useState<ITokenState>(initialTokenState);

  const tokenSelected = (currencySide: ICurrencySide) => {
    return !Object.keys(token[currencySide].selected).length;
  };

  const setTokenInfo = ({
    currencySide,
    value
  }: {
    currencySide: ICurrencySide;
    value: ICurrency;
  }) => {
    console.log(currencySide, value);

    setToken((prevState) => ({
      ...prevState,
      [currencySide]: {
        ...prevState[currencySide],
        ...value
      }
    }));
  };

  const setAmount = ({
    currencySide,
    value
  }: {
    currencySide: ICurrencySide;
    value: number;
  }) => {
    const newAmount = { amount: value };
    setToken((prevState) => ({
      ...prevState,
      [currencySide]: {
        ...prevState[currencySide],
        ...newAmount
      }
    }));
  };

  const setBalance = ({
    currencySide,
    value
  }: {
    currencySide: ICurrencySide;
    value: number;
  }) => {
    const newBalance = { balance: value };
    setToken((prevState) => ({
      ...prevState,
      [currencySide]: {
        ...prevState[currencySide],
        ...newBalance
      }
    }));
  };

  const setSelectedToken = ({
    currencySide,
    token
  }: {
    currencySide: ICurrencySide;
    token: IToken;
  }) => {
    const selectedToken = { selected: token };
    setToken((prevState) => ({
      ...prevState,
      [currencySide]: {
        ...prevState[currencySide],
        ...selectedToken
      }
    }));
  };

  return {
    token,
    tokensList,
    tokenSelected,
    setTokenInfo,
    setAmount,
    setBalance,
    setSelectedToken
  };
}
