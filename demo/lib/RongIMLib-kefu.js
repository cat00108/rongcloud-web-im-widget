var Polling = {
    SearchMpInput: function() {
        var b = {};
        this.setType = function(a) {
            b.type = a;
        };
        this.setId = function(a) {
            b.id = a;
        };
        this.toArrayBuffer = function() {
            return b;
        };
    },
    SearchMpOutput: function() {
        var b = {};
        this.setNothing = function(a) {
            b.nothing = a;
        };
        this.setInfo = function(a) {
            b.info = a;
        };
        this.toArrayBuffer = function() {
            return b;
        };
    },
    MpInfo: function() {
        var b = {};
        this.setMpid = function(a) {
            b.mpid = a;
        };
        this.setName = function(a) {
            b.name = a;
        };
        this.setType = function(a) {
            b.type = a;
        };
        this.setTime = function(a) {
            b.time = a;
        };
        this.setPortraitUri = function(a) {
            b.portraitUrl = a;
        };
        this.setExtra = function(a) {
            b.extra = a;
        };
        this.toArrayBuffer = function() {
            return b;
        };
    },
    PullMpInput: function() {
        var b = {};
        this.setMpid = function(a) {
            b.mpid = a;
        };
        this.setTime = function(a) {
            b.time = a;
        };
        this.toArrayBuffer = function() {
            return b;
        };
    },
    PullMpOutput: function() {
        var b = {};
        this.setStatus = function(a) {
            b.status = a;
        };
        this.setInfo = function(a) {
            b.info = a;
        };
        this.toArrayBuffer = function() {
            return b;
        };
    },
    MPFollowInput: function() {
        var b = {};
        this.setId = function(a) {
            b.id = a;
        };
        this.toArrayBuffer = function() {
            return b;
        };
    },
    MPFollowOutput: function() {
        var b = {};
        this.setNothing = function(a) {
            b.nothing = a;
        };
        this.setInfo = function(a) {
            b.info = a;
        };
        this.toArrayBuffer = function() {
            return b;
        };
    },
    NotifyMsg: function() {
        var b = {};
        this.setType = function(a) {
            b.type = a;
        };
        this.setTime = function(a) {
            b.time = a;
        };
        this.setChrmId = function(a) {
            b.chrmId = a;
        };
        this.toArrayBuffer = function() {
            return b;
        };
    },
    SyncRequestMsg: function() {
        var b = {};
        this.setSyncTime = function(a) {
            b.syncTime = a || 0;
        };
        this.setIspolling = function(a) {
            b.ispolling = !!a;
        };
        this.setIsweb = function(a) {
            b.isweb = !!a;
        };
        this.setIsPullSend = function(a) {
            b.isPullSend = !!a;
        };
        this.toArrayBuffer = function() {
            return b;
        };
    },
    UpStreamMessage: function() {
        var b = {};
        this.setSessionId = function(a) {
            b.sessionId = a;
        };
        this.setClassname = function(a) {
            b.classname = a;
        };
        this.setContent = function(a) {
            if (a) {
                b.content = a;
            }
        };
        this.setPushText = function(a) {
            b.pushText = a;
        };
        this.toArrayBuffer = function() {
            return b;
        };
    },
    DownStreamMessages: function() {
        var b = {};
        this.setList = function(a) {
            b.list = a;
        };
        this.setSyncTime = function(a) {
            b.syncTime = a;
        };
        this.toArrayBuffer = function() {
            return b;
        };
    },
    DownStreamMessage: function() {
        var b = {};
        this.setFromUserId = function(a) {
            b.fromUserId = a;
        };
        this.setType = function(a) {
            b.type = a;
        };
        this.setGroupId = function(a) {
            b.groupId = a;
        };
        this.setClassname = function(a) {
            b.classname = a;
        };
        this.setContent = function(a) {
            if (a) {
                b.content = a;
            }
        };
        this.setDataTime = function(a) {
            b.dataTime = a;
        };
        this.setStatus = function(a) {
            b.status = a;
        };
        this.setMsgId = function(a) {
            b.msgId = a;
        };
        this.toArrayBuffer = function() {
            return b;
        };
    },
    CreateDiscussionInput: function() {
        var b = {};
        this.setName = function(a) {
            b.name = a;
        };
        this.toArrayBuffer = function() {
            return b;
        };
    },
    CreateDiscussionOutput: function() {
        var b = {};
        this.setId = function(a) {
            b.id = a;
        };
        this.toArrayBuffer = function() {
            return b;
        };
    },
    ChannelInvitationInput: function() {
        var b = {};
        this.setUsers = function(a) {
            b.users = a;
        };
        this.toArrayBuffer = function() {
            return b;
        };
    },
    LeaveChannelInput: function() {
        var b = {};
        this.setNothing = function(a) {
            b.nothing = a;
        };
        this.toArrayBuffer = function() {
            return b;
        };
    },
    QueryChatroomInfoInput: function() {
        var b = {};
        this.setCount = function(a) {
            b.count = a;
        };
        this.setOrder = function(a) {
            b.order = a;
        };
        this.toArrayBuffer = function() {
            return b;
        };
    },
    QueryChatroomInfoOutput: function() {
        var b = {};
        this.setUserTotalNums = function(a) {
            b.userTotalNums = a;
        };
        this.setUserInfos = function(a) {
            b.userInfos = a;
        };
        this.toArrayBuffer = function() {
            return b;
        };
    },
    ChannelEvictionInput: function() {
        var b = {};
        this.setUser = function(a) {
            b.user = a;
        };
        this.toArrayBuffer = function() {
            return b;
        };
    },
    RenameChannelInput: function() {
        var b = {};
        this.setName = function(a) {
            b.name = a;
        };
        this.toArrayBuffer = function() {
            return b;
        };
    },
    ChannelInfoInput: function() {
        var b = {};
        this.setNothing = function(a) {
            b.nothing = a;
        };
        this.toArrayBuffer = function() {
            return b;
        };
    },
    ChannelInfoOutput: function() {
        var b = {};
        this.setType = function(a) {
            b.type = a;
        };
        this.setChannelId = function(a) {
            b.channelId = a;
        };
        this.setChannelName = function(a) {
            b.channelName = a;
        };
        this.setAdminUserId = function(a) {
            b.adminUserId = a;
        };
        this.setFirstTenUserIds = function(a) {
            b.firstTenUserIds = a;
        };
        this.setOpenStatus = function(a) {
            b.openStatus = a;
        };
        this.toArrayBuffer = function() {
            return b;
        };
    },
    ChannelInfosInput: function() {
        var b = {};
        this.setPage = function(a) {
            b.page = a;
        };
        this.setNumber = function(a) {
            b.number = a;
        };
        this.toArrayBuffer = function() {
            return b;
        };
    },
    ChannelInfosOutput: function() {
        var b = {};
        this.setChannels = function(a) {
            b.channels = a;
        };
        this.setTotal = function(a) {
            b.total = a;
        };
        this.toArrayBuffer = function() {
            return b;
        };
    },
    MemberInfo: function() {
        var b = {};
        this.setUserId = function(a) {
            b.userId = a;
        };
        this.setUserName = function(a) {
            b.userName = a;
        };
        this.setUserPortrait = function(a) {
            b.userPortrait = a;
        };
        this.setExtension = function(a) {
            b.extension = a;
        };
        this.toArrayBuffer = function() {
            return b;
        };
    },
    GroupMembersInput: function() {
        var b = {};
        this.setPage = function(a) {
            b.page = a;
        };
        this.setNumber = function(a) {
            b.number = a;
        };
        this.toArrayBuffer = function() {
            return b;
        };
    },
    GroupMembersOutput: function() {
        var b = {};
        this.setMembers = function(a) {
            b.members = a;
        };
        this.setTotal = function(a) {
            b.total = a;
        };
        this.toArrayBuffer = function() {
            return b;
        };
    },
    GetUserInfoInput: function() {
        var b = {};
        this.setNothing = function(a) {
            b.nothing = a;
        };
        this.toArrayBuffer = function() {
            return b;
        };
    },
    GetUserInfoOutput: function() {
        var b = {};
        this.setUserId = function(a) {
            b.userId = a;
        };
        this.setUserName = function(a) {
            b.userName = a;
        };
        this.setUserPortrait = function(a) {
            b.userPortrait = a;
        };
        this.toArrayBuffer = function() {
            return b;
        };
    },
    GetSessionIdInput: function() {
        var b = {};
        this.setNothing = function(a) {
            b.nothing = a;
        };
        this.toArrayBuffer = function() {
            return b;
        };
    },
    GetSessionIdOutput: function() {
        var b = {};
        this.setSessionId = function(a) {
            b.sessionId = a;
        };
        this.toArrayBuffer = function() {
            return b;
        };
    },
    GetQNupTokenInput: function() {
        var b = {};
        this.setType = function(a) {
            b.type = a;
        };
        this.toArrayBuffer = function() {
            return b;
        };
    },
    GetQNupTokenOutput: function() {
        var b = {};
        this.setDeadline = function(a) {
            b.deadline = a;
        };
        this.setToken = function(a) {
            b.token = a;
        };
        this.toArrayBuffer = function() {
            return b;
        };
    },
    GetQNdownloadUrlInput: function() {
        var b = {};
        this.setType = function(a) {
            b.type = a;
        };
        this.setKey = function(a) {
            b.key = a;
        };
        this.toArrayBuffer = function() {
            return b;
        };
    },
    GetQNdownloadUrlOutput: function() {
        var b = {};
        this.setDownloadUrl = function(a) {
            b.downloadUrl = a;
        };
        this.toArrayBuffer = function() {
            return b;
        };
    },
    Add2BlackListInput: function() {
        var b = {};
        this.setUserId = function(a) {
            b.userId = a;
        };
        this.toArrayBuffer = function() {
            return b;
        };
    },
    RemoveFromBlackListInput: function() {
        var b = {};
        this.setUserId = function(a) {
            b.userId = a;
        };
        this.toArrayBuffer = function() {
            return b;
        };
    },
    QueryBlackListInput: function() {
        var b = {};
        this.setNothing = function(a) {
            b.nothing = a;
        };
        this.toArrayBuffer = function() {
            return b;
        };
    },
    QueryBlackListOutput: function() {
        var b = {};
        this.setUserIds = function(a) {
            b.userIds = a;
        };
        this.toArrayBuffer = function() {
            return b;
        };
    },
    BlackListStatusInput: function() {
        var b = {};
        this.setUserId = function(a) {
            b.userId = a;
        };
        this.toArrayBuffer = function() {
            return b;
        };
    },
    BlockPushInput: function() {
        var b = {};
        this.setBlockeeId = function(a) {
            b.blockeeId = a;
        };
        this.toArrayBuffer = function() {
            return b;
        };
    },
    ModifyPermissionInput: function() {
        var b = {};
        this.setOpenStatus = function(a) {
            b.openStatus = a;
        };
        this.toArrayBuffer = function() {
            return b;
        };
    },
    GroupInput: function() {
        var b = {};
        this.setGroupInfo = function(c) {
            for (var d = 0, a = []; d < c.length; d++) {
                a.push({
                    id: c[d].getContent().id,
                    name: c[d].getContent().name
                });
            }
            b.groupInfo = a;
        };
        this.toArrayBuffer = function() {
            return b;
        };
    },
    GroupOutput: function() {
        var b = {};
        this.setNothing = function(a) {
            b.nothing = a;
        };
        this.toArrayBuffer = function() {
            return b;
        };
    },
    GroupInfo: function() {
        var b = {};
        this.setId = function(a) {
            b.id = a;
        };
        this.setName = function(a) {
            b.name = a;
        };
        this.getContent = function() {
            return b;
        };
        this.toArrayBuffer = function() {
            return b;
        };
    },
    GroupHashInput: function() {
        var b = {};
        this.setUserId = function(a) {
            b.userId = a;
        };
        this.setGroupHashCode = function(a) {
            b.groupHashCode = a;
        };
        this.toArrayBuffer = function() {
            return b;
        };
    },
    GroupHashOutput: function() {
        var b = {};
        this.setResult = function(a) {
            b.result = a;
        };
        this.toArrayBuffer = function() {
            return b;
        };
    },
    ChrmInput: function() {
        var b = {};
        this.setNothing = function(a) {
            b.nothing = a;
        };
        this.toArrayBuffer = function() {
            return b;
        };
    },
    ChrmOutput: function() {
        var b = {};
        this.setNothing = function(a) {
            b.nothing = a;
        };
        this.toArrayBuffer = function() {
            return b;
        };
    },
    ChrmPullMsg: function() {
        var b = {};
        this.setSyncTime = function(a) {
            b.syncTime = a;
        };
        this.setCount = function(a) {
            b.count = a;
        };
        this.toArrayBuffer = function() {
            return b;
        };
    },
    RelationsInput: function() {
        var b = {};
        this.setType = function(a) {
            b.type = a;
        };
        this.setMsg = function(a) {
            b.msg = a;
        };
        this.toArrayBuffer = function() {
            return b;
        };
    },
    RelationsOutput: function() {
        var b = {};
        this.setInfo = function(a) {
            b.info = a;
        };
        this.toArrayBuffer = function() {
            return b;
        };
    },
    RelationInfo: function() {
        var b = {};
        this.setType = function(a) {
            b.type = a;
        };
        this.setUserId = function(a) {
            b.userId = a;
        };
        this.setMsg = function(a) {
            b.msg = a;
        };
        this.toArrayBuffer = function() {
            return b;
        };
    },
    HistoryMessageInput: function() {
        var b = {};
        this.setTargetId = function(a) {
            b.targetId = a;
        };
        this.setDataTime = function(a) {
            b.dataTime = a;
        };
        this.setSize = function(a) {
            b.size = a;
        };
        this.toArrayBuffer = function() {
            return b;
        };
    },
    HistoryMessagesOuput: function() {
        var b = {};
        this.setList = function(a) {
            b.list = a;
        };
        this.setSyncTime = function(a) {
            b.syncTime = a;
        };
        this.setHasMsg = function(a) {
            b.hasMsg = a;
        };
        this.toArrayBuffer = function() {
            return b;
        };
    }
};

for (var f in Polling) {
    Polling[f].decode = function(b) {
        var back = {}, val = JSON.parse(b) || eval("(" + b + ")");
        for (var i in val) {
            back[i] = val[i];
            back["get" + i.charAt(0).toUpperCase() + i.slice(1)] = function() {
                return val[i];
            };
        }
        return back;
    };
}

(function(h) {
    function p(v, A) {
        var z = (v & 65535) + (A & 65535), w = (v >> 16) + (A >> 16) + (z >> 16);
        return w << 16 | z & 65535;
    }
    function t(v, w) {
        return v << w | v >>> 32 - w;
    }
    function c(B, y, w, v, A, z) {
        return p(t(p(p(y, B), p(v, z)), A), w);
    }
    function b(y, w, C, B, v, A, z) {
        return c(w & C | ~w & B, y, w, v, A, z);
    }
    function j(y, w, C, B, v, A, z) {
        return c(w & B | C & ~B, y, w, v, A, z);
    }
    function o(y, w, C, B, v, A, z) {
        return c(w ^ C ^ B, y, w, v, A, z);
    }
    function a(y, w, C, B, v, A, z) {
        return c(C ^ (w | ~B), y, w, v, A, z);
    }
    function d(G, B) {
        G[B >> 5] |= 128 << B % 32;
        G[(B + 64 >>> 9 << 4) + 14] = B;
        var y, A, z, w, v, F = 1732584193, E = -271733879, D = -1732584194, C = 271733878;
        for (y = 0; y < G.length; y += 16) {
            A = F;
            z = E;
            w = D;
            v = C;
            F = b(F, E, D, C, G[y], 7, -680876936);
            C = b(C, F, E, D, G[y + 1], 12, -389564586);
            D = b(D, C, F, E, G[y + 2], 17, 606105819);
            E = b(E, D, C, F, G[y + 3], 22, -1044525330);
            F = b(F, E, D, C, G[y + 4], 7, -176418897);
            C = b(C, F, E, D, G[y + 5], 12, 1200080426);
            D = b(D, C, F, E, G[y + 6], 17, -1473231341);
            E = b(E, D, C, F, G[y + 7], 22, -45705983);
            F = b(F, E, D, C, G[y + 8], 7, 1770035416);
            C = b(C, F, E, D, G[y + 9], 12, -1958414417);
            D = b(D, C, F, E, G[y + 10], 17, -42063);
            E = b(E, D, C, F, G[y + 11], 22, -1990404162);
            F = b(F, E, D, C, G[y + 12], 7, 1804603682);
            C = b(C, F, E, D, G[y + 13], 12, -40341101);
            D = b(D, C, F, E, G[y + 14], 17, -1502002290);
            E = b(E, D, C, F, G[y + 15], 22, 1236535329);
            F = j(F, E, D, C, G[y + 1], 5, -165796510);
            C = j(C, F, E, D, G[y + 6], 9, -1069501632);
            D = j(D, C, F, E, G[y + 11], 14, 643717713);
            E = j(E, D, C, F, G[y], 20, -373897302);
            F = j(F, E, D, C, G[y + 5], 5, -701558691);
            C = j(C, F, E, D, G[y + 10], 9, 38016083);
            D = j(D, C, F, E, G[y + 15], 14, -660478335);
            E = j(E, D, C, F, G[y + 4], 20, -405537848);
            F = j(F, E, D, C, G[y + 9], 5, 568446438);
            C = j(C, F, E, D, G[y + 14], 9, -1019803690);
            D = j(D, C, F, E, G[y + 3], 14, -187363961);
            E = j(E, D, C, F, G[y + 8], 20, 1163531501);
            F = j(F, E, D, C, G[y + 13], 5, -1444681467);
            C = j(C, F, E, D, G[y + 2], 9, -51403784);
            D = j(D, C, F, E, G[y + 7], 14, 1735328473);
            E = j(E, D, C, F, G[y + 12], 20, -1926607734);
            F = o(F, E, D, C, G[y + 5], 4, -378558);
            C = o(C, F, E, D, G[y + 8], 11, -2022574463);
            D = o(D, C, F, E, G[y + 11], 16, 1839030562);
            E = o(E, D, C, F, G[y + 14], 23, -35309556);
            F = o(F, E, D, C, G[y + 1], 4, -1530992060);
            C = o(C, F, E, D, G[y + 4], 11, 1272893353);
            D = o(D, C, F, E, G[y + 7], 16, -155497632);
            E = o(E, D, C, F, G[y + 10], 23, -1094730640);
            F = o(F, E, D, C, G[y + 13], 4, 681279174);
            C = o(C, F, E, D, G[y], 11, -358537222);
            D = o(D, C, F, E, G[y + 3], 16, -722521979);
            E = o(E, D, C, F, G[y + 6], 23, 76029189);
            F = o(F, E, D, C, G[y + 9], 4, -640364487);
            C = o(C, F, E, D, G[y + 12], 11, -421815835);
            D = o(D, C, F, E, G[y + 15], 16, 530742520);
            E = o(E, D, C, F, G[y + 2], 23, -995338651);
            F = a(F, E, D, C, G[y], 6, -198630844);
            C = a(C, F, E, D, G[y + 7], 10, 1126891415);
            D = a(D, C, F, E, G[y + 14], 15, -1416354905);
            E = a(E, D, C, F, G[y + 5], 21, -57434055);
            F = a(F, E, D, C, G[y + 12], 6, 1700485571);
            C = a(C, F, E, D, G[y + 3], 10, -1894986606);
            D = a(D, C, F, E, G[y + 10], 15, -1051523);
            E = a(E, D, C, F, G[y + 1], 21, -2054922799);
            F = a(F, E, D, C, G[y + 8], 6, 1873313359);
            C = a(C, F, E, D, G[y + 15], 10, -30611744);
            D = a(D, C, F, E, G[y + 6], 15, -1560198380);
            E = a(E, D, C, F, G[y + 13], 21, 1309151649);
            F = a(F, E, D, C, G[y + 4], 6, -145523070);
            C = a(C, F, E, D, G[y + 11], 10, -1120210379);
            D = a(D, C, F, E, G[y + 2], 15, 718787259);
            E = a(E, D, C, F, G[y + 9], 21, -343485551);
            F = p(F, A);
            E = p(E, z);
            D = p(D, w);
            C = p(C, v);
        }
        return [ F, E, D, C ];
    }
    function q(w) {
        var x, v = "";
        for (x = 0; x < w.length * 32; x += 8) {
            v += String.fromCharCode(w[x >> 5] >>> x % 32 & 255);
        }
        return v;
    }
    function k(w) {
        var x, v = [];
        v[(w.length >> 2) - 1] = undefined;
        for (x = 0; x < v.length; x += 1) {
            v[x] = 0;
        }
        for (x = 0; x < w.length * 8; x += 8) {
            v[x >> 5] |= (w.charCodeAt(x / 8) & 255) << x % 32;
        }
        return v;
    }
    function l(v) {
        return q(d(k(v), v.length * 8));
    }
    function e(x, A) {
        var w, z = k(x), v = [], y = [], B;
        v[15] = y[15] = undefined;
        if (z.length > 16) {
            z = d(z, x.length * 8);
        }
        for (w = 0; w < 16; w += 1) {
            v[w] = z[w] ^ 909522486;
            y[w] = z[w] ^ 1549556828;
        }
        B = d(v.concat(k(A)), 512 + A.length * 8);
        return q(d(y.concat(B), 512 + 128));
    }
    function u(y) {
        var A = "0123456789abcdef", w = "", v, z;
        for (z = 0; z < y.length; z += 1) {
            v = y.charCodeAt(z);
            w += A.charAt(v >>> 4 & 15) + A.charAt(v & 15);
        }
        return w;
    }
    function n(v) {
        return unescape(encodeURIComponent(v));
    }
    function r(v) {
        return l(n(v));
    }
    function m(v) {
        return u(r(v));
    }
    function i(v, w) {
        return e(n(v), n(w));
    }
    function s(v, w) {
        return u(i(v, w));
    }
    function g(w, x, v) {
        if (!x) {
            if (!v) {
                return m(w);
            }
            return r(w);
        }
        if (!v) {
            return s(x, w);
        }
        return i(x, w);
    }
    h.md5 = g;
    if (typeof define === "function" && define.amd) {
        define("md5", function() {
            return g;
        });
    } else {
        if (typeof module === "object" && module.exports) {
            module.exports = g;
        } else {
            h.md5 = g;
        }
    }
})(this);

var RongIMLib;

