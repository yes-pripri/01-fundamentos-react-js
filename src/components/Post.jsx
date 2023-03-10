import { format } from 'date.fns';
import { Avatar } from './Avatar';
import { Comment } from './Comment';
import styles from './Post.module.css';

export function Post({author, publishedAt}) {
    const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:'mm'h'")
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar avatar={author.avatarUrl} />
                    <div className={styles.authorInfo}>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>
                </div>
                <time title="27 de Fevereiro às 4:10" dateTime='2023-02-20 06:16'>
                    {publishedDateFormatted}
                </time>
            </header>
            <div className={styles.content}>
                <p>Fala galera!!</p>
                <p>Acabei de subir mais um projeto no meu portfólio, é um projeto que fiz na NLW Return, evento da Rocketseat.</p>
                <p><a href="">jane.designer/doctorcare</a></p>
                <p>
                    <a href="">#novoprojeto</a>{''}
                    <a href=""> #nlw </a>{''}
                    <a href="">#rocketseat</a>
                </p>
            </div>
            <form className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>
                <textarea
                    placeholder='Deixe seu comentário'
                />
            <footer>
                <button type="submit">Publicar</button>
            </footer>
            </form>
            <div className={styles.commentList}>
                <Comment />
                <Comment />
                <Comment />
            </div>
        </article>
    )
}