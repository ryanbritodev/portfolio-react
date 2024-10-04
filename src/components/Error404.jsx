import { Link } from "react-router-dom";

function Error404() {
  return (
    <section className="flex items-center justify-center h-screen mt-10">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-sm text-center">
          <h1 className="mb-4 text-7xl tracking-tight text-fiap font-krona font-extrabold lg:text-9xl text-primary-600 dark:text-primary-500">
            Erro 404
          </h1>
          <p className="mb-4 text-3xl tracking-tight font-semibold font-montserrat text-white md:text-4xl">
            Você parece perdido!
          </p>
          <p className="mb-8 text-lg font-medium text-white font-montserrat">
            Essa página não existe, vamos te redirecionar de volta a Home.
          </p>
          <Link
            to="/"
            className="inline-flex text-white bg-fiap hover:bg-[#ac204c] transition duration-300 ease-in-out font-krona focus:outline-none font-medium rounded-lg text-sm px-5 py-3 text-center"
          >
            Voltar para Home
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Error404;
