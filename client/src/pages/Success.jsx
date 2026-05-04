import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const Success = () => {
    const location = useLocation();

    useEffect(() => {
        const params = new URLSearchParams(location.search);

        const paymentId = params.get("id");

        fetch("http://localhost:5000/payment/confirm", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ payment_id: paymentId })
        })
            .then(res => res.json())
            .then(data => {
                console.log("Backend verified:", data);

                if (data.success) {
                    console.log("✅ PAYMENT CONFIRMED");
                } else {
                    console.log("❌ PAYMENT FAILED");
                }
            });

    }, []);

    return (
        <div style={{ textAlign: "center", marginTop: "50px" }}>
            <h3>✅ Payment Successful</h3>
            <p>شكراً لك على الدفع! سيتم التواصل معك قريباً لتأكيد الحجز.</p>
                <p>إذا كان لديك أي استفسار، لا تتردد في التواصل معنا عبر الواتساب.</p>
                <a href="https://wa.me/966544567890" target="_blank" rel="noopener noreferrer">واتساب</a>
                {/* home */}
                <p style={{ marginTop: "20px" }}>
                    <a href="/" style={{ color: "#4CAF50", textDecoration: "underline" }}>العودة إلى الصفحة الرئيسية</a>
                </p>
        </div>
    );
};

export default Success;