import { createContext, ReactNode, useEffect, useState } from 'react';
import { api } from './services/api';

interface Transaction {
  id: number;
  title: string;
  amount:number;
  type: string;
  category: string;
  createdAt: string;
}

type TransactionsInput = Omit<Transaction, 'id' | 'createdAt'>;

interface TransactionsProviderProps {
  children: ReactNode;
}

interface TransactionsContextData {
  transactions:Transaction[];
  createTransaction: (transaction:TransactionsInput) => void;
}

export const TransactionsContext = createContext<TransactionsContextData>(
  {} as TransactionsContextData
);


export function TransactionsProvider(props: TransactionsProviderProps) {
  const [ transactions, setTransactions] = useState<Transaction[]>([])

  useEffect(() => {
    api.get('/transactions')
      .then(response => setTransactions(response.data.transactions));
  }, []);


  function createTransaction(transaction:TransactionsInput) {
    api.post('/transactions', transaction);
  }


  return (
    <TransactionsContext.Provider value={{ transactions, createTransaction  }}>
      {props.children}
    </TransactionsContext.Provider>
  );

}