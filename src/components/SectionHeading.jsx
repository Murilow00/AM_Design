import styles from '../app/page.module.css';

export default function SectionHeading({ eyebrow, title, description }) {
    return (
        <header className={styles.sectionHeading}>
            <p className={styles.eyebrow}>{eyebrow}</p>
            <h2>{title}</h2>
            {description ? <p className={styles.sectionDescription}>{description}</p> : null}
        </header>
    );
}
