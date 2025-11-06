"use server";

import { z } from 'zod';

const formSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  subject: z.string().min(5),
  message: z.string().min(10),
});

export async function submitInquiry(prevState: any, formData: FormData) {
  const validatedFields = formSchema.safeParse({
    name: formData.get('name'),
    email: formData.get('email'),
    subject: formData.get('subject'),
    message: formData.get('message'),
  });

  if (!validatedFields.success) {
    // This is a basic server-side check. Detailed errors are handled client-side.
    return {
      message: 'Invalid form data. Please check your entries and try again.',
      error: true,
    };
  }

  try {
    // In a real application, you would integrate with an email service (e.g., SendGrid, Resend)
    // or save the inquiry to a database here.
    console.log('New inquiry received:');
    console.log(validatedFields.data);

    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 1000));

    return {
      message: 'Thank you for your inquiry! We will get back to you shortly.',
      error: false,
    };
  } catch (error) {
    console.error('Error submitting inquiry:', error);
    return {
      message: 'An unexpected error occurred. Please try again later.',
      error: true,
    };
  }
}
