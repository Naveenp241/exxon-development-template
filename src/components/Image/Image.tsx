import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faImage } from '@fortawesome/free-solid-svg-icons';

interface ImageProps {
    src?: string;
    alt?: string;
    className?: string;
    width?: number | string;
    height?: number | string;
    caption?: string;
}

export const Image = ({ 
    src,
    alt,
    className = '',
    width = '100%',
    height = '100%',
    caption
}: ImageProps) => {
    return (
        src ?
            caption ? 
            (
                <figure className={className}>
                    <img src={src} alt={alt} width={width} height={height} />
                    <figcaption>{caption}</figcaption>
                </figure>
            ) : (
                <img src={src} alt={alt} width={width} height={height} className={className} />
            )
        : <div className='p-4 m-auto'><FontAwesomeIcon icon={faImage} className='default-icon'/></div>
    ) 
};
