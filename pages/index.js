import Head from "next/head";
import { FiAlertOctagon } from "react-icons/fi";

const questionsParts = [
  {
    part: "А.I.",
    name: "Прашања од областа на уставниот поредок на Република Македонија",
    law: "Устав на Република Македонија",
    numOfQuestion: 120,
    testLink: "https://forms.gle/WzgfcGGKCZeczZKV9",
  },
  {
    part: "А.II.",
    name: "Прашања од системот на локалната самоуправа на Република Македонија",
    law: "Закон за локална самоуправа, Закон за Град Скопје, Закон за меѓуопштинска соработка, Закон за рамномерен регионален развој",
    numOfQuestion: 119,
    testLink: "https://forms.gle/qd97iL9WaJAnsvsk8",
  },
  {
    part: "А.III.1",
    name: "Прашања од системот на управното право, управната постапка и управните спорови",
    law: "Закон за општата управна постапка",
    numOfQuestion: 64,
    testLink: "https://forms.gle/Z5Ps3tFKoscZ8CcA8",
  },
  {
    part: "А.III.2",
    name: "Прашања од системот на управното право, управната постапка и управните спорови",
    law: "Закон за управни спорови",
    numOfQuestion: 45,
    testLink: "https://forms.gle/6VG1kcEM4fa9EyYS9",
  },
  {
    part: "А.IV.",
    name: "Прашања во врска со положбата и други општи прашања за вработените во јавниот сектор",
    law: "Закон за вработените во јавниот сектор",
    numOfQuestion: 72,
    testLink: "https://forms.gle/6GwCHb6eoQomHMnV7",
  },
  {
    part: "А.V.",
    name: "Прашања во врска со правата од работен однос на административните службеници",
    law: "Закон за административни службеници",
    numOfQuestion: 133,
    testLink: "https://forms.gle/5jqLMKm5qQ8PXLA17",
  },
  {
    part: "А.VI.",
    name: "Прашања од Кодексот за административните службеници",
    law: "Кодекс за административните службеници",
    numOfQuestion: 34,
    testLink: "https://forms.gle/x5Nqg8GqyHtvwDTA9",
  },
];
const questionsLanguageParts = [
  {
    part: "3.",
    name: "ПРАШАЊА ОД АНГЛИСКИ ЈАЗИК - (ВИСОКО НИВО)",
    type: "English for Category B of administration servants (B1)",
    numOfQuestion: 200,
    testLink: "#",
  },
];

