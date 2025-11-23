'use client';

import { useState } from 'react';

interface GroupModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function GroupModal({ isOpen, onClose }: GroupModalProps) {
  const [preferences, setPreferences] = useState(['', '', '']);

  const handlePreferenceChange = (index: number, value: string) => {
    const newPreferences = [...preferences];
    newPreferences[index] = value;
    setPreferences(newPreferences);
  };

  const addPreference = () => {
    setPreferences([...preferences, '']);
  };

  const removePreference = (index: number) => {
    if (preferences.length > 1) {
      setPreferences(preferences.filter((_, i) => i !== index));
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-3xl max-w-md w-full max-h-[80vh] overflow-y-auto animate-fadeIn">
        <div className="sticky top-0 bg-white border-b border-gray-200 p-6 rounded-t-3xl">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold text-gray-900">Group Mode 👥</h2>
            <button
              onClick={onClose}
              className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
          <p className="text-sm text-gray-600 mt-2">
            Add everyone's preferences to find the perfect spot for your group!
          </p>
        </div>

        <div className="p-6 space-y-4">
          {preferences.map((pref, index) => (
            <div key={index} className="flex gap-2">
              <input
                type="text"
                value={pref}
                onChange={(e) => handlePreferenceChange(index, e.target.value)}
                placeholder={`Person ${index + 1}'s preference`}
                className="flex-1 px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-sm"
              />
              {preferences.length > 1 && (
                <button
                  onClick={() => removePreference(index)}
                  className="w-10 h-10 flex items-center justify-center text-red-500 hover:bg-red-50 rounded-xl transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                    <path fillRule="evenodd" d="M16.5 4.478v.227a48.816 48.816 0 0 1 3.878.512.75.75 0 1 1-.256 1.478l-.209-.035-1.005 13.07a3 3 0 0 1-2.991 2.77H8.084a3 3 0 0 1-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 0 1-.256-1.478A48.567 48.567 0 0 1 7.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 0 1 3.369 0c1.603.051 2.815 1.387 2.815 2.951Zm-6.136-1.452a51.196 51.196 0 0 1 3.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 0 0-6 0v-.113c0-.794.609-1.428 1.364-1.452Zm-.355 5.945a.75.75 0 1 0-1.5.058l.347 9a.75.75 0 1 0 1.499-.058l-.346-9Zm5.48.058a.75.75 0 1 0-1.498-.058l-.347 9a.75.75 0 0 0 1.5.058l.345-9Z" clipRule="evenodd" />
                  </svg>
                </button>
              )}
            </div>
          ))}

          <button
            onClick={addPreference}
            className="w-full py-3 border-2 border-dashed border-gray-300 rounded-xl text-gray-600 hover:border-indigo-400 hover:text-indigo-600 transition-colors text-sm font-medium"
          >
            + Add Another Person
          </button>

          <div className="pt-4">
            <button className="w-full py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-medium transition-colors">
              Find Common Ground 🎯
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
