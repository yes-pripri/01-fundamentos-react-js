
import { Trash, ThumbsUp } from 'phosphor-react';
import styles from './Comment.module.css';
import jake from '../assets/jake.png';
import {Avatar} from './Avatar';

export function Comment() {
  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} avatar={jake}/>
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Jake</strong>
              <time title="27 de Fevereiro às 4:10" dateTime='2023-02-27 06:16'>Cerca de 1hr atrás</time>
            </div>
            <button title="Deletar comentário">
                <Trash size={24} />
            </button>

          </header>
            <p>Muito bom Devon, parabéns!! 👏👏</p>
        </div>

        <footer>
          <button>
            <ThumbsUp />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  )
}