import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export function NewDetails() {
  const { slug } = useParams();
  const [detailNew, setDetailNew] = useState(null);

  const getNewDetails = async () => {
    const response = await fetch(
      import.meta.env.VITE_BACKEND_URL + `/news/${slug}`
    );

    if (!response.ok) {
      throw new Error("Failed to fetch news details");
    }

    const data = await response.json();
    setDetailNew(data.data);
  };

  useEffect(() => {
    getNewDetails();
  }, [slug]);

  if (!detailNew) {
    return <p className="text-center mt-20 text-gray-500">Cargando...</p>;
  }

  return (
    <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      
      <header className="mb-8 text-center sm:text-left">
        <p className="text-sm text-gray-500 mb-3 uppercase tracking-wide">
          {detailNew.category} •{" "}
          {detailNew.date &&
            new Date(detailNew.date).toLocaleDateString()}
        </p>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
          {detailNew.title}
        </h1>
      </header>

      {detailNew.image && (
        <div className="mb-10">
          <img
            src={`${import.meta.env.VITE_BACKEND_URL}${detailNew.image}`}
            alt={detailNew.title}
            className="w-full max-h-112.5 object-cover rounded-2xl shadow-lg"
          />
        </div>
      )}

      <p className="text-xl text-gray-700 leading-relaxed whitespace-pre-line">
        {detailNew.content}
      </p>

    </section>
  );
}