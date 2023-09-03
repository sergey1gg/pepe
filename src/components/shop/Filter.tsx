import React,{useState} from 'react'
interface Filter {
    closeFilter: React.Dispatch<React.SetStateAction<boolean>>;
    selectedTags:React.Dispatch<React.SetStateAction<string[]>>;
    featuresData: any[];
  }
const Filter: React.FC<Filter> = ({closeFilter, selectedTags, featuresData}) => { 

    const [selectedColor,setSelectedColor]=useState<string>('')
    const [selectedSize,setSelectedSize]=useState('')
    const [selectedType,setSelectedType]=useState('')
    const allSizes = featuresData.flatMap(item => item.sizes);
    const uniqueSizes = allSizes.filter((value, index, self) => self.indexOf(value) === index);

    const allcolors = featuresData.flatMap(item => item.colors);
    const uniqueColor = allcolors.filter((value, index, self) => self.indexOf(value) === index);

    const allCategories: string[] = [];
    featuresData.forEach(item => {
        if (!allCategories.includes(item.category)) {
          allCategories.push(item.category);
        }
      });

  return (
<div className=" w-full h-auto hoverflow-hidden text-left text-mini text-black font-button">
<div className="fixed inset-0 bg-black opacity-50 z-10"></div>
      <div className="absolute w-auto lg:w-[616px] z-30 left-0 right-0 mx-auto xl:rounded-[30px] rounded-none bg-white h-auto overflow-hidden text-mini flex flex-col p-5">
        <div className="self-stretch flex flex-row items-start justify-start gap-[16px] text-xl">
          <div className="flex-1 relative leading-[24px] uppercase">
            Filters
          </div>
          <img
            className="relative w-6 h-6 overflow-hidden shrink-0"
            alt=""
            src="/close3.svg"
            onClick={()=> closeFilter(false)}
          />
        </div>
<div className="top-[180px] left-[44px] w-auto flex flex-col items-start justify-start gap-[52px]">
<div className="self-stretch flex flex-col items-start justify-start gap-[12px]">
    <div className="self-stretch flex flex-row items-center justify-start gap-[173px]">
        <div className="flex-1 relative leading-[24px] uppercase my-5">TYPE</div></div>
    <div className="flex flex-wrap justify-center md:justify-start gap-5">
        {allCategories.map((name: string,index: number)=>(
      <div className="flex flex-col"
      onClick={()=> setSelectedType(name)}>
        <div className="rounded-2xl flex flex-row py-3 px-5 items-center justify-center text-black border-[1px] border-solid border-surface"
         style={{borderColor: selectedType===name? '#87E464': ''}}>
            <div className="relative leading-[24px] uppercase">{name}</div>
            </div>
      </div>
      ))}
    </div>
  </div>
  <div className="self-stretch flex flex-col items-start justify-start gap-[12px]">
    <div className="self-stretch flex flex-row items-center justify-start gap-[173px]">
        <div className="flex-1 relative leading-[24px] uppercase my-5">Select size</div></div>
    <div className="flex flex-wrap justify-center md:justify-start gap-5">
    {uniqueSizes.map((size: string, index: number) => (
      <div key={index} className="flex flex-col"
      onClick={()=> setSelectedSize(size)}>
        <div className="rounded-2xl flex flex-row py-3 px-5 items-center justify-center text-black border-[1px] border-solid border-surface"
        style={{borderColor: selectedSize===size? '#87E464': ''}}>
            <div className="relative leading-[24px] uppercase">{size}</div>
            </div>
      </div>
    ))}
    </div>
  </div>
  <div className="flex flex-col items-start justify-start gap-[16px]">
    <div className="self-stretch relative leading-[24px] uppercase">Select color</div>
    <div className="w-auto flex flex-row items-start justify-start gap-[8px]">
    {uniqueColor.map((color: string, index: number)=>(
      <div key={index} className="relative rounded-[50%] box-border w-7 h-7 border-[2px] border-solid border-gainsboro" style={{background: `${color}`,borderColor: selectedColor===color? '#87E464': ''}}
      onClick={()=> setSelectedColor(color)}/>
    ))}
      </div>
  </div>
</div>

        <div className=" mt-4 self-stretch flex md:flex-row flex-col items-start justify-start gap-[12px] text-center">
          <div className="w-full flex-1 rounded-131xl flex flex-row py-5 items-center justify-center border-[1px] border-solid border-primary"
          onClick={()=> {setSelectedColor(''); setSelectedSize(''); setSelectedType('')}}>
            <div className="flex-1 relative leading-[24px] uppercase">
              Clear filters
            </div>
          </div>
          <div className="w-full flex-1 rounded-131xl bg-primary flex flex-row py-5  items-center justify-center"
          onClick={() => {selectedTags([selectedColor, selectedSize, selectedType].filter(Boolean)); closeFilter(false)}}>
            <div className="flex-1 relative leading-[24px] uppercase">
              Apply
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Filter
