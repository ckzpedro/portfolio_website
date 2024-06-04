import styles from './styles/Contact.module.css'

interface ContactProps {
    link: string
    name: string
}

export default function Contact({ name, link }: ContactProps) {

    return (
        <div>
            <button className={styles.button} type="button" onClick={() => window.open(link)}>{name}</button>
        </div>
    )
}