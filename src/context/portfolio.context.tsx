'use client';
import type { Portfolio } from './types';
import React from 'react';

type PortfolioContext = { portfolio: Portfolio };

type Props = {
  children: React.ReactNode;
};

const PortfolioContext = React.createContext({} as PortfolioContext);

export function use_portfolio() {
  return React.useContext(PortfolioContext);
}

export function PortfolioContextProvider(props: Props) {
  return (
    <PortfolioContext.Provider
      value={{
        portfolio: {} as Portfolio,
      }}
    >
      {props.children}
    </PortfolioContext.Provider>
  );
}
