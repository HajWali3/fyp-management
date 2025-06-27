"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactSchema } from "@/schemas/contactSchema";
import { z } from "zod";
import { useState } from "react";
import toast from "react-hot-toast";

type ContactFormData = z.infer<typeof contactSchema>;

export default function ContactForm() {
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setLoading(true);
    // simulate API call
    setTimeout(() => {
      toast.error("Message sent successfully!");
      setLoading(false);
      reset();
    }, 1000);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full max-w-2xl bg-white dark:bg-gray-900 p-8 rounded-lg shadow-2xl border border-gray-100 dark:border-gray-700 space-y-6"
    >
      <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-800 dark:text-white">
        Contact Us
      </h2>

      <div>
        <label className="block text-sm text-gray-600 dark:text-gray-300">
          Name
        </label>
        <input
          {...register("name")}
          type="text"
          placeholder="Your full name"
          className="mt-1 w-full px-4 py-2 border rounded-lg bg-gray-50 dark:bg-gray-800 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        {errors.name && (
          <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
        )}
      </div>

      <div>
        <label className="block text-sm text-gray-600 dark:text-gray-300">
          Email
        </label>
        <input
          {...register("email")}
          type="email"
          placeholder="you@example.com"
          className="mt-1 w-full px-4 py-2 border rounded-lg bg-gray-50 dark:bg-gray-800 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        {errors.email && (
          <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
        )}
      </div>

      <div>
        <label className="block text-sm text-gray-600 dark:text-gray-300">
          Subject
        </label>
        <input
          {...register("subject")}
          type="text"
          placeholder="How can we help?"
          className="mt-1 w-full px-4 py-2 border rounded-lg bg-gray-50 dark:bg-gray-800 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        {errors.subject && (
          <p className="text-red-500 text-sm mt-1">{errors.subject.message}</p>
        )}
      </div>

      <div>
        <label className="block text-sm text-gray-600 dark:text-gray-300">
          Message
        </label>
        <textarea
          {...register("message")}
          rows={5}
          placeholder="Write your message here..."
          className="mt-1 w-full px-4 py-2 border rounded-lg bg-gray-50 dark:bg-gray-800 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        {errors.message && (
          <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
        )}
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition duration-300"
      >
        {loading ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}
