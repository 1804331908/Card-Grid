import styles from './App.module.css';
// import { products } from './data/data';
import Header from './header/Header';
import Story from './story/Story';
import Story1 from './story/Story1';

function App() {
  return (
    <div>
      <Header />
      <div className={styles.container}>
      <Story />
          <Story1 />
      </div>
    </div>
  );
}

export default App;