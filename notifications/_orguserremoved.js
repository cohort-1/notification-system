/**
 * email template for past due bookings
 * @param {{name: String, orgName: String}}
 * @returns
 */
exports.sms = (data) => `Dear ${data?.orgName},\nThis is to inform you that ${data?.name} has been successfully removed from ${data?.orgName}. Their access to the organization's resources has been revoked.\nThanks,\nTruck Parking Club`;
/*  */
exports.subject = (data) => `${data?.name} Has Been Removed from  ${data?.orgName || 'Organization'}`;
/**
 * email template for past due bookings
 * @param {{ data: { name: String, orgName: String}, footer: Element, assetsBaseUrl: URL}}
 * @returns
 */
exports.email = ({ data, footer, assetsBaseUrl }) => `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xmlns:o="urn:schemas-microsoft-com:office:office" style="font-family: arial, 'helvetica neue', helvetica, sans-serif">
  <head>
    <meta charset="UTF-8" />
    <meta content="width=device-width, initial-scale=1" name="viewport" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <meta name="x-apple-disable-message-reformatting" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta content="telephone=no" name="format-detection" />
    <title>Update to Your Reservation - Important Information Changed</title>
    <!--[if (mso 16)]>
      <style type="text/css">
        a {
          text-decoration: none;
        }
      </style>
    <![endif]-->
    <!--[if gte mso 9
      ]><style>
        sup {
          font-size: 100% !important;
        }
      </style><!
    [endif]-->
    <!--[if gte mso 9]>
      <xml>
        <o:OfficeDocumentSettings>
          <o:AllowPNG></o:AllowPNG>
          <o:PixelsPerInch>96</o:PixelsPerInch>
        </o:OfficeDocumentSettings>
      </xml>
    <![endif]-->
    <!--[if !mso]><!-- -->

    <link
      href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&family=Roboto:wght@400;700&display=swap"
      rel="stylesheet"
    />
    <!--<![endif]-->
    <style type="text/css">
      #outlook a {
        padding: 0;
      }
      .es-button {
        mso-style-priority: 100 !important;
        text-decoration: none !important;
      }
      a[x-apple-data-detectors] {
        color: inherit !important;
        text-decoration: none !important;
        font-size: inherit !important;
        font-family: inherit !important;
        font-weight: inherit !important;
        line-height: inherit !important;
      }
      .es-desk-hidden {
        display: none;
        float: left;
        overflow: hidden;
        width: 0;
        max-height: 0;
        line-height: 0;
        mso-hide: all;
      }
      [data-ogsb] .es-button {
        border-width: 0 !important;
        padding: 10px 20px 10px 20px !important;
      }
      .es-button-border:hover a.es-button,
      .es-button-border:hover button.es-button {
        background: #56d66b !important;
        border-color: #56d66b !important;
      }
      .es-button-border:hover {
        border-color: #42d159 #42d159 #42d159 #42d159 !important;
        background: #56d66b !important;
      }
      @media only screen and (max-width: 600px) {
        p,
        ul li,
        ol li,
        a {
          line-height: 150% !important;
        }
        h1,
        h2,
        h3,
        h1 a,
        h2 a,
        h3 a {
          line-height: 120%;
        }
        h1 {
          font-size: 30px !important;
          text-align: left;
        }
        h2 {
          font-size: 24px !important;
          text-align: left;
        }
        h3 {
          font-size: 16px !important;
          text-align: left;
        }
        .es-header-body h1 a,
        .es-content-body h1 a,
        .es-footer-body h1 a {
          font-size: 30px !important;
          text-align: left;
        }
        .es-header-body h2 a,
        .es-content-body h2 a,
        .es-footer-body h2 a {
          font-size: 24px !important;
          text-align: left;
        }
        .es-header-body h3 a,
        .es-content-body h3 a,
        .es-footer-body h3 a {
          font-size: 20px !important;
          text-align: left;
        }
        .es-menu td a {
          font-size: 14px !important;
        }
        .es-header-body p,
        .es-header-body ul li,
        .es-header-body ol li,
        .es-header-body a {
          font-size: 14px !important;
        }
        .es-content-body p,
        .es-content-body ul li,
        .es-content-body ol li,
        .es-content-body a {
          font-size: 14px !important;
        }
        .es-footer-body p,
        .es-footer-body ul li,
        .es-footer-body ol li,
        .es-footer-body a {
          font-size: 14px !important;
        }
        .es-infoblock p,
        .es-infoblock ul li,
        .es-infoblock ol li,
        .es-infoblock a {
          font-size: 12px !important;
        }
        *[class="gmail-fix"] {
          display: none !important;
        }
        .es-m-txt-c,
        .es-m-txt-c h1,
        .es-m-txt-c h2,
        .es-m-txt-c h3 {
          text-align: center !important;
        }
        .es-m-txt-r,
        .es-m-txt-r h1,
        .es-m-txt-r h2,
        .es-m-txt-r h3 {
          text-align: right !important;
        }
        .es-m-txt-l,
        .es-m-txt-l h1,
        .es-m-txt-l h2,
        .es-m-txt-l h3 {
          text-align: left !important;
        }
        .es-m-txt-r img,
        .es-m-txt-c img,
        .es-m-txt-l img {
          display: inline !important;
        }
        .es-button-border {
          display: inline-block !important;
        }
        a.es-button,
        button.es-button {
          font-size: 18px !important;
          display: inline-block !important;
        }
        .es-adaptive table,
        .es-left,
        .es-right {
          width: 100% !important;
        }
        .es-content table,
        .es-header table,
        .es-footer table,
        .es-content,
        .es-footer,
        .es-header {
          width: 100% !important;
          max-width: 600px !important;
        }
        .es-adapt-td {
          display: block !important;
          width: 100% !important;
        }
        .adapt-img {
          width: 100% !important;
          height: auto !important;
        }
        .es-m-p0 {
          padding: 0px !important;
        }
        .es-m-p0r {
          padding-right: 0px !important;
        }
        .es-m-p0l {
          padding-left: 0px !important;
        }
        .es-m-p0t {
          padding-top: 0px !important;
        }
        .es-m-p0b {
          padding-bottom: 0 !important;
        }
        .es-m-p20b {
          padding-bottom: 20px !important;
        }
        .es-mobile-hidden,
        .es-hidden {
          display: none !important;
        }
        tr.es-desk-hidden,
        td.es-desk-hidden,
        table.es-desk-hidden {
          width: auto !important;
          overflow: visible !important;
          float: none !important;
          max-height: inherit !important;
          line-height: inherit !important;
        }
        tr.es-desk-hidden {
          display: table-row !important;
        }
        table.es-desk-hidden {
          display: table !important;
        }
        td.es-desk-menu-hidden {
          display: table-cell !important;
        }
        .es-menu td {
          width: 1% !important;
        }
        table.es-table-not-adapt,
        .esd-block-html table {
          width: auto !important;
        }
        table.es-social {
          display: inline-block !important;
        }
        table.es-social td {
          display: inline-block !important;
        }
        .es-desk-hidden {
          display: table-row !important;
          width: auto !important;
          overflow: visible !important;
          max-height: inherit !important;
        }
      }
      .ii a[href] {
        color: transparent;
      }
    </style>
  </head>
  <body
    style=" width: 100%;cfont-family: 'Open Sans', sans-serif !important; -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; padding: 0; margin: 0;">
    <div class="es-wrapper-color" style="background-color: #f6f6f6">
      <!--[if gte mso 9]>
        <v:background xmlns:v="urn:schemas-microsoft-com:vml" fill="t">
          <v:fill type="tile" color="#f6f6f6"></v:fill>
        </v:background>
      <![endif]-->
      <table class="es-wrapper" width="100%" height="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace: 0pt;mso-table-rspace: 0pt;border-collapse: collapse;border-spacing: 0px;padding: 0;margin: 0;width: 100%;height: 100%;background-repeat: repeat;background-position: center top;background-color: #f6f6f6;">
        <tr>
          <td valign="top" style="padding: 0; margin: 0">
            <table class="es-header" cellspacing="0" cellpadding="0" align="center" style="mso-table-lspace: 0pt;mso-table-rspace: 0pt;border-collapse: collapse;border-spacing: 0px;table-layout: fixed !important;width: 100%;background-color: transparent;background-repeat: repeat;background-position: center top;">
              <tr>
                <td align="center" style="padding: 0; margin: 0">
                  <table class="es-header-body" cellspacing="0" cellpadding="0" bgcolor="#ffffff" align="center" style="mso-table-lspace: 0pt;mso-table-rspace: 0pt;border-collapse: collapse;border-spacing: 0px;background-color: #ffffff;width: 600px;">
                    <tr>
                      <td align="left" style="padding: 0; margin: 0">
                        <!--[if mso]><table style="width:560px" cellpadding="0" cellspacing="0"><tr><td style="width:180px" valign="top"><![endif]-->
                        <table class="es-left" cellspacing="0" cellpadding="0" align="left" style="mso-table-lspace: 0pt;mso-table-rspace: 0pt;border-collapse: collapse;border-spacing: 0px;float: left;">
                          <tr>
                            <td class="es-m-p0r es-m-p20b" valign="top" align="center" style="padding: 0; margin: 0; width: 180px">
                              <table width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace: 0pt;mso-table-rspace: 0pt;border-collapse: collapse;border-spacing: 0px;">
                                <tr><td style="padding: 0; margin: 0; display: none" align="center"></td></tr>
                              </table>
                            </td>
                          </tr>
                        </table>
                        <!--[if mso]></td><td style="width:20px"></td><td style="width:360px" valign="top"><![endif]-->
                        <table class="es-right" cellspacing="0" cellpadding="0" align="right" style="mso-table-lspace: 0pt;mso-table-rspace: 0pt;border-collapse: collapse;border-spacing: 0px;float: right;">
                          <tr>
                            <td align="left" style="padding: 0; margin: 0; width: 360px">
                              <table width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace: 0pt;mso-table-rspace: 0pt;border-collapse: collapse;border-spacing: 0px;">
                                <tr><td style="padding: 0; margin: 0; display: none" align="center"></td></tr>
                              </table>
                            </td>
                          </tr>
                        </table>
                        <!--[if mso]></td></tr></table><![endif]-->
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
            <table class="es-content" cellspacing="0" cellpadding="0" align="center" style="mso-table-lspace: 0pt;mso-table-rspace: 0pt;border-collapse: collapse;border-spacing: 0px;table-layout: fixed !important;width: 100%;">
              <tr>
                <td align="center" style="padding: 0; margin: 0">
                  <table class="es-content-body" cellspacing="0" cellpadding="0" bgcolor="#ffffff" align="center" style="mso-table-lspace: 0pt;mso-table-rspace: 0pt;,border-collapse: collapse;border-spacing: 0px;background-color: #ffffff;width: 600px;">
                    <tr>
                      <td align="left" style="padding: 0; margin: 0">
                        <table width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace: 0pt;mso-table-rspace: 0pt;border-collapse: collapse;border-spacing: 0px;">
                          <tr>
                            <td valign="top" align="center" style="padding: 0; margin: 0; width: 560px">
                              <table width="100%" cellspacing="0" cellpadding="0" role="presentation" style="mso-table-lspace: 0pt;mso-table-rspace: 0pt;border-collapse: collapse;border-spacing: 0px;">
                                <tr>
                                  <td style="padding: 0; margin: 0">
                                    <meta charset="UTF-8" />
                                    <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
                                    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                                    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&family=Urbanist:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,900;1,200;1,300&display=swap" rel="stylesheet"/>
                                    <title>Document</title>
                                    <header class="header" style="margin: 0;box-sizing: border-box;position: relative;width: 100%;padding: 36.5px 40px 36.5px 40px;text-align: center;justify-content: center;">                            
                                      <div style="display: table;width: 100%;">
                                        <div style="margin: 0;display: table-cell;text-align: center;width: 100%;color: #5573a0;font-size: 14px;font-family: Open Sans;font-weight: 400;">
                                          <img src="${assetsBaseUrl}/logo.png" height="100px" alt style="text-align: center;border: 0;outline: none;text-decoration: none;-ms-interpolation-mode: bicubic;margin: 0;padding: 0;box-sizing: border-box;height="100px""/>
                                        </div>
                                      </div>
                                    </header>
                                    <main>
                                      <div style="margin: 0;box-sizing: border-box;position: relative;width: 100%;height: auto;background-color: white;z-index: 0;padding: 0px 40px 0px 40px;">
                                        <div class="content-container" style="box-sizing: border-box;width: 100%;margin: 0px auto 30px;padding: 12px 20px 32px 20px;border-radius: 20px;background-color: rgba(200,220,250,0.12);">
                                          <div class="content" style="margin: 0;padding: 0;box-sizing: border-box;">
                                            <h3 style="margin: 0;line-height: 34px;mso-line-height-rule: exactly;font-family: Open Sans;font-size: 16px;font-style: normal;font-weight: 700;color: #14283c;margin: 0;padding: 0;box-sizing: border-box;text-align: left;">
                                              Dear ${data?.orgName},
                                            </h3>
                                            <p style="margin: 0;-webkit-text-size-adjust: none;-ms-text-size-adjust: none;mso-line-height-rule: exactly;font-family: Open Sans;line-height: 21px;color: #0b161d;font-size: 16px;margin: 0;padding: 0;box-sizing: border-box;margin-bottom: 15px;margin-top: 10px;">
                                              This is to inform you that ${data?.name} has been successfully removed from ${data?.orgName}. Their access to the organization's resources has been revoked.
                                            </p>
                                            <p style="margin: 0;-webkit-text-size-adjust: none;-ms-text-size-adjust: none;mso-line-height-rule: exactly;font-family: Open Sans;line-height: 21px;color: #0b161d;font-size: 16px;margin: 0;padding: 0;box-sizing: border-box;margin-bottom: 15px;margin-top: 10px;">
                                              Thanks,
                                            </p>
                                          </div>
                                          <p style="margin: 0;-webkit-text-size-adjust: none;-ms-text-size-adjust: none;mso-line-height-rule: exactly;font-family: Open Sans;line-height: 21px;color: #0b161d;font-size: 16px;margin: 0;padding: 0;box-sizing: border-box;margin-bottom: 0px;text-align: left;">
                                            Truck Parking Club
                                          </p>
                                        </div>
                                      </div>
                                    </main>
                                    ${footer}
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
            <table class="es-footer" cellspacing="0" cellpadding="0" align="center" style="mso-table-lspace: 0pt;mso-table-rspace: 0pt;border-collapse: collapse;border-spacing: 0px;table-layout: fixed !important;width: 100%;background-color: transparent;background-repeat: repeat;background-position: center top;">
              <tr>
                <td align="center" style="padding: 0; margin: 0">
                  <table class="es-footer-body" cellspacing="0" cellpadding="0" bgcolor="#ffffff" align="center" style="mso-table-lspace: 0pt;mso-table-rspace: 0pt;border-collapse: collapse;border-spacing: 0px;background-color: #ffffff;width: 600px;">
                    <tr>
                      <td align="left" style="margin: 0">
                        <!--[if mso]><table style="width:560px" cellpadding="0" cellspacing="0"><tr><td style="width:270px" valign="top"><![endif]-->
                        <table class="es-left" cellspacing="0" cellpadding="0" align="left" style="mso-table-lspace: 0pt;mso-table-rspace: 0pt;border-collapse: collapse;border-spacing: 0px;float: left;">
                          <tr>
                            <td class="es-m-p20b" align="left" style="padding: 0; margin: 0; width: 270px">
                              <table width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace: 0pt;mso-table-rspace: 0pt;border-collapse: collapse;border-spacing: 0px;">
                                <tr><td style="padding: 0; margin: 0; display: none" align="center"></td></tr>
                              </table>
                            </td>
                          </tr>
                        </table>
                        <!--[if mso]></td><td style="width:20px"></td><td style="width:270px" valign="top"><![endif]-->
                        <table class="es-right" cellspacing="0" cellpadding="0" align="right" style="mso-table-lspace: 0pt;mso-table-rspace: 0pt;border-collapse: collapse;border-spacing: 0px;float: right;">
                          <tr>
                            <td align="left" style="padding: 0; margin: 0; width: 270px">
                              <table width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace: 0pt;mso-table-rspace: 0pt;border-collapse: collapse;border-spacing: 0px;">
                                <tr> <td style="padding: 0; margin: 0; display: none" align="center"></td></tr>
                              </table>
                            </td>
                          </tr>
                        </table>
                        <!--[if mso]></td></tr></table><![endif]-->
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    </div>
  </body>
</html>`;
