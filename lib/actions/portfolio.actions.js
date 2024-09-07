'use server';
import { EmailTemplate } from "@/components/email-template";
import { client } from "@/sanity/lib/client";
import { revalidatePath } from "next/cache";
import { Resend } from 'resend';

const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY);


export const sendEmail = async (values) => {
    try {
      const data = await resend.emails.send({
        from: 'Acme <onboarding@resend.dev>',
        to: ['mi.benchaiba@esi-sba.dz'], // Use the email provided by the user
        subject: 'New Message from contact form',
        replyTo:values.email,
        text:values.message,
        react: EmailTemplate({ firstName: values.username,message:values.message,email:values.email }), // Customize the email template
      });
  
      return { success: true, data };
    } catch (error) {
      return { success: false, error: error.message };
    }
  };
export async function getSkills() {
    try {
        const query = '*[_type == "skill"]';
        const result = await client.fetch(query);

        // Ensure the result is serialized into plain objects
        return result
    } catch (error) {
        console.error("Error fetching skills:", error.message);
        throw new Error(`Error fetching skills: ${error.message}`);
    }
}

export async function getProfile() {
  try {
      const query = '*[_type == "profile"]';
      const result = await client.fetch(query);
      // Ensure the result is serialized into plain objects
      return result
  } catch (error) {
      console.error("Error fetching profile:", error.message);
      throw new Error(`Error fetching profile: ${error.message}`);
  }
}

export async function getSoftSkills() {
    try {
        const query = '*[_type == "softskill"]';
        const result = await client.fetch(query);
        // Ensure the result is serialized into plain objects
        return result
    } catch (error) {
        console.error("Error fetching skills:", error.message);
        throw new Error(`Error fetching skills: ${error.message}`);
    }
}

export async function getExperience() {
  try {
      const query = '*[_type == "experience"] | order(_createdAt asc)';
      const result = await client.fetch(query);
      // Ensure the result is serialized into plain objects
      return JSON.parse(JSON.stringify(result));

  } catch (error) {
      console.error("Error fetching skills:", error.message);
      throw new Error(`Error fetching skills: ${error.message}`);
  }
}

export async function getProjects() {
  try {
    const query = `*[_type == "project"] {
      ...,
      "image": image.asset->url,
      technologies[]->{
        name,
        "image": image.asset->url
      }
    } | order(_createdAt asc)`;

    const result = await client.fetch(query);

    return result;

  } catch (error) {
    console.error("Error fetching projects:", error.message);
    throw new Error(`Error fetching projects: ${error.message}`);
  }
}