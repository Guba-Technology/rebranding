import frappe
from frappe import _

def boot_session(bootinfo):
    """Modify boot info for rebranding"""
    
    # Replace default logo
    bootinfo.logo_url = '/assets/rebranding/images/applogo.svg'
    bootinfo.app_logo_url = '/assets/rebranding/images/applogo.svg'

    # Remove help menu
    bootinfo.help_menu = []

    # Add custom branding info
    bootinfo.branding = {
        "name": _("Ethio Telecom"),
        "copyright": f"© {frappe.utils.now_datetime().year} Tele ERP"
    }
