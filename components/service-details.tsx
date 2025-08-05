"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle } from "lucide-react"

interface ServiceDetailProps {
  serviceIndex: number
}

export default function ServiceDetail({ serviceIndex }: ServiceDetailProps) {
  const services = [
    {
      title: "主体结构搭建",
      description: "境内外主体架构设计与搭建服务详情",
      icon: "building",
      details: {
        overview: "为RWA项目设计符合监管要求的境内外主体架构，确保合规性和税务优化。",
        steps: [
          { name: "需求分析", status: "completed", description: "分析项目具体需求和监管要求" },
          { name: "架构设计", status: "active", description: "设计最优的主体架构方案" },
          { name: "合规审查", status: "pending", description: "确保架构符合各地监管要求" },
          { name: "实施部署", status: "pending", description: "协助完成主体架构搭建" },
        ],
        metrics: {
          completed: 12,
          inProgress: 3,
          success_rate: 95.8,
        },
      },
    },
    {
      title: "资产审计对接",
      description: "专业审计机构与律所对接服务",
      icon: "filecheck",
      details: {
        overview: "协调顶级审计机构和律师事务所，为RWA项目提供专业的审计和法律服务。",
        steps: [
          { name: "机构筛选", status: "completed", description: "筛选合适的审计机构和律所" },
          { name: "尽职调查", status: "active", description: "进行全面的资产尽职调查" },
          { name: "合规审计", status: "active", description: "执行专业的合规性审计" },
          { name: "报告出具", status: "pending", description: "出具正式的审计报告" },
        ],
        metrics: {
          completed: 8,
          inProgress: 4,
          success_rate: 92.3,
        },
      },
    },
    {
      title: "区块链确权",
      description: "资产确权与真实性核验服务",
      icon: "shield",
      details: {
        overview: "通过自主研发的区块链底层技术，实现资产的数字化确权和真实性验证。",
        steps: [
          { name: "资产评估", status: "completed", description: "对资产进行全面评估和确认" },
          { name: "数字化建模", status: "completed", description: "建立资产的数字化模型" },
          { name: "上链存证", status: "completed", description: "将资产信息上链存证" },
          { name: "权属确认", status: "completed", description: "完成资产权属的区块链确认" },
        ],
        metrics: {
          completed: 15,
          inProgress: 0,
          success_rate: 100,
        },
      },
    },
    {
      title: "AI资产估值",
      description: "智能化资产价值评估服务",
      icon: "brain",
      details: {
        overview: "基于先进的AI算法和大数据分析，提供精准的资产估值服务。",
        steps: [
          { name: "数据收集", status: "completed", description: "收集相关市场和资产数据" },
          { name: "模型训练", status: "active", description: "训练专用的AI估值模型" },
          { name: "价值评估", status: "active", description: "执行智能化价值评估" },
          { name: "报告生成", status: "pending", description: "生成详细的估值报告" },
        ],
        metrics: {
          completed: 10,
          inProgress: 3,
          success_rate: 88.7,
        },
      },
    },
    {
      title: "代币化发行",
      description: "资产代币化与发行管理服务",
      icon: "coins",
      details: {
        overview: "将实物资产转化为数字代币，并管理整个发行流程。",
        steps: [
          { name: "代币设计", status: "pending", description: "设计代币的经济模型和技术架构" },
          { name: "智能合约", status: "pending", description: "开发和部署智能合约" },
          { name: "发行准备", status: "pending", description: "准备代币发行的各项工作" },
          { name: "正式发行", status: "pending", description: "执行代币的正式发行" },
        ],
        metrics: {
          completed: 5,
          inProgress: 3,
          success_rate: 85.2,
        },
      },
    },
    {
      title: "融资对接",
      description: "投资者匹配与融资服务",
      icon: "trending",
      details: {
        overview: "为RWA项目匹配合适的投资者，提供全方位的融资服务。",
        steps: [
          { name: "投资者筛选", status: "pending", description: "筛选匹配的投资者" },
          { name: "路演准备", status: "pending", description: "准备项目路演材料" },
          { name: "融资谈判", status: "pending", description: "协助进行融资谈判" },
          { name: "交易撮合", status: "pending", description: "完成最终的交易撮合" },
        ],
        metrics: {
          completed: 3,
          inProgress: 3,
          success_rate: 78.9,
        },
      },
    },
  ]

  const service = services[serviceIndex]
  if (!service) return null

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">{service.title}</CardTitle>
          <CardDescription>{service.description}</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground mb-6">{service.details.overview}</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div className="text-center p-4 border rounded-lg">
              <div className="text-2xl font-bold text-green-600">{service.details.metrics.completed}</div>
              <div className="text-sm text-muted-foreground">已完成项目</div>
            </div>
            <div className="text-center p-4 border rounded-lg">
              <div className="text-2xl font-bold text-blue-600">{service.details.metrics.inProgress}</div>
              <div className="text-sm text-muted-foreground">进行中项目</div>
            </div>
            <div className="text-center p-4 border rounded-lg">
              <div className="text-2xl font-bold text-purple-600">{service.details.metrics.success_rate}%</div>
              <div className="text-sm text-muted-foreground">成功率</div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>服务流程</CardTitle>
          <CardDescription>详细的服务执行步骤</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {service.details.steps.map((step, index) => (
              <div key={index} className="flex items-center space-x-4 p-4 border rounded-lg">
                <div className="flex-shrink-0">
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center ${
                      step.status === "completed"
                        ? "bg-green-500 text-white"
                        : step.status === "active"
                          ? "bg-blue-500 text-white"
                          : "bg-gray-200 text-gray-600"
                    }`}
                  >
                    {step.status === "completed" ? <CheckCircle className="w-4 h-4" /> : index + 1}
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <h4 className="font-medium">{step.name}</h4>
                    <Badge
                      variant={
                        step.status === "completed" ? "default" : step.status === "active" ? "secondary" : "outline"
                      }
                    >
                      {step.status === "completed" ? "已完成" : step.status === "active" ? "进行中" : "待开始"}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>合作机构</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <h4 className="font-medium">审计机构</h4>
              <div className="space-y-1">
                <div className="text-sm text-muted-foreground">• 德勤会计师事务所</div>
                <div className="text-sm text-muted-foreground">• 普华永道</div>
                <div className="text-sm text-muted-foreground">• 毕马威</div>
              </div>
            </div>
            <div className="space-y-2">
              <h4 className="font-medium">律师事务所</h4>
              <div className="space-y-1">
                <div className="text-sm text-muted-foreground">• 金杜律师事务所</div>
                <div className="text-sm text-muted-foreground">• 君合律师事务所</div>
                <div className="text-sm text-muted-foreground">• 中伦律师事务所</div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
