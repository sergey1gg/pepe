import React, { useEffect, useState } from 'react'

interface ShippingProps {
  currentStep: React.Dispatch<React.SetStateAction<number>>;
  // другие ожидаемые пропсы
}
const ShippingAddress: React.FC<ShippingProps> = ({currentStep}) => {


const [email, setEmail] = useState('');
const [emailSubscribed, setEmailSubscribed] = useState(false);
const [country, setCountry] = useState('');
const [firstName, setFirstName] = useState('');
const [lastName, setLastName] = useState('');
const [company, setCompany] = useState<string | undefined >('');
const [address, setAddress] = useState('');
const [apartment, setApartment] = useState('');
const [city, setCity] = useState('');
const [postCode, setPostCode] = useState('');
const [phone, setPhone] = useState('');

const [canContinue, setCanContinue] = useState(false);

useEffect(() => {
    if (
      email && country && firstName && lastName && address && apartment && city &&
      postCode && phone
    ) {
      setCanContinue(true);
    } else {
      setCanContinue(false);
    }
  }, [email, country, firstName, lastName, company, address, apartment, city, postCode, phone]);

  useEffect(() => {
    const storedShippingData = JSON.parse(localStorage.getItem('shippingData') || '{}');
    setEmail(storedShippingData.email || '');
    setEmailSubscribed(storedShippingData.emailSubscribed || false);
    setCountry(storedShippingData.country || '');
    setFirstName(storedShippingData.firstName || '');
    setLastName(storedShippingData.lastName || '');
    setCompany(storedShippingData.company || '');
    setAddress(storedShippingData.address || '');
    setApartment(storedShippingData.apartment || '');
    setCity(storedShippingData.city || '');
    setPostCode(storedShippingData.postCode || '');
    setPhone(storedShippingData.phone || '');
  }, []);
  return (
<>
<div className=" top-[124px] left-[28px] w-auto flex flex-col items-end justify-start gap-[36px] text-black p-5">
                            <div className="self-stretch flex flex-col items-start justify-start gap-[48px]">
                                <div className="flex flex-col items-start justify-start gap-[20px]">
                                    <div className="w-full flex flex-col items-start justify-start gap-[16px]">
                                        <div className="relative leading-[24px]">Contact</div>
                                           <input type="text" name="" id="" className='rounded-xl w-full bg-surface overflow-hidden flex flex-row py-3.5  pl-5 box-border items-start justify-start relative gap-[16px] text-left text-mini text-darkgray-100
                                           placeholder:font-body'
                                           placeholder='Email'
                                           value={email}
                                           onChange={(e) => setEmail(e.target.value)}/> 
                                    </div>
                                    <div className="flex flex-row items-start justify-start gap-[12px] text-left text-[14px] text-black">
                                        <div className="relative w-6 h-6">
                                            <input type='checkbox' className=" top-[calc(50%_-_10px)] left-[calc(50%_-_10px)] rounded bg-primary w-5 h-5" />

                                        </div>
                                        <div className="relative leading-[24px]">

                                            Email me with news and offers
                                        </div>
                                    </div>
                                </div>
                                <div className="self-stretch flex flex-col items-start justify-start gap-[16px] text-left text-mini text-darkgray-100">
                                    <div className="relative text-mid leading-[24px] text-black text-center">
                                        Shipping address
                                    </div>
                                    <div className="self-stretch flex xl:flex-row flex-col justify-start gap-[16px]">

                                    <input type="text" name="" id="" className='flex-1 rounded-3xs bg-surface overflow-hidden flex flex-row py-3.5  pl-5 items-start justify-start relative gap-[16px]
                                           placeholder:font-body'
                                           placeholder='Country/region'
                                           value={country}
                                           onChange={(e) => setCountry(e.target.value)}/> 
                                        <input type="text" name="" id="" className='flex-1 rounded-3xs bg-surface overflow-hidden flex flex-row py-3.5  pl-5 items-start justify-start relative gap-[16px]
                                           placeholder:font-body'
                                           placeholder='First name'
                                           value={firstName}
                                           onChange={(e) => setFirstName(e.target.value)}/> 

                                        <input type="text" name="" id="" className='flex-1 rounded-3xs bg-surface overflow-hidden flex flex-row py-3.5  pl-5 items-start justify-start relative gap-[16px]
                                           placeholder:font-body'
                                           placeholder='Last name'
                                           value={lastName}
                                           onChange={(e) => setLastName(e.target.value)}/> 
                                    </div>
                                    <div className="self-stretch  flex xl:flex-row flex-col justify-start gap-[16px]">
                                    <input type="text" name="" id="" className='flex-1 rounded-3xs bg-surface overflow-hidden flex flex-row py-3.5  pl-5 items-start justify-start relative gap-[16px]
                                           placeholder:font-body'
                                           placeholder='Company'
                                           value={company}
                                           onChange={(e) => setCompany(e.target.value)}/> 
                                        <input type="text" name="" id="" className='flex-1 rounded-3xs bg-surface overflow-hidden flex flex-row py-3.5  pl-5 items-start justify-start relative gap-[16px]
                                           placeholder:font-body'
                                           placeholder='Address'
                                           value={address}
                                           onChange={(e) => setAddress(e.target.value)}/> 
                                        <input type="text" name="" id="" className='flex-1 rounded-3xs bg-surface overflow-hidden flex flex-row py-3.5  pl-5 items-start justify-start relative gap-[16px]
                                           placeholder:font-body'
                                           placeholder='Apartment, suit, etc'
                                           value={apartment}
                                           onChange={(e) => setApartment(e.target.value)}/> 
                                    </div>
                                    <div className="self-stretch flex xl:flex-row flex-col justify-start gap-[16px]">
                                    <input type="text" name="" id="" className='flex-1 rounded-3xs bg-surface overflow-hidden flex flex-row py-3.5  pl-5 items-start justify-start relative gap-[16px]
                                           placeholder:font-body'
                                           placeholder='City'
                                           value={city}
                                           onChange={(e) => setCity(e.target.value)}/> 
                                        <input type="text" name="" id="" className='flex-1 rounded-3xs bg-surface overflow-hidden flex flex-row py-3.5  pl-5 items-start justify-start relative gap-[16px]
                                           placeholder:font-body'
                                           placeholder='Post code'
                                           value={postCode}
                                           onChange={(e) => setPostCode(e.target.value)}/> 
                                        <input type="text" name="" id="" className='flex-1 rounded-3xs bg-surface overflow-hidden flex flex-row py-3.5  pl-5 items-start justify-start relative gap-[16px]
                                           placeholder:font-body'
                                           placeholder='Phone'
                                           value={phone}
                                           onChange={(e) => setPhone(e.target.value)}/> 
                                    </div>
                                </div>
                            </div>
                            <div className=" w-full flex flex-row box-border items-center justify-between text-mini text-black font-button"
                            onClick={() => {
                                if (canContinue) {
                                  localStorage.setItem('shippingData', JSON.stringify({
                                    email,
                                    emailSubscribed,
                                    country,
                                    firstName,
                                    lastName,
                                    company,
                                    address,
                                    apartment,
                                    city,
                                    postCode,
                                    phone
                                  }));
                                  currentStep(prev => prev + 1);
                                }
                              }}
                            style={{ opacity: canContinue ? 1 : 0.5 }}>
                             
    <div className='font-h-1 cursor-pointer' onClick={()=> window.location.href="/"}>Back</div>
                                <div className="rounded-131xl bg-primary  py-3 px-10  leading-[24px] uppercase font-h-1 cursor-pointer">
                                    Continue to shiping
                                </div>
                            </div>
                            </div>

</>
  )
}

export default ShippingAddress
