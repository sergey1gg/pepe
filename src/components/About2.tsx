import React from 'react'
import {useState} from 'react'

const About2 = () => {
    const [links, getLinks]=useState<boolean>(false)
    const [links2, getLinks2]=useState<boolean>(false)
    return (
        <div className='md:p-5 p-0' id="about2">
            <div>
                <div className="rounded-31xl bg-white w-full h-full overflow-hidden pb-5 text-mini mt-[48px] lg:mt-[60px] flex justify-center items-center">
                    <div className=" gap-[28px] flex items-center flex-col xl:flex-row-reverse">
                        <div>
                            <img
                                className=" h-full w-full scale-90 overflow-hidden object-cover items-center rounded-31xl"
                                alt=""
                                src="/img4@2x.png"
                            />
                        </div>
                        <div className='flex flex-col gap-6 text-center items-center'>
                            <div className=" text-21xl leading-[44px] uppercase">
                                <span>Token </span>
                                <span className="text-primary">$PNDC</span>
                            </div>
                            <div className="self-stretch text-center lg:text-left md:text-center px-10 lg:px-28 leading-[24px] font-body"> PNDC it's a token drived by early adopters of PEPE which
                                according to the Pauly0x (founder) will change the game once
                                and for all!</div>
                                <div className='flex justify-center items-center flex-col cursor-pointer' >
                                <div className="rounded-131xl bg-primary w-[312px] flex flex-row py-5 px-10 box-border items-center justify-center gap-[8px] text-mini" onClick={()=> getLinks(!links)}>
                                    <div className="flex-1 relative leading-[24px] uppercase">
                                        token contract
                                    </div>

                                    <img
                                        className="relative w-6 h-6 overflow-hidden shrink-0"
                                        alt=""
                                        src="/angledown1.svg"
                                    />
                                </div>

                                <div className="w-full h-auto my-2 bg-white rounded-2xl border border-stone-950 flex-col justify-center items-center gap-1 inline-flex" style={{border: '2px solid #081C00',
                                 display: links? 'inline-flex':'none'}}>
                                    <div className="self-stretch py-2  hover:bg-neutral-100 rounded-2xl justify-center items-center gap-2.5 inline-flex"
                                    onClick={()=> window.open('https://etherscan.io/token/0x6982508145454ce325ddbe47a25d4ec3d2311933', '_blank')}>
                                        <div className="text-center text-stone-950 text-xl font-normal uppercase leading-normal">EtherScan</div>
                                    </div>
                                    <div className="py-2 self-stretch hover:bg-neutral-100 rounded-2xl justify-center items-center gap-2.5 inline-flex"
                                    onClick={()=> window.open("https://coinmarketcap.com/currencies/pepe/", "_blank")}>
                                        <div className="text-center text-stone-950 text-xl font-normal uppercase leading-normal">Coinmarketcap</div>
                                    </div>
                                    <div className="self-stretch py-2  hover:bg-neutral-100 rounded-2xl justify-center items-center gap-2.5 inline-flex"
                                    onClick={()=> window.open("https://www.coingecko.com/en/coins/pepe","_blank")}>
                                        <div className="text-center text-stone-950 text-xl font-normal uppercase leading-normal">Coingecko</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className="rounded-31xl bg-white w-full h-full overflow-hidden pb-5 text-mini mt-[48px] lg:mt-[60px]">
                    <div className=" gap-[28px] flex items-center flex-col xl:flex-row">
                        <div>
                            <img
                                className="xl:h-[504px] h-full xl:w-auto w-full overflow-hidden object-cover items-center rounded-31xl scale-90 "
                                alt=""
                                src="/img4@3x.svg"
                            />
                        </div>
                        <div className='flex flex-col gap-6 text-center items-center'>
                            <div className=" text-21xl leading-[44px] uppercase">
                                <span>Token </span>
                                <span className="text-primary">$PEPE</span>
                            </div>
                            <div className="self-stretch text-center lg:text-left md:text-center px-10 lg:px-28 leading-[24px] font-body"> PEPE is a deflationary memecoin launched on Ethereum.
                                The cryptocurrency was created as a tribute to the Pepe the Frog internet meme, created by Matt Furie,
                                which gained popularity in the early 2000s.</div>
                            <div className='flex justify-center items-center flex-col cursor-pointer'>
                                <div className="rounded-131xl bg-primary w-[312px] flex flex-row py-5 px-10 box-border items-center justify-center gap-[8px] text-mini" onClick={()=> getLinks2(!links2)}>
                                    <div className="flex-1 relative leading-[24px] uppercase">
                                        token contract
                                    </div>

                                    <img
                                        className="relative w-6 h-6 overflow-hidden shrink-0"
                                        alt=""
                                        src="/angledown1.svg"
                                    />
                                </div>

                                <div className="w-full h-auto my-2 bg-white rounded-2xl border border-stone-950 flex-col justify-center items-center gap-1 inline-flex" style={{border: '2px solid #081C00',
                                 display: links2? 'inline-flex':'none'}}>
                                    <div className="self-stretch py-2  hover:bg-neutral-100 rounded-2xl justify-center items-center gap-2.5 inline-flex"
                                    onClick={()=> window.open("https://etherscan.io/token/0x423f4e6138e475d85cf7ea071ac92097ed631eea", "_blank")}>
                                        <div className="text-center text-stone-950 text-xl font-normal uppercase leading-normal">EtherScan</div>
                                    </div>
                                    <div className="py-2 self-stretch hover:bg-neutral-100 rounded-2xl justify-center items-center gap-2.5 inline-flex"
                                    onClick={()=> window.open("https://coinmarketcap.com/currencies/pond0x/", "_blank")}>
                                        <div className="text-center text-stone-950 text-xl font-normal uppercase leading-normal">Coinmarketcap</div>
                                    </div>
                                    <div className="self-stretch py-2  hover:bg-neutral-100 rounded-2xl justify-center items-center gap-2.5 inline-flex"
                                    onClick={()=> window.open("https://www.coingecko.com/en/coins/pondcoin", "_blank")}>
                                        <div className="text-center text-stone-950 text-xl font-normal uppercase leading-normal">Coingecko</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default About2
