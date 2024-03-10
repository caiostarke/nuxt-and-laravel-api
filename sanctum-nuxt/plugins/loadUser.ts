import { useAuthStore } from "~/stores/useAuthStore";

export default defineNuxtPlugin((nuxtApp) => {
    const auth = useAuthStore();

    if (!auth.isLoggedIn) {
        auth.fetchUser();
    }

})
