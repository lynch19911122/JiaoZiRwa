"use client"

import { useState } from "react"
import {
  Cpu,
  MapPin,
  Zap,
  DollarSign,
  TrendingUp,
  Shield,
  Server,
  Activity,
  Thermometer,
  CheckCircle,
  AlertTriangle,
  Link,
  Coins,
  Clock,
} from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"

export default function AlgorithmProjectDetail() {
  const [activeSubTab, setActiveSubTab] = useState("overview")
  const [selectedStep, setSelectedStep] = useState<number | null>(null)

  const projectData = {
    totalHashrate: "2.5 EH/s",
    locations: 3,
    utilization: 87.5,
    monthlyRevenue: "¥2,680万",
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

  const serviceSteps = [
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

  return (
    <div className="space-y-6">
      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">总算力</CardTitle>
            <Cpu className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{projectData.totalHashrate}</div>
            <p className="text-xs text-muted-foreground">分布在{projectData.locations}个地区</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">利用率</CardTitle>
            <Activity className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{projectData.utilization}%</div>
            <p className="text-xs text-muted-foreground">过去30天平均</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">月收入</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{projectData.monthlyRevenue}</div>
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
            <div className="text-2xl font-bold">¥3.2亿</div>
            <p className="text-xs text-muted-foreground">AI智能估值</p>
          </CardContent>
        </Card>
      </div>

      <Tabs value={activeSubTab} onValueChange={setActiveSubTab} className="space-y-6">
        <TabsList className="grid w-full grid-cols-8">
          <TabsTrigger value="overview">资产概览</TabsTrigger>
          <TabsTrigger value="distribution">算力分布</TabsTrigger>
          <TabsTrigger value="equipment">设备详情</TabsTrigger>
          <TabsTrigger value="revenue">收入分析</TabsTrigger>
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

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>代币经济学</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">流通代币</span>
                    <span className="text-sm text-muted-foreground">60%</span>
                  </div>
                  <Progress value={60} className="h-2" />

                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">团队锁仓</span>
                    <span className="text-sm text-muted-foreground">20%</span>
                  </div>
                  <Progress value={20} className="h-2" />

                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">生态建设</span>
                    <span className="text-sm text-muted-foreground">15%</span>
                  </div>
                  <Progress value={15} className="h-2" />

                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">储备基金</span>
                    <span className="text-sm text-muted-foreground">5%</span>
                  </div>
                  <Progress value={5} className="h-2" />
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
                    <span className="font-medium">¥0.268</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">每代币设备数量</span>
                    <span className="font-medium">0.025 台GPU</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">年化收益率</span>
                    <span className="font-medium text-green-600">10.05%</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

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

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
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
                  <div>
                    <h4 className="font-medium mb-2">融资时间表</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span>Pre-A轮完成 (2024-01)</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Clock className="w-4 h-4 text-blue-500" />
                        <span>A轮进行中 (2024-02)</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Clock className="w-4 h-4 text-gray-400" />
                        <span>A+轮计划 (2024-06)</span>
                      </div>
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
                {serviceSteps.map((item, index) => (
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
                      {index < serviceSteps.length - 1 && <div className="w-px h-12 bg-gray-200 mt-2" />}
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
                            {item.status === "completed" ? "已完成" : item.status === "active" ? "进行中" : "待开始"}
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

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>存证统计</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-sm">设备确权记录</span>
                    <span className="font-medium">2,500 条</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">收入记录</span>
                    <span className="font-medium">120 条</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">运维记录</span>
                    <span className="font-medium">856 条</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">合约记录</span>
                    <span className="font-medium">45 条</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>区块链网络信息</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-sm">区块链网络</span>
                    <span className="font-medium">企业联盟链</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">共识机制</span>
                    <span className="font-medium">PBFT</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">节点数量</span>
                    <span className="font-medium">12 个</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">数据完整性</span>
                    <span className="font-medium text-green-600">100%</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
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
  )
}
