import styles from './ProfileCard.module.css'

interface Props {
  avatar: string;
  name: string;
  description: string;
}

export default function ProfileCard({ avatar, name, description }: Props) {
    return (
        <div className={styles.userCard}>
            <img src={avatar} alt="User avatar" style={{ width: "240px" }} />
            <h2>{name}</h2>
            <p>{description}</p>
        </div>
    )
}
