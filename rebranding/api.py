import json

import frappe
from frappe import _
from frappe.utils import cint, floor, flt, today


def whitelabel_patch():
    # delete erpnext welcome page
    frappe.delete_doc_if_exists("Page", "welcome-to-erpnext", force=1)

    # update Welcome Blog Post
    if frappe.db.exists("Blog Post", "Welcome"):
        frappe.db.set_value("Blog Post", "Welcome", "content", "")
    
    # update workspace doctype permissions read only for All role in production
    update_workspace_permissions_prod()
    update_field_label()
    update_onboard_details()

    frappe.db.set_single_value(
        "System Settings", "disable_system_update_notification", 1
    )
    frappe.db.set_single_value(
        "System Settings", "disable_change_log_notification", 1
    )
    frappe.db.set_single_value(
        "System Settings", "login_with_email_link", 0
    )
    frappe.db.set_single_value(
        "System Settings", "minimum_password_score", 4
    )
    frappe.db.set_single_value(
        "System Settings", "email_footer_address", "Ethio Telecom, Addis Ababa, Ethiopia"
    )
    frappe.db.set_single_value(
        "System Settings", "disable_standard_email_footer", 1
    )
    frappe.db.set_single_value(
        "System Settings", "hide_footer_in_auto_email_reports", 1
    )
    frappe.db.set_single_value(
        "Website Settings", "app_name", "Tele ERP"
    )
    frappe.db.set_single_value(
        "Website Settings", "app_logo", "/assets/rebranding/images/applogo.svg"
    )
    frappe.db.set_single_value(
        "Website Settings", "favicon", "/assets/rebranding/images/logo.png"
    )
    frappe.db.set_single_value(
        "Website Settings", "splash_image", "/assets/rebranding/images/applogo.svg"
    )
    frappe.db.set_single_value(
        "Website Settings", "copyright", f"{frappe.utils.now_datetime().year} Tele ERP"
    )
    frappe.db.set_single_value(
        "Website Settings", "title_prefix", "Tele ERP - "
    )
    frappe.db.set_single_value(
        "Website Settings", "footer_powered", "Ethio Telecom"
    )

def update_field_label():
    """Update label of section break in Employee Doctype"""
    frappe.db.sql(
        """
        UPDATE `tabDocField`
        SET label = 'ERP'
        WHERE fieldname = 'erpnext_user'
        AND parent = 'Employee'
        """
    )


def get_frappe_version():
    return frappe.db.get_value(
        "Installed Application",
        {"app_name": "frappe"},
        "app_version"
    ).split(".")[0]


def update_onboard_details():
    """Disable onboarding in System Settings"""
    frappe.db.set_single_value("System Settings", "enable_onboarding", 0)


@frappe.whitelist()
def ignore_update_popup():
    return
    # show_update_popup_update()


@frappe.whitelist()
def show_update_popup_update():
    # Disable all system update and change log notifications by default
    return

def update_workspace_permissions_prod():
    frappe.db.sql("""
        UPDATE `tabDocPerm`
        SET
            `read` = 1,
            `write` = 0,
            `create` = 0,
            `delete` = 0,
            `submit` = 0,
            `cancel` = 0,
            `amend` = 0
        WHERE
            parent = 'Workspace'
    """)

    # clear permission cache
    frappe.clear_cache()