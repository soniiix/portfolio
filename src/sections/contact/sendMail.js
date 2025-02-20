/**
 * Send an email from contact form data using Web3Forms.
 * @param {FormData} formData
 */
export async function sendMail(formData) {
    formData.append("access_key", "5651075e-b899-4993-8d67-33cd6c082839");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
        },
        body: json,
    }).then((res) => res.json());

    if (res.success) {
        console.log("Success", res);
    }
}