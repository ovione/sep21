import { GlobalConfig } from '@eui/core';

export const GLOBAL: GlobalConfig = {
    appTitle: 'CSDR-app',
    i18n: {
        i18nService: {
            defaultLanguage: 'en',
            languages: [
                {
                    code: 'en',
                    label: 'English'
                },
                {
                    code: 'fr',
                    label: 'Français'
                }
            ],
        },
        i18nLoader: {
            i18nFolders: [
                'i18n-eui',
                'i18n',
                'i18n-ecl'
            ],
        },
    },
    user: {
        defaultUserPreferences: {
            dashboard: { },
            lang: 'en',
        },
    },
};

export const TEXT: GlobalConfig = {
    text: '<h2>Privacy Statement for Policy Reporting Platform</h2>' +
        '<h3>1. Introduction</h3>'+
        '<p>The European Commission (hereafter ‘the Commission’) is committed to protect your personal data and to respect your privacy. The Commission collects and further processes personal data pursuant to <a href="https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=uriserv:OJ.L_.2018.295.01.0039.01.ENG&toc=OJ:L:2018:295:TOC">Regulation (EU) 2018/1725</a> of the European Parliament and of the Council of 23 October 2018 on the protection of natural persons with regard to the processing of personal data by the Union institutions, bodies, offices and agencies and on the free movement of such data.</p>'+
        '<p>This privacy statement explains the reason for the processing of your personal data, the way we collect, handle and ensure protection of all personal data provided, how that information is used and what rights you have in relation to your personal data. It also specifies the contact details of the responsible Data Controller with whom you may exercise your rights, the Data Protection Officer and the European Data Protection Supervisor.</p>'+
        '<p>The Policy Reporting Platform (hereafter ‘PRP’) is an electronic system operated and managed by the European Commission into which Member States authorities and private companies report data related to several reporting obligations. </p>'+
        '<h3>2. Why and how do we process your personal data?</h3>'+
        '<p><u>Purpose of the processing operation:</u> DG ENER, MOVE and ENV collect and use your personal information to:</p>'+
        '<ul class="listInDialogUL">' +
        '<li class="listInDialogLI">Identify you as a potential user of the PRP;</li>' +
        '<li class="listInDialogLI">Grant you credentials for using it;</li>' +
        '<li class="listInDialogLI">Allow other authorized users to identify and contact you to manage dataflows;</li>' +
        '<li class="listInDialogLI">Send you e-mail notifications.</li>' +
        '</ul>'+
        '<p>Your personal data will <u>not</u> be used for automated decision-making including profiling.</p>'+
        '<h3>3. On what legal ground(s) do we process your personal data</h3>'+
        '<p>We process your personal data, because:</p>'+
        '<p>(a) For system functioning and reporting spaces "NECPR" and "Oil stocks" processing is necessary for the performance of a task carried out in the public interest or in the exercise of official authority vested in the Union institution or body, in the context of reporting under Regulation on the Governance of the Energy Union and Climate Action (Regulation (EU) 2018/1999).</p>'+
        '<p>(b) For reporting space "SES" processing is necessary for the performance of a task carried out in the public interest or in the exercise of official authority vested in the Union institution or body, in the context of reporting, monitoring and performance oversight under the Single European Sky (SES) performance and charging scheme for the fourth reference period (RP4), in particular pursuant to Regulation (EU) 2024/2803 and Commission Implementing Regulation (EU) 2019/317.</p>'+
        '<p>(c) For reporting space "EED" processing is necessary for the performance of a task carried out in the public interest or in the exercise of official authority vested in the Union institution or body, in the context of reporting under Directive (EU) 2023/1791 of the European Parliament and of the Council of 13 September 2023 on energy efficiency and Commission Delegated Regulation (EU) 2024/1364.</p>'+
        '<p>(d) For reporting space Building Stock Observatory, namely "BSO", processing is necessary for the performance of a task carried out in the public interest or in the exercise of official authority vested in the Union institution or body, in the context of reporting under Directive (EU) 2024/1275 of the European Parliament and of the Council of 24 April 2024 on the energy performance of buildings and of the Commission Implementing regulation (EU) 2025/1328, implementing Directive (EU) 2024/1275 of the European Parliament and of the Council by establishing common templates for the transfer of information from national energy performance of buildings databases to the EU Building Stock Observatory.</p>'+
        '<p>(e) For reporting space "RMMS" processing is necessary for the performance of a task carried out in the public interest or in the exercise of official authority vested in the Union institution or body, in the context of reporting under Directive 2012/34/EU of the European Parliament and of the Council of 21 November 2012 establishing a single European railway area, and of Commission Implementing Regulation (EU) 2015/1100 of 7 July 2015 on the reporting obligations of the Member States in the framework of rail market monitoring.</p>'+
        '<p>(f) For reporting space "EHS" processing is necessary for the performance of a task carried out in the public interest or in the exercise of official authority vested in the Union institution or body, in the context of reporting under Decision (EU) 2022/591 of the European Parliament and of the Council of 6 April 2022 on a General Union Environment Action Programme to 2030.</p>'+
        '<h3>4. Which personal data do we collect and further process?</h3>'+
        '<p>To carry out this processing operation, DG ENER.A1 collects the following categories of personal data: </p>'+
        '<ul class="listInDialogUL"><li class="listInDialogLI"> Name</li><li class="listInDialogLI">User ID</li><li class="listInDialogLI">E-mail address</li></ul>'+
        '<p>The provision of personal data is mandatory to meet a statutory requirement to identify and grant credentials to users of the PRP. If you do not provide your personal data, possible consequences are that you will not be able to log in to the PRP and/or use some of its functionalities.</p>'+
        '<h3>5. How long do we keep your personal data?</h3>'+
        '<p>DG ENER.A1 only keeps your personal data for the time necessary to fulfil the purpose of collection or further processing, namely for 2 years following the disabling of a user profile.</p>'+
        '<h3>6. How do we protect and safeguard your personal data?</h3>'+
        '<p>All personal data in electronic format (e-mails, documents, databases, uploaded batches of data, etc.) are stored on the servers of the European Commission. All processing operations are carried out pursuant to the <a href="https://eur-lex.europa.eu/legal-content/EN/TXT/?qid=1548093747090&uri=CELEX:32017D0046">Commission Decision (EU, Euratom) 2017/46</a> of 10 January 2017 on the security of communication and information systems in the European Commission.</p>'+
        '<p>To protect your personal data, the Commission has put in place several technical and organisational measures in place. Technical measures include appropriate actions to address online security, risk of data loss, alteration of data or unauthorised access, taking into consideration the risk presented by the processing and the nature of the personal data being processed. Organisational measures include restricting access to the personal data solely to authorised persons with a legitimate need to know for the purposes of this processing operation.</p>'+
        '<h3>7. Who has access to your personal data and to whom is it disclosed?</h3>'+
        '<p>Access to your personal data is provided to the Commission staff responsible for carrying out this processing operation and to authorised staff according to the "need to know" principle. Such staff abide by statutory, and when required, additional confidentiality agreements.</p>'+
        '<h3>8. What are your rights and how can you exercise them? </h3>'+
        '<p>You have specific rights as a ‘data subject’ under Chapter III (Articles 14-25) of Regulation (EU) 2018/1725, in particular the right to access, your personal data and to rectify them in case your personal data are inaccurate or incomplete. Where applicable, you have the right to erase your personal data, to restrict the processing of your personal data, to object to the processing, and the right to data portability.</p>'+
        '<p>You have the right to object to the processing of your personal data, which is lawfully carried out pursuant to Article 5(1)(a) on grounds relating to your particular situation.</p>'+
        '<p>You can exercise your rights by contacting the Data Controller, or in case of conflict the Data Protection Officer. If necessary, you can also address the European Data Protection Supervisor. Their contact information is given under Heading 9 below. </p>'+
        '<p>Where you wish to exercise your rights in the context of one or several specific processing operations, please provide their description (i.e. their Record reference(s) as specified under Heading 10 below) in your request.</p>'+
        '<h3>9. Contact information</h3>'+
        '<h3>- The Data Controller</h3>'+
        '<p>If you would like to exercise your rights under Regulation (EU) 2018/1725, or if you have comments, questions or concerns, or if you would like to submit a complaint regarding the collection and use of your personal data, please feel free to contact the Data Controller, DG ENER.A1, <a href="mailto:EC-NECP-REPORTING@ec.europa.eu">EC-NECP-REPORTING@ec.europa.eu</a></p>'+
        '<h3>- The Data Protection Officer (DPO) of the Commission</h3>'+
        '<p>You may contact the Data Protection Officer (<a href="mailto:DATA-PROTECTION-OFFICER@ec.europa.eu">DATA-PROTECTION-OFFICER@ec.europa.eu</a>) with regard to issues related to the processing of your personal data under Regulation (EU) 2018/1725.</p>'+
        '<h3>- The European Data Protection Supervisor (EDPS)</h3>'+
        '<p>You have the right to have recourse (i.e. you can lodge a complaint) to the European Data Protection Supervisor (<a href="mailto:edps@edps.europa.eu">edps@edps.europa.eu</a>) if you consider that your rights under Regulation (EU) 2018/1725 have been infringed as a result of the processing of your personal data by the Data Controller.</p>'+
        '<h3>10. Where to find more detailed information?</h3>'+
        '<p>The Commission Data Protection Officer (DPO) publishes the register of all processing operations on personal data by the Commission, which have been documented and notified to him. You may access the register via the following link: <a href="http://ec.europa.eu/dpo-register">http://ec.europa.eu/dpo-register.</a></p>'+
        '<p>This specific processing operation has been included in the DPO’s public register with the following Record reference: DPR-EC-04226.</p>'
};
