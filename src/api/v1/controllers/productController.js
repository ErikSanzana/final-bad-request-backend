const getAllProducts = async (req, res) => {
  try {
    const products = await getAllProducts();
    res.status(200).json({ products: products });
  } catch (error) {
    console.log(error);
    const errorFound = findError(error.code);
    return res
      .status(errorFound[0]?.status)
      .json({ error: errorFound[0]?.message });
  }
};

const getProductsById = async (req, res) => {
  try {
    const { id } = req.params;
    const travel = await ProductsById(id);
    res.status(200).json({ travel: travel });
  } catch (error) {
    console.log("error", error);
  }
};

const createProducts = async (req, res) => {
  try {
    const { product } = req.body;
    const newProduct = await createTravel(product);
    res.status(201).json({ travel: newProduct });
  } catch (error) {
    const errorFound = findError(error.code);
    return res
      .status(errorFound[0].status)
      .json({ error: errorFound[0].message });
  }
};

const updateProducts = async (req, res) => {
  try {
    const { id } = req.params;
    const { products } = req.body;
    const products_update = await updateProducts(id, products);
    res.status(200).json({ products: products_update });
  } catch (error) {
    const errorFound = findError(error.code);
    return res
      .status(errorFound[0].status)
      .json({ error: errorFound[0].message });
  }
};

const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteProduct = await destroyProduct(id);
    if (deleteProduct === 0) {
      return res.status(404).json({ message: "No existe el registro" });
    }
    res.status(204).json({ message: "registro eliminado con exito" });
  } catch (error) {
    const errorFound = findError(error.code);
    return res
      .status(errorFound[0].status)
      .json({ error: errorFound[0].message });
  }
};

export { getAllProducts, updateProducts, deleteProduct,createProducts,getProductsById };
