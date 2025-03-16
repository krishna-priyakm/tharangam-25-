// import React, { useEffect, useState } from "react";
// import axios from "axios";

// const Admin = () => {
//     const [registrations, setRegistrations] = useState([]);

//     useEffect(() => {
//         const fetchData = async () => {
//             const response = await axios.get("http://localhost:5000/api/registrations");
//             setRegistrations(response.data);            
//         };

//         fetchData();
//     }, []);

//     return (
//         <div>
//             <h1>Admin Panel - Registered Participants</h1>
//             <table border="1">
//                 <thead>
//                     <tr>
//                         <th>Name</th>
//                         <th>Email</th>
//                         <th>Department</th>
//                         <th>Year</th>
//                         <th>Phone</th>
//                         <th>Single Events</th>
//                         <th>Group Events</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {registrations.map((reg, index) => (
//                         <tr key={index}>
//                             <td>{reg.name}</td>
//                             <td>{reg.email}</td>
//                             <td>{reg.department}</td>
//                             <td>{reg.year}</td>
//                             <td>{reg.phone}</td>
//                             <td>{reg.singleEvents.join(", ")}</td>
//                             <td>{reg.groupEvents.join(", ")}</td>
//                         </tr>
//                     ))}
//                 </tbody>
//             </table>
//         </div>
//     );
// };

// export default Admin;
