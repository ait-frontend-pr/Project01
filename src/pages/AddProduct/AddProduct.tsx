import { Formik, Form, Field } from "formik";
import { useEffect, useState } from "react";
import * as Yup from "yup";
import type { Category } from "../../types";
const ProductSchema = Yup.object().shape({
  title: Yup.string().min(2).max(100).required("Title is required"),
  price: Yup.number().min(1).required("Price is required"),
  description: Yup.string().min(2).max(500).required("Description is required"),
  categoryId: Yup.number().required("Category is required"),
  images: Yup.array()
    .of(Yup.string().url("Invalid URL"))
    .min(1, "At least one image URL is required")
    .required("Image is required"),
});

interface Product {
  title: string;
  price: number;
  description: string;
  categoryId: number;
  images: string[];
}

const AddProduct = () => {
  const [message, setMessage] = useState("");
  const [categories, setCategories] = useState<Category[]>([]);

  async function fetchCategories() {
    const res = await fetch("https://api.escuelajs.co/api/v1/categories");
    const arr = await res.json();
    setCategories(arr);
  }

  useEffect(() => {
    fetchCategories();
  }, []);

  async function fetchAddProduct(values: Product) {
    const res = await fetch("https://api.escuelajs.co/api/v1/products/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    });
    if (res.ok) {
      setMessage("Product added successfully");
    }
  }
  return (
    <div>
      <h1>Add Product</h1>
      {message ? <div>{message}</div> : null}
      <Formik
        initialValues={{
          title: "",
          price: 1,
          description: "",
          categoryId: 1,
          images: [""],
        }}
        validationSchema={ProductSchema}
        onSubmit={(values) => {
          console.log("Submitting:", values);
          fetchAddProduct(values);
        }}
      >
        {({ errors, touched }) => (
          <Form>
            <label>Title:</label>
            <Field name="title" />
            {errors.title && touched.title ? <div>{errors.title}</div> : null}

            <label>Price:</label>
            <Field name="price" type="number" />
            {errors.price && touched.price ? <div>{errors.price}</div> : null}

            <label>Description:</label>
            <Field name="description" />
            {errors.description && touched.description ? (
              <div>{errors.description}</div>
            ) : null}

            <label>Category:</label>
            <Field as="select" name="categoryId">
              {/* <option value="1">Electronics</option>
              <option value="2">Clothes</option> */}
              {categories.map(c => <option value={c.id}>{c.name}</option>)}
            </Field>
            {errors.categoryId && touched.categoryId ? (
              <div>{errors.categoryId}</div>
            ) : null}

            <label>Images URL:</label>
            <Field name="images[0]" />
            {errors.images && touched.images ? (
              <div>{(errors.images as string[])[0]}</div>
            ) : null}

            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
export default AddProduct;
