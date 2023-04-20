import styles from "../style"
import Buttons from "./Buttons"


const CTA = () => (
    <section className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}>
      <div className="flex-1 flex flex-col">
        <h2 className={styles.heading2}>
          HABEN FRAGEN ODER INTERESSE?
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Alles was Sie und ihre Schüler brauchen um erfolgreich zu sein.
        </p>
      </div>
      <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
        <Buttons />
      </div>
    </section>
)

export default CTA