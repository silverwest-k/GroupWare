import create from 'zustand'

const useStore = create(set => ({
    headerTitle: "Main",
    changeTitle: (e)=> set(state =>({headerTitle:e}))
}))

export default useStore