// 模拟后端动态生成路由
import { MockMethod } from "vite-plugin-mock";
import { system, permission, tabs } from "@/router/enums";

/**
 * roles：页面级别权限，这里模拟二种 "admin"、"common"
 * admin：管理员角色
 * common：普通角色
 */

const systemRouter = {
  path: "/system",
  meta: {
    icon: "setting",
    title: "menus.hssysManagement",
    rank: system
  },
  children: [
    {
      path: "/system/user/index",
      name: "User",
      meta: {
        icon: "flUser",
        title: "menus.hsUser",
        roles: ["admin"]
      }
    },
    {
      path: "/system/role/index",
      name: "Role",
      meta: {
        icon: "role",
        title: "menus.hsRole",
        roles: ["admin"]
      }
    },
    {
      path: "/system/dept/index",
      name: "Dept",
      meta: {
        icon: "dept",
        title: "menus.hsDept",
        roles: ["admin"]
      }
    }
  ]
};

const permissionRouter = {
  path: "/permission",
  meta: {
    title: "menus.permission",
    icon: "lollipop",
    rank: permission
  },
  children: [
    {
      path: "/permission/page/index",
      name: "PermissionPage",
      meta: {
        title: "menus.permissionPage",
        roles: ["admin", "common"]
      }
    },
    {
      path: "/permission/button/index",
      name: "PermissionButton",
      meta: {
        title: "menus.permissionButton",
        roles: ["admin", "common"],
        auths: ["btn_add", "btn_edit", "btn_delete"]
      }
    }
  ]
};
// zfx 客户管理 只加两个了children
// title(英文翻译) 权限 已修改
// 未修改 icon(小图标) 
const tabsRouter = {
  path: "/customer",
  meta: {
    icon: "setting",
    title: "menus.hsCustomer",
    rank: tabs
  },
  children: [
    {
      path: "/customer/customerSource/index",
      name: "CustomerSource",
      meta: {
        icon: "dept",
        title: "menus.hsCustomer1",
      }
    },
    {
      path: "/customer/dev/index",
      name: "Dev",
      meta: {
        icon: "dept",
        title: "menus.hsCustomer2",
      }
    }
  ]
};

export default [
  {
    url: "/getAsyncRoutes",
    method: "get",
    response: () => {
      return {
        success: true,
        data: [systemRouter, permissionRouter, tabsRouter]
      };
    }
  }
] as MockMethod[];
