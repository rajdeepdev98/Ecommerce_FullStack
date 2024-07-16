import React from 'react'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from './ui/carousel.jsx'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card.jsx'
import { Separator } from './ui/separator.jsx'



export const BannerItem = () => {
  return (
  
<div className='flex flex-row justify-center '>
    
        <Carousel className="w-[90%] pt-5"orientation="horizontal">
              <CarouselPrevious />
            <CarouselContent>
                <CustomItem className="basis-1/3"></CustomItem>
                <CustomItem className="basis-1/3"></CustomItem>
                <CustomItem className="basis-1/3"></CustomItem>
                <CustomItem className="basis-1/3"></CustomItem>
                <CustomItem className="basis-1/3"></CustomItem>
                {/* <CarouselItem className="basis-1/3"><div>lol2</div></CarouselItem>
                <CarouselItem className="basis-1/3"><div>lol3</div></CarouselItem>
                <CarouselItem className="basis-1/3"><div>lol4</div></CarouselItem>
                <CarouselItem className="basis-1/3"><div>lol5</div></CarouselItem>
                <CarouselItem className="basis-1/3"><div>lol6</div></CarouselItem> */}
            </CarouselContent>
          
            <CarouselNext />
        </Carousel>
        </div>
 
  )
}
const CustomItem=()=>{
  return <CarouselItem className="h-[50%]">
     <Card>
       {/* <CardHeader>
         <CardTitle>Card Title</CardTitle>
         <CardDescription>Card Description</CardDescription>
       </CardHeader> */}
       <CardContent className="p-0">
         <img className="w-[100%] max-h-[400px]"src='../../public/banner1.jpg'></img>
       </CardContent>
       {/* <CardFooter>
         <p>Card Footer</p>
       </CardFooter> */}
     </Card>
   </CarouselItem>;
}
