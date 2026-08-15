"use client";

import { createElement as h } from "react";
import { usePathname } from "next/navigation";
import { getProductWhatsAppMessage, getWhatsAppUrl } from "../../lib/whatsapp";

const ICON_PATH =
    "M380.9 97.1C339 55.1 283.2 32 224.1 32c-122.1 0-221.3 99.2-221.3 221.3 0 39.1 10.2 76.3 29.6 109.4L2 480l121.6-31.9c31.7 17.3 67.6 26.5 104.5 26.5h.1c122.1 0 221.3-99.2 221.3-221.3 0-59.1-23.1-114.9-65.1-156.9zM224.1 438.1h-.1c-32.4 0-64.2-8.7-91.9-25.1l-6.6-3.9-68.4 18 18.3-66.7-4.3-6.9c-18-28.6-27.5-61.6-27.5-95.5 0-98.9 80.5-179.4 179.5-179.4 47.9 0 92.9 18.7 126.8 52.6 33.9 33.9 52.5 78.9 52.5 126.8 0 99-80.5 179.5-179.5 179.5zm102.9-134.1c-5.6-2.8-33.2-16.4-38.3-18.3-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.4 18.3-17.7 22-3.3 3.7-6.6 4.2-12.2 1.4-33.3-16.6-55.1-29.6-77-67.1-5.8-10 5.8-9.3 16.6-30.9 1.8-3.7.9-6.9-.6-9.7-1.5-2.8-13.4-32.3-18.4-44.2-4.9-11.8-9.9-10.2-13.6-10.4-3.5-.2-7.5-.2-11.5-.2-4 0-10.5 1.5-16.1 7.4-5.6 5.9-21.5 21-21.5 51.3 0 30.3 22 59.6 25.1 63.7 3.1 4.1 41.9 64 101.6 87.2 50.5 19.6 60.8 15.7 71.8 14.7 11-.9 33.2-13.6 37.9-26.7 4.7-13.1 4.7-24.3 3.3-26.7-1.4-2.4-5.1-3.7-10.7-6.5z";

type WhatsAppProductButtonProps = {
    productName: string;
    productUrl: string;
    variant?: string;
};

export default function WhatsAppProductButton(props: WhatsAppProductButtonProps) {
    const pathname = usePathname();
    const locale = pathname && pathname.startsWith("/en") ? "en" : "fr";
    const message = getProductWhatsAppMessage(
          locale,
          props.productName,
          props.productUrl,
          props.variant
        );
    const url = getWhatsAppUrl(message);
    const label =
          locale === "en"
        ? "Contact us on WhatsApp about this product"
            : "Contacter sur WhatsApp au sujet de ce produit";
    const text = locale === "en" ? "Contact us on WhatsApp" : "Contacter sur WhatsApp";

  return h(
        "a",
    {
            href: url,
            target: "_blank",
            rel: "noopener noreferrer",
            "aria-label": label,
            className:
                      "inline-flex items-center justify-center gap-2 rounded-full border border-[#25D366] px-6 py-3 text-sm font-medium text-[#128C7E] transition hover:bg-[#25D366] hover:text-white",
    },
        h(
                "svg",
          {
                    viewBox: "0 0 448 512",
                    className: "h-4 w-4",
                    fill: "currentColor",
                    "aria-hidden": "true",
                    focusable: "false",
          },
                h("path", { d: ICON_PATH })
              ),
        text
      );
}
