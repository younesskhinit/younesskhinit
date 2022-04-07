import type { NextPage } from 'next'
import Head from 'next/head'

const Index: NextPage = () => {
  return (
    <>
      <Head>
        <title>Youness Khinit</title>
      </Head>
      <main className="grid w-screen h-screen grid-cols-1 overflow-y-hidden text-white bg-gradient-to-r from-sky-900 via-blue-900 to-indigo-900 md:grid-cols-2 md:overflow-x-hidden">
        <div className="flex flex-col items-center justify-center w-full h-full py-24">
          <div>
            <h1 className="text-4xl italic font-black text-blue-400 shadow-custom animate__animated animate__fadeInLeft outline-custom drop-shadow-xl md:text-5xl">
              Youness Khinit
            </h1>
            <p className="mt-4 ml-1 text-base font-medium animate__animated animate__fadeInLeft animate__delay-1s">
              Software Engineer & RCAC Cadet Flight Sergeant
            </p>
            <div className="flex flex-row items-center mt-6 ml-1 space-x-5 animate__animated animate__fadeInUp animate__delay-1s">
              <a
                className="cursor-pointer"
                rel="noopener noreferrer"
                target="_blank"
                href="https://github.com/younesskhinit"
              >
                <img src="/github.png" alt="GitHub" className="w-6 h-6" />
              </a>
              <a className="cursor-pointer" href="mailto:me@ykhinit.dev">
                <img src="/email.png" alt="Email" className="w-6 h-6" />
              </a>
              <a className="cursor-pointer" href="tel:4383894097">
                <img src="/phone.png" alt="Phone" className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-full h-full py-16">
          <p className="text-2xl font-semibold text-center transform skew-y-3 animate__animated animate__lightSpeedInRight animate__delay-1s shadow-custom drop-shadow-xl md:text-3xl">
            Some of my work
          </p>
          <div className="flex flex-col mx-16 mt-12 space-y-2 text-base font-medium text-left text-sky-200">
            <p className="animate__animated animate__fadeInLeft animate__delay-2s">
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://github.com/younesskhinit/discovrcrypto"
                className="text-xl italic font-black cursor-pointer shadow-custom-sm outline-custom-sm text-sky-400"
              >
                DiscovrCrypto
              </a>
              , a public board for anyone to post information about crypto
              projects and NFTs.
            </p>
            <p className="animate__animated animate__fadeInRight animate__delay-2s">
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://github.com/younesskhinit/tictactoe"
                className="text-xl italic font-black cursor-pointer shadow-custom-sm outline-custom-sm text-sky-400"
              >
                Tic Tac Toe
              </a>
              , recreated online to be played in real-time by two players using
              websockets.
            </p>
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://github.com/younesskhinit"
              className="text-xl italic font-black cursor-pointer shadow-custom-sm outline-custom-sm animate__animated animate__fadeInUp animate__delay-4s text-sky-400"
            >
              More on my GitHub
            </a>
          </div>
        </div>
        <style jsx>
          {`
            .outline-custom {
              -webkit-text-stroke-width: 1px;
              -webkit-text-stroke-color: white;
            }

            .outline-custom-sm {
              -webkit-text-stroke-width: 0.75px;
              -webkit-text-stroke-color: white;
            }

            .shadow-custom {
              text-shadow: 4px 4px 0px rgba(255, 255, 255, 0.3);
            }

            .shadow-custom-sm {
              text-shadow: 2px 2px 0px rgba(255, 255, 255, 0.3);
            }
          `}
        </style>
      </main>
    </>
  )
}

export default Index
