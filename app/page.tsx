"use client"

import { useState } from "react"
import {
  ArrowLeft,
  Cpu,
  MapPin,
  Zap,
  DollarSign,
  TrendingUp,
  Shield,
  Server,
  Activity,
  Thermometer,
  Clock,
  CheckCircle,
  AlertTriangle,
  Link,
  Coins,
  Leaf,
  Wind,
  Factory,
  Globe,
  FileCheck,
  Building2,
  Brain,
  BarChart3,
  Users,
  TrendingDown,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"

export default function RWAInvestmentPlatform() {
  const [currentView, setCurrentView] = useState("overview")
  const [activeTab, setActiveTab] = useState("business")
  const [activeSubTab, setActiveSubTab] = useState("business")
  const [selectedStep, setSelectedStep] = useState<number | null>(null)
  const [selectedService, setSelectedService] = useState<number | null>(null)
  const [showChart, setShowChart] = useState(false)
  const [chartData, setChartData] = useState({ title: "", type: "", data: [] })

  // 算力项目历史数据
  const algorithmChartData = {
    monthlyIncome: {
      title: "每代币月收入历史趋势",
      type: "income",
      data: [
        { month: "2023-09", value: 0.245 },
        { month: "2023-10", value: 0.252 },
        { month: "2023-11", value: 0.261 },
        { month: "2023-12", value: 0.268 },
        { month: "2024-01", value: 0.268 },
      ],
    },
    annualReturn: {
      title: "年化收益率历史趋势",
      type: "return",
      data: [
        { month: "2023-09", value: 9.2 },
        { month: "2023-10", value: 9.5 },
        { month: "2023-11", value: 9.8 },
        { month: "2023-12", value: 10.1 },
        { month: "2024-01", value: 10.05 },
      ],
    },
  }

  // 碳权项目历史数据
  const carbonChartData = {
    price: {
      title: "碳权价格历史趋势",
      type: "price",
      data: [
        { month: "2023-09", value: 72 },
        { month: "2023-10", value: 75 },
        { month: "2023-11", value: 78 },
        { month: "2023-12", value: 76 },
        { month: "2024-01", value: 80 },
      ],
    },
    expectedReturn: {
      title: "预期年化收益历史趋势",
      type: "return",
      data: [
        { month: "2023-09", value: 7.8 },
        { month: "2023-10", value: 8.1 },
        { month: "2023-11", value: 8.3 },
        { month: "2023-12", value: 8.2 },
        { month: "2024-01", value: 8.5 },
      ],
    },
  }

  const openChart = (data) => {
    setChartData(data)
    setShowChart(true)
  }

  const renderChart = () => {
    if (!chartData.data.length) return null

    const maxValue = Math.max(...chartData.data.map((d) => d.value))
    const minValue = Math.min(...chartData.data.map((d) => d.value))
    const range = maxValue - minValue

    return (
      <div className="space-y-4">
        <div className="h-64 relative border rounded-lg p-4 bg-gray-50">
          <div className="flex justify-between items-end h-full">
            {chartData.data.map((point, index) => {
              const height = range > 0 ? ((point.value - minValue) / range) * 200 + 20 : 120
              return (
                <div key={index} className="flex flex-col items-center space-y-2">
                  <div className="text-xs font-medium text-blue-600">{point.value}</div>
                  <div
                    className="bg-blue-500 rounded-t"
                    style={{
                      height: `${height}px`,
                      width: "40px",
                    }}
                  />
                  <div className="text-xs text-gray-600 transform -rotate-45 origin-center">{point.month}</div>
                </div>
              )
            })}
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div>
            <span className="text-gray-500">最高值: </span>
            <span className="font-medium">
              {maxValue}
              {chartData.type === "price" ? " ¥/tCO2e" : chartData.type === "return" ? "%" : " ¥"}
            </span>
          </div>
          <div>
            <span className="text-gray-500">最低值: </span>
            <span className="font-medium">
              {minValue}
              {chartData.type === "price" ? " ¥/tCO2e" : chartData.type === "return" ? "%" : " ¥"}
            </span>
          </div>
          <div>
            <span className="text-gray-500">平均值: </span>
            <span className="font-medium">
              {(chartData.data.reduce((sum, d) => sum + d.value, 0) / chartData.data.length).toFixed(2)}
              {chartData.type === "price" ? " ¥/tCO2e" : chartData.type === "return" ? "%" : " ¥"}
            </span>
          </div>
          <div>
            <span className="text-gray-500">趋势: </span>
            <span className="font-medium flex items-center">
              {chartData.data[chartData.data.length - 1].value > chartData.data[0].value ? (
                <>
                  <TrendingUp className="w-4 h-4 text-green-500 mr-1" />
                  上升
                </>
              ) : (
                <>
                  <TrendingDown className="w-4 h-4 text-red-500 mr-1" />
                  下降
                </>
              )}
            </span>
          </div>
        </div>
      </div>
    )
  }

  const handleNavigation = (view: string) => {
    setCurrentView(view)
  }

  // 服务详情数据
  const services = [
    {
      icon: Building2,
      title: "主体结构搭建",
      desc: "境内外主体架构设计与搭建服务",
      progress: 85,
      status: "进行中",
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
      icon: FileCheck,
      title: "资产审计对接",
      desc: "专业审计机构与律所对接服务",
      progress: 60,
      status: "待开始",
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
      icon: Shield,
      title: "区块链确权",
      desc: "资产确权与真实性核验服务",
      progress: 100,
      status: "已完成",
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
      icon: Brain,
      title: "AI资产估值",
      desc: "智能化资产价值评估服务",
      progress: 75,
      status: "进行中",
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
      icon: Coins,
      title: "代币化发行",
      desc: "资产代币化与发行管理服务",
      progress: 40,
      status: "待开始",
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
      icon: TrendingUp,
      title: "融资对接",
      desc: "投资者匹配与融资服务",
      progress: 30,
      status: "待开始",
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

  // 算力项目数据
  const algorithmProjectData = {
    id: "RWA004",
    name: "AI算力中心资产包",
    type: "算力资产",
    value: "¥3.2亿",
    status: "进行中",
    totalHashrate: "2.5 EH/s",
    locations: 3,
    utilization: 87.5,
    monthlyRevenue: "¥2,680万",
    lastUpdated: "2024-01-15 14:30:00",
  }

  const hashrateDist = [
    { location: "内蒙古呼和浩特", hashrate: "1.2 EH/s", percentage: 48, gpuCount: 1200, status: "运行中" },
    { location: "四川成都", hashrate: "0.8 EH/s", percentage: 32, gpuCount: 800, status: "运行中" },
    { location: "新疆乌鲁木齐", hashrate: "0.5 EH/s", percentage: 20, gpuCount: 500, status: "维护中" },
  ]

  const equipmentDetails = [
    {
      model: "NVIDIA H100",
      count: 800,
      hashrate: "1.2 EH/s",
      powerConsumption: "700W",
      status: "运行中",
      location: "呼和浩特",
    },
    {
      model: "NVIDIA A100",
      count: 600,
      hashrate: "0.8 EH/s",
      powerConsumption: "400W",
      status: "运行中",
      location: "成都",
    },
    {
      model: "NVIDIA RTX 4090",
      count: 500,
      hashrate: "0.5 EH/s",
      powerConsumption: "450W",
      status: "维护中",
      location: "乌鲁木齐",
    },
  ]

  const revenueData = [
    { month: "2023-10", mining: 1800, rental: 650, total: 2450 },
    { month: "2023-11", mining: 1950, rental: 720, total: 2670 },
    { month: "2023-12", mining: 2100, rental: 580, total: 2680 },
    { month: "2024-01", mining: 2200, rental: 480, total: 2680 },
  ]

  const blockchainRecords = [
    {
      hash: "0x1a2b3c4d5e6f...",
      type: "设备确权",
      timestamp: "2024-01-15 10:30:00",
      content: "NVIDIA H100 GPU设备确权上链",
      status: "已确认",
    },
    {
      hash: "0x2b3c4d5e6f7a...",
      type: "收入记录",
      timestamp: "2024-01-15 09:15:00",
      content: "2024年1月挖矿收入记录",
      status: "已确认",
    },
    {
      hash: "0x3c4d5e6f7a8b...",
      type: "运维记录",
      timestamp: "2024-01-14 16:45:00",
      content: "设备维护记录更新",
      status: "已确认",
    },
  ]

  const algorithmServiceSteps = [
    {
      step: 1,
      title: "资产评估与尽调",
      description: "对算力资产进行全面评估和尽职调查",
      status: "completed",
      details: ["算力规模评估", "设备状态检查", "收入能力分析", "风险评估报告"],
      completedDate: "2023-12-15",
    },
    {
      step: 2,
      title: "主体结构设计",
      description: "设计符合监管要求的境内外主体架构",
      status: "completed",
      details: ["SPV结构设计", "税务优化方案", "合规架构搭建", "法律文件准备"],
      completedDate: "2024-01-05",
    },
    {
      step: 3,
      title: "专业机构对接",
      description: "协调审计机构、律所等专业服务",
      status: "active",
      details: ["审计机构对接", "法律服务协调", "监管沟通", "合规性审查"],
      progress: 75,
    },
    {
      step: 4,
      title: "区块链确权",
      description: "通过区块链技术实现资产确权和溯源",
      status: "active",
      details: ["资产上链", "权属确认", "真实性验证", "智能合约部署"],
      progress: 90,
    },
    {
      step: 5,
      title: "AI智能估值",
      description: "基于AI算法的动态资产估值服务",
      status: "pending",
      details: ["智能估值模型", "市场数据分析", "价值动态跟踪", "估值报告生成"],
      progress: 0,
    },
    {
      step: 6,
      title: "代币化发行",
      description: "资产代币化和发行管理",
      status: "pending",
      details: ["代币设计", "发行管理", "流通监管", "投资者服务"],
      progress: 0,
    },
    {
      step: 7,
      title: "融资对接",
      description: "投资者匹配和融资服务",
      status: "pending",
      details: ["投资者匹配", "融资方案设计", "交易撮合", "后续服务"],
      progress: 0,
    },
  ]

  // 碳权项目数据
  const carbonProjectData = {
    totalCredits: "850,000 tCO2e",
    projectCount: 12,
    avgPrice: "¥80/tCO2e",
    monthlyTrading: "¥580万",
  }

  const carbonProjects = [
    {
      id: "CC001",
      name: "内蒙古风电碳减排项目",
      type: "可再生能源",
      location: "内蒙古呼和浩特",
      credits: "320,000 tCO2e",
      percentage: 37.6,
      status: "已认证",
      standard: "VCS",
      vintage: "2023",
      expiryDate: "2030-12-31",
    },
    {
      id: "CC002",
      name: "四川水电清洁发展项目",
      type: "水力发电",
      location: "四川成都",
      credits: "280,000 tCO2e",
      percentage: 32.9,
      status: "已认证",
      standard: "CDM",
      vintage: "2023",
      expiryDate: "2030-12-31",
    },
    {
      id: "CC003",
      name: "新疆光伏发电项目",
      type: "太阳能发电",
      location: "新疆乌鲁木齐",
      credits: "180,000 tCO2e",
      percentage: 21.2,
      status: "认证中",
      standard: "GS",
      vintage: "2024",
      expiryDate: "2031-12-31",
    },
    {
      id: "CC004",
      name: "森林碳汇项目",
      type: "林业碳汇",
      location: "云南昆明",
      credits: "70,000 tCO2e",
      percentage: 8.2,
      status: "已认证",
      standard: "CCER",
      vintage: "2023",
      expiryDate: "2033-12-31",
    },
  ]

  const tradingHistory = [
    { date: "2024-01-15", volume: "12,500 tCO2e", price: "¥82/tCO2e", amount: "¥102.5万", buyer: "华能集团" },
    { date: "2024-01-10", volume: "8,800 tCO2e", price: "¥79/tCO2e", amount: "¥69.5万", buyer: "中石化" },
    { date: "2024-01-05", volume: "15,200 tCO2e", price: "¥81/tCO2e", amount: "¥123.1万", buyer: "国家电网" },
    { date: "2023-12-28", volume: "20,000 tCO2e", price: "¥78/tCO2e", amount: "¥156万", buyer: "中海油" },
  ]

  const carbonServiceSteps = [
    {
      step: 1,
      title: "碳权资产评估",
      description: "对碳权资产进行全面评估和认证",
      status: "completed",
      details: ["项目真实性验证", "减排量计算", "认证标准对接", "价值评估报告"],
      completedDate: "2023-11-20",
    },
    {
      step: 2,
      title: "国际认证对接",
      description: "与国际权威认证机构对接",
      status: "completed",
      details: ["VCS认证", "CDM认证", "GS认证", "CCER认证"],
      completedDate: "2023-12-10",
    },
    {
      step: 3,
      title: "区块链存证",
      description: "碳权交易记录上链存证",
      status: "active",
      details: ["交易记录上链", "权属确认", "溯源验证", "智能合约"],
      progress: 85,
    },
    {
      step: 4,
      title: "AI价格预测",
      description: "基于AI的碳价预测模型",
      status: "active",
      details: ["价格预测模型", "市场分析", "风险评估", "投资建议"],
      progress: 70,
    },
    {
      step: 5,
      title: "代币化发行",
      description: "碳权资产代币化",
      status: "pending",
      details: ["代币设计", "发行准备", "合规审查", "投资者服务"],
      progress: 0,
    },
    {
      step: 6,
      title: "交易撮合",
      description: "碳权交易撮合服务",
      status: "pending",
      details: ["买卖双方匹配", "价格协商", "交易执行", "后续服务"],
      progress: 0,
    },
  ]

  // 算力订单数据
  const algorithmOrders = [
    {
      orderId: "ORD-2024-001",
      client: "字节跳动",
      orderType: "AI训练",
      gpuHours: "1,200小时",
      gpuType: "NVIDIA H100",
      location: "内蒙古呼和浩特",
      startTime: "2024-01-15 09:00:00",
      endTime: "2024-01-20 18:00:00",
      status: "执行中",
      revenue: "¥48万",
      blockchainHash: "0x1a2b3c4d5e6f7890abcdef1234567890",
      smartContractAddress: "0xabcdef1234567890abcdef1234567890abcdef12",
      distributionStatus: "已分配",
      distributionTime: "2024-01-20 19:30:00",
      tokenHolders: 125000,
      revenuePerToken: "¥3.84",
    },
    {
      orderId: "ORD-2024-002",
      client: "腾讯云",
      orderType: "大模型推理",
      gpuHours: "800小时",
      gpuType: "NVIDIA A100",
      location: "四川成都",
      startTime: "2024-01-12 14:00:00",
      endTime: "2024-01-18 10:00:00",
      status: "已完成",
      revenue: "¥32万",
      blockchainHash: "0x2b3c4d5e6f7890abcdef1234567890ab",
      smartContractAddress: "0xabcdef1234567890abcdef1234567890abcdef12",
      distributionStatus: "已分配",
      distributionTime: "2024-01-18 11:15:00",
      tokenHolders: 125000,
      revenuePerToken: "¥2.56",
    },
    {
      orderId: "ORD-2024-003",
      client: "阿里云",
      orderType: "科学计算",
      gpuHours: "2,000小时",
      gpuType: "NVIDIA H100",
      location: "内蒙古呼和浩特",
      startTime: "2024-01-10 08:00:00",
      endTime: "2024-01-25 20:00:00",
      status: "执行中",
      revenue: "¥80万",
      blockchainHash: "0x3c4d5e6f7890abcdef1234567890abcd",
      smartContractAddress: "0xabcdef1234567890abcdef1234567890abcdef12",
      distributionStatus: "待分配",
      distributionTime: "预计2024-01-25 21:00:00",
      tokenHolders: 125000,
      revenuePerToken: "¥6.40",
    },
    {
      orderId: "ORD-2024-004",
      client: "华为云",
      orderType: "图像渲染",
      gpuHours: "600小时",
      gpuType: "NVIDIA RTX 4090",
      location: "新疆乌鲁木齐",
      startTime: "2024-01-08 16:00:00",
      endTime: "2024-01-14 08:00:00",
      status: "已完成",
      revenue: "¥18万",
      blockchainHash: "0x4d5e6f7890abcdef1234567890abcdef",
      smartContractAddress: "0xabcdef1234567890abcdef1234567890abcdef12",
      distributionStatus: "已分配",
      distributionTime: "2024-01-14 09:30:00",
      tokenHolders: 125000,
      revenuePerToken: "¥1.44",
    },
    {
      orderId: "ORD-2024-005",
      client: "百度智能云",
      orderType: "深度学习",
      gpuHours: "1,500小时",
      gpuType: "NVIDIA A100",
      location: "四川成都",
      startTime: "2024-01-16 10:00:00",
      endTime: "2024-01-28 22:00:00",
      status: "待执行",
      revenue: "¥60万",
      blockchainHash: "0x5e6f7890abcdef1234567890abcdef12",
      smartContractAddress: "0xabcdef1234567890abcdef1234567890abcdef12",
      distributionStatus: "待分配",
      distributionTime: "预计2024-01-28 23:00:00",
      tokenHolders: 125000,
      revenuePerToken: "¥4.80",
    },
  ]

  // 智能合约分配记录
  const distributionRecords = [
    {
      orderId: "ORD-2024-002",
      totalRevenue: "¥32万",
      distributionTime: "2024-01-18 11:15:00",
      transactionHash: "0xabc123def456789012345678901234567890abcd",
      gasUsed: "0.0023 ETH",
      tokenHolders: 125000,
      successfulDistributions: 124987,
      failedDistributions: 13,
      averageGasPerDistribution: "21000 gas",
    },
    {
      orderId: "ORD-2024-001",
      totalRevenue: "¥48万",
      distributionTime: "2024-01-20 19:30:00",
      transactionHash: "0xdef456789012345678901234567890abcdef123",
      gasUsed: "0.0034 ETH",
      tokenHolders: 125000,
      successfulDistributions: 125000,
      failedDistributions: 0,
      averageGasPerDistribution: "21000 gas",
    },
  ]

  // 碳权交易订单数据
  const carbonOrders = [
    {
      orderId: "CRB-2024-001",
      buyer: "华能集团",
      orderType: "VCS碳权",
      volume: "12,500 tCO2e",
      price: "¥82/tCO2e",
      projectSource: "内蒙古风电项目",
      tradeTime: "2024-01-15 14:30:00",
      settlementTime: "2024-01-15 16:00:00",
      status: "已完成",
      revenue: "¥102.5万",
      blockchainHash: "0x9a8b7c6d5e4f3210abcdef1234567890",
      smartContractAddress: "0xfedcba0987654321fedcba0987654321fedcba09",
      distributionStatus: "已分配",
      distributionTime: "2024-01-15 17:30:00",
      tokenHolders: 68000,
      revenuePerToken: "¥15.07",
    },
    {
      orderId: "CRB-2024-002",
      buyer: "中石化",
      orderType: "CDM碳权",
      volume: "8,800 tCO2e",
      price: "¥79/tCO2e",
      projectSource: "四川水电项目",
      tradeTime: "2024-01-10 11:20:00",
      settlementTime: "2024-01-10 13:45:00",
      status: "已完成",
      revenue: "¥69.5万",
      blockchainHash: "0x8b7c6d5e4f3a2109abcdef1234567890",
      smartContractAddress: "0xfedcba0987654321fedcba0987654321fedcba09",
      distributionStatus: "已分配",
      distributionTime: "2024-01-10 15:15:00",
      tokenHolders: 68000,
      revenuePerToken: "¥10.22",
    },
    {
      orderId: "CRB-2024-003",
      buyer: "国家电网",
      orderType: "VCS碳权",
      volume: "15,200 tCO2e",
      price: "¥81/tCO2e",
      projectSource: "内蒙古风电项目",
      tradeTime: "2024-01-05 09:15:00",
      settlementTime: "2024-01-05 11:30:00",
      status: "已完成",
      revenue: "¥123.1万",
      blockchainHash: "0x7c6d5e4f3a2b1098abcdef1234567890",
      smartContractAddress: "0xfedcba0987654321fedcba0987654321fedcba09",
      distributionStatus: "已分配",
      distributionTime: "2024-01-05 13:00:00",
      tokenHolders: 68000,
      revenuePerToken: "¥18.10",
    },
    {
      orderId: "CRB-2024-004",
      buyer: "中海油",
      orderType: "GS碳权",
      volume: "20,000 tCO2e",
      price: "¥78/tCO2e",
      projectSource: "新疆光伏项目",
      tradeTime: "2023-12-28 15:45:00",
      settlementTime: "2023-12-28 17:20:00",
      status: "已完成",
      revenue: "¥156万",
      blockchainHash: "0x6d5e4f3a2b1c0987abcdef1234567890",
      smartContractAddress: "0xfedcba0987654321fedcba0987654321fedcba09",
      distributionStatus: "已分配",
      distributionTime: "2023-12-28 18:45:00",
      tokenHolders: 68000,
      revenuePerToken: "¥22.94",
    },
    {
      orderId: "CRB-2024-005",
      buyer: "宝钢集团",
      orderType: "CCER碳权",
      volume: "6,500 tCO2e",
      price: "¥85/tCO2e",
      projectSource: "云南森林碳汇项目",
      tradeTime: "2024-01-18 10:30:00",
      settlementTime: "2024-01-18 12:15:00",
      status: "交易中",
      revenue: "¥55.3万",
      blockchainHash: "0x5e4f3a2b1c0d8976abcdef1234567890",
      smartContractAddress: "0xfedcba0987654321fedcba0987654321fedcba09",
      distributionStatus: "待分配",
      distributionTime: "预计2024-01-18 14:00:00",
      tokenHolders: 68000,
      revenuePerToken: "¥8.13",
    },
    {
      orderId: "CRB-2024-006",
      buyer: "比亚迪",
      orderType: "VCS碳权",
      volume: "10,000 tCO2e",
      price: "¥83/tCO2e",
      projectSource: "内蒙古风电项目",
      tradeTime: "2024-01-20 14:00:00",
      settlementTime: "待结算",
      status: "待执行",
      revenue: "¥83万",
      blockchainHash: "0x4f3a2b1c0d8e7654abcdef1234567890",
      smartContractAddress: "0xfedcba0987654321fedcba0987654321fedcba09",
      distributionStatus: "待分配",
      distributionTime: "预计2024-01-20 16:30:00",
      tokenHolders: 68000,
      revenuePerToken: "¥12.21",
    },
  ]

  // 碳权智能合约分配记录
  const carbonDistributionRecords = [
    {
      orderId: "CRB-2024-003",
      totalRevenue: "¥123.1万",
      distributionTime: "2024-01-05 13:00:00",
      transactionHash: "0xfed123cba456789012345678901234567890fedc",
      gasUsed: "0.0019 ETH",
      tokenHolders: 68000,
      successfulDistributions: 68000,
      failedDistributions: 0,
      averageGasPerDistribution: "18500 gas",
    },
    {
      orderId: "CRB-2024-001",
      totalRevenue: "¥102.5万",
      distributionTime: "2024-01-15 17:30:00",
      transactionHash: "0xcba456fed789012345678901234567890fedcba",
      gasUsed: "0.0021 ETH",
      tokenHolders: 68000,
      successfulDistributions: 67995,
      failedDistributions: 5,
      averageGasPerDistribution: "18500 gas",
    },
    {
      orderId: "CRB-2024-004",
      totalRevenue: "¥156万",
      distributionTime: "2023-12-28 18:45:00",
      transactionHash: "0x456fed789cba012345678901234567890fedcba4",
      gasUsed: "0.0025 ETH",
      tokenHolders: 68000,
      successfulDistributions: 68000,
      failedDistributions: 0,
      averageGasPerDistribution: "18500 gas",
    },
  ]

  if (currentView === "algorithm") {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
        {/* Header */}
        <header className="bg-white border-b border-slate-200 shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center space-x-4">
                <Button variant="ghost" size="sm" onClick={() => handleNavigation("overview")}>
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  返回
                </Button>
                <div>
                  <h1 className="text-xl font-bold text-slate-900">{algorithmProjectData.name}</h1>
                  <p className="text-sm text-slate-500">
                    项目ID: {algorithmProjectData.id} • 最后更新: {algorithmProjectData.lastUpdated}
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Badge variant="secondary">区块链存证</Badge>
                <Badge variant="outline" className="text-green-600 border-green-200">
                  <Shield className="w-3 h-3 mr-1" />
                  已确权
                </Badge>
              </div>
            </div>
          </div>
        </header>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Key Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6 mb-8">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">总算力</CardTitle>
                <Cpu className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{algorithmProjectData.totalHashrate}</div>
                <p className="text-xs text-muted-foreground">分布在{algorithmProjectData.locations}个地区</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">利用率</CardTitle>
                <Activity className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{algorithmProjectData.utilization}%</div>
                <p className="text-xs text-muted-foreground">过去30天平均</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">月收入</CardTitle>
                <DollarSign className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{algorithmProjectData.monthlyRevenue}</div>
                <p className="text-xs text-muted-foreground">+8.5% 较上月</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">设备总数</CardTitle>
                <Server className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">2,500</div>
                <p className="text-xs text-muted-foreground">GPU计算单元</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">资产估值</CardTitle>
                <TrendingUp className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{algorithmProjectData.value}</div>
                <p className="text-xs text-muted-foreground">AI智能估值</p>
              </CardContent>
            </Card>
          </div>

          <Tabs value={activeSubTab} onValueChange={setActiveSubTab} className="space-y-6">
            <TabsList className="grid w-full grid-cols-9">
              <TabsTrigger value="overview">资产概览</TabsTrigger>
              <TabsTrigger value="distribution">算力分布</TabsTrigger>
              <TabsTrigger value="equipment">设备详情</TabsTrigger>
              <TabsTrigger value="revenue">收入分析</TabsTrigger>
              <TabsTrigger value="order-tracking">订单追踪</TabsTrigger>
              <TabsTrigger value="rwa-financing">RWA融资</TabsTrigger>
              <TabsTrigger value="service-flow">服务流程</TabsTrigger>
              <TabsTrigger value="blockchain">区块链存证</TabsTrigger>
              <TabsTrigger value="risks">风险评估</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>算力运行状态</CardTitle>
                    <CardDescription>实时监控各地区算力运行情况</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {hashrateDist.map((item, index) => (
                        <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                          <div className="flex items-center space-x-3">
                            <MapPin className="w-4 h-4 text-muted-foreground" />
                            <div>
                              <div className="font-medium">{item.location}</div>
                              <div className="text-sm text-muted-foreground">
                                {item.hashrate} • {item.gpuCount} GPU
                              </div>
                            </div>
                          </div>
                          <Badge variant={item.status === "运行中" ? "default" : "secondary"}>{item.status}</Badge>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>关键运营指标</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium">平均利用率</span>
                        <span className="text-sm text-muted-foreground">87.5%</span>
                      </div>
                      <Progress value={87.5} className="h-2" />

                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium">能效比 (J/TH)</span>
                        <span className="text-sm text-muted-foreground">23.5</span>
                      </div>
                      <Progress value={76} className="h-2" />

                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium">设备健康度</span>
                        <span className="text-sm text-muted-foreground">94.2%</span>
                      </div>
                      <Progress value={94.2} className="h-2" />

                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium">合约履约率</span>
                        <span className="text-sm text-muted-foreground">98.7%</span>
                      </div>
                      <Progress value={98.7} className="h-2" />
                    </div>
                  </CardContent>
                </Card>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>成本结构分析</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    <div className="text-center p-4 border rounded-lg">
                      <Zap className="w-8 h-8 mx-auto mb-2 text-yellow-500" />
                      <div className="text-lg font-bold">¥1,850万</div>
                      <div className="text-sm text-muted-foreground">电力成本/月</div>
                    </div>
                    <div className="text-center p-4 border rounded-lg">
                      <Thermometer className="w-8 h-8 mx-auto mb-2 text-blue-500" />
                      <div className="text-lg font-bold">¥320万</div>
                      <div className="text-sm text-muted-foreground">冷却成本/月</div>
                    </div>
                    <div className="text-center p-4 border rounded-lg">
                      <Server className="w-8 h-8 mx-auto mb-2 text-green-500" />
                      <div className="text-lg font-bold">¥180万</div>
                      <div className="text-sm text-muted-foreground">维护成本/月</div>
                    </div>
                    <div className="text-center p-4 border rounded-lg">
                      <DollarSign className="w-8 h-8 mx-auto mb-2 text-purple-500" />
                      <div className="text-lg font-bold">¥330万</div>
                      <div className="text-sm text-muted-foreground">净利润/月</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="distribution" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>算力地理分布</CardTitle>
                  <CardDescription>各地区算力分布及运行状态详情</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {hashrateDist.map((item, index) => (
                      <div key={index} className="border rounded-lg p-4">
                        <div className="flex justify-between items-start mb-4">
                          <div>
                            <h3 className="font-semibold text-lg">{item.location}</h3>
                            <p className="text-muted-foreground">
                              算力: {item.hashrate} ({item.percentage}%)
                            </p>
                          </div>
                          <Badge variant={item.status === "运行中" ? "default" : "secondary"}>{item.status}</Badge>
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                          <div>
                            <div className="text-sm text-muted-foreground">GPU数量</div>
                            <div className="font-medium">{item.gpuCount} 台</div>
                          </div>
                          <div>
                            <div className="text-sm text-muted-foreground">利用率</div>
                            <div className="font-medium">{85 + index * 2}%</div>
                          </div>
                          <div>
                            <div className="text-sm text-muted-foreground">电力成本</div>
                            <div className="font-medium">¥0.{35 + index}5/kWh</div>
                          </div>
                          <div>
                            <div className="text-sm text-muted-foreground">月收入</div>
                            <div className="font-medium">¥{(item.percentage * 26.8).toFixed(0)}万</div>
                          </div>
                        </div>

                        <Progress value={item.percentage} className="h-2" />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="equipment" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>设备清单</CardTitle>
                  <CardDescription>所有GPU设备的详细信息和运行状态</CardDescription>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>设备型号</TableHead>
                        <TableHead>数量</TableHead>
                        <TableHead>算力</TableHead>
                        <TableHead>功耗</TableHead>
                        <TableHead>位置</TableHead>
                        <TableHead>状态</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {equipmentDetails.map((item, index) => (
                        <TableRow key={index}>
                          <TableCell className="font-medium">{item.model}</TableCell>
                          <TableCell>{item.count} 台</TableCell>
                          <TableCell>{item.hashrate}</TableCell>
                          <TableCell>{item.powerConsumption}</TableCell>
                          <TableCell>{item.location}</TableCell>
                          <TableCell>
                            <Badge variant={item.status === "运行中" ? "default" : "secondary"}>{item.status}</Badge>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="revenue" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>收入趋势分析</CardTitle>
                  <CardDescription>过去4个月的收入构成和趋势</CardDescription>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>月份</TableHead>
                        <TableHead>挖矿收入</TableHead>
                        <TableHead>算力租赁</TableHead>
                        <TableHead>总收入</TableHead>
                        <TableHead>环比增长</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {revenueData.map((item, index) => (
                        <TableRow key={index}>
                          <TableCell className="font-medium">{item.month}</TableCell>
                          <TableCell>¥{item.mining}万</TableCell>
                          <TableCell>¥{item.rental}万</TableCell>
                          <TableCell className="font-medium">¥{item.total}万</TableCell>
                          <TableCell>
                            <Badge
                              variant={index > 0 && item.total > revenueData[index - 1].total ? "default" : "secondary"}
                            >
                              {index > 0
                                ? `${(((item.total - revenueData[index - 1].total) / revenueData[index - 1].total) * 100).toFixed(1)}%`
                                : "-"}
                            </Badge>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="order-tracking" className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">总订单数</CardTitle>
                    <BarChart3 className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">5</div>
                    <p className="text-xs text-muted-foreground">本月新增2个</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">订单收入</CardTitle>
                    <DollarSign className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">¥238万</div>
                    <p className="text-xs text-muted-foreground">已分配¥98万</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">分配成功率</CardTitle>
                    <CheckCircle className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">99.99%</div>
                    <p className="text-xs text-muted-foreground">智能合约自动分配</p>
                  </CardContent>
                </Card>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>订单实时追踪</CardTitle>
                  <CardDescription>每个订单都有完整的区块链存证和收入分配记录</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {algorithmOrders.map((order, index) => (
                      <div key={index} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                        <div className="flex justify-between items-start mb-4">
                          <div>
                            <div className="flex items-center space-x-2 mb-2">
                              <h3 className="font-semibold text-lg">{order.orderId}</h3>
                              <Badge
                                variant={
                                  order.status === "已完成"
                                    ? "default"
                                    : order.status === "执行中"
                                      ? "secondary"
                                      : "outline"
                                }
                              >
                                {order.status}
                              </Badge>
                              <Badge variant={order.distributionStatus === "已分配" ? "default" : "outline"}>
                                {order.distributionStatus}
                              </Badge>
                            </div>
                            <p className="text-muted-foreground">
                              客户: {order.client} • 类型: {order.orderType} • 收入: {order.revenue}
                            </p>
                          </div>
                          <div className="text-right">
                            <div className="text-sm text-muted-foreground">每代币收入</div>
                            <div className="text-lg font-bold text-green-600">{order.revenuePerToken}</div>
                          </div>
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                          <div>
                            <div className="text-sm text-muted-foreground">GPU类型</div>
                            <div className="font-medium">{order.gpuType}</div>
                          </div>
                          <div>
                            <div className="text-sm text-muted-foreground">使用时长</div>
                            <div className="font-medium">{order.gpuHours}</div>
                          </div>
                          <div>
                            <div className="text-sm text-muted-foreground">执行地点</div>
                            <div className="font-medium">{order.location}</div>
                          </div>
                          <div>
                            <div className="text-sm text-muted-foreground">代币持有者</div>
                            <div className="font-medium">{order.tokenHolders.toLocaleString()}</div>
                          </div>
                        </div>

                        <div className="bg-gray-50 rounded-lg p-3 mb-3">
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-sm font-medium">区块链存证</span>
                            <Badge variant="outline">
                              <Shield className="w-3 h-3 mr-1" />
                              已确认
                            </Badge>
                          </div>
                          <div className="flex items-center space-x-2 text-sm">
                            <Link className="w-4 h-4 text-muted-foreground" />
                            <span className="font-mono text-muted-foreground">{order.blockchainHash}</span>
                            <Button variant="ghost" size="sm" className="h-6 px-2">
                              查看
                            </Button>
                          </div>
                        </div>

                        <div className="bg-blue-50 rounded-lg p-3">
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-sm font-medium">智能合约分配</span>
                            <Badge variant={order.distributionStatus === "已分配" ? "default" : "secondary"}>
                              {order.distributionStatus}
                            </Badge>
                          </div>
                          <div className="grid grid-cols-2 gap-4 text-sm">
                            <div>
                              <span className="text-muted-foreground">合约地址: </span>
                              <span className="font-mono">{order.smartContractAddress.slice(0, 10)}...</span>
                            </div>
                            <div>
                              <span className="text-muted-foreground">分配时间: </span>
                              <span>{order.distributionTime}</span>
                            </div>
                          </div>
                        </div>

                        <div className="flex justify-between items-center mt-3 pt-3 border-t">
                          <div className="text-sm text-muted-foreground">
                            执行时间: {order.startTime} - {order.endTime}
                          </div>
                          <div className="flex space-x-2">
                            <Button variant="outline" size="sm">
                              查看详情
                            </Button>
                            {order.distributionStatus === "已分配" && (
                              <Button variant="outline" size="sm">
                                分配记录
                              </Button>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>智能合约分配记录</CardTitle>
                  <CardDescription>自动化收入分配给所有代币持有者</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {distributionRecords.map((record, index) => (
                      <div key={index} className="border rounded-lg p-4">
                        <div className="flex justify-between items-start mb-3">
                          <div>
                            <h4 className="font-semibold">{record.orderId} 收入分配</h4>
                            <p className="text-muted-foreground">总收入: {record.totalRevenue}</p>
                          </div>
                          <Badge variant="default">
                            <CheckCircle className="w-3 h-3 mr-1" />
                            分配完成
                          </Badge>
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-3">
                          <div>
                            <div className="text-sm text-muted-foreground">成功分配</div>
                            <div className="font-medium text-green-600">
                              {record.successfulDistributions.toLocaleString()}
                            </div>
                          </div>
                          <div>
                            <div className="text-sm text-muted-foreground">失败分配</div>
                            <div className="font-medium text-red-600">{record.failedDistributions}</div>
                          </div>
                          <div>
                            <div className="text-sm text-muted-foreground">Gas消耗</div>
                            <div className="font-medium">{record.gasUsed}</div>
                          </div>
                          <div>
                            <div className="text-sm text-muted-foreground">分配时间</div>
                            <div className="font-medium">{record.distributionTime}</div>
                          </div>
                        </div>

                        <div className="bg-green-50 rounded-lg p-3">
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-sm font-medium">交易哈希</span>
                            <Badge variant="outline">
                              <CheckCircle className="w-3 h-3 mr-1" />
                              已确认
                            </Badge>
                          </div>
                          <div className="flex items-center space-x-2 text-sm">
                            <Link className="w-4 h-4 text-muted-foreground" />
                            <span className="font-mono text-muted-foreground">{record.transactionHash}</span>
                            <Button variant="ghost" size="sm" className="h-6 px-2">
                              查看交易
                            </Button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>收入分配流程图</CardTitle>
                  <CardDescription>可视化展示从订单到代币持有者的完整分配流程</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between p-6 bg-gradient-to-r from-blue-50 to-green-50 rounded-lg">
                    <div className="flex flex-col items-center space-y-2">
                      <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
                        <Server className="w-6 h-6 text-white" />
                      </div>
                      <div className="text-sm font-medium">订单执行</div>
                      <div className="text-xs text-muted-foreground">GPU算力服务</div>
                    </div>

                    <div className="flex-1 flex items-center justify-center">
                      <div className="w-8 h-0.5 bg-blue-300"></div>
                      <ArrowLeft className="w-4 h-4 text-blue-500 rotate-180 mx-2" />
                      <div className="w-8 h-0.5 bg-blue-300"></div>
                    </div>

                    <div className="flex flex-col items-center space-y-2">
                      <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                        <Shield className="w-6 h-6 text-white" />
                      </div>
                      <div className="text-sm font-medium">区块链存证</div>
                      <div className="text-xs text-muted-foreground">订单记录上链</div>
                    </div>

                    <div className="flex-1 flex items-center justify-center">
                      <div className="w-8 h-0.5 bg-green-300"></div>
                      <ArrowLeft className="w-4 h-4 text-green-500 rotate-180 mx-2" />
                      <div className="w-8 h-0.5 bg-green-300"></div>
                    </div>

                    <div className="flex flex-col items-center space-y-2">
                      <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center">
                        <Coins className="w-6 h-6 text-white" />
                      </div>
                      <div className="text-sm font-medium">智能合约</div>
                      <div className="text-xs text-muted-foreground">自动分配收入</div>
                    </div>

                    <div className="flex-1 flex items-center justify-center">
                      <div className="w-8 h-0.5 bg-purple-300"></div>
                      <ArrowLeft className="w-4 h-4 text-purple-500 rotate-180 mx-2" />
                      <div className="w-8 h-0.5 bg-purple-300"></div>
                    </div>

                    <div className="flex flex-col items-center space-y-2">
                      <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center">
                        <Users className="w-6 h-6 text-white" />
                      </div>
                      <div className="text-sm font-medium">代币持有者</div>
                      <div className="text-xs text-muted-foreground">125,000个地址</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="rwa-financing" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>代币发行方案</CardTitle>
                  <CardDescription>AI算力资产代币化发行详情</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                    <div className="text-center p-4 border rounded-lg">
                      <Coins className="w-8 h-8 mx-auto mb-2 text-blue-500" />
                      <div className="text-lg font-bold">100,000,000</div>
                      <div className="text-sm text-muted-foreground">代币发行总量</div>
                    </div>
                    <div className="text-center p-4 border rounded-lg">
                      <DollarSign className="w-8 h-8 mx-auto mb-2 text-green-500" />
                      <div className="text-lg font-bold">¥3.2亿</div>
                      <div className="text-sm text-muted-foreground">目标融资金额</div>
                    </div>
                    <div className="text-center p-4 border rounded-lg">
                      <TrendingUp className="w-8 h-8 mx-auto mb-2 text-purple-500" />
                      <div className="text-lg font-bold">¥3.2</div>
                      <div className="text-sm text-muted-foreground">代币发行价格</div>
                    </div>
                    <div className="text-center p-4 border rounded-lg">
                      <Activity className="w-8 h-8 mx-auto mb-2 text-orange-500" />
                      <div className="text-lg font-bold">0.025 EH/s</div>
                      <div className="text-sm text-muted-foreground">每代币对应算力</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>底层资产对应关系</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span className="text-sm">每代币算力规模</span>
                      <span className="font-medium">0.025 EH/s</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">每代币月收入</span>
                      <button
                        onClick={() => openChart(algorithmChartData.monthlyIncome)}
                        className="font-medium text-blue-600 hover:text-blue-800 underline cursor-pointer"
                      >
                        ¥0.268 📈
                      </button>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">每代币设备数量</span>
                      <span className="font-medium">0.025 台GPU</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">年化收益率</span>
                      <button
                        onClick={() => openChart(algorithmChartData.annualReturn)}
                        className="font-medium text-green-600 hover:text-green-800 underline cursor-pointer"
                      >
                        10.05% 📈
                      </button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>融资进展</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">已确认融资</span>
                      <span className="text-sm text-muted-foreground">¥1.6亿 (50%)</span>
                    </div>
                    <Progress value={50} className="h-2" />

                    <div>
                      <h4 className="font-medium mb-2">意向投资人</h4>
                      <div className="space-y-2">
                        <div className="flex justify-between items-center p-2 border rounded">
                          <span className="text-sm">红杉资本中国</span>
                          <Badge variant="default">已确认</Badge>
                        </div>
                        <div className="flex justify-between items-center p-2 border rounded">
                          <span className="text-sm">IDG资本</span>
                          <Badge variant="secondary">意向中</Badge>
                        </div>
                        <div className="flex justify-between items-center p-2 border rounded">
                          <span className="text-sm">经纬创投</span>
                          <Badge variant="outline">洽谈中</Badge>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="service-flow" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>RWA投行服务流程</CardTitle>
                  <CardDescription>AI算力项目完整服务流程及执行状态</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {algorithmServiceSteps.map((item, index) => (
                      <div key={index} className="flex space-x-4">
                        <div className="flex flex-col items-center">
                          <div
                            className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                              item.status === "completed"
                                ? "bg-green-500 text-white"
                                : item.status === "active"
                                  ? "bg-blue-500 text-white"
                                  : "bg-gray-200 text-gray-600"
                            }`}
                          >
                            {item.status === "completed" ? <CheckCircle className="w-4 h-4" /> : item.step}
                          </div>
                          {index < algorithmServiceSteps.length - 1 && <div className="w-px h-12 bg-gray-200 mt-2" />}
                        </div>
                        <div className="flex-1 pb-8">
                          <div className="flex items-center justify-between mb-2">
                            <div className="flex items-center space-x-2">
                              <h3 className="font-semibold">{item.title}</h3>
                              <Badge
                                variant={
                                  item.status === "completed"
                                    ? "default"
                                    : item.status === "active"
                                      ? "secondary"
                                      : "outline"
                                }
                                size="sm"
                              >
                                {item.status === "completed"
                                  ? "已完成"
                                  : item.status === "active"
                                    ? "进行中"
                                    : "待开始"}
                              </Badge>
                            </div>
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => setSelectedStep(selectedStep === index ? null : index)}
                            >
                              {selectedStep === index ? "收起详情" : "查看详情"}
                            </Button>
                          </div>
                          <p className="text-muted-foreground text-sm mb-2">{item.description}</p>

                          {item.status === "active" && (
                            <div className="mb-2">
                              <div className="flex justify-between text-xs mb-1">
                                <span>进度</span>
                                <span>{item.progress}%</span>
                              </div>
                              <Progress value={item.progress} className="h-1" />
                            </div>
                          )}

                          {item.completedDate && (
                            <p className="text-xs text-green-600 mb-2">完成时间: {item.completedDate}</p>
                          )}

                          <div className="flex flex-wrap gap-1 mb-2">
                            {item.details.map((detail, idx) => (
                              <Badge key={idx} variant="outline" className="text-xs">
                                {detail}
                              </Badge>
                            ))}
                          </div>

                          {selectedStep === index && (
                            <Card className="mt-4">
                              <CardHeader>
                                <CardTitle className="text-base">详细信息</CardTitle>
                              </CardHeader>
                              <CardContent>
                                <div className="space-y-3">
                                  {item.details.map((detail, idx) => (
                                    <div key={idx} className="flex items-center justify-between p-2 border rounded">
                                      <span className="text-sm">{detail}</span>
                                      <Badge
                                        variant={
                                          item.status === "completed"
                                            ? "default"
                                            : item.status === "active" && idx < 2
                                              ? "default"
                                              : item.status === "active"
                                                ? "secondary"
                                                : "outline"
                                        }
                                        size="sm"
                                      >
                                        {item.status === "completed"
                                          ? "已完成"
                                          : item.status === "active" && idx < 2
                                            ? "已完成"
                                            : item.status === "active"
                                              ? "进行中"
                                              : "待开始"}
                                      </Badge>
                                    </div>
                                  ))}
                                </div>
                              </CardContent>
                            </Card>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="blockchain" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Shield className="w-5 h-5" />
                    <span>区块链存证记录</span>
                  </CardTitle>
                  <CardDescription>所有资产相关数据均已上链存证，确保数据真实性和不可篡改</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {blockchainRecords.map((record, index) => (
                      <div key={index} className="border rounded-lg p-4">
                        <div className="flex justify-between items-start mb-2">
                          <div>
                            <div className="font-medium">{record.type}</div>
                            <div className="text-sm text-muted-foreground">{record.content}</div>
                          </div>
                          <Badge variant="default">
                            <CheckCircle className="w-3 h-3 mr-1" />
                            {record.status}
                          </Badge>
                        </div>
                        <div className="flex items-center justify-between text-sm">
                          <div className="flex items-center space-x-2">
                            <Link className="w-4 h-4 text-muted-foreground" />
                            <span className="font-mono text-muted-foreground">{record.hash}</span>
                          </div>
                          <span className="text-muted-foreground">{record.timestamp}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="risks" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <AlertTriangle className="w-5 h-5" />
                    <span>风险评估</span>
                  </CardTitle>
                  <CardDescription>基于AI模型的综合风险分析</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="text-center p-4 border rounded-lg">
                        <div className="text-lg font-bold text-green-600">低风险</div>
                        <div className="text-sm text-muted-foreground">技术风险</div>
                      </div>
                      <div className="text-center p-4 border rounded-lg">
                        <div className="text-lg font-bold text-yellow-600">中风险</div>
                        <div className="text-sm text-muted-foreground">市场风险</div>
                      </div>
                      <div className="text-center p-4 border rounded-lg">
                        <div className="text-lg font-bold text-green-600">低风险</div>
                        <div className="text-sm text-muted-foreground">运营风险</div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div>
                        <h4 className="font-medium mb-2">主要风险因素</h4>
                        <div className="space-y-2">
                          <div className="flex justify-between items-center p-2 border rounded">
                            <span className="text-sm">加密货币价格波动</span>
                            <Badge variant="secondary">中风险</Badge>
                          </div>
                          <div className="flex justify-between items-center p-2 border rounded">
                            <span className="text-sm">电力成本上涨</span>
                            <Badge variant="outline">低风险</Badge>
                          </div>
                          <div className="flex justify-between items-center p-2 border rounded">
                            <span className="text-sm">设备老化折旧</span>
                            <Badge variant="outline">低风险</Badge>
                          </div>
                          <div className="flex justify-between items-center p-2 border rounded">
                            <span className="text-sm">监管政策变化</span>
                            <Badge variant="secondary">中风险</Badge>
                          </div>
                        </div>
                      </div>

                      <div>
                        <h4 className="font-medium mb-2">风险缓解措施</h4>
                        <div className="space-y-2 text-sm text-muted-foreground">
                          <div className="flex items-start space-x-2">
                            <CheckCircle className="w-4 h-4 text-green-500 mt-0.5" />
                            <span>多元化收入来源，降低单一市场依赖</span>
                          </div>
                          <div className="flex items-start space-x-2">
                            <CheckCircle className="w-4 h-4 text-green-500 mt-0.5" />
                            <span>与电力公司签署长期合约，锁定电价</span>
                          </div>
                          <div className="flex items-start space-x-2">
                            <CheckCircle className="w-4 h-4 text-green-500 mt-0.5" />
                            <span>建立设备维护基金，定期更新换代</span>
                          </div>
                          <div className="flex items-start space-x-2">
                            <CheckCircle className="w-4 h-4 text-green-500 mt-0.5" />
                            <span>密切关注政策动向，及时调整业务策略</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>

        {/* Chart Dialog */}
        <Dialog open={showChart} onOpenChange={setShowChart}>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle>{chartData.title}</DialogTitle>
              <DialogDescription>历史数据趋势分析</DialogDescription>
            </DialogHeader>
            {renderChart()}
          </DialogContent>
        </Dialog>
      </div>
    )
  }

  if (currentView === "carbon") {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
        {/* Header */}
        <header className="bg-white border-b border-slate-200 shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center space-x-4">
                <Button variant="ghost" size="sm" onClick={() => handleNavigation("overview")}>
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  返回
                </Button>
                <div>
                  <h1 className="text-xl font-bold text-slate-900">碳排放权交易资产</h1>
                  <p className="text-sm text-slate-500">项目ID: RWA005 • 最后更新: 2024-01-15 14:30:00</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Badge variant="secondary">区块链存证</Badge>
                <Badge variant="outline" className="text-green-600 border-green-200">
                  <Shield className="w-3 h-3 mr-1" />
                  已认证
                </Badge>
              </div>
            </div>
          </div>
        </header>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Key Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6 mb-8">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">碳权总量</CardTitle>
                <Leaf className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{carbonProjectData.totalCredits}</div>
                <p className="text-xs text-muted-foreground">{carbonProjectData.projectCount}个减排项目</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">平均价格</CardTitle>
                <DollarSign className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{carbonProjectData.avgPrice}</div>
                <p className="text-xs text-muted-foreground">+5.2% 较上月</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">月交易额</CardTitle>
                <TrendingUp className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{carbonProjectData.monthlyTrading}</div>
                <p className="text-xs text-muted-foreground">+12.8% 较上月</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">认证标准</CardTitle>
                <FileCheck className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">4</div>
                <p className="text-xs text-muted-foreground">国际认证标准</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">资产估值</CardTitle>
                <Globe className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">¥6,800万</div>
                <p className="text-xs text-muted-foreground">AI智能估值</p>
              </CardContent>
            </Card>
          </div>

          <Tabs value={activeSubTab} onValueChange={setActiveSubTab} className="space-y-6">
            <TabsList className="grid w-full grid-cols-9">
              <TabsTrigger value="overview">资产概览</TabsTrigger>
              <TabsTrigger value="projects">减排项目</TabsTrigger>
              <TabsTrigger value="trading">交易记录</TabsTrigger>
              <TabsTrigger value="certification">认证标准</TabsTrigger>
              <TabsTrigger value="order-tracking">订单追踪</TabsTrigger>
              <TabsTrigger value="rwa-financing">RWA融资</TabsTrigger>
              <TabsTrigger value="service-flow">服务流程</TabsTrigger>
              <TabsTrigger value="blockchain">区块链存证</TabsTrigger>
              <TabsTrigger value="risks">风险评估</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>碳权项目分布</CardTitle>
                    <CardDescription>按减排项目类型和地区分布</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {carbonProjects.map((project, index) => (
                        <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                          <div className="flex items-center space-x-3">
                            <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                              {project.type === "可再生能源" && <Wind className="w-4 h-4 text-green-600" />}
                              {project.type === "水力发电" && <Zap className="w-4 h-4 text-blue-600" />}
                              {project.type === "太阳能发电" && <Zap className="w-4 h-4 text-yellow-600" />}
                              {project.type === "林业碳汇" && <Leaf className="w-4 h-4 text-green-700" />}
                            </div>
                            <div>
                              <div className="font-medium">{project.name}</div>
                              <div className="text-sm text-muted-foreground">
                                {project.credits} • {project.location}
                              </div>
                            </div>
                          </div>
                          <Badge variant={project.status === "已认证" ? "default" : "secondary"}>
                            {project.status}
                          </Badge>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>关键运营指标</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium">认证完成率</span>
                        <span className="text-sm text-muted-foreground">91.7%</span>
                      </div>
                      <Progress value={91.7} className="h-2" />

                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium">交易活跃度</span>
                        <span className="text-sm text-muted-foreground">85.3%</span>
                      </div>
                      <Progress value={85.3} className="h-2" />

                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium">价格稳定性</span>
                        <span className="text-sm text-muted-foreground">78.9%</span>
                      </div>
                      <Progress value={78.9} className="h-2" />

                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium">合规达标率</span>
                        <span className="text-sm text-muted-foreground">96.4%</span>
                      </div>
                      <Progress value={96.4} className="h-2" />
                    </div>
                  </CardContent>
                </Card>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>碳权类型分析</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    <div className="text-center p-4 border rounded-lg">
                      <Wind className="w-8 h-8 mx-auto mb-2 text-green-500" />
                      <div className="text-lg font-bold">600,000</div>
                      <div className="text-sm text-muted-foreground">可再生能源 tCO2e</div>
                    </div>
                    <div className="text-center p-4 border rounded-lg">
                      <Factory className="w-8 h-8 mx-auto mb-2 text-blue-500" />
                      <div className="text-lg font-bold">180,000</div>
                      <div className="text-sm text-muted-foreground">工业减排 tCO2e</div>
                    </div>
                    <div className="text-center p-4 border rounded-lg">
                      <Leaf className="w-8 h-8 mx-auto mb-2 text-green-700" />
                      <div className="text-lg font-bold">70,000</div>
                      <div className="text-sm text-muted-foreground">林业碳汇 tCO2e</div>
                    </div>
                    <div className="text-center p-4 border rounded-lg">
                      <Globe className="w-8 h-8 mx-auto mb-2 text-purple-500" />
                      <div className="text-lg font-bold">850,000</div>
                      <div className="text-sm text-muted-foreground">总计 tCO2e</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="projects" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>减排项目详情</CardTitle>
                  <CardDescription>所有碳权来源项目的详细信息</CardDescription>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>项目名称</TableHead>
                        <TableHead>项目类型</TableHead>
                        <TableHead>碳权量</TableHead>
                        <TableHead>认证标准</TableHead>
                        <TableHead>年份</TableHead>
                        <TableHead>有效期</TableHead>
                        <TableHead>状态</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {carbonProjects.map((project, index) => (
                        <TableRow key={index}>
                          <TableCell>
                            <div>
                              <div className="font-medium">{project.name}</div>
                              <div className="text-sm text-muted-foreground">{project.location}</div>
                            </div>
                          </TableCell>
                          <TableCell>{project.type}</TableCell>
                          <TableCell className="font-medium">{project.credits}</TableCell>
                          <TableCell>
                            <Badge variant="outline">{project.standard}</Badge>
                          </TableCell>
                          <TableCell>{project.vintage}</TableCell>
                          <TableCell>{project.expiryDate}</TableCell>
                          <TableCell>
                            <Badge variant={project.status === "已认证" ? "default" : "secondary"}>
                              {project.status}
                            </Badge>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="trading" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>交易历史记录</CardTitle>
                  <CardDescription>最近的碳权交易详情</CardDescription>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>交易日期</TableHead>
                        <TableHead>交易量</TableHead>
                        <TableHead>成交价格</TableHead>
                        <TableHead>交易金额</TableHead>
                        <TableHead>买方</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {tradingHistory.map((trade, index) => (
                        <TableRow key={index}>
                          <TableCell className="font-medium">{trade.date}</TableCell>
                          <TableCell>{trade.volume}</TableCell>
                          <TableCell>{trade.price}</TableCell>
                          <TableCell className="font-medium">{trade.amount}</TableCell>
                          <TableCell>{trade.buyer}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="certification" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>认证标准分布</CardTitle>
                  <CardDescription>各国际认证标准下的碳权分布情况</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    <div className="text-center p-4 border rounded-lg">
                      <div className="text-lg font-bold">VCS认证</div>
                      <div className="text-sm text-muted-foreground">420,000 tCO2e</div>
                    </div>
                    <div className="text-center p-4 border rounded-lg">
                      <div className="text-lg font-bold">CDM认证</div>
                      <div className="text-sm text-muted-foreground">280,000 tCO2e</div>
                    </div>
                    <div className="text-center p-4 border rounded-lg">
                      <div className="text-lg font-bold">GS认证</div>
                      <div className="text-sm text-muted-foreground">100,000 tCO2e</div>
                    </div>
                    <div className="text-center p-4 border rounded-lg">
                      <div className="text-lg font-bold">CCER认证</div>
                      <div className="text-sm text-muted-foreground">50,000 tCO2e</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="order-tracking" className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">总交易订单</CardTitle>
                    <BarChart3 className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">6</div>
                    <p className="text-xs text-muted-foreground">本月新增3个</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">交易收入</CardTitle>
                    <DollarSign className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">¥589.4万</div>
                    <p className="text-xs text-muted-foreground">已分配¥451.1万</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">分配成功率</CardTitle>
                    <CheckCircle className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">99.99%</div>
                    <p className="text-xs text-muted-foreground">智能合约自动分配</p>
                  </CardContent>
                </Card>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>碳权交易订单追踪</CardTitle>
                  <CardDescription>每笔碳权交易都有完整的区块链存证和收入分配记录</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {carbonOrders.map((order, index) => (
                      <div key={index} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                        <div className="flex justify-between items-start mb-4">
                          <div>
                            <div className="flex items-center space-x-2 mb-2">
                              <h3 className="font-semibold text-lg">{order.orderId}</h3>
                              <Badge
                                variant={
                                  order.status === "已完成"
                                    ? "default"
                                    : order.status === "交易中"
                                      ? "secondary"
                                      : "outline"
                                }
                              >
                                {order.status}
                              </Badge>
                              <Badge variant={order.distributionStatus === "已分配" ? "default" : "outline"}>
                                {order.distributionStatus}
                              </Badge>
                            </div>
                            <p className="text-muted-foreground">
                              买方: {order.buyer} • 类型: {order.orderType} • 收入: {order.revenue}
                            </p>
                          </div>
                          <div className="text-right">
                            <div className="text-sm text-muted-foreground">每代币收入</div>
                            <div className="text-lg font-bold text-green-600">{order.revenuePerToken}</div>
                          </div>
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                          <div>
                            <div className="text-sm text-muted-foreground">交易量</div>
                            <div className="font-medium">{order.volume}</div>
                          </div>
                          <div>
                            <div className="text-sm text-muted-foreground">成交价格</div>
                            <div className="font-medium">{order.price}</div>
                          </div>
                          <div>
                            <div className="text-sm text-muted-foreground">项目来源</div>
                            <div className="font-medium">{order.projectSource}</div>
                          </div>
                          <div>
                            <div className="text-sm text-muted-foreground">代币持有者</div>
                            <div className="font-medium">{order.tokenHolders.toLocaleString()}</div>
                          </div>
                        </div>

                        <div className="bg-gray-50 rounded-lg p-3 mb-3">
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-sm font-medium">区块链存证</span>
                            <Badge variant="outline">
                              <Shield className="w-3 h-3 mr-1" />
                              已确认
                            </Badge>
                          </div>
                          <div className="flex items-center space-x-2 text-sm">
                            <Link className="w-4 h-4 text-muted-foreground" />
                            <span className="font-mono text-muted-foreground">{order.blockchainHash}</span>
                            <Button variant="ghost" size="sm" className="h-6 px-2">
                              查看
                            </Button>
                          </div>
                        </div>

                        <div className="bg-green-50 rounded-lg p-3">
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-sm font-medium">智能合约分配</span>
                            <Badge variant={order.distributionStatus === "已分配" ? "default" : "secondary"}>
                              {order.distributionStatus}
                            </Badge>
                          </div>
                          <div className="grid grid-cols-2 gap-4 text-sm">
                            <div>
                              <span className="text-muted-foreground">合约地址: </span>
                              <span className="font-mono">{order.smartContractAddress.slice(0, 10)}...</span>
                            </div>
                            <div>
                              <span className="text-muted-foreground">分配时间: </span>
                              <span>{order.distributionTime}</span>
                            </div>
                          </div>
                        </div>

                        <div className="flex justify-between items-center mt-3 pt-3 border-t">
                          <div className="text-sm text-muted-foreground">
                            交易时间: {order.tradeTime} • 结算时间: {order.settlementTime}
                          </div>
                          <div className="flex space-x-2">
                            <Button variant="outline" size="sm">
                              查看详情
                            </Button>
                            {order.distributionStatus === "已分配" && (
                              <Button variant="outline" size="sm">
                                分配记录
                              </Button>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>智能合约分配记录</CardTitle>
                  <CardDescription>自动化收入分配给所有代币持有者</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {carbonDistributionRecords.map((record, index) => (
                      <div key={index} className="border rounded-lg p-4">
                        <div className="flex justify-between items-start mb-3">
                          <div>
                            <h4 className="font-semibold">{record.orderId} 收入分配</h4>
                            <p className="text-muted-foreground">总收入: {record.totalRevenue}</p>
                          </div>
                          <Badge variant="default">
                            <CheckCircle className="w-3 h-3 mr-1" />
                            分配完成
                          </Badge>
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-3">
                          <div>
                            <div className="text-sm text-muted-foreground">成功分配</div>
                            <div className="font-medium text-green-600">
                              {record.successfulDistributions.toLocaleString()}
                            </div>
                          </div>
                          <div>
                            <div className="text-sm text-muted-foreground">失败分配</div>
                            <div className="font-medium text-red-600">{record.failedDistributions}</div>
                          </div>
                          <div>
                            <div className="text-sm text-muted-foreground">Gas消耗</div>
                            <div className="font-medium">{record.gasUsed}</div>
                          </div>
                          <div>
                            <div className="text-sm text-muted-foreground">分配时间</div>
                            <div className="font-medium">{record.distributionTime}</div>
                          </div>
                        </div>

                        <div className="bg-green-50 rounded-lg p-3">
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-sm font-medium">交易哈希</span>
                            <Badge variant="outline">
                              <CheckCircle className="w-3 h-3 mr-1" />
                              已确认
                            </Badge>
                          </div>
                          <div className="flex items-center space-x-2 text-sm">
                            <Link className="w-4 h-4 text-muted-foreground" />
                            <span className="font-mono text-muted-foreground">{record.transactionHash}</span>
                            <Button variant="ghost" size="sm" className="h-6 px-2">
                              查看交易
                            </Button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>碳权交易分配流程图</CardTitle>
                  <CardDescription>可视化展示从碳权交易到代币持有者的完整分配流程</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between p-6 bg-gradient-to-r from-green-50 to-blue-50 rounded-lg">
                    <div className="flex flex-col items-center space-y-2">
                      <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                        <Leaf className="w-6 h-6 text-white" />
                      </div>
                      <div className="text-sm font-medium">碳权交易</div>
                      <div className="text-xs text-muted-foreground">企业购买碳权</div>
                    </div>

                    <div className="flex-1 flex items-center justify-center">
                      <div className="w-8 h-0.5 bg-green-300"></div>
                      <ArrowLeft className="w-4 h-4 text-green-500 rotate-180 mx-2" />
                      <div className="w-8 h-0.5 bg-green-300"></div>
                    </div>

                    <div className="flex flex-col items-center space-y-2">
                      <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
                        <Shield className="w-6 h-6 text-white" />
                      </div>
                      <div className="text-sm font-medium">区块链存证</div>
                      <div className="text-xs text-muted-foreground">交易记录上链</div>
                    </div>

                    <div className="flex-1 flex items-center justify-center">
                      <div className="w-8 h-0.5 bg-blue-300"></div>
                      <ArrowLeft className="w-4 h-4 text-blue-500 rotate-180 mx-2" />
                      <div className="w-8 h-0.5 bg-blue-300"></div>
                    </div>

                    <div className="flex flex-col items-center space-y-2">
                      <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center">
                        <Coins className="w-6 h-6 text-white" />
                      </div>
                      <div className="text-sm font-medium">智能合约</div>
                      <div className="text-xs text-muted-foreground">自动分配收入</div>
                    </div>

                    <div className="flex-1 flex items-center justify-center">
                      <div className="w-8 h-0.5 bg-purple-300"></div>
                      <ArrowLeft className="w-4 h-4 text-purple-500 rotate-180 mx-2" />
                      <div className="w-8 h-0.5 bg-purple-300"></div>
                    </div>

                    <div className="flex flex-col items-center space-y-2">
                      <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center">
                        <Users className="w-6 h-6 text-white" />
                      </div>
                      <div className="text-sm font-medium">代币持有者</div>
                      <div className="text-xs text-muted-foreground">68,000个地址</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="rwa-financing" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>代币发行方案</CardTitle>
                  <CardDescription>碳权资产代币化发行详情</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                    <div className="text-center p-4 border rounded-lg">
                      <Coins className="w-8 h-8 mx-auto mb-2 text-blue-500" />
                      <div className="text-lg font-bold">68,000,000</div>
                      <div className="text-sm text-muted-foreground">代币发行总量</div>
                    </div>
                    <div className="text-center p-4 border rounded-lg">
                      <DollarSign className="w-8 h-8 mx-auto mb-2 text-green-500" />
                      <div className="text-lg font-bold">¥6,800万</div>
                      <div className="text-sm text-muted-foreground">目标融资金额</div>
                    </div>
                    <div className="text-center p-4 border rounded-lg">
                      <TrendingUp className="w-8 h-8 mx-auto mb-2 text-purple-500" />
                      <div className="text-lg font-bold">¥1.0</div>
                      <div className="text-sm text-muted-foreground">代币发行价格</div>
                    </div>
                    <div className="text-center p-4 border rounded-lg">
                      <Leaf className="w-8 h-8 mx-auto mb-2 text-green-500" />
                      <div className="text-lg font-bold">12.5 tCO2e</div>
                      <div className="text-sm text-muted-foreground">每代币对应碳权</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>底层资产对应关系</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span className="text-sm">每代币碳权量</span>
                      <span className="font-medium">12.5 tCO2e</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">每代币价值</span>
                      <span className="font-medium">¥1.0</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">碳权平均价格</span>
                      <button
                        onClick={() => openChart(carbonChartData.price)}
                        className="font-medium text-blue-600 hover:text-blue-800 underline cursor-pointer"
                      >
                        ¥80/tCO2e 📈
                      </button>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">预期年化收益</span>
                      <button
                        onClick={() => openChart(carbonChartData.expectedReturn)}
                        className="font-medium text-green-600 hover:text-green-800 underline cursor-pointer"
                      >
                        8.5% 📈
                      </button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>融资进展</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">已确认融资</span>
                      <span className="text-sm text-muted-foreground">¥4,420万 (65%)</span>
                    </div>
                    <Progress value={65} className="h-2" />

                    <div>
                      <h4 className="font-medium mb-2">意向投资人</h4>
                      <div className="space-y-2">
                        <div className="flex justify-between items-center p-2 border rounded">
                          <span className="text-sm">蚂蚁集团</span>
                          <Badge variant="default">已确认</Badge>
                        </div>
                        <div className="flex justify-between items-center p-2 border rounded">
                          <span className="text-sm">腾讯投资</span>
                          <Badge variant="secondary">意向中</Badge>
                        </div>
                        <div className="flex justify-between items-center p-2 border rounded">
                          <span className="text-sm">碳中和基金</span>
                          <Badge variant="outline">洽谈中</Badge>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="service-flow" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>RWA投行服务流程</CardTitle>
                  <CardDescription>碳权项目完整服务流程及执行状态</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {carbonServiceSteps.map((item, index) => (
                      <div key={index} className="flex space-x-4">
                        <div className="flex flex-col items-center">
                          <div
                            className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                              item.status === "completed"
                                ? "bg-green-500 text-white"
                                : item.status === "active"
                                  ? "bg-blue-500 text-white"
                                  : "bg-gray-200 text-gray-600"
                            }`}
                          >
                            {item.status === "completed" ? <CheckCircle className="w-4 h-4" /> : item.step}
                          </div>
                          {index < carbonServiceSteps.length - 1 && <div className="w-px h-12 bg-gray-200 mt-2" />}
                        </div>
                        <div className="flex-1 pb-8">
                          <div className="flex items-center justify-between mb-2">
                            <div className="flex items-center space-x-2">
                              <h3 className="font-semibold">{item.title}</h3>
                              <Badge
                                variant={
                                  item.status === "completed"
                                    ? "default"
                                    : item.status === "active"
                                      ? "secondary"
                                      : "outline"
                                }
                                size="sm"
                              >
                                {item.status === "completed"
                                  ? "已完成"
                                  : item.status === "active"
                                    ? "进行中"
                                    : "待开始"}
                              </Badge>
                            </div>
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => setSelectedStep(selectedStep === index ? null : index)}
                            >
                              {selectedStep === index ? "收起详情" : "查看详情"}
                            </Button>
                          </div>
                          <p className="text-muted-foreground text-sm mb-2">{item.description}</p>

                          {item.status === "active" && (
                            <div className="mb-2">
                              <div className="flex justify-between text-xs mb-1">
                                <span>进度</span>
                                <span>{item.progress}%</span>
                              </div>
                              <Progress value={item.progress} className="h-1" />
                            </div>
                          )}

                          {item.completedDate && (
                            <p className="text-xs text-green-600 mb-2">完成时间: {item.completedDate}</p>
                          )}

                          <div className="flex flex-wrap gap-1 mb-2">
                            {item.details.map((detail, idx) => (
                              <Badge key={idx} variant="outline" className="text-xs">
                                {detail}
                              </Badge>
                            ))}
                          </div>

                          {selectedStep === index && (
                            <Card className="mt-4">
                              <CardHeader>
                                <CardTitle className="text-base">详细信息</CardTitle>
                              </CardHeader>
                              <CardContent>
                                <div className="space-y-3">
                                  {item.details.map((detail, idx) => (
                                    <div key={idx} className="flex items-center justify-between p-2 border rounded">
                                      <span className="text-sm">{detail}</span>
                                      <Badge
                                        variant={
                                          item.status === "completed"
                                            ? "default"
                                            : item.status === "active" && idx < 2
                                              ? "default"
                                              : item.status === "active"
                                                ? "secondary"
                                                : "outline"
                                        }
                                        size="sm"
                                      >
                                        {item.status === "completed"
                                          ? "已完成"
                                          : item.status === "active" && idx < 2
                                            ? "已完成"
                                            : item.status === "active"
                                              ? "进行中"
                                              : "待开始"}
                                      </Badge>
                                    </div>
                                  ))}
                                </div>
                              </CardContent>
                            </Card>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="blockchain" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Shield className="w-5 h-5" />
                    <span>区块链存证记录</span>
                  </CardTitle>
                  <CardDescription>所有碳权相关数据均已上链存证，确保数据真实性和不可篡改</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {blockchainRecords.map((record, index) => (
                      <div key={index} className="border rounded-lg p-4">
                        <div className="flex justify-between items-start mb-2">
                          <div>
                            <div className="font-medium">{record.type}</div>
                            <div className="text-sm text-muted-foreground">{record.content}</div>
                          </div>
                          <Badge variant="default">
                            <CheckCircle className="w-3 h-3 mr-1" />
                            {record.status}
                          </Badge>
                        </div>
                        <div className="flex items-center justify-between text-sm">
                          <div className="flex items-center space-x-2">
                            <Link className="w-4 h-4 text-muted-foreground" />
                            <span className="font-mono text-muted-foreground">{record.hash}</span>
                          </div>
                          <span className="text-muted-foreground">{record.timestamp}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="risks" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <AlertTriangle className="w-5 h-5" />
                    <span>风险评估</span>
                  </CardTitle>
                  <CardDescription>基于AI模型的碳权资产综合风险分析</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="text-center p-4 border rounded-lg">
                        <div className="text-lg font-bold text-yellow-600">中风险</div>
                        <div className="text-sm text-muted-foreground">价格风险</div>
                      </div>
                      <div className="text-center p-4 border rounded-lg">
                        <div className="text-lg font-bold text-green-600">低风险</div>
                        <div className="text-sm text-muted-foreground">政策风险</div>
                      </div>
                      <div className="text-center p-4 border rounded-lg">
                        <div className="text-lg font-bold text-green-600">低风险</div>
                        <div className="text-sm text-muted-foreground">认证风险</div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div>
                        <h4 className="font-medium mb-2">主要风险因素</h4>
                        <div className="space-y-2">
                          <div className="flex justify-between items-center p-2 border rounded">
                            <span className="text-sm">碳价格波动</span>
                            <Badge variant="secondary">中风险</Badge>
                          </div>
                          <div className="flex justify-between items-center p-2 border rounded">
                            <span className="text-sm">认证标准变更</span>
                            <Badge variant="outline">低风险</Badge>
                          </div>
                          <div className="flex justify-between items-center p-2 border rounded">
                            <span className="text-sm">项目履约风险</span>
                            <Badge variant="outline">低风险</Badge>
                          </div>
                          <div className="flex justify-between items-center p-2 border rounded">
                            <span className="text-sm">市场流动性</span>
                            <Badge variant="secondary">中风险</Badge>
                          </div>
                        </div>
                      </div>

                      <div>
                        <h4 className="font-medium mb-2">风险缓解措施</h4>
                        <div className="space-y-2 text-sm text-muted-foreground">
                          <div className="flex items-start space-x-2">
                            <CheckCircle className="w-4 h-4 text-green-500 mt-0.5" />
                            <span>多元化碳权组合，分散价格风险</span>
                          </div>
                          <div className="flex items-start space-x-2">
                            <CheckCircle className="w-4 h-4 text-green-500 mt-0.5" />
                            <span>选择国际权威认证标准，确保合规性</span>
                          </div>
                          <div className="flex items-start space-x-2">
                            <CheckCircle className="w-4 h-4 text-green-500 mt-0.5" />
                            <span>建立项目监督机制，确保履约质量</span>
                          </div>
                          <div className="flex items-start space-x-2">
                            <CheckCircle className="w-4 h-4 text-green-500 mt-0.5" />
                            <span>与多家交易平台合作，提高流动性</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>

        {/* Chart Dialog */}
        <Dialog open={showChart} onOpenChange={setShowChart}>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle>{chartData.title}</DialogTitle>
              <DialogDescription>历史数据趋势分析</DialogDescription>
            </DialogHeader>
            {renderChart()}
          </DialogContent>
        </Dialog>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header */}
      <header className="bg-white border-b border-slate-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <Globe className="w-5 h-5 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-slate-900">交子RWA投行服务平台</h1>
                <p className="text-sm text-slate-500">Jiaozi Real World Assets Investment Banking</p>
              </div>
            </div>
            <Badge variant="outline" className="text-green-600 border-green-200">
              系统正常
            </Badge>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">总资产规模</CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">¥10.0亿</div>
              <p className="text-xs text-muted-foreground">+15.8% 较上月</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">活跃项目</CardTitle>
              <BarChart3 className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">2</div>
              <p className="text-xs text-muted-foreground">算力+碳权项目</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">合作机构</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">28</div>
              <p className="text-xs text-muted-foreground">审计所、律所等</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">完成率</CardTitle>
              <Clock className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">87%</div>
              <p className="text-xs text-muted-foreground">平均项目完成率</p>
            </CardContent>
          </Card>
        </div>

        {/* Main Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="business">业务概况</TabsTrigger>
            <TabsTrigger value="projects">项目管理</TabsTrigger>
            <TabsTrigger value="analytics">数据分析</TabsTrigger>
          </TabsList>

          <TabsContent value="business" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>RWA投行核心服务能力</CardTitle>
                <CardDescription>专业的实物资产代币化投行服务</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {services.map((service, index) => {
                    const IconComponent = service.icon
                    return (
                      <div
                        key={index}
                        className="p-4 border rounded-lg hover:shadow-md transition-shadow cursor-pointer"
                        onClick={() => setSelectedService(selectedService === index ? null : index)}
                      >
                        <div className="flex items-center space-x-3 mb-3">
                          <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center">
                            <IconComponent className="w-5 h-5 text-white" />
                          </div>
                          <div>
                            <h3 className="font-medium">{service.title}</h3>
                            <p className="text-sm text-muted-foreground">{service.desc}</p>
                          </div>
                        </div>
                        <div className="space-y-2">
                          <div className="flex justify-between items-center">
                            <span className="text-sm">进度</span>
                            <Badge
                              variant={
                                service.status === "已完成"
                                  ? "default"
                                  : service.status === "进行中"
                                    ? "secondary"
                                    : "outline"
                              }
                            >
                              {service.status}
                            </Badge>
                          </div>
                          <Progress value={service.progress} className="h-2" />
                          <div className="text-sm text-muted-foreground">{service.progress}% 完成</div>
                        </div>
                        {selectedService === index && (
                          <div className="mt-4 pt-4 border-t">
                            <div className="space-y-4">
                              <div>
                                <h4 className="font-medium mb-2">服务概述</h4>
                                <p className="text-sm text-muted-foreground">{service.details.overview}</p>
                              </div>
                              <div className="grid grid-cols-3 gap-4 text-center">
                                <div className="p-2 border rounded">
                                  <div className="text-lg font-bold text-green-600">
                                    {service.details.metrics.completed}
                                  </div>
                                  <div className="text-xs text-muted-foreground">已完成</div>
                                </div>
                                <div className="p-2 border rounded">
                                  <div className="text-lg font-bold text-blue-600">
                                    {service.details.metrics.inProgress}
                                  </div>
                                  <div className="text-xs text-muted-foreground">进行中</div>
                                </div>
                                <div className="p-2 border rounded">
                                  <div className="text-lg font-bold text-purple-600">
                                    {service.details.metrics.success_rate}%
                                  </div>
                                  <div className="text-xs text-muted-foreground">成功率</div>
                                </div>
                              </div>
                              <div>
                                <h4 className="font-medium mb-2">服务流程</h4>
                                <div className="space-y-2">
                                  {service.details.steps.map((step, idx) => (
                                    <div
                                      key={idx}
                                      className="flex items-center justify-between p-2 border rounded text-sm"
                                    >
                                      <span>{step.name}</span>
                                      <Badge
                                        variant={
                                          step.status === "completed"
                                            ? "default"
                                            : step.status === "active"
                                              ? "secondary"
                                              : "outline"
                                        }
                                        size="sm"
                                      >
                                        {step.status === "completed"
                                          ? "已完成"
                                          : step.status === "active"
                                            ? "进行中"
                                            : "待开始"}
                                      </Badge>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    )
                  })}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="projects" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>当前活跃项目</CardTitle>
                <CardDescription>正在进行的RWA项目详情</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-4 border rounded-lg">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="font-semibold text-lg">AI算力中心资产包</h3>
                        <p className="text-muted-foreground">算力资产 • 估值: ¥3.2亿 • ID: RWA004</p>
                      </div>
                      <Badge>进行中</Badge>
                    </div>
                    <div className="mb-4">
                      <div className="flex justify-between mb-2">
                        <span className="text-sm">当前阶段: 区块链确权</span>
                        <span className="text-sm">80%</span>
                      </div>
                      <Progress value={80} className="h-2" />
                    </div>
                    <div className="flex justify-end">
                      <Button onClick={() => handleNavigation("algorithm")}>穿透查看</Button>
                    </div>
                  </div>

                  <div className="p-4 border rounded-lg">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="font-semibold text-lg">碳排放权交易资产</h3>
                        <p className="text-muted-foreground">碳权资产 • 估值: ¥6,800万 • ID: RWA005</p>
                      </div>
                      <Badge>进行中</Badge>
                    </div>
                    <div className="mb-4">
                      <div className="flex justify-between mb-2">
                        <span className="text-sm">当前阶段: AI估值阶段</span>
                        <span className="text-sm">65%</span>
                      </div>
                      <Progress value={65} className="h-2" />
                    </div>
                    <div className="flex justify-end">
                      <Button onClick={() => handleNavigation("carbon")}>穿透查看</Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="analytics" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>资产类型分布</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between mb-2">
                        <span>算力资产</span>
                        <span className="font-medium">¥3.2亿</span>
                      </div>
                      <Progress value={47} className="h-2" />
                    </div>
                    <div>
                      <div className="flex justify-between mb-2">
                        <span>碳权资产</span>
                        <span className="font-medium">¥6.8亿</span>
                      </div>
                      <Progress value={53} className="h-2" />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>合作机构网络</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-3 gap-4">
                    <div className="text-center p-3 border rounded">
                      <div className="text-xl font-bold text-blue-600">12</div>
                      <div className="text-sm text-muted-foreground">审计机构</div>
                    </div>
                    <div className="text-center p-3 border rounded">
                      <div className="text-xl font-bold text-green-600">8</div>
                      <div className="text-sm text-muted-foreground">律师事务所</div>
                    </div>
                    <div className="text-center p-3 border rounded">
                      <div className="text-xl font-bold text-purple-600">8</div>
                      <div className="text-sm text-muted-foreground">技术服务商</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>月度业绩趋势</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-sm">项目完成率</span>
                      <span className="text-sm text-muted-foreground">87%</span>
                    </div>
                    <Progress value={87} className="h-2" />
                    <div className="flex justify-between items-center">
                      <span className="text-sm">客户满意度</span>
                      <span className="text-sm text-muted-foreground">94%</span>
                    </div>
                    <Progress value={94} className="h-2" />
                    <div className="flex justify-between items-center">
                      <span className="text-sm">收入增长</span>
                      <span className="text-sm text-muted-foreground">+15.8%</span>
                    </div>
                    <Progress value={78} className="h-2" />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>风险控制指标</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-3 border rounded">
                      <div className="text-lg font-bold text-green-600">低风险</div>
                      <div className="text-sm text-muted-foreground">整体风险等级</div>
                    </div>
                    <div className="text-center p-3 border rounded">
                      <div className="text-lg font-bold text-blue-600">98.5%</div>
                      <div className="text-sm text-muted-foreground">合规达标率</div>
                    </div>
                    <div className="text-center p-3 border rounded">
                      <div className="text-lg font-bold text-purple-600">100%</div>
                      <div className="text-sm text-muted-foreground">资产确权率</div>
                    </div>
                    <div className="text-center p-3 border rounded">
                      <div className="text-lg font-bold text-orange-600">0</div>
                      <div className="text-sm text-muted-foreground">违规事件</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>

      {/* Chart Dialog */}
      <Dialog open={showChart} onOpenChange={setShowChart}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>{chartData.title}</DialogTitle>
            <DialogDescription>历史数据趋势分析</DialogDescription>
          </DialogHeader>
          {renderChart()}
        </DialogContent>
      </Dialog>
    </div>
  )
}
