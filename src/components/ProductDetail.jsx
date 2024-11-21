import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductCard from "./ProductCard";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [relatedProducts, setRelatedProducts] = useState([]);

  useEffect(() => {
    // Lấy danh sách sản phẩm từ API
    fetch(
      "https://firebasestorage.googleapis.com/v0/b/funix-subtitle.appspot.com/o/Boutique_products.json?alt=media&token=dc67a5ea-e3e0-479e-9eaf-5e01bcd09c74"
    )
      .then((response) => response.json())
      .then((data) => {
        const foundProduct = data.find((item) => item._id.$oid === id);
        setProduct(foundProduct);

        // Lọc sản phẩm liên quan
        const related = data.filter(
          (item) =>
            item.category === foundProduct.category && item._id.$oid !== id
        );
        setRelatedProducts(related);
      })
      .catch((error) => console.error("Error fetching product:", error));
  }, [id]);

  if (!product) return <div>Loading...</div>;

  return (
    <div>
      <h1>{product.name}</h1>
      <p>
        {product.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")} VND
      </p>
      <img src={product.img1} alt={product.name} />
      <h2>Related Products</h2>
      <div>
        {relatedProducts.map((relatedProduct) => (
          <ProductCard key={relatedProduct._id.$oid} product={relatedProduct} />
        ))}
      </div>
    </div>
  );
};

export default ProductDetail;
