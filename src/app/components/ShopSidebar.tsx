import { useState } from 'react';

const ShopSidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      {/* Hamburger Button for both mobile and desktop */}
      <button
        className="lg:hidden absolute top-4 left-4 text-black bg-white p-2 rounded z-50"
        onClick={toggleSidebar}
      >
        <div className="space-y-2">
          <div
            className={`w-6 h-0.5 bg-black transition-all ${isOpen ? 'rotate-45 translate-y-2' : ''}`}
          ></div>
          <div
            className={`w-6 h-0.5 bg-black transition-all ${isOpen ? 'opacity-0' : ''}`}
          ></div>
          <div
            className={`w-6 h-0.5 bg-black transition-all ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}
          ></div>
        </div>
      </button>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full bg-white text-black p-4 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 lg:translate-x-0 lg:relative lg:block lg:p-6`}
      >
        <h2 className="text-2xl font-semibold mb-6">Filters</h2>

        <div className="space-y-6">
          {['Product Brand', 'Discount Offer', 'Rating Item', 'Categories', 'Price Filters', 'Filter by Colors'].map((category) => (
            <div key={category}>
              <h3 className="font-medium">{category}</h3>
              <div className="space-y-2">
                {[1, 2, 3, 4, 5].map((range) => (
                  <div key={range} className="flex items-center">
                    <input
                      type="checkbox"
                      id={`${category}-range-${range}`}
                      className="mr-2"
                    />
                    <label htmlFor={`${category}-range-${range}`} className="text-sm">
                      Range {range}
                    </label>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShopSidebar;
