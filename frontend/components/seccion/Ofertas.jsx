import React from "react";
import styles from "../../styles/ofertas.module.scss";

export default function Ofertas() {
  return (
    <div className={styles.containOfertas}>
      <div className={styles.titleSeccion}>
        <h1>
          OUR <strong>SERVICES</strong>
        </h1>
      </div>

      <div className={styles.containCards}>
        <div className={styles.cardOfertas}>
          <div className={styles.infoOferta}>
            <h2>YOGA</h2>
            <p>
              Yoga is an ancient practice that originated in India and focuses
              on the union of body, mind, and spirit through a combination of
              physical postures, breathing techniques, and meditation. It offers
              numerous benefits, including improved flexibility, strength,
              posture, and mental clarity, while also helping to reduce stress
              and anxiety. With various styles such as Hatha, Vinyasa, Ashtanga,
              and Yin, yoga is adaptable to all fitness levels and ages. Whether
              practiced individually or in group settings like those available
              at Zhengzhou University’s gym, yoga promotes holistic well-being
              and a deeper sense of inner peace.
            </p>
          </div>
          <div className={styles.videoOfertas}>
            <video autoPlay muted loop>
              <source src="/videosGym/yoga.mp4" type="video/mp4" />
            </video>
          </div>
        </div>

        <div className={styles.cardOfertasAlternativa}>
          <div className={styles.infoOferta}>
            <h2>CARDIO</h2>
            <p>
              Cardio, short for cardiovascular exercise, refers to any physical
              activity that raises your heart rate and keeps it elevated for an
              extended period. It strengthens the heart and lungs, improves
              circulation, and helps the body use oxygen more efficiently.
              Common forms of cardio include running, cycling, swimming, jumping
              rope, and using machines like treadmills or ellipticals. Regular
              cardio workouts are essential for burning calories, boosting
              metabolism, improving endurance, and supporting overall heart
              health. At fitness centers like the Zhengzhou University gym,
              students can access various cardio equipment to maintain an active
              lifestyle and enhance their physical and mental well-being.
            </p>
          </div>
          <div className={styles.videoOfertas}>
            <video autoPlay muted loop>
              <source src="/videosGym/cardio.mp4" type="video/mp4" />
            </video>
          </div>
        </div>

        <div className={styles.cardOfertas}>
          <div className={styles.infoOferta}>
            <h2>MUSCULACION</h2>
            <p>
              Musculación, or strength training, involves exercises designed to
              build muscle mass, increase strength, and improve overall physical
              performance. This type of training typically includes
              resistance-based activities such as weightlifting, bodyweight
              exercises, and the use of machines or free weights. Regular
              musculación not only enhances muscle tone and endurance but also
              boosts metabolism, supports bone health, and contributes to better
              posture and injury prevention. Facilities like the Zhengzhou
              University gym provide students with access to a variety of
              strength training equipment, creating an ideal environment to
              develop a balanced and strong physique while promoting long-term
              health and fitness.
            </p>
          </div>
          <div className={styles.videoOfertas}>
            <video autoPlay muted loop>
              <source src="/videosGym/fuerza.mp4" type="video/mp4" />
            </video>
          </div>
        </div>

        <div className={styles.cardOfertasAlternativa}>
          <div className={styles.infoOferta}>
            <h2>BOXING</h2>
            <p>
              Boxing is a high-intensity combat sport and fitness activity that
              combines strength, speed, endurance, and strategy. It involves
              techniques such as punching, footwork, and defensive movements,
              making it an excellent full-body workout. Beyond its physical
              benefits—like improved cardiovascular health, muscle tone, and
              coordination—boxing also enhances mental focus, discipline, and
              stress relief. Training often includes shadowboxing, bag work, pad
              drills, and sparring, along with conditioning exercises like jump
              rope and core workouts. At gyms like the one at Zhengzhou
              University, boxing can be a powerful way for students to stay fit,
              build confidence, and channel energy in a focused, structured
              environment.
            </p>
          </div>
          <div className={styles.videoOfertas}>
            <video autoPlay muted loop>
              <source src="/videosGym/boxeo.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
    </div>
  );
}
