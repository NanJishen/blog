// ============================================
// CMDSHEET CONFIG
// Edit this file to customize your commands
//
// desc format:
//   Lines starting with "#" render as comments
//   (muted green). Any other line renders as a
//   command (highlighted in the category color).
//   Leave desc empty/omitted to show "暂无详情".
// ============================================

const CMDSHEET = {
  categories: [
    {
      id: "system",
      title: "System Operations",
      titleZh: "系统操作",
      color: "cyan",
      commands: [
        {
          name: "Process List",
          code: "ps aux | grep [PROCESS]",
          desc: "# 列出进程并按名称过滤\nps aux | grep [PROCESS]"
        },
        {
          name: "Disk Usage",
          code: "df -h",
          desc: "# 以人类可读格式查看磁盘空间占用\ndf -h"
        },
        {
          name: "Memory Usage",
          code: "free -h",
          desc: "# 以人类可读格式查看内存使用情况\nfree -h"
        },
        {
          name: "System Info",
          code: "uname -a",
          desc: "# 查看内核版本与系统信息\nuname -a"
        }
      ]
    },
    {
      id: "network",
      title: "Network Protocols",
      titleZh: "网络协议",
      color: "magenta",
      commands: [
        {
          name: "Port Scan",
          code: "nmap -sV -p- [TARGET]",
          desc: "# 扫描全部端口并识别服务版本\nnmap -sV -p- [TARGET]"
        },
        {
          name: "Listen Ports",
          code: "ss -tlnp",
          desc: "# 查看正在监听的TCP端口及对应进程\nss -tlnp"
        },
        {
          name: "HTTP Headers",
          code: "curl -I https://example.com",
          desc: "# 只获取HTTP响应头，不下载正文\ncurl -I https://example.com"
        },
        {
          name: "Ping Host",
          code: "ping -c 4 [HOST]",
          desc: "# 发送4个ICMP包测试主机可达性\nping -c 4 [HOST]"
        }
      ]
    },
    {
      id: "files",
      title: "File Operations",
      titleZh: "文件操作",
      color: "green",
      commands: [
        {
          name: "Find Large Files",
          code: "find . -type f -size +100M",
          desc: "# 查找大于100MB的文件\nfind . -type f -size +100M"
        },
        {
          name: "Recursive Search",
          code: 'grep -r "pattern" .',
          desc: '# 在当前目录递归搜索指定内容\ngrep -r "pattern" .'
        },
        {
          name: "Archive Directory",
          code: "tar -czvf archive.tar.gz [DIR]",
          desc: "# 打包压缩指定目录为tar.gz\ntar -czvf archive.tar.gz [DIR]"
        },
        {
          name: "Sync Files",
          code: "rsync -avz [SRC] [DEST]",
          desc: "# 增量同步文件到本地或远程目标\nrsync -avz [SRC] [DEST]"
        }
      ]
    },
    {
      id: "docker",
      title: "Container Ops",
      titleZh: "容器操作",
      color: "yellow",
      commands: [
        {
          name: "List Containers",
          code: "docker ps -a",
          desc: "# 列出所有容器，包括已停止的\ndocker ps -a"
        },
        {
          name: "Clean Up",
          code: "docker system prune -f",
          desc: "# 清理未使用的容器、网络和镜像\ndocker system prune -f"
        },
        {
          name: "Compose Up",
          code: "docker compose up -d",
          desc: "# 后台启动docker-compose定义的全部服务\ndocker compose up -d"
        },
        {
          name: "Follow Container Logs",
          code: "docker logs -f [CONTAINER]",
          desc: "# 实时查看指定容器的日志\ndocker logs -f [CONTAINER]"
        }
      ]
    },
    {
      id: "git",
      title: "Version Control",
      titleZh: "版本控制",
      color: "red",
      commands: [
        {
          name: "Undo Last Commit",
          code: "git reset --soft HEAD~1",
          desc: "# 撤销上一次提交，改动保留在暂存区\ngit reset --soft HEAD~1"
        },
        {
          name: "Force Push",
          code: "git push --force-with-lease",
          desc: "# 带安全检查的强制推送\ngit push --force-with-lease"
        },
        {
          name: "Interactive Rebase",
          code: "git rebase -i HEAD~3",
          desc: "# 交互式整理最近3次提交\ngit rebase -i HEAD~3"
        },
        {
          name: "Stash Changes",
          code: 'git stash push -m "wip"',
          desc: '# 暂存当前改动并附加备注\ngit stash push -m "wip"'
        }
      ]
    },
    {
      id: "database",
      title: "Database",
      titleZh: "数据库",
      color: "purple",
      commands: [
        {
          name: "MySQL Login",
          code: "mysql -u root -p",
          desc: "# 以root身份进入MySQL交互命令行\nmysql -u root -p"
        },
        {
          name: "PostgreSQL Backup",
          code: "pg_dump -U user dbname > backup.sql",
          desc: "# 导出PostgreSQL数据库为SQL备份文件\npg_dump -U user dbname > backup.sql"
        },
        {
          name: "Redis Ping",
          code: "redis-cli ping",
          desc: "# 检测Redis服务是否正常响应\nredis-cli ping"
        },
        {
          name: "MongoDB Backup",
          code: "mongodump --db mydb --out /backup",
          desc: "# 导出MongoDB数据库到本地备份目录\nmongodump --db mydb --out /backup"
        }
      ]
    },
    {
      id: "k8s",
      title: "Kubernetes",
      titleZh: "Kubernetes",
      color: "orange",
      commands: [
        {
          name: "List All Pods",
          code: "kubectl get pods -A",
          desc: "# 列出所有命名空间下的Pod\nkubectl get pods -A"
        },
        {
          name: "Follow Pod Logs",
          code: "kubectl logs -f pod-name",
          desc: "# 实时查看指定Pod的日志\nkubectl logs -f pod-name"
        },
        {
          name: "Apply Manifest",
          code: "kubectl apply -f manifest.yaml",
          desc: "# 根据YAML清单创建或更新资源\nkubectl apply -f manifest.yaml"
        },
        {
          name: "List Helm Releases",
          code: "helm list --all-namespaces",
          desc: "# 列出所有命名空间下的Helm发布\nhelm list --all-namespaces"
        }
      ]
    },
    {
      id: "security",
      title: "Security",
      titleZh: "安全",
      color: "blue",
      commands: [
        {
          name: "Generate Self-Signed Cert",
          code: "openssl req -x509 -newkey rsa:4096",
          desc: "# 生成4096位RSA自签名SSL证书\nopenssl req -x509 -newkey rsa:4096"
        },
        {
          name: "Generate SSH Key",
          code: 'ssh-keygen -t ed25519 -C "email"',
          desc: '# 生成ed25519算法的SSH密钥对\nssh-keygen -t ed25519 -C "email"'
        },
        {
          name: "Generate GPG Key",
          code: "gpg --full-generate-key",
          desc: "# 交互式创建新的GPG密钥对\ngpg --full-generate-key"
        },
        {
          name: "Check fail2ban Status",
          code: "fail2ban-client status",
          desc: "# 查看fail2ban各防护规则状态\nfail2ban-client status"
        }
      ]
    },
    {
      id: "monitoring",
      title: "Monitoring",
      titleZh: "监控",
      color: "pink",
      commands: [
        {
          name: "Process Monitor",
          code: "htop",
          desc: "# 交互式实时查看CPU与内存占用\nhtop"
        },
        {
          name: "Disk IO Monitor",
          code: "iotop -o",
          desc: "# 只显示有实际磁盘IO活动的进程\niotop -o"
        },
        {
          name: "Follow Service Logs",
          code: "journalctl -u service -f",
          desc: "# 实时查看指定systemd服务的日志\njournalctl -u service -f"
        },
        {
          name: "CPU Usage Sample",
          code: "sar -u 1 5",
          desc: "# 每1秒采集一次CPU使用率，共5次\nsar -u 1 5"
        }
      ]
    },
    {
      id: "cloud",
      title: "Cloud",
      titleZh: "云服务",
      color: "teal",
      commands: [
        {
          name: "List S3 Buckets",
          code: "aws s3 ls",
          desc: "# 查看AWS账户下所有S3存储桶\naws s3 ls"
        },
        {
          name: "List GCE Instances",
          code: "gcloud compute instances list",
          desc: "# 列出Google Cloud所有计算实例\ngcloud compute instances list"
        },
        {
          name: "List Resource Groups",
          code: "az group list",
          desc: "# 列出Azure订阅下所有资源组\naz group list"
        },
        {
          name: "Preview Plan",
          code: "terraform plan",
          desc: "# 预览Terraform将执行的资源变更\nterraform plan"
        }
      ]
    }
  ]
};
