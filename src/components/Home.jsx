import React from "react";

const Home = () => (
  <main className="p-5 text-center">
    <h2 className="text-2xl font-semibold mt-5">
      Welcome to Tropical Treasures
    </h2>
    <p className="mt-2">
      Explore unique handcrafted coconut-shell souvenirs and experience the
      beauty of the Maldives.
    </p>
    <a
      href="/tropical-paradise/souvenirs"
      className="mt-4 inline-block bg-green text-white py-2 px-4 rounded hover:bg-coral-red"
    >
      View Souvenirs
    </a>
    <div className="mt-10">
      <h2 className="text-xl font-semibold">Contact Us</h2>
      <div className="flex justify-center mt-4">
        <a
          href="https://wa.me/+9607756456"
          className="mx-2 bg-dark-teal text-white py-2 px-4 rounded hover:bg-coral-red"
        >
          WhatsApp
        </a>
        <a
          href="https://viber.com/+9607756456"
          className="mx-2 bg-dark-teal text-white py-2 px-4 rounded hover:bg-coral-red"
        >
          Viber
        </a>
      </div>
    </div>
  </main>
);

export default Home;
