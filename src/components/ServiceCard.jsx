import styles from '../app/page.module.css';

export default function ServiceCard({ icon, title, description, list }) {
    return (
        <article className={styles.serviceCard}>
            <div className={styles.serviceIcon} aria-hidden="true">{icon}</div>
            <h3>{title}</h3>
            <p>{description}</p>
            <ul>
                {list.map((item) => (
                    <li key={item}>{item}</li>
                ))}
            </ul>
        </article>
    );
}
