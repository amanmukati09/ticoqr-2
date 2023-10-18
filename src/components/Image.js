import React, { useState } from "react";

const Image = () => {
  const [input, setInput] = useState("");
  const [imageUrl, setImageUrl] = useState(null);

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleGenerateImage = async () => {
    if (input.trim() === "") return;

    try {
      const response = await fetch("http://localhost:8001/generateImage", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message: input }),
      });

      if (response.ok) {
        const data = await response.json();
        const generatedImageUrl = data.imageUrl;
        setImageUrl(generatedImageUrl);
      }
    } catch (error) {
      console.error("An error occurred during image generation:", error);
    }
  };

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-12 col-md-6 offset-md-3">
          <div className="container font-monospace text-warning" style={{ fontSize: "10vh", textAlign: "center" }}>
            TICO Image
          </div>
          <div className="card bg-success text-light mb-5">
            <div className="card-body">
              <div className="chat-box">
                <div className="chat-message user">
                  {imageUrl ? (
                    <img src={imageUrl} alt="Generated Image" style={{ maxWidth: "100%" }} />
                  ) : (
                    "No image available."
                  )}
                </div>
              </div>
              <div className="input-group mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Type here.."
                  value={input}
                  onChange={handleInputChange}
                />
                <div className="input-group-append mx-2">
                  <button className="btn btn-primary mx-2" onClick={handleGenerateImage}>
                    Generate Image
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Image;
