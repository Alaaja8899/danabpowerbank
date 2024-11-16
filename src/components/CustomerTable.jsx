import React from "react";

const CustomerTable = () => {
  // Sample customer data
  const customers = [
    {
      phoneNumber: "+1234567890",
      timePurchased: "2024-11-15 10:30 AM",
      durationOfRent: "2 hours",
      slotID: "A1",
    },
    {
      phoneNumber: "+9876543210",
      timePurchased: "2024-11-15 11:00 AM",
      durationOfRent: "4 hours",
      slotID: "B3",
    },
    {
      phoneNumber: "+1122334455",
      timePurchased: "2024-11-15 12:15 PM",
      durationOfRent: "1 hour",
      slotID: "C2",
    },
  ];

  return (
    <div style={{ padding: "20px" }}>
      <h2>Customer Information</h2>
      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
          marginTop: "20px",
          textAlign: "left",
        }}
      >
        <thead>
          <tr>
            <th style={{ borderBottom: "2px solid #ddd", padding: "10px" }}>
              Phone Number
            </th>
            <th style={{ borderBottom: "2px solid #ddd", padding: "10px" }}>
              Time Purchased
            </th>
            <th style={{ borderBottom: "2px solid #ddd", padding: "10px" }}>
              Duration of Rent
            </th>
            <th style={{ borderBottom: "2px solid #ddd", padding: "10px" }}>
              Slot ID
            </th>
          </tr>
        </thead>
        <tbody>
          {customers.map((customer, index) => (
            <tr key={index}>
              <td style={{ borderBottom: "1px solid #ddd", padding: "10px" }}>
                {customer.phoneNumber}
              </td>
              <td style={{ borderBottom: "1px solid #ddd", padding: "10px" }}>
                {customer.timePurchased}
              </td>
              <td style={{ borderBottom: "1px solid #ddd", padding: "10px" }}>
                {customer.durationOfRent}
              </td>
              <td style={{ borderBottom: "1px solid #ddd", padding: "10px" }}>
                {customer.slotID}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CustomerTable;
