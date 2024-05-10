import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { deleteRecord, getRecords } from "@/utils/recordsFunctions";

const MainPage = () => {
  const router = useRouter();
  const [records, setRecords] = useState([]);

  const fetchRecords = async () => {
    try {
      const response = await getRecords();

      setRecords(response);
    } catch (error) {
      console.error(error);
    }
  };

  const handleDeleteRecord = async (id) => {
    try {
      const response = await deleteRecord(id);

      if (response.deletedCount === 1) {
        const newRecords = records.filter((record) => record._id !== id);
        setRecords(newRecords);
      }
    } catch (error) {
      console.log(error)
    }
  };

  const handleCreateRecord = () => {
    router.push(`/records/create`);
  };
  

  const handleUpdateRecord = (id) => {
    router.push(`/records/edit?id=${id}`);
  };

  useEffect(() => {
    fetchRecords();
  }, []);

  return (
    <><div className="max-w-3xl mx-auto text-center mt-16">
      <h1 className="text-4xl font-bold text-gray-900 leading-tight mb-2 border-t-4 border-b-4 border-purple-600 py-4">
        Biblioteca Digitala
      </h1> </div>
      <div className="p-7 flex flex-wrap gap-4">
        {records.map((record) => (
          <div
            className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
            key={record._id}
          >
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {record.titlu}
            </h5>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              {record.autor}
            </p>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              {record.descriere}
            </p>
            <p className="mb-4 font-normal text-gray-700 dark:text-gray-400">
              {record.categorie}
            </p>
            <div className="flex justify-center">
              <button
                type="button"
                className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                onClick={() => handleUpdateRecord(record._id)}
              >
                Update
              </button>
              <button
                type="button"
                className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                onClick={() => handleDeleteRecord(record._id)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="max-w-3xl mx-auto text-center mt-16">
              <button
                type="button"
                className="class=mb-4 text-white bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                onClick={() => handleCreateRecord()}
              >
                Create
              </button>
            </div></>
  );
};

export default MainPage;