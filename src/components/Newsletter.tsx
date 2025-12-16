import { useId, useState } from 'react';
import type { FormEvent } from 'react';

export default function Newsletter() {
  const emailId = useId();
  const consentId = useId();

  const [email, setEmail] = useState('');
  const [consent, setConsent] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  function onSubmit(e: FormEvent) {
    e.preventDefault();

    const isValidEmail = /.+@.+\..+/.test(email);
    if (!isValidEmail || !consent) return;

    setSubmitted(true);
  }

  return (
    <section id="subscribe" className="bg-black py-16 md:py-24">
      <div className="px-8 md:px-16 lg:px-24">
        <div className="max-w-5xl">
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-light text-white mb-4">
            Join The BGS Newsletter
          </h2>
          <p className="text-3xl md:text-5xl lg:text-6xl font-light text-slate-400 leading-tight">
            Be the first to receive the latest news and updates.
          </p>
        </div>

        <form onSubmit={onSubmit} className="mt-16 md:mt-20 max-w-3xl">
          {/* Email */}
          <label htmlFor={emailId} className="block text-white text-lg mb-6">
            Email <span className="text-white">*</span>
          </label>

          <input
            id={emailId}
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              setSubmitted(false);
            }}
            placeholder=""
            className="w-full bg-transparent text-white text-lg outline-none border-b border-white/70 pb-4"
            required
          />

          {/* Consent */}
          <div className="mt-8 flex items-start gap-4">
            <input
              id={consentId}
              type="checkbox"
              checked={consent}
              onChange={(e) => {
                setConsent(e.target.checked);
                setSubmitted(false);
              }}
              className="mt-1 h-6 w-6 rounded border border-white/70 bg-transparent accent-white"
              required
            />
            <label htmlFor={consentId} className="text-white text-lg">
              Yes, subscribe me to your newsletter. <span className="text-white">*</span>
            </label>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="mt-10 inline-flex items-center justify-center px-14 py-4 rounded-full bg-white text-black text-lg font-semibold tracking-wide hover:bg-gray-200 transition-colors"
          >
            SUBSCRIBE
          </button>

          {submitted && (
            <p className="mt-6 text-sm text-white/80">
              Thanks — you&apos;re subscribed.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
