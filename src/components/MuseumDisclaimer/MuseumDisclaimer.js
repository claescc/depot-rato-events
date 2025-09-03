import { useTranslation } from "react-i18next";
import warningIcon from "../../assets/images/icons8-warning-water-color-96.png";

export default function MuseumDisclaimer() {
    const { t } = useTranslation();

    // ...
    return (
        <section
            role="alert"
            aria-live="polite"
            className="museum-disclaimer"
        >
            <div className="dre-container museum-disclaimer-content">
                <img src={warningIcon} alt="Warning icon" className="museum-disclaimer-icon" />
                <div>
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
                    <div className="dre-aligna museum-disclaimer-text">
                        Adres: Leuvensesteenweg 476, 2800 Mechelen<br />
                        E-mail: <a href="mailto:depotrato@mechelen.be" className="museum-disclaimer-link">depotrato@mechelen.be</a>
                    </div>
                </div>
            </div>

            {/* Dismiss button … */}
        </section >
    );
}