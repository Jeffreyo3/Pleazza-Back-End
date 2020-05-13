exports.seed = function (knex, Promise) {
  return knex("locations").insert([
    {
      id: 1,
      username: "pizzahut",
      email: "billy@pizzahut.com",
      password: "$2a$10$xz0c9mw.93dILe4riz9YXeDz7wLOot57zovPBbf01CEqfCiWXQprS",
      first_name: "Azzip",
      last_name: "Tuh",
      business_name: "Pizza Hut",
      latitude: 29.201598971549644,
      longitude: -98.66165965560205,
      address: "123 pizza lane",
      website_url: "www.pizzahut.com",
      official_description: "The Hutt of Pizza",
      thumbnail_image: "https://res.cloudinary.com/plza/image/upload/v1589334585/pizzaIcon_vt9vq9.png",
      street_view_image: "google.com/1.jpg",
      order_service: "Doordash",
      store_bio: "We made this place and that place makes pizza",
      dietary_offerings: ["vegan"],
    },
    {
      id: 2,
      username: "dominoes",
      email: "betty@dominoes.com",
      password: "$2a$10$xz0c9mw.93dILe4riz9YXeDz7wLOot57zovPBbf01CEqfCiWXQprS",
      first_name: "Noes",
      last_name: "Dom",
      business_name: "Dominoes Pizza",
      latitude: 40.70501507088636,
      longitude: -73.93361652500724,
      address: "13 pizza rd",
      website_url: "www.dominoes.com",
      official_description: "The Old Boardgame of Pizza",
      thumbnail_image: "https://res.cloudinary.com/plza/image/upload/v1589334585/pizzaIcon_vt9vq9.png",
      street_view_image: "google.com/2.jpg",
      order_service: "We Deliver!",
      store_bio: "Theres pizza here and you can eat some",
      dietary_offerings: ["Even the cheese is meat"],
    },
    {
      id: 3,
      username: "bigpapa",
      email: "jacob@papajohns.com",
      password: "$2a$10$xz0c9mw.93dILe4riz9YXeDz7wLOot57zovPBbf01CEqfCiWXQprS",
      first_name: "Papa",
      last_name: "John",
      business_name: "Papa Johns",
      latitude: 29.501598971549644,
      longitude: -98.66165965560205,
      address: "30 pizza st",
      website_url: "www.papajohns.com",
      official_description: "The Papa of Pizza",
      thumbnail_image:
        "https://res.cloudinary.com/plza/image/upload/v1589334585/pizzaIcon_vt9vq9.png",
      street_view_image: "google.com/3.jpg",
      order_service: "Waitr",
      store_bio: "We said some racist stuff but we still got some pizza here",
      dietary_offerings: ["vegetarian"],
    },
    {
      id: 4,
      username: "pizzahut2",
      email: "bill2@pizzahut.com",
      password: "$2a$10$xz0c9mw.93dILe4riz9YXeDz7wLOot57zovPBbf01CEqfCiWXQprS",
      first_name: "Azzip",
      last_name: "Tuh",
      business_name: "Pizza Hut",
      latitude: 22.201598971549644,
      longitude: -98.66165965560205,
      address: "123 pizza lane",
      website_url: "www.pizzahut.com",
      official_description: "The Hutt of Pizza",
      thumbnail_image: "https://res.cloudinary.com/plza/image/upload/v1589334585/pizzaIcon_vt9vq9.png",
      street_view_image: "google.com/1.jpg",
      order_service: "Doordash",
      store_bio: "We made this place and that place makes pizza",
      dietary_offerings: ["vegan"],
    },
    {
      id: 5,
      username: "dominoes2",
      email: "bett2y@dominoes.com",
      password: "$2a$10$xz0c9mw.93dILe4riz9YXeDz7wLOot57zovPBbf01CEqfCiWXQprS",
      first_name: "Noes",
      last_name: "Dom",
      business_name: "Dominoes Pizza",
      latitude: 22.801598971549644,
      longitude: -98.66165965560205,
      address: "13 pizza rd",
      website_url: "www.dominoes.com",
      official_description: "The Old Boardgame of Pizza",
      thumbnail_image: "https://res.cloudinary.com/plza/image/upload/v1589334585/pizzaIcon_vt9vq9.png",
      street_view_image: "google.com/2.jpg",
      order_service: "We Deliver!",
      store_bio: "Theres pizza here and you can eat some",
      dietary_offerings: ["Even the cheese is meat"],
    },
    {
      id: 6,
      username: "bigpapa2",
      email: "jacob2@papajohns.com",
      password: "$2a$10$xz0c9mw.93dILe4riz9YXeDz7wLOot57zovPBbf01CEqfCiWXQprS",
      first_name: "Papa",
      last_name: "John",
      business_name: "Papa Johns",
      latitude: 22.501598971549644,
      longitude: -98.66165965560205,
      address: "30 pizza st",
      website_url: "www.papajohns.com",
      official_description: "The Papa of Pizza",
      thumbnail_image: "https://res.cloudinary.com/plza/image/upload/v1589334585/pizzaIcon_vt9vq9.png",
      street_view_image: "google.com/3.jpg",
      order_service: "Waitr",
      store_bio: "We said some racist stuff but we still got some pizza here",
      dietary_offerings: ["vegetarian"],
    },
  ]);
};
