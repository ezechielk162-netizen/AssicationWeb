import FormService from "~/services/forms.service";


const isOpen = ref(false)
export const useFunctions = () => {
    const form = FormService.activeForm;
    const resetForms = FormService.clearForm;

    const languageStore = useLanguageStore();
    const choiceLanguage = computed(() => languageStore.language);

    const router = useRouter();



    function changeLanguage(lang: any) {
        languageStore.setLanguage(lang);
    }

    function toggleMenu() {
        isOpen.value = !isOpen.value
    }

    function closeMenu() {
        isOpen.value = false
    }

    function handleResize() {
        if (window.innerWidth >= 992) {
            closeMenu()
        }
    }

    function goToDetails(id: number){
        router.push(`/projects/${id}`);
    }

    return {
        isOpen,
        goToDetails,
        toggleMenu,
        closeMenu,
        handleResize,
    }
}
