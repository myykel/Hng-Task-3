import React, { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Link } from "react-router-dom";
import { Add, ArrowRight2, HambergerMenu } from "iconsax-react";

const NavBar = () => {
  const [isClosed, setIsClosed] = useState(true);
  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  function openMenu() {
    setIsClosed(false);
  }

  function closeMenu() {
    setIsClosed(true);
  }
  return (
    <>
      <header className="lg:px-20 md:px-10 py-6 font-rr">
        <navbar className="flex justify-between items-center sticky top-0 bg-white md:px-0 px-5">
          <Link to="/" className="flex items-center">
            <img src="/house.svg" alt="" />
            <h1 className="md:text-4xl text-2xl font-bold font-sans gradient">
              Metabnb
            </h1>
          </Link>

          <ul className="md:flex items-center lg:space-x-10 md:space-x-5 text-[#434343] hidden">
            <li>
              <Link to="/"> Home</Link>
            </li>
            <li>
              <Link to="/place"> Place to stay</Link>
            </li>
            <li>
              <Link to="/nfts"> NFTs</Link>
            </li>
            <li>
              <Link to="/community"> Community</Link>
            </li>
          </ul>

          <button
            onClick={openModal}
            className="bg-primary text-white px-5 py-2 rounded-lg text-sm md:block hidden"
          >
            Connect Wallet
          </button>
          <div className="md:hidden flex">
            <div onClick={openMenu} className={isClosed ? "block" : "hidden"}>
              <HambergerMenu color="#A02279" variant="TwoTone" size={32} />
            </div>

            <div
              className={isClosed ? "hidden" : "block rotate-45"}
              onClick={closeMenu}
            >
              <Add color="#A02279" variant="TwoTone" size={32} />
            </div>
          </div>
        </navbar>

        {/* Mobile Nav */}
        <div
          className={
            isClosed ? "hidden" : "block space-y-3 shadow-md py-5 px-5"
          }
        >
          <ul className="space-y-3">
            <li onClick={closeMenu}>
              <Link to="/"> Home</Link>
            </li>
            <li onClick={closeMenu}>
              <Link to="/place"> Place to stay</Link>
            </li>
            <li onClick={closeMenu}>
              <Link to="/nfts"> NFTs</Link>
            </li>
            <li onClick={closeMenu}>
              <Link to="/community"> Community</Link>
            </li>
          </ul>

          <button
            onClick={openModal}
            className="bg-primary text-white px-5 py-2 rounded-lg text-sm"
          >
            Connect Wallet
          </button>
        </div>
      </header>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10 font-rr" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white py-6 text-left align-middle shadow-xl transition-all">
                  <div className="flex items-center justify-between border-b pb-3 px-6">
                    <Dialog.Title
                      as="h3"
                      className="text-lg font-medium leading-6 text-gray-900"
                    >
                      Connect Wallet
                    </Dialog.Title>
                    <div
                      className="cursor-pointer rotate-45"
                      onClick={closeModal}
                    >
                      <Add color="#000" variant="Outline" size={32} />
                    </div>
                  </div>
                  <div className="mt-5 px-6">
                    <h5 className="text-xs">Choose your preferred wallet</h5>

                    <div className="mt-5 space-y-3">
                      <div className="wallet">
                        <div className="flex items-center space-x-2">
                          <img src="/metamassk.svg" alt="" />
                          <p className="font-semibold">Metamask</p>
                        </div>
                        <ArrowRight2 color="#000" />
                      </div>
                      <div className="wallet">
                        <div className="flex items-center space-x-2">
                          <img src="/wallettconnect.svg" alt="" />
                          <p className="font-semibold">WalletConnect</p>
                        </div>
                        <ArrowRight2 color="#000" />
                      </div>
                    </div>
                  </div>

                  <div className="mt-4"></div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default NavBar;
