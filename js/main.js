// js/main.js
import { carregarProjetos } from "./templates.js";
import { validarFormulario } from "./validacao.js";

document.addEventListener("DOMContentLoaded", () => {
  carregarProjetos();
  validarFormulario();
});
