import fs from "fs/promises";

export const createNewsService = async (newsData) => {
  const { title, content, author, category } = newsData;

  const slug = title.toLowerCase().replace(/\s+/g, "-");
  const filePath = `./content/${slug}.md`;

  const markdown = `
---
title: ${title}
author: ${author}
date: ${new Date().toISOString()}
category: ${category}
---

${content}
`;

  await fs.writeFile(filePath, markdown);
  return { message: "Noticia creada" };
};
