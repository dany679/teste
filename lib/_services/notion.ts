import { Client } from "@notionhq/client";
import { getLocale } from "next-intl/server";
const nt =
  process.env.NOTION_API_KEY ||
  "secret_Xg2CoASRIGs6EEx64NCtejtnuFNpV2UBn0MC01XPv";

const notion = new Client({ auth: nt });
const secret = process.env.NOTION_SECRET;
const link = "037009368a394a7da3747f2441c4e2d8";
// https://www.notion.so/037009368a394a7da3747f2441c4e2d8?v=06ffd648bc1044fe99fe3aa412023092&pvs=4
const getPostBlogs = async () => {
  const local = await getLocale();
  console.log(local);
  const response = await notion.databases.query({
    database_id: link,
    filter: {
      and: [
        {
          property: "published_at",
          date: {
            is_not_empty: true,
          },
        },
        {
          property: "status",
          select: {
            equals: "completed",
          },
        },
        {
          property: "lang",
          select: {
            equals: local,
          },
        },
      ],
    },
    sorts: [
      {
        property: "published_at",
        direction: "descending",
      },
    ],
    page_size: 10,
  });
  // console.log(response.results[0]);
  // console.log(response.results.length);
  // // console.log(response.results[1]?.properties?.lang);
  // // console.log(response.results[0]?.properties?.status.name);
  // console.log(response.results.length);
  // // console.log(response.results);
  return response.results;
};
export { getPostBlogs };
