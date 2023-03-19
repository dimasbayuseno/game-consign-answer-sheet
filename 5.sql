SELECT products.category, SUM(producst.sale_amount) AS revenue,
( SELECT SUM(products.sale_) FROM products) as total_revenue
FROM products
GROUP BY products.category