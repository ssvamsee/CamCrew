import { FaWhatsapp } from "react-icons/fa";

function WhatsAppButton() {
    return (
        <a
            className="whatsapp-button"
            href="https://wa.me/919885473939?text=Hi%2C%20I%27m%20interested%20in%20your%20photography%20services."
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat with us on WhatsApp"
        >
            <FaWhatsapp className="whatsapp-button--icon" aria-hidden="true" />
        </a>
    );
}

export default WhatsAppButton;