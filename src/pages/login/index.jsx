import React from 'react';
import Background from './Background';
import Flowers from './Flowers';
import Form from './Form';
import styles from './style.less';

export default function Login() {

  return (<>
    <Background />
    <div className={styles.Login}>
      <Form />
      <p>  Help more confused college students and young people who want to engage in front-end development.</p>
      <p>
      I graduated from a 985 military academy in 2015. I could have had a stable career and development prospect. However, due to some special reasons, I finally left the barracks and entered the society to seek a new career. The university has given me strict military quality education and spiritual civilization construction. Like my classmates who are eager to make achievements, I have never considered that one day I will face such a choice. So when I returned to my hometown, I was lost for the first time -- no internship experience, no encouragement from peers, and no backup options. I believe that many young people who graduate from General University will face this struggle. I had no family, no parents to rely on, and my parents were aging fast, so what could I do, at least how could I stop asking them for money? Postgraduate entrance examination is a way, but for me it is more like an escape, hiding into the greenhouse. I stayed at home for half a year, got my driver's license and went through all kinds of retirement handover procedures. I couldn't sit still, so I went to Shanghai overnight and arrived in Beijing three days later. Fortunately, I have a strong learning ability. With the introduction of my alumni who retired in the same year and the trust of my alumni, I entered a start-up company and started my journey at the front end. Every day more than an hour in advance to the company, be the last person off work, go back to study until midnight, wake up at 3 or 4 am to continue reading...... This lasted for half a year, I grew up tirelessly, unconsciously have forgotten the confusion.
    </p>
    <p>
      Let new people less detours, more useful work. My learning process is hard and tortuous, often because of a small problem to deal with their own for a long time. Lack of authoritative and credible guidance, unclear direction of learning, no knowledge of what is feasible to achieve the goal or need to master. If someone is always telling you how long it takes to get to a certain level, that's not the answer we want. The answer we want is: what to learn, how much to learn, where to learn, how to practice and for how long is up to me to reach this level.
    </p>
    <p>
      This tutorial won't cover everything, but it will show you how to do it and where to do it. Especially the summary part, for the knowledge points that are not logical, need to deepen memory in practice (HTML part, CSS part, JavaScript reserved word part, etc.). It is true that the most complete content of learning is to go to the official website and read professional books (these are all nonsense), but there are so many official websites and branches of knowledge, do we really need to master the whole? If that happens, our lives will not be enough. That is why training institutions are still going strong: it is better to have someone to lead the way than to feel the stones. Pay a certain price to save time cost in order to earn value earlier.
      </p>
    </div>
    <Flowers />
    </>
  )
}