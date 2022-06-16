import styles from './styles.module.css';

export const Botao = () => {
    return(
        <div className={styles.box}>
            <button className={styles.botao}>Lorem ipsum</button>
            <p className={styles.legenda}>Legenda</p>
        </div>
    );
}