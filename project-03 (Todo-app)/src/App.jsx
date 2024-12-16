import Navbar from "./components/Navbar";
import { FiSearch } from "react-icons/fi";
import { AiFillPlusCircle } from "react-icons/ai";
import { useEffect, useState } from "react";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "./config/firebase";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ContactCard from "./components/ContactCard";
import AddAndUpdateContact from "./components/AddAndUpdateContact";
import useDisclouse from "./Hooks/useDisclouse";
import NotFoundContact from "./components/NotFoundContact";


const App = () => {
  const [contacts, setContacts] = useState([]);

  const { isOpen, onClose, onOpen } = useDisclouse();

  useEffect(() => {
    const getContacts = async () => {
      try {
        const contactsRef = collection(db, "contacts");
        onSnapshot(contactsRef, (snapshot) => {
          const contactLists = snapshot.docs.map((doc) => {
            return {
              id: doc.id,
              ...doc.data(),
            };
          });
          setContacts(contactLists);
          return contactLists;
        });
      } catch (error) {
        console.log(error);
      }
    };

    getContacts();
  }, []);

  const filterContacts = (e) => {
    const value = e.target.value;

    const contactsRef = collection(db, "contacts");

    onSnapshot(contactsRef, (snapshot) => {
      const contactLists = snapshot.docs.map((doc) => {
        return {
          id: doc.id,
          ...doc.data(),
        };
      });

      const filteredContacts = contactLists.filter((contact) =>
        contact.name.toLowerCase().includes(value.toLowerCase())
      );

      setContacts(filteredContacts);
      return filteredContacts;
    });
  };

  return (
    <>
      <div className="mx-auto max-w-[370px] px-4">
        <Navbar />
        <div className="flex gap-2">
          <div className="relative flex flex-grow items-center">
            <FiSearch className="absolute ml-1 text-3xl text-white" />
            <input
              onChange={filterContacts}
              type="text"
              className=" h-10 flex-grow rounded-md border border-white bg-transparent pl-9 text-white"
            />
          </div>

          <AiFillPlusCircle
            onClick={onOpen}
            className="cursor-pointer text-5xl text-white"
          />
        </div>
        <div className="mt-4 flex flex-col gap-3">
          {contacts.length <= 0 ? (
            <NotFoundContact />
          ) : (
            contacts.map((contact) => (
              <ContactCard key={contact.id} contact={contact} />
            ))
          )}
        </div>
      </div>
      <ToastContainer position="bottom-center" />
      <AddAndUpdateContact onClose={onClose} isOpen={isOpen} />
    </>
  );
};

export default App;



















// import React, { useEffect, useState } from 'react';
// import Navbar from './components/Navbar';
// import { FiSearch } from "react-icons/fi";
// import { AiFillPlusCircle } from "react-icons/ai";
// import { collection, getDocs} from "firebase/firestore";
// import {db} from "./config/firebase";
// import {HiOutlineUserCircle} from "react-icons/hi";
// import {RiEditCircleLine} from "react-icons/ri";
// import {IoMdTrash} from "react-icons/io";
// import ContactCard from './components/ContactCard';
// import Modal from './components/Modal';
// import AddAndUpdateContact from './components/AddAndUpdateContact';
// import useDisclouse from './Hooks/useDisclouse';

// const App = () => {
  
//  const [contacts, setContacts] = useState([]);

//  useEffect(()=> { 
//     const getContacts = async () => {

//       try {
//       const contactsRef = collection( db,"contacts"); 
//       const contactsSnapshot = await getDocs(contactsRef);
//       const contactLists = contactsSnapshot.docs.map((doc) =>{
//         return{
//          id: doc.id,
//           ...doc.data()
//         }
//       });
//       setContacts(contactLists);
     
//       } catch (error) {
        
//       }
//     }

//     getContacts();
//  }, []);

//     const {onClose, isOpen, onOpen} = useDisclouse();
  
//   return(
//     <>
//     <div className="max-w-[370px] mx-auto px-4">

//     <Navbar/>
//     <div className=" flex gap-2">

//     <div className='flex relative items-center flex-grow'>
//         <FiSearch className="text-white text-3xl absolute  ml-1" />
//         <input 
//         type='text' 
//         className="flex-grow h-10 border bg-transparent border-white rounded-md text-white pl-9" />
//      </div>
//         <AiFillPlusCircle onClick={onOpen} className='text-5xl text-white cursor-pointer' /> 

//     </div>

//      <div className='mt-4 gap-3 flex flex-col'>
//       {
//         contacts.map((contact) => (
//         <ContactCard key= {contact.id} contact={contact} />
//         ))};
//      </div>

//     </div>
//     <AddAndUpdateContact
//     onClose={onClose} isOpen={isOpen}
//     />

//     </>
//   )
// }
// export default App

