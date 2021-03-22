import mongoose from "mongoose";
import asyncHandler from "express-async-handler";
import Product from "../models/productModel.js";
import express from "express";

const getProducts = asyncHandler(async (req, res) => {
  const products = await Product.find();

  res.json(products);
});

const getProduct = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);

  if (!product) {
    res.status(404);
    throw new Error("Product not found");
  }

  res.json(product);
});

export { getProduct, getProducts };
