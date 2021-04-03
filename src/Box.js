import styles from './Box.module.css';

function Box(props) {
    return (
        <div className={styles.box}>
            <h3 className={styles.title}>{props.title}</h3>
            {props.children}
        </div>
    );
}

export default Box;