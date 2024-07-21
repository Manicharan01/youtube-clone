import { VideoCard } from "./VideoCard"

const VIDEOS = [{
    tumbnail: "/tumbnail_1.webp",
    cp: "/channel_1.jpg",
    title: "He is not a role model",
    channelName: "I Do Know Nothing",
    statistics: "1.2M views • 1 day ago",
}, {
    tumbnail: "/tumbnail_2.webp",
    cp: "/channel_2.jpg",
    title: "Adobe is horrible. So I tried DaVinci Resolve",
    channelName: "Bog",
    statistics: "48K views • 1 day ago",
}, {
    tumbnail: "/tumbnail_3.webp",
    cp: "/channel_3.jpg",
    title: "Exposing Big Bollywood Controversies No One Talks About",
    channelName: "Tried&Refused Productions",
    statistics: "180K views • 14 hours ago",
}, {
    tumbnail: "/tumbnail_4.webp",
    cp: "/channel_4.jpg",
    title: "Deadpool & Wolverine | Final Trailer",
    channelName: "Ryan Reynolds",
    statistics: "7.1M views • 1 day ago",
}, {
    tumbnail: "/tumbnail_1.webp",
    cp: "/channel_1.jpg",
    title: "He is not a role model",
    channelName: "I Do Know Nothing",
    statistics: "1.2M views • 1 day ago",
}, {
    tumbnail: "/tumbnail_2.webp",
    cp: "/channel_2.jpg",
    title: "Adobe is horrible. So I tried DaVinci Resolve",
    channelName: "Bog",
    statistics: "48K views • 1 day ago",
}, {
    tumbnail: "/tumbnail_3.webp",
    cp: "/channel_3.jpg",
    title: "Exposing Big Bollywood Controversies No One Talks About",
    channelName: "Tried&Refused Productions",
    statistics: "180K views • 14 hours ago",
}, {
    tumbnail: "/tumbnail_4.webp",
    cp: "/channel_4.jpg",
    title: "Deadpool & Wolverine | Final Trailer",
    channelName: "Ryan Reynolds",
    statistics: "7.1M views • 1 day ago",
}, {
    tumbnail: "/tumbnail_1.webp",
    cp: "/channel_1.jpg",
    title: "He is not a role model",
    channelName: "I Do Know Nothing",
    statistics: "1.2M views • 1 day ago",
}, {
    tumbnail: "/tumbnail_2.webp",
    cp: "/channel_2.jpg",
    title: "Adobe is horrible. So I tried DaVinci Resolve",
    channelName: "Bog",
    statistics: "48K views • 1 day ago",
}, {
    tumbnail: "/tumbnail_3.webp",
    cp: "/channel_3.jpg",
    title: "Exposing Big Bollywood Controversies No One Talks About",
    channelName: "Tried&Refused Productions",
    statistics: "180K views • 14 hours ago",
}, {
    tumbnail: "/tumbnail_4.webp",
    cp: "/channel_4.jpg",
    title: "Deadpool & Wolverine | Final Trailer",
    channelName: "Ryan Reynolds",
    statistics: "7.1M views • 1 day ago",
}, {
    tumbnail: "/tumbnail_1.webp",
    cp: "/channel_1.jpg",
    title: "He is not a role model",
    channelName: "I Do Know Nothing",
    statistics: "1.2M views • 1 day ago",
}, {
    tumbnail: "/tumbnail_2.webp",
    cp: "/channel_2.jpg",
    title: "Adobe is horrible. So I tried DaVinci Resolve",
    channelName: "Bog",
    statistics: "48K views • 1 day ago",
}, {
    tumbnail: "/tumbnail_3.webp",
    cp: "/channel_3.jpg",
    title: "Exposing Big Bollywood Controversies No One Talks About",
    channelName: "Tried&Refused Productions",
    statistics: "180K views • 14 hours ago",
}, {
    tumbnail: "/tumbnail_4.webp",
    cp: "/channel_4.jpg",
    title: "Deadpool & Wolverine | Final Trailer",
    channelName: "Ryan Reynolds",
    statistics: "7.1M views • 1 day ago",
}, {
    tumbnail: "/tumbnail_1.webp",
    cp: "/channel_1.jpg",
    title: "He is not a role model",
    channelName: "I Do Know Nothing",
    statistics: "1.2M views • 1 day ago",
}, {
    tumbnail: "/tumbnail_2.webp",
    cp: "/channel_2.jpg",
    title: "Adobe is horrible. So I tried DaVinci Resolve",
    channelName: "Bog",
    statistics: "48K views • 1 day ago",
}, {
    tumbnail: "/tumbnail_3.webp",
    cp: "/channel_3.jpg",
    title: "Exposing Big Bollywood Controversies No One Talks About",
    channelName: "Tried&Refused Productions",
    statistics: "180K views • 14 hours ago",
}, {
    tumbnail: "/tumbnail_4.webp",
    cp: "/channel_4.jpg",
    title: "Deadpool & Wolverine | Final Trailer",
    channelName: "Ryan Reynolds",
    statistics: "7.1M views • 1 day ago",
}]
export const VideoGrid = () => {
    return <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {VIDEOS.map(video => <div>
            <VideoCard
                title={video.title}
                channelName={video.channelName}
                statistics={video.statistics}
                tumbnail={video.tumbnail}
                cp={video.cp}
            />
        </div>)}
    </div>
}
