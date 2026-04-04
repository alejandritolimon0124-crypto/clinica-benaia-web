import {
  LayoutDashboard,
  ClipboardList,
  CalendarDays,
  CircleDollarSign,
  Building2,
  MessageSquareMore,
  Bell,
  Search,
  ArrowUpRight,
  CheckCircle2,
  Clock3,
  Stethoscope,
  UserRound,
} from "lucide-react";

const stats = [
  { title: "Casos activos", value: "18", sub: "+4 esta semana", icon: ClipboardList },
  { title: "Cirugías programadas", value: "7", sub: "3 en próximas 48 h", icon: CalendarDays },
  { title: "Ofertas enviadas", value: "26", sub: "8 pendientes", icon: CircleDollarSign },
  { title: "Clínicas conectadas", value: "4", sub: "2 con alta actividad", icon: Building2 },
];

const cases = [
  {
    procedure: "Colecistectomía laparoscópica",
    doctor: "Dr. Alejandro Mercado",
    place: "Benaia Quirúrgica",
    date: "05 Abr · 10:30",
    status: "Confirmado",
    statusClass: "bg-emerald-500/10 text-emerald-300 border border-emerald-500/20",
  },
  {
    procedure: "Histeroscopia diagnóstica",
    doctor: "Dra. Sofía Herrera",
    place: "Torre Médica Norte",
    date: "06 Abr · 13:00",
    status: "Contraoferta",
    statusClass: "bg-amber-500/10 text-amber-300 border border-amber-500/20",
  },
  {
    procedure: "Hernia inguinal unilateral",
    doctor: "Dr. Luis Mendoza",
    place: "Benaia Quirúrgica",
    date: "07 Abr · 08:00",
    status: "Pendiente",
    statusClass: "bg-white/5 text-white/75 border border-white/10",
  },
];

const offers = [
  {
    title: "Colecistectomía laparoscópica",
    amount: "$48,000",
    response: "Aceptada",
    responseClass: "text-emerald-300",
  },
  {
    title: "Histeroscopia diagnóstica",
    amount: "$26,500",
    response: "Contraoferta: $28,000",
    responseClass: "text-amber-300",
  },
  {
    title: "Hernioplastía umbilical",
    amount: "$39,000",
    response: "En revisión",
    responseClass: "text-white/80",
  },
];

const timeline = [
  "Se confirmó quirófano para Colecistectomía laparoscópica.",
  "La clínica respondió contraoferta para Histeroscopia diagnóstica.",
  "Nuevo caso enviado por Dr. Luis Mendoza.",
  "Se actualizó disponibilidad de horarios en Benaia Quirúrgica.",
];

function SidebarItem({ icon: Icon, label, active = false, badge = "" }) {
  return (
    <button
      className={`flex w-full items-center justify-between rounded-2xl px-4 py-3 transition ${
        active
          ? "bg-[#d6bf77] text-[#111111] shadow-[0_12px_28px_rgba(214,191,119,0.20)]"
          : "text-white/70 hover:bg-white/5 hover:text-white"
      }`}
    >
      <span className="flex items-center gap-3">
        <Icon size={18} />
        <span className="text-sm font-medium">{label}</span>
      </span>

      {badge ? (
        <span
          className={`rounded-full px-2 py-0.5 text-xs ${
            active ? "bg-black/10 text-[#111111]" : "bg-white/10 text-white/80"
          }`}
        >
          {badge}
        </span>
      ) : null}
    </button>
  );
}

function StatCard({ title, value, sub, icon: Icon }) {
  return (
    <div className="rounded-[28px] border border-white/10 bg-white/[0.04] p-5">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm text-white/50">{title}</p>
          <p className="mt-3 text-3xl font-semibold tracking-tight text-white">{value}</p>
          <p className="mt-2 text-xs text-white/45">{sub}</p>
        </div>

        <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#d6bf77]/15 text-[#d6bf77]">
          <Icon size={20} />
        </div>
      </div>
    </div>
  );
}

