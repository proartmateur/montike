// src/pages/api/posts.ts
import type { APIRoute } from "astro";

export const GET: APIRoute = async () => {
  try {
    const response = await fetch("https://cosita.icu/realrest/wp-json/wp/v2/posts");
    if (!response.ok) throw new Error("Error fetching posts");

    const data = await response.json();

    return new Response(JSON.stringify({ success: true, data }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    return new Response(JSON.stringify({ success: false, error: error.message }), {
      status: 500,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
};
