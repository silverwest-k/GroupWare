import create from 'zustand'

const useStore = create(set => ({

    headerTitle: "메인",
    changeTitle: (e)=> set(state =>({headerTitle:e})),

    teamName: "",
    selectTeam: (e)=> set(state=>({teamName:e})),

    positionName: "",
    selectPosition: (e) => set(state => ({positionName:e})),

    account: {
        "name": "",
        "password": "",
        "no": "",
        "team": "",
        "position": ""
    },
    selectAccount: (e) => set(sate =>({account:e}))



}))

export default useStore