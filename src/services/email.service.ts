import axios from "axios";

export default {
  sendEmail: async ({ name, email, message }: { name: string, email: string, message: string }): Promise<void> => {
    await axios.post("https://api.resend.com/emails", {
      from: email,
      to: process.env.FELD_EMAIL,
      subject: "New Form Submission",
      html: `<p>Name: ${name}</p><p>Email: ${email}</p><p>Message: ${message}</p>`
    }, {
      headers: {
        "Authorization": `Bearer ${process.env.RESEND_API_KEY}`,
        "Content-Type": "application/json"
      }
    });
  },
}