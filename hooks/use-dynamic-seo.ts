// // import { PagesApi } from "@/services/resources";
// import { ResponseResult } from "@/services/resources/types/base.type";
// import { useEffect } from "react";

// export function useDynamicSEO(pageId: string) {
//   useEffect(() => {
//     PagesApi.get<ResponseResult<any>>().then(({ data }: any) => {
//       const homePage = data.find((page: any) => page.page_id === pageId);
//       if (homePage?.seo) {
//         document.title = homePage.seo.title;

//         let metaDescription = document.querySelector(
//           'meta[name="description"]'
//         );
//         if (!metaDescription) {
//           metaDescription = document.createElement("meta");
//           metaDescription.setAttribute("name", "description");
//           document.head.appendChild(metaDescription);
//         }
//         metaDescription.setAttribute("content", homePage.seo.description);

//         let metaRobots = document.querySelector('meta[name="robots"]');
//         if (!metaRobots) {
//           metaRobots = document.createElement("meta");
//           metaRobots.setAttribute("name", "robots");
//           document.head.appendChild(metaRobots);
//         }
//         metaRobots.setAttribute(
//           "content",
//           homePage.seo.robots || "index,follow"
//         );

//         let linkCanonical = document.querySelector('link[rel="canonical"]');
//         if (homePage.seo.canonical_url) {
//           if (!linkCanonical) {
//             linkCanonical = document.createElement("link");
//             linkCanonical.setAttribute("rel", "canonical");
//             document.head.appendChild(linkCanonical);
//           }
//           linkCanonical.setAttribute("href", homePage.seo.canonical_url);
//         }

//         const ogTags = [
//           { property: "og:title", content: homePage.seo.title },
//           { property: "og:description", content: homePage.seo.description },
//           { property: "og:type", content: "website" },
//         ];

//         if (homePage.seo.image) {
//           ogTags.push({ property: "og:image", content: homePage.seo.image });
//         }

//         ogTags.forEach(({ property, content }) => {
//           let metaTag = document.querySelector(`meta[property="${property}"]`);
//           if (!metaTag) {
//             metaTag = document.createElement("meta");
//             metaTag.setAttribute("property", property);
//             document.head.appendChild(metaTag);
//           }
//           metaTag.setAttribute("content", content);
//         });

//         const twitterTags = [
//           { name: "twitter:card", content: "summary_large_image" },
//           { name: "twitter:title", content: homePage.seo.title },
//           { name: "twitter:description", content: homePage.seo.description },
//         ];

//         if (homePage.seo.image) {
//           twitterTags.push({
//             name: "twitter:image",
//             content: homePage.seo.image,
//           });
//         }

//         twitterTags.forEach(({ name, content }) => {
//           let metaTag = document.querySelector(`meta[name="${name}"]`);
//           if (!metaTag) {
//             metaTag = document.createElement("meta");
//             metaTag.setAttribute("name", name);
//             document.head.appendChild(metaTag);
//           }
//           metaTag.setAttribute("content", content);
//         });
//       }
//     // });
//   }, []);
// }
