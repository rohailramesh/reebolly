import styles from "@/components/shared/PaymentSuccess.module.css";

export default function PaymentSuccess({
  searchParams,
}: {
  searchParams: {
    amount: string;
    payment_intent: string;
    payment_intent_client_secret: string;
    redirect_status: string;
  };
}) {
  const {
    amount,
    payment_intent,
    payment_intent_client_secret,
    redirect_status,
  } = searchParams;

  return (
    <div
      className={`${styles.container} flex flex-col items-center justify-center min-h-screen bg-gray-100`}
    >
      <h1 className={`${styles.title} text-3xl font-bold text-green-600`}>
        Thank You for Your Payment!
      </h1>
      <p className={`${styles.message} text-xl text-gray-700 mt-4`}>
        You are all booked in for ReeBolly's upcoming event!
      </p>
      <p className={`${styles.message} text-xl text-gray-700 mt-4`}>
        <strong>Amount paid: £{amount}</strong>
      </p>
      <p className={`${styles.message} text-xl text-gray-700 mt-2`}>
        Your order id is: <strong>{payment_intent}</strong>
      </p>
      <p className={`${styles.message} text-xl text-gray-700 mt-2`}>
        Please keep a copy of your order id for future reference. See you soon!
      </p>
      <div className={`${styles.icon} mt-6`}>
        <img src="/assets/icons/success.svg" alt="Success" width="100" />
      </div>
    </div>
  );
}

// import styles from "@/components/shared/PaymentSuccess.module.css";

// export default function PaymentSuccess({
//   searchParams: { amount },
// }: {
//   searchParams: { amount: string };
// }) {
//   return (
//     <div
//       className={`${styles.container} flex flex-col items-center justify-center min-h-screen bg-gray-100`}
//     >
//       <h1 className={`${styles.title} text-3xl font-bold text-green-600`}>
//         Thank You for Your Payment!
//       </h1>
//       <p className={`${styles.message} text-xl text-gray-700 mt-4`}>
//         You are all booked in for ReeBolly upcoming event!
//       </p>
//       <p className={`${styles.message} text-xl text-gray-700 mt-4`}>
//         <strong>Amount paid: £{amount}</strong>.
//       </p>
//       <p className={`${styles.message} text-xl text-gray-700 mt-2`}>
//         Please check your email for a confirmation. See you soon!
//       </p>
//       <div className={`${styles.icon} mt-6`}>
//         <img src="/assets/icons/success.svg" alt="Success" width="100" />
//       </div>
//     </div>
//   );
// }
