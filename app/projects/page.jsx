import Image from "next/image";



export default function Projects() {
    const projects = [
        {
            id: 1,
            location: 'Vinayak City, Ujjain',
            client: 'Mr Harshdeep Bhatia',
            image: '/image/project3.jpg',
            link: '',
        },
        {
            id: 2,
            location: 'Shipra Vihar, Ujjain',
            client: 'Mr. Shailendra Sharma',
            image: '/image/project2.jpg',
            link: '',
        },
        {
            id: 3,
            location: 'Alakhdham Nagar, Ujjain',
            client: 'Mr Shivam Jain',
            description: 'Drowing room with a clean and comfortable design for your family. charming whit a modern design. ',
            image: '/image/project4.png',
        },
    ];
    return (
        <div className="">
            <div className="bg-[url('/image/backgroundproject.jpg')] bg-center bg-cover max-h-80 ">
                <h1 className="container py-36 text-6xl font-semibold tracking-widest text-white ">OUR PROJECTS</h1>
            </div>
            <div className="container py-12">

            {projects.map((project, index) => (
                <div
                    key={project.id}
                    className={`relative flex w-full overflow-hidden rounded-xl group h-96 mb-10 ${
                    index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                    }`}
                >
                    {/* Image Section (60%) */}
                    <div className="w-3/5 h-full">
                    <Image
                        src={project.image}
                        width={960}
                        height={380}
                        alt={project.location}
                        className="object-cover w-full h-full rounded-xl"
                    />
                    </div>

                    {/* Info Section (40%) */}
                    <div className="relative w-2/5 h-full">
                        <div className="absolute inset-0 flex items-center justify-center p-12 text-black h-full">
                            <div className={`flex gap-4 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                                <div className="w-1 bg-black self-stretch" />
                                
                                {/* Text content */}
                                <div>
                                    <h1 className="text-3xl font-medium">{project.location}</h1>
                                    <h2 className="py-2 text-2xl font-light">Client: {project.client}</h2>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            ))}

            </div>
        </div>
    )
}