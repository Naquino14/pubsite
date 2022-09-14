import react from 'react'
import React from 'react'
import './Blob.tsx.css'
import '../App.css'

type Props = {
    imagestyle: string | null,
    onBlobClick: (() => void) | null,
    label: string | null,
}

const Blob: React.FC<Props> = ({
    imagestyle = null, 
    onBlobClick: onBlobClick = null,
    label = null,
}) => {
    const [isHover, setIsHover] = react.useState<boolean>(false)
    return (
        <div className={
            `blob 
            ${(isHover ? "blob_hover" : "blob_nohover")} 
            ${imagestyle ?? ""}`}
            onClick={() => {
                onBlobClick !== null 
                    ? onBlobClick() 
                    : console.log(`onBlobClick on blob ${label ?? "unnamed blob"} is null`)
            }}
            onMouseOver={() => setIsHover(true)}
            onMouseOut={() => setIsHover(false)}>
            <div className={
                `${isHover ? "blob_label-enabled" : "blob_label-disabled"}`}>
                <div className="blob_label-child">{label}</div>
            </div>
        </div>
    )
}

export default Blob