export function Social() {
    return (
        <div className=" flex flex-col justify-center items-end">
            <h1 className="text-white pr-12 mr-12 text-4xl uppercase tracking-wide font-bold" style={{ letterSpacing: '1px' }}>
                SOCIAL
            </h1>
            <div className="flex pt-4">
                <img className="p-1 size-12" src="./src/assets/linkedin-ico.png" alt="" />
                <img className="p-1 size-12" src="./src/assets/github-ico.png" alt="" />
                <img className="p-1 size-12" src="./src/assets/twitter-ico.png" alt="" />
                <img className="p-1 size-12" src="./src/assets/blog-ico.png" alt="" />
                <img className="p-1 size-12" src="./src/assets/yt-ico.png" alt="" />
            </div>
        </div>
    );
}
