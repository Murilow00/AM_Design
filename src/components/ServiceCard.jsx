import styles from "../app/page.module.css";

export default function ServiceCard({ icon: Icon, title, description, list }) {
  return (
    <article className={styles.serviceCard}>
      <div className={styles.serviceIcon} aria-hidden="true">
        <Icon size={24} strokeWidth={1.75} />
      </div>
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
