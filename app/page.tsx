import Image from "next/image";
import {
  ArrowRight,
  CalendarDays,
  MapPin,
  Shield,
  Handshake,
  Phone,
  Mail,
  Users,
} from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#07110d] text-white">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#07110d]/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
          <div className="flex min-w-0 items-center gap-3">
            <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-full border border-amber-400/30 bg-white/5">
              <Image
                src="/logo.png"
                alt="ASVEBO"
                fill
                className="object-contain p-1"
                priority
              />
            </div>

            <div className="min-w-0">
              <div className="truncate text-sm font-black tracking-wide text-amber-300 sm:text-base">
                ASVEBO
              </div>
              <div className="truncate text-[10px] text-zinc-300 sm:text-xs">
                Association des vétérans de Bonamoukengue
              </div>
            </div>
          </div>

          <a
            href="#contact"
            className="shrink-0 rounded-full bg-amber-400 px-3 py-2 text-xs font-semibold text-[#07110d] transition hover:bg-amber-300 sm:px-4 sm:text-sm"
          >
            Contact
          </a>
        </div>

        <div className="border-t border-white/5 md:hidden">
          <nav className="mx-auto flex max-w-7xl items-center justify-between gap-2 overflow-x-auto px-4 py-2 text-xs text-zinc-300">
            <a href="#vision" className="whitespace-nowrap hover:text-white">
              Vision
            </a>
            <a href="#gala" className="whitespace-nowrap hover:text-white">
              Gala
            </a>
            <a href="#actions" className="whitespace-nowrap hover:text-white">
              Actions
            </a>
            <a href="#contact" className="whitespace-nowrap hover:text-white">
              Contact
            </a>
          </nav>
        </div>

        <div className="hidden md:block">
          <nav className="mx-auto flex max-w-7xl items-center justify-center gap-8 px-4 py-3 text-sm text-zinc-300">
            <a href="#vision" className="hover:text-white">
              Vision
            </a>
            <a href="#gala" className="hover:text-white">
              Matchs de gala
            </a>
            <a href="#actions" className="hover:text-white">
              Actions
            </a>
            <a href="#contact" className="hover:text-white">
              Contact
            </a>
          </nav>
        </div>
      </header>

      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(245,158,11,0.14),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(34,197,94,0.12),transparent_28%)]" />

        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 py-12 sm:py-16 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:py-24">
          <div className="relative z-10 order-2 lg:order-1">
            <div className="inline-flex rounded-full border border-amber-400/20 bg-amber-400/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-amber-300 sm:px-4 sm:py-1.5 sm:text-xs">
              Mémoire • Sport • Communauté
            </div>

            <h1 className="mt-5 text-4xl font-black leading-none tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
              ASVEBO
            </h1>

            <p className="mt-4 max-w-3xl text-xl font-semibold leading-tight text-zinc-100 sm:text-2xl md:text-3xl lg:text-4xl">
              Une identité de mémoire sportive et de cohésion locale
            </p>

            <p className="mt-5 max-w-2xl text-sm leading-7 text-zinc-300 sm:text-base sm:leading-8 lg:text-lg">
              Une proposition de plateforme éditoriale pour valoriser les anciens
              footballeurs de Bonamoukengue, structurer les matchs de gala et
              affirmer une image forte de solidarité communautaire.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <a
                href="#gala"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-amber-400 px-5 py-3 text-sm font-semibold text-[#07110d] transition hover:bg-amber-300"
              >
                Voir les matchs de gala
                <ArrowRight className="h-4 w-4" />
              </a>

              <a
                href="#vision"
                className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Voir la vision
              </a>
            </div>
          </div>

          <div className="relative z-10 order-1 flex items-center justify-center lg:order-2">
            <div className="relative flex h-[300px] w-full max-w-[320px] items-center justify-center sm:h-[360px] sm:max-w-[360px] md:h-[420px] md:max-w-[420px]">
              <div className="absolute inset-0 rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.02))] shadow-2xl" />
              <div className="absolute h-52 w-52 rounded-full bg-amber-400/10 blur-3xl sm:h-64 sm:w-64" />

              <div className="relative flex h-56 w-56 items-center justify-center rounded-full border border-amber-400/25 bg-[#0a1a12] shadow-[0_0_60px_rgba(245,158,11,0.12)] sm:h-64 sm:w-64 md:h-72 md:w-72">
                <div className="relative h-[180px] w-[180px] sm:h-[210px] sm:w-[210px] md:h-[240px] md:w-[240px]">
                  <Image
                    src="/logo.png"
                    alt="Emblème ASVEBO"
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-white/10 bg-[#0b1712]">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:py-8">
          <p className="max-w-5xl text-base font-medium leading-8 text-zinc-200 sm:text-lg md:text-xl md:leading-9">
            “Valoriser les anciens footballeurs de Bonamoukengue et renforcer la
            solidarité communautaire à travers des rencontres sportives, des foires
            et des actions locales.”
          </p>
        </div>
      </section>

      <section id="vision" className="border-b border-white/10 bg-[#07110d] py-14 sm:py-16 md:py-20">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-4 md:grid-cols-[0.95fr_1.05fr] md:gap-12">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-amber-300 sm:text-sm">
              Vision
            </p>
            <h2 className="mt-4 text-3xl font-bold leading-tight text-white sm:text-4xl">
              Une association pensée comme un repère de mémoire, d’honneur et de rassemblement
            </h2>
          </div>

          <div className="space-y-5 text-base leading-8 text-zinc-300 sm:text-lg">
            <p>
              ASVEBO se positionne comme une structure capable de donner une
              visibilité nouvelle aux anciens footballeurs du quartier, tout en
              créant un cadre respectueux, fédérateur et durable pour la communauté.
            </p>
            <p>
              Cette maquette propose une présentation plus institutionnelle,
              plus événementielle et plus marquante, afin de poser les bases d’une
              identité digitale forte.
            </p>
          </div>
        </div>
      </section>

      <section id="gala" className="border-b border-white/10 bg-[#0a1611] py-14 sm:py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mb-8 flex flex-col gap-4 md:mb-10 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-amber-300 sm:text-sm">
                Matchs de gala
              </p>
              <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">
                Deux dates, deux rendez-vous symboliques
              </h2>
            </div>
            <p className="max-w-xl text-sm leading-7 text-zinc-300 sm:text-base sm:leading-8">
              Une mise en avant frontale des événements pour créer un impact visuel
              immédiat et donner au projet une vraie dimension de rendez-vous local.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 md:gap-8">
            <PosterBlock
              date="25 Mars"
              title="Premier match de gala"
              text="Un premier temps fort pour honorer les anciens footballeurs, lancer la dynamique d’ASVEBO et mobiliser la communauté."
            />
            <PosterBlock
              date="31 Mars"
              title="Deuxième match de gala"
              text="Un second rendez-vous pour consolider la visibilité de l’association et prolonger l’élan communautaire."
            />
          </div>
        </div>
      </section>

      <section id="actions" className="border-b border-white/10 bg-[#07110d] py-14 sm:py-16 md:py-20">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-4 md:grid-cols-[0.9fr_1.1fr] md:gap-12">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-amber-300 sm:text-sm">
              Actions communautaires
            </p>
            <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">
              Une présence locale au-delà du terrain
            </h2>
            <p className="mt-5 text-base leading-8 text-zinc-300 sm:text-lg">
              ASVEBO peut devenir une structure de référence dans le quartier à
              travers des initiatives de visibilité, de rassemblement et de proximité.
            </p>
          </div>

          <div className="space-y-8">
            <TimelineItem
              icon={<CalendarDays className="h-5 w-5" />}
              title="Foires"
              text="Participation à des foires et manifestations locales pour accroître la notoriété de l’association."
            />
            <TimelineItem
              icon={<Shield className="h-5 w-5" />}
              title="Prises de stand"
              text="Présence sur des stands pour présenter ASVEBO, créer du lien et fédérer des soutiens."
            />
            <TimelineItem
              icon={<Users className="h-5 w-5" />}
              title="Communauté solidaire"
              text="Renforcer l’unité, la dignité des anciens et l’implication du quartier autour d’une même vision."
            />
          </div>
        </div>
      </section>

      <section className="border-b border-white/10 bg-[#0a1611] py-14 sm:py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-4">
          <div className="rounded-[2rem] border border-amber-400/15 bg-[linear-gradient(135deg,rgba(245,158,11,0.08),rgba(255,255,255,0.02))] p-6 sm:p-8 md:p-12">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-amber-300 sm:text-sm">
              Ambition
            </p>
            <h2 className="mt-4 max-w-4xl text-3xl font-bold leading-tight text-white sm:text-4xl">
              Faire d’ASVEBO une plateforme crédible de mémoire sportive, de rayonnement local et de mobilisation communautaire
            </h2>

            <div className="mt-8 grid gap-4 md:mt-10 md:grid-cols-2">
              <Highlight text="Valoriser durablement les anciens footballeurs du quartier" />
              <Highlight text="Créer des rendez-vous sportifs réguliers et visibles" />
              <Highlight text="Renforcer la fierté et la cohésion de Bonamoukengue" />
              <Highlight text="Ouvrir la voie à des soutiens, partenariats et initiatives futures" />
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="bg-[#07110d] py-14 sm:py-16 md:py-20">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-4 md:grid-cols-[1fr_0.95fr] md:gap-12">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-amber-300 sm:text-sm">
              Contact
            </p>
            <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">
              Une maquette premium conçue pour ouvrir une nouvelle étape
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-8 text-zinc-300 sm:text-lg">
              Les informations officielles, les photos réelles, les contacts du
              bureau et les contenus détaillés peuvent être intégrés dans une
              phase suivante selon les orientations retenues.
            </p>
          </div>

          <div className="space-y-4">
            <ContactRow
              title="Localisation"
              text="Bonamoukengue, Cameroun"
              icon={<MapPin className="h-5 w-5" />}
            />
            <ContactRow
              title="Téléphone"
              text="À renseigner"
              icon={<Phone className="h-5 w-5" />}
            />
            <ContactRow
              title="Email"
              text="À renseigner"
              icon={<Mail className="h-5 w-5" />}
            />
            <ContactRow
              title="Partenariats"
              text="Ouverture future à des collaborations et soutiens locaux"
              icon={<Handshake className="h-5 w-5" />}
            />
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 bg-[#050c09]">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-8 text-sm text-zinc-400 md:flex-row md:items-center md:justify-between">
          <div>
            <span className="font-semibold text-amber-300">ASVEBO</span> — Association des vétérans de Bonamoukengue
          </div>
          <div>Prototype éditorial premium • {new Date().getFullYear()}</div>
        </div>
      </footer>
    </main>
  );
}

function PosterBlock({
  date,
  title,
  text,
}: {
  date: string;
  title: string;
  text: string;
}) {
  return (
    <div className="group relative overflow-hidden rounded-[2rem] border border-amber-400/15 bg-[#0d1d16] p-6 transition hover:-translate-y-1 hover:border-amber-400/30 sm:p-8">
      <div className="absolute right-4 top-4 text-4xl font-black tracking-tight text-white/5 sm:right-6 sm:top-6 sm:text-6xl md:text-7xl">
        {date}
      </div>
      <div className="relative z-10">
        <div className="inline-flex rounded-full bg-amber-400 px-3 py-1 text-sm font-bold text-[#07110d]">
          {date}
        </div>
        <h3 className="mt-5 text-xl font-bold text-white sm:text-2xl">{title}</h3>
        <p className="mt-4 max-w-xl text-sm leading-7 text-zinc-300 sm:text-base sm:leading-8">
          {text}
        </p>
      </div>
    </div>
  );
}

function TimelineItem({
  icon,
  title,
  text,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
}) {
  return (
    <div className="relative border-l border-amber-400/25 pl-8">
      <div className="absolute -left-[11px] top-1 flex h-5 w-5 items-center justify-center rounded-full bg-amber-400 text-[#07110d]">
        <div className="scale-75">{icon}</div>
      </div>
      <h3 className="text-xl font-semibold text-white sm:text-2xl">{title}</h3>
      <p className="mt-3 max-w-2xl text-sm leading-7 text-zinc-300 sm:text-base sm:leading-8">
        {text}
      </p>
    </div>
  );
}

function Highlight({ text }: { text: string }) {
  return (
    <div className="rounded-[1.25rem] border border-white/10 bg-white/5 px-5 py-4 text-sm text-zinc-200 sm:text-base">
      {text}
    </div>
  );
}

function ContactRow({
  title,
  text,
  icon,
}: {
  title: string;
  text: string;
  icon: React.ReactNode;
}) {
  return (
    <div className="flex items-start gap-4 rounded-[1.25rem] border border-white/10 bg-white/5 p-4 sm:p-5">
      <div className="mt-1 text-amber-300">{icon}</div>
      <div>
        <p className="font-semibold text-white">{title}</p>
        <p className="mt-1 text-sm text-zinc-300 sm:text-base">{text}</p>
      </div>
    </div>
  );
}