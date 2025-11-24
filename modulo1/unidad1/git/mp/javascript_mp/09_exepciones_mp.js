// 🐾 Manejo de errores en el sistema de Consultas Veterinarias

try {
    console.log(pacienteNoRegistrado); // variable no definida
} catch (error) {
    console.log("⚠️ Ha ocurrido un error al registrar el paciente:", error.message);
}

try {
    console.log("Intentando acceder al historial clínico...");
    throw new Error("Historial del paciente no encontrado 🐕📁");
} catch (error) {
    console.log("❌ Mensaje de error:", error.message);
} finally {
    console.log("✅ Finalizando intento de acceso al historial clínico");
}
