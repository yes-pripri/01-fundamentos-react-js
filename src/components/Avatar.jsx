import styles from './Avatar.module.css'

export function Avatar({ hasBorder = true, avatar }) {
  return (
    <img 
      src={avatar} 
      className={hasBorder ? styles.avatarWithBorder : styles.avatar} 
    />
  );
}
