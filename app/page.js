import style from "./common.module.css";

export default function Home() {
  return (
    <main className="flex  flex-col items-center justify-between ">
      <div className={style.heroSection}>
        <div className={style.division}>
          <div className="glass-effect">
            <h1 className="text-4xl py-5 text-white">Sithu Htin</h1>
            <ul className={style.position}>
              <li className="text-xl">IT System Admin</li>
              <li className="text-xl">Website Developer</li>
              <li className="text-xl">Database Developer</li>
            </ul>
            <div>
              <button className={style.heroButton}>Download CV</button>
              <button className={style.heroButton}>My Projects</button>
            </div>
          </div>
        </div>
        <div className={style.division}>
          <div className={style.imageDiv}>
            <img src="https://bmafiles.s3.eu-north-1.amazonaws.com/IMG_3769.png" />
          </div>
        </div>
      </div>
    </main>
  );
}
