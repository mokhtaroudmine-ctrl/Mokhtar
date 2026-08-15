import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Premium online shop",
    description:
          "PLACEHOLDER TO REPLACE: SEO description of the RITAMIRA shop in English.",
    alternates: {
          canonical: "/en",
          languages: {
                  fr: "/fr",
                  en: "/en",
          },
    },
    openGraph: {
          title: "RITAMIRA",
          description:
                  "PLACEHOLDER TO REPLACE: SEO description of the RITAMIRA shop in English.",
          url: "/en",
          locale: "en_US",
    },
};

import Link from "next/link";
import { createElement as h } from "react";

const categories = [
  { name: "New In", href: "/en/shop/new-in" },
  { name: "Jewelry", href: "/en/shop/jewelry" },
  { name: "Accessories", href: "/en/shop/accessories" },
  { name: "Limited Edition", href: "/en/shop/limited-edition" },
  ];

const products = [
  { id: "1", name: "PLACEHOLDER Product 1", price: "EUR 49.00", badge: "New" },
  { id: "2", name: "PLACEHOLDER Product 2", price: "EUR 89.00", badge: "Sale" },
  { id: "3", name: "PLACEHOLDER Product 3", price: "EUR 129.00", badge: "" },
  { id: "4", name: "PLACEHOLDER Product 4", price: "EUR 59.00", badge: "" },
  ];

function Header() {
    return h(
          "header",
      { className: "sticky top-0 z-50 border-b border-sand bg-cream/95 backdrop-blur" },
          h(
                  "div",
            { className: "mx-auto flex max-w-7xl items-center justify-between px-6 py-4" },
                  h(Link, { href: "/en", className: "flex items-center" }, h("img", { src: "/logo.png", alt: "RITAMIRA", className: "h-14 w-auto rounded" })),
                  h(
                            "nav",
                    { className: "hidden gap-8 text-sm uppercase tracking-wider md:flex" },
                            h(Link, { href: "/en/shop" }, "Shop"),
                            h(Link, { href: "/en/collections" }, "Collections"),
                            h(Link, { href: "/en/about" }, "About"),
                            h(Link, { href: "/en/contact" }, "Contact")
                          ),
                  h(
                            "div",
                    { className: "flex items-center gap-5 text-sm" },
                            h("button", { "aria-label": "Search", className: "hover:text-gold" }, "Search"),
                            h(Link, { href: "/en/account", "aria-label": "My account", className: "hover:text-gold" }, "Account"),
                            h(Link, { href: "/en/wishlist", "aria-label": "Wishlist", className: "hover:text-gold" }, "Wishlist"),
                            h(Link, { href: "/en/cart", "aria-label": "Cart", className: "hover:text-gold" }, "Cart (0)"),
                            h(Link, { href: "/fr", className: "font-medium text-clay hover:text-gold" }, "FR")
                          )
                )
        );
}

function Hero() {
    return h(
          "section",
      { className: "mx-auto grid max-w-7xl items-center gap-10 px-6 py-20 md:grid-cols-2" },
          h(
                  "div",
                  null,
                  h("p", { className: "mb-4 text-sm uppercase tracking-[0.2em] text-gold" }, "2026 Collection"),
                  h(
                            "h1",
                    { className: "font-display text-5xl leading-tight md:text-6xl" },
                            "Timeless elegance, thoughtfully crafted"
                          ),
                  h(
                            "p",
                    { className: "mt-6 max-w-md text-clay" },
                            "PLACEHOLDER TO REPLACE: RITAMIRA value proposition to be confirmed by the client."
                          ),
                  h(
                            Link,
                    {
                                href: "/en/shop",
                                className: "mt-8 inline-block rounded-full bg-ink px-8 py-3 text-cream transition hover:bg-gold",
                    },
                            "Discover the shop"
                          )
                ),
          h(
                  "div",
            { className: "flex aspect-[4/5] w-full items-center justify-center rounded-2xl bg-sand text-clay" },
                  "Ambiance image - PLACEHOLDER"
                )
        );
}

