import productlogo from '../assets/product-logo.png'
import { ImageCardContainer } from './ImageCard'

const ProductSection = () => {
    return (
        <div>
            <img src={productlogo} alt="preview of products logo" />
            <ImageCardContainer></ImageCardContainer>
        </div>
    )
}

export default ProductSection