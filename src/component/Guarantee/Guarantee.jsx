import React from 'react';

const Guarantee = () => {
  return (
    <div className="container mx-auto mt-8">
      <h2 className="text-3xl font-semibold mb-4">Guarantee Information</h2>

      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <h3 className="text-xl font-semibold mb-4">Types of Guarantees</h3>

        <table className="table-auto w-full border-collapse border border-gray-200">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-300 px-4 py-2">Type</th>
              <th className="border border-gray-300 px-4 py-2">Description</th>
              <th className="border border-gray-300 px-4 py-2">Coverage</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-300 px-4 py-2">18K Gold Warranty</td>
              <td className="border border-gray-300 px-4 py-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                condimentum tortor vel justo volutpat.
              </td>
              <td className="border border-gray-300 px-4 py-2">
                Covers manufacturing defects specific to 18K gold products.
              </td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2">24K Gold Warranty</td>
              <td className="border border-gray-300 px-4 py-2">
                Phasellus condimentum tortor vel justo volutpat, nec rutrum
                dolor pulvinar.
              </td>
              <td className="border border-gray-300 px-4 py-2">
                Covers manufacturing defects specific to 24K gold products.
              </td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2">Diamond Warranty</td>
              <td className="border border-gray-300 px-4 py-2">
                Morbi bibendum lorem quis nisi tempus, sed ultrices ex
                vulputate.
              </td>
              <td className="border border-gray-300 px-4 py-2">
                Covers lifetime repair and replacement of diamonds in jewelry.
              </td>
            </tr>
            {/* Add more rows for additional guarantee types */}
          </tbody>
        </table>
      </div>

      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <h3 className="text-xl font-semibold mb-4">Additional Information</h3>
        <p className="text-gray-700">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
          condimentum tortor vel justo volutpat, nec rutrum dolor pulvinar.
          Mauris et lorem vel nibh faucibus tristique. Nullam non lectus vitae
          lacus volutpat tristique.
        </p>
        <p className="text-gray-700 mt-4">
          Etiam ac odio interdum, faucibus nulla at, accumsan turpis. Donec
          imperdiet diam sit amet justo hendrerit, eget lacinia enim
          consectetur.
        </p>
      </div>
    </div>
  );
};

export default Guarantee;
