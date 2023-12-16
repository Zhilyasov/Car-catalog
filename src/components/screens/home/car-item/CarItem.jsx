import styles from '../Home.module.css'

export function CarItem({car}) {
  return (
    <div key={car.id} className={styles.item}>
      <div
        className={styles.image}
        style={{
          backgroundImage: `url(${car.image})`
        }}
      />
      <div className={styles.info}>
        <h2>{car.name}</h2>
        <p>
          {new Intl.NumberFormat('ru-RU', {
            style: 'currency',
            currency: 'USD',
            currencyDisplay: 'narrowSymbol',
        }).format(car.price)}</p>
        <button className='btn'>Read more</button>
      </div>
    </div>
  )
}