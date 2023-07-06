import create from 'zustand'

const useStore = create(set => ({
    headerTitle: "메인",
    changeTitle: (e)=> set(state =>({headerTitle:e}))
}))

export default useStore