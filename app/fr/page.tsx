import Link from "next/link";
import { createElement as h } from "react";

const categories = [
  { name: "Nouveautes", href: "/fr/boutique/nouveautes" },
  { name: "Bijoux", href: "/fr/boutique/bijoux" },
  { name: "Accessoires", href: "/fr/boutique/accessoires" },
  { name: "Edition limitee", href: "/fr/boutique/edition-limitee" },
  ];

const produits = [
  { id: "1", nom: "PLACEHOLDER Produit 1", prix: "49,00 EUR", badge: "Nouveau" },
  { id: "2", nom: "PLACEHOLDER Produit 2", prix: "89,00 EUR", badge: "Promo" },
  { id: "3", nom: "PLACEHOLDER Produit 3", prix: "129,00 EUR", badge: "" },
  { id: "4", nom: "PLACEHOLDER Produit 4", prix: "59,00 EUR", badge: "" },
  ];
function Header() {
    return h(
          "header",
      { className: "sticky top-0 z-50 border-b border-sand bg-cream/95 backdrop-blur" },
          h(
                  "div",
            { className: "mx-auto flex max-w-7xl items-center justify-between px-6 py-4" },
                  h(Link, { href: "/fr", className: "font-display text-2xl tracking-wide" }, "RITAMIRA"),
                  h(
                            "nav",
                    { className: "hidden gap-8 text-sm uppercase tracking-wider md:flex" },
                            h(Link, { href: "/fr/boutique" }, "Boutique"),
                            h(Link, { href: "/fr/collections" }, "Collections"),
                            h(Link, { href: "/fr/a-propos" }, "A propos"),
                            h(Link, { href: "/fr/contact" }, "Contact")
                          ),
                  h(
                            "div",
                    { className: "flex items-center gap-5 text-sm" },
                            h("button", { "aria-label": "Rechercher", className: "hover:text-gold" }, "Recherche"),
                            h(Link, { href: "/fr/compte", "aria-label": "Mon compte", className: "hover:text-gold" }, "Compte"),
                            h(Link, { href: "/fr/wishlist", "aria-label": "Liste de souhaits", className: "hover:text-gold" }, "Wishlist"),
                            h(Link, { href: "/fr/panier", "aria-label": "Panier", className: "hover:text-gold" }, "Panier (0)"),
                            h(Link, { href: "/en", className: "font-medium text-clay hover:text-gold" }, "EN")
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
                  h("p", { className: "mb-4 text-sm uppercase tracking-[0.2em] text-gold" }, "Collection 2026"),
                  h(
                            "h1",
                    { className: "font-display text-5xl leading-tight md:text-6xl" },
                            "L'elegance intemporelle, faconnee avec soin"
                          ),
                  h(
                            "p",
                    { className: "mt-6 max-w-md text-clay" },
                            "PLACEHOLDER A REMPLACER : proposition de valeur RITAMIRA a confirmer par le client."
                          ),
                  h(
                            Link,
                    {
                                href: "/fr/boutique",
                                className: "mt-8 inline-block rounded-full bg-ink px-8 py-3 text-cream transition hover:bg-gold",
                    },
                            "Decouvrir la boutique"
                          )
                ),
          h(
                  "div",
            { className: "flex aspect-[4/5] w-full items-center justify-center rounded-2xl bg-sand text-clay" },
                  "Image d'ambiance - PLACEHOLDER"
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
                  categories.map((categorie) =>
                            h(
                                        Link,
                              {
                                            key: categorie.href,
                                            href: categorie.href,
                                            className: "group flex h-40 items-end rounded-xl bg-sand p-5 transition hover:bg-gold/30",
                              },
                                        h("span", { className: "font-display text-lg" }, categorie.name)
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
                  h("h2", { className: "font-display text-3xl" }, "Produits populaires"),
                  h(
                            Link,
                    { href: "/fr/boutique", className: "text-sm uppercase tracking-wider text-clay hover:text-gold" },
                            "Voir tout"
                          )
                ),
          h(
                  "div",
            { className: "grid gap-6 sm:grid-cols-2 lg:grid-cols-4" },
                  produits.map((produit) =>
                            h(
                                        "div",
                              { key: produit.id, className: "group rounded-xl border border-sand p-4" },
                                        h(
                                                      "div",
                                          {
                                                          className:
                                                                            "relative mb-4 flex aspect-square items-center justify-center rounded-lg bg-sand text-xs text-clay",
                                          },
                                                      produit.badge
                                                        ? h(
                                                                            "span",
                                                          {
                                                                                className:
                                                                                                        "absolute left-2 top-2 rounded-full bg-ink px-3 py-1 text-[10px] uppercase text-cream",
                                                          },
                                                                            produit.badge
                                                                          )
                                                        : null,
                                                      "Image produit - PLACEHOLDER"
                                                    ),
                                        h("h3", { className: "font-medium" }, produit.nom),
                                        h("p", { className: "mt-1 text-clay" }, produit.prix),
                                        h(
                                                      "div",
                                          { className: "mt-3 flex gap-2" },
                                                      h(
                                                                      "button",
                                                        { className: "flex-1 rounded-full bg-ink px-4 py-2 text-sm text-cream transition hover:bg-gold" },
                                                                      "Ajouter au panier"
                                                                    ),
                                                      h(
                                                                      "button",
                                                        {
                                                                          "aria-label": "Ajouter a la liste de souhaits",
                                                                          className: "rounded-full border border-sand px-3 py-2 text-sm hover:border-gold",
                                                        },
                                                                      "Favoris"
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
                            h("h3", { className: "mt-2 font-display text-2xl" }, "PLACEHOLDER Nom de collection")
                          ),
                  h(
                            "div",
                    { className: "flex h-64 flex-col justify-end rounded-2xl bg-clay p-8 text-cream" },
                            h("p", { className: "text-sm uppercase tracking-widest text-gold" }, "Collection"),
                            h("h3", { className: "mt-2 font-display text-2xl" }, "PLACEHOLDER Nom de collection")
                          )
                )
        );
}

function WhyUs() {
    const items = [
          "PLACEHOLDER Engagement 1",
          "PLACEHOLDER Engagement 2",
          "PLACEHOLDER Engagement 3",
        ];
    return h(
          "section",
      { className: "mx-auto max-w-7xl px-6 py-16" },
          h("h2", { className: "mb-8 font-display text-3xl" }, "Pourquoi RITAMIRA"),
          h(
                  "div",
            { className: "grid gap-8 sm:grid-cols-3" },
                  items.map((item, index) =>
                            h(
                                        "div",
                              { key: index },
                                        h("h3", { className: "font-medium" }, item),
                                        h("p", { className: "mt-2 text-clay" }, "Texte a fournir par le client.")
                                      )
                                  )
                )
        );
}

function Newsletter() {
    return h(
          "section",
      { className: "mx-auto max-w-3xl px-6 py-16 text-center" },
          h("h2", { className: "font-display text-3xl" }, "Restez informe"),
          h("p", { className: "mt-3 text-clay" }, "Inscrivez-vous a la newsletter RITAMIRA."),
          h(
                  "form",
            { className: "mt-6 flex flex-col gap-3 sm:flex-row" },
                  h("input", {
                            type: "email",
                            required: true,
                            placeholder: "Votre adresse email",
                            className: "flex-1 rounded-full border border-sand bg-cream px-5 py-3 outline-none focus:border-gold",
                  }),
                  h(
                            "button",
                    { type: "submit", className: "rounded-full bg-ink px-6 py-3 text-cream hover:bg-gold" },
                            "S'inscrire"
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
                            h("p", { className: "mt-3 text-sm text-sand" }, "PLACEHOLDER A REMPLACER - adresse, telephone, email.")
                          ),
                  h(
                            "div",
                            null,
                            h("p", { className: "mb-3 text-sm uppercase tracking-wider text-gold" }, "Boutique"),
                            h(
                                        "ul",
                              { className: "space-y-2 text-sm" },
                                        h("li", null, h(Link, { href: "/fr/boutique" }, "Tous les produits")),
                                        h("li", null, h(Link, { href: "/fr/collections" }, "Collections")),
                                        h("li", null, h(Link, { href: "/fr/wishlist" }, "Liste de souhaits"))
                                      )
                          ),
                  h(
                            "div",
                            null,
                            h("p", { className: "mb-3 text-sm uppercase tracking-wider text-gold" }, "Service client"),
                            h(
                                        "ul",
                              { className: "space-y-2 text-sm" },
                                        h("li", null, h(Link, { href: "/fr/contact" }, "Contact")),
                                        h("li", null, h(Link, { href: "/fr/faq" }, "FAQ")),
                                        h("li", null, h(Link, { href: "/fr/livraison" }, "Livraison")),
                                        h("li", null, h(Link, { href: "/fr/retours" }, "Retours"))
                                      )
                          ),
                  h(
                            "div",
                            null,
                            h("p", { className: "mb-3 text-sm uppercase tracking-wider text-gold" }, "Informations legales"),
                            h(
                                        "ul",
                              { className: "space-y-2 text-sm" },
                                        h("li", null, h(Link, { href: "/fr/mentions-legales" }, "Mentions legales")),
                                        h("li", null, h(Link, { href: "/fr/confidentialite" }, "Confidentialite")),
                                        h("li", null, h(Link, { href: "/fr/cgv" }, "CGV")),
                                        h("li", null, h(Link, { href: "/fr/cookies" }, "Cookies"))
                                      )
                          )
                ),
          h(
                  "div",
            { className: "border-t border-sand/20 px-6 py-6 text-center text-xs text-sand" },
                  "(c) 2026 RITAMIRA. Tous droits reserves."
                )
        );
}

export default function AccueilFR() {
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