function Categories() {
    return h(
          "section",
      { className: "mx-auto max-w-7xl px-6 py-16" },
          h("h2", { className: "mb-8 font-display text-3xl" }, "Categories"),
          h(
                  "div",
            { className: "grid gap-6 sm:grid-cols-2 lg:grid-cols-4" },
                  categories.map((category) =>
                            h(
                                        Link,
                              {
                                            key: category.href,
                                            href: category.href,
                                            className: "group flex h-40 items-end rounded-xl bg-sand p-5 transition hover:bg-gold/30",
                              },
                                        h("span", { className: "font-display text-lg" }, category.name)
                                      )
                                       )
                )
        );
}

function Products() {
    return h(
          "section",
      { className: "mx-auto max-w-7xl px-6 py-16" },
          h(
                  "div",
            { className: "mb-8 flex items-end justify-between" },
                  h("h2", { className: "font-display text-3xl" }, "Popular products"),
                  h(
                            Link,
                    { href: "/en/shop", className: "text-sm uppercase tracking-wider text-clay hover:text-gold" },
                            "View all"
                          )
                ),
          h(
                  "div",
            { className: "grid gap-6 sm:grid-cols-2 lg:grid-cols-4" },
                  products.map((product) =>
                            h(
                                        "div",
                              { key: product.id, className: "group rounded-xl border border-sand p-4" },
                                        h(
                                                      "div",
                                          {
                                                          className:
                                                                            "relative mb-4 flex aspect-square items-center justify-center rounded-lg bg-sand text-xs text-clay",
                                          },
                                                      product.badge
                                                        ? h(
                                                                            "span",
                                                          {
                                                                                className:
                                                                                                        "absolute left-2 top-2 rounded-full bg-ink px-3 py-1 text-[10px] uppercase text-cream",
                                                          },
                                                                            product.badge
                                                                          )
                                                        : null,
                                                      "Product image - PLACEHOLDER"
                                                    ),
                                        h("h3", { className: "font-medium" }, product.name),
                                        h("p", { className: "mt-1 text-clay" }, product.price),
                                        h(
                                                      "div",
                                          { className: "mt-3 flex gap-2" },
                                                      h(
                                                                      "button",
                                                        { className: "flex-1 rounded-full bg-ink px-4 py-2 text-sm text-cream transition hover:bg-gold" },
                                                                      "Add to cart"
                                                                    ),
                                                      h(
                                                                      "button",
                                                        {
                                                                          "aria-label": "Add to wishlist",
                                                                          className: "rounded-full border border-sand px-3 py-2 text-sm hover:border-gold",
                                                        },
                                                                      "Wishlist"
                                                                    )
                                                    )
                                      )
                                     )
                )
        );
}

function Collections() {
    return h(
          "section",
      { className: "mx-auto max-w-7xl px-6 py-16" },
          h(
                  "div",
            { className: "grid gap-6 md:grid-cols-2" },
                  h(
                            "div",
                    { className: "flex h-64 flex-col justify-end rounded-2xl bg-ink p-8 text-cream" },
                            h("p", { className: "text-sm uppercase tracking-widest text-gold" }, "Collection"),
                            h("h3", { className: "mt-2 font-display text-2xl" }, "PLACEHOLDER Collection name")
                          ),
                  h(
                            "div",
                    { className: "flex h-64 flex-col justify-end rounded-2xl bg-clay p-8 text-cream" },
                            h("p", { className: "text-sm uppercase tracking-widest text-gold" }, "Collection"),
                            h("h3", { className: "mt-2 font-display text-2xl" }, "PLACEHOLDER Collection name")
                          )
                )
        );
}

function WhyUs() {
    const items = [
          "PLACEHOLDER Commitment 1",
          "PLACEHOLDER Commitment 2",
          "PLACEHOLDER Commitment 3",
        ];
    return h(
          "section",
      { className: "mx-auto max-w-7xl px-6 py-16" },
          h("h2", { className: "mb-8 font-display text-3xl" }, "Why RITAMIRA"),
          h(
                  "div",
            { className: "grid gap-8 sm:grid-cols-3" },
                  items.map((item, index) =>
                            h(
                                        "div",
                              { key: index },
                                        h("h3", { className: "font-medium" }, item),
                                        h("p", { className: "mt-2 text-clay" }, "Text to be provided by the client.")
                                      )
                                  )
                )
        );
}

