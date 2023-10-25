import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    description: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
        min: 0,
    },
    brand: {
        type: String,
        required: true,
    },
    imageUrls: [
        {
            type: String,
        }
    ],
    ratings: [
        {
            user: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "User",
            },
            rating: {
                type: Number,
                required: true,
                min: 0,
                max: 5,
            },
        }
    ],
    stock: {
        type: Number,
        required: true,
        min: 0,
    },
    seller: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    reviews: [
        {
            user: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "User",
                required: true,
            },
            review: {
                type: String,
                required: true,
            },
            date: {
                type: Date,
                default: Date.now,
            },
        }
    ],
    attributes: {
        type: Map,
        of: String,
    }
}, { timestamps: true });

export default mongoose.model("Product", productSchema)