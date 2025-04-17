'use client';

import * as AlertDialog from '@radix-ui/react-alert-dialog';
import { Button } from './button';
import { Flex } from '@radix-ui/themes'; // optional if you're using Radix themes

export default function RevokeAccessDialog() {
  return (
    <AlertDialog.Root>
      <AlertDialog.Trigger asChild>
        <Button className="bg-red-600 text-white hover:bg-red-700">Revoke access</Button>
      </AlertDialog.Trigger>

      <AlertDialog.Portal>
        <AlertDialog.Overlay className="fixed inset-0 bg-black/50" />
        <AlertDialog.Content className="fixed top-1/2 left-1/2 max-w-md w-full bg-gray-100 rounded-lg p-6 shadow-lg transform -translate-x-1/2 -translate-y-1/2">
          <AlertDialog.Title className="text-gray-700 font-bold">Log Out</AlertDialog.Title>
          <AlertDialog.Description className="mt-2 text-sm text-gray-600">
            Are you sure? You will be logged out, and you have to log in again. any existing sessions will be expired.
          </AlertDialog.Description>

          <div className="mt-6 flex justify-end gap-3">
            <AlertDialog.Cancel asChild>
            <Button className="bg-gray-200 text-gray-700 hover:bg-gray-300">Cancel</Button>


            </AlertDialog.Cancel>
            <AlertDialog.Action asChild>
              <Button className="bg-red-600 text-white hover:bg-red-700">Log Out</Button>
            </AlertDialog.Action>
          </div>
        </AlertDialog.Content>
      </AlertDialog.Portal>
    </AlertDialog.Root>
  );
}
