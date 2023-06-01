import {
  API_URL,
  getData,
} from "@/utils/connection";
import {
  formatDateLongText,
  formatDateToYYYYMMDD,
  getTodayObject
} from "@/utils/date";
import Image from 'next/image';
import Link from "next/link";
import github from "public/github-mark-white.png";

const getDaysUntilText = (amountOfDays) => {
  if (amountOfDays <= 0) return <>Ya arrancó el <b>finde largo</b> 🥳</>;
  if (amountOfDays <= 7) return <>El <b>finde largo</b> arranca en <b>{amountOfDays}</b> días 🥵</>;
  return <>Faltan <b>{amountOfDays}</b> días para el <b>finde largo</b> 😴</>;
}

export default async function Home() {
  const data = await getData(`${API_URL}/api/days-until-next-long-weekend?from=${formatDateToYYYYMMDD(getTodayObject())}`);

  return (
    <main>
      <div className="container p-4 text-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        {
          data ?
            <>
              <h1 className="text-3xl md:text-5xl font-semibold">{getDaysUntilText(data.daysUntilLongWeekend)}</h1>
              <div className="m-3 md:m-6">
                <p className="text-2xl md:text-4xl">{formatDateLongText(data.date)}:</p>
                <p className="text-xl md:text-3xl mt-2 italic">{data.description}</p>
              </div>
              <Link className="text-xl md:text-3xl underline" href="/next-long-weekends">Ver próximos findes largos</Link>
            </>
            :
            <h1 className="text-3xl md:text-5xl">Algo <b>malió sal</b> 🧂</h1>
        }
      </div>
      <footer className="fixed bottom-0 w-full">
        <div className="flex justify-center m-4">
          <Image
            src={github}
            alt="GitHub icon"
            width={25}
            height={25}
          />
          <a className="pl-2 text-white underline" href="https://github.com/dagonzalez1757/finde-largo" target="_blank" rel="noopener noreferrer">
            Repositorio de GitHub
          </a>
        </div>
      </footer>
    </main>
  )
}