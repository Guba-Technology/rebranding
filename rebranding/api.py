import frappe

@frappe.whitelist()
def ignore_update_popup():
    """Ignore all system update notifications."""
    # Do nothing — just skip showing any update messages
    return
