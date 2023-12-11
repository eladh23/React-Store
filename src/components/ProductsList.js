import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import {jwtDecode} from "jwt-decode"; 

const ProductsList = ({ products, setProducts }) => {
  const [token, setToken] = useState("");
  const [userId, setUserId] = useState("");
  const storedToken = localStorage.getItem("authToken");

  useEffect(() => {
    if (storedToken) {
      setToken(storedToken);
    }
  }, [storedToken]);

  useEffect(() => {
    if (token) {
      try {
        const decodedToken = jwtDecode(token);
        setUserId(decodedToken.user_id);
      } catch (error) {
      }
    }
  }, [token]);

  useEffect(() => {
    axios
      .get("https://elad-django-back.onrender.com/products")
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, [setProducts]);

  const handleAddToCart = async (productId, userId) => {
    try {
      const authToken = localStorage.getItem("token");
      const response = await axios.post(
        "https://elad-django-back.onrender.com/carts/",
        { product: productId, user: userId },
        {
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        }
	  
      );
	console.log(productId)

      if (response.status === 200) {
        console.log("Product added to cart!");
      } else {
		console.log("Failed to add product to cart");
      }
    } catch (error) {
      console.error("Error adding product to cart:", error);
      console.log("Error adding product to cart");
    }
  };

  return (
    <div>
      <h2 className="text-center mb-4">Products List</h2>
      {products.length > 0 ? (
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {products.map((product) => (
            <div key={product.id} className="col mb-4">
              <Card className="h-100">
                <Card.Img
                  variant="top"
                  src={`https://elad-django-back.onrender.com/${product.image}`}
                  alt={`Product: ${product.name}`}
                  style={{ maxWidth: "200px", height: "auto" }}
                />
                <Card.Body>
                  <Card.Title>{product.name}</Card.Title>
                  <Card.Text>
                    <strong>Price:</strong> $
                    {parseFloat(product.price).toFixed(2)}
                  </Card.Text>
                  <Card.Text>
                    <strong>Stock:</strong> {product.stock}
                  </Card.Text>
                  <Card.Text>
                    <strong>Description:</strong> {product.description}
                  </Card.Text>
                  <Card.Text>
                    <strong>Category:</strong> {product.category}
                  </Card.Text>
                  {storedToken && (
                    <Button
			    			
                      variant="primary"
                      onClick={() => handleAddToCart(product.id, userId)}  
                     >
				
                      Add to Cart
                    </Button>
                  )}
                </Card.Body>
              </Card>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center">No products available</p>
      )}
    </div>
  );
};

export default ProductsList;
