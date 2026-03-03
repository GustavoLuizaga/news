import { createNewsService, getNewsBySlugService, getAllNewsService, deleteNewsService} from "../services/news.service.js";

export const createNews = async (req, res) => {
  const newsData = req.body;
  try {
    const news = await createNewsService(newsData);
    res.status(201).json({
      message: "Noticia creada",
      data: news,
      ok: true,
    });
  } catch (error) {
    res.status(500).json({
      error: error.message,
      ok: false,
    });
  }
};

export const getAllNews = async (req, res) => {
    try {
        const newsList = await getAllNewsService();
        res.status(200).json({
            message: "Noticias obtenidas",
            data: newsList,
            ok: true,
        });
    } catch (error) {
        res.status(500).json({
            error: error.message,
            ok: false,
        });
    }
};

export const getNewsBySlug = async (req, res) => {
  const { slug } = req.params;
  try {
    const news = await getNewsBySlugService(slug);
    res.status(200).json({
      message: "Noticia obtenida",
      data: news,
      ok: true,
    });
  } catch (error) {
    res.status(404).json({
      error: error.message,
      ok: false,
    });
  }
};

export const deleteNews = async (req, res) => {
    const { slug } = req.params;
    try {
        const result = await deleteNewsService(slug);
        res.status(200).json({message: result.message, ok: true});
    } catch (error) {
        res.status(500).json({error: error.message, ok: false});
    }
};
