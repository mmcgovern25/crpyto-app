import { feedback } from "../constants";
import styles from "../style";
import FeedbackCard from "./FeedbackCard";

const Testimonials = () => (
  <section id="clients" className={`${styles.paddingY} ${styles.flexCenter} flex-col relative `}>
    <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full bottom-40" />

    <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
      <h2 className={styles.heading2}>
      <div className='absolute z-[3] -right-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient' style={{ background: 'linear-gradient(157.81deg, #FFFFFF -43.27%, #FFFFFF -21.24%, #FFFFFF 12.19%, #FFECEC 29.82%, #FFEBEB 51.94%, #FFD4D4 90.29%)' }} />
<div className='absolute z-[0] -right-1/2 bottom-0 w-[50%] h-[50%] rounded-full pink__gradient' style={{ background: 'linear-gradient(157.81deg, #FFFFFF -43.27%, #FFFFFF -21.24%, #FFFFFF 12.19%, #FFD4E4 29.82%, #FFD4E4 51.94%, #FFD4D4 90.29%)' }} />

        What People are <br className="sm:block hidden" /> saying about us
      </h2>
      <div className="w-full md:mt-0 mt-6">
        <p className={`${styles.paragraph} text-left max-w-[450px]`}>
          Helping increase financial literacy for the next generation like never before. Users from over 75+ countries can't all be wrong...
        </p>
      </div>
    </div>

    <div className="flex flex-wrap sm:justify-start justify-center w-full feedback-container relative z-[1]">
      {feedback.map((card) => <FeedbackCard key={card.id} {...card} />)}
    </div>
  </section>
);

export default Testimonials;
