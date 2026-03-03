import fs from "fs/promises";
import matter from "gray-matter";
import path from "path";
import crypto from "crypto";

export const createNewsService = async (newsData) => {
  const { title, content, author, category } = newsData;

  const id = crypto.randomUUID();

  const slug = title.toLowerCase().replace(/\s+/g, "-");

  const contentDir = path.resolve("./src/modules/news/content");
  const filePath = path.join(contentDir, `${slug}.md`);

  await fs.mkdir(contentDir, { recursive: true });

  const markdown = `---
id: ${id}
slug: ${slug}
title: ${title}
author: ${author}
date: ${new Date().toISOString()}
category: ${category}
---

${content}
`;

  await fs.writeFile(filePath, markdown);

  return {
    id,
    title,
    slug,
    author,
    category,
    createdAt: new Date().toISOString(),
  };
};

export const getAllNewsService = async () => {
  const contentDir = path.resolve("./src/modules/news/content");
  const files = await fs.readdir(contentDir);
  const newsList = [];

  for (const file of files) {
    const filePath = path.join(contentDir, file);
    const fileContent = await fs.readFile(filePath, "utf-8");
    const { data, content } = matter(fileContent);
    newsList.push({ ...data, content });
  }

  return newsList;
};

export const getNewsBySlugService = async (slug) => {
  const contentDir = path.resolve("./src/modules/news/content");
  const filePath = path.join(contentDir, `${slug}.md`);

  try {
    const fileContent = await fs.readFile(filePath, "utf-8");

    const { data, content } = matter(fileContent);

    return {
      ...data,
      slug,
      content,
    };
  } catch (error) {
    throw new Error("Noticia no encontrada");
  }
};

export const deleteNewsService = async (slug) => {
  const contentDir = path.resolve("./src/modules/news/content");
  const filePath = path.join(contentDir, `${slug}.md`);

  try {
    await fs.unlink(filePath);
    return { message: "Noticia eliminada" };
  } catch (error) {
    throw new Error("No se pudo eliminar la noticia");
  }
}
