'use client';
import React from 'react';
import axios from 'axios';
import { toast } from 'sonner';

const initial = {
  firstname: '',
  lastnames: '',
  email: '',
  message: '',
};

export function useLogic() {
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
        description: (
          <p className="text-green-600">
            Your email has been sent. I'll get back to you as soon as
            possible
          </p>
        ),
      });
      setformdata(initial);
    } catch (error) {
      toast('Error occured', {
        position: 'top-center',
        description: (
          <p className="text-red-600">
            {(error as unknown as Error).message ??
              'Error trying to send message'}
          </p>
        ),
        descriptionClassName: 'text-red-600',
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

  return {
    formdata,
    setformdata,
    handle_submit,
    isLoading,
    setLoading,
    abort,
    initial,
  };
}
