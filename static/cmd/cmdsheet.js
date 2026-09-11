// ============================================
// CMDSHEET CONFIG
// Edit this file to customize your commands
//
// name field (shown on the card, click to open the popup):
//   Plain text title/description. No "#" prefix, no command.
//
// desc field (shown in full in the popup when you click name):
//   Lines starting with "#" render as comments (muted green).
//   Other lines render as commands (highlighted in the
//   category color). Leave desc empty/omitted to show
//   "暂无详情" in the popup.
// ============================================

const CMDSHEET = {
  categories: [
    {
      id: "system",
      title: "System",
      titleZh: "系统管理",
      color: "cyan",
      commands: [
        {
          name: "更新系统和所有软件",
          code: "apt update -y && apt dist-upgrade -y",
          desc: "# 建议先单独执行 apt update 确认可更新列表\n# 生产环境操作前请提前做好快照备份\napt list --upgradable"
        },
        {
          name: "列出进程并按名称过滤",
          code: "ps aux | grep [PROCESS]",
          desc: "# PROCESS 支持正则表达式\n# 想精确匹配进程名可以加 -w 参数\nps -ef | grep -w [PROCESS]"
        },
        {
          name: "以人类可读格式查看磁盘空间占用",
          code: "df -h",
          desc: "# 只看某个目录占用可以指定路径\ndf -h /var"
        },
        {
          name: "以人类可读格式查看内存使用情况",
          code: "free -h",
          desc: "# 想查看每个进程占用内存可以配合ps\nps aux --sort=-%mem | head"
        },
        {
          name: "查看内核版本与系统信息",
          code: "uname -a",
          desc: "# 只看内核版本号可以用\nuname -r"
        },
        {
          name: "清空历史记录并写入自定义常用命令",
          code: 'history -c && echo "自定义" > ~/.bash_history && history -c',
          desc: "# 把「自定义」替换成你想保留的常用命令，每行一条\n# 例如：\ncat > ~/.bash_history << EOF\nls -la\ncd /var/log\ndocker ps\nEOF"
        }
      ]
    },
    {
      id: "network",
      title: "Network",
      titleZh: "网络管理",
      color: "magenta",
      commands: [
        {
          name: "扫描全部端口并识别服务版本",
          code: "nmap -sV -p- [TARGET]",
          desc: "# 全端口扫描耗时较长\n# 建议先用默认top1000端口快速测试\nnmap -sV [TARGET]"
        },
        {
          name: "查看正在监听的TCP端口及对应进程",
          code: "ss -tlnp",
          desc: "# 想同时查看UDP监听端口可以加 -u\nss -tulnp"
        },
        {
          name: "只获取HTTP响应头，不下载正文",
          code: "curl -I https://example.com",
          desc: "# 想跟踪重定向可以加 -L 参数\ncurl -IL https://example.com"
        },
        {
          name: "发送4个ICMP包测试主机可达性",
          code: "ping -c 4 [HOST]",
          desc: "# Windows系统下参数是 -n 而不是 -c\nping -n 4 [HOST]"
        }
      ]
    },
    {
      id: "files",
      title: "File",
      titleZh: "文件操作",
      color: "green",
      commands: [
        {
          name: "查找大于100MB的文件",
          code: "find . -type f -size +100M",
          desc: "# 想按大小排序输出可以配合 du 命令\ndu -ah . | sort -rh | head -20"
        },
        {
          name: "在当前目录递归搜索指定内容",
          code: 'grep -r "pattern" .',
          desc: '# 想忽略大小写匹配可以加 -i 参数\ngrep -ri "pattern" .'
        },
        {
          name: "打包压缩指定目录为tar.gz",
          code: "tar -czvf archive.tar.gz [DIR]",
          desc: "# 解压时使用\ntar -xzvf archive.tar.gz"
        },
        {
          name: "增量同步文件到本地或远程目标",
          code: "rsync -avz [SRC] [DEST]",
          desc: "# 想先模拟执行不实际同步可以加 --dry-run 测试\nrsync -avz --dry-run [SRC] [DEST]"
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
          name: "列出所有容器，包括已停止的",
          code: "docker ps -a",
          desc: "# 只看正在运行的容器去掉 -a 参数即可\ndocker ps"
        },
        {
          name: "清理未使用的容器、网络和镜像",
          code: "docker system prune -f",
          desc: "# 该操作不可恢复，请确认没有需要保留的镜像\n# 想连同未使用的卷一起清理可以加 --volumes\ndocker system prune -af --volumes"
        },
        {
          name: "后台启动docker-compose定义的全部服务",
          code: "docker compose up -d",
          desc: "# 想看启动过程日志可以去掉 -d 参数\ndocker compose up"
        },
        {
          name: "实时查看指定容器的日志",
          code: "docker logs -f [CONTAINER]",
          desc: "# 只看最近100行日志可以加 --tail\ndocker logs -f --tail 100 [CONTAINER]"
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
          name: "撤销上一次提交，改动保留在暂存区",
          code: "git reset --soft HEAD~1",
          desc: "# 如果想连改动一起丢弃，把 --soft 换成 --hard\n# --hard 会丢失改动，请谨慎使用"
        },
        {
          name: "带安全检查的强制推送",
          code: "git push --force-with-lease",
          desc: "# 团队协作时优先使用 --force-with-lease 而不是 --force\n# 可以避免覆盖他人已推送的提交"
        },
        {
          name: "交互式整理最近3次提交",
          code: "git rebase -i HEAD~3",
          desc: "# 编辑器中把要合并的提交前缀由pick改成squash\n# 保存后可以将多条提交合并为一条"
        },
        {
          name: "暂存当前改动并附加备注",
          code: 'git stash push -m "wip"',
          desc: "# 恢复暂存的改动使用\ngit stash pop"
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
          name: "以root身份进入MySQL交互命令行",
          code: "mysql -u root -p",
          desc: "# 想连接远程数据库可以加 -h 参数\nmysql -h [HOST] -u root -p"
        },
        {
          name: "导出PostgreSQL数据库为SQL备份文件",
          code: "pg_dump -U user dbname > backup.sql",
          desc: "# 恢复备份使用\npsql -U user dbname < backup.sql"
        },
        {
          name: "检测Redis服务是否正常响应",
          code: "redis-cli ping",
          desc: "# 想测试指定库编号可以加 -n\nredis-cli -n 1 ping"
        },
        {
          name: "导出MongoDB数据库到本地备份目录",
          code: "mongodump --db mydb --out /backup",
          desc: "# 恢复备份使用\nmongorestore --db mydb /backup/mydb"
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
          name: "列出所有命名空间下的Pod",
          code: "kubectl get pods -A",
          desc: "# 只看某个命名空间可以用 -n 替代 -A\nkubectl get pods -n [NAMESPACE]"
        },
        {
          name: "实时查看指定Pod的日志",
          code: "kubectl logs -f pod-name",
          desc: "# 多容器Pod需要指定容器名\nkubectl logs -f pod-name -c container-name"
        },
        {
          name: "根据YAML清单创建或更新资源",
          code: "kubectl apply -f manifest.yaml",
          desc: "# 想先预览变更而不实际应用可以加 --dry-run=client\nkubectl apply -f manifest.yaml --dry-run=client"
        },
        {
          name: "列出所有命名空间下的Helm发布",
          code: "helm list --all-namespaces",
          desc: "# 只看某个命名空间可以去掉 --all-namespaces\nhelm list -n [NAMESPACE]"
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
          name: "生成4096位RSA自签名SSL证书",
          code: "openssl req -x509 -newkey rsa:4096",
          desc: "# 建议加上 -days 参数指定有效期，例如365天\nopenssl req -x509 -newkey rsa:4096 -days 365"
        },
        {
          name: "生成ed25519算法的SSH密钥对",
          code: 'ssh-keygen -t ed25519 -C "email"',
          desc: '# 想指定保存路径可以加 -f 参数\nssh-keygen -t ed25519 -f ~/.ssh/id_custom -C "email"'
        },
        {
          name: "交互式创建新的GPG密钥对",
          code: "gpg --full-generate-key",
          desc: "# 想查看已生成的密钥列表\ngpg --list-keys"
        },
        {
          name: "查看fail2ban各防护规则状态",
          code: "fail2ban-client status",
          desc: "# 想看某个具体jail的详情，例如sshd\nfail2ban-client status sshd"
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
          name: "交互式实时查看CPU与内存占用",
          code: "htop",
          desc: "# 想按内存使用排序可以按大写M键\n# 想按CPU使用排序可以按大写P键"
        },
        {
          name: "只显示有实际磁盘IO活动的进程",
          code: "iotop -o",
          desc: "# 通常需要root权限运行\nsudo iotop -o"
        },
        {
          name: "实时查看指定systemd服务的日志",
          code: "journalctl -u service -f",
          desc: "# 只看最近50行可以加 -n 50\njournalctl -u service -n 50 -f"
        },
        {
          name: "每1秒采集一次CPU使用率，共5次",
          code: "sar -u 1 5",
          desc: "# 想同时记录到文件方便后续分析可以加 -o\nsar -u 1 5 -o /tmp/sar.log"
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
          name: "查看AWS账户下所有S3存储桶",
          code: "aws s3 ls",
          desc: "# 想查看某个桶下的文件列表\naws s3 ls s3://bucket-name"
        },
        {
          name: "列出Google Cloud所有计算实例",
          code: "gcloud compute instances list",
          desc: "# 只看某个项目下的实例可以加 --project\ngcloud compute instances list --project=[PROJECT_ID]"
        },
        {
          name: "列出Azure订阅下所有资源组",
          code: "az group list",
          desc: "# 只看某个订阅下的资源组可以先切换订阅\naz account set --subscription [SUBSCRIPTION_ID]"
        },
        {
          name: "预览Terraform将执行的资源变更",
          code: "terraform plan",
          desc: "# 确认无误后执行\nterraform apply"
        }
      ]
    }
  ]
};
