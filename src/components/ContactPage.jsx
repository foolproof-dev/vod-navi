import React from 'react';

const ContactPage = () => {
    return (
        <div className="contact-page-container">
            <h1>お問い合わせ</h1>
            <p>
                VODナビに関するご質問、ご要望、不具合の報告などは、以下のフォームよりお送りください。
            </p>

            <div className="google-form-container">
                {/* 
          ここにGoogleフォームの埋め込みコード（iframe）を貼り付けます。
          例:
          <iframe 
            src="https://docs.google.com/forms/d/e/YOUR_FORM_ID/viewform?embedded=true" 
            width="640" 
            height="800" 
            frameBorder="0" 
            marginHeight="0" 
            marginWidth="0"
            title="Contact Form"
          >
            読み込んでいます…
          </iframe>
        */}
                <div className="form-placeholder">
                    <p>ここにGoogleフォームが表示されます。</p>
                    <p>Googleフォームを作成し、「送信」ボタンから「埋め込み（&lt; &gt;）」を選択してコードを取得し、<br /><code>src/components/ContactPage.jsx</code> に貼り付けてください。</p>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;
