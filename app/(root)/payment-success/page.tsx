import styles from "@/components/shared/PaymentSuccess.module.css";

export default function PaymentSuccess({
  searchParams: { amount },
}: {
  searchParams: { amount: string };
}) {
  return (
    <div
      className={`${styles.container} flex flex-col items-center justify-center min-h-screen bg-gray-100`}
    >
      <h1 className={`${styles.title} text-3xl font-bold text-green-600`}>
        Thank You for Your Payment!
      </h1>
      <p className={`${styles.message} text-xl text-gray-700 mt-4`}>
        You are all booked in for ReeBolly upcoming event!
      </p>
      <p className={`${styles.message} text-xl text-gray-700 mt-4`}>
        <strong>Amount paid: £{amount}</strong>.
      </p>
      <p className={`${styles.message} text-xl text-gray-700 mt-2`}>
        Please check your email for a confirmation. See you soon!
      </p>
      <div className={`${styles.icon} mt-6`}>
        <img src="/assets/icons/success.svg" alt="Success" width="100" />
      </div>
    </div>
  );
}
