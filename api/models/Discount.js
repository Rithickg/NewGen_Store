import mongoose from "mongoose";

const discountSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    amount: {
        type: Number,
        required: true,
        min: 0
    },
    startDate: {
        type: Date,
        required: true
    },
    endDate: {
        type: Date,
        required: true
    },
    products: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Product",
            required: true
        }
    ]
}, { timestamps: true })

export default mongoose.model("Discount", discountSchema)