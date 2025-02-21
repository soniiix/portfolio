/**
 * Send an email from contact form data using Web3Forms.
 * @param {FormData} formData
 * @returns {Promise}
 */
export async function sendMail(formData) {
    formData.append("access_key", import.meta.env.VITE_WEB3FORMS_ACCESS_KEY);
    formData.append("subject", "Nouveau message reçu via le formulaire de contact")
    formData.append("from_name", "Portfolio")

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: json
        });
        
        if (!response.ok) {
            throw new Error("HTTP Error " + response.status);
        }
        
        const jsonResponse = await response.json();

        if (!jsonResponse.success) {
            throw new Error(jsonResponse.message);
        }
        return jsonResponse;
    } catch (error) {
        console.error("Mail sending error", error);
        throw error;
    }
}