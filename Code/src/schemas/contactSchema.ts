import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email"),
  subject: z.string().min(4, "Subject must be descriptive"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});