(function(c) {
    (function(u) {
        u[u.IN_BLACK_LIST = 0] = "IN_BLACK_LIST";
        u[u.NOT_IN_BLACK_LIST = 1] = "NOT_IN_BLACK_LIST";
    })(c.BlacklistStatus || (c.BlacklistStatus = {}));
    var r = c.BlacklistStatus;
    (function(u) {
        u[u.XHR_POLLING = 0] = "XHR_POLLING";
        u[u.WEBSOCKET = 1] = "WEBSOCKET";
        u[u.HTTP = 0] = "HTTP";
        u[u.HTTPS = 1] = "HTTPS";
    })(c.ConnectionChannel || (c.ConnectionChannel = {}));
    var b = c.ConnectionChannel;
    (function(u) {
        u[u.ONLY_ROBOT = 1] = "ONLY_ROBOT";
        u[u.ONLY_HUMAN = 2] = "ONLY_HUMAN";
        u[u.ROBOT_FIRST = 3] = "ROBOT_FIRST";
        u[u.HUMAN_FIRST = 4] = "HUMAN_FIRST";
    })(c.CustomerType || (c.CustomerType = {}));
    var n = c.CustomerType;
    (function(u) {
        u[u.NONE = 0] = "NONE";
        u[u.SQQUENCE = 1] = "SQQUENCE";
        u[u.REVERSE = 2] = "REVERSE";
    })(c.GetChatRoomType || (c.GetChatRoomType = {}));
    var i = c.GetChatRoomType;
    (function(u) {
        u[u.CONNECTED = 0] = "CONNECTED";
        u[u.CONNECTING = 1] = "CONNECTING";
        u[u.DISCONNECTED = 2] = "DISCONNECTED";
        u[u.KICKED_OFFLINE_BY_OTHER_CLIENT = 6] = "KICKED_OFFLINE_BY_OTHER_CLIENT";
        u[u.NETWORK_UNAVAILABLE = 3] = "NETWORK_UNAVAILABLE";
        u[u.DOMAIN_INCORRECT = 12] = "DOMAIN_INCORRECT";
    })(c.ConnectionStatus || (c.ConnectionStatus = {}));
    var l = c.ConnectionStatus;
    (function(u) {
        u[u.DO_NOT_DISTURB = 0] = "DO_NOT_DISTURB";
        u[u.NOTIFY = 1] = "NOTIFY";
    })(c.ConversationNotificationStatus || (c.ConversationNotificationStatus = {}));
    var q = c.ConversationNotificationStatus;
    (function(u) {
        u[u.NONE = 0] = "NONE";
        u[u.PRIVATE = 1] = "PRIVATE";
        u[u.DISCUSSION = 2] = "DISCUSSION";
        u[u.GROUP = 3] = "GROUP";
        u[u.CHATROOM = 4] = "CHATROOM";
        u[u.CUSTOMER_SERVICE = 5] = "CUSTOMER_SERVICE";
        u[u.SYSTEM = 6] = "SYSTEM";
        u[u.APP_PUBLIC_SERVICE = 7] = "APP_PUBLIC_SERVICE";
        u[u.PUBLIC_SERVICE = 8] = "PUBLIC_SERVICE";
    })(c.ConversationType || (c.ConversationType = {}));
    var t = c.ConversationType;
    (function(u) {
        u[u.OPENED = 0] = "OPENED";
        u[u.CLOSED = 1] = "CLOSED";
    })(c.DiscussionInviteStatus || (c.DiscussionInviteStatus = {}));
    var p = c.DiscussionInviteStatus;
    (function(u) {
        u[u.TIMEOUT = -1] = "TIMEOUT";
        u[u.UNKNOWN = -2] = "UNKNOWN";
        u[u.SEND_FREQUENCY_TOO_FAST = 20604] = "SEND_FREQUENCY_TOO_FAST";
        u[u.NOT_IN_DISCUSSION = 21406] = "NOT_IN_DISCUSSION";
        u[u.JOIN_IN_DISCUSSION = 21407] = "JOIN_IN_DISCUSSION";
        u[u.CREATE_DISCUSSION = 21408] = "CREATE_DISCUSSION";
        u[u.INVITE_DICUSSION = 21409] = "INVITE_DICUSSION";
        u[u.NOT_IN_GROUP = 22406] = "NOT_IN_GROUP";
        u[u.NOT_IN_CHATROOM = 23406] = "NOT_IN_CHATROOM";
        u[u.GET_USERINFO_ERROR = 23407] = "GET_USERINFO_ERROR";
        u[u.FORBIDDEN_IN_CHATROOM = 23408] = "FORBIDDEN_IN_CHATROOM";
        u[u.REJECTED_BY_BLACKLIST = 405] = "REJECTED_BY_BLACKLIST";
        u[u.RC_NET_CHANNEL_INVALID = 30001] = "RC_NET_CHANNEL_INVALID";
        u[u.RC_NET_UNAVAILABLE = 30002] = "RC_NET_UNAVAILABLE";
        u[u.RC_MSG_RESP_TIMEOUT = 30003] = "RC_MSG_RESP_TIMEOUT";
        u[u.RC_HTTP_SEND_FAIL = 30004] = "RC_HTTP_SEND_FAIL";
        u[u.RC_HTTP_REQ_TIMEOUT = 30005] = "RC_HTTP_REQ_TIMEOUT";
        u[u.RC_HTTP_RECV_FAIL = 30006] = "RC_HTTP_RECV_FAIL";
        u[u.RC_NAVI_RESOURCE_ERROR = 30007] = "RC_NAVI_RESOURCE_ERROR";
        u[u.RC_NODE_NOT_FOUND = 30008] = "RC_NODE_NOT_FOUND";
        u[u.RC_DOMAIN_NOT_RESOLVE = 30009] = "RC_DOMAIN_NOT_RESOLVE";
        u[u.RC_SOCKET_NOT_CREATED = 30010] = "RC_SOCKET_NOT_CREATED";
        u[u.RC_SOCKET_DISCONNECTED = 30011] = "RC_SOCKET_DISCONNECTED";
        u[u.RC_PING_SEND_FAIL = 30012] = "RC_PING_SEND_FAIL";
        u[u.RC_PONG_RECV_FAIL = 30013] = "RC_PONG_RECV_FAIL";
        u[u.RC_MSG_SEND_FAIL = 30014] = "RC_MSG_SEND_FAIL";
        u[u.RC_CONN_ACK_TIMEOUT = 31e3] = "RC_CONN_ACK_TIMEOUT";
        u[u.RC_CONN_PROTO_VERSION_ERROR = 31001] = "RC_CONN_PROTO_VERSION_ERROR";
        u[u.RC_CONN_ID_REJECT = 31002] = "RC_CONN_ID_REJECT";
        u[u.RC_CONN_SERVER_UNAVAILABLE = 31003] = "RC_CONN_SERVER_UNAVAILABLE";
        u[u.RC_CONN_USER_OR_PASSWD_ERROR = 31004] = "RC_CONN_USER_OR_PASSWD_ERROR";
        u[u.RC_CONN_NOT_AUTHRORIZED = 31005] = "RC_CONN_NOT_AUTHRORIZED";
        u[u.RC_CONN_REDIRECTED = 31006] = "RC_CONN_REDIRECTED";
        u[u.RC_CONN_PACKAGE_NAME_INVALID = 31007] = "RC_CONN_PACKAGE_NAME_INVALID";
        u[u.RC_CONN_APP_BLOCKED_OR_DELETED = 31008] = "RC_CONN_APP_BLOCKED_OR_DELETED";
        u[u.RC_CONN_USER_BLOCKED = 31009] = "RC_CONN_USER_BLOCKED";
        u[u.RC_DISCONN_KICK = 31010] = "RC_DISCONN_KICK";
        u[u.RC_DISCONN_EXCEPTION = 31011] = "RC_DISCONN_EXCEPTION";
        u[u.RC_QUERY_ACK_NO_DATA = 32001] = "RC_QUERY_ACK_NO_DATA";
        u[u.RC_MSG_DATA_INCOMPLETE = 32002] = "RC_MSG_DATA_INCOMPLETE";
        u[u.BIZ_ERROR_CLIENT_NOT_INIT = 33001] = "BIZ_ERROR_CLIENT_NOT_INIT";
        u[u.BIZ_ERROR_DATABASE_ERROR = 33002] = "BIZ_ERROR_DATABASE_ERROR";
        u[u.BIZ_ERROR_INVALID_PARAMETER = 33003] = "BIZ_ERROR_INVALID_PARAMETER";
        u[u.BIZ_ERROR_NO_CHANNEL = 33004] = "BIZ_ERROR_NO_CHANNEL";
        u[u.BIZ_ERROR_RECONNECT_SUCCESS = 33005] = "BIZ_ERROR_RECONNECT_SUCCESS";
        u[u.BIZ_ERROR_CONNECTING = 33006] = "BIZ_ERROR_CONNECTING";
        u[u.MSG_ROAMING_SERVICE_UNAVAILABLE = 33007] = "MSG_ROAMING_SERVICE_UNAVAILABLE";
        u[u.FORBIDDEN_IN_GROUP = 22408] = "FORBIDDEN_IN_GROUP";
        u[u.CONVER_REMOVE_ERROR = 34001] = "CONVER_REMOVE_ERROR";
        u[u.CONVER_GETLIST_ERROR = 34002] = "CONVER_GETLIST_ERROR";
        u[u.CONVER_SETOP_ERROR = 34003] = "CONVER_SETOP_ERROR";
        u[u.CONVER_TOTAL_UNREAD_ERROR = 34004] = "CONVER_TOTAL_UNREAD_ERROR";
        u[u.CONVER_TYPE_UNREAD_ERROR = 34005] = "CONVER_TYPE_UNREAD_ERROR";
        u[u.CONVER_ID_TYPE_UNREAD_ERROR = 34006] = "CONVER_ID_TYPE_UNREAD_ERROR";
        u[u.GROUP_SYNC_ERROR = 35001] = "GROUP_SYNC_ERROR";
        u[u.GROUP_MATCH_ERROR = 35002] = "GROUP_MATCH_ERROR";
        u[u.CHATROOM_ID_ISNULL = 36001] = "CHATROOM_ID_ISNULL";
        u[u.CHARTOOM_JOIN_ERROR = 36002] = "CHARTOOM_JOIN_ERROR";
        u[u.CHATROOM_HISMESSAGE_ERROR = 36003] = "CHATROOM_HISMESSAGE_ERROR";
        u[u.BLACK_ADD_ERROR = 37001] = "BLACK_ADD_ERROR";
        u[u.BLACK_GETSTATUS_ERROR = 37002] = "BLACK_GETSTATUS_ERROR";
        u[u.BLACK_REMOVE_ERROR = 37003] = "BLACK_REMOVE_ERROR";
        u[u.DRAF_GET_ERROR = 38001] = "DRAF_GET_ERROR";
        u[u.DRAF_SAVE_ERROR = 38002] = "DRAF_SAVE_ERROR";
        u[u.DRAF_REMOVE_ERROR = 38003] = "DRAF_REMOVE_ERROR";
        u[u.SUBSCRIBE_ERROR = 39001] = "SUBSCRIBE_ERROR";
        u[u.QNTKN_FILETYPE_ERROR = 41001] = "QNTKN_FILETYPE_ERROR";
        u[u.QNTKN_GET_ERROR = 41002] = "QNTKN_GET_ERROR";
        u[u.COOKIE_ENABLE = 51001] = "COOKIE_ENABLE";
    })(c.ErrorCode || (c.ErrorCode = {}));
    var o = c.ErrorCode;
    (function(u) {
        u[u.IMAGE = 1] = "IMAGE";
        u[u.AUDIO = 2] = "AUDIO";
        u[u.VIDEO = 3] = "VIDEO";
        u[u.FILE = 100] = "FILE";
    })(c.MediaType || (c.MediaType = {}));
    var g = c.MediaType;
    (function(u) {
        u[u.SEND = 1] = "SEND";
        u[u.RECEIVE = 2] = "RECEIVE";
    })(c.MessageDirection || (c.MessageDirection = {}));
    var j = c.MessageDirection;
    (function(u) {
        u[u.IMAGE = 1] = "IMAGE";
        u[u.AUDIO = 2] = "AUDIO";
        u[u.VIDEO = 3] = "VIDEO";
    })(c.FileType || (c.FileType = {}));
    var e = c.FileType;
    (function(u) {
        u[u.RC_REAL_TIME_LOCATION_NOT_INIT = -1] = "RC_REAL_TIME_LOCATION_NOT_INIT";
        u[u.RC_REAL_TIME_LOCATION_SUCCESS = 0] = "RC_REAL_TIME_LOCATION_SUCCESS";
        u[u.RC_REAL_TIME_LOCATION_GPS_DISABLED = 1] = "RC_REAL_TIME_LOCATION_GPS_DISABLED";
        u[u.RC_REAL_TIME_LOCATION_CONVERSATION_NOT_SUPPORT = 2] = "RC_REAL_TIME_LOCATION_CONVERSATION_NOT_SUPPORT";
        u[u.RC_REAL_TIME_LOCATION_IS_ON_GOING = 3] = "RC_REAL_TIME_LOCATION_IS_ON_GOING";
        u[u.RC_REAL_TIME_LOCATION_EXCEED_MAX_PARTICIPANT = 4] = "RC_REAL_TIME_LOCATION_EXCEED_MAX_PARTICIPANT";
        u[u.RC_REAL_TIME_LOCATION_JOIN_FAILURE = 5] = "RC_REAL_TIME_LOCATION_JOIN_FAILURE";
        u[u.RC_REAL_TIME_LOCATION_START_FAILURE = 6] = "RC_REAL_TIME_LOCATION_START_FAILURE";
        u[u.RC_REAL_TIME_LOCATION_NETWORK_UNAVAILABLE = 7] = "RC_REAL_TIME_LOCATION_NETWORK_UNAVAILABLE";
    })(c.RealTimeLocationErrorCode || (c.RealTimeLocationErrorCode = {}));
    var h = c.RealTimeLocationErrorCode;
    (function(u) {
        u[u.RC_REAL_TIME_LOCATION_STATUS_IDLE = 0] = "RC_REAL_TIME_LOCATION_STATUS_IDLE";
        u[u.RC_REAL_TIME_LOCATION_STATUS_INCOMING = 1] = "RC_REAL_TIME_LOCATION_STATUS_INCOMING";
        u[u.RC_REAL_TIME_LOCATION_STATUS_OUTGOING = 2] = "RC_REAL_TIME_LOCATION_STATUS_OUTGOING";
        u[u.RC_REAL_TIME_LOCATION_STATUS_CONNECTED = 3] = "RC_REAL_TIME_LOCATION_STATUS_CONNECTED";
    })(c.RealTimeLocationStatus || (c.RealTimeLocationStatus = {}));
    var k = c.RealTimeLocationStatus;
    (function(u) {
        u[u.READ = 1] = "READ";
        u[u.LISTENED = 2] = "LISTENED";
        u[u.DOWNLOADED = 4] = "DOWNLOADED";
        u[u.RETRIEVED = 8] = "RETRIEVED";
    })(c.ReceivedStatus || (c.ReceivedStatus = {}));
    var m = c.ReceivedStatus;
    (function(u) {
        u[u.EXACT = 0] = "EXACT";
        u[u.FUZZY = 1] = "FUZZY";
    })(c.SearchType || (c.SearchType = {}));
    var s = c.SearchType;
    (function(u) {
        u[u.SENDING = 10] = "SENDING";
        u[u.FAILED = 20] = "FAILED";
        u[u.SENT = 30] = "SENT";
        u[u.RECEIVED = 40] = "RECEIVED";
        u[u.READ = 50] = "READ";
        u[u.DESTROYED = 60] = "DESTROYED";
    })(c.SentStatus || (c.SentStatus = {}));
    var d = c.SentStatus;
    (function(u) {
        u[u.ACCEPTED = 0] = "ACCEPTED";
        u[u.UNACCEPTABLE_PROTOCOL_VERSION = 1] = "UNACCEPTABLE_PROTOCOL_VERSION";
        u[u.IDENTIFIER_REJECTED = 2] = "IDENTIFIER_REJECTED";
        u[u.SERVER_UNAVAILABLE = 3] = "SERVER_UNAVAILABLE";
        u[u.TOKEN_INCORRECT = 4] = "TOKEN_INCORRECT";
        u[u.NOT_AUTHORIZED = 5] = "NOT_AUTHORIZED";
        u[u.REDIRECT = 6] = "REDIRECT";
        u[u.PACKAGE_ERROR = 7] = "PACKAGE_ERROR";
        u[u.APP_BLOCK_OR_DELETE = 8] = "APP_BLOCK_OR_DELETE";
        u[u.BLOCK = 9] = "BLOCK";
        u[u.TOKEN_EXPIRE = 10] = "TOKEN_EXPIRE";
        u[u.DEVICE_ERROR = 11] = "DEVICE_ERROR";
    })(c.ConnectionState || (c.ConnectionState = {}));
    var a = c.ConnectionState;
})(RongIMLib || (RongIMLib = {}));

var RongIMLib;

