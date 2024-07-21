
export function VideoCard(props: any) {
    const youtubeProps = props;
    return <div className="p-2">
        <img className="rounded-xl" src={youtubeProps.tumbnail}></img>
        <div className="pt-4 flex">
            <div>
                <img className="mr-4 rounded-full h-9 w-9" src={youtubeProps.cp}></img>
            </div>
            <div className="flex-1 flex-col font-medium text-2xl[2.2px]">
                <div className="overflow-hidden text-ellipsis whitespace-normal">
                    {youtubeProps.title}
                </div>
                <div className="text-[#AAAAAA] text-base">
                    {youtubeProps.channelName}
                </div>
                <div className="text-[#AAAAAA] text-base">
                    {youtubeProps.statistics}
                </div>
            </div>
        </div>
    </div>
}
