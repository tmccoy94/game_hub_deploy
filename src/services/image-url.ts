import backup from "../assets/no-image-placeholder-6f3882e0.webp"

const getCroppedImageUrl = (url: string) => {
    if (!url) return backup;
    const target = "media/"
    const index =  url.indexOf(target) + target.length;
    return url.slice(0, index) + "crop/600/400/" + url.slice(index)
}

export const getCroppedImageUrlSmall = (url: string) => {
    
    const target = "media/"
    const index =  url.indexOf(target) + target.length;
    return url.slice(0, index) + "crop/300/200/" + url.slice(index)
}

export default getCroppedImageUrl;