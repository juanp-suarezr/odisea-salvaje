<template>
    <div class="flex h-screen items-center justify-center fondo">

        <div class="justify-center bg-gray-200 p-4 shadow-2 rounded-md shadow-xl w-full max-w-md rounded-md">
            <div class="text-center">
                <router-link to="/" class="w-full flex">
                    <UserCircleIcon class="w-24 h-24 md:w-28 md:h-28 text-emerald-700 hover:text-white m-auto" />
                </router-link>

                <span class="text-600 font-medium line-height-3">¿No Esta registrado?</span>
                <a href="/register" class="font-medium no-underline ml-2 text-blue-500 cursor-pointer">Crear Cuenta</a>
            </div>

            <div>

                <label for="email1" class="flex block text-900 font-medium mb-2 mt-6">Correo electronico</label>
                <InputText id="email1" type="text" class="w-full flex mb-3 rounded-md shadow-xl" require />

                <label for="password" class="flex block text-900 font-medium mb-2 mt-6">Contraseña</label>
                <InputText id="password" type="password" class="w-full flex mb-2 rounded-md shadow-xl" aria-describedby="password-help" require />
                <small class="flex text-xs text-gray-400" id="password-help">ingrese una contraseña de minimo 8 caracteres</small>

                <div class="flex align-items-center justify-content-between mb-6 mt-4">
                    <div class="flex align-items-center">
                        <!-- <Checkbox id="rememberme1" :binary="true" v-model="checked" class="mr-2"></Checkbox>
                        <label for="rememberme1">Remember me</label> -->
                    </div>
                    <a class="font-medium no-underline ml-2 text-blue-500 text-right cursor-pointer">Forgot password?</a>
                </div>

                <Button class="bg-emerald-800 bg-gradient-to-tr from-emerald-600 via-emerald-700 to-emerald-500 rounded-md shadow-xl text-white p-2">Iniciar Sesión</Button>
            </div>
        </div>
    </div>
</template>
<script>
import { UserCircleIcon } from '@heroicons/vue/24/solid';
import InputText from 'primevue/inputtext';
export default {

    components: {
        UserCircleIcon,
        InputText,
    },

    setup() {

        return {


        }
    }

}
</script>
<style scoped>
.fondo {
    background: url('../../assets/img/fondo.jpg');
    background-size: cover;
}
</style>