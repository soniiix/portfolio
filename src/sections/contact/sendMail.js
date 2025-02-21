/**
 * Send an email from contact form data using Web3Forms.
 * @param {FormData} formData
 */
export async function sendMail(formData) {
    formData.append("access_key", "5651075e-b899-4993-8d67-33cd6c082839");

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