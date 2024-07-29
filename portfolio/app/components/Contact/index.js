import React, { useState, useEffect } from 'react'

export default function Home() {
    const [mode, setMode] = useState("dark");

    useEffect(() => {
        let storedMode = localStorage.getItem("landingColorMode");
        if (storedMode !== null) {
            setMode(storedMode);
        }

        const intervalId = setInterval(() => {
            let storedMode = localStorage.getItem("landingColorMode");
            if (storedMode !== null) {
                setMode(storedMode);
            }
        }, 250);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <main className="bg-white w-screen h-screen">
        </main>
    );
}  