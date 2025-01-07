'use client'
import {useRouter} from 'next/navigation'
import style from "./common.module.css";
import { IoMdDownload } from "react-icons/io";




export default function Home() {
  
  const router= useRouter();
  const handleClick =()=>{
    router.push('/my-projects')

  }
  return (
    <main className="flex  flex-col items-center justify-between ">
      
        <div className={style.division}>
          <div className="glass-effect">
            <h1 className="text-4xl py-5">I am <span className=" text-blue-700"><b>Sithu Htin</b></span></h1>
            <ul className={style.position}>
              <li className="text-xl">IT System Admin</li>
              <li className="text-xl">Website Developer</li>
              <li className="text-xl">Database Developer</li>
            </ul>
            <div>
              <button className={style.heroButton}>
                Download CV
                <IoMdDownload
                  style={{
                    display: "inline",
                    fontSize: "20px",
                    marginLeft: "8px",
                  }}
                />
              </button>
              <button className={style.heroButton} onClick={handleClick}>My Projects</button>
            </div>
          </div>
        </div>
        
      
    </main>
  );
}
