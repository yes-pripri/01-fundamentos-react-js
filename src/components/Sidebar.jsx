import { PencilLine } from 'phosphor-react';
import styles from './Sidebar.module.css';

import jujuba from '../assets/jujuba.png';

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img 
        className={styles.cover} 
        src='https://images.unsplash.com/photo-1581084324492-c8076f130f86?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50'
      />

      <div className={styles.profile}>
        <img 
          className={styles.avatar} src= {jujuba} 
        />
    
        <strong>Princesa Jujuba</strong>
        <span>Web developer</span>
      </div>

      <footer>
          <a href="#">
            <PencilLine size={20} />
            Editar seu perfil 
          </a>
      </footer>
    </aside>
  );
}