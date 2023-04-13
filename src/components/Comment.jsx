
import { Trash, ThumbsUp } from 'phosphor-react';
import styles from './Comment.module.css';
import finn from '../assets/finn.png';
import {Avatar} from './Avatar';
import { useState } from 'react';

export function Comment({content, onDeleteComment}) {
  const [likeCount, setLikeCount] = useState (0);

  function handleDeleteComment() {
    onDeleteComment(content)
}
  function handleLikeComment() {
    setLikeCount((state) => {
      return state + 1
      });
  }
  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} avatar={finn}/>
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Finn</strong>
              <time title="27 de Fevereiro às 4:10" dateTime='2023-02-27 06:16'>Cerca de 1hr atrás</time>
            </div>
            <button onClick={handleDeleteComment} title="Deletar comentário">
                <Trash size={24} />
            </button>

          </header>
            <p>{content}</p>
        </div>

        <footer>
          <button onClick={handleLikeComment}>
            <ThumbsUp />
            Aplaudir <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  )
}