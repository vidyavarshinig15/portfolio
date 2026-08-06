import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Politique de Confidentialité - Vidyavarshini G",
  description:
    "Politique de confidentialité et traitement des données personnelles sur votre site.",
};

export default function Confidentialite() {
  return (
    <main className="min-h-screen bg-white dark:bg-[#151515] flex flex-col">
      <Navbar />

      <div className="container mx-auto px-4 py-25 max-w-4xl flex-grow">
        <h1 className="text-4xl font-bold mb-8 text-foreground">
          Politique de Confidentialité
        </h1>

        <div className="prose prose-neutral dark:prose-invert max-w-none">
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
            Dernière mise à jour : 21 octobre 2025
          </p>
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">
              1. Données collectées
            </h2>
            <p>
              Lorsque vous utilisez le formulaire de contact, les informations
              suivantes peuvent être collectées :
            </p>
            <ul className="list-none pl-2 mt-2 space-y-2">
              <li className="before:content-['-'] before:mr-2">
                Nom et prénom
              </li>
              <li className="before:content-['-'] before:mr-2">
                Adresse email
              </li>
              <li className="before:content-['-'] before:mr-2">
                Message envoyé via le formulaire
              </li>
            </ul>
            <p className="mt-4">
              Le site utilise également Vercel Analytics, un service qui
              recueille des données de navigation sous forme anonymisée
              (statistiques de visite, pages consultées, temps de chargement,
              etc.). Ces données ne permettent pas d&apos;identifier directement
              l&apos;utilisateur.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">
              2. Finalité de la collecte
            </h2>
            <p>
              Les données collectées via le formulaire sont utilisées uniquement
              pour :
            </p>
            <ul className="list-none pl-2 mt-2 space-y-2">
              <li className="before:content-['-'] before:mr-2">
                Répondre aux demandes envoyées par l&apos;utilisateur.
              </li>
              <li className="before:content-['-'] before:mr-2">
                Assurer le suivi des échanges si nécessaire.
              </li>
            </ul>
            <p className="mt-4">
              Les donneés issues des outils d&apos;analyse sont utilisées
              uniquement pour améliorer le fonctionnement et l&apos;expérience
              utilisateur du site.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">
              3. Base légale du traitement
            </h2>
            <p>Le traitement des données repose sur :</p>
            <ul className="list-none pl-2 mt-2 space-y-2">
              <li className="before:content-['-'] before:mr-2">
                L&apos;intérêt légitime de l&apos;éditeur du site pour répondre
                aux demandes et assurer le suivi de ses échanges.
              </li>
              <li className="before:content-['-'] before:mr-2">
                Le consentement explicite de l&apos;utilisateur pour
                l&apos;envoi d&apos;informations via le formulaire.
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">
              4. Durée de conservation
            </h2>
            <ul className="list-none pl-2 mt-2 space-y-2">
              <li className="before:content-['-'] before:mr-2">
                Données issues du formulaire de contact : conservées pour une
                durée maximale de 3 ans à compter du dernier échange.
              </li>
              <li className="before:content-['-'] before:mr-2">
                Données issues des statistiques anonymisées (Vercel Analytics) :
                conservées conformément à la politique de conservation de Vercel
                Inc.
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">
              5. Destinataires des données
            </h2>
            <p>
              Les données sont destinées uniquement à l&apos;éditeur du site,
              Vidyavarshini G, et ne sont jamais transmises ni revendues à des
              tiers. Certaines données de navigation anonymisées peuvent être
              traitées par Vercel Inc., en sa qualité d&apos;hébergement et
              d&apos;analyse.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">
              6. Droits des utilisateurs
            </h2>
            <p>
              Conformément au Règlement Général sur la Protection des Données
              (RGPD), vous disposez des droits suivants :
            </p>
            <ul className="list-none pl-2 mt-2 space-y-2">
              <li className="before:content-['-'] before:mr-2">
                Droit d&apos;accès à vos données
              </li>
              <li className="before:content-['-'] before:mr-2">
                Droit de rectification
              </li>
              <li className="before:content-['-'] before:mr-2">
                Droit à l&apos;effacement (&quot;droit à l&apos;oubli&quot;)
              </li>
              <li className="before:content-['-'] before:mr-2">
                Droit d&apos;opposition
              </li>
              <li className="before:content-['-'] before:mr-2">
                Droit de limitation du traitement
              </li>
              <li className="before:content-['-'] before:mr-2">
                Droit à la portabilité des données (si applicable)
              </li>
            </ul>
            <p className="mt-4">
              Pour exercer vos droits, vous pouvez envoyer une demande à
              l&apos;adresse suivante :{" "}
              <a
                href="mailto:vidyavarshinig15@gmail.com"
                className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white underline underline-offset-2 transition-colors"
              >
                vidyavarshinig15@gmail.com
              </a>
              . Si vous estimez, après avoir contacté l&apos;éditeur, que vos
              droits ne sont pas respectés, vous pouvez introduire une
              réclamation auprès de la CNIL ({""}
              <a
                href="https://www.cnil.fr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white underline underline-offset-2 transition-colors"
              >
                www.cnil.fr
              </a>
              )
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">
              7. Sécurité des données
            </h2>
            <p>
              L&apos;éditeur met en œuvre les mesures techniques et
              organisationnelles appropriées pour protéger les données
              personnelles contre toute perte, accès non autorisé, divulgation
              ou altération.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">
              8. Modifications de la politique
            </h2>
            <p>
              La présente politique de confidentialité peut être mise à jour à
              tout moment afin de s&apos;adapter aux évolutions légales ou
              techniques. La date de dernière mise à jour est indiquée en haut
              de page.
            </p>
          </section>
        </div>
      </div>
      <Footer />
    </main>
  );
}
