import styles from '../app/page.module.css';

export default function MetricCard({ value, label, detail }) {
    return (
        <article className={styles.metricCard}>
            <strong>{value}</strong>
            <span>{label}</span>
            <small>{detail}</small>
        </article>
    );
}
