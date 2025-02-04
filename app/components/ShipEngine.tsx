"use client";

import { useState } from "react";

export default function ShipEngine() {
  const [from, setFrom] = useState({ address: "", city: "", state: "", zip: "", country: "US" });
  const [to, setTo] = useState({ address: "", city: "", state: "", zip: "", country: "US" });
  const [weight, setWeight] = useState("");
  const [rate, setRate] = useState(null);
  const [error, setError] = useState(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setRate(null);
    setError(null);

    try {
      const response = await fetch("/api/shipengine/rates", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ from, to, weight: parseFloat(weight) }),
      });

      const data = await response.json();
      if (response.ok) setRate(data);
      else setError(data.error);
    } catch (err : any) {
      setError(err);
    }
  };

  return (
    <div className="p-6 max-w-md mx-auto bg-white rounded-xl shadow-md">
      <h2 className="text-xl font-bold mb-4">Test ShipEngine API</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <h3 className="font-semibold">From Address</h3>
          <input type="text" placeholder="Address" value={from.address} onChange={(e) => setFrom({ ...from, address: e.target.value })} className="border p-2 w-full" />
          <input type="text" placeholder="City" value={from.city} onChange={(e) => setFrom({ ...from, city: e.target.value })} className="border p-2 w-full" />
          <input type="text" placeholder="State" value={from.state} onChange={(e) => setFrom({ ...from, state: e.target.value })} className="border p-2 w-full" />
          <input type="text" placeholder="Zip" value={from.zip} onChange={(e) => setFrom({ ...from, zip: e.target.value })} className="border p-2 w-full" />
        </div>
        <div>
          <h3 className="font-semibold">To Address</h3>
          <input type="text" placeholder="Address" value={to.address} onChange={(e) => setTo({ ...to, address: e.target.value })} className="border p-2 w-full" />
          <input type="text" placeholder="City" value={to.city} onChange={(e) => setTo({ ...to, city: e.target.value })} className="border p-2 w-full" />
          <input type="text" placeholder="State" value={to.state} onChange={(e) => setTo({ ...to, state: e.target.value })} className="border p-2 w-full" />
          <input type="text" placeholder="Zip" value={to.zip} onChange={(e) => setTo({ ...to, zip: e.target.value })} className="border p-2 w-full" />
        </div>
        <div>
          <h3 className="font-semibold">Package Details</h3>
          <input type="number" placeholder="Weight (oz)" value={weight} onChange={(e) => setWeight(e.target.value)} className="border p-2 w-full" />
        </div>
        <button type="submit" className="bg-blue-500 text-white p-2 w-full rounded">Get Shipping Rates</button>
      </form>
      
      {rate && (
        <div className="mt-4 p-3 bg-green-100 border rounded">
          <h3 className="font-semibold">Shipping Rate:</h3>
          <pre className="text-sm">{JSON.stringify(rate, null, 2)}</pre>
        </div>
      )}
      
      {error && (
        <div className="mt-4 p-3 bg-red-100 border rounded text-red-600">
          <p>Error: {error}</p>
        </div>
      )}
    </div>
  );
}
