function Contact() {
  return (
    <div className="px-4 md:px-8 lg:px-16 py-10">
      <div className="h-20 w-full flex items-center justify-center">
        <h2 className="text-3xl font-semibold">Contact</h2>
      </div>
      <form className="max-w-xl mx-auto grid gap-4" action="mailto:shivharekrishraj@gmail.com" method="GET">
        <input className="border rounded px-3 py-2 bg-white dark:bg-neutral-900" name="subject" placeholder="Subject" />
        <textarea className="border rounded px-3 py-2 min-h-32 bg-white dark:bg-neutral-900" name="body" placeholder="Message" />
        <button type="submit" className="rounded-full border px-4 py-2 text-sm font-semibold w-fit">Send Email</button>
      </form>
    </div>
  );
}

export default Contact;