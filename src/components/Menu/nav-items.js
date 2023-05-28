export default {
  roles: {
    label: "Access Control Lists",
    permissions: [
      "Role: View Role",
      "Role: Create Role",
      "Role: Edit/Update Role",
      "Role: Delete Role",
      "Permission: View Permission",
    ],
    children: [
      {
        label: "Roles",
        icon: "mdi-account-cog-outline",
        to: { name: "roles" },
        permissions: ["Role: View Role", "Role: Create Role"],
      },
      {
        label: "Permissions",
        icon: "mdi-shield-key-outline",
        to: { name: "permissions" },
        permissions: ["Permission: View Permission"],
      },
    ],
  },

  announcements: {
    label: "Announcements",
    permissions: [
      "Announcement: View Announcement",
      "Announcement: Create Announcement",
      "Announcement: Edit/Update Announcement",
      "Announcement: Delete Announcement",
    ],
    children: [
      {
        label: "Announcements",
        icon: "mdi-bullhorn-outline",
        to: { name: "markets" },
        permissions: [
          "Announcement: View Announcement",
          "Announcement: Create Announcement",
          "Announcement: Edit/Update Announcement",
          "Announcement: Delete Announcement",
        ],
      },
    ],
  },

  markets: {
    label: "Market Management",
    permissions: [
      "Market: View Market",
      "Market: Create Market",
      "Market: Edit/Update Market",
      "Market: Delete Market",
      "Merchant: View Merchant",
      "Merchant: Create Merchant",
      "Merchant: Edit/Update Merchant",
      "Merchant: Delete Merchant",
    ],
    children: [
      {
        label: "Markets",
        icon: "mdi-briefcase-check-outline",
        to: { name: "markets" },
        permissions: [
          "Market: View Market",
          "Market: Create Market",
          "Market: Edit/Update Market",
        ],
      },
      {
        label: "Merchants",
        icon: "mdi-lan",
        to: { name: "merchants" },
        permissions: [
          "Merchant: View Merchant",
          "Merchant: Create Merchant",
          "Merchant: Edit/Update Merchant",
        ],
      },
      {
        label: "Odd Settings",
        icon: "mdi-cog-outline",
        to: { name: "merchants" },
        permissions: ["Permission: View Permission"],
      },
    ],
  },
};
