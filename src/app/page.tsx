import { BsEye } from "react-icons/bs";
import { IoCreate } from "react-icons/io5";
import { FaEdit } from "react-icons/fa";
import { MdDrafts } from "react-icons/md";
import Link from "next/link";
import InvoiceLayout from "@/components/InvoiceLayout";

export default function Home() {
  return (
    <>
      <section className="bg-gray-900 text-white">
        <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
          <div className="mx-auto max-w-3xl text-center">
            <h1
              className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl"
            >
              Invoicing was never this easy

              <span className="sm:block"> Create your first invoice now. </span>
            </h1>

            <p className="mx-auto mt-4 max-w-xl sm:text-xl/relaxed">
              A very simple yet powerful template that can be easily linked to your backend to generate invoices on the fly. If you don&apos;t have a backend, you can still use this template to generate invoices and save them as PDFs.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link
                className="block w-full rounded border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto"
                href="/new-invoice"
              >
                Create your first INVOICE
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
