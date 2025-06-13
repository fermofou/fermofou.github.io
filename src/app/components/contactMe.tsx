import { useForm, ValidationError } from "@formspree/react";

export default function ContactForm() {
  const [state, handleSubmit] = useForm("xzzgrybk");
  if (state.succeeded) {
    return (
      <p className="text-green-600 text-center font-semibold">
        I'll be in contact with you soon!
      </p>
    );
  }
  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="flex flex-col gap-2">
        <label htmlFor="email" className="font-medium">
          Your email address
        </label>
        <input
          id="email"
          type="email"
          name="email"
          className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary/50 bg-background"
          required
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="message" className="font-medium">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          className="border rounded px-3 py-2 min-h-[120px] focus:outline-none focus:ring-2 focus:ring-primary/50 bg-background"
          required
        />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
      </div>
      <button
        type="submit"
        disabled={state.submitting}
        className="w-full bg-primary text-white font-semibold py-2 px-4 rounded hover:bg-primary/90 transition-colors disabled:opacity-50"
      >
        Submit
      </button>
    </form>
  );
}
