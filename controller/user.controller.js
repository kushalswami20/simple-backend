import Product from "../models/user.model.js";

export const getAllProducts = async (req,res)=>{
    try {
        
        const product = await Product.find(req.body);
        res.status(200).json(product);

    } catch (error) {
        res.status(400).json({
            message:"error in databse"
        })
    }
}

export const getSingleProduct =async (req,res) =>{
    try {
        const {id}= req.params;
        const product = await Product.findById(id);
        res.status(200).json(product);

    } catch (error) {
        res.status(400).json({
            message:"error in databse"
        })
    }
}

export const updateProducts =async (req,res) =>{
    try {
        const {id}= req.params;
        const product = await Product.findByIdAndUpdate(id,req.body);

        if(!product){
            return res.status(404).json({
                meaage:"error product not found"
            })
        }

        const updatedProduct = await Product.findById(id);//checking the updated id

        res.status(200).json(updatedProduct);

    } catch (error) {
        res.status(400).json({
            message:"error in databse"
        })
    }
}

export const createProduct= async (req,res)=>{
    try {
        
        const product = await Product.create(req.body);
        res.status(200).json(product);

    } catch (error) {
        res.status(400).json({
            message:"error in databse"
        })
    }
}

export const deleteProduct = async (req,res)=>{
    try {
        const { id } = req.params;
        const product = await Product.findByIdAndDelete(id);

        if(!product){
            return res.status(404).json({
                meaage:"error product not found"
            });
        }

        res.status(200).json({message:"deleted succcessfully"});

    } catch (error) {
        res.status(400).json({
            message:"error "
        })
    }
}

