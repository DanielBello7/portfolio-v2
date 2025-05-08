'use client';

import { Dialog, DialogPanel } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { navigation } from './data';
import { Socials } from './socials';
import { Logo } from '../logo';

type Props = {
  isOpen: boolean;
  open: (inpt: boolean) => void;
};
export function SideBar(props: Props) {
  return (
    <Dialog open={props.isOpen} onClose={props.open} className="lg:hidden">
      <div className="fixed inset-0 z-50" />
      <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
        <div className="flex items-center justify-between">
          <div className="-m-1.5 p-1.5">
            <Logo />
          </div>
          <button
            type="button"
            onClick={() => props.open(false)}
            className="-m-2.5 rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Close menu</span>
            <XMarkIcon aria-hidden="true" className="size-6" />
          </button>
        </div>
        <div className="mt-6 flow-root">
          <div className="-my-6 divide-y divide-gray-500/10">
            <div className="space-y-2 py-6">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                >
                  {item.name}
                </a>
              ))}
            </div>
            <div className="py-6">
              <Socials />
            </div>
          </div>
        </div>
      </DialogPanel>
    </Dialog>
  );
}
