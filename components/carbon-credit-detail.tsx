"use client"

import { useState } from "react"
import {
  Leaf,
  DollarSign,
  TrendingUp,
  Shield,
  FileCheck,
  Globe,
  CheckCircle,
  AlertTriangle,
  Link,
  Factory,
  Wind,
  Zap,
  Coins,
  Clock,
} from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export default function CarbonCreditDetail() {
  const [activeSubTab, setActiveSubTab] = useState("overview")

  const projectData = {
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

  const blockchainRecords = [
    {
      hash: "0x9a8b7c6d5e4f...",
      type: "碳权确权",
      timestamp: "2024-01-15 14:20:00",
      content: "风电项目碳权确权上链",
      status: "已确认",
    },
    {
      hash: "0x8b7c6d5e4f3a...",
      type: "交易记录",
      timestamp: "2024-01-15 10:30:00",
      content: "12,500 tCO2e碳权交易记录",
      status: "已确认",
    },
    {
      hash: "0x7c6d5e4f3a2b...",
      type: "认证记录",
      timestamp: "2024-01-14 16:45:00",
      content: "VCS标准认证更新",
      status: "已确认",
    },
  ]

  return (
    <div className="space-y-6">
      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">碳权总量</CardTitle>
            <Leaf className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{projectData.totalCredits}</div>
            <p className="text-xs text-muted-foreground">{projectData.projectCount}个减排项目</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">平均价格</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{projectData.avgPrice}</div>
            <p className="text-xs text-muted-foreground">+5.2% 较上月</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">月交易额</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{projectData.monthlyTrading}</div>
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
        <TabsList className="grid w-full grid-cols-8">
          <TabsTrigger value="overview">资产概览</TabsTrigger>
          <TabsTrigger value="projects">减排项目</TabsTrigger>
          <TabsTrigger value="trading">交易记录</TabsTrigger>
          <TabsTrigger value="certification">认证标准</TabsTrigger>
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
                      <Badge variant={project.status === "已认证" ? "default" : "secondary"}>{project.status}</Badge>
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
                        <Badge variant={project.status === "已认证" ? "default" : "secondary"}>{project.status}</Badge>
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
              <div className="space-y-4">
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

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>代币经济学</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">流通代币</span>
                    <span className="text-sm text-muted-foreground">65%</span>
                  </div>
                  <Progress value={65} className="h-2" />

                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">团队锁仓</span>
                    <span className="text-sm text-muted-foreground">15%</span>
                  </div>
                  <Progress value={15} className="h-2" />

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
                    <span className="text-sm">每代币碳权量</span>
                    <span className="font-medium">12.5 tCO2e</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">每代币价值</span>
                    <span className="font-medium">¥1.0</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">碳权平均价格</span>
                    <span className="font-medium">¥80/tCO2e</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">预期年化收益</span>
                    <span className="font-medium text-green-600">8.5%</span>
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
                  <span className="text-sm text-muted-foreground">¥4,420万 (65%)</span>
                </div>
                <Progress value={65} className="h-2" />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
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
                  <div>
                    <h4 className="font-medium mb-2">融资时间表</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span>种子轮完成 (2023-11)</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Clock className="w-4 h-4 text-blue-500" />
                        <span>Pre-A轮进行中 (2024-02)</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Clock className="w-4 h-4 text-gray-400" />
                        <span>A轮计划 (2024-08)</span>
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
              <CardTitle>服务流程</CardTitle>
              <CardDescription>碳权交易服务流程</CardDescription>
            </CardHeader>
            <CardContent>
              <p>服务流程内容</p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
