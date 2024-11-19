// Show product detail pop-up
function showProductDetail(productId) {
    const popup = document.getElementById('product-detail-popup');
    const productDetail = document.getElementById(`${productId}-detail`);
    
    // Hide other details
    document.querySelectorAll('.product-info').forEach(info => info.style.display = 'none');
    
    if (productDetail) {
        productDetail.style.display = 'block';
        popup.style.display = 'flex';
    }
}

// Hide product detail pop-up
function hideProductDetail() {
    document.getElementById('product-detail-popup').style.display = 'none';
}
