export const WHATSAPP_NUMBER = "33661128087";

export function getWhatsAppUrl(message: string): string {
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export const WHATSAPP_DEFAULT_MESSAGES: Record<string, string> = {
    fr: "Bonjour RITAMIRA, je souhaiterais obtenir plus d'informations sur vos produits.",
    en: "Hello RITAMIRA, I would like more information about your products.",
};
export function getProductWhatsAppMessage(
    locale: string,
    productName: string,
    productUrl: string,
    variant?: string
  ): string {
    const variantPart = variant ? ` (${variant})` : "";
    if (locale === "en") {
          return `Hello RITAMIRA, I am interested in "${productName}"${variantPart}. Here is the product link: ${productUrl}.`;
    }
    return `Bonjour RITAMIRA, je suis interesse(e) par le produit "${productName}"${variantPart}. Voici le lien : ${productUrl}.`;
}
