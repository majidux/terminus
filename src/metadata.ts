/* eslint-disable */
export default async () => {
    const t = {
        ["./users/entities/user.entity"]: await import("./users/entities/user.entity"),
        ["./group/entities/group.entity"]: await import("./group/entities/group.entity"),
        ["./group/entities/group-member.entity"]: await import("./group/entities/group-member.entity")
    };
    return { "@nestjs/swagger": { "models": [[import("./users/dto/create-user.dto"), { "CreateUserDto": { username: { required: true, type: () => String }, password: { required: true, type: () => String } } }], [import("./users/dto/update-user.dto"), { "UpdateUserDto": { username: { required: true, type: () => String }, password: { required: true, type: () => String } }, "FindOneUserDto": { username: { required: true, type: () => String } }, "SignUserDto": { username: { required: true, type: () => String }, id: { required: false, type: () => String } } }], [import("./users/entities/user.entity"), { "User": { id: { required: true, type: () => String }, username: { required: true, type: () => String }, password: { required: true, type: () => String }, createdAt: { required: true, type: () => Date }, updatedAt: { required: true, type: () => Date } } }], [import("./group/entities/group.entity"), { "Group": { id: { required: true, type: () => String }, groupName: { required: true, type: () => String }, isDeleted: { required: true, type: () => Boolean }, ownerUser: { required: true, type: () => t["./users/entities/user.entity"].User }, createdAt: { required: true, type: () => Date }, updatedAt: { required: true, type: () => Date } } }], [import("./group/dto/create-group.dto"), { "CreateGroupDto": { groupName: { required: true, type: () => String }, ownerUser: { required: true, type: () => t["./users/entities/user.entity"].User } }, "GetGroupDto": { groupName: { required: false, type: () => String }, ownerUserId: { required: true, type: () => String } }, "CreateAddUserToGroupDto": { memberName: { required: true, type: () => String }, ownerGroup: { required: true, type: () => t["./group/entities/group.entity"].Group } } }], [import("./group/entities/group-member.entity"), { "GroupMember": { id: { required: true, type: () => String }, memberName: { required: true, type: () => String }, isDeleted: { required: true, type: () => Boolean }, ownerGroup: { required: true, type: () => t["./group/entities/group.entity"].Group }, createdAt: { required: true, type: () => Date }, updatedAt: { required: true, type: () => Date } } }], [import("./group/dto/update-group.dto"), { "UpdateGroupDto": { id: { required: true, type: () => String }, ownerUser: { required: true, type: () => t["./users/entities/user.entity"].User } } }], [import("./group-account/entities/group-account.entity"), { "GroupAccount": { id: { required: true, type: () => String }, expenseName: { required: true, type: () => String }, paid: { required: true, type: () => String }, groupId: { required: true, type: () => t["./group/entities/group.entity"].Group }, createdAt: { required: true, type: () => Date }, updatedAt: { required: true, type: () => Date } } }], [import("./group-account/dto/create-group-account.dto"), { "CreateGroupAccountDto": { groupId: { required: true, type: () => t["./group/entities/group.entity"].Group }, bill: { required: true, type: () => String }, cashDesk: { required: true, type: () => String }, expense: { required: true, type: () => String }, expenseName: { required: true, type: () => String }, id: { required: true, type: () => String } } }], [import("./member-account/entities/member-account.entity"), { "MemberAccount": { id: { required: true, type: () => String }, ownerGroup: { required: true, type: () => t["./group/entities/group.entity"].Group }, expenseName: { required: true, type: () => String }, ownerMember: { required: true, type: () => t["./group/entities/group-member.entity"].GroupMember }, paid: { required: true, type: () => String }, createdAt: { required: true, type: () => Date }, updatedAt: { required: true, type: () => Date } } }], [import("./member-account/dto/create-member-account.dto"), { "CreateMemberAccountDto": { ownerGroup: { required: true, type: () => t["./group/entities/group.entity"].Group }, ownerMember: { required: true, type: () => t["./group/entities/group-member.entity"].GroupMember }, paid: { required: true, type: () => String }, expenseName: { required: true, type: () => String }, id: { required: true, type: () => String } } }], [import("./member-account/dto/update-member-account.dto"), { "UpdateMemberAccountDto": { id: { required: true, type: () => String }, ownerGroup: { required: true, type: () => t["./group/entities/group.entity"].Group }, ownerMember: { required: true, type: () => t["./group/entities/group-member.entity"].GroupMember } } }], [import("./group-account/dto/update-group-account.dto"), { "UpdateGroupAccountDto": {} }]], "controllers": [[import("./users/users.controller"), { "UsersController": { "login": {}, "create": { type: String } } }], [import("./group/group.controller"), { "GroupController": { "createGroup": { type: Object }, "deleteGroup": { type: Object }, "getGroups": { type: Object }, "addUserToGroup": { type: Object }, "deleteMemberGroup": { type: Object } } }], [import("./group-account/group-account.controller"), { "GroupAccountController": { "groupBill": { type: Object } } }], [import("./member-account/member-account.controller"), { "MemberAccountController": { "create": { type: Object }, "deleteGroup": { type: Object }, "deleteMemberAccountGroup": { type: Object } } }]] } };
};