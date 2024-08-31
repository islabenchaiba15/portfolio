'use server';
import { client } from "@/sanity/lib/client";

export async function getSkills() {
    try {
        const query = '*[_type == "skill"]';
        const result = await client.fetch(query);
        // Ensure the result is serialized into plain objects
        return result;
    } catch (error) {
        console.error("Error fetching skills:", error.message);
        throw new Error(`Error fetching skills: ${error.message}`);
    }
}

export async function getExperience() {
  try {
      const query = '*[_type == "experience"] | order(_createdAt asc)';
      const result = await client.fetch(query);
      console.log("Fetched skills:", result);
      // Ensure the result is serialized into plain objects
      return JSON.parse(JSON.stringify(result));
  } catch (error) {
      console.error("Error fetching skills:", error.message);
      throw new Error(`Error fetching skills: ${error.message}`);
  }
}