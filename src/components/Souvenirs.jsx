import React from "react";

const Souvenirs = () => (
  <main className="p-5 text-center">
    <h2 className="text-2xl font-semibold">
      Handcrafted Coconut-Shell Souvenirs
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-5">
      {/* Repeat the following for each souvenir */}
      <div className="bg-white border p-4 rounded shadow">
        <div className="bg-gray-200 h-32 flex items-center justify-center">
          Insert Crafts Photo Here
        </div>
        <h3 className="text-xl font-semibold mt-2">Souvenir 1</h3>
        <p className="mt-1">Crafted with locally sourced coconut shells.</p>
        <a
          href="https://wa.me/yourwhatsappnumber"
          className="mt-2 inline-block bg-green text-white py-2 px-4 rounded hover:bg-coral-red"
        >
          Contact via WhatsApp
        </a>
      </div>
      {/* Add more souvenirs as needed */}
    </div>
    <p className="mt-5">
      Crafted with locally sourced coconut shells and natural fibers to reduce
      environmental impact.
    </p>
  </main>
);

export default Souvenirs;
