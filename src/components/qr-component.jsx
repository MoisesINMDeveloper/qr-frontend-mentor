import React from "react";
import codeQr from "@assets/image-qr-code.png";
import "@styles/styles.css";

const QrComponent = () => {
    return (
        <>
            <main className="main__container">
                <article className="main__article">
                    <div className="main__article--card">
                        <img src={codeQr} alt="Qr Code" />
                        <div className="article__card--text">
                            <p>Improve your front-end skills by building projects</p>
                            <p>Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</p>
                        </div>
                    </div>
                </article>
            </main>
        </>
    );
};
export default QrComponent;