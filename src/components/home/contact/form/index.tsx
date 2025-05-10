'use client';
import classnames from 'classnames';
import React from 'react';
import { Loader } from 'lucide-react';
import { useLogic } from './use-logic';

export function Form() {
  const { handle_submit, formdata, setformdata, isLoading } = useLogic();
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
              className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-amber-900"
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
              className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-amber-900"
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
              className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-amber-900"
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
              className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-amber-900"
            />
          </div>
        </div>
      </div>
      <div className="mt-10">
        <button
          disabled={isLoading}
          type="submit"
          className={classnames(
            'w-full rounded-md px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-xs flex items-center justify-center',
            {
              'bg-amber-900 cursor-not-allowed': isLoading,
              'bg-amber-900 hover:bg-amber-800 cursor-pointer': !isLoading,
            }
          )}
        >
          {isLoading ? (
            <Loader className="size-4 text-whit animate-spin" />
          ) : (
            "Let's talk"
          )}
        </button>
      </div>
    </form>
  );
}
