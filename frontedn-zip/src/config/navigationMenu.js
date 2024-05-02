export const navigation = {
  categories: [
    {
      id: "women",
      name: "shop",
      featured: [
        {
          name: "New Arrivals",
          href: "/",
          imageSrc:
            "https://tailwindui.com/img/ecommerce-images/mega-menu-category-01.jpg",
          imageAlt:
            "Models sitting back to back, wearing Basic Tee in black and bone.",
        },
        {
          name: "Basic Tees",
          href: "/",
          imageSrc:
            "https://tailwindui.com/img/ecommerce-images/mega-menu-category-02.jpg",
          imageAlt:
            "Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees.",
        },
      ],
      sections: [
        {
          id: "clothing",
          name: "Clothing",
          items: [
            // { name: 'Women Jeans', id: 'women_jeans' },
            // { name: 'Sweaters', id: 'sweater' },
            { name: "Sarees", id: "saree" },
            { name: "Kanchipuram silk", id: "Kanchipuram silk" },
            { name: "Banarasi silk", id: "Banarasi silk" },
            { name: "Soft silk", id: "Soft silk" },
            { name: "Fancy silk", id: "Fancy silk" },
            { name: "Pochampally silk", id: "Pochampally silk" },
          ],
        },
      ],
    },
  ],
  pages: [
    { name: "Contact", id: "/contact", href: "/contact" },
    { name: "About", id: "/about", href: "/about" },
  ],
};
