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
            <h1>✅ Payment Successful</h1>
        </div>
    );
};

export default Success;