import React from "react";
import WaktuTersedia from "./WaktuTersedia";

function PilihWaktu(prompt) {
    return (
        <div className="row m-0 collapse" id={"deskripsi-" + prompt.nomorLapangan}>
            <div className = "col-xl-8 col-12 offset-xl-4 border rounded overflow-hidden shadow-sm py-3">
                <div className="container">
                    <div className="row g-3">
                        <WaktuTersedia time="07.00-08.00" isReserved={true} />
                        <WaktuTersedia time="08.00-09.00" isReserved={false} />
                        <WaktuTersedia time="09.00-10.00" isReserved={false} />
                        <WaktuTersedia time="10.00-11.00" isReserved={false} />
                        <WaktuTersedia time="11.00-12.00" isReserved={false} />
                        <WaktuTersedia time="12.00-13.00" isReserved={false} />
                        <WaktuTersedia time="13.00-14.00" isReserved={false} />
                        <WaktuTersedia time="14.00-15.00" isReserved={false} />
                        <WaktuTersedia time="15.00-16.00" isReserved={false} />
                        <WaktuTersedia time="16.00-17.00" isReserved={false} />
                        <WaktuTersedia time="17.00-18.00" isReserved={false} />
                        <WaktuTersedia time="18.00-19.00" isReserved={false} />
                        <WaktuTersedia time="19.00-20.00" isReserved={false} />
                        <WaktuTersedia time="20.00-21.00" isReserved={false} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PilihWaktu;