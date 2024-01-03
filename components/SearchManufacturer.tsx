"use client";
import { Combobox, Transition } from '@headlessui/react'
import { manufacturers } from '@/constants';
import { SearchManufacturerProps } from '@/types'
import Image from 'next/image';
import { useState, Fragment } from 'react';

const SearchManufacturer = ({manufacturer, setManufacturer }: SearchManufacturerProps) => {
    const [query, setquery] = useState('');

    const filterManufacturers = query === ""
                                ? manufacturers 
                                : manufacturers.filter((item) => (
                                    item.toLowerCase()
                                    .replace(/\s+/g, "")
                                    .includes(query.toLowerCase()
                                    .replace(/\s+/g, "")
                                    )))

  return (
    <div className="search-manufacturer">
        <Combobox value={manufacturer} onChange={setManufacturer}>
            <div className="relative w-full">
            <Combobox.Input 
                className="search-manufacturer__input"
                placeholder="ระบุอำเภอ"
                displayValue={(manufacturer: string) =>
                manufacturer}
                onChange={(e) => setquery(e.target.value)}>
                </Combobox.Input>
                
                <Transition 
                    as={Fragment}
                    leave="transition ease-in duration-100"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                    afterLeave={() => setquery('')}
                    >
                        <Combobox.Options>
                            {filterManufacturers.map((item) => (
                                    <Combobox.Option
                                        key={item}
                                        className={({ active}) => `
                                        relative cursor-default select-none py-2 pl-10 pr-4 ${active ? 'bg-primary-blue text-white' 
                                        :'text-gray-900'}
                                        `}
                                        value={item}
                                    >
                                        {({ selected, active}) => (
                                            <>
                                            <span
                          className={`block truncate ${
                            selected ? 'font-medium' : 'font-normal'
                          }`}
                        >
                          {item}
                        </span>
                        {selected ? (
                          <span
                            className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                              active ? 'text-white' : 'text-teal-600'
                            }`}
                          >
                          </span>
                        ) : null}
                                            </>
                                        )}
                                    </Combobox.Option>
                                )    
                            )}
                           
                        </Combobox.Options>
                    
                </Transition>
            
            </div>
        </Combobox>
    </div>
  )
}

export default SearchManufacturer