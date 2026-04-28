import React, { useEffect, useRef, useState } from "react";

const MoyasarPayment = () => {
    const formRef = useRef(null);
    const initialized = useRef(false);
    const [showForm, setShowForm] = useState(false);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (!showForm) return;
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

            publishable_api_key: "pk_test_nuyakddJy3XWXxFrNp429QmvLJKfPPatmKPbSiZH",

            callback_url: "http://localhost:3000/success",

            methods: ["creditcard", "mada", "stcpay"],

            on_completed: async (payment) => {
                console.log("Payment started:", payment);

                setLoading(true);

                // ❌ لا تحقق هنا
                // ✔ فقط تحويل
                window.location.href = `/success?payment_id=${payment.id}`;
            }
        });
    }, [showForm]);

    return (
        <div style={{ textAlign: "center", maxWidth: "400px", margin: "40px auto" }}>
            <h2>الدفع</h2>

            {!showForm && (
                <button
                    onClick={() => setShowForm(true)}
                    style={{
                        padding: "12px 20px",
                        background: "#2d6cdf",
                        color: "#fff",
                        border: "none",
                        borderRadius: "8px"
                    }}
                >
                    ادفع الآن
                </button>
            )}

            {loading && <p>جاري التوجيه...</p>}

            {showForm && <div ref={formRef} />}
        </div>
    );
};

export default MoyasarPayment;