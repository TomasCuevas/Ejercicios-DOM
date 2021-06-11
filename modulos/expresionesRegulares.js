export const expresiones = {
    name: /^[a-zA-ZÁ-ÿ\u00f1\u00d1\s]{1,30}$/,
    email: /^[a-zA-Z0-9À-ÿ\u00f1\u00d1\-\_]+@[a-zA-Z0-9Á-ÿ\u00f1\u00d1\-\_]+\.[a-zA-Z0-9Ä-ÿ\u00f1\u00d1\-\_]+$/,
    matter: /^[a-zA-Z0-9Á-ÿ\u00f1\u00d1\s\,\.\?\¿\!\¡]{8,30}$/,
    message: /^[a-zA-Z0-9Á-ÿ\u00f1\u00d1\s\,\.\?\¿\!\¡\(\)\[\]\{\}]{10,300}$/
}