export default function BenaiaPro() {
  return (
    <main className="min-h-screen bg-[#0b0b0b] text-white">
      <div className="grid min-h-screen lg:grid-cols-[270px_1fr]">
        <aside className="border-r border-white/6 bg-[#0f0f0f] px-5 py-6">
          <div className="flex items-center gap-3 px-2">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#d6bf77] text-[#111111]">
              <Stethoscope size={22} />
            </div>
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#d6bf77]">
                Plataforma médica
              </p>
              <h1 className="mt-1 text-2xl font-semibold tracking-tight">Benaia Pro</h1>
            </div>
          </div>

          <div className="mt-8 space-y-2">
            <SidebarItem icon={LayoutDashboard} label="Dashboard" active />
            <SidebarItem icon={ClipboardList} label="Casos" badge="18" />
            <SidebarItem icon={CircleDollarSign} label="Ofertas" badge="8" />
            <SidebarItem icon={CalendarDays} label="Programación" />
            <SidebarItem icon={Building2} label="Clínicas" />
            <SidebarItem icon={MessageSquareMore} label="Mensajes" badge="3" />
          </div>

          <div className="mt-8 rounded-[26px] border border-[#d6bf77]/20 bg-[#151515] p-5">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#d6bf77]">
              Posicionamiento
            </p>
            <p className="mt-3 text-sm leading-7 text-white/70">
              El paciente ve una clínica premium. El médico opera desde una herramienta privada
              con control de programación y costos.
            </p>
          </div>

          <div className="mt-8 rounded-[26px] border border-white/10 bg-white/[0.04] p-5">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/10 text-white">
                <UserRound size={18} />
              </div>
              <div>
                <p className="text-sm font-medium">Dr. Alejandro Mercado</p>
                <p className="text-xs text-white/50">Administrador</p>
              </div>
            </div>
            <button className="mt-4 w-full rounded-full border border-white/10 px-4 py-2.5 text-sm text-white/80 transition hover:bg-white/5">
              Ver perfil
            </button>
          </div>
        </aside>

        <section className="px-5 py-5 md:px-8 md:py-6">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#d6bf77]">
                Panel de control
              </p>
              <h2 className="mt-2 text-3xl font-semibold tracking-tight md:text-4xl">
                Benaia trabaja para ti
              </h2>
              <p className="mt-2 max-w-2xl text-sm leading-7 text-white/55 md:text-base">
                Controla casos, programación y propuestas económicas desde una sola interfaz
                diseñada para cirugía privada.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2.5 text-white/55">
                <Search size={16} />
                <span className="text-sm">Buscar caso o médico</span>
              </div>

              <button className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-white/70 transition hover:bg-white/8">
                <Bell size={18} />
              </button>

              <button className="rounded-full bg-[#d6bf77] px-5 py-3 text-sm font-semibold text-[#111111] transition hover:opacity-90">
                Nuevo caso
              </button>
            </div>
          </div>

          <div className="mt-6 grid gap-4 xl:grid-cols-[1.35fr_0.9fr]">
            <div className="rounded-[34px] border border-[#d6bf77]/15 bg-[linear-gradient(135deg,rgba(214,191,119,0.13),rgba(255,255,255,0.03))] p-6">
              <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
                <div className="max-w-2xl">
                  <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#d6bf77]">
                    Centro operativo
                  </p>
                  <h3 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
                    Infraestructura quirúrgica moderna para médicos
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-white/65 md:text-base">
                    Aquí concentras propuesta, respuesta, programación y confirmación sin exponer
                    la lógica económica al paciente.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-3 md:min-w-[280px]">
                  <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                    <p className="text-xs text-white/45">Tiempo promedio</p>
                    <p className="mt-2 text-2xl font-semibold">3.2 h</p>
                    <p className="mt-1 text-xs text-emerald-300">respuesta por oferta</p>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                    <p className="text-xs text-white/45">Quirófanos activos</p>
                    <p className="mt-2 text-2xl font-semibold">4</p>
                    <p className="mt-1 text-xs text-white/55">disponibilidad hoy</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-[34px] border border-white/10 bg-white/[0.04] p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.26em] text-[#d6bf77]">
                Estado del día
              </p>

              <div className="mt-5 space-y-4">
                <div className="flex items-start gap-3 rounded-2xl border border-white/10 bg-black/20 p-4">
                  <CheckCircle2 size={18} className="mt-0.5 text-emerald-300" />
                  <div>
                    <p className="text-sm font-medium">Caso confirmado</p>
                    <p className="mt-1 text-xs leading-6 text-white/55">
                      Colecistectomía laparoscópica aprobada y programada.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 rounded-2xl border border-white/10 bg-black/20 p-4">
                  <Clock3 size={18} className="mt-0.5 text-amber-300" />
                  <div>
                    <p className="text-sm font-medium">Contraoferta recibida</p>
                    <p className="mt-1 text-xs leading-6 text-white/55">
                      Histeroscopia diagnóstica con ajuste pendiente de validación.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 rounded-2xl border border-white/10 bg-black/20 p-4">
                  <Building2 size={18} className="mt-0.5 text-sky-300" />
                  <div>
                    <p className="text-sm font-medium">Programación centralizada</p>
                    <p className="mt-1 text-xs leading-6 text-white/55">
                      Casos, horarios y documentos concentrados en una sola vista.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-5 grid gap-4 md:grid-cols-2 2xl:grid-cols-4">
            {stats.map((item) => (
              <StatCard key={item.title} {...item} />
            ))}
          </div>

          <div className="mt-5 grid gap-5 2xl:grid-cols-[1.2fr_0.8fr]">
            <div className="rounded-[30px] border border-white/10 bg-white/[0.04] p-5">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-lg font-semibold tracking-tight">Casos recientes</p>
                  <p className="mt-1 text-sm text-white/45">Flujo quirúrgico y estado operativo</p>
                </div>

                <button className="flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-sm text-white/80 transition hover:bg-white/5">
                  Ver todos
                  <ArrowUpRight size={16} />
                </button>
              </div>

              <div className="mt-5 space-y-3">
                {cases.map((item) => (
                  <div
                    key={`${item.procedure}-${item.date}`}
                    className="rounded-2xl border border-white/10 bg-black/20 p-4"
                  >
                    <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                      <div>
                        <p className="text-sm font-medium text-white">{item.procedure}</p>
                        <p className="mt-1 text-xs text-white/45">
                          {item.doctor} · {item.place}
                        </p>
                      </div>

                      <div className="flex items-center gap-3">
                        <p className="text-xs text-white/55">{item.date}</p>
                        <span
                          className={`inline-flex rounded-full px-3 py-1 text-xs font-medium ${item.statusClass}`}
                        >
                          {item.status}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid gap-5">
              <div className="rounded-[30px] border border-white/10 bg-white/[0.04] p-5">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-lg font-semibold tracking-tight">Ofertas y respuestas</p>
                    <p className="mt-1 text-sm text-white/45">Estado económico por caso</p>
                  </div>
                  <CircleDollarSign size={18} className="text-[#d6bf77]" />
                </div>

                <div className="mt-5 space-y-3">
                  {offers.map((item) => (
                    <div
                      key={item.title}
                      className="rounded-2xl border border-white/10 bg-black/20 p-4"
                    >
                      <p className="text-sm font-medium">{item.title}</p>
                      <div className="mt-3 flex items-center justify-between text-sm">
                        <span className="text-white/45">Propuesta</span>
                        <span className="font-medium">{item.amount}</span>
                      </div>
                      <div className="mt-2 flex items-center justify-between text-sm">
                        <span className="text-white/45">Respuesta</span>
                        <span className={item.responseClass}>{item.response}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-[30px] border border-white/10 bg-white/[0.04] p-5">
                <p className="text-lg font-semibold tracking-tight">Actividad reciente</p>

                <div className="mt-5 space-y-3">
                  {timeline.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-3 rounded-2xl border border-white/10 bg-black/20 p-4"
                    >
                      <Clock3 size={16} className="mt-1 text-[#d6bf77]" />
                      <p className="text-sm leading-7 text-white/70">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}