function Newsletter() {
    return h(
          "section",
      { className: "mx-auto max-w-3xl px-6 py-16 text-center" },
          h("h2", { className: "font-display text-3xl" }, "Stay informed"),
          h("p", { className: "mt-3 text-clay" }, "Sign up for the RITAMIRA newsletter."),
          h(
                  "form",
            { className: "mt-6 flex flex-col gap-3 sm:flex-row" },
                  h("input", {
                            type: "email",
                            required: true,
                            placeholder: "Your email address",
                            className: "flex-1 rounded-full border border-sand bg-cream px-5 py-3 outline-none focus:border-gold",
                  }),
                  h(
                            "button",
                    { type: "submit", className: "rounded-full bg-ink px-6 py-3 text-cream hover:bg-gold" },
                            "Subscribe"
                          )
                )
        );
}

function Footer() {
    return h(
          "footer",
      { className: "border-t border-sand bg-ink text-cream" },
          h(
                  "div",
            { className: "mx-auto grid max-w-7xl gap-8 px-6 py-16 sm:grid-cols-2 lg:grid-cols-4" },
                  h(
                            "div",
                            null,
                            h("p", { className: "font-display text-xl" }, "RITAMIRA"),
                            h("p", { className: "mt-3 text-sm text-sand" }, "PLACEHOLDER TO REPLACE - address, phone, email.")
                          ),
                  h(
                            "div",
                            null,
                            h("p", { className: "mb-3 text-sm uppercase tracking-wider text-gold" }, "Shop"),
                            h(
                                        "ul",
                              { className: "space-y-2 text-sm" },
                                        h("li", null, h(Link, { href: "/en/shop" }, "All products")),
                                        h("li", null, h(Link, { href: "/en/collections" }, "Collections")),
                                        h("li", null, h(Link, { href: "/en/wishlist" }, "Wishlist"))
                                      )
                          ),
                  h(
                            "div",
                            null,
                            h("p", { className: "mb-3 text-sm uppercase tracking-wider text-gold" }, "Customer service"),
                            h(
                                        "ul",
                              { className: "space-y-2 text-sm" },
                                        h("li", null, h(Link, { href: "/en/contact" }, "Contact")),
                                        h("li", null, h(Link, { href: "/en/faq" }, "FAQ")),
                                        h("li", null, h(Link, { href: "/en/shipping" }, "Shipping")),
                                        h("li", null, h(Link, { href: "/en/returns" }, "Returns"))
                                      )
                          ),
                  h(
                            "div",
                            null,
                            h("p", { className: "mb-3 text-sm uppercase tracking-wider text-gold" }, "Legal"),
                            h(
                                        "ul",
                              { className: "space-y-2 text-sm" },
                                        h("li", null, h(Link, { href: "/en/legal-notice" }, "Legal notice")),
                                        h("li", null, h(Link, { href: "/en/privacy" }, "Privacy policy")),
                                        h("li", null, h(Link, { href: "/en/terms" }, "Terms of sale")),
                                        h("li", null, h(Link, { href: "/en/cookies" }, "Cookies"))
                                      )
                          )
                ),
          h(
                  "div",
            { className: "border-t border-sand/20 px-6 py-6 text-center text-xs text-sand" },
                  "(c) 2026 RITAMIRA. All rights reserved."
                )
        );
}

export default function HomeEN() {
    return h(
          "main",
      { className: "min-h-screen bg-cream text-ink font-body" },
          h(Header, null),
          h(Hero, null),
          h(Categories, null),
          h(Products, null),
          h(Collections, null),
          h(WhyUs, null),
          h(Newsletter, null),
          h(Footer, null)
        );
}