(function(b) {
    var a = function() {
        function g() {}
        g.getInstance = function() {
            if (!g._instance) {
                throw new Error("RongIMClient is not initialized. Call .init() method first.");
            }
            return g._instance;
        };
        g.init = function(n, m) {
            if (!g._instance) {
                g._instance = new g();
            }
            if (window.SCHEMETYPE == "http") {
                g.schemeType = b.ConnectionChannel.HTTP;
            } else {
                if (window.SCHEMETYPE == "https") {
                    g.schemeType = b.ConnectionChannel.HTTPS;
                } else {
                    if (document.location.protocol == "http:") {
                        g.schemeType = b.ConnectionChannel.HTTP;
                    } else {
                        g.schemeType = b.ConnectionChannel.HTTPS;
                    }
                }
            }
            if (!window.WEB_XHR_POLLING) {
                var i = navigator.appName;
                var l = navigator.appVersion;
                var h = l.split(";");
                if (h.length > 1) {
                    var k = parseInt(h[1].replace(/[ ]/g, "").replace(/MSIE/g, ""));
                    if (k < 10) {
                        window.WEB_XHR_POLLING = true;
                    }
                }
            }
            var j = new b.FeaturePatcher();
            j.patchAll();
            g._memoryStore = {
                token: "",
                callback: null,
                hasModules: true,
                global: window,
                lastReadTime: new b.LimitableMap(),
                conversationList: [],
                appKey: n,
                publicServiceMap: new b.PublicServiceMap(),
                listenerList: [],
                providerType: 1,
                deltaTime: 0,
                filterMessages: [],
                isSyncRemoteConverList: false,
                isUseWebSQLProvider: false,
                otherDevice: false,
                custStore: {},
                converStore: {}
            };
            g._cookieHelper = new b.CookieProvider();
            if (m && Object.prototype.toString.call(m) == "[object Object]") {
                g._dataAccessProvider = m;
                g._memoryStore.isUseWebSQLProvider = true;
            } else {
                g._dataAccessProvider = new b.ServerDataProvider();
            }
            g.MessageParams = {
                TextMessage: {
                    objectName: "RC:TxtMsg",
                    msgTag: new b.MessageTag(true, true)
                },
                ImageMessage: {
                    objectName: "RC:ImgMsg",
                    msgTag: new b.MessageTag(true, true)
                },
                DiscussionNotificationMessage: {
                    objectName: "RC:DizNtf",
                    msgTag: new b.MessageTag(true, true)
                },
                VoiceMessage: {
                    objectName: "RC:VcMsg",
                    msgTag: new b.MessageTag(true, true)
                },
                RichContentMessage: {
                    objectName: "RC:ImgTextMsg",
                    msgTag: new b.MessageTag(true, true)
                },
                HandshakeMessage: {
                    objectName: "",
                    msgTag: new b.MessageTag(true, true)
                },
                UnknownMessage: {
                    objectName: "",
                    msgTag: new b.MessageTag(true, true)
                },
                LocationMessage: {
                    objectName: "RC:LBSMsg",
                    msgTag: new b.MessageTag(true, true)
                },
                InformationNotificationMessage: {
                    objectName: "RC:InfoNtf",
                    msgTag: new b.MessageTag(true, true)
                },
                ContactNotificationMessage: {
                    objectName: "RC:ContactNtf",
                    msgTag: new b.MessageTag(true, true)
                },
                ProfileNotificationMessage: {
                    objectName: "RC:ProfileNtf",
                    msgTag: new b.MessageTag(true, true)
                },
                CommandNotificationMessage: {
                    objectName: "RC:CmdNtf",
                    msgTag: new b.MessageTag(true, true)
                },
                CommandMessage: {
                    objectName: "RC:CmdMsg",
                    msgTag: new b.MessageTag(false, false)
                },
                TypingStatusMessage: {
                    objectName: "RC:TypSts",
                    msgTag: new b.MessageTag(false, false)
                },
                ChangeModeResponseMessage: {
                    objectName: "RC:CsChaR",
                    msgTag: new b.MessageTag(false, false)
                },
                ChangeModeMessage: {
                    objectName: "RC:CSCha",
                    msgTag: new b.MessageTag(false, false)
                },
                EvaluateMessage: {
                    objectName: "RC:CsEva",
                    msgTag: new b.MessageTag(false, false)
                },
                HandShakeMessage: {
                    objectName: "RC:CsHs",
                    msgTag: new b.MessageTag(false, false)
                },
                HandShakeResponseMessage: {
                    objectName: "RC:CsHsR",
                    msgTag: new b.MessageTag(false, false)
                },
                SuspendMessage: {
                    objectName: "RC:CsSp",
                    msgTag: new b.MessageTag(false, false)
                },
                TerminateMessage: {
                    objectName: "RC:CsEnd",
                    msgTag: new b.MessageTag(false, false)
                },
                CustomerStatusUpdateMessage: {
                    objectName: "RC:CsUpdate",
                    msgTag: new b.MessageTag(false, false)
                },
                ReadReceiptMessage: {
                    objectName: "RC:ReadNtf",
                    msgTag: new b.MessageTag(false, false)
                }
            };
            g.MessageType = {
                TextMessage: "TextMessage",
                ImageMessage: "ImageMessage",
                DiscussionNotificationMessage: "DiscussionNotificationMessage",
                VoiceMessage: "VoiceMessage",
                RichContentMessage: "RichContentMessage",
                HandshakeMessage: "HandshakeMessage",
                UnknownMessage: "UnknownMessage",
                LocationMessage: "LocationMessage",
                InformationNotificationMessage: "InformationNotificationMessage",
                ContactNotificationMessage: "ContactNotificationMessage",
                ProfileNotificationMessage: "ProfileNotificationMessage",
                CommandNotificationMessage: "CommandNotificationMessage",
                CommandMessage: "CommandMessage",
                TypingStatusMessage: "TypingStatusMessage",
                ChangeModeResponseMessage: "ChangeModeResponseMessage",
                ChangeModeMessage: "ChangeModeMessage",
                EvaluateMessage: "EvaluateMessage",
                HandShakeMessage: "HandShakeMessage",
                HandShakeResponseMessage: "HandShakeResponseMessage",
                SuspendMessage: "SuspendMessage",
                TerminateMessage: "TerminateMessage",
                CustomerStatusUpdateMessage: "CustomerStatusUpdateMessage"
            };
        };
        g.connect = function(k, l) {
            b.CheckParam.getInstance().check([ "string", "object" ], "connect", true);
            g.bridge = b.Bridge.getInstance();
            g._memoryStore.token = k;
            g._memoryStore.callback = l;
            if (!navigator.cookieEnabled) {
                setTimeout(function() {
                    l.onError(b.ErrorCode.COOKIE_ENABLE);
                });
                return;
            }
            g.bridge.connect(g._memoryStore.appKey, k, {
                onSuccess: function(i) {
                    setTimeout(function() {
                        l.onSuccess(i);
                    });
                },
                onError: function(i) {
                    if (i == b.ConnectionState.TOKEN_INCORRECT || !i) {
                        setTimeout(function() {
                            l.onTokenIncorrect();
                        });
                    } else {
                        setTimeout(function() {
                            l.onError(i);
                        });
                    }
                }
            });
            for (var j = 0, h = g._memoryStore.listenerList.length; j < h; j++) {
                g.bridge.setListener(g._memoryStore.listenerList[j]);
            }
            g._memoryStore.listenerList.length = 0;
            return g._instance;
        };
        g.reconnect = function(h) {
            g.bridge.reconnect(h);
        };
        g.registerMessageType = function(j, l, h, k) {
            if (!j) {
                throw new Error("messageType can't be empty,postion -> registerMessageType");
            }
            if (!l) {
                throw new Error("objectName can't be empty,postion -> registerMessageType");
            }
            if (Object.prototype.toString.call(k) == "[object Array]") {
                var i = b.ModelUtil.modleCreate(k, j);
                g.RegisterMessage[j] = i;
            } else {
                if (Object.prototype.toString.call(k) == "[object Function]" || Object.prototype.toString.call(k) == "[object Object]") {
                    if (!k.encode) {
                        throw new Error("encode method has not realized or messageName is undefined-> registerMessageType");
                    }
                    if (!k.decode) {
                        throw new Error("decode method has not realized -> registerMessageType");
                    }
                } else {
                    throw new Error("The index of 3 parameter was wrong type  must be object or function or array-> registerMessageType");
                }
            }
            g.RegisterMessage[j].messageName = j;
            g.MessageType[j] = j;
            g.MessageParams[j] = {
                objectName: l,
                msgTag: h
            };
            registerMessageTypeMapping[l] = j;
        };
        g.setConnectionStatusListener = function(h) {
            if (g.bridge) {
                g.bridge.setListener(h);
            } else {
                g._memoryStore.listenerList.push(h);
            }
        };
        g.setOnReceiveMessageListener = function(h) {
            if (g.bridge) {
                g.bridge.setListener(h);
            } else {
                g._memoryStore.listenerList.push(h);
            }
        };
        g.prototype.logout = function() {
            g.bridge.disconnect();
            g.bridge = null;
        };
        g.prototype.disconnect = function() {
            g.bridge.disconnect();
        };
        g.prototype.startCustomService = function(i, k) {
            if (!i || !k) {
                return;
            }
            var j = new b.HandShakeMessage();
            var h = this;
            g.getInstance().sendMessage(b.ConversationType.CUSTOMER_SERVICE, i, j, {
                onSuccess: function(l) {
                    if (l.isBlack) {
                        k.onError();
                        h.stopCustomeService(i, {
                            onSuccess: function() {},
                            onError: function() {}
                        });
                    } else {
                        g._memoryStore.custStore[i] = l;
                        k.onSuccess();
                    }
                },
                onError: function() {
                    k.onError();
                }
            });
        };
        g.prototype.stopCustomeService = function(h, k) {
            if (!h || !k) {
                return;
            }
            var i = g._memoryStore.custStore[h];
            if (!i) {
                return;
            }
            var j = new b.SuspendMessage({
                sid: i.sid,
                uid: i.uid,
                pid: i.pid
            });
            this.sendCustMessage(h, j, {
                onSuccess: function() {
                    setTimeout(function() {
                        k.onSuccess();
                    });
                },
                onError: function() {
                    setTimeout(function() {
                        k.onError();
                    });
                }
            });
        };
        g.prototype.switchToHumanMode = function(h, k) {
            if (!h || !k) {
                return;
            }
            var i = g._memoryStore.custStore[h];
            if (!i) {
                return;
            }
            var j = new b.ChangeModeMessage({
                sid: i.sid,
                uid: i.uid,
                pid: i.pid
            });
            this.sendCustMessage(h, j, k);
        };
        g.prototype.evaluateRebotCustomService = function(j, i, h, m) {
            if (!j || !m) {
                return;
            }
            var k = g._memoryStore.custStore[j];
            if (!k) {
                return;
            }
            var l = new b.EvaluateMessage({
                sid: k.sid,
                uid: k.uid,
                pid: k.pid,
                isRobotResolved: i,
                sugest: h,
                type: 0
            });
            this.sendCustMessage(j, l, m);
        };
        g.prototype.evaluateHumanCustomService = function(j, i, h, m) {
            if (!j || !m) {
                return;
            }
            var k = g._memoryStore.custStore[j];
            if (!k) {
                return;
            }
            var l = new b.EvaluateMessage({
                sid: k.sid,
                uid: k.uid,
                pid: k.pid,
                humanValue: i,
                sugest: h,
                type: 1
            });
            this.sendCustMessage(j, l, m);
        };
        g.prototype.sendCustMessage = function(h, i, j) {
            g.getInstance().sendMessage(b.ConversationType.CUSTOMER_SERVICE, h, i, {
                onSuccess: function(k) {
                    j.onSuccess();
                },
                onError: function() {
                    j.onError();
                }
            });
        };
        g.prototype.getCurrentConnectionStatus = function() {
            return b.Bridge._client.channel.connectionStatus;
        };
        g.prototype.getConnectionChannel = function() {
            if (b.Transportations._TransportType == b.Socket.XHR_POLLING) {
                return b.ConnectionChannel.XHR_POLLING;
            } else {
                if (b.Transportations._TransportType == b.Socket.WEBSOCKET) {
                    return b.ConnectionChannel.WEBSOCKET;
                }
            }
        };
        g.prototype.getStorageProvider = function() {
            if (g._memoryStore.providerType == 1) {
                return "ServerDataProvider";
            } else {
                return "OtherDataProvider";
            }
        };
        g.prototype.setFilterMessages = function(h) {
            if (Object.prototype.toString.call(h) == "[object Array]") {
                g._memoryStore.filterMessages = h;
            }
        };
        g.prototype.getCurrentUserId = function() {
            return b.Bridge._client.userId;
        };
        g.prototype.getDeltaTime = function() {
            return g._memoryStore.deltaTime;
        };
        g.prototype.getMessage = function(h, i) {
            g._dataAccessProvider.getMessage(h, i);
        };
        g.prototype.deleteLocalMessages = function(k, h, i, j) {
            g._dataAccessProvider.removeLocalMessage(k, h, i, j);
        };
        g.prototype.updateMessage = function(h, i) {
            g._dataAccessProvider.updateMessage(h, i);
        };
        g.prototype.clearMessages = function(j, h, i) {
            g._dataAccessProvider.clearMessages(j, h, {
                onSuccess: function(k) {
                    setTimeout(function() {
                        i.onSuccess(k);
                    });
                },
                onError: function(k) {
                    setTimeout(function() {
                        i.onError(k);
                    });
                }
            });
        };
        g.prototype.clearMessagesUnreadStatus = function(j, h, i) {
            g._dataAccessProvider.updateMessages(j, h, "readStatus", null, {
                onSuccess: function(k) {
                    setTimeout(function() {
                        i.onSuccess(k);
                    });
                },
                onError: function(k) {
                    setTimeout(function() {
                        i.onError(k);
                    });
                }
            });
        };
        g.prototype.deleteMessages = function(k, i, h, j) {
            g._dataAccessProvider.removeMessage(k, i, h, {
                onSuccess: function(l) {
                    setTimeout(function() {
                        j.onSuccess(l);
                    });
                },
                onError: function(l) {
                    setTimeout(function() {
                        j.onError(l);
                    });
                }
            });
        };
        g.prototype.sendLocalMessage = function(h, i) {
            b.CheckParam.getInstance().check([ "object", "object" ], "sendLocalMessage");
            g._dataAccessProvider.updateMessage(h);
            this.sendMessage(h.conversationType, h.targetId, h.content, i);
        };
        g.prototype.sendMessage = function(i, p, k, n) {
            b.CheckParam.getInstance().check([ "number", "string", "object", "object" ], "sendMessage");
            if (!b.Bridge._client.channel) {
                n.onError(b.ErrorCode.RC_NET_UNAVAILABLE, null);
                return;
            }
            if (!b.Bridge._client.channel.socket.socket.connected) {
                n.onError(b.ErrorCode.TIMEOUT, null);
                throw new Error("connect is timeout! postion:sendMessage");
            }
            var j = new Modules.UpStreamMessage();
            j.setSessionId(g.MessageParams[k.messageName].msgTag.getMessageTag());
            j.setClassname(g.MessageParams[k.messageName].objectName);
            j.setContent(k.encode());
            var l = j.toArrayBuffer();
            if (Object.prototype.toString.call(l) == "[object ArrayBuffer]") {
                l = [].slice.call(new Int8Array(l));
            }
            var m = null, o = this, h = new b.Message();
            this.getConversation(i, p, {
                onSuccess: function(q) {
                    m = q;
                    if (g.MessageParams[h.messageType].msgTag.getMessageTag() == 3) {
                        if (!m) {
                            m = o.createConversation(i, p, "");
                        }
                        m.sentTime = new Date().getTime();
                        m.sentStatus = b.SentStatus.SENDING;
                        m.senderUserName = "";
                        m.senderUserId = b.Bridge._client.userId;
                        m.notificationStatus = b.ConversationNotificationStatus.DO_NOT_DISTURB;
                        m.latestMessage = h;
                        m.unreadMessageCount = 0;
                        g._dataAccessProvider.addConversation(m, {
                            onSuccess: function(r) {}
                        });
                    }
                    g._memoryStore.converStore = m;
                }
            });
            h.content = k;
            h.conversationType = i;
            h.senderUserId = b.Bridge._client.userId;
            h.objectName = g.MessageParams[k.messageName].objectName;
            h.targetId = p;
            h.sentTime = new Date().getTime();
            h.messageDirection = b.MessageDirection.SEND;
            h.sentStatus = b.SentStatus.SENT;
            h.messageType = k.messageName;
            g.bridge.pubMsg(i.valueOf(), l, p, {
                onSuccess: function(q) {
                    if (g.MessageParams[h.messageType].msgTag.getMessageTag() == 3) {
                        g._memoryStore.converStore.latestMessage = h;
                        g._dataAccessProvider.addMessage(i, p, h, {
                            onSuccess: function(r) {
                                h = r;
                                h.messageUId = q.messageUId;
                                h.sentTime = q.timestamp;
                                h.sentStatus = b.SentStatus.SENT;
                                g._dataAccessProvider.updateMessage(h);
                            },
                            onError: function() {}
                        });
                    }
                    setTimeout(function() {
                        n.onSuccess(h);
                    });
                },
                onError: function(q) {
                    h.sentStatus = b.SentStatus.FAILED;
                    g._memoryStore.converStore.latestMessage = h;
                    g._dataAccessProvider.addMessage(i, p, h, {
                        onSuccess: function(r) {
                            h.messageId = r.messageId;
                            g._dataAccessProvider.updateMessage(h);
                        },
                        onError: function() {}
                    });
                    setTimeout(function() {
                        n.onError(q, h);
                    });
                }
            }, null);
        };
        g.prototype.sendTypingStatusMessage = function(l, i, h, k) {
            var j = this;
            if (h in g.MessageParams) {
                j.sendMessage(l, i, b.TypingStatusMessage.obtain(g.MessageParams[h].objectName, ""), {
                    onSuccess: function() {
                        setTimeout(function() {
                            k.onSuccess();
                        });
                    },
                    onError: function(m) {
                        setTimeout(function() {
                            k.onError(m, null);
                        });
                    }
                });
            }
        };
        g.prototype.sendStatusMessage = function(i, j, h) {
            throw new Error("Not implemented yet");
        };
        g.prototype.sendTextMessage = function(l, i, j, h) {
            var k = b.TextMessage.obtain(j);
            this.sendMessage(l, i, k, h);
        };
        g.prototype.insertMessage = function(m, h, j, i, l) {
            var k = new b.Message();
            k.conversationType = m;
            k.targetId = h;
            k.senderUserId = j;
            k.content = i;
            k.sentTime = +new Date();
            k.messageType = i.messageName;
            g._dataAccessProvider.addMessage(m, h, k, l);
        };
        g.prototype.getHistoryMessages = function(l, h, j, i, k) {
            b.CheckParam.getInstance().check([ "number", "string", "number|null|global|object", "number", "object" ], "getHistoryMessages");
            if (i > 20) {
                throw new Error("HistroyMessage count must be less than or equal to 20!");
            }
            if (l.valueOf() < 0) {
                throw new Error("ConversationType must be greater than -1");
            }
            g._dataAccessProvider.getHistoryMessages(l, h, j, i, k);
        };
        g.prototype.getRemoteHistoryMessages = function(n, j, l, k, m) {
            b.CheckParam.getInstance().check([ "number", "string", "number|null|global|object", "number", "object" ], "getRemoteHistoryMessages");
            if (k > 20) {
                m.onError(b.ErrorCode.RC_CONN_PROTO_VERSION_ERROR);
                return;
            }
            if (n.valueOf() < 0) {
                m.onError(b.ErrorCode.RC_CONN_PROTO_VERSION_ERROR);
                return;
            }
            var i = new Modules.HistoryMessageInput(), h = this;
            i.setTargetId(j);
            if (l === 0) {
                i.setDataTime(l);
            } else {
                i.setDataTime(g._memoryStore.lastReadTime.get(n + j));
            }
            i.setSize(k);
            g.bridge.queryMsg(HistoryMsgType[n], b.MessageUtil.ArrayForm(i.toArrayBuffer()), j, {
                onSuccess: function(r) {
                    g._memoryStore.lastReadTime.set(n + j, b.MessageUtil.int64ToTimestamp(r.syncTime));
                    var q = r.list.reverse();
                    for (var p = 0, o = q.length; p < o; p++) {
                        q[p] = b.MessageUtil.messageParser(q[p]);
                    }
                    setTimeout(function() {
                        m.onSuccess(q, !!r.hasMsg);
                    });
                },
                onError: function(o) {
                    setTimeout(function() {
                        if (o === b.ErrorCode.TIMEOUT) {
                            m.onError(o);
                        } else {
                            m.onSuccess([], false);
                        }
                    });
                }
            }, "HistoryMessagesOuput");
        };
        g.prototype.hasRemoteUnreadMessages = function(h, j) {
            var i = null;
            window.RCCallback = function(k) {
                setTimeout(function() {
                    j.onSuccess(!!+k.status);
                });
                i.parentNode.removeChild(i);
            };
            i = document.createElement("script");
            i.src = b.MessageUtil.schemeArrs[g.schemeType][0] + "://api.cn.ronghub.com/message/exist.js?appKey=" + encodeURIComponent(g._memoryStore.appKey) + "&token=" + encodeURIComponent(h) + "&callBack=RCCallback&_=" + Date.now();
            document.body.appendChild(i);
            i.onerror = function() {
                setTimeout(function() {
                    j.onError(b.ErrorCode.UNKNOWN);
                });
                i.parentNode.removeChild(i);
            };
        };
        g.prototype.getTotalUnreadCount = function(h) {
            g._dataAccessProvider.getTotalUnreadCount({
                onSuccess: function(i) {
                    setTimeout(function() {
                        h.onSuccess(i);
                    });
                },
                onError: function(i) {
                    setTimeout(function() {
                        h.onError(i);
                    });
                }
            });
        };
        g.prototype.getConversationUnreadCount = function(h, i) {
            g._dataAccessProvider.getConversationUnreadCount(h, {
                onSuccess: function(j) {
                    setTimeout(function() {
                        i.onSuccess(j);
                    });
                },
                onError: function(j) {
                    setTimeout(function() {
                        i.onError(j);
                    });
                }
            });
        };
        g.prototype.getUnreadCount = function(j, h, i) {
            g._dataAccessProvider.getUnreadCount(j, h, {
                onSuccess: function(k) {
                    setTimeout(function() {
                        i.onSuccess(k);
                    });
                },
                onError: function(k) {
                    setTimeout(function() {
                        i.onError(k);
                    });
                }
            });
        };
        g.prototype.clearUnreadCount = function(j, h, i) {
            g._dataAccessProvider.clearUnreadCount(j, h, {
                onSuccess: function(k) {
                    setTimeout(function() {
                        i.onSuccess(k);
                    });
                },
                onError: function(k) {
                    setTimeout(function() {
                        i.onError(k);
                    });
                }
            });
        };
        g.prototype.setMessageExtra = function(h, i, j) {
            g._dataAccessProvider.setMessageExtra(h, i, {
                onSuccess: function(k) {
                    setTimeout(function() {
                        j.onSuccess(k);
                    });
                },
                onError: function(k) {
                    setTimeout(function() {
                        j.onError(k);
                    });
                }
            });
        };
        g.prototype.setMessageReceivedStatus = function(i, h, j) {
            g._dataAccessProvider.setMessageReceivedStatus(i, h, {
                onSuccess: function(k) {
                    setTimeout(function() {
                        j.onSuccess(k);
                    });
                },
                onError: function(k) {
                    setTimeout(function() {
                        j.onError(k);
                    });
                }
            });
        };
        g.prototype.setMessageSentStatus = function(i, h, j) {
            g._dataAccessProvider.setMessageSentStatus(i, h, {
                onSuccess: function(k) {
                    setTimeout(function() {
                        j.onSuccess(k);
                    });
                },
                onError: function(k) {
                    setTimeout(function() {
                        j.onError(k);
                    });
                }
            });
        };
        g.prototype.clearTextMessageDraft = function(j, h) {
            b.CheckParam.getInstance().check([ "number", "string", "object" ], "clearTextMessageDraft");
            var i = "darf_" + j + "_" + h;
            delete g._memoryStore[i];
            return true;
        };
        g.prototype.getTextMessageDraft = function(j, h) {
            b.CheckParam.getInstance().check([ "number", "string", "object" ], "getTextMessageDraft");
            if (h == "" || j < 0) {
                throw new Error("params error : " + b.ErrorCode.DRAF_GET_ERROR);
            }
            var i = "darf_" + j + "_" + h;
            return g._memoryStore[i];
        };
        g.prototype.saveTextMessageDraft = function(k, h, j) {
            b.CheckParam.getInstance().check([ "number", "string", "string", "object" ], "saveTextMessageDraft");
            var i = "darf_" + k + "_" + h;
            g._memoryStore[i] = j;
            return true;
        };
        g.prototype.clearConversations = function(j) {
            var i = [];
            for (var h = 1; h < arguments.length; h++) {
                i[h - 1] = arguments[h];
            }
            if (i.length == 0) {
                i = [ b.ConversationType.CHATROOM, b.ConversationType.CUSTOMER_SERVICE, b.ConversationType.DISCUSSION, b.ConversationType.GROUP, b.ConversationType.PRIVATE, b.ConversationType.SYSTEM, b.ConversationType.PUBLIC_SERVICE, b.ConversationType.APP_PUBLIC_SERVICE ];
            }
            g._dataAccessProvider.clearConversations(i, {
                onSuccess: function(k) {
                    setTimeout(function() {
                        j.onSuccess(k);
                    });
                },
                onError: function(k) {
                    setTimeout(function() {
                        j.onError(k);
                    });
                }
            });
        };
        g.prototype.getConversation = function(j, h, i) {
            b.CheckParam.getInstance().check([ "number", "string", "object" ], "getConversation");
            g._dataAccessProvider.getConversation(j, h, {
                onSuccess: function(k) {
                    setTimeout(function() {
                        i.onSuccess(k);
                    });
                },
                onError: function(k) {
                    setTimeout(function() {
                        i.onError(k);
                    });
                }
            });
        };
        g.prototype.pottingConversation = function(h) {
            var i = this, j = false;
            g._dataAccessProvider.getConversation(h.type, h.userId, {
                onSuccess: function(l) {
                    if (!l) {
                        l = new b.Conversation();
                    } else {
                        j = true;
                    }
                    l.conversationType = h.type;
                    l.targetId = h.userId;
                    l.latestMessage = b.MessageUtil.messageParser(h.msg);
                    l.latestMessageId = l.latestMessage.messageId;
                    l.objectName = l.latestMessage.objectName;
                    l.receivedStatus = l.latestMessage.receivedStatus;
                    l.receivedTime = l.latestMessage.receiveTime;
                    l.sentStatus = l.latestMessage.sentStatus;
                    l.sentTime = l.latestMessage.sentTime;
                    if (!j) {
                        if (b.MessageUtil.supportLargeStorage()) {
                            var k = b.LocalStorageProvider.getInstance().getItem("cu" + b.Bridge._client.userId + h.type + h.userId);
                            l.unreadMessageCount = Number(k);
                        } else {
                            l.unreadMessageCount = 0;
                        }
                    }
                    if (l.conversationType == b.ConversationType.DISCUSSION) {
                        i.getDiscussion(h.userId, {
                            onSuccess: function(m) {
                                l.conversationTitle = m.name;
                            },
                            onError: function(m) {}
                        });
                    }
                    g._dataAccessProvider.addConversation(l, {
                        onSuccess: function(m) {}
                    });
                },
                onError: function(k) {}
            });
        };
        g.prototype.sortConversationList = function(k) {
            var o = [];
            for (var m = 0, h = k.length; m < h; m++) {
                if (k[m].isTop) {
                    o.push(k[m]);
                    k.splice(m, 1);
                    continue;
                }
                for (var l = 0; l < h - m - 1; l++) {
                    if (k[l].sentTime < k[l + 1].sentTime) {
                        var n = k[l];
                        k[l] = k[l + 1];
                        k[l + 1] = n;
                    }
                }
            }
            g._memoryStore.conversationList = o.concat(k);
        };
        g.prototype.getConversationList = function(j, i) {
            b.CheckParam.getInstance().check([ "object", "null|array|object|global" ], "getConversationList");
            var h = this;
            g._dataAccessProvider.getConversationList({
                onSuccess: function(k) {
                    if (i) {
                        setTimeout(function() {
                            j.onSuccess(k);
                        });
                    } else {
                        if (g._memoryStore.isUseWebSQLProvide) {
                            h.sortConversationList(g._memoryStore.conversationList);
                        }
                        setTimeout(function() {
                            j.onSuccess(g._memoryStore.conversationList);
                        });
                    }
                },
                onError: function(k) {
                    if (k === b.ErrorCode.TIMEOUT) {
                        j.onError(k);
                    } else {
                        j.onSuccess([]);
                    }
                }
            }, i);
        };
        g.prototype.getRemoteConversationList = function(k, j) {
            b.CheckParam.getInstance().check([ "object", "null|array|object|global" ], "getRemoteConversationList");
            var i = new Modules.RelationsInput(), h = this;
            i.setType(1);
            g.bridge.queryMsg(26, b.MessageUtil.ArrayForm(i.toArrayBuffer()), b.Bridge._client.userId, {
                onSuccess: function(n) {
                    if (n.info) {
                        for (var m = 0, l = n.info.length; m < l; m++) {
                            h.pottingConversation(n.info[m]);
                        }
                    }
                    if (j) {
                        var o = [];
                        Array.forEach(j, function(p) {
                            Array.forEach(g._memoryStore.conversationList, function(q) {
                                if (q.conversationType == p) {
                                    o.push(q);
                                }
                            });
                        });
                        k.onSuccess(o);
                    } else {
                        k.onSuccess(g._memoryStore.conversationList);
                    }
                },
                onError: function(l) {
                    if (l === b.ErrorCode.TIMEOUT) {
                        k.onError(l);
                    } else {
                        k.onSuccess([]);
                    }
                }
            }, "RelationsOutput");
        };
        g.prototype.updateConversation = function(h) {
            return g._dataAccessProvider.updateConversation(h);
        };
        g.prototype.createConversation = function(k, h, i) {
            b.CheckParam.getInstance().check([ "number", "string", "string" ], "createConversation");
            var j = new b.Conversation();
            j.targetId = h;
            j.conversationType = k;
            j.conversationTitle = i;
            j.latestMessage = {};
            j.unreadMessageCount = 0;
            return j;
        };
        g.prototype.removeConversation = function(k, h, j) {
            b.CheckParam.getInstance().check([ "number", "string", "object" ], "removeConversation");
            var i = new Modules.RelationsInput();
            i.setType(k);
            g.bridge.queryMsg(27, b.MessageUtil.ArrayForm(i.toArrayBuffer()), h, {
                onSuccess: function() {
                    g._dataAccessProvider.removeConversation(k, h, {
                        onSuccess: function() {
                            setTimeout(function() {
                                j.onSuccess(true);
                            });
                        },
                        onError: function() {
                            setTimeout(function() {
                                j.onError(b.ErrorCode.CONVER_REMOVE_ERROR);
                            });
                        }
                    });
                },
                onError: function() {
                    setTimeout(function() {
                        j.onError(b.ErrorCode.CONVER_REMOVE_ERROR);
                    });
                }
            });
        };
        g.prototype.setConversationToTop = function(j, h, i) {
            b.CheckParam.getInstance().check([ "number", "string", "object" ], "setConversationToTop");
            g._dataAccessProvider.setConversationToTop(j, h, {
                onSuccess: function(k) {
                    setTimeout(function() {
                        i.onSuccess(k);
                    });
                },
                onError: function(k) {
                    setTimeout(function() {
                        i.onError(k);
                    });
                }
            });
        };
        g.prototype.getConversationNotificationStatus = function(j, h, i) {
            throw new Error("Not implemented yet");
        };
        g.prototype.setConversationNotificationStatus = function(k, i, h, j) {
            throw new Error("Not implemented yet");
        };
        g.prototype.getNotificationQuietHours = function(h) {
            throw new Error("Not implemented yet");
        };
        g.prototype.removeNotificationQuietHours = function(h) {
            throw new Error("Not implemented yet");
        };
        g.prototype.setNotificationQuietHours = function(i, h, j) {
            throw new Error("Not implemented yet");
        };
        g.prototype.addMemberToDiscussion = function(h, j, k) {
            b.CheckParam.getInstance().check([ "string", "array", "object" ], "addMemberToDiscussion");
            var i = new Modules.ChannelInvitationInput();
            i.setUsers(j);
            g.bridge.queryMsg(0, b.MessageUtil.ArrayForm(i.toArrayBuffer()), h, {
                onSuccess: function() {
                    setTimeout(function() {
                        k.onSuccess();
                    });
                },
                onError: function() {
                    setTimeout(function() {
                        k.onError(b.ErrorCode.JOIN_IN_DISCUSSION);
                    });
                }
            });
        };
        g.prototype.createDiscussion = function(j, k, l) {
            b.CheckParam.getInstance().check([ "string", "array", "object" ], "createDiscussion");
            var i = new Modules.CreateDiscussionInput(), h = this;
            i.setName(j);
            g.bridge.queryMsg(1, b.MessageUtil.ArrayForm(i.toArrayBuffer()), b.Bridge._client.userId, {
                onSuccess: function(m) {
                    if (k.length > 0) {
                        h.addMemberToDiscussion(m, k, {
                            onSuccess: function() {},
                            onError: function(n) {
                                setTimeout(function() {
                                    l.onError(n);
                                });
                            }
                        });
                    }
                    setTimeout(function() {
                        l.onSuccess(m);
                    });
                },
                onError: function() {
                    setTimeout(function() {
                        l.onError(b.ErrorCode.CREATE_DISCUSSION);
                    });
                }
            }, "CreateDiscussionOutput");
        };
        g.prototype.getDiscussion = function(h, j) {
            b.CheckParam.getInstance().check([ "string", "object" ], "getDiscussion");
            var i = new Modules.ChannelInfoInput();
            i.setNothing(1);
            g.bridge.queryMsg(4, b.MessageUtil.ArrayForm(i.toArrayBuffer()), h, {
                onSuccess: function(k) {
                    setTimeout(function() {
                        j.onSuccess(k);
                    });
                },
                onError: function(k) {
                    setTimeout(function() {
                        j.onError(k);
                    });
                }
            }, "ChannelInfoOutput");
        };
        g.prototype.quitDiscussion = function(h, j) {
            b.CheckParam.getInstance().check([ "string", "object" ], "quitDiscussion");
            var i = new Modules.LeaveChannelInput();
            i.setNothing(1);
            g.bridge.queryMsg(7, b.MessageUtil.ArrayForm(i.toArrayBuffer()), h, j);
        };
        g.prototype.removeMemberFromDiscussion = function(h, j, k) {
            b.CheckParam.getInstance().check([ "string", "string", "object" ], "removeMemberFromDiscussion");
            var i = new Modules.ChannelEvictionInput();
            i.setUser(j);
            g.bridge.queryMsg(9, b.MessageUtil.ArrayForm(i.toArrayBuffer()), h, k);
        };
        g.prototype.setDiscussionInviteStatus = function(h, i, k) {
            b.CheckParam.getInstance().check([ "string", "number", "object" ], "setDiscussionInviteStatus");
            var j = new Modules.ModifyPermissionInput();
            j.setOpenStatus(i.valueOf());
            g.bridge.queryMsg(11, b.MessageUtil.ArrayForm(j.toArrayBuffer()), h, {
                onSuccess: function(l) {
                    setTimeout(function() {
                        k.onSuccess();
                    });
                },
                onError: function() {
                    setTimeout(function() {
                        k.onError(b.ErrorCode.INVITE_DICUSSION);
                    });
                }
            });
        };
        g.prototype.setDiscussionName = function(h, j, k) {
            b.CheckParam.getInstance().check([ "string", "string", "object" ], "setDiscussionName");
            var i = new Modules.RenameChannelInput();
            i.setName(j);
            g.bridge.queryMsg(12, b.MessageUtil.ArrayForm(i.toArrayBuffer()), h, {
                onSuccess: function() {
                    setTimeout(function() {
                        k.onSuccess();
                    });
                },
                onError: function(l) {
                    k.onError(l);
                }
            });
        };
        g.prototype.joinGroup = function(i, l, k) {
            b.CheckParam.getInstance().check([ "string", "string", "object" ], "joinGroup");
            var h = new Modules.GroupInfo();
            h.setId(i);
            h.setName(l);
            var j = new Modules.GroupInput();
            j.setGroupInfo([ h ]);
            g.bridge.queryMsg(6, b.MessageUtil.ArrayForm(j.toArrayBuffer()), i, {
                onSuccess: function() {
                    setTimeout(function() {
                        k.onSuccess();
                    });
                },
                onError: function(m) {
                    k.onError(m);
                }
            }, "GroupOutput");
        };
        g.prototype.quitGroup = function(i, j) {
            b.CheckParam.getInstance().check([ "string", "object" ], "quitGroup");
            var h = new Modules.LeaveChannelInput();
            h.setNothing(1);
            g.bridge.queryMsg(8, b.MessageUtil.ArrayForm(h.toArrayBuffer()), i, {
                onSuccess: function() {
                    setTimeout(function() {
                        j.onSuccess();
                    });
                },
                onError: function(k) {
                    j.onError(k);
                }
            });
        };
        g.prototype.syncGroup = function(j, p) {
            b.CheckParam.getInstance().check([ "array", "object" ], "syncGroup");
            for (var m = 0, l = [], o = [], h = j.length; m < h; m++) {
                if (l.length === 0 || !(j[m].id in l)) {
                    l.push(j[m].id);
                    var n = new Modules.GroupInfo();
                    n.setId(j[m].id);
                    n.setName(j[m].name);
                    o.push(n);
                }
            }
            var k = new Modules.GroupHashInput();
            k.setUserId(b.Bridge._client.userId);
            k.setGroupHashCode(md5(l.sort().join("")));
            g.bridge.queryMsg(13, b.MessageUtil.ArrayForm(k.toArrayBuffer()), b.Bridge._client.userId, {
                onSuccess: function(i) {
                    if (i === 1) {
                        var q = new Modules.GroupInput();
                        q.setGroupInfo(o);
                        g.bridge.queryMsg(20, b.MessageUtil.ArrayForm(q.toArrayBuffer()), b.Bridge._client.userId, {
                            onSuccess: function() {
                                setTimeout(function() {
                                    p.onSuccess();
                                });
                            },
                            onError: function() {
                                setTimeout(function() {
                                    p.onError(b.ErrorCode.GROUP_MATCH_ERROR);
                                });
                            }
                        }, "GroupOutput");
                    } else {
                        setTimeout(function() {
                            p.onSuccess();
                        });
                    }
                },
                onError: function() {
                    setTimeout(function() {
                        p.onError(b.ErrorCode.GROUP_SYNC_ERROR);
                    });
                }
            }, "GroupHashOutput");
        };
        g.prototype.joinChatRoom = function(k, h, j) {
            b.CheckParam.getInstance().check([ "string", "number", "object" ], "joinChatRoom");
            if (k == "") {
                setTimeout(function() {
                    j.onError(b.ErrorCode.CHATROOM_ID_ISNULL);
                });
                return;
            }
            var i = new Modules.ChrmInput();
            i.setNothing(1);
            b.Bridge._client.chatroomId = k;
            g.bridge.queryMsg(19, b.MessageUtil.ArrayForm(i.toArrayBuffer()), k, {
                onSuccess: function() {
                    j.onSuccess();
                    var l = new Modules.ChrmPullMsg();
                    h == 0 && (h = -1);
                    l.setCount(h);
                    l.setSyncTime(0);
                    b.Bridge._client.queryMessage("chrmPull", b.MessageUtil.ArrayForm(l.toArrayBuffer()), k, 1, {
                        onSuccess: function(t) {
                            var r = b.MessageUtil.int64ToTimestamp(t.syncTime);
                            g._cookieHelper.setItem(b.Bridge._client.userId + k + "CST", r);
                            var s = t.list;
                            if (g._memoryStore.filterMessages.length > 0) {
                                for (var q = 0, p = s.length; q < p; q++) {
                                    for (var o = 0, n = g._memoryStore.filterMessages.length; o < n; o++) {
                                        if (g.MessageParams[g._memoryStore.filterMessages[o]].objectName != s[q].classname) {
                                            b.Bridge._client.handler.onReceived(s[q]);
                                        }
                                    }
                                }
                            } else {
                                for (var q = 0, m = s.length; q < m; q++) {
                                    b.Bridge._client.handler.onReceived(s[q]);
                                }
                            }
                        },
                        onError: function(m) {
                            setTimeout(function() {
                                j.onError(b.ErrorCode.CHATROOM_HISMESSAGE_ERROR);
                            });
                        }
                    }, "DownStreamMessages");
                },
                onError: function() {
                    setTimeout(function() {
                        j.onError(b.ErrorCode.CHARTOOM_JOIN_ERROR);
                    });
                }
            }, "ChrmOutput");
        };
        g.prototype.getChatRoomInfo = function(k, j, h, l) {
            b.CheckParam.getInstance().check([ "string", "number", "number", "object" ], "getChatRoomInfo");
            var i = new Modules.QueryChatroomInfoInput();
            i.setCount(j);
            i.setOrder(h);
            g.bridge.queryMsg("queryChrmI", b.MessageUtil.ArrayForm(i.toArrayBuffer()), k, {
                onSuccess: function(m) {
                    setTimeout(function() {
                        l.onSuccess(m);
                    });
                },
                onError: function(m) {
                    l.onError(m);
                }
            }, "QueryChatroomInfoOutput");
        };
        g.prototype.quitChatRoom = function(j, i) {
            b.CheckParam.getInstance().check([ "string", "object" ], "quitChatRoom");
            var h = new Modules.ChrmInput();
            h.setNothing(1);
            g.bridge.queryMsg(17, b.MessageUtil.ArrayForm(h.toArrayBuffer()), j, {
                onSuccess: function() {
                    setTimeout(function() {
                        i.onSuccess();
                    });
                },
                onError: function(k) {
                    i.onError(k);
                }
            }, "ChrmOutput");
        };
        g.prototype.getRemotePublicServiceList = function(j, m, l, k) {
            var i = new Modules.PullMpInput(), h = this;
            if (!l) {
                i.setTime(0);
            } else {
                i.setTime(g._memoryStore.lastReadTime.get(m + b.Bridge._client.userId));
            }
            i.setMpid("");
            g.bridge.queryMsg(28, b.MessageUtil.ArrayForm(i.toArrayBuffer()), b.Bridge._client.userId, {
                onSuccess: function(n) {
                    g._memoryStore.publicServiceMap.publicServiceList.length = 0;
                    g._memoryStore.publicServiceMap.publicServiceList = n;
                },
                onError: function() {}
            }, "PullMpOutput");
        };
        g.prototype.getPublicServiceList = function(h) {
            b.CheckParam.getInstance().check([ "object" ], "getPublicServiceList");
            h.onSuccess(g._memoryStore.publicServiceMap.publicServiceList);
        };
        g.prototype.getPublicServiceProfile = function(h, j, k) {
            b.CheckParam.getInstance().check([ "number", "string", "object" ], "getPublicServiceProfile");
            var i = g._memoryStore.publicServiceMap.get(h, j);
            k.onSuccess(i);
        };
        g.prototype.pottingPublicSearchType = function(i, h) {
            var j = 0;
            if (i == 0) {
                j |= 3;
                if (h == 0) {
                    j |= 12;
                } else {
                    j |= 48;
                }
            } else {
                if (i == 1) {
                    j |= 1;
                    if (h == 0) {
                        j |= 8;
                    } else {
                        j |= 32;
                    }
                } else {
                    j |= 2;
                    if (i == 0) {
                        j |= 4;
                    } else {
                        j |= 16;
                    }
                }
            }
            return j;
        };
        g.prototype.searchPublicService = function(i, j, k) {
            b.CheckParam.getInstance().check([ "number", "string", "object" ], "searchPublicService");
            var h = new Modules.SearchMpInput();
            h.setType(this.pottingPublicSearchType(0, i));
            h.setId(j);
            g.bridge.queryMsg(29, b.MessageUtil.ArrayForm(h.toArrayBuffer()), b.Bridge._client.userId, k, "SearchMpOutput");
        };
        g.prototype.searchPublicServiceByType = function(h, j, k, m) {
            b.CheckParam.getInstance().check([ "number", "number", "string", "object" ], "searchPublicServiceByType");
            var l = h == b.ConversationType.APP_PUBLIC_SERVICE ? 2 : 1;
            var i = new Modules.SearchMpInput();
            i.setType(this.pottingPublicSearchType(l, j));
            i.setId(k);
            g.bridge.queryMsg(29, b.MessageUtil.ArrayForm(i.toArrayBuffer()), b.Bridge._client.userId, m, "SearchMpOutput");
        };
        g.prototype.subscribePublicService = function(i, l, m) {
            b.CheckParam.getInstance().check([ "number", "string", "object" ], "subscribePublicService");
            var j = new Modules.MPFollowInput(), k = this, h = i == b.ConversationType.APP_PUBLIC_SERVICE ? "mcFollow" : "mpFollow";
            j.setId(l);
            g.bridge.queryMsg(h, b.MessageUtil.ArrayForm(j.toArrayBuffer()), b.Bridge._client.userId, {
                onSuccess: function() {
                    k.getRemotePublicServiceList(null, null, null, {
                        onSuccess: function() {},
                        onError: function() {}
                    });
                    m.onSuccess();
                },
                onError: function() {
                    m.onError(b.ErrorCode.SUBSCRIBE_ERROR);
                }
            }, "MPFollowOutput");
        };
        g.prototype.unsubscribePublicService = function(i, l, m) {
            b.CheckParam.getInstance().check([ "number", "string", "object" ], "unsubscribePublicService");
            var j = new Modules.MPFollowInput(), k = this, h = i == b.ConversationType.APP_PUBLIC_SERVICE ? "mcUnFollow" : "mpUnFollow";
            j.setId(l);
            g.bridge.queryMsg(h, b.MessageUtil.ArrayForm(j.toArrayBuffer()), b.Bridge._client.userId, {
                onSuccess: function() {
                    g._memoryStore.publicServiceMap.remove(i, l);
                    m.onSuccess();
                },
                onError: function() {
                    m.onError(b.ErrorCode.SUBSCRIBE_ERROR);
                }
            }, "MPFollowOutput");
        };
        g.prototype.addToBlacklist = function(i, j) {
            b.CheckParam.getInstance().check([ "string", "object" ], "addToBlacklist");
            var h = new Modules.Add2BlackListInput();
            h.setUserId(i);
            g.bridge.queryMsg(21, b.MessageUtil.ArrayForm(h.toArrayBuffer()), i, {
                onSuccess: function() {
                    j.onSuccess();
                },
                onError: function() {
                    j.onError(b.ErrorCode.BLACK_ADD_ERROR);
                }
            });
        };
        g.prototype.getBlacklist = function(i) {
            b.CheckParam.getInstance().check([ "object" ], "getBlacklist");
            var h = new Modules.QueryBlackListInput();
            h.setNothing(1);
            g.bridge.queryMsg(23, b.MessageUtil.ArrayForm(h.toArrayBuffer()), b.Bridge._client.userId, i, "QueryBlackListOutput");
        };
        g.prototype.getBlacklistStatus = function(i, j) {
            b.CheckParam.getInstance().check([ "string", "object" ], "getBlacklistStatus");
            var h = new Modules.BlackListStatusInput();
            h.setUserId(i);
            g.bridge.queryMsg(24, b.MessageUtil.ArrayForm(h.toArrayBuffer()), i, {
                onSuccess: function(k) {
                    setTimeout(function() {
                        j.onSuccess(b.BlacklistStatus[k]);
                    });
                },
                onError: function() {
                    setTimeout(function() {
                        j.onError(b.ErrorCode.BLACK_GETSTATUS_ERROR);
                    });
                }
            });
        };
        g.prototype.removeFromBlacklist = function(i, j) {
            b.CheckParam.getInstance().check([ "string", "object" ], "removeFromBlacklist");
            var h = new Modules.RemoveFromBlackListInput();
            h.setUserId(i);
            g.bridge.queryMsg(22, b.MessageUtil.ArrayForm(h.toArrayBuffer()), i, {
                onSuccess: function() {
                    j.onSuccess();
                },
                onError: function() {
                    j.onError(b.ErrorCode.BLACK_REMOVE_ERROR);
                }
            });
        };
        g.prototype.getFileToken = function(h, j) {
            b.CheckParam.getInstance().check([ "number", "object" ], "getQnTkn");
            if (!/(1|2|3)/.test(h.toString())) {
                j.onError(b.ErrorCode.QNTKN_FILETYPE_ERROR);
                return;
            }
            var i = new Modules.GetQNupTokenInput();
            i.setType(h);
            g.bridge.queryMsg(30, b.MessageUtil.ArrayForm(i.toArrayBuffer()), b.Bridge._client.userId, {
                onSuccess: function(k) {
                    setTimeout(function() {
                        j.onSuccess(k);
                    });
                },
                onError: function(k) {
                    j.onError(k);
                }
            }, "GetQNupTokenOutput");
        };
        g.prototype.getFileUrl = function(h, k, j) {
            b.CheckParam.getInstance().check([ "number", "string", "object" ], "getQnTkn");
            if (!/(1|2|3)/.test(h.toString())) {
                setTimeout(function() {
                    j.onError(b.ErrorCode.QNTKN_FILETYPE_ERROR);
                });
                return;
            }
            var i = new Modules.GetQNdownloadUrlInput();
            i.setType(h);
            i.setKey(k);
            g.bridge.queryMsg(31, b.MessageUtil.ArrayForm(i.toArrayBuffer()), b.Bridge._client.userId, {
                onSuccess: function(l) {
                    setTimeout(function() {
                        j.onSuccess(l);
                    });
                },
                onError: function(l) {
                    j.onError(l);
                }
            }, "GetQNdownloadUrlOutput");
        };
        g.prototype.addRealTimeLocationListener = function(j, h, i) {
            throw new Error("Not implemented yet");
        };
        g.prototype.getRealTimeLocation = function(i, h) {
            throw new Error("Not implemented yet");
        };
        g.prototype.getRealTimeLocationCurrentState = function(i, h) {
            throw new Error("Not implemented yet");
        };
        g.prototype.getRealTimeLocationParticipants = function(i, h) {
            throw new Error("Not implemented yet");
        };
        g.prototype.joinRealTimeLocation = function(i, h) {
            throw new Error("Not implemented yet");
        };
        g.prototype.quitRealTimeLocation = function(i, h) {
            throw new Error("Not implemented yet");
        };
        g.prototype.startRealTimeLocation = function(i, h) {
            throw new Error("Not implemented yet");
        };
        g.prototype.updateRealTimeLocationStatus = function(k, h, j, i) {
            throw new Error("Not implemented yet");
        };
        g.MessageType = {};
        g.RegisterMessage = {};
        g._memoryStore = {};
        g.isNotPullMsg = false;
        return g;
    }();
    b.RongIMClient = a;
    if ("function" === typeof require && "object" === typeof module && module && module.id && "object" === typeof exports && exports) {
        module.exports = b;
    } else {
        if ("function" === typeof define && define.amd) {
            if (window.WEB_XHR_POLLING) {
                define("RongIMLib", [ "md5" ], function() {
                    return b;
                });
            } else {
                var e = window.SCHEMETYPE ? window.SCHEMETYPE + "://cdn.ronghub.com/Long.js" : "//cdn.ronghub.com/Long.js";
                var c = window.SCHEMETYPE ? window.SCHEMETYPE + "://cdn.ronghub.com/byteBuffer.js" : "//cdn.ronghub.com/byteBuffer.js";
                var d = window.SCHEMETYPE ? window.SCHEMETYPE + "://cdn.ronghub.com/protobuf-2.1.1.min.js" : "//cdn.ronghub.com/protobuf-2.1.1.min.js";
                define("RongIMLib", [ "md5", e, c, d ], function() {
                    return b;
                });
            }
        } else {
            window.RongIMClient = a;
        }
    }
})(RongIMLib || (RongIMLib = {}));

