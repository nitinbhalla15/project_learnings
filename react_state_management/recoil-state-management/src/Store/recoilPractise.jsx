import { atom, selector } from "recoil";

// export const networkCount = atom({
//     key:"networkCount",
//     default:102
// })


// export const jobsCount = atom({
//     key:"jobsCount",
//     default:0
// })


// export const notificationCount = atom({
//     key:"notificationCount",
//     default:12
// })


// export const messageCount = atom({
//     key:"messageCount",
//     default:10
// })

// export const notificationAtom = atom({
//     key:"notificationAtom",
//     default: {
//         ntiCount:0,
//         jobsCnt:0,
//         msgCnt:0,
//         notCnt:0
//     }
// })

export const notificationAtom = atom({
    key:"notificationAtom",
    default : selector({
        key:"notificationAtoms/selector",
        get: async ()=>{
                await new Promise(r=>setTimeout(r,5000))
                const res = await fetch("http://localhost:8080/calculate/notification")
                const finalResposne = await res.json();
                return finalResposne;
        }
        // get: ()=>{
        //     fetch("http://localhost:8080/calculate/notification")
        //     .then(async (res)=>{
        //         const finalResponse = await res.json();
        //         return finalResponse
        //     })
        // }
    })
})


