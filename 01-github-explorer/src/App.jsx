import { Counter } from './components/Counter.jsx';
import { RepositoryList } from './components/RepositoryList';
import './styles/global.scss';

export function App() {
  return (
    <>
      <RepositoryList />
      <Counter />
    </>
  )
}