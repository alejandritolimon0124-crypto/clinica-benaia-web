export default function App() {
  const whatsappUrl =
    "https://wa.me/528444193111?text=Hola%2C%20necesito%20informaci%C3%B3n%20sobre%20Cl%C3%ADnica%20Benaia.%20Busco%20un%20lugar%20donde%20me%20sienta%20acompa%C3%B1ado%2C%20orientado%20y%20en%20buenas%20manos.%20Me%20gustar%C3%ADa%20recibir%20informaci%C3%B3n%20para%20dar%20el%20siguiente%20paso.%20Gracias.";
  const mapsUrl =
    "https://www.google.com/maps/dir/?api=1&destination=Cl%C3%ADnica+Benaia+Saltillo";
  const wazeUrl =
    "https://waze.com/ul?q=Cl%C3%ADnica%20Benaia%20Saltillo&navigate=yes";

  return (
    <div className="min-h-screen bg-slate-50 pb-20 text-slate-900 sm:pb-0">
      {/* HEADER */}
      <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <div className="flex min-w-0 items-center gap-3">
            <img
              src="/images/logo.jpeg"
              alt="Clínica Benaia"
              className="h-12 rounded-full object-cover"
            />
            <div className="min-w-0">
              <p className="truncate font-semibold">Clínica Benaia</p>
              <p className="truncate text-sm text-slate-500">
                Atención quirúrgica con calidez y confianza
              </p>
            </div>
          </div>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="hidden rounded-full bg-teal-600 px-5 py-3 text-white shadow-lg transition hover:bg-teal-500 sm:inline-flex"
          >
            WhatsApp
          </a>
        </div>
      </header>

      {/* LOGO HERO PREMIUM */}
      <section className="bg-gradient-to-b from-slate-950 to-slate-900 py-16 text-center">
        <img
          src="/images/logo.jpeg"
          alt="Clínica Benaia"
          className="mx-auto w-40 rounded-full shadow-2xl sm:w-56 md:w-64 lg:w-72"
        />
        <p className="mt-4 text-sm tracking-wide text-slate-300">
          Salud al alcance de todos
        </p>
      </section>

      {/* HERO GUERRERO */}
      <section className="relative min-h-[88vh] overflow-hidden">
        <img
          src="/images/guerrero-benaia.png"
          alt="Inspiración Clínica Benaia"
          className="absolute inset-0 h-full w-full object-cover brightness-50 contrast-90 saturate-75"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/98 via-slate-950/92 to-slate-950/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-white/5" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_28%,rgba(255,220,140,0.24),transparent_20%),radial-gradient(circle_at_78%_20%,rgba(255,255,255,0.10),transparent_16%)] opacity-90" />

        <div className="relative z-10 mx-auto flex min-h-[88vh] max-w-7xl items-center px-6 py-16 lg:px-8 lg:py-24">
          <div className="max-w-2xl">
            <span className="inline-flex rounded-full border border-emerald-200/25 bg-slate-950/55 px-4 py-2 text-sm font-medium text-emerald-50 [text-shadow:1.5px_1.5px_0px_rgba(0,0,0,0.95),-1.5px_-1.5px_0px_rgba(0,0,0,0.95)] backdrop-blur-md">
              Atención humana con calidez y esperanza
            </span>

            <h1 className="mt-6 text-3xl font-semibold leading-tight text-white drop-shadow-2xl sm:text-4xl lg:text-5xl">
              Te acompañamos,<span className="block">en el camino</span><span className="block">de tu recuperación</span>
            </h1>

            <p className="mt-4 max-w-xl text-base leading-7 text-slate-100 drop-shadow-lg">
              Inspirados en la fortaleza de Benaía —“El Señor ha construido”— te
              acompañamos en cada paso para recuperar tu bienestar, con una atención
              cercana, clara y humana cuando más lo necesitas.
            </p>

            <p className="mt-5 text-base font-medium text-amber-300 drop-shadow-lg sm:text-lg">
              Aquí tu proceso es atendido con cuidado y responsabilidad.
            </p>

            <div className="mt-8 flex flex-col gap-4">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex w-fit min-w-[220px] items-center justify-center rounded-full bg-emerald-700 px-5 py-3 font-semibold text-white shadow-xl shadow-emerald-950/25 transition hover:bg-emerald-600 mx-auto sm:mx-0"
              >
                Solicitar información por WhatsApp
              </a>

              <a
                href={mapsUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex w-fit min-w-[220px] items-center justify-center rounded-full border border-white/25 bg-white/10 px-5 py-3 font-semibold text-white backdrop-blur-sm transition hover:bg-white/15 mx-auto sm:mx-0"
              >
                Cómo llegar
              </a>
            </div>

            <div className="mt-5 flex flex-col gap-2 text-sm text-slate-100 drop-shadow-lg">
              <div>Respuesta cercana por WhatsApp</div>
              <div>Ubicación en Saltillo</div>
              <div>Acompañamiento desde el primer contacto</div>
            </div>

            <div className="mt-8 grid gap-3 text-sm text-white sm:grid-cols-3">
              <div className="rounded-2xl border border-white/15 bg-slate-950/55 px-4 py-3 backdrop-blur-md">
                <span className="[text-shadow:2px_2px_0px_rgba(0,0,0,0.95),-2px_-2px_0px_rgba(0,0,0,0.95)]">✔ Atención personalizada</span>
              </div>
              <div className="rounded-2xl border border-white/15 bg-slate-950/55 px-4 py-3 backdrop-blur-md">
                <span className="[text-shadow:2px_2px_0px_rgba(0,0,0,0.95),-2px_-2px_0px_rgba(0,0,0,0.95)]">✔ Atención integral</span>
              </div>
              <div className="rounded-2xl border border-white/15 bg-slate-950/55 px-4 py-3 backdrop-blur-md">
                <span className="[text-shadow:2px_2px_0px_rgba(0,0,0,0.95),-2px_-2px_0px_rgba(0,0,0,0.95)]">✔ Acompañamiento humano</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* POR QUE ELEGIR */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <h2 className="text-3xl font-semibold">¿Por qué elegir Clínica Benaia?</h2>
          <p className="mx-auto mt-4 max-w-2xl text-slate-600">
            Porque entendemos que cada paciente necesita más que un espacio médico:
            necesita confianza, claridad y acompañamiento en todo momento.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              "Atención humana y cercana",
              "Instalaciones seguras y ordenadas",
              "Acompañamiento durante todo el proceso",
            ].map((item) => (
              <div key={item} className="rounded-2xl bg-emerald-100 border border-emerald-200 p-6">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INSTALACIONES */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <h2 className="mb-10 text-3xl font-semibold">
          Instalaciones pensadas para hacerte sentir en buenas manos
        </h2>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[
            { nombre: "Benaia", img: "fachada.jpeg", text: "Confianza desde el primer momento." },
            {
              nombre: "Recepción",
              img: "recepcion.jpeg",
              text: "Atención clara y ordenada desde tu llegada.",
            },
            {
              nombre: "Quirófano",
              img: "quirofano.jpeg",
              text: "Seguridad y respaldo en cada procedimiento.",
            },
            {
              nombre: "Recuperación",
              img: "recuperacion.jpeg",
              text: "Seguimiento cercano después de tu cirugía.",
            },
            { nombre: "Habitaciones", img: "habitaciones.jpeg", text: "Comodidad para ti y tu familia." },
            { nombre: "Rayos X", img: "rayosx.jpeg", text: "Apoyo diagnóstico oportuno." },
          ].map((item) => (
            <div key={item.nombre} className="overflow-hidden rounded-2xl bg-white shadow">
              <img
                src={`/images/${item.img}`}
                alt={item.nombre}
                className="h-48 w-full object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold">{item.nombre}</h3>
                <p className="mt-2 text-sm text-slate-600">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ACOMPAÑAMIENTO */}
      <section className="bg-white py-20">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-semibold">Te acompañamos en cada etapa</h2>
            <p className="mt-4 text-slate-600">
              Desde el primer contacto hasta tu recuperación, buscamos que te
              sientas seguro, informado y acompañado en todo momento.
            </p>
          </div>

          <img
            src="/images/compania.jpeg"
            alt="Acompañamiento en Clínica Benaia"
            className="rounded-3xl shadow"
          />
        </div>
      </section>

      {/* CONTACTO */}
      <section className="bg-slate-950 py-20 text-center text-white">
        <h2 className="text-3xl font-semibold">Estamos para ayudarte</h2>

        <p className="mt-4 text-slate-300">
          Contáctanos para resolver tus dudas y brindarte la información que
          necesitas.
        </p>

        <p className="mt-4">Correo: dberlanga@benaia.mx</p>
        <p>Tel: 844 419 3111</p>

        <div className="mt-6 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-teal-600 px-6 py-4 font-semibold transition hover:bg-teal-500"
          >
            WhatsApp
          </a>

          <a
            href={mapsUrl}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-white/20 bg-white/5 px-6 py-4 font-semibold transition hover:bg-white/10"
          >
            Llegar con Google Maps
          </a>

          <a
            href={wazeUrl}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-white/20 bg-white/5 px-6 py-4 font-semibold transition hover:bg-white/10"
          >
            Llegar con Waze
          </a>
        </div>

        <p className="mt-6 text-sm text-slate-300">
          Llega fácilmente con un solo clic desde tu celular.
        </p>

        <div className="mx-auto mt-10 max-w-4xl px-4">
          <iframe
            src="https://www.google.com/maps?q=Cl%C3%ADnica+Benaia+Saltillo&output=embed"
            className="h-80 w-full rounded-2xl border border-white/10 shadow-2xl"
            loading="lazy"
            title="Mapa Clínica Benaia"
          ></iframe>

          <div className="mt-4 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <a
              href={mapsUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-white px-5 py-3 font-semibold text-slate-900 transition hover:bg-slate-100"
            >
              Abrir ruta en Google Maps
            </a>

            <a
              href={wazeUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-5 py-3 font-semibold text-white transition hover:bg-white/10"
            >
              Abrir ruta en Waze
            </a>
          </div>
        </div>
      </section>

      {/* BOTON FLOTANTE MOVIL */}
      <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-slate-200 bg-white/95 p-3 backdrop-blur sm:hidden">
        <div className="mx-auto flex max-w-md gap-3">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="flex-1 rounded-full bg-emerald-600 px-4 py-3 text-center text-sm font-semibold text-white shadow-lg shadow-emerald-600/20"
          >
            WhatsApp
          </a>
          <a
            href={mapsUrl}
            target="_blank"
            rel="noreferrer"
            className="flex-1 rounded-full border border-slate-200 bg-slate-50 px-4 py-3 text-center text-sm font-semibold text-slate-700"
          >
            Cómo llegar
          </a>
        </div>
      </div>
    </div>
  );
}
