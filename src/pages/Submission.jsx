import React from "react";
import { Link } from "react-router-dom";
import utils from "@/lib/utils.js";
import Header from "@/components/Header";

function Submission() {
    const location = useLocation();
    const name = location.state.name || "Anonymous";
    
    return (
        <div className="min-h-screen w-full bg-zinc-50 px-4 py-2 md:px-8 md:py-4">
            <Header />
            <div className="rounded-lg bg-lime-500 p-3">
                <h2>
                Success
                </h2>
                <p className="text-bg">
                    Your Form is Successfully Submitted.Go to check {" "}
                    <a
                        className="text-blue-600 underline"
                        target="_blank"
                        href={utils.entriesUrl}
                        >
                        here
                    </a>
                </p>
            </div>
        </div>
    );
}
export default Submission;