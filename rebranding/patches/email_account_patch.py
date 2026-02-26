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
    
