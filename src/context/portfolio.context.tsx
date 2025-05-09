'use client';
import type { Portfolio } from './types.tsx';
import { daniel_bello } from '@/constants';
import React from 'react';

type PortfolioContext = { portfolio: Portfolio };

type Props = {
  children: React.ReactNode;
};

const PortfolioContext = React.createContext({} as PortfolioContext);

export function usePortfolio() {
  return React.useContext(PortfolioContext);
}

export function PortfolioContextProvider(props: Props) {
  return (
    <PortfolioContext.Provider value={{ portfolio: daniel_bello }}>
      {props.children}
    </PortfolioContext.Provider>
  );
}
