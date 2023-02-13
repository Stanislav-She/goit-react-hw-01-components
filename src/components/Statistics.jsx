export const Statistics = data => {
  const { title, stats } = data;

  return (
    <>
      <section className="statistics">
        {title.length > 0 && <h2>{title}</h2>}

        <ul className="stat-list">
          {stats.map(stat => (
            <li key={stat.id} className="item">
              <span className="label">{stat.label}</span>
              <span className="percentage">{stat.percentage}%</span>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
};
