import styles from './styles/Professional.module.css'


interface JobProps {
    role: string
    description: string
    time: string
}

export default function Professional({ role, description, time }: JobProps) {
    return (
        <div className={styles.placeholder}>
            <p><strong>{role}</strong></p>
            <p className={styles.time}>{time}</p>
            <p className={styles.desc}>{description}</p>
        </div>
    )
}
