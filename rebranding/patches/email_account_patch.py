import frappe

def execute():
    # Delete old Email Account
    frappe.db.sql("DELETE FROM `tabEmail Account`")
    
    # Delete roles except System Manager
    frappe.db.sql("DELETE FROM `tabRole` WHERE name != 'System Manager'")
    
    # Delete role and module profiles
    frappe.db.sql("DELETE FROM `tabRole Profile`")
    frappe.db.sql("DELETE FROM `tabModule Profile`")
    
    frappe.db.commit()
    
def email_account():
    # Create Email Account safely
    account_name = "ERPLite"
    password = frappe.conf.get("email_password", "password")
    if not frappe.db.exists("Email Account", account_name):
        account = frappe.get_doc({
            "doctype": "Email Account",
            "email_account_name": account_name,
            "email_id": "cloud@ettelerp.com",
            "company": "Marye Guba",
            "smtp_server": "smtp.mail.us-east-1.awsapps.com",
            "smtp_port": 465,
            "password": password,
            "use_ssl_for_outgoing": 1,
            "always_bcc": "sewunet92@gmail.com",
            "add_signature": 1,
            "always_use_account_email_id_as_sender": 1,
            "always_use_account_name_as_sender_name": 1,
            "append_to": "Job Applicant",
            "create_contact": 1,
            "enable_outgoing": 1,
            "track_email_status": 1,
            "send_unsubscribe_message": 1
        })
        account.insert(ignore_permissions=True)

        account.save()
        frappe.db.commit()