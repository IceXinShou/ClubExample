import styles from './Club.module.scss';

function Club() {
    // js
    const name = "World"

    return (
        // html
        <div class={styles.body}>

            <h1>Hello, {name}!</h1>

        </div>
    );
}

export default Club;
