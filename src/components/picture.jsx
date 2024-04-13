export const Picture = ({src, alt, className}) => {
    return(
        <img src={src} className={className} alt={alt}/>
    );
}