var RongIMLib;

(function(i) {
    (function(k) {
        k[k.AT_MOST_ONCE = 0] = "AT_MOST_ONCE";
        k[k.AT_LEAST_ONCE = 1] = "AT_LEAST_ONCE";
        k[k.EXACTLY_ONCE = 2] = "EXACTLY_ONCE";
        k[k.DEFAULT = 3] = "DEFAULT";
    })(i.Qos || (i.Qos = {}));
    var j = i.Qos;
    (function(k) {
        k[k.CONNECT = 1] = "CONNECT";
        k[k.CONNACK = 2] = "CONNACK";
        k[k.PUBLISH = 3] = "PUBLISH";
        k[k.PUBACK = 4] = "PUBACK";
        k[k.QUERY = 5] = "QUERY";
        k[k.QUERYACK = 6] = "QUERYACK";
        k[k.QUERYCON = 7] = "QUERYCON";
        k[k.SUBSCRIBE = 8] = "SUBSCRIBE";
        k[k.SUBACK = 9] = "SUBACK";
        k[k.UNSUBSCRIBE = 10] = "UNSUBSCRIBE";
        k[k.UNSUBACK = 11] = "UNSUBACK";
        k[k.PINGREQ = 12] = "PINGREQ";
        k[k.PINGRESP = 13] = "PINGRESP";
        k[k.DISCONNECT = 14] = "DISCONNECT";
    })(i.Type || (i.Type = {}));
    var a = i.Type;
    var g = [ "invtDiz", "crDiz", "qnUrl", "userInf", "dizInf", "userInf", "joinGrp", "quitDiz", "exitGrp", "evctDiz", [ "", "ppMsgP", "pdMsgP", "pgMsgP", "chatMsg", "pcMsgP", "", "pmcMsgN", "pmpMsgN" ], "pdOpen", "rename", "uGcmpr", "qnTkn", "destroyChrm", "createChrm", "exitChrm", "queryChrm", "joinChrm", "pGrps", "addBlack", "rmBlack", "getBlack", "blackStat", "addRelation", "qryRelation", "delRelation", "pullMp", "schMp", "qnTkn", "qnUrl" ];
    var e = function() {
        function k(m, l, n) {
            this.connectionStatus = -1;
            this.delOnChangedCount = 0;
            this.url = m.host + "/websocket?appId=" + n.appId + "&token=" + encodeURIComponent(n.token) + "&sdkVer=" + n.sdkVer + "&apiVer=" + n.apiVer;
            this.self = n;
            this.socket = b.getInstance().createServer();
            this.socket.connect(this.url, l);
            if (typeof k._ConnectionStatusListener == "object" && "onChanged" in k._ConnectionStatusListener) {
                var o = this;
                o.socket.on("StatusChanged", function(p) {
                    o.connectionStatus = p;
                    if (p === i.ConnectionStatus.NETWORK_UNAVAILABLE) {
                        i.RongIMClient._cookieHelper.setItem("rongSDK", "");
                    }
                    if (p === i.ConnectionStatus.DISCONNECTED && !i.RongIMClient._memoryStore.otherDevice) {
                        k._ConnectionStatusListener.onChanged(i.ConnectionStatus.DISCONNECTED);
                        n.clearHeartbeat();
                        return;
                    } else {
                        if (p === i.ConnectionStatus.DISCONNECTED && i.RongIMClient._memoryStore.otherDevice) {
                            return;
                        }
                    }
                    k._ConnectionStatusListener.onChanged(p);
                    if (i.RongIMClient._memoryStore.otherDevice) {
                        if (o.delOnChangedCount > 5) {
                            delete k._ConnectionStatusListener.onChanged;
                        }
                        o.delOnChangedCount++;
                    }
                });
            } else {
                throw new Error("setConnectStatusListener:Parameter format is incorrect");
            }
            this.socket.on("message", n.handler.handleMessage);
            this.socket.on("disconnect", function(p) {
                n.channel.socket.fire("StatusChanged", p ? p : 2);
            });
        }
        k.prototype.writeAndFlush = function(l) {
            this.socket.send(l);
        };
        k.prototype.reconnect = function(l) {
            i.MessageIdHandler.clearMessageId();
            this.socket = this.socket.reconnect();
            if (l) {
                this.self.reconnectObj = l;
            }
        };
        k.prototype.disconnect = function(l) {
            this.socket.disconnect(l);
        };
        return k;
    }();
    i.Channel = e;
    var b = function() {
        function k() {
            this.socket = null;
            this._events = {};
        }
        k.getInstance = function() {
            return new k();
        };
        k.prototype.connect = function(m, l) {
            if (this.socket) {
                if (m) {
                    i.RongIMClient._cookieHelper.setItem("rongSDK", this.checkTransport());
                    this.on("connect", l || new Function());
                }
                if (m) {
                    this.currentURL = m;
                }
                this.socket.createTransport(m);
            }
            return this;
        };
        k.prototype.createServer = function() {
            var l = this.getTransport(this.checkTransport());
            if (l === null) {
                throw new Error("the channel was not supported");
            }
            return l;
        };
        k.prototype.getTransport = function(l) {
            if (l == k.XHR_POLLING) {
                this.socket = new i.PollingTransportation(this);
            } else {
                if (l == k.WEBSOCKET) {
                    this.socket = new i.SocketTransportation(this);
                }
            }
            return this;
        };
        k.prototype.send = function(l) {
            if (this.socket) {
                if (this.checkTransport() == k.WEBSOCKET) {
                    this.socket.send(l);
                } else {
                    this.socket.send(this._encode(l));
                }
            }
        };
        k.prototype.onMessage = function(l) {
            this.fire("message", l);
        };
        k.prototype.disconnect = function(l) {
            if (i.ConnectionStatus.KICKED_OFFLINE_BY_OTHER_CLIENT === l) {
                i.RongIMClient._memoryStore.otherDevice = true;
            }
            this.socket.disconnect(l);
            this.fire("disconnect", l);
            return this;
        };
        k.prototype.reconnect = function() {
            if (this.currentURL) {
                return this.connect(this.currentURL, null);
            } else {
                throw new Error("reconnect:no have URL");
            }
        };
        k.prototype.checkTransport = function() {
            if (i.RongIMClient._memoryStore.global.WEB_XHR_POLLING) {
                i.Transportations._TransportType = k.XHR_POLLING;
            }
            return i.Transportations._TransportType;
        };
        k.prototype.fire = function(l, m) {
            if (l in this._events) {
                for (var n = 0, o = this._events[l].length; n < o; n++) {
                    this._events[l][n](m);
                }
            }
            return this;
        };
        k.prototype.on = function(l, m) {
            if (!(typeof m == "function" && l)) {
                return this;
            }
            if (l in this._events) {
                i.MessageUtil.indexOf(this._events, m) == -1 && this._events[l].push(m);
            } else {
                this._events[l] = [ m ];
            }
            return this;
        };
        k.prototype.removeEvent = function(m, p) {
            if (m in this._events) {
                for (var o = 0, n = this._events[m].length; o < n; o++) {
                    if (this._events[m][o] == p) {
                        this._events[m].splice(o, 1);
                    }
                }
            }
            return this;
        };
        k.prototype._encode = function(l) {
            var m = "?messageid=" + l.getMessageId() + "&header=" + l.getHeaderFlag() + "&sessionid=" + i.RongIMClient._cookieHelper.getItem(i.Navigation.Endpoint.userId + "sId");
            if (!/(PubAckMessage|QueryConMessage)/.test(l._name)) {
                m += "&topic=" + l.getTopic() + "&targetid=" + (l.getTargetId() || "");
            }
            return {
                url: m,
                data: "getData" in l ? l.getData() : ""
            };
        };
        k.XHR_POLLING = "xhr-polling";
        k.WEBSOCKET = "websocket";
        return k;
    }();
    i.Socket = b;
    var c = function() {
        function k(l, m) {
            this.timeoutMillis = 1e5;
            this.timeout_ = 0;
            this.sdkVer = "2.1.1";
            this.apiVer = Math.floor(Math.random() * 1e6);
            this.channel = null;
            this.handler = null;
            this.userId = "";
            this.reconnectObj = {};
            this.heartbeat = 0;
            this.chatroomId = "";
            this.SyncTimeQueue = [];
            this.cacheMessageIds = [];
            this.token = l;
            this.appId = m;
            this.SyncTimeQueue.state = "complete";
        }
        k.prototype.resumeTimer = function() {
            if (!this.timeout_) {
                this.timeout_ = setTimeout(function() {
                    if (!this.timeout_) {
                        return;
                    }
                    try {
                        this.channel.disconnect();
                    } catch (l) {
                        throw new Error(l);
                    }
                    clearTimeout(this.timeout_);
                    this.timeout_ = 0;
                    this.channel.reconnect();
                    this.channel.socket.fire("StatusChanged", 5);
                }, this.timeoutMillis);
            }
        };
        k.prototype.pauseTimer = function() {
            if (this.timeout_) {
                clearTimeout(this.timeout_);
                this.timeout_ = 0;
            }
        };
        k.prototype.connect = function(l) {
            if (i.Navigation.Endpoint.host) {
                if (i.Transportations._TransportType == b.WEBSOCKET) {
                    if (!window.WebSocket) {
                        l.onError(i.ConnectionState.UNACCEPTABLE_PROTOCOL_VERSION);
                        return;
                    }
                }
                this.handler = new h(this);
                this.handler.setConnectCallback(l);
                var m = this;
                this.channel = new e(i.Navigation.Endpoint, function() {
                    i.Transportations._TransportType == b.WEBSOCKET && m.keepLive();
                }, this);
                this.channel.socket.fire("StatusChanged", 1);
            } else {
                l.onError(i.ConnectionState.NOT_AUTHORIZED);
            }
        };
        k.prototype.keepLive = function() {
            if (this.heartbeat > 0) {
                clearInterval(this.heartbeat);
            }
            var l = this;
            this.heartbeat = setInterval(function() {
                l.resumeTimer();
                l.channel.writeAndFlush(new i.PingReqMessage());
            }, 3e4);
        };
        k.prototype.clearHeartbeat = function() {
            clearInterval(this.heartbeat);
            this.heartbeat = 0;
            this.pauseTimer();
        };
        k.prototype.publishMessage = function(q, n, m, l, r) {
            var o = i.MessageIdHandler.messageIdPlus(this.channel.reconnect);
            if (!o) {
                return;
            }
            var p = new i.PublishMessage(q, n, m);
            p.setMessageId(o);
            if (l) {
                p.setQos(j.AT_LEAST_ONCE);
                this.handler.putCallback(new i.PublishCallback(l.onSuccess, l.onError), p.getMessageId(), r);
            } else {
                p.setQos(j.AT_MOST_ONCE);
            }
            this.channel.writeAndFlush(p);
        };
        k.prototype.queryMessage = function(r, n, m, o, l, s) {
            if (r == "userInf") {
                if (k.userInfoMapping[m]) {
                    l.onSuccess(k.userInfoMapping[m]);
                    return;
                }
            }
            var p = i.MessageIdHandler.messageIdPlus(this.channel.reconnect);
            if (!p) {
                return;
            }
            var q = new i.QueryMessage(r, n, m);
            q.setMessageId(p);
            q.setQos(o);
            this.handler.putCallback(new i.QueryCallback(l.onSuccess, l.onError), q.getMessageId(), s);
            this.channel.writeAndFlush(q);
        };
        k.prototype.invoke = function(p, n) {
            var r, m, s, o = this, q, l = this.SyncTimeQueue.shift();
            if (l == undefined) {
                return;
            }
            this.SyncTimeQueue.state = "pending";
            if (l.type != 2) {
                r = i.RongIMClient._cookieHelper.getItem(this.userId) || "0";
                m = new Modules.SyncRequestMsg();
                m.setIspolling(false);
                s = "pullMsg";
                q = this.userId;
            } else {
                q = n || o.chatroomId;
                r = i.RongIMClient._cookieHelper.getItem(d._client.userId + q + "CST") || "0";
                m = new Modules.ChrmPullMsg();
                m.setCount(0);
                s = "chrmPull";
                if (!q) {
                    throw new Error("syncTime:Received messages of chatroom but was not init");
                }
            }
            if (l.pulltime <= r) {
                this.SyncTimeQueue.state = "complete";
                this.invoke(p, q);
                return;
            }
            if (p) {
                m.setIsPullSend(true);
            }
            m.setSyncTime(r);
            this.queryMessage(s, i.MessageUtil.ArrayForm(m.toArrayBuffer()), q, j.AT_LEAST_ONCE, {
                onSuccess: function(z) {
                    var w = i.MessageUtil.int64ToTimestamp(z.syncTime), y = d._client.userId + "" + q;
                    if (s == "chrmPull") {
                        y += "CST";
                    }
                    i.RongIMClient._memoryStore.isSyncRemoteConverList = true;
                    i.RongIMClient._cookieHelper.setItem(y, w);
                    o.SyncTimeQueue.state = "complete";
                    o.invoke(p, q);
                    var x = z.list;
                    for (var v = 0, t = x.length; v < t; v++) {
                        if (!(x[v].msgId in o.cacheMessageIds)) {
                            d._client.handler.onReceived(x[v]);
                            var u = o.cacheMessageIds.unshift(x[v].msgId);
                            if (u > 20) {
                                o.cacheMessageIds.length = 20;
                            }
                        }
                    }
                },
                onError: function() {
                    o.SyncTimeQueue.state = "complete";
                    o.invoke(p, q);
                }
            }, "DownStreamMessages");
        };
        k.prototype.syncTime = function(m, n, l) {
            this.SyncTimeQueue.push({
                type: m,
                pulltime: n
            });
            if (this.SyncTimeQueue.length == 1 && this.SyncTimeQueue.state == "complete") {
                this.invoke(!m, l);
            }
        };
        k.prototype.__init = function(l) {
            this.channel = new e(i.Navigation.Endpoint, l, this);
        };
        k.userInfoMapping = {};
        return k;
    }();
    i.Client = c;
    var d = function() {
        function k() {}
        k.getInstance = function() {
            return new k();
        };
        k.prototype.connect = function(n, l, m) {
            if (!window.Modules) {
                i.RongIMClient._memoryStore.hasModules = false;
                return;
            }
            k._client = new i.Navigation().connect(n, l, m);
            return k._client;
        };
        k.prototype.setListener = function(l) {
            if (typeof l == "object") {
                if (typeof l.onChanged == "function") {
                    e._ConnectionStatusListener = l;
                } else {
                    if (typeof l.onReceived == "function") {
                        e._ReceiveMessageListener = l;
                    }
                }
            }
        };
        k.prototype.reconnect = function(l) {
            k._client.channel.reconnect(l);
        };
        k.prototype.disconnect = function() {
            k._client.clearHeartbeat();
            k._client.channel.disconnect(2);
        };
        k.prototype.queryMsg = function(m, n, l, p, o) {
            if (typeof m != "string") {
                m = g[m];
            }
            k._client.queryMessage(m, n, l, j.AT_MOST_ONCE, p, o);
        };
        k.prototype.pubMsg = function(m, n, l, p, o) {
            k._client.publishMessage(g[10][m], n, l, p, o);
        };
        return k;
    }();
    i.Bridge = d;
    var h = function() {
        function k(l) {
            this.map = {};
            this.connectCallback = null;
            if (!e._ReceiveMessageListener) {
                throw new Error("please set onReceiveMessageListener");
            }
            this._onReceived = e._ReceiveMessageListener.onReceived;
            this._client = l;
            this.syncMsgMap = new Object();
        }
        k.prototype.putCallback = function(l, n, o) {
            var m = {
                Callback: l,
                Message: o
            };
            m.Callback.resumeTimer();
            this.map[n] = m;
        };
        k.prototype.setConnectCallback = function(l) {
            if (l) {
                this.connectCallback = new i.ConnectAck(l.onSuccess, l.onError, this._client);
                this.connectCallback.resumeTimer();
            }
        };
        k.prototype.onReceived = function(m, r) {
            var n, t, l;
            if (m._name != "PublishMessage") {
                n = m;
                i.RongIMClient._cookieHelper.setItem(this._client.userId, i.MessageUtil.int64ToTimestamp(n.dataTime));
            } else {
                if (m.getTopic() == "s_ntf") {
                    n = Modules.NotifyMsg.decode(m.getData());
                    this._client.syncTime(n.type, i.MessageUtil.int64ToTimestamp(n.time), n.chrmId);
                    return;
                } else {
                    if (m.getTopic() == "s_msg") {
                        n = Modules.DownStreamMessage.decode(m.getData());
                        i.RongIMClient._cookieHelper.setItem(this._client.userId, i.MessageUtil.int64ToTimestamp(n.dataTime));
                    } else {
                        if (d._client.sdkVer && d._client.sdkVer == "1.0.0") {
                            return;
                        }
                        n = Modules.UpStreamMessage.decode(m.getData());
                        var s = m.getTopic();
                        var q = s.substr(0, 2);
                        if (q == "pp") {
                            n.type = 1;
                        } else {
                            if (q == "pd") {
                                n.type = 2;
                            } else {
                                if (q == "pg") {
                                    n.type = 3;
                                } else {
                                    if (q == "ch") {
                                        n.type = 4;
                                    } else {
                                        if (q == "pc") {
                                            n.type = 5;
                                        }
                                    }
                                }
                            }
                        }
                        n.groupId = m.getTargetId();
                        n.fromUserId = this._client.userId;
                        n.dataTime = Date.parse(new Date().toString());
                    }
                }
                if (!n) {
                    return;
                }
            }
            t = i.MessageUtil.messageParser(n, this._onReceived);
            if (r) {
                t.messageUId = r.getMessageUId();
                t.sentTime = r.getTimestamp();
            }
            if (t === null) {
                return;
            }
            if (i.RongIMClient.MessageParams[t.messageType].msgTag.getMessageTag() == 3) {
                i.RongIMClient._dataAccessProvider.getConversation(t.conversationType, t.targetId, {
                    onSuccess: function(u) {
                        if (!u) {
                            u = i.RongIMClient.getInstance().createConversation(t.conversationType, t.targetId, "");
                        }
                        if (u.conversationType != 0 && t.senderUserId != d._client.userId && t.receivedStatus != i.ReceivedStatus.RETRIEVED) {
                            u.unreadMessageCount = u.unreadMessageCount + 1;
                            if (i.MessageUtil.supportLargeStorage()) {
                                var v = i.LocalStorageProvider.getInstance().getItem("cu" + d._client.userId + u.conversationType + u.targetId);
                                i.LocalStorageProvider.getInstance().setItem("cu" + d._client.userId + u.conversationType + t.targetId, Number(v) + 1);
                            }
                        }
                        u.receivedTime = new Date().getTime();
                        u.receivedStatus = i.ReceivedStatus.READ;
                        u.senderUserId = t.sendUserId;
                        u.notificationStatus = i.ConversationNotificationStatus.DO_NOT_DISTURB;
                        u.latestMessageId = t.messageId;
                        u.latestMessage = t;
                        u.sentTime = t.sentTime;
                        i.RongIMClient._dataAccessProvider.addConversation(u, {
                            onSuccess: function(w) {},
                            onError: function() {}
                        });
                    },
                    onError: function(u) {}
                });
            }
            if (t.messageType === i.RongIMClient.MessageType.HandShakeResponseMessage) {
                var p = t.content.data;
                i.RongIMClient._memoryStore.custStore[t.targetId] = p;
                if (p.serviceType == i.CustomerType.ONLY_HUMAN || p.serviceType == i.CustomerType.HUMAN_FIRST) {
                    if (p.notAutoCha == "1") {
                        i.RongIMClient.getInstance().switchToHumanMode(t.targetId, {
                            onSuccess: function() {},
                            onError: function() {}
                        });
                    }
                }
            }
            if (t.messageType == "TerminateMessage") {
                if (i.RongIMClient._memoryStore.custStore[t.targetId].sid != t.content.sid) {
                    return;
                }
            }
            var o = this;
            i.RongIMClient._dataAccessProvider.addMessage(t.conversationType, t.targetId, t, {
                onSuccess: function(u) {
                    o._onReceived(u);
                },
                onError: function(u) {
                    o._onReceived(t);
                }
            });
        };
        k.prototype.handleMessage = function(n) {
            if (!n) {
                return;
            }
            switch (n._name) {
              case "ConnAckMessage":
                d._client.handler.connectCallback.process(n.getStatus(), n.getUserId(), n.getTimestamp());
                break;

              case "PublishMessage":
                if (!n.getSyncMsg() && n.getQos() != 0) {
                    d._client.channel.writeAndFlush(new i.PubAckMessage(n.getMessageId()));
                }
                if (n.getSyncMsg() && !i.RongIMClient._memoryStore.global.WEB_XHR_POLLING) {
                    d._client.handler.syncMsgMap[n.getMessageId()] = n;
                } else {
                    d._client.handler.onReceived(n);
                }
                break;

              case "QueryAckMessage":
                if (n.getQos() != 0) {
                    d._client.channel.writeAndFlush(new i.QueryConMessage(n.getMessageId()));
                }
                var l = d._client.handler.map[n.getMessageId()];
                if (l) {
                    l.Callback.process(n.getStatus(), n.getData(), n.getDate(), l.Message);
                    delete d._client.handler.map[n.getMessageId()];
                }
                break;

              case "PubAckMessage":
                var m = d._client.handler.map[n.getMessageId()];
                if (m) {
                    m.Callback.process(n.getStatus() || 0, n.getMessageUId(), n.getTimestamp(), m.Message);
                    delete d._client.handler.map[n.getMessageId()];
                } else {
                    d._client.handler.onReceived(d._client.handler.syncMsgMap[n.messageId], n);
                    delete d._client.handler.syncMsgMap[n.getMessageId()];
                }
                break;

              case "PingRespMessage":
                d._client.pauseTimer();
                break;

              case "DisconnectMessage":
                d._client.channel.disconnect(n.getStatus());
                break;

              default:            }
        };
        return k;
    }();
    i.MessageHandler = h;
})(RongIMLib || (RongIMLib = {}));

