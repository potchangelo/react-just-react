import styles from './Notification.module.css';

function Notification(props) {
    return (
        <div className={styles.box}>
            <h3 className={styles.title}>{props.title}</h3>
            <p>{props.description}</p>
            <p><a>ปิดการแจ้งเตือน</a></p>
        </div>
    );
}

export default Notification;