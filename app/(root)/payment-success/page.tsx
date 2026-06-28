import { Suspense } from "react";
import PaymentSuccessClient from "./PaymentSuccessClient";

export const dynamic = "force-dynamic";

export default function Page() {
  return (
    <Suspense
      fallback={
        <div className="flex justify-center items-center min-h-screen">
          Loading...
        </div>
      }
    >
      <PaymentSuccessClient />
    </Suspense>
  );
}
