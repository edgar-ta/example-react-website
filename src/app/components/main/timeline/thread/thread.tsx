import Image from "next/image";

import thread from "./thread.svg";

export default function(props: { className?: string }) {
    return (
        <Image {...props} src={thread} alt="Imagen de hilo conductor" />
    );
}
