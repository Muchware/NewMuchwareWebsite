import styles from "../style"
import { discount, robot } from "../assets"
import GetStarted from "./GetStarted"

const Hero = () =>  (
    <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
        {/**SPACE FOR ANOUNCEMENT ETC**/}
        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100px] leading-[75px]">
            Die neue <br className="sm:block hidden"/> {" "}
            <span className="text-gradient">SCHULSOFTWARE</span> {" "}
          </h1>
        </div>
        <h1 className="font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100px] leading-[75px] w-full">
        für ihre Schule.
        </h1>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Die Schulsoftware ist ein Produkt mit umfangreichen Funktionalitäten und einer intuitiven Bedienbarkeit,
        welches in enger Zusammenarbeit mit Schulen in freier Trägerschaft, speziell auf deren Bedürfnisse hin,
        entwickelt worden ist.
        </p>
      </div>
      <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
        {/*
        <img src={robot} alt="billing" className="w-[100%] h-[100%] relative z-[5]"/>
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient"/>
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full bottom-40 white__gradient"/>
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient"/>
        */}
      </div> 
      <div className={`ss:hidden ${styles.flexCenter}`}> 
        <GetStarted />
      </div>
    </section>
)
export default Hero