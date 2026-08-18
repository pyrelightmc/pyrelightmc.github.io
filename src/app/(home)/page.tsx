import type { Metadata } from "next";
import { PyroButton } from "@/components/ui/PyroButton";
import GitHubStats from "@/components/ui/GitHubStats";
import {
  BookOpenIcon,
  KeyIcon,
  LockClosedIcon,
  ShieldCheckIcon,
  MapPinIcon,
  ArrowsRightLeftIcon,
  CubeIcon,
  CodeBracketIcon,
} from "@heroicons/react/24/solid";

export const metadata: Metadata = {
  metadataBase: new URL("https://pyrelightmc.github.io"),
  title: "Pyrelight",
  description:
    "Pyrelight builds focused Minecraft plugins, starting with rLogin — premium and password authentication for Paper, Folia and Velocity.",
  openGraph: {
    title: "Pyrelight",
    description:
      "Pyrelight builds focused Minecraft plugins, starting with rLogin — premium and password authentication for Paper, Folia and Velocity.",
    images: [{ url: "/favicon.png" }],
  },
};

const features = [
  {
    title: "One jar, both platforms",
    description:
      "The same rLogin-<version>.jar runs on Paper, Purpur and Folia, and on a Velocity proxy. No separate builds to pick between.",
    icon: <CubeIcon className="w-5 h-5" />,
  },
  {
    title: "Premium auto-login",
    description:
      "Players with a Mojang account are verified with the same handshake the vanilla server would use, and dropped straight in — no password, ever.",
    icon: <KeyIcon className="w-5 h-5" />,
  },
  {
    title: "Cracked auth, too",
    description:
      "Running offline-mode? Password registration and login, rate-limited and policy-enforced, works exactly the same way.",
    icon: <LockClosedIcon className="w-5 h-5" />,
  },
  {
    title: "Sessions that survive a hop",
    description:
      "Authenticate once on a proxy network, and rLogin recognizes the same session on every backend a player switches to.",
    icon: <ArrowsRightLeftIcon className="w-5 h-5" />,
  },
  {
    title: "Security beyond a password",
    description:
      "Recovery codes, two-factor authentication, and a configurable password policy — for the accounts that need more than a password.",
    icon: <ShieldCheckIcon className="w-5 h-5" />,
  },
  {
    title: "Spawns that know your state",
    description:
      "Send unauthenticated and authenticated players to different spawn points, automatically.",
    icon: <MapPinIcon className="w-5 h-5" />,
  },
];

const products = [
  {
    name: "rLogin",
    description:
      "Premium auto-login and password authentication for Paper, Folia and Velocity.",
    status: "Available",
    href: "/docs/rlogin",
    highlight: true,
  },
  {
    name: "rPlugin",
    description: "In development. Documentation lands here when it does.",
    status: "Coming soon",
    href: "/docs/rplugin",
    highlight: false,
  },
];

const GitHubIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path
      fillRule="evenodd"
      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
      clipRule="evenodd"
    />
  </svg>
);