var __extends = this && this.__extends || function(g, a) {
    for (var e in a) {
        if (a.hasOwnProperty(e)) {
            g[e] = a[e];
        }
    }
    function c() {
        this.constructor = g;
    }
    g.prototype = a === null ? Object.create(a) : (c.prototype = a.prototype, new c());
};

var RongIMLib;

(function(c) {
    var g = function() {
        function h(i) {
            this.timeout = null;
            this.onError = null;
            if (i && typeof i == "number") {
                this.timeoutMillis = i;
            } else {
                this.timeoutMillis = 3e4;
                this.onError = i;
            }
        }
        h.prototype.resumeTimer = function() {
            var i = this;
            if (this.timeoutMillis > 0 && !this.timeout) {
                this.timeout = setTimeout(function() {
                    i.readTimeOut(true);
                }, this.timeoutMillis);
            }
        };
        h.prototype.pauseTimer = function() {
            if (this.timeout) {
                clearTimeout(this.timeout);
                this.timeout = null;
            }
        };
        h.prototype.readTimeOut = function(i) {
            if (i && this.onError) {
                this.onError(c.ErrorCode.TIMEOUT);
            } else {
                this.pauseTimer();
            }
        };
        return h;
    }();
    c.MessageCallback = g;
    var e = function() {
        function h() {
            this.publicServiceList = [];
        }
        h.getInstance = function() {
            return new h();
        };
        h.prototype.pottingProfile = function(j) {
            var i;
            this.profile = new c.PublicServiceProfile();
            i = JSON.parse(j.extra);
            this.profile.isGlobal = i.isGlobal;
            this.profile.introduction = i.introduction;
            this.profile.menu = i.menu;
            this.profile.hasFollowed = i.follow;
            this.profile.publicServiceId = j.mpid;
            this.profile.name = j.name;
            this.profile.portraitUri = j.portraitUrl;
            this.profile.conversationType = j.type == "mc" ? c.ConversationType.APP_PUBLIC_SERVICE : c.ConversationType.PUBLIC_SERVICE;
            this.publicServiceList.push(this.profile);
        };
        h.prototype.mapping = function(l, i) {
            switch (i) {
              case "GetUserInfoOutput":
                var j = new c.UserInfo(l.userId, l.userName, l.userPortrait);
                return j;

              case "GetQNupTokenOutput":
                return {
                    deadline: c.MessageUtil.int64ToTimestamp(l.deadline),
                    token: l.token
                };

              case "GetQNdownloadUrlOutput":
                return {
                    downloadUrl: l.downloadUrl
                };

              case "CreateDiscussionOutput":
                return l.id;

              case "ChannelInfoOutput":
                var m = new c.Discussion();
                m.creatorId = l.adminUserId;
                m.id = l.channelId;
                m.memberIdList = l.firstTenUserIds;
                m.name = l.channelName;
                m.isOpen = l.openStatus;
                return m;

              case "GroupHashOutput":
                return l.result;

              case "QueryBlackListOutput":
                return l.userIds;

              case "SearchMpOutput":
              case "PullMpOutput":
                if (l.info) {
                    var k = this;
                    Array.forEach(l.info, function(n) {
                        setTimeout(k.pottingProfile(n), 100);
                    });
                }
                return this.publicServiceList;

              default:
                return l;
            }
        };
        return h;
    }();
    c.CallbackMapping = e;
    var b = function(i) {
        __extends(h, i);
        function h(k, j) {
            i.call(this, j);
            this._cb = k;
            this._timeout = j;
        }
        h.prototype.process = function(j, l, k, m) {
            this.readTimeOut();
            if (j == 0) {
                if (m) {
                    m.setSentStatus = j;
                }
                c.RongIMClient._cookieHelper.setItem(c.Bridge._client.userId, k);
                this._cb({
                    messageUId: l,
                    timestamp: k
                });
            } else {
                this._timeout(j);
            }
        };
        h.prototype.readTimeOut = function(j) {
            g.prototype.readTimeOut.call(this, j);
        };
        return h;
    }(g);
    c.PublishCallback = b;
    var a = function(i) {
        __extends(h, i);
        function h(k, j) {
            i.call(this, j);
            this._cb = k;
            this._timeout = j;
        }
        h.prototype.process = function(j, l, k, n) {
            this.readTimeOut();
            if (n && l && j == 0) {
                try {
                    l = e.getInstance().mapping(Modules[n].decode(l), n);
                } catch (m) {
                    this._timeout(c.ErrorCode.UNKNOWN);
                    return;
                }
                if ("GetUserInfoOutput" == n) {
                    c.Client.userInfoMapping[l.userId] = l;
                }
                this._cb(l);
            } else {
                j > 0 ? this._timeout(j) : this._cb(j);
            }
        };
        h.prototype.readTimeOut = function(j) {
            g.prototype.readTimeOut.call(this, j);
        };
        return h;
    }(g);
    c.QueryCallback = a;
    var d = function(i) {
        __extends(h, i);
        function h(l, k, j) {
            i.call(this, k);
            this._client = j;
            this._cb = l;
            this._timeout = k;
        }
        h.prototype.process = function(l, n, p) {
            this.readTimeOut();
            if (l == 0) {
                var q = c.RongIMClient._cookieHelper.getItem(c.RongIMClient._cookieHelper.getItemKey("navi"));
                var m = c.RongIMClient._cookieHelper.getItemKey("navi");
                var k = decodeURIComponent(q).split(",");
                if (!k[1]) {
                    q = encodeURIComponent(q) + n;
                    c.RongIMClient._cookieHelper.setItem(m, q);
                }
                if (c.RongIMClient._memoryStore.isUseWebSQLProvider) {
                    c.RongIMClient._dataAccessProvider.database.init(n);
                }
                this._client.userId = n;
                if (!c.RongIMClient.isNotPullMsg) {
                    this._client.syncTime();
                }
                if (this._client.reconnectObj.onSuccess) {
                    this._client.reconnectObj.onSuccess(n);
                    delete this._client.reconnectObj.onSuccess;
                } else {
                    var o = this;
                    setTimeout(function() {
                        o._cb(n);
                    }, 500);
                }
                c.Bridge._client.channel.socket.fire("StatusChanged", 0);
                if (!(new Date().getTime() - p)) {
                    c.RongIMClient._memoryStore.deltaTime = 0;
                } else {
                    c.RongIMClient._memoryStore.deltaTime = new Date().getTime() - p;
                }
            } else {
                if (l == 6) {
                    var j = {};
                    var o = this;
                    new c.Navigation().getServerEndpoint(this._client.token, this._client.appId, function() {
                        o._client.clearHeartbeat();
                        new c.Client(o._client.token, o._client.appId).__init.call(j, function() {
                            c.Transportations._TransportType == "websocket" && o._client.keepLive();
                        });
                        o._client.channel.socket.fire("StatusChanged", 2);
                    }, o._timeout, false);
                } else {
                    c.Bridge._client.channel.socket.socket._status = l;
                    if (this._client.reconnectObj.onError) {
                        this._client.reconnectObj.onError(l);
                        delete this._client.reconnectObj.onError;
                    } else {
                        this._timeout(l);
                    }
                }
            }
        };
        h.prototype.readTimeOut = function(j) {
            g.prototype.readTimeOut.call(this, j);
        };
        return h;
    }(g);
    c.ConnectAck = d;
})(RongIMLib || (RongIMLib = {}));

var RongIMLib;

(function(a) {
    var b = function() {
        function c() {
            window.getServerEndpoint = function(d) {
                a.RongIMClient._cookieHelper._host = c.Endpoint.host = d.server;
                c.Endpoint.userId = d.userId;
                var e = a.RongIMClient._cookieHelper.getItemKey("navi");
                e !== null && a.RongIMClient._cookieHelper.removeItem(e);
                a.RongIMClient._cookieHelper.setItem("navi" + md5(a.Bridge._client.token).slice(8, 16), d.server + "," + (d.userId || ""));
            };
        }
        c.prototype.connect = function(i, g, j) {
            var e = a.RongIMClient._cookieHelper.getItem("appId");
            if (e && e != i) {
                a.RongIMClient._cookieHelper.clearItem();
                a.RongIMClient._cookieHelper.setItem("appId", i);
            }
            if (!e) {
                a.RongIMClient._cookieHelper.setItem("appId", i);
            }
            var d = new a.Client(g, i);
            var h = this;
            this.getServerEndpoint(g, i, function() {
                d.connect(j);
            }, j.onError, true);
            return d;
        };
        c.prototype.getServerEndpoint = function(m, g, h, n, i) {
            if (i) {
                var k = md5(m).slice(8, 16), l = a.RongIMClient._cookieHelper.getItem(a.RongIMClient._cookieHelper.getItemKey("navi")), o = a.RongIMClient._cookieHelper.getItem("navi" + k);
                if (l == o && o !== null && a.RongIMClient._cookieHelper.getItem("rongSDK") == a.Transportations._TransportType) {
                    var j = decodeURIComponent(l).split(",");
                    setTimeout(function() {
                        a.RongIMClient._cookieHelper._host = c.Endpoint.host = j[0];
                        c.Endpoint.userId = j[1];
                        h();
                    }, 500);
                    return;
                }
            }
            var e = {
                "navUrl-Debug": a.MessageUtil.schemeArrs[a.RongIMClient.schemeType][0] + "://119.254.111.49:9100/",
                "navUrl-Release": a.MessageUtil.schemeArrs[a.RongIMClient.schemeType][0] + "://nav.cn.ronghub.com/"
            }, d = document.createElement("script");
            d.src = e["navUrl-Debug"] + (a.RongIMClient._memoryStore.global.WEB_XHR_POLLING ? "cometnavi.js" : "navi.js") + "?appId=" + g + "&token=" + encodeURIComponent(m) + "&callBack=getServerEndpoint&t=" + new Date().getTime();
            document.body.appendChild(d);
            d.onerror = function() {
                n(a.ConnectionState.TOKEN_INCORRECT);
            };
            if ("onload" in d) {
                d.onload = h;
            } else {
                d.onreadystatechange = function() {
                    d.readyState == "loaded" && h();
                };
            }
        };
        c.Endpoint = new Object();
        return c;
    }();
    a.Navigation = b;
})(RongIMLib || (RongIMLib = {}));

var RongIMLib;

(function(n) {
    var k = function() {
        function o(p) {
            this._name = "BaseMessage";
            this.lengthSize = 0;
            if (p instanceof n.Header) {
                this._header = p;
            } else {
                this._header = new n.Header(p, false, n.Qos.AT_MOST_ONCE, false);
            }
        }
        o.prototype.read = function(p, q) {
            this.readMessage(p, q);
        };
        o.prototype.write = function(r) {
            var p = new n.BinaryHelper();
            var q = p.convertStream(r);
            this._headerCode = this.getHeaderFlag();
            q.write(this._headerCode);
            this.writeMessage(q);
            return q;
        };
        o.prototype.getHeaderFlag = function() {
            return this._header.encode();
        };
        o.prototype.getLengthSize = function() {
            return this.lengthSize;
        };
        o.prototype.toBytes = function() {
            return this.write([]).getBytesArray();
        };
        o.prototype.isRetained = function() {
            return this._header.retain;
        };
        o.prototype.setRetained = function(p) {
            this._header.retain = p;
        };
        o.prototype.setQos = function(p) {
            this._header.qos = Object.prototype.toString.call(p) == "[object Object]" ? p : n.Qos[p];
        };
        o.prototype.setDup = function(p) {
            this._header.dup = p;
        };
        o.prototype.isDup = function() {
            return this._header.dup;
        };
        o.prototype.getType = function() {
            return this._header.type;
        };
        o.prototype.getQos = function() {
            return this._header.qos;
        };
        o.prototype.messageLength = function() {
            return 0;
        };
        o.prototype.writeMessage = function(p) {};
        o.prototype.readMessage = function(p, q) {};
        o.prototype.init = function(p) {
            var r, s, q = this;
            for (s in p) {
                if (!p.hasOwnProperty(s)) {
                    continue;
                }
                r = s.replace(/^\w/, function(t) {
                    var u = t.charCodeAt(0);
                    return "set" + (u >= 97 ? String.fromCharCode(u & ~32) : t);
                });
                if (r in q) {
                    if (s == "status") {
                        q[r](disconnectStatus[p[s]] ? disconnectStatus[p[s]] : p[s]);
                    } else {
                        q[r](p[s]);
                    }
                }
            }
        };
        return o;
    }();
    n.BaseMessage = k;
    var c = function(p) {
        __extends(o, p);
        function o(q) {
            p.call(this, arguments.length == 0 || arguments.length == 3 ? n.Type.CONNECT : arguments[0]);
            this._name = "ConnectMessage";
            this.CONNECT_HEADER_SIZE = 12;
            this.protocolId = "RCloud";
            this.binaryHelper = new n.BinaryHelper();
            this.protocolVersion = 3;
            switch (arguments.length) {
              case 0:
              case 1:
              case 3:
                if (!arguments[0] || arguments[0].length > 64) {
                    throw new Error("ConnectMessage:Client Id cannot be null and must be at most 64 characters long: " + arguments[0]);
                }
                this.clientId = arguments[0];
                this.cleanSession = arguments[1];
                this.keepAlive = arguments[2];
                break;
            }
        }
        o.prototype.messageLength = function() {
            var q = this.binaryHelper.toMQttString(this.clientId).length;
            q += this.binaryHelper.toMQttString(this.willTopic).length;
            q += this.binaryHelper.toMQttString(this.will).length;
            q += this.binaryHelper.toMQttString(this.appId).length;
            q += this.binaryHelper.toMQttString(this.token).length;
            return q + this.CONNECT_HEADER_SIZE;
        };
        o.prototype.readMessage = function(s) {
            this.protocolId = s.readUTF();
            this.protocolVersion = s.readByte();
            var r = s.readByte();
            this.hasAppId = (r & 128) > 0;
            this.hasToken = (r & 64) > 0;
            this.retainWill = (r & 32) > 0;
            this.willQos = r >> 3 & 3;
            this.hasWill = (r & 4) > 0;
            this.cleanSession = (r & 32) > 0;
            this.keepAlive = s.read() * 256 + s.read();
            this.clientId = s.readUTF();
            if (this.hasWill) {
                this.willTopic = s.readUTF();
                this.will = s.readUTF();
            }
            if (this.hasAppId) {
                try {
                    this.appId = s.readUTF();
                } catch (q) {
                    throw new Error(q);
                }
            }
            if (this.hasToken) {
                try {
                    this.token = s.readUTF();
                } catch (q) {
                    throw new Error(q);
                }
            }
            return s;
        };
        o.prototype.writeMessage = function(r) {
            var s = this.binaryHelper.convertStream(r);
            s.writeUTF(this.protocolId);
            s.write(this.protocolVersion);
            var q = this.cleanSession ? 2 : 0;
            q |= this.hasWill ? 4 : 0;
            q |= this.willQos ? this.willQos >> 3 : 0;
            q |= this.retainWill ? 32 : 0;
            q |= this.hasToken ? 64 : 0;
            q |= this.hasAppId ? 128 : 0;
            s.write(q);
            s.writeChar(this.keepAlive);
            s.writeUTF(this.clientId);
            if (this.hasWill) {
                s.writeUTF(this.willTopic);
                s.writeUTF(this.will);
            }
            if (this.hasAppId) {
                s.writeUTF(this.appId);
            }
            if (this.hasToken) {
                s.writeUTF(this.token);
            }
            return s;
        };
        return o;
    }(k);
    n.ConnectMessage = c;
    var m = function(o) {
        __extends(p, o);
        function p(r) {
            o.call(this, arguments.length == 0 ? n.Type.CONNACK : arguments.length == 1 ? arguments[0] instanceof n.Header ? arguments[0] : n.Type.CONNACK : null);
            this._name = "ConnAckMessage";
            this.MESSAGE_LENGTH = 2;
            this.binaryHelper = new n.BinaryHelper();
            var q = this;
            switch (arguments.length) {
              case 0:
              case 1:
                if (!(arguments[0] instanceof n.Header)) {
                    if (arguments[0] in n.ConnectionState) {
                        if (arguments[0] == null) {
                            throw new Error("ConnAckMessage:The status of ConnAskMessage can't be null");
                        }
                        q.setStatus(arguments[0]);
                    }
                }
                break;
            }
        }
        p.prototype.messageLength = function() {
            var q = this.MESSAGE_LENGTH;
            if (this.userId) {
                q += this.binaryHelper.toMQttString(this.userId).length;
            }
            return q;
        };
        p.prototype.readMessage = function(s, r) {
            s.read();
            var q = +s.read();
            if (q >= 0 && q <= 12) {
                this.setStatus(q);
            } else {
                throw new Error("Unsupported CONNACK code:" + q);
            }
            if (r > this.MESSAGE_LENGTH) {
                this.setUserId(s.readUTF());
                var u = s.readUTF();
                var t = s.readLong();
                this.setTimestamp(t);
            }
        };
        p.prototype.writeMessage = function(q) {
            var r = this.binaryHelper.convertStream(q);
            r.write(128);
            switch (+status) {
              case 0:
              case 1:
              case 2:
              case 5:
              case 6:
                r.write(+status);
                break;

              case 3:
              case 4:
                r.write(3);
                break;

              default:
                throw new Error("Unsupported CONNACK code:" + status);
            }
            if (this.userId) {
                r.writeUTF(this.userId);
            }
            return r;
        };
        p.prototype.setStatus = function(q) {
            this.status = q;
        };
        p.prototype.setUserId = function(q) {
            this.userId = q;
        };
        p.prototype.getStatus = function() {
            return this.status;
        };
        p.prototype.getUserId = function() {
            return this.userId;
        };
        p.prototype.setTimestamp = function(q) {
            this.timestrap = q;
        };
        p.prototype.getTimestamp = function() {
            return this.timestrap;
        };
        return p;
    }(k);
    n.ConnAckMessage = m;
    var h = function(p) {
        __extends(o, p);
        function o(q) {
            p.call(this, q instanceof n.Header ? q : n.Type.DISCONNECT);
            this._name = "DisconnectMessage";
            this.MESSAGE_LENGTH = 2;
            this.binaryHelper = new n.BinaryHelper();
            if (!(q instanceof n.Header)) {
                if (q in n.ConnectionStatus) {
                    this.status = q;
                }
            }
        }
        o.prototype.messageLength = function() {
            return this.MESSAGE_LENGTH;
        };
        o.prototype.readMessage = function(r) {
            r.read();
            var q = +r.read();
            if (q >= 0 && q <= 5) {
                this.setStatus(disconnectStatus[q] ? disconnectStatus[q] : q);
            } else {
                throw new Error("Unsupported CONNACK code:" + q);
            }
        };
        o.prototype.writeMessage = function(r) {
            var q = this.binaryHelper.convertStream(r);
            q.write(0);
            if (+status >= 1 && +status <= 3) {
                q.write(+status - 1);
            } else {
                throw new Error("Unsupported CONNACK code:" + status);
            }
        };
        o.prototype.setStatus = function(q) {
            this.status = q;
        };
        o.prototype.getStatus = function() {
            return this.status;
        };
        return o;
    }(k);
    n.DisconnectMessage = h;
    var d = function(p) {
        __extends(o, p);
        function o(q) {
            p.call(this, q && q instanceof n.Header ? q : n.Type.PINGREQ);
            this._name = "PingReqMessage";
        }
        return o;
    }(k);
    n.PingReqMessage = d;
    var e = function(o) {
        __extends(p, o);
        function p(q) {
            o.call(this, q && q instanceof n.Header ? q : n.Type.PINGRESP);
            this._name = "PingRespMessage";
        }
        return p;
    }(k);
    n.PingRespMessage = e;
    var l = function(o) {
        __extends(p, o);
        function p(q) {
            o.call(this, q);
            this._name = "RetryableMessage";
            this.binaryHelper = new n.BinaryHelper();
        }
        p.prototype.messageLength = function() {
            return 2;
        };
        p.prototype.writeMessage = function(u) {
            var s = this.binaryHelper.convertStream(u), q = this.getMessageId(), t = q & 255, r = (q & 65280) >> 8;
            s.write(r);
            s.write(t);
            return s;
        };
        p.prototype.readMessage = function(r, q) {
            var s = r.read() * 256 + r.read();
            this.setMessageId(parseInt(s, 10));
        };
        p.prototype.setMessageId = function(q) {
            this.messageId = q;
        };
        p.prototype.getMessageId = function() {
            return this.messageId;
        };
        return p;
    }(k);
    n.RetryableMessage = l;
    var b = function(o) {
        __extends(p, o);
        function p(q) {
            o.call(this, q instanceof n.Header ? q : n.Type.PUBACK);
            this.msgLen = 2;
            this.date = 0;
            this.millisecond = 0;
            this.timestamp = 0;
            this.binaryHelper = new n.BinaryHelper();
            this._name = "PubAckMessage";
            if (!(q instanceof n.Header)) {
                o.prototype.setMessageId.call(this, q);
            }
        }
        p.prototype.messageLength = function() {
            return this.msgLen;
        };
        p.prototype.writeMessage = function(r) {
            var q = this.binaryHelper.convertStream(r);
            l.prototype.writeMessage.call(this, q);
        };
        p.prototype.readMessage = function(r, q) {
            l.prototype.readMessage.call(this, r);
            this.date = r.readInt();
            this.status = r.read() * 256 + r.read();
            this.millisecond = r.read() * 256 + r.read();
            this.timestamp = this.date * 1e3 + this.millisecond;
            this.messageUId = r.readUTF();
        };
        p.prototype.setStatus = function(q) {
            this.status = q;
        };
        p.prototype.setTimestamp = function(q) {
            this.timestamp = q;
        };
        p.prototype.setMessageUId = function(q) {
            this.messageUId = q;
        };
        p.prototype.getStatus = function() {
            return this.status;
        };
        p.prototype.getDate = function() {
            return this.date;
        };
        p.prototype.getTimestamp = function() {
            return this.timestamp;
        };
        p.prototype.getMessageUId = function() {
            return this.messageUId;
        };
        return p;
    }(l);
    n.PubAckMessage = b;
    var g = function(o) {
        __extends(p, o);
        function p(s, q, r) {
            o.call(this, arguments.length == 1 && s instanceof n.Header ? s : arguments.length == 3 ? n.Type.PUBLISH : 0);
            this._name = "PublishMessage";
            this.binaryHelper = new n.BinaryHelper();
            this.syncMsg = false;
            if (arguments.length == 3) {
                this.topic = s;
                this.targetId = r;
                this.data = typeof q == "string" ? this.binaryHelper.toMQttString(q) : q;
            }
        }
        p.prototype.messageLength = function() {
            var q = 10;
            q += this.binaryHelper.toMQttString(this.topic).length;
            q += this.binaryHelper.toMQttString(this.targetId).length;
            q += this.data.length;
            return q;
        };
        p.prototype.writeMessage = function(r) {
            var q = this.binaryHelper.convertStream(r);
            q.writeUTF(this.topic);
            q.writeUTF(this.targetId);
            l.prototype.writeMessage.apply(this, arguments);
            q.write(this.data);
        };
        p.prototype.readMessage = function(r, q) {
            var s = 6;
            this.date = r.readInt();
            this.topic = r.readUTF();
            s += this.binaryHelper.toMQttString(this.topic).length;
            this.targetId = r.readUTF();
            s += this.binaryHelper.toMQttString(this.targetId).length;
            l.prototype.readMessage.apply(this, arguments);
            this.data = new Array(q - s);
            this.data = r.read(this.data);
        };
        p.prototype.setTopic = function(q) {
            this.topic = q;
        };
        p.prototype.setData = function(q) {
            this.data = q;
        };
        p.prototype.setTargetId = function(q) {
            this.targetId = q;
        };
        p.prototype.setDate = function(q) {
            this.date = q;
        };
        p.prototype.setSyncMsg = function(q) {
            this.syncMsg = q;
        };
        p.prototype.getSyncMsg = function() {
            return this.syncMsg;
        };
        p.prototype.getTopic = function() {
            return this.topic;
        };
        p.prototype.getData = function() {
            return this.data;
        };
        p.prototype.getTargetId = function() {
            return this.targetId;
        };
        p.prototype.getDate = function() {
            return this.date;
        };
        return p;
    }(l);
    n.PublishMessage = g;
    var j = function(p) {
        __extends(o, p);
        function o(s, q, r) {
            p.call(this, s instanceof n.Header ? s : arguments.length == 3 ? n.Type.QUERY : null);
            this.binaryHelper = new n.BinaryHelper();
            this._name = "QueryMessage";
            if (arguments.length == 3) {
                this.data = typeof q == "string" ? this.binaryHelper.toMQttString(q) : q;
                this.topic = s;
                this.targetId = r;
            }
        }
        o.prototype.messageLength = function() {
            var q = 0;
            q += this.binaryHelper.toMQttString(this.topic).length;
            q += this.binaryHelper.toMQttString(this.targetId).length;
            q += 2;
            q += this.data.length;
            return q;
        };
        o.prototype.writeMessage = function(r) {
            var q = this.binaryHelper.convertStream(r);
            q.writeUTF(this.topic);
            q.writeUTF(this.targetId);
            l.prototype.writeMessage.call(this, q);
            q.write(this.data);
        };
        o.prototype.readMessage = function(r, q) {
            var s = 0;
            this.topic = r.readUTF();
            this.targetId = r.readUTF();
            s += this.binaryHelper.toMQttString(this.topic).length;
            s += this.binaryHelper.toMQttString(this.targetId).length;
            this.readMessage.apply(this, arguments);
            s += 2;
            this.data = new Array(q - s);
            r.read(this.data);
        };
        o.prototype.setTopic = function(q) {
            this.topic = q;
        };
        o.prototype.setData = function(q) {
            this.data = q;
        };
        o.prototype.setTargetId = function(q) {
            this.targetId = q;
        };
        o.prototype.getTopic = function() {
            return this.topic;
        };
        o.prototype.getData = function() {
            return this.data;
        };
        o.prototype.getTargetId = function() {
            return this.targetId;
        };
        return o;
    }(l);
    n.QueryMessage = j;
    var i = function(p) {
        __extends(o, p);
        function o(q) {
            p.call(this, q instanceof n.Header ? q : n.Type.QUERYCON);
            this._name = "QueryConMessage";
            if (!(q instanceof n.Header)) {
                p.prototype.setMessageId.call(this, q);
            }
        }
        return o;
    }(l);
    n.QueryConMessage = i;
    var a = function(o) {
        __extends(p, o);
        function p(q) {
            o.call(this, q);
            this._name = "QueryAckMessage";
            this.binaryHelper = new n.BinaryHelper();
        }
        p.prototype.readMessage = function(r, q) {
            l.prototype.readMessage.call(this, r);
            this.date = r.readInt();
            this.setStatus(r.read() * 256 + r.read());
            if (q > 0) {
                this.data = new Array(q - 8);
                this.data = r.read(this.data);
            }
        };
        p.prototype.getData = function() {
            return this.data;
        };
        p.prototype.getStatus = function() {
            return this.status;
        };
        p.prototype.getDate = function() {
            return this.date;
        };
        p.prototype.setDate = function(q) {
            this.date = q;
        };
        p.prototype.setStatus = function(q) {
            this.status = q;
        };
        p.prototype.setData = function(q) {
            this.data = q;
        };
        return p;
    }(l);
    n.QueryAckMessage = a;
})(RongIMLib || (RongIMLib = {}));

