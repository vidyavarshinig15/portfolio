import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const { nom, prenom, email, message } = await request.json();

    if (!nom || !prenom || !email || !message) {
      return NextResponse.json(
        { error: "Tous les champs sont requis" },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "Email invalide" }, { status: 400 });
    }

    if (!process.env.SMTP_HOST || !process.env.SMTP_USER || !process.env.SMTP_PASSWORD) {
      console.warn("SMTP environment variables are not set. Logging email to console:");
      console.log(`Nom: ${nom}, Prénom: ${prenom}, Email: ${email}`);
      console.log("Message:", message);
      return NextResponse.json({ success: true });
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT || "587"),
      secure: process.env.SMTP_SECURE === "true",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    });

    const mailOptions = {
      from: process.env.SMTP_FROM || process.env.SMTP_USER,
      to: "vidyavarshinig15@gmail.com",
      subject: `Nouveau message de ${prenom} ${nom}`,
      text: `
Nom: ${nom}
Prénom: ${prenom}
Email: ${email}

Message:
${message}
      `,
      html: `
        <!DOCTYPE html>
        <html lang="fr">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <meta name="color-scheme" content="light only">
          <meta name="supported-color-schemes" content="light">
          <title>Nouveau message</title>
          <style>
            :root {
              color-scheme: light only;
              supported-color-schemes: light;
            }
          </style>
        </head>
        <body style="margin: 0 !important; padding: 0 !important; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif !important;">
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="padding: 40px 20px;">
            <tr>
              <td align="center">
                <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="background-color: #121212 !important; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);">
                  
                  <!-- Content -->
                  <tr>
                    <td style="padding: 48px 40px 40px 40px;">
                      
                      <!-- Logo VG -->
                      <div style="text-align: center; margin-bottom: 40px;">
                        <a href="https://github.com/vidyavarshinig15"><img src="https://raw.githubusercontent.com/vidyavarshinig15/portfolio/main/public/vg.png" alt="Logo VG" style="width: 80px; height: auto;" /></a>
                      </div>

                      <!-- Titre avec barre -->
                      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin-bottom: 32px;">
                        <tr>
                          <td style="vertical-align: bottom; padding-bottom: 8px; white-space: nowrap;">
                            <h1 style="margin: 0 !important; color: #ffffff !important; font-size: 42px; font-weight: 700; white-space: nowrap; letter-spacing: -0.5px;">
                              Nouveau message
                            </h1>
                          </td>
                          <td style="width: 100%; vertical-align: bottom; padding-bottom: 12px; padding-left: 24px;">
                            <div style="height: 3px; background: rgba(255, 255, 255, 0.3) !important; width: 100%;"></div>
                          </td>
                        </tr>
                      </table>

                      <!-- Informations expéditeur -->
                      <div style="background-color: #1a1a1a !important; padding: 24px; border-radius: 12px; margin-bottom: 30px;">
                        <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                          <tr>
                            <!-- Photo de profil placeholder -->
                            <td style="width: 80px; vertical-align: top;">
                              <div style="width: 80px; height: 80px; border-radius: 50%; background: linear-gradient(135deg, #2a2a2a 0%, #3a3a3a 100%);"></div>
                            </td>
                            
                            <!-- Informations -->
                            <td style="vertical-align: top; padding-left: 24px;">
                              <h2 style="margin: 0 0 8px 0 !important; color: #ffffff !important; font-size: 24px; font-weight: 700; letter-spacing: -0.5px;">
                                ${prenom} ${nom}
                              </h2>
                              <table role="presentation" cellpadding="0" cellspacing="0" style="background-color: rgba(255, 255, 255, 0.1) !important; border-radius: 20px;">
                                <tr>
                                  <td style="padding: 6px 6px 6px 12px;">
                                    <img src="https://raw.githubusercontent.com/vidyavarshinig15/portfolio/main/public/envelope.png" alt="Email" style="width: 16px; height: 16px; display: block; vertical-align: middle;" />
                                  </td>
                                  <td style="padding: 6px 12px 6px 4px;">
                                    <a href="mailto:${email}" style="color: #D1D5DC !important; font-size: 14px; font-weight: 500; text-decoration: none !important; border-bottom: none !important; box-shadow: none !important; white-space: nowrap; display: inline-block; vertical-align: middle;">
                                      ${email}
                                    </a>
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                        </table>
                      </div>

                      <!-- Message -->
                      <div style="margin-bottom: 30px;">
                        <h2 style="margin: 0 0 16px 0 !important; color: #ffffff !important; font-size: 24px; font-weight: 600;">
                          Message
                        </h2>
                        <div style="background-color: #1a1a1a !important; padding: 20px; border-radius: 8px; color: #d0d0d0 !important; font-size: 16px; line-height: 1.6;">
                          ${message.replace(/\n/g, "<br>")}
                        </div>
                      </div>

                      <!-- Bouton de réponse -->
                      <div style="text-align: center; margin-top: 32px;">
                        <a href="mailto:${email}" style="display: inline-flex; align-items: center; gap: 8px; background-color: #ffffff !important; color: #191919 !important; padding: 14px 32px; border-radius: 8px; text-decoration: none; font-weight: 600; font-size: 15px;">
                          <span style="transform: translateY(-1px); display: inline-block; color: #191919 !important;">Répondre au message</span>
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="flex-shrink: 0;">
                            <path d="M14 5l7 7m0 0l-7 7m7-7H3"/>
                          </svg>
                        </a>
                      </div>

                    </td>
                  </tr>

                  <!-- Footer -->
                  <tr>
                    <td style="background-color: #0f0f0f !important; padding: 24px 40px; text-align: center; border-top: 1px solid #2a2a2a;">
                      <p style="margin: 0 !important; color: #999999 !important; font-size: 13px; line-height: 1.5;">
                        Ce message a été envoyé depuis le formulaire de contact de votre portfolio.
                      </p>
                      <p style="margin: 8px 0 0 0 !important; color: #666666 !important; font-size: 12px;">
                        © ${new Date().getFullYear()} Vidyavarshini G. Tous droits réservés.
                      </p>
                    </td>
                  </tr>

                </table>
              </td>
            </tr>
          </table>
        </body>
        </html>
      `,
    };

    // Envoi de l'email
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: "Message envoyé avec succès" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Erreur lors de l'envoi de l'email:", error);
    return NextResponse.json(
      { error: "Erreur lors de l'envoi du message" },
      { status: 500 }
    );
  }
}
