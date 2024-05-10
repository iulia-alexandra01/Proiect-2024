import React, { useState } from "react";
import { useRouter } from "next/router";

const RecordForm = (props) => {
  const { data, onSubmit } = props;
  const router = useRouter();
  const [entry, setEntry] = useState(data);

  const updateEntry = (type, value) => {
    setEntry({ ...entry, [type]: value });
  };

  const handleCancel = () => {
    router.push("/");
  }

  return (
    <div className="flex justify-center p-4">
      <div className="border p-4 rounded-md shadow-sm flex flex-col gap-4 w-full max-w-80">
        <div>
          <label
            htmlFor="titlu"
            className="block mb-3 text-sm font-medium text-gray-900 dark:text-white"
          >
            Titlu
          </label>
          <input
            type="text"
            id="titlu"
            value={entry.titlu}
            onChange={(e) => updateEntry("titlu", e.target.value)}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Titlu"
            required
          />
        </div>
        <div>
          <label
            htmlFor="autor"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Autor
          </label>
          <textarea
            id="autor"
            value={entry.autor}
            onChange={(e) => updateEntry("autor", e.target.value)}
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Autor"
          ></textarea>
        </div>
        <div>
          <label
            htmlFor="descriere"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Descriere
          </label>
          <textarea
            id="descriere"
            rows="4"
            value={entry.descriere}
            onChange={(e) => updateEntry("descriere", e.target.value)}
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Adaugati descrierea cartii"
          ></textarea>
        </div>
        <div>
          <label
            htmlFor="categorie"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Categorie
          </label>
          <textarea
            id="categorie"
            value={entry.categorie}
            onChange={(e) => updateEntry("categorie", e.target.value)}
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Adaugati categoria cartii"
          ></textarea>
        </div>
        <div className="w-full flex justify-center gap-4">
            <button
            type="button"
            onClick={handleCancel}
            className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
          >
            Cancel
          </button>
          <button
            type="button"
            onClick={() => onSubmit(entry)}
            className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
          >
            {entry._id ? "Update" : "Create"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default RecordForm;