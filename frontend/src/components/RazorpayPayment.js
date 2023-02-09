// import React, { useState } from "react";
// import axios from "axios";

// function RazorpayPayment() {

//     const [paymentId, setPaymentId] = useState("");

//     function loadScript(src) {
//         return new Promise((resolve) => {
//             const script = document.createElement("script");
//             script.src = src;
//             script.onload = () => {
//                 resolve(true);
//             };
//             script.onerror = () => {
//                 resolve(false);
//             };
//             document.body.appendChild(script);
//         });
//     }

//     async function displayRazorpay() {
//         // const res = await loadScript(
//         //     "https://checkout.razorpay.com/v1/checkout.js"
//         // );

//         // if (!res) {
//         //     alert("Razorpay SDK failed to load. Are you online?");
//         //     return;
//         // }

//         const result = await axios.post("/orders",{
//             amount:3333
//         });

//         if (!result) {
//             alert("Server error. Are you online?");
//             return;
//         }

//         const { amount, id: order_id, currency } = result.data;


//         const options = {
//             key: "rzp_test_TRI6oMbV9P1Wvj", // Enter the Key ID generated from the Dashboard
//             amount: amount.toString(),
//             currency: currency,
//             name: "Avishkar & Tejas Co LTD.",
//             description: "Test Transaction",
//             // image: { logo },
//             order_id: order_id,
//             handler: async function (response) {
//                 const data = {
//                     // orderCreationId: order_id,
//                     razorpayPaymentId: response.razorpay_payment_id,
//                     // razorpayOrderId: response.razorpay_order_id,
//                     // razorpaySignature: response.razorpay_signature,
//                 };
//                 setPaymentId(data.razorpayPaymentId)

//                 const result = await axios.post("http://localhost:5000/success", data);

//                 alert("Payment Successful\n" + result.data.razorpayPaymentId);
//                 console.log(result)
//             },
//             prefill: {
//                 name: "Avishkar & Tejas Co LTD.",
//                 email: "demo@example.com",
//                 contact: "9999999999",
//             },
//             notes: {
//                 address: "Avishkar & Tejas Co LTD. Corporate Office",
//             },
//             theme: {
//                 color: "#61dafb",
//             },
//         };

//         const paymentObject = new window.Razorpay(options);
//         paymentObject.open();

//     }


//     const [book, setBook] = useState({
// 		name: "The Fault In Our Stars",
// 		author: "John Green",
// 		img: "https://images-na.ssl-images-amazon.com/images/I/817tHNcyAgL.jpg",
// 		price: 250,
// 	});

// 	const initPayment = (data) => {
// 		const options = {
// 			key: "rzp_test_TRI6oMbV9P1Wvj",
// 			amount: data.amount,
// 			currency: data.currency,
// 			name: book.name,
// 			description: "Test Transaction",
// 			image: book.img,
// 			order_id: data.id,
// 			handler: async (response) => {
// 				try {
// 					const verifyUrl = "/verify";
// 					const { data } = await axios.post(verifyUrl, response);
// 					console.log(data);
// 				} catch (error) {
// 					console.log(error);
// 				}
// 			},
// 			theme: {
// 				color: "#3399cc",
// 			},
// 		};
// 		// const rzp1 = new window.Razorpay(options);
// 		// rzp1.open();
//         const paymentObject = new window.Razorpay(options);
//         paymentObject.open();
// 	};

    
// 	const handlePayment = async () => {

//         await loadScript("https://checkout.razorpay.com/v1/checkout.js");

// 		try {
// 			const orderUrl = "/orders";
// 			const { data } = await axios.post(orderUrl, { amount: book.price });
//             console.log(data)
// 			console.log(data);
// 			initPayment(data.data);
// 		} catch (error) {
// 			console.log(error);
// 		}
// 	};

    
    
//     return (
//         <div className="App">
//             <header className="App-header">
//                 <p>Buy Ticket now!</p>
//                 <button className="App-link" onClick={handlePayment}>
//                     Pay ₹500
//                 </button>
//             </header>
//         </div>
//     );
// }

// export default RazorpayPayment;