var RongIMLib;

(function(d) {
    var e = function() {
        function h(j) {
            var i = new d.BinaryHelper();
            this.out = i.convertStream(j);
        }
        h.prototype.writeMessage = function(i) {
            if (i instanceof d.BaseMessage) {
                i.write(this.out);
            }
        };
        return h;
    }();
    d.MessageOutputStream = e;
    var b = function() {
        function h(j, i) {
            if (!i) {
                var k = new d.BinaryHelper().convertStream(j);
                this.flags = k.readByte();
                this._in = k;
            } else {
                this.flags = j.headerCode;
            }
            this.header = new d.Header(this.flags);
            this.isPolling = i;
            this.In = j;
        }
        h.prototype.readMessage = function() {
            switch (this.header.getType()) {
              case 1:
                this.msg = new d.ConnectMessage(this.header);
                break;

              case 2:
                this.msg = new d.ConnAckMessage(this.header);
                break;

              case 3:
                this.msg = new d.PublishMessage(this.header);
                this.msg.setSyncMsg(this.header.getSyncMsg());
                break;

              case 4:
                this.msg = new d.PubAckMessage(this.header);
                break;

              case 5:
                this.msg = new d.QueryMessage(this.header);
                break;

              case 6:
                this.msg = new d.QueryAckMessage(this.header);
                break;

              case 7:
                this.msg = new d.QueryConMessage(this.header);
                break;

              case 9:
              case 11:
              case 13:
                this.msg = new d.PingRespMessage(this.header);
                break;

              case 8:
              case 10:
              case 12:
                this.msg = new d.PingReqMessage(this.header);
                break;

              case 14:
                this.msg = new d.DisconnectMessage(this.header);
                break;

              default:
                throw new Error("No support for deserializing " + this.header.getType() + " messages");
            }
            if (this.isPolling) {
                this.msg.init(this.In);
            } else {
                this.msg.read(this._in, this.In.length - 1);
            }
            return this.msg;
        };
        return h;
    }();
    d.MessageInputStream = b;
    var g = function() {
        function h(i, j, k, l) {
            this.retain = false;
            this.qos = d.Qos.AT_LEAST_ONCE;
            this.dup = false;
            this.syncMsg = false;
            if (i && +i == i && arguments.length == 1) {
                this.retain = (i & 1) > 0;
                this.qos = (i & 6) >> 1;
                this.dup = (i & 8) > 0;
                this.type = i >> 4 & 15;
                this.syncMsg = (i & 8) == 8;
            } else {
                this.type = i;
                this.retain = j;
                this.qos = k;
                this.dup = l;
            }
        }
        h.prototype.getSyncMsg = function() {
            return this.syncMsg;
        };
        h.prototype.getType = function() {
            return this.type;
        };
        h.prototype.encode = function() {
            var i = this;
            switch (this.qos) {
              case d.Qos[0]:
                i.qos = d.Qos.AT_MOST_ONCE;
                break;

              case d.Qos[1]:
                i.qos = d.Qos.AT_LEAST_ONCE;
                break;

              case d.Qos[2]:
                i.qos = d.Qos.EXACTLY_ONCE;
                break;

              case d.Qos[3]:
                i.qos = d.Qos.DEFAULT;
                break;
            }
            var j = this.type << 4;
            j |= this.retain ? 1 : 0;
            j |= this.qos << 1;
            j |= this.dup ? 8 : 0;
            return j;
        };
        h.prototype.toString = function() {
            return "Header [type=" + this.type + ",retain=" + this.retain + ",qos=" + this.qos + ",dup=" + this.dup + "]";
        };
        return h;
    }();
    d.Header = g;
    var c = function() {
        function h() {}
        h.prototype.writeUTF = function(p, m) {
            var k = [], o = 0;
            for (var l = 0, j = p.length; l < j; l++) {
                var n = p.charCodeAt(l);
                if (n >= 0 && n <= 127) {
                    o += 1;
                    k.push(n);
                } else {
                    if (n >= 128 && n <= 2047) {
                        o += 2;
                        k.push(192 | 31 & n >> 6);
                        k.push(128 | 63 & n);
                    } else {
                        if (n >= 2048 && n <= 65535) {
                            o += 3;
                            k.push(224 | 15 & n >> 12);
                            k.push(128 | 63 & n >> 6);
                            k.push(128 | 63 & n);
                        }
                    }
                }
            }
            for (var l = 0, j = k.length; l < j; l++) {
                if (k[l] > 255) {
                    k[l] &= 255;
                }
            }
            if (m) {
                return k;
            }
            if (o <= 255) {
                return [ 0, o ].concat(k);
            } else {
                return [ o >> 8, o & 255 ].concat(k);
            }
        };
        h.prototype.readUTF = function(m) {
            if (Object.prototype.toString.call(m) == "[object String]") {
                return m;
            }
            var j = "", o = m;
            for (var k = 0, n = o.length; k < n; k++) {
                if (o[k] < 0) {
                    o[k] += 256;
                }
                var l = o[k].toString(2), r = l.match(/^1+?(?=0)/);
                if (r && l.length == 8) {
                    var p = r[0].length, q = o[k].toString(2).slice(7 - p);
                    for (var s = 1; s < p; s++) {
                        q += o[s + k].toString(2).slice(2);
                    }
                    j += String.fromCharCode(parseInt(q, 2));
                    k += p - 1;
                } else {
                    j += String.fromCharCode(o[k]);
                }
            }
            return j;
        };
        h.prototype.convertStream = function(i) {
            if (i instanceof a) {
                return i;
            } else {
                return new a(i);
            }
        };
        h.prototype.toMQttString = function(i) {
            return this.writeUTF(i);
        };
        return h;
    }();
    d.BinaryHelper = c;
    var a = function() {
        function h(i) {
            this.position = 0;
            this.writen = 0;
            this.poolLen = 0;
            this.binaryHelper = new c();
            this.pool = i;
            this.poolLen = i.length;
        }
        h.prototype.check = function() {
            return this.position >= this.pool.length;
        };
        h.prototype.readInt = function() {
            if (this.check()) {
                return -1;
            }
            var j = "";
            for (var l = 0; l < 4; l++) {
                var k = this.pool[this.position++].toString(16);
                if (k.length == 1) {
                    k = "0" + k;
                }
                j += k.toString(16);
            }
            return parseInt(j, 16);
        };
        h.prototype.readLong = function() {
            if (this.check()) {
                return -1;
            }
            var j = "";
            for (var l = 0; l < 8; l++) {
                var k = this.pool[this.position++].toString(16);
                if (k.length == 1) {
                    k = "0" + k;
                }
                j += k;
            }
            return parseInt(j, 16);
        };
        h.prototype.readTimestamp = function() {
            if (this.check()) {
                return -1;
            }
            var j = "";
            for (var k = 0; k < 8; k++) {
                j += this.pool[this.position++].toString(16);
            }
            j = j.substring(2, 8);
            return parseInt(j, 16);
        };
        h.prototype.readUTF = function() {
            if (this.check()) {
                return -1;
            }
            var i = this.readByte() << 8 | this.readByte();
            return this.binaryHelper.readUTF(this.pool.subarray(this.position, this.position += i));
        };
        h.prototype.readByte = function() {
            if (this.check()) {
                return -1;
            }
            var i = this.pool[this.position++];
            if (i > 255) {
                i &= 255;
            }
            return i;
        };
        h.prototype.read = function(i) {
            if (i) {
                return this.pool.subarray(this.position, this.poolLen);
            } else {
                return this.readByte();
            }
        };
        h.prototype.write = function(j) {
            var i = j;
            if (Object.prototype.toString.call(i).toLowerCase() == "[object array]") {
                [].push.apply(this.pool, i);
            } else {
                if (+i == i) {
                    if (i > 255) {
                        i &= 255;
                    }
                    this.pool.push(i);
                    this.writen++;
                }
            }
            return i;
        };
        h.prototype.writeChar = function(i) {
            if (+i != i) {
                throw new Error("writeChar:arguments type is error");
            }
            this.write(i >> 8 & 255);
            this.write(i & 255);
            this.writen += 2;
        };
        h.prototype.writeUTF = function(j) {
            var i = this.binaryHelper.writeUTF(j);
            [].push.apply(this.pool, i);
            this.writen += i.length;
        };
        h.prototype.toComplements = function() {
            var k = this.pool;
            for (var j = 0; j < this.poolLen; j++) {
                if (k[j] > 128) {
                    k[j] -= 256;
                }
            }
            return k;
        };
        h.prototype.getBytesArray = function(i) {
            if (i) {
                return this.toComplements();
            }
            return this.pool;
        };
        return h;
    }();
    d.RongIMStream = a;
})(RongIMLib || (RongIMLib = {}));

var RongIMLib;

(function(a) {
    var b = function() {
        function c(d) {
            this.connected = false;
            this.isClose = false;
            this.queue = [];
            this.empty = new Function();
            this._socket = d;
            return this;
        }
        c.prototype.createTransport = function(d, e) {
            if (!d) {
                throw new Error("URL can't be empty");
            }
            this.url = d;
            this.socket = new WebSocket(a.MessageUtil.schemeArrs[a.RongIMClient.schemeType][1] + "://" + d);
            this.socket.binaryType = "arraybuffer";
            this.addEvent();
            return this.socket;
        };
        c.prototype.send = function(d) {
            if (!this.connected && !this.isClose) {
                this.queue.push(d);
                return;
            }
            if (this.isClose) {
                throw new Error("The Connection is closed,Please open the Connection!!!");
            }
            var h = new a.RongIMStream([]), g = new a.MessageOutputStream(h);
            g.writeMessage(d);
            var e = h.getBytesArray(true);
            var i = new Int8Array(e);
            this.socket.send(i.buffer);
            return this;
        };
        c.prototype.onData = function(d) {
            if (a.MessageUtil.isArray(d)) {
                this._socket.onMessage(new a.MessageInputStream(d).readMessage());
            } else {
                this._socket.onMessage(new a.MessageInputStream(a.MessageUtil.ArrayFormInput(d)).readMessage());
            }
            return "";
        };
        c.prototype.onClose = function(e) {
            var d = this;
            d.isClose = true;
            d.socket = this.empty;
            a.Bridge._client.clearHeartbeat();
            if (e.code == 1006 && !this._status) {
                d._socket.fire("StatusChanged", a.ConnectionStatus.NETWORK_UNAVAILABLE);
            } else {
                d._status = 0;
            }
        };
        c.prototype.onError = function(d) {
            console.log(d);
            throw new Error(d);
        };
        c.prototype.addEvent = function() {
            var d = this;
            d.socket.onopen = function() {
                d.connected = true;
                d.isClose = false;
                d.doQueue();
                d._socket.fire("connect");
            };
            d.socket.onmessage = function(e) {
                if (typeof e.data == "string") {
                    d.onData(e.data.split(","));
                } else {
                    d.onData(e.data);
                }
            };
            d.socket.onerror = function(e) {
                d.onError(e);
            };
            d.socket.onclose = function(e) {
                d.onClose(e);
            };
        };
        c.prototype.doQueue = function() {
            var e = this;
            for (var g = 0, d = e.queue.length; g < d; g++) {
                e.send(e.queue[g]);
            }
        };
        c.prototype.disconnect = function(d) {
            var e = this;
            if (e.socket.readyState) {
                e.isClose = true;
                if (d) {
                    e._status = d;
                }
                this.socket.close();
            }
        };
        c.prototype.reconnect = function() {
            this.disconnect();
            this.createTransport(this.url);
        };
        return c;
    }();
    a.SocketTransportation = b;
})(RongIMLib || (RongIMLib = {}));

var RongIMLib;

(function(b) {
    var a = function() {
        function c(d) {
            this.empty = new Function();
            this.connected = false;
            this.pid = +new Date() + Math.random() + "";
            this.queue = [];
            this.socket = d;
            return this;
        }
        c.prototype.createTransport = function(e, h) {
            if (!e) {
                throw new Error("Url is empty,Please check it!");
            }
            this.url = e;
            var d = b.RongIMClient._cookieHelper.getItem(b.Navigation.Endpoint.userId + "sId"), g = this;
            if (d) {
                setTimeout(function() {
                    g.onSuccess('{"status":0,"userId":"' + b.Navigation.Endpoint.userId + '","headerCode":32,"messageId":0,"sessionid":"' + d + '"}');
                    g.connected = true;
                }, 500);
                return this;
            }
            this.getRequest(e, true);
            return this;
        };
        c.prototype.requestFactory = function(e, h, d) {
            var g = this.XmlHttpRequest();
            if (d) {
                g.multipart = true;
            }
            g.timeout = 6e4;
            g.open(h || "GET", b.MessageUtil.schemeArrs[b.RongIMClient.schemeType][0] + "://" + e);
            if (h == "POST" && "setRequestHeader" in g) {
                g.setRequestHeader("Content-type", "application/x-www-form-urlencoded; charset=utf-8");
            }
            return g;
        };
        c.prototype.getRequest = function(d, g) {
            var e = this;
            e.xhr = this.requestFactory(d + "&pid=" + encodeURIComponent(e.pid), "GET");
            if ("onload" in e.xhr) {
                e.xhr.onload = function() {
                    e.xhr.onload = e.empty;
                    if (this.responseText == "lost params") {
                        e.onError();
                    } else {
                        e.onSuccess(this.responseText, g);
                    }
                };
                e.xhr.onerror = function() {
                    e.disconnect();
                };
            } else {
                e.xhr.onreadystatechange = function() {
                    if (e.xhr.readyState == 4) {
                        e.xhr.onreadystatechange = e.empty;
                        if (/^(200|202)$/.test(e.xhr.status)) {
                            e.onSuccess(e.xhr.responseText, g);
                        } else {
                            if (/^(400|403)$/.test(e.xhr.status)) {
                                e.onError();
                            } else {
                                e.disconnect();
                            }
                        }
                    }
                };
            }
            e.xhr.send();
        };
        c.prototype.send = function(e) {
            var d = this;
            this.sendxhr = this.requestFactory(b.Navigation.Endpoint.host + "/websocket" + e.url + "&pid=" + encodeURIComponent(d.pid), "POST");
            if ("onload" in d.sendxhr) {
                d.sendxhr.onload = function() {
                    d.sendxhr.onload = d.empty;
                    d.onData(d.sendxhr.responseText);
                };
                d.sendxhr.onerror = function() {
                    d.sendxhr.onerror = d.empty;
                };
            } else {
                d.sendxhr.onreadystatechange = function() {
                    if (d.sendxhr.readyState == 4) {
                        this.onreadystatechange = this.empty;
                        if (/^(202|200)$/.test(d.sendxhr.status)) {
                            d.onData(d.sendxhr.responseText);
                        }
                    }
                };
            }
            d.sendxhr.send(JSON.stringify(e.data));
        };
        c.prototype.onData = function(e, h) {
            if (!e || e == "lost params") {
                return;
            }
            var d = this, g = JSON.parse(e);
            if (g.userId) {
                b.Navigation.Endpoint.userId = g.userId;
            }
            if (h) {
                b.RongIMClient._cookieHelper.setItem(b.Navigation.Endpoint.userId + "sId", h);
            }
            if (!b.MessageUtil.isArray(g)) {
                g = [ g ];
            }
            Array.forEach(g, function(i) {
                d.socket.fire("message", new b.MessageInputStream(i, true).readMessage());
            });
            return "";
        };
        c.prototype.XmlHttpRequest = function() {
            var d = typeof XMLHttpRequest !== "undefined" && "withCredentials" in new XMLHttpRequest(), e = this;
            if ("undefined" != typeof XMLHttpRequest && d) {
                return new XMLHttpRequest();
            } else {
                if ("undefined" != typeof XDomainRequest) {
                    return new XDomainRequest();
                } else {
                    return new ActiveXObject("Microsoft.XMLHTTP");
                }
            }
        };
        c.prototype.onClose = function() {
            if (this.xhr) {
                if (this.xhr.onload) {
                    this.xhr.onreadystatechange = this.xhr.onload = this.empty;
                } else {
                    this.xhr.onreadystatechange = this.empty;
                }
                this.xhr.abort();
                this.xhr = null;
            }
            if (this.sendxhr) {
                if (this.sendxhr.onload) {
                    this.sendxhr.onreadystatechange = this.sendxhr.onload = this.empty;
                } else {
                    this.sendxhr.onreadystatechange = this.empty;
                }
                this.sendxhr.abort();
                this.sendxhr = null;
            }
        };
        c.prototype.disconnect = function() {
            b.RongIMClient._cookieHelper.removeItem(b.Navigation.Endpoint.userId + "sId");
            b.RongIMClient._cookieHelper.removeItem(b.Navigation.Endpoint.userId + "msgId");
            this.onClose();
        };
        c.prototype.reconnect = function() {
            this.disconnect();
            this.createTransport(this.url);
        };
        c.prototype.onSuccess = function(e, g) {
            var d = e.match(/"sessionid":"\S+?(?=")/);
            this.onData(e, d ? d[0].slice(13) : 0);
            if (/"headerCode":-32,/.test(e)) {
                b.RongIMClient._cookieHelper.removeItem(b.Navigation.Endpoint.userId + "sId");
                b.RongIMClient._cookieHelper.removeItem(b.Navigation.Endpoint.userId + "msgId");
                return;
            }
            this.getRequest(b.Navigation.Endpoint.host + "/pullmsg.js?sessionid=" + b.RongIMClient._cookieHelper.getItem(b.Navigation.Endpoint.userId + "sId") + "&timestrap=" + encodeURIComponent(new Date().getTime() + Math.random() + ""));
            this.connected = true;
            g && this.socket.fire("connect");
        };
        c.prototype.onError = function() {
            b.RongIMClient._cookieHelper.removeItem(b.Navigation.Endpoint.userId + "sId");
            b.RongIMClient._cookieHelper.removeItem(b.Navigation.Endpoint.userId + "msgId");
            this.onClose();
            this.connected = false;
            this.socket.fire("disconnect");
        };
        return c;
    }();
    b.PollingTransportation = a;
})(RongIMLib || (RongIMLib = {}));

var typeMapping = {
    "RC:TxtMsg": "TextMessage",
    "RC:ImgMsg": "ImageMessage",
    "RC:VcMsg": "VoiceMessage",
    "RC:ImgTextMsg": "RichContentMessage",
    "RC:LBSMsg": "LocationMessage",
    "RC:InfoNtf": "InformationNotificationMessage",
    "RC:ContactNtf": "ContactNotificationMessage",
    "RC:ProfileNtf": "ProfileNotificationMessage",
    "RC:CmdNtf": "CommandNotificationMessage",
    "RC:DizNtf": "DiscussionNotificationMessage",
    "RC:CmdMsg": "CommandMessage",
    "RC:TypSts": "TypingStatusMessage",
    "RC:CsChaR": "ChangeModeResponseMessage",
    "RC:CsHsR": "HandShakeResponseMessage",
    "RC:CsEnd": "TerminateMessage",
    "RC:CsSp": "SuspendMessage",
    "RC:CsUpdate": "CustomerStatusUpdateMessage",
    "RC:ReadNtf": "ReadReceiptMessage"
}, registerMessageTypeMapping = {}, HistoryMsgType = {
    4: "qryCMsg",
    2: "qryDMsg",
    3: "qryGMsg",
    1: "qryPMsg",
    6: "qrySMsg",
    7: "qryPMsg",
    8: "qryPMsg",
    5: "qryPMsg"
}, disconnectStatus = {
    1: 6
};

var RongIMLib;

(function(RongIMLib) {
    var Transportations = function() {
        function Transportations() {}
        Transportations._TransportType = RongIMLib.Socket.WEBSOCKET;
        return Transportations;
    }();
    RongIMLib.Transportations = Transportations;
    var PublicServiceMap = function() {
        function PublicServiceMap() {
            this.publicServiceList = [];
        }
        PublicServiceMap.prototype.get = function(publicServiceType, publicServiceId) {
            for (var i = 0, len = this.publicServiceList.length; i < len; i++) {
                if (this.publicServiceList[i].conversationType == publicServiceType && publicServiceId == this.publicServiceList[i].publicServiceId) {
                    return this.publicServiceList[i];
                }
            }
        };
        PublicServiceMap.prototype.add = function(publicServiceProfile) {
            var isAdd = true, me = this;
            for (var i = 0, len = this.publicServiceList.length; i < len; i++) {
                if (me.publicServiceList[i].conversationType == publicServiceProfile.conversationType && publicServiceProfile.publicServiceId == me.publicServiceList[i].publicServiceId) {
                    this.publicServiceList.unshift(this.publicServiceList.splice(i, 1)[0]);
                    isAdd = false;
                    break;
                }
            }
            if (isAdd) {
                this.publicServiceList.unshift(publicServiceProfile);
            }
        };
        PublicServiceMap.prototype.replace = function(publicServiceProfile) {
            var me = this;
            for (var i = 0, len = this.publicServiceList.length; i < len; i++) {
                if (me.publicServiceList[i].conversationType == publicServiceProfile.conversationType && publicServiceProfile.publicServiceId == me.publicServiceList[i].publicServiceId) {
                    me.publicServiceList.splice(i, 1, publicServiceProfile);
                    break;
                }
            }
        };
        PublicServiceMap.prototype.remove = function(conversationType, publicServiceId) {
            var me = this;
            for (var i = 0, len = this.publicServiceList.length; i < len; i++) {
                if (me.publicServiceList[i].conversationType == conversationType && publicServiceId == me.publicServiceList[i].publicServiceId) {
                    this.publicServiceList.splice(i, 1);
                    break;
                }
            }
        };
        return PublicServiceMap;
    }();
    RongIMLib.PublicServiceMap = PublicServiceMap;
    var ConversationMap = function() {
        function ConversationMap() {
            this.conversationList = [];
        }
        ConversationMap.prototype.get = function(conversavtionType, targetId) {
            for (var i = 0, len = this.conversationList.length; i < len; i++) {
                if (this.conversationList[i].conversationType == conversavtionType && this.conversationList[i].targetId == targetId) {
                    return this.conversationList[i];
                }
            }
            return null;
        };
        ConversationMap.prototype.add = function(conversation) {
            var isAdd = true;
            for (var i = 0, len = this.conversationList.length; i < len; i++) {
                if (this.conversationList[i].conversationType === conversation.conversationType && this.conversationList[i].targetId === conversation.targetId) {
                    this.conversationList.unshift(this.conversationList.splice(i, 1)[0]);
                    isAdd = false;
                    break;
                }
            }
            if (isAdd) {
                this.conversationList.unshift(conversation);
            }
        };
        ConversationMap.prototype.replace = function(conversation) {
            for (var i = 0, len = this.conversationList.length; i < len; i++) {
                if (this.conversationList[i].conversationType === conversation.conversationType && this.conversationList[i].targetId === conversation.targetId) {
                    this.conversationList.splice(i, 1, conversation);
                    break;
                }
            }
        };
        ConversationMap.prototype.remove = function(conversation) {
            for (var i = 0, len = this.conversationList.length; i < len; i++) {
                if (this.conversationList[i].conversationType === conversation.conversationType && this.conversationList[i].targetId === conversation.targetId) {
                    this.conversationList.splice(i, 1);
                    break;
                }
            }
        };
        return ConversationMap;
    }();
    RongIMLib.ConversationMap = ConversationMap;
    var MessageUtil = function() {
        function MessageUtil() {}
        MessageUtil.supportLargeStorage = function() {
            if (window.localStorage) {
                return true;
            } else {
                return false;
            }
        };
        MessageUtil.checkStorageSize = function() {
            return JSON.stringify(localStorage).length < 468e4;
        };
        MessageUtil.ArrayForm = function(typearray) {
            if (Object.prototype.toString.call(typearray) == "[object ArrayBuffer]") {
                var arr = new Int8Array(typearray);
                return [].slice.call(arr);
            }
            return typearray;
        };
        MessageUtil.ArrayFormInput = function(typearray) {
            if (Object.prototype.toString.call(typearray) == "[object ArrayBuffer]") {
                var arr = new Uint8Array(typearray);
                return arr;
            }
            return typearray;
        };
        MessageUtil.indexOf = function(arr, item, from) {
            for (var l = arr.length, i = from < 0 ? Math.max(0, +from) : from || 0; i < l; i++) {
                if (arr[i] == item) {
                    return i;
                }
            }
            return -1;
        };
        MessageUtil.isArray = function(obj) {
            return Object.prototype.toString.call(obj) == "[object Array]";
        };
        MessageUtil.forEach = function(arr, func) {
            if ([].forEach) {
                return function(arr, func) {
                    [].forEach.call(arr, func);
                };
            } else {
                return function(arr, func) {
                    for (var i = 0; i < arr.length; i++) {
                        func.call(arr, arr[i], i, arr);
                    }
                };
            }
        };
        MessageUtil.remove = function(array, func) {
            for (var i = 0, len = array.length; i < len; i++) {
                if (func(array[i])) {
                    return array.splice(i, 1)[0];
                }
            }
            return null;
        };
        MessageUtil.int64ToTimestamp = function(obj, isDate) {
            if (obj.low === undefined) {
                return obj;
            }
            var low = obj.low;
            if (low < 0) {
                low += 4294967295 + 1;
            }
            low = low.toString(16);
            var timestamp = parseInt(obj.high.toString(16) + "00000000".replace(new RegExp("0{" + low.length + "}$"), low), 16);
            if (isDate) {
                return new Date(timestamp);
            }
            return timestamp;
        };
        MessageUtil.messageParser = function(entity, onReceived) {
            var message = new RongIMLib.Message(), content = entity.content, de, objectName = entity.classname, val, isUseDef = false;
            try {
                if (RongIMLib.RongIMClient._memoryStore.global.WEB_XHR_POLLING) {
                    val = new RongIMLib.BinaryHelper().readUTF(content.offset ? MessageUtil.ArrayForm(content.buffer).slice(content.offset, content.limit) : content);
                    de = JSON.parse(val);
                } else {
                    val = new RongIMLib.BinaryHelper().readUTF(content.offset ? MessageUtil.ArrayFormInput(content.buffer).subarray(content.offset, content.limit) : content);
                    de = JSON.parse(val);
                }
            } catch (ex) {
                de = val;
                isUseDef = true;
            }
            if (objectName in typeMapping) {
                var str = "new RongIMLib." + typeMapping[objectName] + "(de)";
                message.content = eval(str);
                message.messageType = typeMapping[objectName];
            } else {
                if (objectName in registerMessageTypeMapping) {
                    var str = "new RongIMLib.RongIMClient.RegisterMessage." + registerMessageTypeMapping[objectName] + "(de)";
                    if (isUseDef) {
                        message.content = eval(str).decode(de);
                    } else {
                        message.content = eval(str);
                    }
                    message.messageType = registerMessageTypeMapping[objectName];
                } else {
                    message.content = new RongIMLib.UnknownMessage({
                        content: de,
                        objectName: objectName
                    });
                    message.messageType = "UnknownMessage";
                }
            }
            message.sentTime = MessageUtil.int64ToTimestamp(entity.dataTime);
            message.senderUserId = entity.fromUserId;
            message.conversationType = entity.type;
            if (entity.fromUserId == RongIMLib.Bridge._client.userId) {
                message.targetId = entity.groupId;
            } else {
                message.targetId = /^[234]$/.test(entity.type || entity.getType()) ? entity.groupId : message.senderUserId;
            }
            if (entity.direction == 1) {
                message.messageDirection = RongIMLib.MessageDirection.SEND;
                message.senderUserId = RongIMLib.Bridge._client.userId;
            } else {
                if (message.senderUserId == RongIMLib.Bridge._client.userId) {
                    message.messageDirection = RongIMLib.MessageDirection.SEND;
                } else {
                    message.messageDirection = RongIMLib.MessageDirection.RECEIVE;
                }
            }
            if ((entity.status & 2) == 2) {
                message.receivedStatus = RongIMLib.ReceivedStatus.RETRIEVED;
            }
            message.messageUId = entity.msgId;
            message.receivedTime = new Date().getTime();
            message.messageId = message.conversationType + "_" + ~~(Math.random() * 16777215);
            message.objectName = objectName;
            return message;
        };
        MessageUtil.schemeArrs = [ [ "http", "ws" ], [ "https", "wss" ] ];
        MessageUtil.sign = {
            converNum: 1,
            msgNum: 1,
            isMsgStart: true,
            isConvStart: true
        };
        return MessageUtil;
    }();
    RongIMLib.MessageUtil = MessageUtil;
    var MessageIdHandler = function() {
        function MessageIdHandler() {}
        MessageIdHandler.init = function() {
            this.messageId = +(RongIMLib.RongIMClient._cookieHelper.getItem(RongIMLib.Navigation.Endpoint.userId + "msgId") || RongIMLib.RongIMClient._cookieHelper.setItem(RongIMLib.Navigation.Endpoint.userId + "msgId", 0) || 0);
        };
        MessageIdHandler.messageIdPlus = function(method) {
            this.isXHR && this.init();
            if (this.messageId >= 65535) {
                method();
                return false;
            }
            this.messageId++;
            this.isXHR && RongIMLib.RongIMClient._cookieHelper.setItem(RongIMLib.Navigation.Endpoint.userId + "msgId", this.messageId);
            return this.messageId;
        };
        MessageIdHandler.clearMessageId = function() {
            this.messageId = 0;
            this.isXHR && RongIMLib.RongIMClient._cookieHelper.setItem(RongIMLib.Navigation.Endpoint.userId + "msgId", this.messageId);
        };
        MessageIdHandler.getMessageId = function() {
            this.isXHR && this.init();
            return this.messageId;
        };
        MessageIdHandler.messageId = 0;
        MessageIdHandler.isXHR = window.WEB_XHR_POLLING;
        return MessageIdHandler;
    }();
    RongIMLib.MessageIdHandler = MessageIdHandler;
    var CheckParam = function() {
        function CheckParam() {}
        CheckParam.getInstance = function() {
            return new CheckParam();
        };
        CheckParam.prototype.check = function(f, position, d) {
            var c = arguments.callee.caller;
            if ("_client" in RongIMLib.Bridge || d) {
                for (var g = 0, e = c.arguments.length; g < e; g++) {
                    if (!new RegExp(this.getType(c.arguments[g])).test(f[g])) {
                        throw new Error("The index of " + g + " parameter was wrong type " + this.getType(c.arguments[g]) + " [" + f[g] + "] -> position:" + position);
                    }
                }
            } else {
                throw new Error("The parameter is incorrect or was not yet instantiated RongIMClient -> position:" + position);
            }
        };
        CheckParam.prototype.getType = function(str) {
            var temp = Object.prototype.toString.call(str).toLowerCase();
            return temp.slice(8, temp.length - 1);
        };
        return CheckParam;
    }();
    RongIMLib.CheckParam = CheckParam;
    var LimitableMap = function() {
        function LimitableMap(limit) {
            this.map = {};
            this.keys = [];
            this.limit = limit || 10;
        }
        LimitableMap.prototype.set = function(key, value) {
            if (this.map.hasOwnProperty(key)) {
                if (this.keys.length === this.limit) {
                    var firstKey = this.keys.shift();
                    delete this.map[firstKey];
                }
                this.keys.push(key);
            }
            this.map[key] = value;
        };
        LimitableMap.prototype.get = function(key) {
            return this.map[key] || 0;
        };
        LimitableMap.prototype.remove = function(key) {
            delete this.map[key];
        };
        return LimitableMap;
    }();
    RongIMLib.LimitableMap = LimitableMap;
})(RongIMLib || (RongIMLib = {}));

