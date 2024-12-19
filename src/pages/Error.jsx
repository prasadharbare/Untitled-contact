import react from "react";
import { useLocation, Link } from "react-router-dom";

function Error() { 
    return (
        <div className="min-h-screen w-full bg-zinc-50 px-4 py-2 md:px-8 md:py-4">  
            <Header />
            <div className="rounded-lg bg-red-500 p-3"> 
                <h2 className="text-3xl">Error</h2>
                <p>your form is flagged as invalid</p>
                <p className="text-bg">
                    try submitting the form again
                    <Link to="/">here</Link>
                </p>
            <button
                className="bg-lime-500 p-2 rounded-lg"
                onClick={() =>
                    navigate("/submission", {
                        state: {
                            data:"submitted",
                        }
                    })
                }
            >
                go to home
            </button>
        </div>
    );
}
export default Error;