export const ImageContainer = ({ src, alt, witdh, height }) => {
    return(
        <>
            <img src={src} alt={alt} className={`${witdh} ${height}`} />
        </>
    )
}