var RongIMLib;

(function(c) {
    var a = function() {
        function g(h) {
            throw new Error("This method is abstract, you must implement this method in inherited class.");
        }
        g.obtain = function() {
            throw new Error("This method is abstract, you must implement this method in inherited class.");
        };
        return g;
    }();
    c.MessageContent = a;
    var d = function(h) {
        __extends(g, h);
        function g() {
            h.apply(this, arguments);
        }
        return g;
    }(a);
    c.NotificationMessage = d;
    var b = function(h) {
        __extends(g, h);
        function g() {
            h.apply(this, arguments);
        }
        return g;
    }(a);
    c.StatusMessage = b;
    var e = function() {
        function g() {}
        g.modelClone = function(h) {
            var j = {};
            for (var i in h) {
                if (i != "messageName" && "encode" != i) {
                    j[i] = h[i];
                }
            }
            return j;
        };
        g.modleCreate = function(h, i) {
            if (h.length < 1) {
                throw new Error("Array is empty  -> registerMessageType.modleCreate");
            }
            var j = function(m) {
                var l = this;
                for (var k in h) {
                    if (m[h[k]]) {
                        l[h[k]] = m[h[k]];
                    }
                }
                j.prototype.messageName = i;
                j.prototype.encode = function() {
                    return JSON.stringify(c.ModelUtil.modelClone(this));
                };
            };
            return j;
        };
        return g;
    }();
    c.ModelUtil = e;
})(RongIMLib || (RongIMLib = {}));

var RongIMLib;

(function(j) {
    var c = function() {
        function l(m) {
            this.messageName = "CustomerStatusMessage";
            this.status = m.status;
        }
        l.obtain = function() {
            return null;
        };
        l.prototype.encode = function() {
            return JSON.stringify(j.ModelUtil.modelClone(this));
        };
        return l;
    }();
    j.CustomerStatusMessage = c;
    var d = function() {
        function l(m) {
            this.messageName = "ChangeModeResponseMessage";
            this.code = m.code;
            this.data = m.data;
            this.msg = m.msg;
        }
        l.obtain = function() {
            return null;
        };
        l.prototype.encode = function() {
            return JSON.stringify(j.ModelUtil.modelClone(this));
        };
        return l;
    }();
    j.ChangeModeResponseMessage = d;
    var e = function() {
        function l(m) {
            this.messageName = "ChangeModeMessage";
            this.uid = m.uid;
            this.sid = m.sid;
            this.pid = m.pid;
        }
        l.obtain = function() {
            return null;
        };
        l.prototype.encode = function() {
            return JSON.stringify(j.ModelUtil.modelClone(this));
        };
        return l;
    }();
    j.ChangeModeMessage = e;
    var h = function() {
        function l(m) {
            this.messageName = "CustomerStatusUpdateMessage";
            this.serviceStatus = m.serviceStatus;
            this.sid = m.sid;
        }
        l.obtain = function() {
            return null;
        };
        l.prototype.encode = function() {
            return JSON.stringify(j.ModelUtil.modelClone(this));
        };
        return l;
    }();
    j.CustomerStatusUpdateMessage = h;
    var k = function() {
        function l() {
            this.messageName = "HandShakeMessage";
        }
        l.obtain = function() {
            return null;
        };
        l.prototype.encode = function() {
            return JSON.stringify(j.ModelUtil.modelClone(this));
        };
        return l;
    }();
    j.HandShakeMessage = k;
    var b = function() {
        function l(m) {
            this.messageName = "EvaluateMessage";
            this.uid = m.uid;
            this.sid = m.sid;
            this.pid = m.pid;
            this.source = m.source;
            this.suggest = m.suggest;
            this.isRobotResolved = m.isRobotResolved;
            this.type = m.type;
        }
        l.obtain = function() {
            return null;
        };
        l.prototype.encode = function() {
            return JSON.stringify(j.ModelUtil.modelClone(this));
        };
        return l;
    }();
    j.EvaluateMessage = b;
    var g = function() {
        function l(m) {
            this.messageName = "HandShakeResponseMessage";
            this.msg = m.msg;
            this.status = m.status;
            this.data = m.data;
        }
        l.obtain = function() {
            return null;
        };
        l.prototype.encode = function() {
            return JSON.stringify(j.ModelUtil.modelClone(this));
        };
        return l;
    }();
    j.HandShakeResponseMessage = g;
    var i = function() {
        function l(m) {
            this.messageName = "SuspendMessage";
            this.uid = m.uid;
            this.sid = m.sid;
            this.pid = m.pid;
        }
        l.obtain = function() {
            return null;
        };
        l.prototype.encode = function() {
            return JSON.stringify(j.ModelUtil.modelClone(this));
        };
        return l;
    }();
    j.SuspendMessage = i;
    var a = function() {
        function l(m) {
            this.messageName = "TerminateMessage";
            this.code = m.code;
            this.msg = m.msg;
            this.sid = m.sid;
        }
        l.obtain = function() {
            return null;
        };
        l.prototype.encode = function() {
            return JSON.stringify(j.ModelUtil.modelClone(this));
        };
        return l;
    }();
    j.TerminateMessage = a;
})(RongIMLib || (RongIMLib = {}));

var RongIMLib;

(function(a) {
    var b = function() {
        function c(d) {
            this.messageName = "IsTypingStatusMessage";
            var e = d;
        }
        c.prototype.encode = function() {
            return undefined;
        };
        c.prototype.getMessage = function() {
            return null;
        };
        return c;
    }();
    a.IsTypingStatusMessage = b;
})(RongIMLib || (RongIMLib = {}));

var RongIMLib;

(function(g) {
    var e = function() {
        function i(j) {
            this.messageName = "InformationNotificationMessage";
            if (arguments.length == 0) {
                throw new Error("Can not instantiate with empty parameters, use obtain method instead -> InformationNotificationMessage.");
            }
            this.message = j.message;
            this.extra = j.extra;
            if (j.user) {
                this.user = j.user;
            }
        }
        i.obtain = function(j) {
            return new i({
                message: j,
                extra: ""
            });
        };
        i.prototype.encode = function() {
            return JSON.stringify(g.ModelUtil.modelClone(this));
        };
        return i;
    }();
    g.InformationNotificationMessage = e;
    var b = function() {
        function i(j) {
            this.messageName = "CommandMessage";
            if (arguments.length == 0) {
                throw new Error("Can not instantiate with empty parameters, use obtain method instead -> CommandMessage.");
            }
            try {
                if (Object.prototype.toString.call(j.data) == "[object String]") {
                    this.data = JSON.parse(j.data);
                } else {
                    this.data = j.data;
                }
            } catch (k) {
                this.data = j.data;
            }
            this.name = j.name;
            this.extra = j.extra;
        }
        i.obtain = function(j) {
            return new i({
                data: j,
                extra: ""
            });
        };
        i.prototype.encode = function() {
            return JSON.stringify(g.ModelUtil.modelClone(this));
        };
        return i;
    }();
    g.CommandMessage = b;
    var a = function() {
        function i(j) {
            this.messageName = "ContactNotificationMessage";
            if (arguments.length == 0) {
                throw new Error("Can not instantiate with empty parameters, use obtain method instead -> ContactNotificationMessage.");
            }
            this.operation = j.operation;
            this.targetUserId = j.targetUserId;
            this.message = j.message;
            this.extra = j.extra;
            this.sourceUserId = j.sourceUserId;
            if (j.user) {
                this.user = j.user;
            }
        }
        i.obtain = function(k, j, l, m) {
            return new e({
                operation: k,
                sourceUserId: j,
                targetUserId: l,
                message: m
            });
        };
        i.prototype.encode = function() {
            return JSON.stringify(g.ModelUtil.modelClone(this));
        };
        i.CONTACT_OPERATION_ACCEPT_RESPONSE = "ContactOperationAcceptResponse";
        i.CONTACT_OPERATION_REJECT_RESPONSE = "ContactOperationRejectResponse";
        i.CONTACT_OPERATION_REQUEST = "ContactOperationRequest";
        return i;
    }();
    g.ContactNotificationMessage = a;
    var c = function() {
        function i(j) {
            this.messageName = "ProfileNotificationMessage";
            if (arguments.length == 0) {
                throw new Error("Can not instantiate with empty parameters, use obtain method instead -> ProfileNotificationMessage.");
            }
            this.operation = j.operation;
            try {
                if (Object.prototype.toString.call(j.data) == "[object String]") {
                    this.data = JSON.parse(j.data);
                } else {
                    this.data = j.data;
                }
            } catch (k) {
                this.data = j.data;
            }
            this.extra = j.extra;
            if (j.user) {
                this.user = j.user;
            }
        }
        i.obtain = function(j, k) {
            return new i({
                operation: j,
                data: k
            });
        };
        i.prototype.encode = function() {
            return JSON.stringify(g.ModelUtil.modelClone(this));
        };
        return i;
    }();
    g.ProfileNotificationMessage = c;
    var d = function() {
        function i(j) {
            this.messageName = "CommandNotificationMessage";
            if (arguments.length == 0) {
                throw new Error("Can not instantiate with empty parameters, use obtain method instead -> ProfileNotificationMessage.");
            }
            try {
                if (Object.prototype.toString.call(j.data) == "[object String]") {
                    this.data = JSON.parse(j.data);
                } else {
                    this.data = j.data;
                }
            } catch (k) {
                this.data = j.data;
            }
            this.name = j.name;
            this.extra = j.extra;
            if (j.user) {
                this.user = j.user;
            }
        }
        i.obtain = function(j, k) {
            return new i({
                name: j,
                data: k,
                extra: ""
            });
        };
        i.prototype.encode = function() {
            return JSON.stringify(g.ModelUtil.modelClone(this));
        };
        return i;
    }();
    g.CommandNotificationMessage = d;
    var h = function() {
        function i(j) {
            this.messageName = "DiscussionNotificationMessage";
            if (arguments.length == 0) {
                throw new Error("Can not instantiate with empty parameters, use obtain method instead -> DiscussionNotificationMessage.");
            }
            this.extra = j.extra;
            this.extension = j.extension;
            this.type = j.type;
            this.isHasReceived = j.isHasReceived;
            this.operation = j.operation;
            this.user = j.user;
            if (j.user) {
                this.user = j.user;
            }
        }
        i.prototype.encode = function() {
            return JSON.stringify(g.ModelUtil.modelClone(this));
        };
        return i;
    }();
    g.DiscussionNotificationMessage = h;
})(RongIMLib || (RongIMLib = {}));

var RongIMLib;

(function(m) {
    var a = function() {
        function n(o) {
            this.messageName = "TextMessage";
            if (arguments.length == 0) {
                throw new Error("Can not instantiate with empty parameters, use obtain method instead -> TextMessage.");
            }
            this.content = o.content;
            this.extra = o.extra;
            if (o.user) {
                this.user = o.user;
            }
        }
        n.obtain = function(o) {
            return new n({
                extra: "",
                content: o
            });
        };
        n.prototype.encode = function() {
            return JSON.stringify(m.ModelUtil.modelClone(this));
        };
        return n;
    }();
    m.TextMessage = a;
    var b = function() {
        function n(o) {
            this.messageName = "TypingStatusMessage";
            if (arguments.length == 0) {
                throw new Error("Can not instantiate with empty parameters, use obtain method instead -> TypingStatusMessage.");
            }
            this.typingContentType = o.typingContentType;
            this.data = o.data;
        }
        n.obtain = function(o, p) {
            return new n({
                typingContentType: o,
                data: p
            });
        };
        n.prototype.encode = function() {
            return JSON.stringify(m.ModelUtil.modelClone(this));
        };
        return n;
    }();
    m.TypingStatusMessage = b;
    var e = function() {
        function n(o) {
            this.messageName = "ReadReceiptMessage";
            if (arguments.length == 0) {
                throw new Error("Can not instantiate with empty parameters, use obtain method instead -> ReadReceiptMessage.");
            }
            this.lastMessageSendTime = o.lastMessageSendTime;
            this.messageUId = o.messageUId;
            this.type = o.type;
        }
        n.obtain = function(q, p, o) {
            return new n({
                messageUId: q,
                lastMessageSendTime: p,
                type: o
            });
        };
        n.prototype.encode = function() {
            return JSON.stringify(m.ModelUtil.modelClone(this));
        };
        return n;
    }();
    m.ReadReceiptMessage = e;
    var h = function() {
        function n(o) {
            this.messageName = "VoiceMessage";
            if (arguments.length == 0) {
                throw new Error("Can not instantiate with empty parameters, use obtain method instead -> VoiceMessage.");
            }
            this.content = o.content;
            this.duration = o.duration;
            this.extra = o.extra;
            if (o.user) {
                this.user = o.user;
            }
        }
        n.obtain = function(o, p) {
            return new n({
                content: o,
                duration: p,
                extra: ""
            });
        };
        n.prototype.encode = function() {
            return JSON.stringify(m.ModelUtil.modelClone(this));
        };
        return n;
    }();
    m.VoiceMessage = h;
    var l = function() {
        function n(o) {
            this.messageName = "ImageMessage";
            if (arguments.length == 0) {
                throw new Error("Can not instantiate with empty parameters, use obtain method instead -> ImageMessage.");
            }
            this.content = o.content;
            this.imageUri = o.imageUri;
            this.extra = o.extra;
            if (o.user) {
                this.user = o.user;
            }
        }
        n.obtain = function(p, o) {
            return new n({
                content: p,
                imageUri: o,
                extra: ""
            });
        };
        n.prototype.encode = function() {
            return JSON.stringify(m.ModelUtil.modelClone(this));
        };
        return n;
    }();
    m.ImageMessage = l;
    var g = function() {
        function n(o) {
            this.messageName = "LocationMessage";
            if (arguments.length == 0) {
                throw new Error("Can not instantiate with empty parameters, use obtain method instead -> LocationMessage.");
            }
            this.latiude = o.latitude;
            this.longitude = o.longitude;
            this.poi = o.poi;
            this.content = o.content;
            this.extra = o.extra;
            if (o.user) {
                this.user = o.user;
            }
        }
        n.obtain = function(r, p, q, o) {
            return new n({
                latitude: p,
                longitude: p,
                poi: q,
                content: o,
                extra: ""
            });
        };
        n.prototype.encode = function() {
            return JSON.stringify(m.ModelUtil.modelClone(this));
        };
        return n;
    }();
    m.LocationMessage = g;
    var c = function() {
        function n(o) {
            this.messageName = "RichContentMessage";
            if (arguments.length == 0) {
                throw new Error("Can not instantiate with empty parameters, use obtain method instead -> RichContentMessage.");
            }
            this.title = o.title;
            this.content = o.content;
            this.imageUri = o.imageUri;
            this.extra = o.extra;
            this.url = o.url;
            if (o.user) {
                this.user = o.user;
            }
        }
        n.obtain = function(r, q, p, o) {
            return new n({
                title: r,
                content: q,
                imageUri: p,
                url: o,
                extra: ""
            });
        };
        n.prototype.encode = function() {
            return JSON.stringify(m.ModelUtil.modelClone(this));
        };
        return n;
    }();
    m.RichContentMessage = c;
    var k = function() {
        function n(o) {
            this.messageName = "UnknownMessage";
            if (arguments.length == 0) {
                throw new Error("Can not instantiate with empty parameters, use obtain method instead -> UnknownMessage.");
            }
            this.message = o;
        }
        n.prototype.encode = function() {
            return "";
        };
        return n;
    }();
    m.UnknownMessage = k;
    var d = function() {
        function n(o) {
            this.messageName = "PublicServiceCommandMessage";
            if (arguments.length == 0) {
                throw new Error("Can not instantiate with empty parameters, use obtain method instead -> PublicServiceCommandMessage.");
            }
            this.content = o.content;
            this.extra = o.extra;
            this.menuItem = o.menuItem;
            if (o.user) {
                this.user = o.user;
            }
        }
        n.obtain = function(o) {
            return new n({
                content: "",
                command: "",
                menuItem: o,
                extra: ""
            });
        };
        n.prototype.encode = function() {
            return JSON.stringify(m.ModelUtil.modelClone(this));
        };
        return n;
    }();
    m.PublicServiceCommandMessage = d;
    var i = function() {
        function n(o) {
            this.messageName = "PublicServiceMultiRichContentMessage";
            this.richContentMessages = o;
        }
        n.prototype.encode = function() {
            return null;
        };
        return n;
    }();
    m.PublicServiceMultiRichContentMessage = i;
    var j = function() {
        function n(o) {
            this.messageName = "PublicServiceRichContentMessage";
            this.richContentMessage = o;
        }
        n.prototype.encode = function() {
            return null;
        };
        return n;
    }();
    m.PublicServiceRichContentMessage = j;
})(RongIMLib || (RongIMLib = {}));

var RongIMLib;

(function(l) {
    var i = function() {
        function m(n, o, p) {}
        return m;
    }();
    l.CustomServiceConfig = i;
    var a = function() {
        function m(p, t, n, r, q, s, o) {}
        return m;
    }();
    l.CustomServiceSession = a;
    var b = function() {
        function m(q, s, o, A, w, y, D, x, n, C, r, p, z, v, B, u, t) {
            this.conversationTitle = q;
            this.conversationType = s;
            this.draft = o;
            this.isTop = A;
            this.latestMessage = w;
            this.latestMessageId = y;
            this.notificationStatus = D;
            this.objectName = x;
            this.receivedStatus = n;
            this.receivedTime = C;
            this.senderUserId = r;
            this.senderUserName = p;
            this.sentStatus = z;
            this.sentTime = v;
            this.targetId = B;
            this.unreadMessageCount = u;
            this.senderPortraitUri = t;
        }
        m.prototype.setTop = function() {
            l.RongIMClient._dataAccessProvider.addConversation(this, {
                onSuccess: function(n) {}
            });
        };
        return m;
    }();
    l.Conversation = b;
    var k = function() {
        function m(r, q, p, n, o) {
            this.creatorId = r;
            this.id = q;
            this.memberIdList = p;
            this.name = n;
            this.isOpen = o;
        }
        return m;
    }();
    l.Discussion = k;
    var h = function() {
        function m(p, n, o) {
            this.id = p;
            this.name = n;
            this.portraitUri = o;
        }
        return m;
    }();
    l.Group = h;
    var j = function() {
        function m(w, q, o, t, z, x, n, B, p, v, r, A, u, s, y) {
            this.content = w;
            this.conversationType = q;
            this.extra = o;
            this.objectName = t;
            this.messageDirection = z;
            this.messageId = x;
            this.receivedStatus = n;
            this.receivedTime = B;
            this.senderUserId = p;
            this.sentStatus = v;
            this.sentTime = r;
            this.targetId = A;
            this.messageType = u;
            this.messageUId = s;
            this.isLocalMessage = y;
        }
        return m;
    }();
    l.Message = j;
    var g = function() {
        function m(o, n) {
            this.isCounted = o;
            this.isPersited = n;
        }
        m.prototype.getMessageTag = function() {
            if (this.isCounted && this.isPersited) {
                return 3;
            } else {
                if (this.isCounted || !this.isPersited) {
                    return 2;
                } else {
                    if (!this.isCounted || this.isPersited) {
                        return 1;
                    } else {
                        if (!this.isCounted && !this.isPersited) {
                            return 0;
                        }
                    }
                }
            }
        };
        return m;
    }();
    l.MessageTag = g;
    var e = function() {
        function m(r, p, q, n, o) {
            this.id = r;
            this.name = p;
            this.type = q;
            this.sunMenuItems = n;
            this.url = o;
        }
        return m;
    }();
    l.PublicServiceMenuItem = e;
    var c = function() {
        function m(u, t, s, o, p, r, q, n) {
            this.conversationType = u;
            this.introduction = t;
            this.menu = s;
            this.name = o;
            this.portraitUri = p;
            this.publicServiceId = r;
            this.hasFollowed = q;
            this.isGlobal = n;
        }
        return m;
    }();
    l.PublicServiceProfile = c;
    var d = function() {
        function m(o, n, p) {
            this.userId = o;
            this.name = n;
            this.icon = p;
        }
        return m;
    }();
    l.UserInfo = d;
})(RongIMLib || (RongIMLib = {}));

var RongIMLib;

