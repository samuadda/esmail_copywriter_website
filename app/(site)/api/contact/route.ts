import { Resend } from "resend";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
    try {
        const resendApiKey = process.env.RESEND_API_KEY;
        if (!resendApiKey) {
            console.error("RESEND_API_KEY env variable is not set");
            return NextResponse.json({ error: "خطأ في إعداد الخادم" }, { status: 500 });
        }
        const resend = new Resend(resendApiKey);

        const body = await request.json();
        const { name, email, phone, subject, type, mainProblem, challengeLocation, link, timeline } = body;

        if (!name?.trim() || !email?.trim()) {
            return NextResponse.json({ error: "الاسم والبريد الإلكتروني مطلوبان" }, { status: 400 });
        }

        const recipientEmail = process.env.CONTACT_EMAIL;
        if (!recipientEmail) {
            console.error("CONTACT_EMAIL env variable is not set");
            return NextResponse.json({ error: "خطأ في إعداد الخادم" }, { status: 500 });
        }

        await resend.emails.send({
            from: "نموذج الموقع <noreply@esm2il.com>",
            to: [recipientEmail],
            replyTo: email,
            subject: `رسالة جديدة من ${name} — ${subject || "بدون موضوع"}`,
            html: `
                <div dir="rtl" style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; background: #f9fafb; border-radius: 12px;">
                    <h2 style="color: #f44674; margin-bottom: 24px;">رسالة جديدة من نموذج الموقع</h2>

                    <table style="width: 100%; border-collapse: collapse;">
                        <tr>
                            <td style="padding: 10px; font-weight: bold; color: #374151; width: 35%;">الاسم:</td>
                            <td style="padding: 10px; color: #1f2937;">${name}</td>
                        </tr>
                        <tr style="background: #fff;">
                            <td style="padding: 10px; font-weight: bold; color: #374151;">البريد الإلكتروني:</td>
                            <td style="padding: 10px; color: #1f2937;">${email}</td>
                        </tr>
                        ${phone ? `
                        <tr>
                            <td style="padding: 10px; font-weight: bold; color: #374151;">الهاتف / واتساب:</td>
                            <td style="padding: 10px; color: #1f2937;">${phone}</td>
                        </tr>` : ""}
                        ${subject ? `
                        <tr style="background: #fff;">
                            <td style="padding: 10px; font-weight: bold; color: #374151;">ملاحظة:</td>
                            <td style="padding: 10px; color: #1f2937;">${subject}</td>
                        </tr>` : ""}
                        ${type ? `
                        <tr>
                            <td style="padding: 10px; font-weight: bold; color: #374151;">نوع المشروع:</td>
                            <td style="padding: 10px; color: #1f2937;">${type}</td>
                        </tr>` : ""}
                        ${mainProblem?.length ? `
                        <tr style="background: #fff;">
                            <td style="padding: 10px; font-weight: bold; color: #374151;">المشكلة الرئيسية:</td>
                            <td style="padding: 10px; color: #1f2937;">${mainProblem.join("، ")}</td>
                        </tr>` : ""}
                        ${challengeLocation?.length ? `
                        <tr>
                            <td style="padding: 10px; font-weight: bold; color: #374151;">موقع التحدي:</td>
                            <td style="padding: 10px; color: #1f2937;">${challengeLocation.join("، ")}</td>
                        </tr>` : ""}
                        ${link ? `
                        <tr style="background: #fff;">
                            <td style="padding: 10px; font-weight: bold; color: #374151;">الرابط:</td>
                            <td style="padding: 10px;"><a href="${link}" style="color: #f44674;">${link}</a></td>
                        </tr>` : ""}
                        ${timeline ? `
                        <tr>
                            <td style="padding: 10px; font-weight: bold; color: #374151;">الجدول الزمني:</td>
                            <td style="padding: 10px; color: #1f2937;">${timeline}</td>
                        </tr>` : ""}
                    </table>
                </div>
            `,
        });

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error("Contact form error:", error);
        return NextResponse.json({ error: "حدث خطأ أثناء إرسال الرسالة" }, { status: 500 });
    }
}
