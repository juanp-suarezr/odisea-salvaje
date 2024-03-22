<template>
    <div class="flex h-100 my-4 md:my-0 md:h-screen items-center justify-center fondo">

        <div class="justify-center bg-gray-200 p-4 shadow-2 rounded-md shadow-xl w-full max-w-2xl rounded-md">
            <div class="text-center">
                <router-link to="/" class="w-full flex">
                    <UserCircleIcon class="w-24 h-24 md:w-28 md:h-28 text-emerald-700 hover:text-white m-auto" />
                </router-link>

                <span class="text-600 font-medium line-height-3">¿Esta registrado?</span>
                <a href="/login" class="font-medium no-underline ml-2 text-blue-500 cursor-pointer">Iniciar sesión</a>
            </div>

            <div class="md:grid grid-cols-2 gap-2 mt-4">
                <div class="px-2">
                    <label for="nombre" class="flex justify-start block text-900 font-medium mb-2">Nombre</label>
                    <InputText v-model='usuario.name' id="nombre" type="text" class="w-full flex rounded-md shadow-xl"
                        aria-describedby="username-help" />
                    <small class="text-xs text-gray-400" id="username-help">Ingrese su nombre completo.</small>
                </div>

                <div class="px-2">
                    <label for="identificacion" class="flex block text-900 font-medium mb-2">Identificación</label>
                    <InputText v-model='usuario.identificacion' id="identificacion" type="text"
                        class="w-full flex rounded-md shadow-xl" />
                </div>

                <div class="px-2">
                    <label for="celular" class="flex block text-900 font-medium mb-2">Celular</label>
                    <InputText v-model='usuario.celular' id="celular" type="text"
                        class="w-full flex rounded-md shadow-xl text-gray-800" aria-describedby="celular-help" />
                    <small class="text-xs text-gray-400" id="celular-help">si es posible, ingrese un numero que tenga
                        whatsapp</small>
                </div>

                <div class="px-2">
                    <label for="direccion" class="flex block text-900 font-medium mb-2">Dirección</label>
                    <InputText v-model='usuario.direccion' id="direccion" type="text"
                        class="w-full flex rounded-md shadow-xl" />
                </div>

                <div class="px-2">
                    <!-- fecha cumpleaños -->
                    <label class="flex block text-900 font-medium mb-2">Día y hora</label>
                    

                </div>


                <div class="px-2">
                    <label for="email1" class="flex block text-900 font-medium mb-2">Correo electronico</label>
                    <InputText v-model="usuario.email" id="email1" type="text"
                        class="w-full flex rounded-md shadow-xl" />
                </div>

                <div class="px-2">
                    <label for="password" class="flex block text-900 font-medium mb-2 mt-6">Contraseña</label>
                    <InputText v-model="usuario.password" id="password" type="password"
                        class="w-full flex mb-2 rounded-md shadow-xl" aria-describedby="password-help" require />
                    <small class="flex text-xs text-gray-400" id="password-help">ingrese una contraseña de minimo 8
                        caracteres</small>
                </div>


            </div>
            <div class="flex align-items-center justify-content-between mb-6">
                <div class="flex align-items-center">
                    <Checkbox id="rememberme1" :binary="true" v-model="checked" class="mr-2"></Checkbox>
                    <label for="rememberme1">Remember me</label>
                </div>
                <a class="font-medium no-underline ml-2 text-blue-500 text-right cursor-pointer">Forgot password?</a>
            </div>

            <Button
                class="bg-emerald-800 bg-gradient-to-tr from-emerald-600 via-emerald-700 to-emerald-500 rounded-md shadow-xl text-white p-2">Registrarse</Button>
        </div>
    </div>
</template>

<script>
import { UserCircleIcon } from '@heroicons/vue/24/solid'
import InputText from 'primevue/inputtext';
import Calendar from 'primevue/calendar';
import axios from 'axios';
import { onMounted } from 'vue';
export default {


    components: {
        UserCircleIcon,
        InputText,
        Calendar,
    },

    setup() {

        let usuario = {
            id: '',
            nombre: '',
            email: '',
            password: '',
            rol: '',
            estado: '',
            identificacion: '',
            celular: '',
            direccion: '',
            fecha_nacimiento: '',
        }

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