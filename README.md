### OVIK - React & Tailwind CSS Portfolio SASS Template for selling on Envato ThemeForest marketplace
A professional, modern, and responsive React & Tailwind CSS portfolio SASS template for developers, designers, freelancers, and agencies to showcase their work and services. This template is designed to help you create a stunning online presence and attract potential clients.
![ovik-react-screenshort](https://ovikbiswas.wordpress.com/wp-content/uploads/2025/10/ovik-react-screenshort.png)

### Links
- [Live Demo](https://ovik-portfolio-react-2.vercel.app/)
- [Purchase on ThemeForest](https://ovik-portfolio-react-2.vercel.app/)
- [Github Repo](https://github.com/codeovik/ovik-portfolio-react-2)

### Technologies Used
- React
- Tailwind CSS
- EmailJS
- ScrollReveal.js
- GSAP
- FontAwesome
- Google Fonts
- Lenis
- Odometer
- Swiper js
- Typed js
- vanilla-tilt

### To run this project locally
1. Clone the repository
```bash
git clone https://github.com/codeovik/ovik-portfolio-react-2.git
```
2. Go directory
```bash
cd ovik-portfolio-react-2
```
2. Install dependencies
```bash
npm i
```
3. Run tailwind css compailor
```bash
npm run dev
```

### Development Timeline
- 28 September, 2025 - Start from screatch
- 30 sep - 3 oct, work off for Durga Puja
- 5 october, 2025 - First Commit

Remember: You should set email.js
Here is auto replay email template(for users) code:
```html
<div style="font-family: system-ui, sans-serif, Arial; font-size: 12px;">
    <span style="font-size: 14pt; font-family: tahoma, arial, helvetica, sans-serif;">Hello {{user_name}},</span>
    <br>
    <span style="font-size: 14pt; font-family: tahoma, arial, helvetica, sans-serif;">Thank you for contacting me. I will get back to you soon.</span>
</div>
```

Here is main email template(for admin) code:
```html
<div style="font-family: system-ui, sans-serif, Arial; font-size: 12px;">
    <div>
        <span style="font-family: tahoma, arial, helvetica, sans-serif;">Here is the detailed data that {{user_name}} submited.</span>
    </div>
    <div style="margin-top: 20px; padding: 15px 0; border-width: 1px 0; border-style: dashed; border-color: lightgrey;">
        <table style="width: 35.7254%; height: 87px;" role="presentation">
            <tbody>
                <tr style="height: 87px;">
                    <td style="vertical-align: top; width: 14.0456%;">
                        <div style="padding: 6px 10px; margin: 0 10px; background-color: aliceblue; border-radius: 5px; font-size: 26px;" role="img">
                            <span style="font-family: tahoma, arial, helvetica, sans-serif;">👤</span>
                        </div>
                    </td>
                    <td style="vertical-align: top; width: 85.9578%;">
                        <div style="color: #2c3e50; font-size: 16px;">
                            <span style="font-family: tahoma, arial, helvetica, sans-serif;"><strong>Name:</strong> {{user_name}}</span>
                        </div>
                        <div style="color: #2c3e50; font-size: 16px;">
                            <span style="font-family: tahoma, arial, helvetica, sans-serif;"><strong>Company:</strong> {{user_company}}</span>
                        </div>
                        <div style="color: #2c3e50; font-size: 16px;">
                            <span style="font-family: tahoma, arial, helvetica, sans-serif;"><strong>Email:</strong> {{user_email}}</span>
                        </div>
                        <div style="color: #2c3e50; font-size: 16px;">
                            <span style="font-family: tahoma, arial, helvetica, sans-serif;"><strong>Phone:</strong> {{user_phone}}</span>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
        <p>
            <span style="font-size: 14pt; font-family: tahoma, arial, helvetica, sans-serif;"><strong>Message:</strong> {{user_message}}</span>
        </p>
    </div>
</div>
```