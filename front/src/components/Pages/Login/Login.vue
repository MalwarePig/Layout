<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { Mail, Lock } from 'lucide-vue-next';

const router = useRouter();
const email = ref('');
const password = ref('');

const handleLogin = () => {
    // Al no tener backend, simulamos un login exitoso redirigiendo al home
    router.push('/home');
};
</script>

<template>
    <div class="login-container">

        <div class="login-wrapper">

            <!-- Sección Izquierda: Formulario (Reflejando el diseño Infinity) -->
            <div class="login-form-side">
                <div class="form-header">
                    <p class="welcome-text">BIENVENIDO A</p>
                    <div class="brand-title">
                        <span class="brand-icon">&infin;</span>
                        <h1 class="brand-text">CRM INFINITO</h1>
                    </div>
                    <p class="subtitle">Inicia sesión para recibir actualizaciones al momento de las cosas que te
                        interesan.</p>
                </div>

                <form @submit.prevent="handleLogin" class="login-form">
                    <div class="input-group">
                        <div class="input-wrapper">
                            <Mail class="input-icon" :size="18" />
                            <input type="text" v-model="email" placeholder="Usuario / Correo" required />
                        </div>
                    </div>

                    <div class="input-group">
                        <div class="input-wrapper">
                            <Lock class="input-icon" :size="18" />
                            <input type="password" v-model="password" placeholder="Contraseña" required />
                        </div>
                    </div>

                    <button type="submit" class="submit-btn" style="background: var(--color-action-default);">
                        INGRESAR
                    </button>
                </form>
            </div>

            <!-- Sección Derecha: Branding e Imagen -->
            <div class="login-brand-side">
                <!-- Capa translúcida sobre la imagen -->
                <div class="brand-overlay"></div>

                <div class="brand-content">
                    <span style="font-size: 5rem; font-weight: bold; margin-bottom: 10px;">&infin;</span>
                    <h2>NUESTRO CRM</h2>
                    <p>Gestiona eficientemente tu base de clientes y prospectos. Analiza métricas en tiempo real de
                        forma intuitiva.</p>
                </div>
            </div>

        </div>
    </div>
</template>

<style scoped>
/* Contenedor principal a pantalla completa */
.login-container {
    height: 100vh;
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--color-bg-page);
}

/* Tarjeta contenedora principal plana y limpia */
.login-wrapper {
    display: flex;
    width: 900px;
    height: 550px;
    background: var(--color-bg-surface);
    border-radius: 12px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
    overflow: hidden;
    position: relative;
    border: 1px solid var(--color-border-default);
}

/* -------- LADO IZQUIERDO: Formulario -------- */
.login-form-side {
    flex: 1;
    padding: 50px 60px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background: var(--color-bg-surface);
}

.form-header {
    text-align: center;
    margin-bottom: 30px;
}

.welcome-text {
    font-size: 0.85rem;
    color: var(--color-text-secondary);
    letter-spacing: 1px;
    margin: 0 0 5px 0;
    text-transform: uppercase;
}

.brand-title {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    margin-bottom: 15px;
}

/* Aplicando el color de ACENTO principal de tu paleta */
.brand-title .brand-icon {
    font-size: 2.2rem;
    font-weight: 800;
    color: var(--color-accent-default);
}

.brand-title .brand-text {
    font-size: 1.8rem;
    font-weight: 700;
    margin: 0;
    letter-spacing: 1px;
    text-transform: uppercase;
    color: var(--color-accent-default);
}

.subtitle {
    font-size: 0.85rem;
    color: var(--color-text-tertiary);
    margin: 0;
    line-height: 1.5;
    padding: 0 10px;
}

/* Inputs */
.input-group {
    margin-bottom: 20px;
}

.input-wrapper {
    position: relative;
    display: flex;
    align-items: center;
}

.input-icon {
    position: absolute;
    left: 20px;
    color: var(--color-text-tertiary);
    transition: color 0.3s;
}

.input-wrapper input {
    width: 100%;
    padding: 12px 20px 12px 50px;
    border: 1px solid var(--color-border-default);
    border-radius: 30px;
    font-size: 0.9rem;
    color: var(--color-text-primary);
    background: transparent;
    transition: all 0.2s ease;
    outline: none;
}

.input-wrapper input::placeholder {
    color: var(--color-text-disabled);
}

.input-wrapper:focus-within input {
    border-color: var(--color-accent-default);
}

.input-wrapper:focus-within .input-icon {
    color: var(--color-accent-default);
}

/* Botón Principal (Usa el color de ACCIÓN) */
.submit-btn {
    width: 100%;
    padding: 14px;
    font-size: 0.9rem;
    border-radius: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 600;
    color: var(--color-action-text, #FFFFFF);
    border: none;
    cursor: pointer;
    letter-spacing: 1px;
    margin-top: 10px;
    box-shadow: 0 6px 15px rgba(242, 100, 25, 0.3);
    transition: transform 0.2s, box-shadow 0.2s;
}

.submit-btn:active {
    transform: translateY(2px);
    box-shadow: 0 2px 5px rgba(242, 100, 25, 0.3);
}

/* -------- LADO DERECHO: Branding e Imagen -------- */
.login-brand-side {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #FFFFFF;
    text-align: center;
    position: relative;
    padding: 60px 50px;

    /* Configuración de Imagen de Fondo (Reemplaza con tu imagen) */
    background-image: url('https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1000');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
}

/* Capa de color de tu paleta encima de la imagen */
.brand-overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    /* Usamos tu color principal de acento como capa */
    background-color: var(--color-accent-default);
    /* Puedes ajustar qué tan transparente es esta capa (0.1 a 0.9) */
    opacity: 0.85;
    z-index: 1;
}

.brand-content {
    position: relative;
    z-index: 2;
    /* Mantiene el texto encima del color */
}

.brand-content h2 {
    font-size: 2.2rem;
    font-weight: 700;
    margin: 0 0 15px 0;
    letter-spacing: 1px;
}

.brand-content p {
    font-size: 0.95rem;
    opacity: 0.9;
    line-height: 1.6;
    margin: 0;
}
</style>
