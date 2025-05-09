'use client';
import React from 'react';
import axios from 'axios';
import { toast } from 'sonner';
import { Loader } from 'lucide-react';

const initial = {
  firstname: '',
  lastnames: '',
  email: '',
  message: '',
};

export function Form() {
  const [isLoading, setLoading] = React.useState(false);
  const [abort, setAbort] = React.useState<AbortSignal>();
  const [formdata, setformdata] = React.useState(initial);

  const handle_submit = async (event: React.FormEvent) => {
    event.preventDefault();
    setLoading(true);

    try {
      const emailData = {
        from: formdata.email,
        name: `${formdata.firstname} ${formdata.lastnames}`,
        message: formdata.message,
      };

      await axios.post(
        'https://api.brevo.com/v3/smtp/email',
        {
          sender: {
            name: 'inScript',
            email: 'support@inscripconnect.space',
          },
          to: [
            {
              email: 'gokebello@gmail.com',
              name: 'Goke Bello',
            },
          ],
          subject: 'Email From Personal Website',
          htmlContent: JSON.stringify(emailData),
        },
        {
          headers: {
            'api-key':
              (process.env.NEXT_PUBLIC_EMAIL_API_KEY as string) ?? '',
            accept: 'application/json',
            'content-type': 'application/json',
          },
          timeout: 10000,
          signal: abort,
        }
      );
      setLoading(false);
      toast('Message sent successfully', {
        position: 'top-center',
        description:
          "Your email has been sent. I'll get back to you as soon as possible",
      });
      setformdata(initial);
    } catch (error) {
      toast('Error occured', {
        position: 'top-center',
        description:
          (error as unknown as Error).message ??
          'Error trying to send message',
      });
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };

  React.useEffect(() => {
    const controller = new AbortController();
    setAbort(controller.signal);
    return () => controller.abort();
  }, []);

  return (
    <form
      onSubmit={handle_submit}
      className="mx-auto mt-16 max-w-xl sm:mt-20"
    >
      <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
        <div>
          <label
            htmlFor="first-name"
            className="block text-sm/6 font-semibold text-gray-900"
          >
            First name
          </label>
          <div className="mt-2.5">
            <input
              id="first-name"
              name="first-name"
              value={formdata.firstname}
              onChange={(e) =>
                setformdata({
                  ...formdata,
                  firstname: e.currentTarget.value,
                })
              }
              required={true}
              disabled={isLoading}
              type="text"
              autoComplete="given-name"
              className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
            />
          </div>
        </div>
        <div>
          <label
            htmlFor="last-name"
            className="block text-sm/6 font-semibold text-gray-900"
          >
            Last name
          </label>
          <div className="mt-2.5">
            <input
              id="last-name"
              name="last-name"
              type="text"
              value={formdata.lastnames}
              onChange={(e) =>
                setformdata({
                  ...formdata,
                  lastnames: e.currentTarget.value,
                })
              }
              required={true}
              disabled={isLoading}
              autoComplete="family-name"
              className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
            />
          </div>
        </div>
        <div className="sm:col-span-2">
          <label
            htmlFor="email"
            className="block text-sm/6 font-semibold text-gray-900"
          >
            Email
          </label>
          <div className="mt-2.5">
            <input
              id="email"
              name="email"
              type="email"
              value={formdata.email}
              onChange={(e) =>
                setformdata({
                  ...formdata,
                  email: e.currentTarget.value,
                })
              }
              required={true}
              disabled={isLoading}
              autoComplete="email"
              className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
            />
          </div>
        </div>
        <div className="sm:col-span-2">
          <label
            htmlFor="message"
            className="block text-sm/6 font-semibold text-gray-900"
          >
            Message
          </label>
          <div className="mt-2.5">
            <textarea
              id="message"
              name="message"
              rows={4}
              value={formdata.message}
              onChange={(e) =>
                setformdata({
                  ...formdata,
                  message: e.currentTarget.value,
                })
              }
              required={true}
              disabled={isLoading}
              className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
              defaultValue={''}
            />
          </div>
        </div>
      </div>
      <div className="mt-10">
        <button
          disabled={isLoading}
          type="submit"
          className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          {isLoading ? <Loader /> : "Let's talk"}
        </button>
      </div>
    </form>
  );
}
