import React from "react";

function WaktuTersedia(prompt) {
    return (
        <div className="col-3 p-0">
            <button className={prompt.isReserved ? "btn btn-danger w-75 disabled" : "btn btn-outline-success w-75"} type="button" data-bs-toggle="button">{prompt.time}</button>
        </div>
    );

}

export default WaktuTersedia;