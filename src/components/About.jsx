import React from "react";

const About = () => (
  <main className="p-5 text-center">
    <h2 className="text-2xl font-semibold">About Us</h2>
    <p className="mt-2">
      This is the story of our journey into crafting eco-friendly souvenirs.
    </p>
    <p>
      We are passionate about preserving the environment and providing guests
      with an authentic Maldivian experience.
    </p>
    <section className="mt-5">
      <h3 className="text-xl font-semibold">Contact Us</h3>
      <a
        href="https://wa.me/yourwhatsappnumber"
        className="inline-block bg-dark-teal text-white py-2 px-4 rounded hover:bg-coral-red"
      >
        Contact via WhatsApp
      </a>
      <a
        href="https://viber.com/yourvibernumber"
        className="inline-block bg-dark-teal text-white py-2 px-4 rounded hover:bg-coral-red"
      >
        Contact via Viber
      </a>
    </section>
  </main>
);

export default About;
