import { motion } from "framer-motion";
import { Facebook, Instagram, Twitter } from "lucide-react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function AboutStore() {
  return (
    <section className="container-fluid d-flex align-items-center justify-content-center min-vh-100 bg-light px-3">
      <div className="row w-100 align-items-center">
        {/* Store Image */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="col-md-6 d-flex justify-content-center mb-4 mb-md-0"
        >
          <img
            src={require("../images/about-store.png")}
            alt="Our Store"
            className="shadow rounded"
            style={{ width: "400px", height: "300px", objectFit: "cover" }}
          />
        </motion.div>

        {/* Text Content */}
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="col-md-6 text-center text-md-start"
        >
          <h2 className="display-4 fw-bold text-dark mb-4">About Our Store</h2>
          <p className="fs-5 text-secondary mb-4">
            Welcome to{" "}
            <span className="fw-semibold text-primary">Zarea Store</span>, your
            one-stop shop for the latest <strong>jewelry</strong>, high-tech{" "}
            <strong>electronics</strong>, stylish{" "}
            <strong>men's clothing</strong>, and elegant{" "}
            <strong>women's clothing</strong>. We are committed to offering
            high-quality products that combine style, innovation, and value.
          </p>

          <h3 className="h4 fw-semibold text-dark mb-3">🛒 Categories</h3>
          <div className="d-flex flex-wrap gap-2 mb-4 justify-content-center justify-content-md-start">
            <span className="badge bg-warning text-dark">Jewelry</span>
            <span className="badge bg-info text-dark">Electronics</span>
            <span className="badge bg-primary">Men's Clothing</span>
            <span className="badge bg-danger">Women's Clothing</span>
          </div>

          {/* Social Links */}
          <div className="d-flex gap-4 justify-content-center justify-content-md-start">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              className="text-primary"
            >
              <Facebook size={32} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="text-danger"
            >
              <Instagram size={32} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noreferrer"
              className="text-info"
            >
              <Twitter size={32} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