export default function Home() {
  return (
    <div>
      <Head>
        <title>
          Административни Службеници | Прашања - Одговори | Симулативни Тестови
        </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header class="bg-indigo-200 shadow">
        <section class="text-gray-600 body-font">
          <div class="container px-5 py-12 mx-auto">
            <div class="text-center">
              <h1 class="sm:text-4xl text-2xl  text-gray-900 mb-4">
                ПРАШАЊА ОД СТРУЧНИОТ ДЕЛ ОД ИСПИТОТ ЗА <br />
                <span className="font-bold ">АДМИНИСТРАТИВНИ СЛУЖБЕНИЦИ</span>
              </h1>
              <p class="text-lg leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500s">
                Прашањава се превземани од офицјалната веб страната на <br />{" "}
                Агенција за Администрација (од овој
                <a
                  class=" text-indigo-500 hover:text-gray-800"
                  href="https://aa.mk/prasanja-od-strucniot-del-od-ispitot-za-administrativni-sluzbenici.nspx"
                >
                  {" "}
                  линк
                </a>
                )
              </p>
              <div class="text-white px-6 inline-block py-4 border-0 rounded mt-6 bg-gray-400 relative mb-4 ">
                <span class="text-xl inline-block mr-5 align-middle">
                  <FiAlertOctagon className="w-6 h-6 " />
                </span>
                <span class="inline-block align-middle mr-8">
                  Прашањата се одговорени - <b>Јуни 2021 година!</b>
                </span>
              </div>
            </div>
          </div>
        </section>
      </header>

      <main>
        {/* Header 1st section  */}
        <section class="text-gray-600">
          <div class="container px-5 py-10 mx-auto">
            <div class="flex flex-col text-center w-full">
              <h1 class="sm:text-3xl text-2xl  title-font mb-4 text-gray-900">
                1. ЛИСТА НА ПРАШАЊА ОД{" "}
                <span class="font-bold">СТРУЧНИОТ ДЕЛ</span> ОД ИСПИТОТ
                <br />
                ЗА <span class="font-bold">АДМИНИСТРАТИВНИ СЛУЖБЕНИЦИ </span>
              </h1>
              <p class="lg:w-2/3 mx-auto leading-relaxed text-base">
                За овој дел прашањава се поделени согласно законот за кој се
                поставени и за секој дел поединечно се одговорени и е направен
                <span class="font-bold"> симулативен тест</span>. <br />
                Тестот може да се проба колку пати да сакате, крајот на тестот
                директно Ви се покажуваат добиените поени. <br />
                Тестот може да се отвори од различни уреди (како компјутери,
                таблети и телефони).
              </p>
            </div>
          </div>
        </section>
        {/* Parts 1st section */}
        <section class="text-gray-600 overflow-hidden">
          <div class="container px-5 mx-auto">
            <div class="flex flex-wrap -m-12">
              {questionsParts.map((questions, index) => (
                <div
                  key={index}
                  class="p-12 md:w-1/2 lg:w-1/4 flex flex-col items-start"
                >
                  <span class="inline-block py-1 px-2 rounded bg-indigo-100 text-indigo-900 text-xs font-serif tracking-widest">
                    {questions.part}
                  </span>
                  <h2 class="text-lg sm:text-xl text-gray-900 font-semibold title-font mt-4 mb-4">
                    {questions.name}
                  </h2>
                  <p class="leading-relaxed mb-8">
                    {questions.law} <br />
                    <span class="text-indigo-500 font-bold">
                      {questions.numOfQuestion}
                    </span>{" "}
                    прашања
                  </p>
                  <div class="flex items-center flex-wrap pb-4 mb-4 border-b-2 border-indigo-100 mt-auto w-full">
                    <a
                      class="py-4 px-6 inline-flex items-center font-bold justify-center rounded-md border border-indigo-500 text-indigo-500 hover:text-white hover:bg-indigo-500 transition duration-700 ease-in-out"
                      href={questions.testLink}
                      target="_blank"
                    >
                      Тестирај се
                      <svg
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        class="w-4 h-4 ml-2"
                        viewBox="0 0 24 24"
                      >
                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                      </svg>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Header 2nd section  */}
        <section class="border-t-2 border-indigo-200">
          <div class="container px-5 py-10 mx-auto">
            <div class="flex flex-col text-center w-full">
              <h1 class="sm:text-3xl text-2xl mb-4 text-gray-900">
                2. ДЕЛ ЗА ПРОВЕРКА НА ЗНАЕЊЕ НА{" "}
                <span className="font-bold "> ЕДЕН </span> ОД <br />
                <span class="font-bold">
                  ТРИТЕ НАЈЧЕСТО КОРИСТЕНИ ЈАЗИЦИ
                </span>{" "}
                ВО ЕВРОПСКАТА УНИЈА <br />
                <span class="font-bold">(АНГЛИСКИ)</span>
              </h1>
            </div>
          </div>
        </section>

        {/* Parts 1st section  */}
        <section class="text-gray-600 overflow-hidden">
          <div class="container px-5 mx-auto">
            <div class="flex flex-wrap -m-12">
              {questionsLanguageParts.map((languages, index) => (
                <div
                  key={index}
                  class="p-12 md:w-1/2 lg:w-1/3 flex flex-col items-start"
                >
                  <span class="inline-block py-1 px-2 rounded bg-indigo-100 text-indigo-900 text-xs font-serif tracking-widest">
                    {languages.part}
                  </span>
                  <h2 class="text-lg sm:text-xl text-gray-900 font-semibold title-font mt-4 mb-4">
                    {languages.name}
                  </h2>
                  <p class="leading-relaxed mb-8">
                    {languages.type} <br />
                    <span class="text-indigo-500 font-bold">
                      {languages.numOfQuestion}
                    </span>{" "}
                    прашања
                  </p>
                  <div class="flex items-center flex-wrap pb-4 mb-4 border-b-2 border-indigo-100 mt-auto w-full">
                    <a
                      class="py-4 px-6 inline-flex items-center font-bold justify-center rounded-md border border-indigo-500 text-indigo-500 hover:text-white hover:bg-indigo-500 transition duration-700 ease-in-out"
                      href={languages.testLink}
                      target="_blank"
                    >
                      Тестирај се
                      <svg
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        class="w-4 h-4 ml-2"
                        viewBox="0 0 24 24"
                      >
                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                      </svg>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
