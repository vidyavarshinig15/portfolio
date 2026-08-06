import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Mentions Légales - Vidyavarshini G",
  description: "Mentions légales et informations légales du site de Vidyavarshini G",
};

export default function MentionsLegales() {
  return (
    <main className="min-h-screen bg-white dark:bg-[#151515] flex flex-col">
      <Navbar />

      <div className="container mx-auto px-4 py-25 max-w-4xl flex-grow">
        <h1 className="text-4xl font-bold mb-8 text-foreground">
          Mentions Légales
        </h1>

        <div className="prose prose-neutral dark:prose-invert max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">1. Éditeur du site</h2>
            <p>
              Ce site est édité par : <strong>Vidyavarshini G</strong>
              <br />
              Adresse : <strong>Bangalore, India</strong>
              <br />
              Email :{" "}
              <strong>
                <a
                  href="mailto:vidyavarshinig15@gmail.com"
                  className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors"
                >
                  vidyavarshinig15@gmail.com
                </a>
              </strong>
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">2. Hébergement</h2>
            <p>
              Ce site est hébergé par : <strong>Vercel Inc.</strong>
              <br />
              340 S Lemon Ave #4133 Walnut, CA 91789, États-Unis
              <br />
              Téléphone : (559) 288-7060
              <br />
              Site web :{" "}
              <a
                href="https://vercel.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white underline underline-offset-2 transition-colors"
              >
                https://vercel.com
              </a>
              <br />
              Email :{" "}
              <a
                href="mailto:privacy@vercel.com"
                className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white underline underline-offset-2 transition-colors"
              >
                privacy@vercel.com
              </a>
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">
              3. Propriété intellectuelle
            </h2>
            <p>
              L&apos;ensemble des éléments du site (textes, images, graphismes,
              logos, etc.) sont, sauf mention contraire, la propriété exclusive
              de Vidyavarshini G. <br />
              Toute reproduction, modification, distribution ou utilisation,
              totale ou partielle, de ces éléments sans autorisation écrite
              préalable est strictement interdite et constitue une violation des
              droits d&apos;auteur. <br />
              Certaines ressources utilisées sur le site (polices, icônes,
              bibliothèques JavaScript) restent la propriété de leurs auteurs
              respectifs et sont utilisées conformément à leurs licenses.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">
              4. Données personnelles
            </h2>
            <p>
              Les informations recueillies via le formulaire de contact sont
              utilisées uniquement pour répondre aux demandes envoyées par
              l&apos;utilisateur. Les données sont conservées pour une durée
              maximale de 3 ans, sauf obligation légale contraire, et ne sont
              jamais revendues à des tiers. Le site utilise Vercel Analytics, un
              service fourni par Vercel Inc., afin de mesurer la fréquentation
              et l&apos;utilisation du site. Les données collectées sont
              anonymisées et ne permettent pas d&apos;identifier directement
              l&apos;utilisateur. Conformément au Règlement Général sur la
              Protection des Données (RGPD), vous disposez d&apos;un droit
              d&apos;accès, de rectification, d&apos;opposition et de
              suppression de vos données personnelles. Pour exercer ce droit,
              vous pouvez envoyer une demande à l&apos;adresse suivante :{" "}
              <a
                href="mailto:vidyavarshinig15@gmail.com"
                className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white underline underline-offset-2 transition-colors"
              >
                vidyavarshinig15@gmail.com
              </a>
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">5. Responsabilité</h2>
            <p>
              L&apos;éditeur du site ne pourra être tenu responsable des erreurs
              ou omissions présentes sur le site, ou de tout problème technique
              rencontré par l&apos;utilisateur. Le site peut contenir des liens
              hypertextes vers d&apos;autres sites internet. L&apos;éditeur
              n&apos;exerce aucun contrôle sur ces sites et décline toute
              responsabilité quant à leurs contenus.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">6. Cookies</h2>
            <p>
              Le site n&apos;utilise que des cookies nécessaires à son bon
              fonctionnement. Aucun cookie de suivi ou de publicité n&apos;est
              utilisé. Vous pouvez désactiver les cookies dans les paramètres de
              votre navigateur, mais cela peut affecter certaines
              fonctionnalités du site.
            </p>
          </section>
        </div>
      </div>
      <Footer />
    </main>
  );
}
