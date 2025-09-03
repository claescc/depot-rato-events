import { useTranslation } from "react-i18next";
import warningIcon from "../../assets/images/icons8-warning-water-color-96.png";
import addressIcon from "../../assets/images/icons8-address-parakeet-line-96.png";
import mailIcon from "../../assets/images/icons8-mail-pastel-glyph-96.png";
import depotErfgoed from "../../assets/images/DepotErfgoed.jpg";

export default function MuseumDisclaimer() {
    const { t } = useTranslation();

    return (
        <section
            role="alert"
            aria-live="polite"
            className="museum-disclaimer"
        >
            <div className="museum-disclaimer-content">
                <img src={warningIcon} alt="Warning icon" className="museum-disclaimer-icon" />
                <div className="museum-disclaimer-body">
                    <div className="dre-title museum-disclaimer-title">{t("disclaimer.museum")}</div>
                    <div className="dre-aligna museum-disclaimer-text">{t("disclaimer.museumtxt")}</div>
                    <div className="dre-aligna">
                        <a
                            href="https://www.mechelen.be/depot-rato"
                            target="_blank"
                            rel="noreferrer"
                            className="museum-disclaimer-link"
                        >
                            {t("disclaimer.museumlink")}
                        </a>
                    </div>
                    <div className="dre-aligna museum-disclaimer-text flex flex-col gap-2">
                        <div className="flex items-center gap-1">
                            <img src={addressIcon} alt="Address icon" className="h-5 w-5" />
                            Leuvensesteenweg 476, 2800 Mechelen
                        </div>
                        <a
                            href="mailto:depotrato@mechelen.be"
                            className="museum-disclaimer-link flex items-center gap-1"
                        >
                            <img src={mailIcon} alt="Mail icon" className="h-5 w-5" />
                            depotrato@mechelen.be
                        </a>
                    </div>
                </div>
                <div className="museum-disclaimer-image">
                    <img src={depotErfgoed} alt="Depot Erfgoed" className="h-full w-full object-cover rounded-lg" />
                </div>
            </div>

            {/* Dismiss button … */}
        </section >
    );
}