const Modal = ({ title, productTitle, setProductTitle, productDescription, setProductDescription, productPrice, setProductPrice, productImage, setProductImage, handleSubmit, closeModal }) => {
    return (
        <div className="modal modal-open">
            <div className="modal-box">
                <h3 className="font-bold text-lg">{title}</h3>

                <input
                    type="text"
                    placeholder="Product Title"
                    value={productTitle}
                    onChange={(e) => setProductTitle(e.target.value)}
                    className="input input-bordered w-full mt-4"
                />
                <input
                    type="text"
                    placeholder="Product Description"
                    value={productDescription}
                    onChange={(e) => setProductDescription(e.target.value)}
                    className="input input-bordered w-full mt-4"
                />
                <input
                    type="number"
                    placeholder="Product Price"
                    value={productPrice}
                    onChange={(e) => setProductPrice(e.target.value)}
                    className="input input-bordered w-full mt-4"
                />
                <input
                    type="text"
                    placeholder="Product Image URL"
                    value={productImage}
                    onChange={(e) => setProductImage(e.target.value)}
                    className="input input-bordered w-full mt-4"
                />

                <div className="modal-action">
                    <button className="btn btn-primary" onClick={handleSubmit}>
                        Save
                    </button>
                    <button className="btn" onClick={closeModal}>
                        Cancel
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Modal;
