import { useNavigate } from "react-router-dom";

export function NewCard({ title, content, author, category, date, imageUrl, slug }) {
  const hasImage = !!imageUrl;
  const hasContent = !!content;
  const backendUrl = import.meta.env.VITE_BACKEND_URL || '';
  const navigate = useNavigate();

  const handleDetailsNew = () => {
     navigate(`/news/${slug}`);
  }

  return (
    <article onClick = {handleDetailsNew} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition duration-300 cursor-pointer">
      {hasImage && (
        <div className="w-full h-52 overflow-hidden">
          <img
            src={backendUrl + imageUrl}
            alt={title || "news image"}
            className="w-full h-full object-cover hover:scale-105 transition duration-300"
          />
        </div>
      )}

      {(title || hasContent || category || author || date) && (
        <div className="p-5">
          {category && (
            <p className="text-sm font-semibold text-green-600 uppercase tracking-wide mb-2">
              {category}
            </p>
          )}

          {title && (
            <h2 className="text-xl font-bold text-gray-800 mb-2 leading-tight">
              {title}
            </h2>
          )}

          {hasContent && (
            <p className="text-gray-600 text-sm mb-3 line-clamp-3">{content}</p>
          )}

          {(author || date) && (
            <div className="text-xs text-gray-500 flex justify-between mt-3">
              {author && <span>Por {author}</span>}
              {date && <span>{new Date(date).toLocaleDateString()}</span>}
            </div>
          )}
        </div>
      )}
    </article>
  );
}
