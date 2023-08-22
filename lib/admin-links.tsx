import {
    AreaChart,
    Bell,
    LayoutDashboard, MessageCircle,
    PackageSearch,
    Percent,
    Settings,
    TrendingUp,
    User,
    Users
} from "lucide-react";
import {TbFileInvoice} from "react-icons/tb";
import React from "react";

export const adminLinks = {
    "groups": [
        {
            "name": "Menu",
            "links": [
                {
                    "to": "/admin",
                    "label": "Home",
                    "icon": <LayoutDashboard/>,
                    "disabled": false
                },
                {
                    "to": "/admin/products",
                    "label": "Products",
                    "icon": <PackageSearch/>,
                    "disabled": false
                },
                {
                    "to": "/admin/orders",
                    "label": "Orders",
                    "icon": <TbFileInvoice/>,
                    "disabled": true
                },
                {
                    "to": "/admin/customers",
                    "label": "Customers",
                    "icon": <Users/>,
                    "disabled": true
                },
                {
                    "to": "/admin/discounts",
                    "label": "Discounts",
                    "icon": <Percent/>,
                    "disabled": true
                },
            ]
        },
        {
            "name": "Dashboard",
            "links": [
                {
                    "to": "/admin/dashboard",
                    "label": "Dashboard",
                    "icon": <LayoutDashboard/>,
                    "disabled": true
                },
                {
                    "to": "/admin/analytics",
                    "label": "Analytics",
                    "icon": <AreaChart/>,
                    "disabled": true
                },
                {
                    "to": "/admin/top-products",
                    "label": "Top Products",
                    "icon": <TrendingUp/>,
                    "disabled": true
                }
            ]
        },
        {
            "name": "Personal",
            "links": [
                {
                    "to": "/admin/account",
                    "label": "Account",
                    "icon": <User/>,
                    "disabled": false
                },
                {
                    "to": "/admin/settings",
                    "label": "Settings",
                    "icon": <Settings/>,
                    "disabled": false
                },
                {
                    "to": "/admin/notifications",
                    "label": "Notifications",
                    "icon": <Bell/>,
                    "disabled": false
                },
                {
                    "to": "/admin/messages",
                    "label": "Messages",
                    "icon": <MessageCircle/>,
                    "disabled": false
                },
            ]
        }
    ]
};

export type AdminLinkType = typeof adminLinks;