const Page = () => {
  return (
    <>
      {/* hero */}
      <section className="relative min-h-[100vh] w-full bg-[#09090b]">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />

        <div className="relative container mx-auto px-6 pt-40 pb-20">
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-20">
            <h1 className="font-extrabold text-[clamp(2.5rem,8vw,5rem)] leading-[1.05] tracking-[-0.04em] text-white mb-6 font-[family-name:var(--font-display)]">
              Small plugins, <span className="text-brand">done right</span>
            </h1>

            <p className="text-lg md:text-xl text-white/60 max-w-2xl mb-10 leading-relaxed">
              Pyrelight builds focused Minecraft plugins for Paper, Folia and
              Velocity — starting with rLogin: premium and password
              authentication, one jar, both platforms.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 items-center sm:items-start">
              <PyroButton
                variant="primary"
                size="large"
                href="/docs/rlogin"
                isArrow
              >
                <BookOpenIcon className="w-5 h-5" /> Get Started
              </PyroButton>
              <div className="flex flex-col items-center gap-2">
                <PyroButton
                  variant="quaternary"
                  size="large"
                  href="https://github.com/pyrelightmc/rlogin"
                  external
                >
                  <GitHubIcon /> Star on GitHub
                </PyroButton>
                <GitHubStats />
              </div>
            </div>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="rounded-xl border border-white/10 bg-black/40 overflow-hidden shadow-2xl shadow-black/50">
              <div className="flex items-center gap-2 px-4 py-3 border-b border-white/5 bg-white/[0.02]">
                <span className="w-3 h-3 rounded-full bg-red-500/60" />
                <span className="w-3 h-3 rounded-full bg-yellow-500/60" />
                <span className="w-3 h-3 rounded-full bg-green-500/60" />
                <span className="ml-2 text-xs text-white/30 font-mono">
                  console
                </span>
              </div>
              <pre className="px-4 py-5 text-xs sm:text-sm font-mono leading-relaxed overflow-x-auto">
                <code>
                  <span className="text-white/30">[rLogin] </span>
                  <span className="text-green-400/90">rLogin ready.</span>
                  <span className="text-white/50">
                    {" "}
                    Folia: false | Database: sqlite | Setup:
                    standalone-offline | Auth mode: auto | Premium
                    auto-login: on | Floodgate: not installed
                  </span>
                </code>
              </pre>
            </div>
          </div>
        </div>
      </section>

      {/* products */}
      <section className="relative z-10 w-full bg-[#09090b] border-t border-white/5">
        <div className="container mx-auto px-6 py-24 md:py-32">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-sm font-medium text-white/40 mb-4">
              What we&apos;re building
            </p>
            <h2 className="font-extrabold text-[clamp(2rem,5vw,3.5rem)] leading-[1.1] tracking-[-0.03em] text-white font-[family-name:var(--font-display)]">
              One plugin out, more on the way
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {products.map((product) => (
              <a
                key={product.name}
                href={product.href}
                className={`block p-8 rounded-2xl border transition-colors ${
                  product.highlight
                    ? "border-brand/30 bg-brand/[0.04] hover:border-brand/50"
                    : "border-white/5 hover:border-white/10"
                }`}
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold text-xl text-white">
                    {product.name}
                  </h3>
                  <span
                    className={`text-xs font-medium px-2.5 py-1 rounded-full ${
                      product.highlight
                        ? "bg-brand/15 text-brand"
                        : "bg-white/5 text-white/40"
                    }`}
                  >
                    {product.status}
                  </span>
                </div>
                <p className="text-white/50 text-sm leading-relaxed">
                  {product.description}
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* features */}
      <section className="w-full bg-[#09090b] border-t border-white/5">
        <div className="container mx-auto px-6 py-24 md:py-32">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-extrabold text-[clamp(2rem,5vw,3.5rem)] leading-[1.1] tracking-[-0.03em] text-white mb-6 font-[family-name:var(--font-display)]">
              What rLogin actually does
            </h2>
            <p className="text-white/50 text-lg leading-relaxed">
              No dashboard, no bloat — every setting is explained in the docs,
              and every claim here is backed by them.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="p-6 rounded-2xl border border-white/5 hover:border-white/10 transition-colors"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-white/5 text-brand">
                    {feature.icon}
                  </div>
                  <h3 className="font-semibold text-white">{feature.title}</h3>
                </div>
                <p className="text-white/50 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* migrating */}
      <section className="w-full bg-[#09090b] border-t border-white/5">
        <div className="container mx-auto px-6 py-24 md:py-32">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="space-y-3">
              {[
                "Existing accounts import automatically",
                "Nobody has to register twice",
                "Same jar, same config shape",
              ].map((line) => (
                <div
                  key={line}
                  className="flex items-center gap-3 rounded-lg bg-white/[0.03] border border-white/5 px-4 py-3"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-brand shrink-0" />
                  <span className="font-mono text-sm text-white/60">
                    {line}
                  </span>
                </div>
              ))}
            </div>

            <div>
              <p className="text-sm font-medium text-white/40 mb-6">
                Switching auth plugins
              </p>

              <h2 className="font-extrabold text-[clamp(2rem,5vw,3.5rem)] leading-[1.1] tracking-[-0.03em] text-white mb-6 font-[family-name:var(--font-display)]">
                Bring your <span className="text-brand">accounts</span> with
                you
              </h2>

              <p className="text-white/50 text-lg mb-8 leading-relaxed">
                Moving from another auth plugin? rLogin&apos;s importer reads
                existing accounts in, so nobody is asked to register from
                scratch.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <PyroButton
                  variant="primary"
                  href="/docs/rlogin/features/migrating"
                  isArrow
                >
                  Migration Guide
                </PyroButton>
                <PyroButton variant="quaternary" href="/docs/rlogin/installation">
                  Fresh Install
                </PyroButton>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* open source */}
      <section className="w-full bg-[#09090b] border-t border-white/5">
        <div className="container mx-auto px-6 py-24 md:py-32">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div>
              <p className="text-sm font-medium text-white/40 mb-6">
                Transparent development
              </p>

              <h2 className="font-extrabold text-[clamp(2rem,5vw,3.5rem)] leading-[1.1] tracking-[-0.03em] text-white mb-6 font-[family-name:var(--font-display)]">
                Fully <span className="text-brand">open source</span>
              </h2>

              <p className="text-white/50 text-lg mb-8 leading-relaxed">
                rLogin&apos;s entire codebase is MIT-licensed and public.
                Audit it, build against its API, or fork it for your own
                server.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <PyroButton
                  variant="quaternary"
                  href="https://github.com/pyrelightmc/rlogin"
                  external
                >
                  <GitHubIcon /> View on GitHub
                </PyroButton>
                <PyroButton
                  variant="quaternary"
                  href="https://github.com/pyrelightmc/rlogin/blob/main/LICENSE"
                  external
                >
                  <CodeBracketIcon className="w-5 h-5" /> MIT License
                </PyroButton>
              </div>
            </div>

            <div className="hidden lg:block">
              <pre className="text-sm font-mono text-[13px] leading-relaxed text-white/40">
                <code>
                  <span className="text-purple-400/70">@EventHandler</span>
                  {`
`}
                  <span className="text-purple-400/70">public void</span>
                  {` `}
                  <span className="text-blue-400/70">onAuthenticate</span>
                  {`(`}
                  <span className="text-yellow-300/70">
                    RLoginAuthenticateEvent
                  </span>
                  {` event) {
    `}
                  <span className="text-yellow-300/70">Player</span>
                  {` player = event.`}
                  <span className="text-blue-400/70">player</span>
                  {`();
    `}
                  <span className="text-purple-400/70">if</span>
                  {` (event.`}
                  <span className="text-blue-400/70">
                    isFirstServerOfSession
                  </span>
                  {`()) {
        player.`}
                  <span className="text-blue-400/70">sendMessage</span>
                  {`(`}
                  <span className="text-green-400/70">
                    &quot;Welcome back!&quot;
                  </span>
                  {`);
    }
}`}
                </code>
              </pre>
            </div>
          </div>
        </div>
      </section>

      {/* cta */}
      <section className="w-full bg-[#09090b] border-t border-white/5">
        <div className="container mx-auto px-6 py-24 md:py-32">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-extrabold text-[clamp(2rem,5vw,3.5rem)] leading-[1.1] tracking-[-0.03em] text-white mb-6 font-[family-name:var(--font-display)]">
              Ready to get started?
            </h2>
            <p className="text-white/50 text-lg mb-10 leading-relaxed">
              Drop the jar in <code className="text-brand">plugins/</code>,
              read the docs, and it explains itself from the console up.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <PyroButton
                variant="primary"
                size="large"
                href="/docs/rlogin"
                isArrow
              >
                <BookOpenIcon className="w-5 h-5" /> Read the Docs
              </PyroButton>
              <PyroButton
                variant="quaternary"
                size="large"
                href="https://github.com/pyrelightmc/rlogin"
                external
              >
                <GitHubIcon /> View Source
              </PyroButton>
            </div>
          </div>
        </div>
      </section>

      {/* footer */}
      <footer className="w-full bg-[#09090b] border-t border-white/5">
        <div className="container mx-auto px-6 py-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/pyrelight-logo.svg"
                alt="Pyrelight logo"
                className="w-6 h-6"
              />
              <span className="text-white/40 text-sm">
                © {new Date().getFullYear()} Pyrelight.
              </span>
            </div>

            <div className="flex items-center gap-6">
              <a
                href="/docs/rlogin"
                className="text-white/40 hover:text-brand text-sm transition-colors"
              >
                Documentation
              </a>
              <a
                href="https://discord.gg/5tuSrNRk3a"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/40 hover:text-brand text-sm transition-colors"
              >
                Discord
              </a>
              <a
                href="https://github.com/pyrelightmc"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/40 hover:text-brand text-sm transition-colors"
              >
                GitHub
              </a>
              <a
                href="https://github.com/pyrelightmc/rlogin/blob/main/LICENSE"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/40 hover:text-brand text-sm transition-colors"
              >
                License
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Page;
