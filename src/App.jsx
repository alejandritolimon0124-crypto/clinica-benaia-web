export default function App() {
  const instalaciones = [
    {
      titulo: "Espacios seguros y funcionales",
      descripcion:
        "Áreas preparadas para brindar atención ordenada, profesional y enfocada en el bienestar del paciente.",
    },
    {
      titulo: "Atención cercana",
      descripcion:
        "Un entorno pensado para que cada paciente y su familia se sientan acompañados con calidez y respeto.",
    },
    {
      titulo: "Confianza en cada etapa",
      descripcion:
        "Desde la llegada hasta la recuperación, buscamos que la experiencia se perciba clara, tranquila y segura.",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      {/* HEADER */}
      <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <div className="flex items-center gap-3">
            <img src="/images/logo.jpeg" className="h-12" />
            <div>
              <p className="font-semibold">Clínica Benaia</p>
              <p className="text-sm text-slate-500">Atención quirúrgica con calidez y confianza</p>
            </div>
          </div>

          <a
            href="https://wa.me/528444193111"
            className="bg-teal-600 text-white px-5 py-3 rounded-full"
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
          className="mx-auto w-40 sm:w-56 md:w-64 lg:w-72 drop-shadow-2xl"
        />
        <p className="mt-4 text-slate-300 text-sm tracking-wide">
          Salud al alcance de todos
        </p>
      </section>

      {/* HERO */}
      <section className="mx-auto max-w-7xl px-6 py-20 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <span className="bg-teal-50 text-teal-700 px-4 py-2 rounded-full text-sm font-medium">
            Un espacio pensado para tu tranquilidad
          </span>

          <h1 className="mt-6 text-5xl font-semibold leading-tight">
            La seguridad, la atención y la confianza
            <span className="block text-teal-600 mt-3">
              acompañan cada paso de tu proceso
            </span>
          </h1>

          <p className="mt-6 text-lg text-slate-600 max-w-xl">
            En Clínica Benaia queremos que cada paciente se sienta acompañado desde el primer contacto.
            Nuestras instalaciones están diseñadas para brindar una experiencia humana, clara y confiable.
          </p>

          <a
            href="https://wa.me/528444193111"
            className="inline-block mt-8 bg-slate-900 text-white px-6 py-4 rounded-full"
          >
            Solicitar información por WhatsApp
          </a>
        </div>

        <div className="rounded-3xl overflow-hidden shadow-2xl">
          <img src="/images/fachada.jpeg" className="w-full" />
        </div>
      </section>

      {/* POR QUE ELEGIR */}
      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-semibold">¿Por qué elegir Clínica Benaia?</h2>
          <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
            Porque entendemos que cada paciente necesita más que un espacio médico: necesita confianza,
            claridad y acompañamiento en todo momento.
          </p>

          <div className="mt-10 grid md:grid-cols-3 gap-6">
            {[
              "Atención humana y cercana",
              "Instalaciones seguras y ordenadas",
              "Acompañamiento durante todo el proceso",
            ].map((item) => (
              <div className="bg-slate-50 p-6 rounded-2xl">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INSTALACIONES */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-semibold mb-10">
          Instalaciones pensadas para hacerte sentir en buenas manos
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { nombre: "Benaia", img: "fachada.jpeg", text: "Confianza desde el primer momento." },
            { nombre: "Recepción", img: "recepcion.jpeg", text: "Atención clara y ordenada desde tu llegada." },
            { nombre: "Quirófano", img: "quirofano.jpeg", text: "Seguridad y respaldo en cada procedimiento." },
            { nombre: "Recuperación", img: "recuperacion.jpeg", text: "Seguimiento cercano después de tu cirugía." },
            { nombre: "Habitaciones", img: "habitaciones.jpeg", text: "Comodidad para ti y tu familia." },
            { nombre: "Rayos X", img: "rayosx.jpeg", text: "Apoyo diagnóstico oportuno." },
          ].map((item) => (
            <div className="bg-white rounded-2xl overflow-hidden shadow">
              <img src={`/images/${item.img}`} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="font-semibold text-lg">{item.nombre}</h3>
                <p className="text-sm text-slate-600 mt-2">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ACOMPAÑAMIENTO */}
      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-semibold">Te acompañamos en cada etapa</h2>
            <p className="mt-4 text-slate-600">
              Desde el primer contacto hasta tu recuperación, buscamos que te sientas seguro,
              informado y acompañado en todo momento.
            </p>
          </div>

          <img src="/images/compañia.jpeg" className="rounded-3xl shadow" />
        </div>
      </section>

      {/* CONTACTO */}
      <section className="bg-slate-950 text-white py-20 text-center">
        <h2 className="text-3xl font-semibold">Estamos para ayudarte</h2>

        <p className="mt-4 text-slate-300">
          Contáctanos para resolver tus dudas y brindarte la información que necesitas.
        </p>

        <p className="mt-4">Correo: dberlanga@benaia.mx</p>
        <p>Tel: 844 419 3111</p>

        <div className="mt-6 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <a
            href="https://wa.me/528444193111"
            className="bg-teal-600 px-6 py-4 rounded-full font-semibold transition hover:bg-teal-500"
          >
            WhatsApp
          </a>

          <a
            href="https://www.google.com/maps/dir/?api=1&destination=Cl%C3%ADnica+Benaia+Saltillo"
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-white/20 bg-white/5 px-6 py-4 font-semibold transition hover:bg-white/10"
          >
            Llegar con Google Maps
          </a>

          <a
            href="https://waze.com/ul?q=Cl%C3%ADnica%20Benaia%20Saltillo&navigate=yes"
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

        {/* MAPA */}
        <div className="mt-10 max-w-4xl mx-auto px-4">
          <iframe
            src="https://www.google.com/maps?q=Cl%C3%ADnica+Benaia+Saltillo&output=embed"
            className="w-full h-80 rounded-2xl border border-white/10 shadow-2xl"
            loading="lazy"
          ></iframe>

          <div className="mt-4 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
          <a
            href="https://www.google.com/maps/dir/?api=1&destination=Cl%C3%ADnica+Benaia+Saltillo"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-full bg-white px-5 py-3 font-semibold text-slate-900 transition hover:bg-slate-100"
          >
            Abrir ruta en Google Maps
          </a>

          <a
            href="https://waze.com/ul?q=Cl%C3%ADnica%20Benaia%20Saltillo&navigate=yes"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-5 py-3 font-semibold text-white transition hover:bg-white/10"
          >
            Abrir ruta en Waze
          </a>
        </div>
        </div>
      </section>
    </div>
  );
}
