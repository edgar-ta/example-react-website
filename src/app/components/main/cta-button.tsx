import React from "react";

export default function(props: Readonly<{ className: string | undefined }>) {
    return (
        <div  
        {...props} 
        >
            <button className="
            font-rosalia
            text-[1rem]
            bg-white
            px-[2.5rem]
            py-[0.416875rem]
            rounded-[0.208125rem]
            ">
                EXCUSE ME I LOVE YOU
            </button>
            <p className="
            font-rosalia
            text-[0.833125rem]
            text-center
            text-white
            ">
                COMING SOON
            </p>
        </div>
    );
}
