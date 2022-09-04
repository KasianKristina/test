import styles from './styles.module.scss';

type InputProps = {
    text: string
}

export const Input: React.FC<InputProps> = ({ text}) => {
    return (
        <>
            <p className={styles['Form__form-container_text']}>{text}</p>
            <input className={styles['Form__form-container_input']}></input>
        </>
    )
}
