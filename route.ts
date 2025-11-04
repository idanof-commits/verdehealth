// Uncomment when SMTP is ready
// import nodemailer from 'nodemailer';
// export async function POST(req: Request) {
//   try {
//     const { form, calc, plan } = await req.json();
//     const transporter = nodemailer.createTransport({
//       host: process.env.SMTP_HOST!,
//       port: Number(process.env.SMTP_PORT || 465),
//       secure: true,
//       auth: { user: process.env.SMTP_USER!, pass: process.env.SMTP_PASS! },
//     });
//     await transporter.sendMail({
//       from: 'VERDE HEALTH <no-reply@verdehealth.bg>',
//       to: form?.email,
//       bcc: 'support@verdehealth.bg',
//       subject: 'Вашият план — VERDE HEALTH',
//       html: `<h1>Резюме</h1><pre>${JSON.stringify({ form, calc, plan }, null, 2)}</pre>`
//     });
//     return new Response(JSON.stringify({ ok: true }), { status: 200 });
//   } catch (e: any) {
//     return new Response(JSON.stringify({ ok: false, error: e?.message || 'ERR' }), { status: 500 });
//   }
// }
