'use client'
import { WavyBackground } from "./ui/wavy-background"
import { AnimatedTooltip } from "./ui/animated-tooltip";

const instructors = [
    {
      id: 1,
      name: 'Shaik Zaheed Ahmed',
      designation: 'Backend Dev',
      image:
        '/we/zap.jpg',
    },
    {
      id: 2,
      name: 'Parna Ghosh',
      designation: 'Backend Dev',
      image:
        '/we/parna.png',
    },
    {
      id: 3,
      name: 'Suraj Viswakarma',
      designation: 'Frontend Dev',
      image:
        '/we/smartcraze.png',
    }
    
  ];

function Instructors() {
  return (
    <div className="relative h-[40rem] overflow-hidden flex items-center justify-center">
        <WavyBackground className="w-full max-w-7xl mx-auto flex flex-col items-center justify-center h-full">
            <h2 className="text-2xl md:text-4xl lg:text-7xl text-white font-bold text-center mb-8">Meet Our Devlopers</h2>
            <p className="text-base md:text-lg text-white text-center mb-4">Discover the talented professionals who made this website a Success</p>
            <div className="flex flex-row items-center justify-center mb-10 w-full">
                <AnimatedTooltip items={instructors} />
            </div>
        </WavyBackground>
    </div>
  )
}

export default Instructors