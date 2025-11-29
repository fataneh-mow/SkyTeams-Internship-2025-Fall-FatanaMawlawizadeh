/**
    * Author: Fatana Mawlawizadeh
     
    * Date: Nov, 18th, 2025

    * Question: 6 Convert total seconds into hours, minutes, and seconds 
    Description: Convert a given number of seconds into hours, minutes, and seconds format. 
    Example: 
    Input: 
    3665 
    Output: 
    1 hr, 1 min, 5 sec
*/

export function convertTime (allSeconds) {
    let remaining = Math.floor(allSeconds % 3600);
    let hours = Math.floor(allSeconds / 3600);
    let minutes = Math.floor(remaining / 60);
    let seconds = Math.floor(remaining % 60);

    return `${hours}:${minutes}:${seconds}`
}