(function(a) {
    var b = function() {
        function c() {
            this.database = new a.DBUtil();
        }
        c.prototype.addConversation = function(g, j) {
            var e = true;
            for (var h = 0, d = a.RongIMClient._memoryStore.conversationList.length; h < d; h++) {
                if (a.RongIMClient._memoryStore.conversationList[h].conversationType === g.conversationType && a.RongIMClient._memoryStore.conversationList[h].targetId === g.targetId) {
                    a.RongIMClient._memoryStore.conversationList.unshift(a.RongIMClient._memoryStore.conversationList.splice(h, 1)[0]);
                    e = false;
                    break;
                }
            }
            if (e) {
                a.RongIMClient._memoryStore.conversationList.unshift(g);
            }
            j.onSuccess(true);
        };
        c.prototype.updateConversation = function(e) {
            var h;
            for (var g = 0, d = a.RongIMClient._memoryStore.conversationList.length; g < d; g++) {
                if (e.conversationType === a.RongIMClient._memoryStore.conversationList[g].conversationType && e.targetId === a.RongIMClient._memoryStore.conversationList[g].targetId) {
                    a.RongIMClient._memoryStore.conversationList[g].conversationTitle = e.conversationTitle;
                    a.RongIMClient._memoryStore.conversationList[g].senderUserName = e.senderUserName;
                    a.RongIMClient._memoryStore.conversationList[g].senderPortraitUri = e.senderPortraitUri;
                    break;
                }
            }
            return h;
        };
        c.prototype.removeConversation = function(j, e, h) {
            for (var g = 0, d = a.RongIMClient._memoryStore.conversationList.length; g < d; g++) {
                if (a.RongIMClient._memoryStore.conversationList[g].conversationType === j && a.RongIMClient._memoryStore.conversationList[g].targetId === e) {
                    a.RongIMClient._memoryStore.conversationList.splice(g, 1);
                    if (a.MessageUtil.supportLargeStorage()) {
                        a.LocalStorageProvider.getInstance().removeItem("cu" + a.Bridge._client.userId + j + e);
                    }
                    break;
                }
            }
            h.onSuccess(true);
        };
        c.prototype.getMessage = function(d, e) {
            e.onSuccess(new a.Message());
        };
        c.prototype.addMessage = function(h, d, e, g) {
            if (g) {
                g.onSuccess(e);
            }
        };
        c.prototype.removeMessage = function(h, d, e, g) {
            g.onSuccess(true);
        };
        c.prototype.removeLocalMessage = function(h, e, d, g) {
            g.onSuccess(true);
        };
        c.prototype.updateMessage = function(d, e) {
            if (e) {
                e.onSuccess(d);
            }
        };
        c.prototype.clearMessages = function(g, d, e) {
            e.onSuccess(true);
        };
        c.prototype.updateMessages = function(j, d, e, h, i) {
            var g = this;
            if (e == "readStatus") {
                if (a.RongIMClient._memoryStore.conversationList.length > 0) {
                    g.getConversationList({
                        onSuccess: function(k) {
                            Array.forEach(k, function(l) {
                                if (l.conversationType == j && l.targetId == d) {
                                    l.unreadMessageCount = 0;
                                }
                            });
                        },
                        onError: function(k) {
                            i.onError(k);
                        }
                    }, null);
                }
            }
            i.onSuccess(true);
        };
        c.prototype.getConversation = function(l, e, k) {
            var j = null;
            for (var g = 0, d = a.RongIMClient._memoryStore.conversationList.length; g < d; g++) {
                if (a.RongIMClient._memoryStore.conversationList[g].conversationType == l && a.RongIMClient._memoryStore.conversationList[g].targetId == e) {
                    j = a.RongIMClient._memoryStore.conversationList[g];
                    if (a.MessageUtil.supportLargeStorage()) {
                        var h = a.LocalStorageProvider.getInstance().getItem("cu" + a.Bridge._client.userId + l + e);
                        if (j.unreadMessageCount == 0) {
                            j.unreadMessageCount = Number(h);
                        }
                    }
                }
            }
            k.onSuccess(j);
        };
        c.prototype.getConversationList = function(g, d) {
            if (a.RongIMClient._memoryStore.conversationList.length == 0 || a.RongIMClient._memoryStore.isSyncRemoteConverList) {
                a.RongIMClient.getInstance().getRemoteConversationList({
                    onSuccess: function(h) {
                        if (a.MessageUtil.supportLargeStorage()) {
                            Array.forEach(a.RongIMClient._memoryStore.conversationList, function(j) {
                                var i = a.LocalStorageProvider.getInstance().getItem("cu" + a.Bridge._client.userId + j.conversationType + j.targetId);
                                if (j.unreadMessageCount == 0) {
                                    j.unreadMessageCount = Number(i);
                                }
                            });
                        }
                        a.RongIMClient._memoryStore.isSyncRemoteConverList = false;
                        g.onSuccess(h);
                    },
                    onError: function(h) {
                        g.onSuccess([]);
                    }
                }, d);
            } else {
                if (d) {
                    var e = [];
                    Array.forEach(d, function(h) {
                        Array.forEach(a.RongIMClient._memoryStore.conversationList, function(i) {
                            if (i.conversationType == h) {
                                e.push(i);
                            }
                        });
                    });
                    g.onSuccess(e);
                } else {
                    g.onSuccess(a.RongIMClient._memoryStore.conversationList);
                }
            }
        };
        c.prototype.clearConversations = function(d, e) {
            Array.forEach(d, function(g) {
                Array.forEach(a.RongIMClient._memoryStore.conversationList, function(h) {
                    if (g == h.conversationType) {
                        a.RongIMClient.getInstance().removeConversation(h.conversationType, h.targetId, {
                            onSuccess: function() {},
                            onError: function() {}
                        });
                    }
                });
            });
            e.onSuccess(true);
        };
        c.prototype.getHistoryMessages = function(i, d, g, e, h) {
            a.RongIMClient.getInstance().getRemoteHistoryMessages(i, d, g, e, h);
        };
        c.prototype.getTotalUnreadCount = function(e) {
            var d = 0;
            Array.forEach(a.RongIMClient._memoryStore.conversationList, function(g) {
                d += g.unreadMessageCount;
            });
            e.onSuccess(d);
        };
        c.prototype.getConversationUnreadCount = function(e, g) {
            var d = 0;
            Array.forEach(e, function(h) {
                Array.forEach(a.RongIMClient._memoryStore.conversationList, function(i) {
                    if (i.conversationType == h) {
                        d += i.unreadMessageCount;
                    }
                });
            });
            g.onSuccess(d);
        };
        c.prototype.getUnreadCount = function(g, d, e) {
            this.getConversation(g, d, {
                onSuccess: function(h) {
                    e.onSuccess(h ? h.unreadMessageCount : 0);
                },
                onError: function(h) {
                    e.onError(h);
                }
            });
        };
        c.prototype.clearUnreadCount = function(g, d, e) {
            this.getConversation(g, d, {
                onSuccess: function(h) {
                    if (h) {
                        if (a.MessageUtil.supportLargeStorage()) {
                            a.LocalStorageProvider.getInstance().removeItem("cu" + a.Bridge._client.userId + g + d);
                        }
                        h.unreadMessageCount = 0;
                    }
                    e.onSuccess(true);
                },
                onError: function(h) {
                    e.onError(h);
                }
            });
        };
        c.prototype.setConversationToTop = function(h, d, g) {
            var e = this;
            this.getConversation(h, d, {
                onSuccess: function(i) {
                    e.addConversation(i, g);
                    g.onSuccess(true);
                },
                onError: function(i) {
                    g.onError(i);
                }
            });
        };
        c.prototype.setMessageExtra = function(d, e, g) {
            g.onSuccess(true);
        };
        c.prototype.setMessageReceivedStatus = function(e, d, g) {
            g.onSuccess(true);
        };
        c.prototype.setMessageSentStatus = function(e, d, g) {
            g.onSuccess(true);
        };
        return c;
    }();
    a.ServerDataProvider = b;
})(RongIMLib || (RongIMLib = {}));

var RongIMLib;

(function(a) {
    var b = function() {
        function c() {}
        c.prototype.init = function(e) {
            var g = this, i = false;
            g.userId = e;
            g.db = openDatabase("RongIMLibDB", "1.0", "RongIMLibDB", 10 * 1024 * 1024);
            if (g.db) {
                i = true;
                var d = "create table if not exists t_conversation_" + e + " (conversationType,targetId,content,sentTime,isTop)";
                var h = "create table if not exists t_message_" + e + " (id integer not null primary key autoincrement,messageType,messageUId,conversationType,targetId,sentTime,content,localMsg)";
                g.execUpdate(d);
                g.execUpdate(h);
            }
            return i;
        };
        c.prototype.execSearchByParams = function(e, d, g) {
            this.db.transaction(function(h) {
                h.executeSql(e, d, function(i, j) {
                    g(j.rows);
                }, function(i, j) {
                    throw new Error("{errorCode:" + j.code + ",content:" + j.message + "}");
                });
            });
        };
        c.prototype.execSearch = function(d, e) {
            this.db.transaction(function(g) {
                g.executeSql(d, [], function(h, i) {
                    e(i.rows);
                }, function(i, h) {
                    throw new Error("{errorCode:" + h.code + ",content:" + h.message + "}");
                });
            });
        };
        c.prototype.execUpdateByParams = function(e, d) {
            this.db.transaction(function(g) {
                g.executeSql(e, d);
            }, function(h, g) {
                throw new Error("{errorCode:" + h.code + ",content:" + h.message + "}");
            });
        };
        c.prototype.execUpdate = function(d) {
            this.db.transaction(function(e) {
                e.executeSql(d);
            }, function(g, e) {
                throw new Error("{errorCode:" + g.code + ",content:" + g.message + "}");
            });
        };
        return c;
    }();
    a.DBUtil = b;
})(RongIMLib || (RongIMLib = {}));

var RongIMLib;

(function(a) {
    var b = function() {
        function c() {
            this.database = new a.DBUtil();
        }
        c.prototype.updateConversation = function(d) {
            var e = "update t_conversation_" + this.database.userId + " set content = ?,sentTime = ?,istop = ? where conversationType = ? and targetId = ?";
            this.database.execUpdateByParams(e, [ JSON.stringify(d), d.sentTime, d.isTop, d.conversationType, d.targetId ]);
            return d;
        };
        c.prototype.addConversation = function(g, h) {
            var e = this;
            var d = "select * from t_conversation_" + e.database.userId + " t where t.conversationType = ? and t.targetId = ?";
            e.database.execSearchByParams(d, [ Number(g.conversationType), g.targetId ], function(i) {
                if (i.length > 0) {
                    e.updateConversation(g);
                } else {
                    var j = "insert into t_conversation_" + e.database.userId + "(conversationType,targetId,content,sentTime,isTop) values(?,?,?,?,?)";
                    e.database.execUpdateByParams(j, [ g.conversationType, g.targetId, JSON.stringify(g), g.sentTime, g.isTop ]);
                }
                h.onSuccess(true);
            });
        };
        c.prototype.removeConversation = function(h, d, g) {
            var e = "delete from t_conversation_" + this.database.userId + "  where conversationType = ? and targetId = ?";
            this.database.execUpdateByParams(e, [ h, d ]);
            g.onSuccess(true);
        };
        c.prototype.getConversation = function(i, d, h) {
            var g = "select t.content from t_conversation_" + this.database.userId + " t where t.conversationType = ? and t.targetId = ?", e = null;
            this.database.execSearchByParams(g, [ Number(i), d ], function(j) {
                var k;
                if (j.length > 0) {
                    k = JSON.parse(j[0].content);
                }
                h.onSuccess(k);
            });
        };
        c.prototype.getConversationList = function(i, g) {
            if (a.RongIMClient._memoryStore.isSyncRemoteConverList) {
                a.RongIMClient.getInstance().getRemoteConversationList({
                    onSuccess: function(l) {
                        a.RongIMClient._memoryStore.conversationList = l;
                        for (var k = 0, j = l.length; k < j; k++) {
                            e.addConversation(l[k], {
                                onSuccess: function() {},
                                onError: function() {}
                            });
                        }
                        a.RongIMClient._memoryStore.isSyncRemoteConverList = false;
                    },
                    onError: function(j) {
                        i.onError(j);
                    }
                }, null);
            }
            var h = "select * from t_conversation_" + this.database.userId + " t where t.isTop = 1 ";
            var d = "select * from t_conversation_" + this.database.userId + " c where c.isTop != 1 order by c.sentTime ";
            var e = this;
            if (g) {
                h += " and t.conversationType in (" + g.join(",") + ")";
                d += " and c.conversationType in (" + g.join(",") + ")";
            }
            h += " union " + d;
            this.database.execSearch(h, function(l) {
                if (l.length > 0) {
                    var m = [];
                    for (var k = 0, j = l.length; k < j; k++) {
                        m.push(JSON.parse(l[k].content));
                    }
                    a.RongIMClient._memoryStore.conversationList = m;
                }
                i.onSuccess(a.RongIMClient._memoryStore.conversationList);
            });
        };
        c.prototype.clearConversations = function(d, g) {
            var e = "delete from t_conversation_" + this.database.userId + " where conversationType in (?)";
            this.database.execUpdateByParams(e, [ d.join(",") ]);
            Array.forEach(d, function(h) {
                Array.forEach(a.RongIMClient._memoryStore.conversationList, function(i) {
                    if (h == i.conversationType) {
                        a.RongIMClient.getInstance().removeConversation(i.conversationType, i.targetId, {
                            onSuccess: function() {},
                            onError: function() {}
                        });
                    }
                });
            });
            g.onSuccess(true);
        };
        c.prototype.getMessage = function(d, g) {
            var e = "select * from t_message_" + this.database.userId + " t where t.id = ?";
            this.database.execSearchByParams(e, [ d ], function(h) {
                if (h.length > 0) {
                    var i = JSON.parse(h[0].content);
                    g.onSuccess(i);
                } else {
                    g.onSuccess(null);
                }
            });
        };
        c.prototype.addMessage = function(k, g, h, j) {
            var i = "insert into t_message_" + this.database.userId + " (messageType,messageUId,conversationType,targetId,sentTime,content,localMsg)values(?,?,?,?,?,?,?)";
            var e = h.messageUId ? 0 : 1;
            this.database.execUpdateByParams(i, [ h.messageType, h.messageUId, h.conversationType, h.targetId, h.sentTime, JSON.stringify(h), e ]);
            if (j) {
                var d = "select t.id from t_message_" + this.database.userId + " t where t.sentTime = ? and t.conversationType = ? and t.targetId = ?";
                this.database.execSearchByParams(d, [ h.sentTime, k, g ], function(l) {
                    h.messageId = l[0].id;
                    j.onSuccess(h);
                });
            }
        };
        c.prototype.removeMessage = function(i, d, e, h) {
            if (e.length == 0) {
                return;
            }
            var g = "delete from t_message_" + this.database.userId + " where messageUId in (?)";
            this.database.execUpdateByParams(g, [ e.join(",") ]);
        };
        c.prototype.removeLocalMessage = function(i, d, e, h) {
            if (e.length == 0) {
                return;
            }
            var g = "delete from t_message_" + this.database.userId + " where id in (" + e.join(",") + ") and conversationType = ? and targetId = ? and localMsg = 1";
            this.database.execUpdateByParams(g, [ i, d ]);
            h.onSuccess(true);
        };
        c.prototype.updateMessage = function(d, g) {
            var e = "update t_message_" + this.database.userId + " set messageUId = ?,sentTime = ?,content = ?,localMsg = ? where id = ?";
            this.database.execUpdateByParams(e, [ d.messageUId, d.sentTime, JSON.stringify(d), d.isLocalMessage, d.messageId ]);
        };
        c.prototype.updateMessages = function(i, d, e, g, h) {
            throw new Error("Not implemented yet");
        };
        c.prototype.clearMessages = function(h, d, g) {
            var e = "delete from t_message_" + this.database.userId + " where conversationType = ? and targetId = ? ";
            this.database.execUpdateByParams(e, [ h, d ]);
            g.onSuccess(true);
        };
        c.prototype.getHistoryMessages = function(e, l, i, j, m) {
            var n = "select * from (select * from t_message_" + this.database.userId + " t where t.conversationType = ? and t.targetId = ? ";
            var g = [ e, l ], h = [], k = this;
            if (i !== 0) {
                var d = a.RongIMClient._memoryStore.lastReadTime.get(e + l);
                if (d != 0) {
                    n += "and t.sentTime < ? ";
                    g.push(d);
                    i = d;
                }
            }
            n += "order by t.sentTime desc limit ?) order by sentTime ";
            g.push(j);
            k.database.execSearchByParams(n, g, function(p) {
                for (var q = 0, o = p.length; q < o; q++) {
                    h.push(JSON.parse(p[q].content));
                }
                if (o < j) {
                    a.RongIMClient.getInstance().getRemoteHistoryMessages(e, l, i, j - p.length, {
                        onSuccess: function(t, u) {
                            for (var s = 0, r = t.length; s < r; s++) {
                                !t[s].targetId ? t[s].targetId = l : null;
                                a.RongIMClient._dataAccessProvider.addMessage(t[s].conversationType, t[s].targetId, t[s], {
                                    onSuccess: function(v) {},
                                    onError: function() {}
                                });
                            }
                            k.database.execSearchByParams(n, g, function(w) {
                                var x = [];
                                for (var y = 0, v = w.length; y < v; y++) {
                                    x.push(JSON.parse(w[y].content));
                                }
                                m.onSuccess(x, u);
                            });
                        },
                        onError: function(r) {}
                    });
                } else {
                    m.onSuccess(h, true);
                    a.RongIMClient._memoryStore.lastReadTime.set(e + l, p[o - 1].sentTime);
                }
            });
        };
        c.prototype.getTotalUnreadCount = function(e) {
            var d = "select t.content from t_conversation_" + this.database.userId + " t";
            this.database.execSearch(d, function(j) {
                var k = 0;
                for (var h = 0, g = j.length; h < g; h++) {
                    var l = JSON.parse(j[h].content);
                    k += l.unreadMessageCount;
                }
                e.onSuccess(k);
            });
        };
        c.prototype.getConversationUnreadCount = function(d, g) {
            if (d.length == 0) {
                g.onSuccess(0);
                return;
            }
            var e = "select t.content from t_conversation_" + this.database.userId + " t where t.conversationType in (" + d.join(",") + ")";
            this.database.execSearchByParams(e, [], function(k) {
                var l = 0;
                for (var j = 0, h = k.length; j < h; j++) {
                    var m = JSON.parse(k[j].content);
                    l += m.unreadMessageCount;
                }
                g.onSuccess(l);
            });
        };
        c.prototype.getUnreadCount = function(h, d, g) {
            var e = "select t.content from t_conversation_" + this.database.userId + " t where t.conversationType = ? and t.targetId = ?";
            this.database.execSearchByParams(e, [ h, d ], function(l) {
                var m = 0;
                for (var k = 0, j = l.length; k < j; k++) {
                    var n = JSON.parse(l[k].content);
                    m += n.unreadMessageCount;
                }
                g.onSuccess(m);
            });
        };
        c.prototype.clearUnreadCount = function(j, e, i) {
            var d = "select * from t_conversation_" + this.database.userId + " t where t.conversationType = ? and t.targetId = ?";
            var h = "update t_conversation_" + this.database.userId + " set content = ? where conversationType = ? and targetId = ?", g = this;
            this.database.execSearchByParams(d, [ j, e ], function(k) {
                if (k.length == 0) {
                    i.onSuccess(false);
                } else {
                    var l = JSON.parse(k[0].content);
                    l.unreadMessageCount = 0;
                    g.database.execUpdateByParams(h, [ JSON.stringify(l), j, e ]);
                    i.onSuccess(true);
                }
            });
        };
        c.prototype.setConversationToTop = function(h, d, g) {
            var e = "update t_conversation_" + this.database.userId + " set isTop = 1 where conversationType = ? and targetId = ?";
            this.database.execUpdateByParams(e, [ h, d ]);
            g.onSuccess(true);
        };
        c.prototype.setMessageExtra = function(h, g, i) {
            var d = "select t.content from t_message_" + this.database.userId + " t where t.messageUId = ?";
            var e = "UPADTE t_message_" + this.database.userId + " t SET t.content = ? where t.messageUId = ?";
            this.database.execSearchByParams(d, [ h ], function(j) {
                if (j.length == 0) {
                    i.onSuccess(false);
                } else {
                    var k = JSON.parse(j[0].content);
                    k.extra = g;
                    this.database.execUpdateByParams(e, [ JSON.stringify(k), h ]);
                }
            });
        };
        c.prototype.setMessageReceivedStatus = function(i, e, j) {
            var d = "select t.content from t_message_" + this.database.userId + " t where t.messageUId = ?";
            var h = "update t_message_" + this.database.userId + " set content = ? where messageUId = ?", g = this;
            this.database.execSearchByParams(d, [ i ], function(k) {
                if (k.length == 0) {
                    j.onSuccess(false);
                } else {
                    var l = JSON.parse(k[0].content);
                    l.receivedStatus = e;
                    g.database.execUpdateByParams(h, [ JSON.stringify(l), i ]);
                    j.onSuccess(true);
                }
            });
        };
        c.prototype.dropTable = function(d) {
            this.database.execUpdate(d);
        };
        c.prototype.setMessageSentStatus = function(h, e, i) {
            var d = "select t.content from t_message_" + this.database.userId + " t where t.messageUId = ?";
            var g = "update t_message_" + this.database.userId + " set content = ? where messageUId = ?";
            this.database.execSearchByParams(d, [ h ], function(j) {
                if (j.length == 0) {
                    i.onSuccess(false);
                } else {
                    var k = JSON.parse(j[0].content);
                    k.sentStatus = e;
                    this.database.execUpdateByParams(g, [ JSON.stringify(k), h ]);
                    i.onSuccess(true);
                }
            });
        };
        return c;
    }();
    a.WebSQLDataProvider = b;
})(RongIMLib || (RongIMLib = {}));

var RongIMLib;

(function(a) {
    var b = function() {
        function c() {}
        c.prototype.setItem = function(e, d) {
            var g = new Date();
            g.setTime(g.getTime() + 15 * 24 * 3600 * 1e3);
            document.cookie = e + "=" + decodeURIComponent(d) + ";path=/;expires=" + g.toGMTString();
        };
        c.prototype.getItem = function(e) {
            var d = document.cookie.match(new RegExp("(^| )" + e + "=([^;]*)(;|$)"));
            if (d != null) {
                return d[2];
            }
            return null;
        };
        c.prototype.removeItem = function(d) {
            if (this.getItem(d)) {
                document.cookie = d + "=;path=/;expires=Thu, 01-Jan-1970 00:00:01 GMT";
            }
        };
        c.prototype.getItemKey = function(g) {
            var e = document.cookie.match(new RegExp("(^| )navi\\w+?=([^;]*)(;|$)")), j = "";
            if (e) {
                for (var h = 0, d = e.length; h < d; h++) {
                    if (e[h].indexOf(g) > -1) {
                        j = e[h];
                        break;
                    }
                }
            }
            return j ? j.split("=")[0].replace(/^\s/, "") : null;
        };
        c.prototype.clearItem = function() {
            var e = document.cookie.match(/[^ =;]+(?=\=)/g);
            if (e) {
                for (var d = e.length; d--; ) {
                    document.cookie = e[d] + "=0;path=/;expires=" + new Date(0).toUTCString();
                }
            }
        };
        c.prototype.onOutOfQuota = function() {
            return 4 * 1024;
        };
        return c;
    }();
    a.CookieProvider = b;
})(RongIMLib || (RongIMLib = {}));

var RongIMLib;

(function(a) {
    var b = function() {
        function c() {}
        c.getInstance = function() {
            return new c();
        };
        c.prototype.setItem = function(e, d) {
            localStorage.setItem(e.toString(), d);
        };
        c.prototype.getItem = function(d) {
            return localStorage.getItem(d ? d.toString() : "");
        };
        c.prototype.removeItem = function(d) {
            localStorage.removeItem(d.toString());
        };
        c.prototype.clearItem = function() {
            localStorage.clear();
        };
        c.prototype.onOutOfQuota = function() {
            return JSON.stringify(localStorage).length;
        };
        return c;
    }();
    a.LocalStorageProvider = b;
})(RongIMLib || (RongIMLib = {}));

var RongIMLib;

(function(b) {
    var a = function() {
        function c() {
            this.script = document.createElement("script");
            this.head = document.getElementsByTagName("head")[0];
            b.Transportations._TransportType = b.Socket.WEBSOCKET;
            if ("WebSocket" in window && "ArrayBuffer" in window && WebSocket.prototype.CLOSED === 3 && !window.WEB_XHR_POLLING) {
                var d = window.SCHEMETYPE ? window.SCHEMETYPE + "://cdn.ronghub.com/protobuf-2.1.1.min.js" : "//cdn.ronghub.com/protobuf-2.1.1.min.js";
                this.script.src = d;
                this.head.appendChild(this.script);
            } else {
                b.Transportations._TransportType = "xhr-polling";
                window.Modules = Polling;
            }
        }
        return c;
    }();
    b.FeatureDectector = a;
    if (document.readyState == "interactive" || document.readyState == "loading" || document.readyState == "complete") {
        new a();
    } else {
        if (document.addEventListener) {
            document.addEventListener("DOMContentLoaded", function() {
                document.removeEventListener("DOMContentLoaded", arguments.callee, false);
                new a();
            }, false);
        } else {
            if (document.attachEvent) {
                document.attachEvent("onreadystatechange", function() {
                    if (document.readyState == "interactive" || document.readyState == "loading" || document.readyState == "complete") {
                        document.detachEvent("onreadystatechange", arguments.callee);
                        new a();
                    }
                });
            }
        }
    }
})(RongIMLib || (RongIMLib = {}));

var RongIMLib;

(function(RongIMLib) {
    var FeaturePatcher = function() {
        function FeaturePatcher() {}
        FeaturePatcher.prototype.patchAll = function() {
            this.patchJSON();
            this.patchForEach();
        };
        FeaturePatcher.prototype.patchForEach = function() {
            if (!Array.forEach) {
                Array.forEach = function(arr, func) {
                    for (var i = 0; i < arr.length; i++) {
                        func.call(arr, arr[i], i, arr);
                    }
                };
            }
        };
        FeaturePatcher.prototype.patchJSON = function() {
            if (!window.JSON) {
                window.JSON = function() {
                    function JSON() {}
                    JSON.parse = function(sJSON) {
                        return eval("(" + sJSON + ")");
                    };
                    JSON.stringify = function(value) {
                        return this.str("", {
                            "": value
                        });
                    };
                    JSON.str = function(key, holder) {
                        var i, k, v, length, mind = "", partial, value = holder[key], me = this;
                        if (value && typeof value === "object" && typeof value.toJSON === "function") {
                            value = value.toJSON(key);
                        }
                        switch (typeof value) {
                          case "string":
                            return me.quote(value);

                          case "number":
                            return isFinite(value) ? String(value) : "null";

                          case "boolean":
                          case "null":
                            return String(value);

                          case "object":
                            if (!value) {
                                return "null";
                            }
                            partial = [];
                            if (Object.prototype.toString.apply(value) === "[object Array]") {
                                length = value.length;
                                for (i = 0; i < length; i += 1) {
                                    partial[i] = me.str(i, value) || "null";
                                }
                                v = partial.length === 0 ? "[]" : "[" + partial.join(",") + "]";
                                return v;
                            }
                            for (k in value) {
                                if (Object.prototype.hasOwnProperty.call(value, k)) {
                                    v = me.str(k, value);
                                    if (v) {
                                        partial.push(me.quote(k) + ":" + v);
                                    }
                                }
                            }
                            v = partial.length === 0 ? "{}" : "{" + partial.join(",") + "}";
                            return v;
                        }
                    };
                    JSON.quote = function(string) {
                        var me = this;
                        me.rx_escapable.lastIndex = 0;
                        return me.rx_escapable.test(string) ? '"' + string.replace(me.rx_escapable, function(a) {
                            var c = me.meta[a];
                            return typeof c === "string" ? c : "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice(-4);
                        }) + '"' : '"' + string + '"';
                    };
                    JSON.rx_escapable = new RegExp('[\\"\\\\"\0--­؀-؄܏឴឵‌-‏\u2028- ⁠-⁯﻿￰-￿]', "g");
                    JSON.meta = {
                        "\b": "\\b",
                        "	": "\\t",
                        "\n": "\\n",
                        "\f": "\\f",
                        "\r": "\\r",
                        '"': '\\"',
                        "''": "\\''",
                        "\\": "\\\\"
                    };
                    return JSON;
                }();
            }
        };
        return FeaturePatcher;
    }();
    RongIMLib.FeaturePatcher = FeaturePatcher;
})(RongIMLib || (RongIMLib = {}));

var RongIMLib;

(function(a) {
    var b = function() {
        function c() {}
        c.prototype.load = function(h, e, g) {
            var d = document.createElement("script");
            d.async = true;
            if (e) {
                if (d.addEventListener) {
                    d.addEventListener("load", function(i) {
                        var j = i.target || i.srcElement;
                        e(j.src);
                    }, false);
                } else {
                    if (d.readyState) {
                        d.onreadystatechange = function(i) {
                            var j = i.srcElement;
                            e(j.src);
                        };
                    }
                }
            }
            if (g) {
                d.onerror = function(i) {
                    var j = i.target || i.srcElement;
                    g(j.src);
                };
            }
            (document.head || document.getElementsByTagName("head")[0]).appendChild(d);
            d.src = h;
        };
        return c;
    }();
})(RongIMLib || (RongIMLib = {}));
