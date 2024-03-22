import { createStore } from 'vuex'

export default createStore({
  state: {
    usuario: {

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

    },
  },
  getters: {
  },
  mutations: {
    añadirUsuario(state, usuario) {
      state.usuario = usuario;
    },
  },
  actions: {
    añadirUsuario({ commit }, usuario) {
      commit('añadirUsuario', usuario);
    },
  },
  modules: {
  }
})
