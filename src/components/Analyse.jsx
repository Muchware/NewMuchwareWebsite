import styles, { layout } from "../style"
import { card } from "../assets"
import Buttons from "./Buttons"

const Analyse = () => (
    <section className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          Auswertungen <br className="sm:block hidden"/> in einfachen Schritten
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Erstellen von Excel-Listen auf Basis des Datenbestandes, u.a. Klassenlisten, Adresslisten für Serienbriefe, Auswertung statistischer Daten 
        </p>
        <Buttons styles="mt-10"/>
      </div>
      <div className={layout.sectionImg}>
        {/*<img src={card} alt="Your mom" className="w-[100%] h-[100%]"/>*/}
      </div>
    </section>
  )


export default CardDeal