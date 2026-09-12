export default function PageBanner({ eyebrow, title, description }) {
  return (
    <section className="pageBanner">
      <div className="container pageBannerInner">
        <p className="eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
        {description ? <p>{description}</p> : null}
      </div>
    </section>
  );
}
