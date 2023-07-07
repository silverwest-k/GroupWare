import create from 'zustand'

const useStore = create(set => ({
    headerTitle: "메인",
    changeTitle: (e)=> set(state =>({headerTitle:e})),

    teamName: "",
    selectTeam: (e)=> set(state=>({teamName:e})),

    position: "",
    selectPosition: (e) => set(state => ({position:e}))
}))

export default useStore