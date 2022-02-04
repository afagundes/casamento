import styles from './location.module.css'

const Location = () => {
    return (
        <section className={styles.location}>
            <h2>Local</h2>

            <p><strong>Sítio São Jorge - Jardim Secreto</strong></p>
            <p>São Bernardo do Campo - SP</p>
            <p>Horário: 15h30</p>

            <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3652.051931780686!2d-46.5753932581561!3d-23.745527449894876!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce413d88145c17%3A0x5856713a1bc092ef!2zU8OtdGlvIFPDo28gSm9yZ2U!5e0!3m2!1spt-BR!2sbr!4v1643934369866!5m2!1spt-BR!2sbr" 
                loading="lazy">
            </iframe>
        </section>
    );
}

export default Location;
