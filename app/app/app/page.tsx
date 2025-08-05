"use client"

import { useState } from "react"
import { useParams } from "next/navigation"
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
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export default function ProjectDetail() {
  const params = useParams()
  const [activeTab, setActiveTab] = useState("overview")

  // 模拟算力项目数据
  const projectData = {
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header */}
      <header className="bg-white border-b border-slate-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm" onClick={() => window.history.back()}>
                <ArrowLeft className="w-4 h-4 mr-2" />
                返回
              </Button>
              <div>
                <h1 className="text-xl font-bold text-slate-900">{projectData.name}</h1>
                <p className="text-sm text-slate-500">
                  项目ID: {projectData.id} • 最后更新: {projectData.lastUpdated}
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
              <div className="text-2xl font-bold">{projectData.value}</div>
              <p className="text-xs text-muted-foreground">AI智能估值</p>
            </CardContent>
          </Card>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-6">
            <TabsTrigger value="overview">资产概览</TabsTrigger>
            <TabsTrigger value="distribution">算力分布</TabsTrigger>
            <TabsTrigger value="equipment">设备详情</TabsTrigger>
            <TabsTrigger value="revenue">收入分析</TabsTrigger>
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
                      <TableHead>操作</TableHead>
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
                        <TableCell>
                          <Button variant="outline" size="sm">
                            查看详情
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>设备性能监控</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="text-center p-4 border rounded-lg">
                    <Activity className="w-8 h-8 mx-auto mb-2 text-green-500" />
                    <div className="text-lg font-bold">94.2%</div>
                    <div className="text-sm text-muted-foreground">设备健康度</div>
                  </div>
                  <div className="text-center p-4 border rounded-lg">
                    <Thermometer className="w-8 h-8 mx-auto mb-2 text-orange-500" />
                    <div className="text-lg font-bold">68°C</div>
                    <div className="text-sm text-muted-foreground">平均温度</div>
                  </div>
                  <div className="text-center p-4 border rounded-lg">
                    <Clock className="w-8 h-8 mx-auto mb-2 text-blue-500" />
                    <div className="text-lg font-bold">99.2%</div>
                    <div className="text-sm text-muted-foreground">运行时间</div>
                  </div>
                </div>
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

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>收入构成</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">挖矿收入</span>
                      <span className="text-sm text-muted-foreground">82.1%</span>
                    </div>
                    <Progress value={82.1} className="h-2" />

                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">算力租赁</span>
                      <span className="text-sm text-muted-foreground">17.9%</span>
                    </div>
                    <Progress value={17.9} className="h-2" />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>盈利能力指标</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span className="text-sm">毛利率</span>
                      <span className="font-medium">23.8%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">净利率</span>
                      <span className="font-medium">12.3%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">ROI (年化)</span>
                      <span className="font-medium">18.5%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">回本周期</span>
                      <span className="font-medium">3.2年</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
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
    </div>
  )
}
