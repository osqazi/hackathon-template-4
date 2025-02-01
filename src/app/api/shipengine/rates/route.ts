// import { NextResponse } from "next/server";
// import ShipEngine from "shipengine";

// const shipengine = new ShipEngine(process.env.NEXT_PUBLIC_SHIPENGINE_API_KEY!);

// export async function POST(req: Request) {
//   try {
//     const { from, to, weight } = await req.json();

//     // ✅ Hardcoded `ship_from` for testing - ensures it is always present
//     const shipFrom = {
//       name: "Warehouse A", 
//       company_name: "Test Warehouse",
//       phone: "123-456-7890",
//       address_line1: from?.address || "123 Warehouse St", 
//       city_locality: from?.city || "Los Angeles",
//       state_province: from?.state || "CA",
//       postal_code: from?.zip || "90001",
//       country_code: from?.country || "US"
//     };

//     // ✅ Ensure `ship_to` is structured properly
//     const shipTo = {
//       name: "John Doe",
//       company_name: "Customer Inc.",
//       phone: "987-654-3210",
//       address_line1: to.address,
//       city_locality: to.city,
//       state_province: to.state,
//       postal_code: to.zip,
//       country_code: to.country
//     };

//     const params = {
//       rate_options: {
//         carrier_ids: ["se-1854338"], // Replace with a valid test carrier ID
//       },
//       shipment: {
//         service_code: "usps_priority_mail",
//         ship_from: shipFrom, // ✅ Ensuring this is always present
//         ship_to: shipTo,
//         packages: [
//           {
//             weight: {
//               value: parseFloat(weight) || 1,
//               unit: "ounce",
//             },
//           },
//         ],
//       },
//     };

//     // 🔥 Debugging - Log full request payload before sending to ShipEngine
//     console.log("🚀 ShipEngine Request Payload:", JSON.stringify(params, null, 2));

//     const response = await shipengine.getRatesWithShipmentDetails(params);
//     return NextResponse.json(response, { status: 200 });

//   } catch (error: any) {
//     console.error("❌ ShipEngine API Error:", error);
//     return NextResponse.json({ error: error.message }, { status: 500 });
//   }
// }
