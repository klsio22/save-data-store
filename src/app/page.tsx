import Head from 'next/head';

export default function Home() {
  return (
    <main className="flex justify-center min-h-screen bg-gray-100 p-5">
      <Head>
        <title>Shopee</title>
      </Head>

      <div className="flex flex-col border-sky-100 p-5 rounded-lg shadow-md w-4/5 md:w-3/5 bg-white">
        <div className="flex items-center justify-between mb-4">
          <div>
            <img
              src="https://brandlogovector.com/wp-content/uploads/2021/05/Shopee-Logo-Small.png"
              alt="Shopee Logo"
              className="w-44 h-44"
            />
          </div>
          <div className="text-xl font-bold text-gray-500 cursor-pointer">
            X
          </div>
        </div>

        <div>
          <input
            className="w-full p-2 border border-gray-200 rounded-md mb-4"
            type="text"
            placeholder="Busque aqui"
          />
          <button className="w-full py-2 bg-blue-500 text-white rounded-md font-bold">
            Grab
          </button>
        </div>
      </div>
    </main>
  );
}
