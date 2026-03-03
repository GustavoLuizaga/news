import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function CreateNewsForm() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: "",
    content: "",
    author: "",
    category: "",
    type: "text",
  });

  const [imageFile, setImageFile] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleImageChange = (e) => {
    setImageFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = new FormData();
    Object.keys(formData).forEach((key) => {
      form.append(key, formData[key]);
    });

    if (imageFile) {
      form.append("image", imageFile);
    }

    await fetch(import.meta.env.VITE_BACKEND_URL + "/news", {
      method: "POST",
      body: form,
    });

    navigate("/");
  };

  return (
    <section className="py-12 px-4">
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-2xl shadow-sm border border-gray-100">

        <h2 className="text-4xl font-extrabold text-gray-800 mb-8 tracking-tight">
          Crear Nueva Noticia
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">

          <input
            type="text"
            name="title"
            placeholder="Título de la noticia"
            value={formData.title}
            onChange={handleChange}
            className="w-full border border-gray-200 p-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 transition"
            required
          />

          <div className="grid md:grid-cols-2 gap-4">
            <input
              type="text"
              name="author"
              placeholder="Autor"
              value={formData.author}
              onChange={handleChange}
              className="w-full border border-gray-200 p-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 transition"
              required
            />

            <input
              type="text"
              name="category"
              placeholder="Categoría"
              value={formData.category}
              onChange={handleChange}
              className="w-full border border-gray-200 p-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 transition"
              required
            />
          </div>

          <select
            name="type"
            value={formData.type}
            onChange={handleChange}
            className="w-full border border-gray-200 p-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 transition bg-white"
          >
            <option value="text">Solo Texto</option>
            <option value="image">Solo Imagen</option>
            <option value="text_image">Texto + Imagen</option>
          </select>

          {(formData.type === "text" ||
            formData.type === "text_image") && (
            <textarea
              name="content"
              placeholder="Escribe el contenido aquí..."
              value={formData.content}
              onChange={handleChange}
              className="w-full border border-gray-200 p-4 rounded-xl h-48 resize-none focus:outline-none focus:ring-2 focus:ring-emerald-500 transition"
            />
          )}

          {(formData.type === "image" ||
            formData.type === "text_image") && (
            <label className="flex flex-col items-center justify-center w-full p-6 border-2 border-dashed border-gray-300 rounded-xl cursor-pointer hover:border-emerald-500 transition">
              <span className="text-gray-600 font-medium">
                {imageFile ? imageFile.name : "Seleccionar imagen"}
              </span>
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="hidden"
              />
            </label>
          )}

          <div className="flex gap-4 pt-4">

            <button
              type="button"
              onClick={() => navigate("/")}
              className="w-1/2 border border-gray-300 text-gray-700 py-4 rounded-xl font-medium hover:bg-gray-100 transition"
            >
              Cancelar
            </button>

            <button
              type="submit"
              className="w-1/2 bg-emerald-600 text-white py-4 rounded-xl font-semibold text-lg hover:bg-emerald-700 transition shadow-sm"
            >
              Publicar
            </button>

          </div>

        </form>
      </div>
    </section>
  );
}