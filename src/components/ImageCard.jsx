import PropTypes from 'prop-types'

export default function ImageCard({children, imgSrc, ...props}) {
    return (
        <div {...props} className="relative max-w-fit overflow-hidden rounded-2xl shadow-lg group">
            <img src={imgSrc} alt="Image Card" className="transition-transform group-hover:scale-110 duration-200"/>
            <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/60 to-transparent">
            <div className="p-4 text-white text-center opacity-0 transition-opacity duration-200 group-hover:opacity-100">{children}</div>
            </div>
        </div>
    )
}

ImageCard.propTypes = {
    children: PropTypes.node.isRequired,
    imgSrc: PropTypes.string.isRequired
}

export function ImageCardContainer() {
    return (
        <div className="flex flex-row justify-center gap-20 p-4">
            <ImageCard imgSrc="https://img.wattpad.com/cover/220723250-256-k948207.jpg">
                <h3 className='text-xl font-bold mb-2'>Book Title</h3>
                <p> Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </ImageCard>
            <ImageCard imgSrc="https://img.wattpad.com/cover/220723250-256-k948207.jpg">
                <h3 className='text-xl font-bold mb-2'>Book Title</h3>
                <p> Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </ImageCard>
            <ImageCard imgSrc="https://img.wattpad.com/cover/220723250-256-k948207.jpg">
                <h3 className='text-xl font-bold mb-2'>Book Title</h3>
                <p> Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </ImageCard>
        </div>
    );
}