import React, { useEffect, useRef, useState } from "react";

const MoyasarPayment = () => {
    const formRef = useRef(null);
    const initialized = useRef(false);
    const [showForm, setShowForm] = useState(false);
    const [loading, setLoading] = useState(false);


    useEffect(() => {
        if (initialized.current) return;
        if (!window.Moyasar || !formRef.current) {
            console.error("Moyasar not loaded");
            return;
        }
        initialized.current = true;
        window.Moyasar.init({
            element: formRef.current,
            amount: 1000,
            currency: "SAR",
            description: "Order #123",
            publishable_api_key: import.meta.env.VITE_PUBLISHABLE_API_KEY,    // Active Key
            callback_url: "http://localhost:3000/success",
            methods: ["creditcard", "mada", "stcpay"],
            on_completed: async (payment) => {
                console.log("Payment started:", payment);
                setLoading(true);
                window.location.href = `/success?payment_id=${payment.id}`;
            }
        });
    }, []);

    return (
        <div className="bg-white rounded-4xl p-4" style={{ textAlign: "center", maxWidth: "500px", margin: "40px auto" }}>
            <h2 className="py-14 font-bold text-3xl">ادخل بيانات الدفع</h2>
            {loading && <p>جاري التوجيه...</p>}
            <div className="w-full" ref={formRef} />
        </div>
    );
};

export default MoyasarPayment;