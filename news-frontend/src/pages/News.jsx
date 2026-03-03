import { useEffect, useState } from "react";
import { NewCard } from "../components/NewCard";

export function News() {
  const [news, setNews] = useState([]);

  const getAllNews = async () => {
    try {
      const response = await fetch(
        import.meta.env.VITE_BACKEND_URL + "/news"
      );

      if (!response.ok) {
        throw new Error("Failed to fetch news");
      }

      const data = await response.json();
      setNews(Array.isArray(data.data) ? data.data : []);
    } catch (error) {
      console.error("Error fetching news:", error);
      setNews([]);
    }
  };

  useEffect(() => {
    getAllNews();
  }, []);

  return (
    <section>
      <h1 className="text-3xl font-bold mb-6">Noticias</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {news.length > 0 ? (
          news.map((newItem) => (
            <NewCard
              key={newItem.id}
              title={newItem.title}
              author={newItem.author}
              category={newItem.category}
              date={newItem.date}
              imageUrl={newItem.image}
              slug={newItem.slug}
            />
          ))
        ) : (
          <p className="">
            No hay noticias disponibles
          </p>
        )}
      </div>
    </section>
  );
}