<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const email = ref('');
const password = ref('');

const handleLogin = () => {
    // Al no tener backend, simulamos un login exitoso redirigiendo al home
    router.push('/home');
};
</script>

<template>
    <div class="login-page">
        <!-- Login Form -->
        <div class="login-container">
            <!-- Image Header with Overlay -->
            <div class="card-image-header">
                <div class="image-overlay">
                    <div class="brand-header-inner">
                        <span class="brand-icon"> λ</span>
                        <h1 class="brand-title">KAUS</h1>
                    </div>
                </div>
            </div>

            <form @submit.prevent="handleLogin" class="login-form">

                <div class="input-group">
                    <span class="input-icon">
                        <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" stroke-width="2"
                            fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                            <circle cx="12" cy="7" r="4"></circle>
                        </svg>
                    </span>
                    <input type="text" v-model="email" placeholder="Usuario" required />
                </div>

                <div class="input-group">
                    <span class="input-icon">
                        <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" stroke-width="2"
                            fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path
                                d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4">
                            </path>
                        </svg>
                    </span>
                    <div class="input-wrapper">
                        <input type="password" v-model="password" placeholder="Contraseña" required />
                    </div>
                </div>

                <div class="actions-group">
                    <button type="submit" class="submit-btn">Ingresar</button>
                    <!-- <a href="#" class="signup-link">SIGNUP</a> -->
                </div>
            </form>
        </div>

        <!-- Footer -->
        <div class="page-footer">
            <span class="footer-logo"><strong>Kaus</strong> System</span>
            <span class="footer-text">Bienvenido al CRM</span>
        </div>
    </div>
</template>

<style scoped>
.login-page {
    min-height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: linear-gradient(160deg, #9b5b7b 0%, #69446d 40%, #3f2a56 100%);
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
    position: relative;
    color: white;
}

/* Image Header */
.card-image-header {
    height: 180px;
    width: 100%;
    /* Placeholder for the top image you mentioned */
    background-image: url('https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop');
    background-size: cover;
    background-position: center;
    position: relative;
}

.image-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    /* Color layer that is transparent (gradient) */
    background: linear-gradient(to bottom, rgba(105, 68, 109, 0.4), rgba(63, 42, 86, 0.9));
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1;
}

/* Header Inner (over image) */
.brand-header-inner {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
}

.brand-icon {
    font-size: 3rem;
    font-weight: 800;
    color: #ffffff;
    line-height: 1;
}

.brand-title {
    font-size: 1.4rem;
    font-weight: 700;
    margin: 0;
    letter-spacing: 4px;
}

/* Form Container */
.login-container {
    width: 100%;
    max-width: 360px;
    background: rgba(0, 0, 0, 0.15);
    border-radius: 16px;
    box-shadow: 0 20px 50px rgba(0, 0, 0, 0.3);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.08);
    overflow: hidden;
    /* Important to keep image inside the bordered card */
    display: flex;
    flex-direction: column;
}

.login-form {
    display: flex;
    flex-direction: column;
    gap: 30px;
    padding: 30px 30px 40px 30px;
    /* Shifted padding from container to form */
}

/* Inputs */
.input-group {
    display: flex;
    align-items: center;
    gap: 15px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
    padding-bottom: 8px;
    position: relative;
}

.input-icon {
    color: rgba(255, 255, 255, 0.6);
    display: flex;
    align-items: center;
    justify-content: center;
}

.input-wrapper {
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
}

.input-group input {
    background: transparent;
    border: none;
    color: white;
    font-size: 0.95rem;
    width: 100%;
    outline: none;
    font-family: inherit;
}

.input-group input::placeholder {
    color: rgba(255, 255, 255, 0.6);
    font-weight: 300;
}


/* Actions */
.actions-group {
    display: flex;
    align-items: center;
    justify-content: center; /* Added this to center the button */
    margin-top: 15px;
    gap: 20px;
}

.submit-btn {
    background: white;
    color: #4a2b53;
    /* Text color that fits the background theme */
    border: none;
    padding: 12px 30px;
    border-radius: 20px;
    /* Pill shape */
    font-size: 0.8rem;
    font-weight: 700;
    letter-spacing: 1px;
    text-transform: uppercase;
    cursor: pointer;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
    transition: transform 0.2s, box-shadow 0.2s;
    font-family: inherit;
}

.submit-btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
}

.signup-link {
    font-size: 0.8rem;
    font-weight: 600;
    color: white;
    text-decoration: none;
    letter-spacing: 1px;
}

/* Footer */
.page-footer {
    position: absolute;
    bottom: 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 6px;
}

.footer-logo {
    font-size: 1rem;
    color: rgba(255, 255, 255, 0.9);
}

.footer-logo strong {
    font-weight: 700;
}

.footer-text {
    font-size: 0.8rem;
    color: rgba(255, 255, 255, 0.6);
}
</style>
