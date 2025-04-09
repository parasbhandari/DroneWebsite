import Description from '../components/Product-Details/Description'
import ProductSection from '../components/Product-Details/ProductSection'
import ReviewSection from '../components/Product-Details/ReviewSection'
function ProductDetail() {
  return (
    <div>
      <ProductSection />
      <Description />
      <ReviewSection />
    </div>
  )
}

export default ProductDetail