import Image from "next/image";
import { Carousel } from "../components/Carousel";
import { ContactForm } from "../components/ContactForm";
import heroImage from "../assets/DSC00892.jpg";
import logoFiaca from "../assets/logo-fiaca.jpeg";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <header className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image
            src={heroImage}
            alt="Fiaca Band"
            fill
            className="object-cover opacity-50"
            priority
          />
        </div>
        <div className="relative z-10 text-center">
          <h1 className="text-6xl md:text-8xl font-bold mb-4 text-fiaca-yellow">FIACA</h1>
          <p className="text-xl md:text-2xl">Directo desde Rosario, Argentina</p>
        </div>
      </header>

      {/* Carousel Section */}
      <section className="py-20 bg-zinc-900">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-fiaca-yellow">Galería de Shows</h2>
          <Carousel />
        </div>
      </section>

      {/* Spotify Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-fiaca-yellow">Escucha nuestra música</h2>
          <div className="max-w-2xl mx-auto">
            <iframe
              src="https://open.spotify.com/embed/artist/4kkkwIuGb8NdxDHQnAxE00"
              width="100%"
              height="352"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </section>

      {/* YouTube Section */}
      <section className="py-20 bg-zinc-900">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-fiaca-yellow">Último Lanzamiento</h2>
          <div className="max-w-4xl mx-auto aspect-video">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/YA2DWkiNf4M"
              title="Último lanzamiento de Fiaca"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>

      {/* Biography Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-fiaca-yellow">Biografía</h2>
          <div className="max-w-3xl mx-auto text-lg leading-relaxed">
            <p className="mb-6">
              FIACA es un proyecto musical que se viene gestando desde el 3 de octubre de 2022, cuyo germen inicial empezó a crecer de a poco en un contexto de post-pandemia, con dos acústicas, en un departamento del centro rosarino.
            </p>
            <p className="mb-6">
              Tenemos un objetivo orientado por una muy fuerte influencia en la música pesada y rock de los 90s (de hecho, más concretamente rescatando una sólida referencia en el Nu Metal, el Funk Rock, el Grunge, entre otros). Es así que, hoy en día somos 4 locos oriundos de Rosario, con muchas ganas e ilusiones en poder materializar en sonido nuestras bases y pilares con las cuales nos hemos estado nutriendo, aprendiendo, y disfrutando de la música a lo largo de la mayor parte de nuestras vidas.
            </p>
            <p className="mb-6">
              FIACA es una propuesta que intenta ser contundente, sólida y original. Se basa mucho en la composición sonora conceptual y en la formación de material visual como parte de un todo.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-zinc-900">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-fiaca-yellow">Contacto</h2>
          <div className="max-w-2xl mx-auto">
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">FIACA</h3>
              <p className="text-gray-400">Directo desde Rosario, Argentina</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Seguinos en nuestras redes</h3>
              <div className="flex gap-4">
                <a target="_blank" href="https://www.instagram.com/fiaca.rosario" className="text-gray-400 hover:text-white">Instagram</a>
                <a target="_blank" href="https://www.youtube.com/@fiaca.rosario" className="text-gray-400 hover:text-white">Youtube</a>
                <a target="_blank" href="https://www.tiktok.com/@fiaca.rosario" className="text-gray-400 hover:text-white">TikTok</a>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Contacto</h3>
              <p className="text-gray-400">fiaca.redes@gmail.com</p>
            </div>
          </div>
          <div className="flex flex-col items-center mt-8 pt-8 border-t border-gray-800">
            <Image src={logoFiaca} alt="Logo Fiaca" className="w-32 mb-4" width={128} height={128} />
            <p className="text-center text-gray-400">&copy; {new Date().getFullYear()} Fiaca. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
