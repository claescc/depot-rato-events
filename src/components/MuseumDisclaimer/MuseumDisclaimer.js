import { useTranslation } from "react-i18next";

export default function MuseumDisclaimer() {
    const { t } = useTranslation();

    // ...
    return (
        <section
            role="alert"
            aria-live="polite"
            className="mx-auto mb-8 w-full max-w-3xl px-4 not-prose"
        >
            <div className="flex items-start gap-3 rounded-xl border border-amber-300 bg-amber-50/70 p-4 shadow-sm">
                {/* Icon … */}

                <div className="dre-container">
                    <div className="dre-title">{t("disclaimer.museum")}</div>
                    <div className="dre-aligna">{t("disclaimer.museumtxt")}</div>
                    <div className="dre-aligna">
                        <a
                            href="https://www.mechelen.be/depot-rato"
                            target="_blank"
                            rel="noreferrer"
                            className="underline underline-offset-2 hover:no-underline focus:outline-none focus:ring-2 focus:ring-amber-400"
                        >
                            {t("disclaimer.museumlink")}
                        </a>

                    </div>
                </div>

                {/* Dismiss button … */}
            </div>


        </section>
    );
}