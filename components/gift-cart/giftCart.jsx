import Link from 'next/link';
import Image from 'next/image';
import styles from './giftCart.module.css';

export default function GiftCart({ gift, qrCode }) {
    return (
        <section className={`${styles.containerGift} container_gray container_less_padding`}>
            <div className={styles.cart}>
                <h3>Comprar Presente</h3>

                <p>Muito obrigado por ter escolhido um presente para nós 😀</p>

                <article className={styles.cartDetails}>
                    <h4>Presente</h4>

                    <article className={styles.cartDetailsGift}>
                        <img src={gift.image} alt={gift.description} />
                        
                        <div>
                            {gift.description}<br />
                            
                            <div className={styles.price}>
                                <strong>Valor</strong>: R$ {gift.price},00
                            </div>
                        </div>
                    </article>

                    <article>
                        <h4>Pagamento</h4>

                        Escaneie o QR Code com seu app de pagamento ou use a seguinte chave PIX (celular):
                        
                        <div className={styles.pixKey}>(11) 95844-3397</div>

                        <div className={styles.qrCode}>
                            <Image src={qrCode} 
                                layout="fixed" 
                                width={200} 
                                height={200}
                            />
                        </div>
                    </article>

                    <article className={styles.paymentOption}>
                        <h4>Outra Forma de Pagamento</h4>
                        
                        Caso você prefira outra opção, também é possível fazer uma transferência para a seguinte conta: 
                        
                        <div className={styles.bankAccount}>
                            <span>Archimedes Fagundes Junior</span>
                            Nubank<br />
                            Ag 0001<br />
                            Conta 1196862-4<br />
                            CPF 346.568.078-26<br />
                        </div>
                    </article>

                    <Link href="/">
                        <a>
                            <button type="button">
                                Voltar
                            </button>
                        </a>
                    </Link>
                </article>
            </div>
        </section>
    );
}
