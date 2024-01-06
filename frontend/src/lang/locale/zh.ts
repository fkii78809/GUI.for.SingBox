export default {
  common: {
    grid: '网格',
    list: '列表',
    add: '添加',
    more: '更多',
    edit: '编辑',
    clear: '清理',
    update: '更新',
    delete: '删除',
    cancel: '取消',
    save: '保存',
    nextStep: '下一步',
    prevStep: '上一步',
    disabled: '已禁用',
    enabled: '已启用',
    preview: '预览',
    warning: '警告',
    disable: '禁用',
    enable: '启用',
    use: '使用',
    none: '无',
    close: '关闭',
    reset: '重置',
    pause: '暂停',
    resume: '恢复',
    details: '详情',
    updateAll: '更新全部',
    updateTime: '更新时间',
    keywords: '关键词',
    success: '成功',
    copy: '复制',
    copied: '已复制',
    auto: '自动'
  },
  kernel: {
    port: 'HTTP(s)代理端口',
    mode: '工作模式',
    ipv6: '开启IPv6',
    secret: 'RESTful API密钥',
    'socks-port': 'SOCKS5代理端口',
    'mixed-port': '混合代理端口',
    'allow-lan': '允许局域网访问',
    'log-level': '日志级别',
    'external-controller': 'RESTful Web API监听地址',
    'external-ui': 'Web UI路径',
    'interface-name': '出站接口名称',
    auto: '自动获取',
    info: '信息',
    warning: '警告',
    error: '错误',
    debug: '调试',
    silent: '静默',
    rule: '规则',
    global: '全局',
    direct: '直连',
    ruleDesp: '按照规则文件分流',
    globalDesp: '仅走Global规则组',
    directDesp: '所有流量直连',
    'keep-alive-interval': 'TCP Keep Alive 间隔',
    'find-process-mode': '进程匹配模式',
    'external-controller-tls': 'RESTful Web API监听地址(HTTPS)',
    'external-ui-name': '外部用户界面',
    'external-ui-url': '自定义外部用户界面下载地址',
    'unified-delay': '统一延迟',
    'tcp-fast-open': 'TCP快速打开',
    'tcp-multi-path': '多路径TCP',
    'udp-fragment': 'UDP分段',
    'sniff': '协议探测',
    'sniff-override-destination': '探测域名覆盖目标地址',
    authentication: 'Http/Socks 验证用户',
    'skip-auth-prefixes': '跳过验证的IP段',
    'store-cache': '持久化缓存',
    'store-fake-ip': '持久化Fake-IP',
    'geo-auto-update': 'GEO 自动更新',
    'geo-update-interval': 'GEO 自动更新间隔',
    'lan-allowed-ips': '允许连接的地址段',
    'lan-disallowed-ips': '禁止连接的IP地址段',
    tun: {
      enable: '启用TUN',
      stack: 'TUN模式堆栈',
      interface_name: 'TUN网卡名称',
      'auto-route': '自动设置全局路由',
      'auto-detect-interface': '自动选择流量出口接口',
      'dns-hijack': 'dns 劫持',
      'strict-route': '严格路由',
      mtu: '最大传输单元',
      'endpoint-independent-nat': '独立于端点的 NAT',
      system: 'System',
      gvisor: 'Gvisor',
      mixed: 'Mixed',
      lwip: 'LWIP'
    },
    dns: {
      enable: '启用DNS',
      'fake-ip-range-v4': 'Fake-IP 范围(IPV4)',
      'fake-ip-range-v6': 'Fake-IP 范围(IPV6)',
      'fake-ip-filter': 'Fake-IP 过滤',
      'fake-ip': 'Fake-IP',
      'local-dns': '本地DNS',
      'remote-dns': '远程DNS',
      'resolver-dns': '解析DNS',
      'remote-resolver-dns': '远程解析DNS',
      'final-dns': '回退DNS',
      strategy: {
        name : '策略',
        prefer_ipv4: 'IPV4优先',
        prefer_ipv6: 'IPV6优先',
        ipv4_only: '只使用IPV4',
        ipv6_only: '只使用IPV6',
      }
    },
    tls: {
      certificate: '证书(PEM格式/路径)',
      'private-key': '私钥(PEM格式/路径)'
    },
    'global-client-fingerprint': '全局客户端指纹',
    tracing: '性能分析引擎',
    'sniff-tls-sni': '嗅探TLS SNI',
    'redirect-to-tun': 'eBPF 重定向到 TUN',
    proxyGroups: {
      name: '名称',
      lazy: 'Lazy',
      'disable-udp': '禁用UDP',
      interval: '间隔',
      tolerance: '容差',
      url: '测速链接',
      filter: '过滤',
      notFound: '部分订阅或节点已丢失，请清理',
      needToAdd: '至少添加一个节点或订阅',
      sort: '查看和排序',
      type: {
        name: '类型',
        select: '手动选择',
        'url-test': '自动测速',
        fallback: '自动回退',
        relay: '链式代理',
        'load-balance': '负载均衡',
        Selector: '手动选择',
        UrlTest: '自动测速',
        Fallback: '自动回退',
        Relay: '链式代理',
        LoadBalance: '负载均衡'
      },
      strategy: {
        name: '负载均衡策略',
        'consistent-hashing': 'consistent-hashing',
        'round-robin': 'round-robin'
      },
      empty: '该订阅分组内没有可用节点'
    },
    rules: {
      payload: '载荷',
      proxy: '代理',
      ruleset: '规则组',
      rulesets: '规则组列表',
      needGeodataMode: '请在高级设置中打开"GEO数据模式"',
      notFound: '代理组不存在',
      type: {
        name: '类型',
        DOMAIN: '域名',
        GEOIP: '国家IP代码规则',
        GEOSITE: '域名集合',
        IPSET: 'IP集',
        SCRIPT: '脚本',
        MATCH: '全匹配',
        'DOMAIN-SUFFIX': '域名后缀',
        'DOMAIN-KEYWORD': '域名关键词',
        'IP-CIDR': 'IPv4地址段',
        'IP-CIDR6': 'IPv6地址段',
        'SRC-PORT': '源端口',
        'DST-PORT': '目标端口',
        'PROCESS-NAME': '源进程名',
        'PROCESS-PATH': '源进程路径',
        'RULE-SET': '规则集',
        'SRC-IP-CIDR': '源IP段地址'
      }
    },
    name: 'sing-box',
    standard: '标准',
    memconservative: '适用小内存设备',
    chrome: 'Chrome',
    firefox: 'Firefox',
    safari: 'Safari',
    iOS: 'IOS',
    android: 'Android',
    edge: 'Edge',
    '360': '360',
    qq: 'QQ',
    random: '随机',
    always: '开启',
    strict: '自动',
    off: '关闭',
    notFound: '无内核',
    requestFailed: '获取失败',
    local: '本地',
    remote: '远程',
    update: '更新',
    restart: '重启内核'
  },
  router: {
    overview: '概览',
    subscribes: '订阅',
    rulesets: '规则组',
    settings: '设置',
    debug: '调试',
    components: '组件预览',
    about: '关于',
    profiles: '配置',
    kernel: '内核'
  },
  home: {
    mode: '代理模式',
    global: '全局',
    rule: '规则',
    direct: '直连',
    quickStart: '快速开始',
    noProfile: '欢迎使用 {0}，点击按钮开始。',
    initSuccessful: '初始化配置、订阅成功',
    initFailed: '更新订阅时出错，请手动更新订阅',
    overview: {
      expandAll: '展开全部',
      collapseAll: '收缩全部',
      refresh: '刷新',
      delayTest: '延迟测试',
      stop: '停止内核',
      viewlog: '查看日志',
      start: '启动内核',
      noLogs: '日志为空',
      systemProxy: '系统代理',
      tunMode: 'TUN模式',
      traffic: '流量',
      realtimeTraffic: '实时流量',
      totalTraffic: '总流量',
      connections: '活动连接',
      memory: '内存',
      transmit: '上行速率',
      receive: '下行速率',
      settings: '内核设置',
      settingsTips: '暂时生效，持久化请修改配置文件',
      updateGEO: '更新 GEO',
      notSupportSocks: '系统不支持socks代理',
      needPort: '请先设置代理端口'
    },
    controller: {
      name: '控制器',
      autoClose: '自动断开连接',
      unAvailable: '展示不可用节点',
      cardMode: '卡片模式'
    },
    connections: {
      host: '主机',
      inbound: '入站模式',
      rule: '匹配规则',
      chains: '链路',
      upload: '上行流量',
      download: '下行流量',
      time: '连接时间',
      close: '关闭连接',
      addToDirect: '添加到直连',
      addToProxy: '添加到代理',
      addToReject: '添加到拦截'
    }
  },
  subscribe: {
    http: '远程',
    file: '本地',
    name: '名称',
    url: '链接',
    convert: '订阅转换',
    website: '官网',
    path: '保存路径',
    include: '包含',
    exclude: '排除',
    proxyPrefix: '代理前缀',
    updating: '更新中',
    useragent: '用户代理',
    resetUserAgent: '重置用户代理'
  },
  subscribes: {
    download: '下行流量',
    upload: '上行流量',
    total: '总流量',
    expire: '过期时间',
    subtype: '订阅类型',
    website: '官网',
    empty: '订阅列表为空，请先{action}订阅。',
    enterLink: '输入订阅链接',
    proxyCount: '代理数量',
    editProxies: '编辑节点',
    proxies: {
      type: '类型',
      name: '名称'
    }
  },
  profile: {
    name: '名称',
    generalSettings: '通用设置',
    advancedSettings: '高级设置',
    step: {
      name: '名称设置',
      general: '通用设置',
      tun: 'TUN 设置',
      dns: 'DNS 设置',
      groups: '代理组设置',
      rules: '规则设置'
    },
    proxies: '使用节点',
    use: '使用订阅',
    noSubs: '没有可用的订阅'
  },
  profiles: {
    shouldStop: '请先停止内核',
    empty: '配置列表为空，请先{action}配置。',
    copytoClipboard: '生成配置到剪切板',
    copy: '复制为模板',
    paste: '粘贴模板',
    clearClipboard: '清空模板'
  },
  ruleset: {
    http: 'HTTP',
    file: 'FILE',
    format: {
      name: '文件格式',
      source: '源文件',
      binary: '二进制'
    },
    rulesetType: '规则组类型',
    name: '名称',
    url: '链接',
    path: '保存路径',
    interval: '更新间隔',
    updating: '更新中'
  },
  rulesets: {
    empty: '规则组列表为空. 请先{action}规则组。',
    rulesetCount: '规则数量',
    editRuleset: '编辑规则组列表'
  },
  settings: {
    general: '通用',
    theme: {
      name: '主题',
      light: '浅色',
      dark: '深色',
      auto: '跟随系统'
    },
    color: {
      name: '颜色',
      default: '默认',
      orange: '橘色',
      pink: '粉色',
      skyblue: '天蓝色'
    },
    fontFamily: '字体',
    resetFont: '重置字体',
    appFolder: {
      name: '应用程序文件夹',
      open: '打开应用程序文件夹'
    },
    lang: {
      name: '语言',
      zh: '简体中文',
      en: 'English'
    },
    windowState: {
      normal: '以普通窗口启动',
      maximised: '最大化',
      minimised: '最小化窗口启动',
      fullscreen: '全屏'
    },
    needRestart: '重启生效',
    exitOnClose: '关闭窗口时退出程序',
    closeKernelOnExit: '退出程序时同时关闭内核',
    autoSetSystemProxy: '自动配置系统代理',
    autoStartKernel: '自动启动内核程序',
    admin: '以管理员身份运行',
    startup: {
      name: '开机时启动',
      delay: '延迟(秒)'
    },
    kernel: {
      branch: '分支',
      main: '主分支',
      latest: '最新分支'
    },
    userAgent: {
      name: '用户代理(User-Agent)',
      reset: ' 重置用户代理'
    }
  },
  about: {
    new: '新版本',
    restart: '重启软件',
    noNeedUpdate: '已经是最新版本，无需更新',
    noDownloadLink: '没有发现下载链接',
    updateSuccessful: '更新完成，请重启软件',
    newVersion: '发现新版本',
    latestVersion: '已经是最新版本了'
  },
  titlebar: {
    resetSize: '重置窗口'
  },
  format: {
    seconds: '秒',
    minutes: '分钟',
    hours: '小时',
    days: '天',
    months: '月',
    years: '年',
    second: '秒',
    minute: '分钟',
    hour: '小时',
    day: '天',
    month: '月',
    year: '年',
    ago: '前',
    later: '后'
  }
}
