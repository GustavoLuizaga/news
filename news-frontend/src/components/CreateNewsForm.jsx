import { useState } from "react";

export function CreateNewsForm() {
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

    alert("Noticia creada");
  };

  return (
    <section className="max-w-2xl mx-auto p-6">
      <h2 className="text-3xl font-bold mb-6">Crear Noticia</h2>

      <form onSubmit={handleSubmit} className="space-y-4">

        <input
          type="text"
          name="title"
          placeholder="Título"
          value={formData.title}
          onChange={handleChange}
          className="w-full border p-3 rounded"
          required
        />

        <input
          type="text"
          name="author"
          placeholder="Autor"
          value={formData.author}
          onChange={handleChange}
          className="w-full border p-3 rounded"
          required
        />

        <input
          type="text"
          name="category"
          placeholder="Categoría"
          value={formData.category}
          onChange={handleChange}
          className="w-full border p-3 rounded"
          required
        />

        <select
          name="type"
          value={formData.type}
          onChange={handleChange}
          className="w-full border p-3 rounded"
        >
          <option value="text">Solo Texto</option>
          <option value="image">Solo Imagen</option>
          <option value="text_image">Texto + Imagen</option>
        </select>

        {(formData.type === "text" ||
          formData.type === "text_image") && (
          <textarea
            name="content"
            placeholder="Contenido"
            value={formData.content}
            onChange={handleChange}
            className="w-full border p-3 rounded h-40"
          />
        )}

        {(formData.type === "image" ||
          formData.type === "text_image") && (
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="w-full"
          />
        )}

        <button
          type="submit"
          className="bg-black text-white px-6 py-3 rounded hover:bg-gray-800"
        >
          Publicar
        </button>

      </form>
    </section>
  );
}