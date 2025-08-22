# `alb` Submodule <a name="`alb` Submodule" id="@cdktf/provider-aws.alb"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Alb <a name="Alb" id="@cdktf/provider-aws.alb.Alb"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/alb aws_alb}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.alb.Alb.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import alb

alb.Alb(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  access_logs: AlbAccessLogs = None,
  client_keep_alive: typing.Union[int, float] = None,
  connection_logs: AlbConnectionLogs = None,
  customer_owned_ipv4_pool: str = None,
  desync_mitigation_mode: str = None,
  dns_record_client_routing_policy: str = None,
  drop_invalid_header_fields: typing.Union[bool, IResolvable] = None,
  enable_cross_zone_load_balancing: typing.Union[bool, IResolvable] = None,
  enable_deletion_protection: typing.Union[bool, IResolvable] = None,
  enable_http2: typing.Union[bool, IResolvable] = None,
  enable_tls_version_and_cipher_suite_headers: typing.Union[bool, IResolvable] = None,
  enable_waf_fail_open: typing.Union[bool, IResolvable] = None,
  enable_xff_client_port: typing.Union[bool, IResolvable] = None,
  enable_zonal_shift: typing.Union[bool, IResolvable] = None,
  enforce_security_group_inbound_rules_on_private_link_traffic: str = None,
  id: str = None,
  idle_timeout: typing.Union[int, float] = None,
  internal: typing.Union[bool, IResolvable] = None,
  ip_address_type: str = None,
  ipam_pools: AlbIpamPools = None,
  load_balancer_type: str = None,
  minimum_load_balancer_capacity: AlbMinimumLoadBalancerCapacity = None,
  name: str = None,
  name_prefix: str = None,
  preserve_host_header: typing.Union[bool, IResolvable] = None,
  region: str = None,
  security_groups: typing.List[str] = None,
  subnet_mapping: typing.Union[IResolvable, typing.List[AlbSubnetMapping]] = None,
  subnets: typing.List[str] = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None,
  timeouts: AlbTimeouts = None,
  xff_header_processing_mode: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.alb.Alb.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.alb.Alb.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.alb.Alb.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.Initializer.parameter.accessLogs">access_logs</a></code> | <code><a href="#@cdktf/provider-aws.alb.AlbAccessLogs">AlbAccessLogs</a></code> | access_logs block. |
| <code><a href="#@cdktf/provider-aws.alb.Alb.Initializer.parameter.clientKeepAlive">client_keep_alive</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/alb#client_keep_alive Alb#client_keep_alive}. |
| <code><a href="#@cdktf/provider-aws.alb.Alb.Initializer.parameter.connectionLogs">connection_logs</a></code> | <code><a href="#@cdktf/provider-aws.alb.AlbConnectionLogs">AlbConnectionLogs</a></code> | connection_logs block. |
| <code><a href="#@cdktf/provider-aws.alb.Alb.Initializer.parameter.customerOwnedIpv4Pool">customer_owned_ipv4_pool</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/alb#customer_owned_ipv4_pool Alb#customer_owned_ipv4_pool}. |
| <code><a href="#@cdktf/provider-aws.alb.Alb.Initializer.parameter.desyncMitigationMode">desync_mitigation_mode</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/alb#desync_mitigation_mode Alb#desync_mitigation_mode}. |
| <code><a href="#@cdktf/provider-aws.alb.Alb.Initializer.parameter.dnsRecordClientRoutingPolicy">dns_record_client_routing_policy</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/alb#dns_record_client_routing_policy Alb#dns_record_client_routing_policy}. |
| <code><a href="#@cdktf/provider-aws.alb.Alb.Initializer.parameter.dropInvalidHeaderFields">drop_invalid_header_fields</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/alb#drop_invalid_header_fields Alb#drop_invalid_header_fields}. |
| <code><a href="#@cdktf/provider-aws.alb.Alb.Initializer.parameter.enableCrossZoneLoadBalancing">enable_cross_zone_load_balancing</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/alb#enable_cross_zone_load_balancing Alb#enable_cross_zone_load_balancing}. |
| <code><a href="#@cdktf/provider-aws.alb.Alb.Initializer.parameter.enableDeletionProtection">enable_deletion_protection</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/alb#enable_deletion_protection Alb#enable_deletion_protection}. |
| <code><a href="#@cdktf/provider-aws.alb.Alb.Initializer.parameter.enableHttp2">enable_http2</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/alb#enable_http2 Alb#enable_http2}. |
| <code><a href="#@cdktf/provider-aws.alb.Alb.Initializer.parameter.enableTlsVersionAndCipherSuiteHeaders">enable_tls_version_and_cipher_suite_headers</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/alb#enable_tls_version_and_cipher_suite_headers Alb#enable_tls_version_and_cipher_suite_headers}. |
| <code><a href="#@cdktf/provider-aws.alb.Alb.Initializer.parameter.enableWafFailOpen">enable_waf_fail_open</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/alb#enable_waf_fail_open Alb#enable_waf_fail_open}. |
| <code><a href="#@cdktf/provider-aws.alb.Alb.Initializer.parameter.enableXffClientPort">enable_xff_client_port</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/alb#enable_xff_client_port Alb#enable_xff_client_port}. |
| <code><a href="#@cdktf/provider-aws.alb.Alb.Initializer.parameter.enableZonalShift">enable_zonal_shift</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/alb#enable_zonal_shift Alb#enable_zonal_shift}. |
| <code><a href="#@cdktf/provider-aws.alb.Alb.Initializer.parameter.enforceSecurityGroupInboundRulesOnPrivateLinkTraffic">enforce_security_group_inbound_rules_on_private_link_traffic</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/alb#enforce_security_group_inbound_rules_on_private_link_traffic Alb#enforce_security_group_inbound_rules_on_private_link_traffic}. |
| <code><a href="#@cdktf/provider-aws.alb.Alb.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/alb#id Alb#id}. |
| <code><a href="#@cdktf/provider-aws.alb.Alb.Initializer.parameter.idleTimeout">idle_timeout</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/alb#idle_timeout Alb#idle_timeout}. |
| <code><a href="#@cdktf/provider-aws.alb.Alb.Initializer.parameter.internal">internal</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/alb#internal Alb#internal}. |
| <code><a href="#@cdktf/provider-aws.alb.Alb.Initializer.parameter.ipAddressType">ip_address_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/alb#ip_address_type Alb#ip_address_type}. |
| <code><a href="#@cdktf/provider-aws.alb.Alb.Initializer.parameter.ipamPools">ipam_pools</a></code> | <code><a href="#@cdktf/provider-aws.alb.AlbIpamPools">AlbIpamPools</a></code> | ipam_pools block. |
| <code><a href="#@cdktf/provider-aws.alb.Alb.Initializer.parameter.loadBalancerType">load_balancer_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/alb#load_balancer_type Alb#load_balancer_type}. |
| <code><a href="#@cdktf/provider-aws.alb.Alb.Initializer.parameter.minimumLoadBalancerCapacity">minimum_load_balancer_capacity</a></code> | <code><a href="#@cdktf/provider-aws.alb.AlbMinimumLoadBalancerCapacity">AlbMinimumLoadBalancerCapacity</a></code> | minimum_load_balancer_capacity block. |
| <code><a href="#@cdktf/provider-aws.alb.Alb.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/alb#name Alb#name}. |
| <code><a href="#@cdktf/provider-aws.alb.Alb.Initializer.parameter.namePrefix">name_prefix</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/alb#name_prefix Alb#name_prefix}. |
| <code><a href="#@cdktf/provider-aws.alb.Alb.Initializer.parameter.preserveHostHeader">preserve_host_header</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/alb#preserve_host_header Alb#preserve_host_header}. |
| <code><a href="#@cdktf/provider-aws.alb.Alb.Initializer.parameter.region">region</a></code> | <code>str</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktf/provider-aws.alb.Alb.Initializer.parameter.securityGroups">security_groups</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/alb#security_groups Alb#security_groups}. |
| <code><a href="#@cdktf/provider-aws.alb.Alb.Initializer.parameter.subnetMapping">subnet_mapping</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.alb.AlbSubnetMapping">AlbSubnetMapping</a>]]</code> | subnet_mapping block. |
| <code><a href="#@cdktf/provider-aws.alb.Alb.Initializer.parameter.subnets">subnets</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/alb#subnets Alb#subnets}. |
| <code><a href="#@cdktf/provider-aws.alb.Alb.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/alb#tags Alb#tags}. |
| <code><a href="#@cdktf/provider-aws.alb.Alb.Initializer.parameter.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/alb#tags_all Alb#tags_all}. |
| <code><a href="#@cdktf/provider-aws.alb.Alb.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.alb.AlbTimeouts">AlbTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-aws.alb.Alb.Initializer.parameter.xffHeaderProcessingMode">xff_header_processing_mode</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/alb#xff_header_processing_mode Alb#xff_header_processing_mode}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.alb.Alb.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.alb.Alb.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.alb.Alb.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.alb.Alb.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.alb.Alb.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.alb.Alb.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.alb.Alb.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.alb.Alb.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.alb.Alb.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `access_logs`<sup>Optional</sup> <a name="access_logs" id="@cdktf/provider-aws.alb.Alb.Initializer.parameter.accessLogs"></a>

- *Type:* <a href="#@cdktf/provider-aws.alb.AlbAccessLogs">AlbAccessLogs</a>

access_logs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/alb#access_logs Alb#access_logs}

---

##### `client_keep_alive`<sup>Optional</sup> <a name="client_keep_alive" id="@cdktf/provider-aws.alb.Alb.Initializer.parameter.clientKeepAlive"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/alb#client_keep_alive Alb#client_keep_alive}.

---

##### `connection_logs`<sup>Optional</sup> <a name="connection_logs" id="@cdktf/provider-aws.alb.Alb.Initializer.parameter.connectionLogs"></a>

- *Type:* <a href="#@cdktf/provider-aws.alb.AlbConnectionLogs">AlbConnectionLogs</a>

connection_logs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/alb#connection_logs Alb#connection_logs}

---

##### `customer_owned_ipv4_pool`<sup>Optional</sup> <a name="customer_owned_ipv4_pool" id="@cdktf/provider-aws.alb.Alb.Initializer.parameter.customerOwnedIpv4Pool"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/alb#customer_owned_ipv4_pool Alb#customer_owned_ipv4_pool}.

---

##### `desync_mitigation_mode`<sup>Optional</sup> <a name="desync_mitigation_mode" id="@cdktf/provider-aws.alb.Alb.Initializer.parameter.desyncMitigationMode"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/alb#desync_mitigation_mode Alb#desync_mitigation_mode}.

---

##### `dns_record_client_routing_policy`<sup>Optional</sup> <a name="dns_record_client_routing_policy" id="@cdktf/provider-aws.alb.Alb.Initializer.parameter.dnsRecordClientRoutingPolicy"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/alb#dns_record_client_routing_policy Alb#dns_record_client_routing_policy}.

---

##### `drop_invalid_header_fields`<sup>Optional</sup> <a name="drop_invalid_header_fields" id="@cdktf/provider-aws.alb.Alb.Initializer.parameter.dropInvalidHeaderFields"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/alb#drop_invalid_header_fields Alb#drop_invalid_header_fields}.

---

##### `enable_cross_zone_load_balancing`<sup>Optional</sup> <a name="enable_cross_zone_load_balancing" id="@cdktf/provider-aws.alb.Alb.Initializer.parameter.enableCrossZoneLoadBalancing"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/alb#enable_cross_zone_load_balancing Alb#enable_cross_zone_load_balancing}.

---

##### `enable_deletion_protection`<sup>Optional</sup> <a name="enable_deletion_protection" id="@cdktf/provider-aws.alb.Alb.Initializer.parameter.enableDeletionProtection"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/alb#enable_deletion_protection Alb#enable_deletion_protection}.

---

##### `enable_http2`<sup>Optional</sup> <a name="enable_http2" id="@cdktf/provider-aws.alb.Alb.Initializer.parameter.enableHttp2"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/alb#enable_http2 Alb#enable_http2}.

---

##### `enable_tls_version_and_cipher_suite_headers`<sup>Optional</sup> <a name="enable_tls_version_and_cipher_suite_headers" id="@cdktf/provider-aws.alb.Alb.Initializer.parameter.enableTlsVersionAndCipherSuiteHeaders"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/alb#enable_tls_version_and_cipher_suite_headers Alb#enable_tls_version_and_cipher_suite_headers}.

---

##### `enable_waf_fail_open`<sup>Optional</sup> <a name="enable_waf_fail_open" id="@cdktf/provider-aws.alb.Alb.Initializer.parameter.enableWafFailOpen"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/alb#enable_waf_fail_open Alb#enable_waf_fail_open}.

---

##### `enable_xff_client_port`<sup>Optional</sup> <a name="enable_xff_client_port" id="@cdktf/provider-aws.alb.Alb.Initializer.parameter.enableXffClientPort"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/alb#enable_xff_client_port Alb#enable_xff_client_port}.

---

##### `enable_zonal_shift`<sup>Optional</sup> <a name="enable_zonal_shift" id="@cdktf/provider-aws.alb.Alb.Initializer.parameter.enableZonalShift"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/alb#enable_zonal_shift Alb#enable_zonal_shift}.

---

##### `enforce_security_group_inbound_rules_on_private_link_traffic`<sup>Optional</sup> <a name="enforce_security_group_inbound_rules_on_private_link_traffic" id="@cdktf/provider-aws.alb.Alb.Initializer.parameter.enforceSecurityGroupInboundRulesOnPrivateLinkTraffic"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/alb#enforce_security_group_inbound_rules_on_private_link_traffic Alb#enforce_security_group_inbound_rules_on_private_link_traffic}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.alb.Alb.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/alb#id Alb#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `idle_timeout`<sup>Optional</sup> <a name="idle_timeout" id="@cdktf/provider-aws.alb.Alb.Initializer.parameter.idleTimeout"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/alb#idle_timeout Alb#idle_timeout}.

---

##### `internal`<sup>Optional</sup> <a name="internal" id="@cdktf/provider-aws.alb.Alb.Initializer.parameter.internal"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/alb#internal Alb#internal}.

---

##### `ip_address_type`<sup>Optional</sup> <a name="ip_address_type" id="@cdktf/provider-aws.alb.Alb.Initializer.parameter.ipAddressType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/alb#ip_address_type Alb#ip_address_type}.

---

##### `ipam_pools`<sup>Optional</sup> <a name="ipam_pools" id="@cdktf/provider-aws.alb.Alb.Initializer.parameter.ipamPools"></a>

- *Type:* <a href="#@cdktf/provider-aws.alb.AlbIpamPools">AlbIpamPools</a>

ipam_pools block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/alb#ipam_pools Alb#ipam_pools}

---

##### `load_balancer_type`<sup>Optional</sup> <a name="load_balancer_type" id="@cdktf/provider-aws.alb.Alb.Initializer.parameter.loadBalancerType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/alb#load_balancer_type Alb#load_balancer_type}.

---

##### `minimum_load_balancer_capacity`<sup>Optional</sup> <a name="minimum_load_balancer_capacity" id="@cdktf/provider-aws.alb.Alb.Initializer.parameter.minimumLoadBalancerCapacity"></a>

- *Type:* <a href="#@cdktf/provider-aws.alb.AlbMinimumLoadBalancerCapacity">AlbMinimumLoadBalancerCapacity</a>

minimum_load_balancer_capacity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/alb#minimum_load_balancer_capacity Alb#minimum_load_balancer_capacity}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-aws.alb.Alb.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/alb#name Alb#name}.

---

##### `name_prefix`<sup>Optional</sup> <a name="name_prefix" id="@cdktf/provider-aws.alb.Alb.Initializer.parameter.namePrefix"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/alb#name_prefix Alb#name_prefix}.

---

##### `preserve_host_header`<sup>Optional</sup> <a name="preserve_host_header" id="@cdktf/provider-aws.alb.Alb.Initializer.parameter.preserveHostHeader"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/alb#preserve_host_header Alb#preserve_host_header}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-aws.alb.Alb.Initializer.parameter.region"></a>

- *Type:* str

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/alb#region Alb#region}

---

##### `security_groups`<sup>Optional</sup> <a name="security_groups" id="@cdktf/provider-aws.alb.Alb.Initializer.parameter.securityGroups"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/alb#security_groups Alb#security_groups}.

---

##### `subnet_mapping`<sup>Optional</sup> <a name="subnet_mapping" id="@cdktf/provider-aws.alb.Alb.Initializer.parameter.subnetMapping"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.alb.AlbSubnetMapping">AlbSubnetMapping</a>]]

subnet_mapping block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/alb#subnet_mapping Alb#subnet_mapping}

---

##### `subnets`<sup>Optional</sup> <a name="subnets" id="@cdktf/provider-aws.alb.Alb.Initializer.parameter.subnets"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/alb#subnets Alb#subnets}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.alb.Alb.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/alb#tags Alb#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.alb.Alb.Initializer.parameter.tagsAll"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/alb#tags_all Alb#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.alb.Alb.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-aws.alb.AlbTimeouts">AlbTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/alb#timeouts Alb#timeouts}

---

##### `xff_header_processing_mode`<sup>Optional</sup> <a name="xff_header_processing_mode" id="@cdktf/provider-aws.alb.Alb.Initializer.parameter.xffHeaderProcessingMode"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/alb#xff_header_processing_mode Alb#xff_header_processing_mode}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.alb.Alb.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.alb.Alb.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.alb.Alb.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.alb.Alb.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.alb.Alb.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.alb.Alb.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.alb.Alb.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.alb.Alb.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.alb.Alb.putAccessLogs">put_access_logs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.putConnectionLogs">put_connection_logs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.putIpamPools">put_ipam_pools</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.putMinimumLoadBalancerCapacity">put_minimum_load_balancer_capacity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.putSubnetMapping">put_subnet_mapping</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.resetAccessLogs">reset_access_logs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.resetClientKeepAlive">reset_client_keep_alive</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.resetConnectionLogs">reset_connection_logs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.resetCustomerOwnedIpv4Pool">reset_customer_owned_ipv4_pool</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.resetDesyncMitigationMode">reset_desync_mitigation_mode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.resetDnsRecordClientRoutingPolicy">reset_dns_record_client_routing_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.resetDropInvalidHeaderFields">reset_drop_invalid_header_fields</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.resetEnableCrossZoneLoadBalancing">reset_enable_cross_zone_load_balancing</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.resetEnableDeletionProtection">reset_enable_deletion_protection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.resetEnableHttp2">reset_enable_http2</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.resetEnableTlsVersionAndCipherSuiteHeaders">reset_enable_tls_version_and_cipher_suite_headers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.resetEnableWafFailOpen">reset_enable_waf_fail_open</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.resetEnableXffClientPort">reset_enable_xff_client_port</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.resetEnableZonalShift">reset_enable_zonal_shift</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.resetEnforceSecurityGroupInboundRulesOnPrivateLinkTraffic">reset_enforce_security_group_inbound_rules_on_private_link_traffic</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.resetIdleTimeout">reset_idle_timeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.resetInternal">reset_internal</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.resetIpAddressType">reset_ip_address_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.resetIpamPools">reset_ipam_pools</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.resetLoadBalancerType">reset_load_balancer_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.resetMinimumLoadBalancerCapacity">reset_minimum_load_balancer_capacity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.resetNamePrefix">reset_name_prefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.resetPreserveHostHeader">reset_preserve_host_header</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.resetRegion">reset_region</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.resetSecurityGroups">reset_security_groups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.resetSubnetMapping">reset_subnet_mapping</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.resetSubnets">reset_subnets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.resetTagsAll">reset_tags_all</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.resetXffHeaderProcessingMode">reset_xff_header_processing_mode</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.alb.Alb.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.alb.Alb.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.alb.Alb.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.alb.Alb.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.alb.Alb.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.alb.Alb.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.alb.Alb.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-aws.alb.Alb.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.alb.Alb.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.alb.Alb.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-aws.alb.Alb.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-aws.alb.Alb.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.alb.Alb.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.alb.Alb.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.alb.Alb.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.alb.Alb.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.alb.Alb.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.alb.Alb.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.alb.Alb.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.alb.Alb.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.alb.Alb.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.alb.Alb.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.alb.Alb.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.alb.Alb.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.alb.Alb.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.alb.Alb.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.alb.Alb.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.alb.Alb.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.alb.Alb.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.alb.Alb.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-aws.alb.Alb.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-aws.alb.Alb.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.alb.Alb.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.alb.Alb.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.alb.Alb.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.alb.Alb.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-aws.alb.Alb.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.alb.Alb.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-aws.alb.Alb.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-aws.alb.Alb.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.alb.Alb.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-aws.alb.Alb.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.alb.Alb.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_access_logs` <a name="put_access_logs" id="@cdktf/provider-aws.alb.Alb.putAccessLogs"></a>

```python
def put_access_logs(
  bucket: str,
  enabled: typing.Union[bool, IResolvable] = None,
  prefix: str = None
) -> None
```

###### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-aws.alb.Alb.putAccessLogs.parameter.bucket"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/alb#bucket Alb#bucket}.

---

###### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-aws.alb.Alb.putAccessLogs.parameter.enabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/alb#enabled Alb#enabled}.

---

###### `prefix`<sup>Optional</sup> <a name="prefix" id="@cdktf/provider-aws.alb.Alb.putAccessLogs.parameter.prefix"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/alb#prefix Alb#prefix}.

---

##### `put_connection_logs` <a name="put_connection_logs" id="@cdktf/provider-aws.alb.Alb.putConnectionLogs"></a>

```python
def put_connection_logs(
  bucket: str,
  enabled: typing.Union[bool, IResolvable] = None,
  prefix: str = None
) -> None
```

###### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-aws.alb.Alb.putConnectionLogs.parameter.bucket"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/alb#bucket Alb#bucket}.

---

###### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-aws.alb.Alb.putConnectionLogs.parameter.enabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/alb#enabled Alb#enabled}.

---

###### `prefix`<sup>Optional</sup> <a name="prefix" id="@cdktf/provider-aws.alb.Alb.putConnectionLogs.parameter.prefix"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/alb#prefix Alb#prefix}.

---

##### `put_ipam_pools` <a name="put_ipam_pools" id="@cdktf/provider-aws.alb.Alb.putIpamPools"></a>

```python
def put_ipam_pools(
  ipv4_ipam_pool_id: str
) -> None
```

###### `ipv4_ipam_pool_id`<sup>Required</sup> <a name="ipv4_ipam_pool_id" id="@cdktf/provider-aws.alb.Alb.putIpamPools.parameter.ipv4IpamPoolId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/alb#ipv4_ipam_pool_id Alb#ipv4_ipam_pool_id}.

---

##### `put_minimum_load_balancer_capacity` <a name="put_minimum_load_balancer_capacity" id="@cdktf/provider-aws.alb.Alb.putMinimumLoadBalancerCapacity"></a>

```python
def put_minimum_load_balancer_capacity(
  capacity_units: typing.Union[int, float]
) -> None
```

###### `capacity_units`<sup>Required</sup> <a name="capacity_units" id="@cdktf/provider-aws.alb.Alb.putMinimumLoadBalancerCapacity.parameter.capacityUnits"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/alb#capacity_units Alb#capacity_units}.

---

##### `put_subnet_mapping` <a name="put_subnet_mapping" id="@cdktf/provider-aws.alb.Alb.putSubnetMapping"></a>

```python
def put_subnet_mapping(
  value: typing.Union[IResolvable, typing.List[AlbSubnetMapping]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.alb.Alb.putSubnetMapping.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.alb.AlbSubnetMapping">AlbSubnetMapping</a>]]

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-aws.alb.Alb.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.alb.Alb.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/alb#create Alb#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.alb.Alb.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/alb#delete Alb#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.alb.Alb.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/alb#update Alb#update}.

---

##### `reset_access_logs` <a name="reset_access_logs" id="@cdktf/provider-aws.alb.Alb.resetAccessLogs"></a>

```python
def reset_access_logs() -> None
```

##### `reset_client_keep_alive` <a name="reset_client_keep_alive" id="@cdktf/provider-aws.alb.Alb.resetClientKeepAlive"></a>

```python
def reset_client_keep_alive() -> None
```

##### `reset_connection_logs` <a name="reset_connection_logs" id="@cdktf/provider-aws.alb.Alb.resetConnectionLogs"></a>

```python
def reset_connection_logs() -> None
```

##### `reset_customer_owned_ipv4_pool` <a name="reset_customer_owned_ipv4_pool" id="@cdktf/provider-aws.alb.Alb.resetCustomerOwnedIpv4Pool"></a>

```python
def reset_customer_owned_ipv4_pool() -> None
```

##### `reset_desync_mitigation_mode` <a name="reset_desync_mitigation_mode" id="@cdktf/provider-aws.alb.Alb.resetDesyncMitigationMode"></a>

```python
def reset_desync_mitigation_mode() -> None
```

##### `reset_dns_record_client_routing_policy` <a name="reset_dns_record_client_routing_policy" id="@cdktf/provider-aws.alb.Alb.resetDnsRecordClientRoutingPolicy"></a>

```python
def reset_dns_record_client_routing_policy() -> None
```

##### `reset_drop_invalid_header_fields` <a name="reset_drop_invalid_header_fields" id="@cdktf/provider-aws.alb.Alb.resetDropInvalidHeaderFields"></a>

```python
def reset_drop_invalid_header_fields() -> None
```

##### `reset_enable_cross_zone_load_balancing` <a name="reset_enable_cross_zone_load_balancing" id="@cdktf/provider-aws.alb.Alb.resetEnableCrossZoneLoadBalancing"></a>

```python
def reset_enable_cross_zone_load_balancing() -> None
```

##### `reset_enable_deletion_protection` <a name="reset_enable_deletion_protection" id="@cdktf/provider-aws.alb.Alb.resetEnableDeletionProtection"></a>

```python
def reset_enable_deletion_protection() -> None
```

##### `reset_enable_http2` <a name="reset_enable_http2" id="@cdktf/provider-aws.alb.Alb.resetEnableHttp2"></a>

```python
def reset_enable_http2() -> None
```

##### `reset_enable_tls_version_and_cipher_suite_headers` <a name="reset_enable_tls_version_and_cipher_suite_headers" id="@cdktf/provider-aws.alb.Alb.resetEnableTlsVersionAndCipherSuiteHeaders"></a>

```python
def reset_enable_tls_version_and_cipher_suite_headers() -> None
```

##### `reset_enable_waf_fail_open` <a name="reset_enable_waf_fail_open" id="@cdktf/provider-aws.alb.Alb.resetEnableWafFailOpen"></a>

```python
def reset_enable_waf_fail_open() -> None
```

##### `reset_enable_xff_client_port` <a name="reset_enable_xff_client_port" id="@cdktf/provider-aws.alb.Alb.resetEnableXffClientPort"></a>

```python
def reset_enable_xff_client_port() -> None
```

##### `reset_enable_zonal_shift` <a name="reset_enable_zonal_shift" id="@cdktf/provider-aws.alb.Alb.resetEnableZonalShift"></a>

```python
def reset_enable_zonal_shift() -> None
```

##### `reset_enforce_security_group_inbound_rules_on_private_link_traffic` <a name="reset_enforce_security_group_inbound_rules_on_private_link_traffic" id="@cdktf/provider-aws.alb.Alb.resetEnforceSecurityGroupInboundRulesOnPrivateLinkTraffic"></a>

```python
def reset_enforce_security_group_inbound_rules_on_private_link_traffic() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.alb.Alb.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_idle_timeout` <a name="reset_idle_timeout" id="@cdktf/provider-aws.alb.Alb.resetIdleTimeout"></a>

```python
def reset_idle_timeout() -> None
```

##### `reset_internal` <a name="reset_internal" id="@cdktf/provider-aws.alb.Alb.resetInternal"></a>

```python
def reset_internal() -> None
```

##### `reset_ip_address_type` <a name="reset_ip_address_type" id="@cdktf/provider-aws.alb.Alb.resetIpAddressType"></a>

```python
def reset_ip_address_type() -> None
```

##### `reset_ipam_pools` <a name="reset_ipam_pools" id="@cdktf/provider-aws.alb.Alb.resetIpamPools"></a>

```python
def reset_ipam_pools() -> None
```

##### `reset_load_balancer_type` <a name="reset_load_balancer_type" id="@cdktf/provider-aws.alb.Alb.resetLoadBalancerType"></a>

```python
def reset_load_balancer_type() -> None
```

##### `reset_minimum_load_balancer_capacity` <a name="reset_minimum_load_balancer_capacity" id="@cdktf/provider-aws.alb.Alb.resetMinimumLoadBalancerCapacity"></a>

```python
def reset_minimum_load_balancer_capacity() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktf/provider-aws.alb.Alb.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_name_prefix` <a name="reset_name_prefix" id="@cdktf/provider-aws.alb.Alb.resetNamePrefix"></a>

```python
def reset_name_prefix() -> None
```

##### `reset_preserve_host_header` <a name="reset_preserve_host_header" id="@cdktf/provider-aws.alb.Alb.resetPreserveHostHeader"></a>

```python
def reset_preserve_host_header() -> None
```

##### `reset_region` <a name="reset_region" id="@cdktf/provider-aws.alb.Alb.resetRegion"></a>

```python
def reset_region() -> None
```

##### `reset_security_groups` <a name="reset_security_groups" id="@cdktf/provider-aws.alb.Alb.resetSecurityGroups"></a>

```python
def reset_security_groups() -> None
```

##### `reset_subnet_mapping` <a name="reset_subnet_mapping" id="@cdktf/provider-aws.alb.Alb.resetSubnetMapping"></a>

```python
def reset_subnet_mapping() -> None
```

##### `reset_subnets` <a name="reset_subnets" id="@cdktf/provider-aws.alb.Alb.resetSubnets"></a>

```python
def reset_subnets() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-aws.alb.Alb.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_tags_all` <a name="reset_tags_all" id="@cdktf/provider-aws.alb.Alb.resetTagsAll"></a>

```python
def reset_tags_all() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-aws.alb.Alb.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_xff_header_processing_mode` <a name="reset_xff_header_processing_mode" id="@cdktf/provider-aws.alb.Alb.resetXffHeaderProcessingMode"></a>

```python
def reset_xff_header_processing_mode() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.alb.Alb.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.alb.Alb.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a Alb resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.alb.Alb.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import alb

alb.Alb.is_construct(
  x: typing.Any
)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.alb.Alb.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.alb.Alb.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import alb

alb.Alb.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.alb.Alb.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.alb.Alb.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import alb

alb.Alb.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.alb.Alb.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-aws.alb.Alb.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_aws import alb

alb.Alb.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a Alb resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.alb.Alb.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-aws.alb.Alb.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the Alb to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-aws.alb.Alb.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing Alb that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/alb#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.alb.Alb.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the Alb to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.alb.Alb.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.alb.Alb.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.property.accessLogs">access_logs</a></code> | <code><a href="#@cdktf/provider-aws.alb.AlbAccessLogsOutputReference">AlbAccessLogsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.property.arnSuffix">arn_suffix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.property.connectionLogs">connection_logs</a></code> | <code><a href="#@cdktf/provider-aws.alb.AlbConnectionLogsOutputReference">AlbConnectionLogsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.property.dnsName">dns_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.property.ipamPools">ipam_pools</a></code> | <code><a href="#@cdktf/provider-aws.alb.AlbIpamPoolsOutputReference">AlbIpamPoolsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.property.minimumLoadBalancerCapacity">minimum_load_balancer_capacity</a></code> | <code><a href="#@cdktf/provider-aws.alb.AlbMinimumLoadBalancerCapacityOutputReference">AlbMinimumLoadBalancerCapacityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.property.subnetMapping">subnet_mapping</a></code> | <code><a href="#@cdktf/provider-aws.alb.AlbSubnetMappingList">AlbSubnetMappingList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.alb.AlbTimeoutsOutputReference">AlbTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.property.vpcId">vpc_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.property.zoneId">zone_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.property.accessLogsInput">access_logs_input</a></code> | <code><a href="#@cdktf/provider-aws.alb.AlbAccessLogs">AlbAccessLogs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.property.clientKeepAliveInput">client_keep_alive_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.property.connectionLogsInput">connection_logs_input</a></code> | <code><a href="#@cdktf/provider-aws.alb.AlbConnectionLogs">AlbConnectionLogs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.property.customerOwnedIpv4PoolInput">customer_owned_ipv4_pool_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.property.desyncMitigationModeInput">desync_mitigation_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.property.dnsRecordClientRoutingPolicyInput">dns_record_client_routing_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.property.dropInvalidHeaderFieldsInput">drop_invalid_header_fields_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.property.enableCrossZoneLoadBalancingInput">enable_cross_zone_load_balancing_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.property.enableDeletionProtectionInput">enable_deletion_protection_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.property.enableHttp2Input">enable_http2_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.property.enableTlsVersionAndCipherSuiteHeadersInput">enable_tls_version_and_cipher_suite_headers_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.property.enableWafFailOpenInput">enable_waf_fail_open_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.property.enableXffClientPortInput">enable_xff_client_port_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.property.enableZonalShiftInput">enable_zonal_shift_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.property.enforceSecurityGroupInboundRulesOnPrivateLinkTrafficInput">enforce_security_group_inbound_rules_on_private_link_traffic_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.property.idleTimeoutInput">idle_timeout_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.property.internalInput">internal_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.property.ipAddressTypeInput">ip_address_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.property.ipamPoolsInput">ipam_pools_input</a></code> | <code><a href="#@cdktf/provider-aws.alb.AlbIpamPools">AlbIpamPools</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.property.loadBalancerTypeInput">load_balancer_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.property.minimumLoadBalancerCapacityInput">minimum_load_balancer_capacity_input</a></code> | <code><a href="#@cdktf/provider-aws.alb.AlbMinimumLoadBalancerCapacity">AlbMinimumLoadBalancerCapacity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.property.namePrefixInput">name_prefix_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.property.preserveHostHeaderInput">preserve_host_header_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.property.securityGroupsInput">security_groups_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.property.subnetMappingInput">subnet_mapping_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.alb.AlbSubnetMapping">AlbSubnetMapping</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.property.subnetsInput">subnets_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.property.tagsAllInput">tags_all_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.alb.AlbTimeouts">AlbTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.property.xffHeaderProcessingModeInput">xff_header_processing_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.property.clientKeepAlive">client_keep_alive</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.property.customerOwnedIpv4Pool">customer_owned_ipv4_pool</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.property.desyncMitigationMode">desync_mitigation_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.property.dnsRecordClientRoutingPolicy">dns_record_client_routing_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.property.dropInvalidHeaderFields">drop_invalid_header_fields</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.property.enableCrossZoneLoadBalancing">enable_cross_zone_load_balancing</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.property.enableDeletionProtection">enable_deletion_protection</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.property.enableHttp2">enable_http2</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.property.enableTlsVersionAndCipherSuiteHeaders">enable_tls_version_and_cipher_suite_headers</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.property.enableWafFailOpen">enable_waf_fail_open</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.property.enableXffClientPort">enable_xff_client_port</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.property.enableZonalShift">enable_zonal_shift</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.property.enforceSecurityGroupInboundRulesOnPrivateLinkTraffic">enforce_security_group_inbound_rules_on_private_link_traffic</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.property.idleTimeout">idle_timeout</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.property.internal">internal</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.property.ipAddressType">ip_address_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.property.loadBalancerType">load_balancer_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.property.namePrefix">name_prefix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.property.preserveHostHeader">preserve_host_header</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.property.securityGroups">security_groups</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.property.subnets">subnets</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.Alb.property.xffHeaderProcessingMode">xff_header_processing_mode</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.alb.Alb.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.alb.Alb.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.alb.Alb.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.alb.Alb.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.alb.Alb.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.alb.Alb.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.alb.Alb.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.alb.Alb.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.alb.Alb.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.alb.Alb.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.alb.Alb.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.alb.Alb.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.alb.Alb.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.alb.Alb.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `access_logs`<sup>Required</sup> <a name="access_logs" id="@cdktf/provider-aws.alb.Alb.property.accessLogs"></a>

```python
access_logs: AlbAccessLogsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.alb.AlbAccessLogsOutputReference">AlbAccessLogsOutputReference</a>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.alb.Alb.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `arn_suffix`<sup>Required</sup> <a name="arn_suffix" id="@cdktf/provider-aws.alb.Alb.property.arnSuffix"></a>

```python
arn_suffix: str
```

- *Type:* str

---

##### `connection_logs`<sup>Required</sup> <a name="connection_logs" id="@cdktf/provider-aws.alb.Alb.property.connectionLogs"></a>

```python
connection_logs: AlbConnectionLogsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.alb.AlbConnectionLogsOutputReference">AlbConnectionLogsOutputReference</a>

---

##### `dns_name`<sup>Required</sup> <a name="dns_name" id="@cdktf/provider-aws.alb.Alb.property.dnsName"></a>

```python
dns_name: str
```

- *Type:* str

---

##### `ipam_pools`<sup>Required</sup> <a name="ipam_pools" id="@cdktf/provider-aws.alb.Alb.property.ipamPools"></a>

```python
ipam_pools: AlbIpamPoolsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.alb.AlbIpamPoolsOutputReference">AlbIpamPoolsOutputReference</a>

---

##### `minimum_load_balancer_capacity`<sup>Required</sup> <a name="minimum_load_balancer_capacity" id="@cdktf/provider-aws.alb.Alb.property.minimumLoadBalancerCapacity"></a>

```python
minimum_load_balancer_capacity: AlbMinimumLoadBalancerCapacityOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.alb.AlbMinimumLoadBalancerCapacityOutputReference">AlbMinimumLoadBalancerCapacityOutputReference</a>

---

##### `subnet_mapping`<sup>Required</sup> <a name="subnet_mapping" id="@cdktf/provider-aws.alb.Alb.property.subnetMapping"></a>

```python
subnet_mapping: AlbSubnetMappingList
```

- *Type:* <a href="#@cdktf/provider-aws.alb.AlbSubnetMappingList">AlbSubnetMappingList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.alb.Alb.property.timeouts"></a>

```python
timeouts: AlbTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.alb.AlbTimeoutsOutputReference">AlbTimeoutsOutputReference</a>

---

##### `vpc_id`<sup>Required</sup> <a name="vpc_id" id="@cdktf/provider-aws.alb.Alb.property.vpcId"></a>

```python
vpc_id: str
```

- *Type:* str

---

##### `zone_id`<sup>Required</sup> <a name="zone_id" id="@cdktf/provider-aws.alb.Alb.property.zoneId"></a>

```python
zone_id: str
```

- *Type:* str

---

##### `access_logs_input`<sup>Optional</sup> <a name="access_logs_input" id="@cdktf/provider-aws.alb.Alb.property.accessLogsInput"></a>

```python
access_logs_input: AlbAccessLogs
```

- *Type:* <a href="#@cdktf/provider-aws.alb.AlbAccessLogs">AlbAccessLogs</a>

---

##### `client_keep_alive_input`<sup>Optional</sup> <a name="client_keep_alive_input" id="@cdktf/provider-aws.alb.Alb.property.clientKeepAliveInput"></a>

```python
client_keep_alive_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `connection_logs_input`<sup>Optional</sup> <a name="connection_logs_input" id="@cdktf/provider-aws.alb.Alb.property.connectionLogsInput"></a>

```python
connection_logs_input: AlbConnectionLogs
```

- *Type:* <a href="#@cdktf/provider-aws.alb.AlbConnectionLogs">AlbConnectionLogs</a>

---

##### `customer_owned_ipv4_pool_input`<sup>Optional</sup> <a name="customer_owned_ipv4_pool_input" id="@cdktf/provider-aws.alb.Alb.property.customerOwnedIpv4PoolInput"></a>

```python
customer_owned_ipv4_pool_input: str
```

- *Type:* str

---

##### `desync_mitigation_mode_input`<sup>Optional</sup> <a name="desync_mitigation_mode_input" id="@cdktf/provider-aws.alb.Alb.property.desyncMitigationModeInput"></a>

```python
desync_mitigation_mode_input: str
```

- *Type:* str

---

##### `dns_record_client_routing_policy_input`<sup>Optional</sup> <a name="dns_record_client_routing_policy_input" id="@cdktf/provider-aws.alb.Alb.property.dnsRecordClientRoutingPolicyInput"></a>

```python
dns_record_client_routing_policy_input: str
```

- *Type:* str

---

##### `drop_invalid_header_fields_input`<sup>Optional</sup> <a name="drop_invalid_header_fields_input" id="@cdktf/provider-aws.alb.Alb.property.dropInvalidHeaderFieldsInput"></a>

```python
drop_invalid_header_fields_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enable_cross_zone_load_balancing_input`<sup>Optional</sup> <a name="enable_cross_zone_load_balancing_input" id="@cdktf/provider-aws.alb.Alb.property.enableCrossZoneLoadBalancingInput"></a>

```python
enable_cross_zone_load_balancing_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enable_deletion_protection_input`<sup>Optional</sup> <a name="enable_deletion_protection_input" id="@cdktf/provider-aws.alb.Alb.property.enableDeletionProtectionInput"></a>

```python
enable_deletion_protection_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enable_http2_input`<sup>Optional</sup> <a name="enable_http2_input" id="@cdktf/provider-aws.alb.Alb.property.enableHttp2Input"></a>

```python
enable_http2_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enable_tls_version_and_cipher_suite_headers_input`<sup>Optional</sup> <a name="enable_tls_version_and_cipher_suite_headers_input" id="@cdktf/provider-aws.alb.Alb.property.enableTlsVersionAndCipherSuiteHeadersInput"></a>

```python
enable_tls_version_and_cipher_suite_headers_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enable_waf_fail_open_input`<sup>Optional</sup> <a name="enable_waf_fail_open_input" id="@cdktf/provider-aws.alb.Alb.property.enableWafFailOpenInput"></a>

```python
enable_waf_fail_open_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enable_xff_client_port_input`<sup>Optional</sup> <a name="enable_xff_client_port_input" id="@cdktf/provider-aws.alb.Alb.property.enableXffClientPortInput"></a>

```python
enable_xff_client_port_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enable_zonal_shift_input`<sup>Optional</sup> <a name="enable_zonal_shift_input" id="@cdktf/provider-aws.alb.Alb.property.enableZonalShiftInput"></a>

```python
enable_zonal_shift_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enforce_security_group_inbound_rules_on_private_link_traffic_input`<sup>Optional</sup> <a name="enforce_security_group_inbound_rules_on_private_link_traffic_input" id="@cdktf/provider-aws.alb.Alb.property.enforceSecurityGroupInboundRulesOnPrivateLinkTrafficInput"></a>

```python
enforce_security_group_inbound_rules_on_private_link_traffic_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.alb.Alb.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `idle_timeout_input`<sup>Optional</sup> <a name="idle_timeout_input" id="@cdktf/provider-aws.alb.Alb.property.idleTimeoutInput"></a>

```python
idle_timeout_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_input`<sup>Optional</sup> <a name="internal_input" id="@cdktf/provider-aws.alb.Alb.property.internalInput"></a>

```python
internal_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `ip_address_type_input`<sup>Optional</sup> <a name="ip_address_type_input" id="@cdktf/provider-aws.alb.Alb.property.ipAddressTypeInput"></a>

```python
ip_address_type_input: str
```

- *Type:* str

---

##### `ipam_pools_input`<sup>Optional</sup> <a name="ipam_pools_input" id="@cdktf/provider-aws.alb.Alb.property.ipamPoolsInput"></a>

```python
ipam_pools_input: AlbIpamPools
```

- *Type:* <a href="#@cdktf/provider-aws.alb.AlbIpamPools">AlbIpamPools</a>

---

##### `load_balancer_type_input`<sup>Optional</sup> <a name="load_balancer_type_input" id="@cdktf/provider-aws.alb.Alb.property.loadBalancerTypeInput"></a>

```python
load_balancer_type_input: str
```

- *Type:* str

---

##### `minimum_load_balancer_capacity_input`<sup>Optional</sup> <a name="minimum_load_balancer_capacity_input" id="@cdktf/provider-aws.alb.Alb.property.minimumLoadBalancerCapacityInput"></a>

```python
minimum_load_balancer_capacity_input: AlbMinimumLoadBalancerCapacity
```

- *Type:* <a href="#@cdktf/provider-aws.alb.AlbMinimumLoadBalancerCapacity">AlbMinimumLoadBalancerCapacity</a>

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-aws.alb.Alb.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `name_prefix_input`<sup>Optional</sup> <a name="name_prefix_input" id="@cdktf/provider-aws.alb.Alb.property.namePrefixInput"></a>

```python
name_prefix_input: str
```

- *Type:* str

---

##### `preserve_host_header_input`<sup>Optional</sup> <a name="preserve_host_header_input" id="@cdktf/provider-aws.alb.Alb.property.preserveHostHeaderInput"></a>

```python
preserve_host_header_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktf/provider-aws.alb.Alb.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `security_groups_input`<sup>Optional</sup> <a name="security_groups_input" id="@cdktf/provider-aws.alb.Alb.property.securityGroupsInput"></a>

```python
security_groups_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `subnet_mapping_input`<sup>Optional</sup> <a name="subnet_mapping_input" id="@cdktf/provider-aws.alb.Alb.property.subnetMappingInput"></a>

```python
subnet_mapping_input: typing.Union[IResolvable, typing.List[AlbSubnetMapping]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.alb.AlbSubnetMapping">AlbSubnetMapping</a>]]

---

##### `subnets_input`<sup>Optional</sup> <a name="subnets_input" id="@cdktf/provider-aws.alb.Alb.property.subnetsInput"></a>

```python
subnets_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `tags_all_input`<sup>Optional</sup> <a name="tags_all_input" id="@cdktf/provider-aws.alb.Alb.property.tagsAllInput"></a>

```python
tags_all_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-aws.alb.Alb.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-aws.alb.Alb.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, AlbTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.alb.AlbTimeouts">AlbTimeouts</a>]

---

##### `xff_header_processing_mode_input`<sup>Optional</sup> <a name="xff_header_processing_mode_input" id="@cdktf/provider-aws.alb.Alb.property.xffHeaderProcessingModeInput"></a>

```python
xff_header_processing_mode_input: str
```

- *Type:* str

---

##### `client_keep_alive`<sup>Required</sup> <a name="client_keep_alive" id="@cdktf/provider-aws.alb.Alb.property.clientKeepAlive"></a>

```python
client_keep_alive: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `customer_owned_ipv4_pool`<sup>Required</sup> <a name="customer_owned_ipv4_pool" id="@cdktf/provider-aws.alb.Alb.property.customerOwnedIpv4Pool"></a>

```python
customer_owned_ipv4_pool: str
```

- *Type:* str

---

##### `desync_mitigation_mode`<sup>Required</sup> <a name="desync_mitigation_mode" id="@cdktf/provider-aws.alb.Alb.property.desyncMitigationMode"></a>

```python
desync_mitigation_mode: str
```

- *Type:* str

---

##### `dns_record_client_routing_policy`<sup>Required</sup> <a name="dns_record_client_routing_policy" id="@cdktf/provider-aws.alb.Alb.property.dnsRecordClientRoutingPolicy"></a>

```python
dns_record_client_routing_policy: str
```

- *Type:* str

---

##### `drop_invalid_header_fields`<sup>Required</sup> <a name="drop_invalid_header_fields" id="@cdktf/provider-aws.alb.Alb.property.dropInvalidHeaderFields"></a>

```python
drop_invalid_header_fields: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enable_cross_zone_load_balancing`<sup>Required</sup> <a name="enable_cross_zone_load_balancing" id="@cdktf/provider-aws.alb.Alb.property.enableCrossZoneLoadBalancing"></a>

```python
enable_cross_zone_load_balancing: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enable_deletion_protection`<sup>Required</sup> <a name="enable_deletion_protection" id="@cdktf/provider-aws.alb.Alb.property.enableDeletionProtection"></a>

```python
enable_deletion_protection: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enable_http2`<sup>Required</sup> <a name="enable_http2" id="@cdktf/provider-aws.alb.Alb.property.enableHttp2"></a>

```python
enable_http2: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enable_tls_version_and_cipher_suite_headers`<sup>Required</sup> <a name="enable_tls_version_and_cipher_suite_headers" id="@cdktf/provider-aws.alb.Alb.property.enableTlsVersionAndCipherSuiteHeaders"></a>

```python
enable_tls_version_and_cipher_suite_headers: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enable_waf_fail_open`<sup>Required</sup> <a name="enable_waf_fail_open" id="@cdktf/provider-aws.alb.Alb.property.enableWafFailOpen"></a>

```python
enable_waf_fail_open: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enable_xff_client_port`<sup>Required</sup> <a name="enable_xff_client_port" id="@cdktf/provider-aws.alb.Alb.property.enableXffClientPort"></a>

```python
enable_xff_client_port: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enable_zonal_shift`<sup>Required</sup> <a name="enable_zonal_shift" id="@cdktf/provider-aws.alb.Alb.property.enableZonalShift"></a>

```python
enable_zonal_shift: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enforce_security_group_inbound_rules_on_private_link_traffic`<sup>Required</sup> <a name="enforce_security_group_inbound_rules_on_private_link_traffic" id="@cdktf/provider-aws.alb.Alb.property.enforceSecurityGroupInboundRulesOnPrivateLinkTraffic"></a>

```python
enforce_security_group_inbound_rules_on_private_link_traffic: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.alb.Alb.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `idle_timeout`<sup>Required</sup> <a name="idle_timeout" id="@cdktf/provider-aws.alb.Alb.property.idleTimeout"></a>

```python
idle_timeout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal`<sup>Required</sup> <a name="internal" id="@cdktf/provider-aws.alb.Alb.property.internal"></a>

```python
internal: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `ip_address_type`<sup>Required</sup> <a name="ip_address_type" id="@cdktf/provider-aws.alb.Alb.property.ipAddressType"></a>

```python
ip_address_type: str
```

- *Type:* str

---

##### `load_balancer_type`<sup>Required</sup> <a name="load_balancer_type" id="@cdktf/provider-aws.alb.Alb.property.loadBalancerType"></a>

```python
load_balancer_type: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.alb.Alb.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `name_prefix`<sup>Required</sup> <a name="name_prefix" id="@cdktf/provider-aws.alb.Alb.property.namePrefix"></a>

```python
name_prefix: str
```

- *Type:* str

---

##### `preserve_host_header`<sup>Required</sup> <a name="preserve_host_header" id="@cdktf/provider-aws.alb.Alb.property.preserveHostHeader"></a>

```python
preserve_host_header: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-aws.alb.Alb.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `security_groups`<sup>Required</sup> <a name="security_groups" id="@cdktf/provider-aws.alb.Alb.property.securityGroups"></a>

```python
security_groups: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `subnets`<sup>Required</sup> <a name="subnets" id="@cdktf/provider-aws.alb.Alb.property.subnets"></a>

```python
subnets: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.alb.Alb.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_all`<sup>Required</sup> <a name="tags_all" id="@cdktf/provider-aws.alb.Alb.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `xff_header_processing_mode`<sup>Required</sup> <a name="xff_header_processing_mode" id="@cdktf/provider-aws.alb.Alb.property.xffHeaderProcessingMode"></a>

```python
xff_header_processing_mode: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.alb.Alb.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.alb.Alb.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### AlbAccessLogs <a name="AlbAccessLogs" id="@cdktf/provider-aws.alb.AlbAccessLogs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.alb.AlbAccessLogs.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import alb

alb.AlbAccessLogs(
  bucket: str,
  enabled: typing.Union[bool, IResolvable] = None,
  prefix: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.alb.AlbAccessLogs.property.bucket">bucket</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/alb#bucket Alb#bucket}. |
| <code><a href="#@cdktf/provider-aws.alb.AlbAccessLogs.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/alb#enabled Alb#enabled}. |
| <code><a href="#@cdktf/provider-aws.alb.AlbAccessLogs.property.prefix">prefix</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/alb#prefix Alb#prefix}. |

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-aws.alb.AlbAccessLogs.property.bucket"></a>

```python
bucket: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/alb#bucket Alb#bucket}.

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-aws.alb.AlbAccessLogs.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/alb#enabled Alb#enabled}.

---

##### `prefix`<sup>Optional</sup> <a name="prefix" id="@cdktf/provider-aws.alb.AlbAccessLogs.property.prefix"></a>

```python
prefix: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/alb#prefix Alb#prefix}.

---

### AlbConfig <a name="AlbConfig" id="@cdktf/provider-aws.alb.AlbConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.alb.AlbConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import alb

alb.AlbConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  access_logs: AlbAccessLogs = None,
  client_keep_alive: typing.Union[int, float] = None,
  connection_logs: AlbConnectionLogs = None,
  customer_owned_ipv4_pool: str = None,
  desync_mitigation_mode: str = None,
  dns_record_client_routing_policy: str = None,
  drop_invalid_header_fields: typing.Union[bool, IResolvable] = None,
  enable_cross_zone_load_balancing: typing.Union[bool, IResolvable] = None,
  enable_deletion_protection: typing.Union[bool, IResolvable] = None,
  enable_http2: typing.Union[bool, IResolvable] = None,
  enable_tls_version_and_cipher_suite_headers: typing.Union[bool, IResolvable] = None,
  enable_waf_fail_open: typing.Union[bool, IResolvable] = None,
  enable_xff_client_port: typing.Union[bool, IResolvable] = None,
  enable_zonal_shift: typing.Union[bool, IResolvable] = None,
  enforce_security_group_inbound_rules_on_private_link_traffic: str = None,
  id: str = None,
  idle_timeout: typing.Union[int, float] = None,
  internal: typing.Union[bool, IResolvable] = None,
  ip_address_type: str = None,
  ipam_pools: AlbIpamPools = None,
  load_balancer_type: str = None,
  minimum_load_balancer_capacity: AlbMinimumLoadBalancerCapacity = None,
  name: str = None,
  name_prefix: str = None,
  preserve_host_header: typing.Union[bool, IResolvable] = None,
  region: str = None,
  security_groups: typing.List[str] = None,
  subnet_mapping: typing.Union[IResolvable, typing.List[AlbSubnetMapping]] = None,
  subnets: typing.List[str] = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None,
  timeouts: AlbTimeouts = None,
  xff_header_processing_mode: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.alb.AlbConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.AlbConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.AlbConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.AlbConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.AlbConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.AlbConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.AlbConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.AlbConfig.property.accessLogs">access_logs</a></code> | <code><a href="#@cdktf/provider-aws.alb.AlbAccessLogs">AlbAccessLogs</a></code> | access_logs block. |
| <code><a href="#@cdktf/provider-aws.alb.AlbConfig.property.clientKeepAlive">client_keep_alive</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/alb#client_keep_alive Alb#client_keep_alive}. |
| <code><a href="#@cdktf/provider-aws.alb.AlbConfig.property.connectionLogs">connection_logs</a></code> | <code><a href="#@cdktf/provider-aws.alb.AlbConnectionLogs">AlbConnectionLogs</a></code> | connection_logs block. |
| <code><a href="#@cdktf/provider-aws.alb.AlbConfig.property.customerOwnedIpv4Pool">customer_owned_ipv4_pool</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/alb#customer_owned_ipv4_pool Alb#customer_owned_ipv4_pool}. |
| <code><a href="#@cdktf/provider-aws.alb.AlbConfig.property.desyncMitigationMode">desync_mitigation_mode</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/alb#desync_mitigation_mode Alb#desync_mitigation_mode}. |
| <code><a href="#@cdktf/provider-aws.alb.AlbConfig.property.dnsRecordClientRoutingPolicy">dns_record_client_routing_policy</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/alb#dns_record_client_routing_policy Alb#dns_record_client_routing_policy}. |
| <code><a href="#@cdktf/provider-aws.alb.AlbConfig.property.dropInvalidHeaderFields">drop_invalid_header_fields</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/alb#drop_invalid_header_fields Alb#drop_invalid_header_fields}. |
| <code><a href="#@cdktf/provider-aws.alb.AlbConfig.property.enableCrossZoneLoadBalancing">enable_cross_zone_load_balancing</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/alb#enable_cross_zone_load_balancing Alb#enable_cross_zone_load_balancing}. |
| <code><a href="#@cdktf/provider-aws.alb.AlbConfig.property.enableDeletionProtection">enable_deletion_protection</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/alb#enable_deletion_protection Alb#enable_deletion_protection}. |
| <code><a href="#@cdktf/provider-aws.alb.AlbConfig.property.enableHttp2">enable_http2</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/alb#enable_http2 Alb#enable_http2}. |
| <code><a href="#@cdktf/provider-aws.alb.AlbConfig.property.enableTlsVersionAndCipherSuiteHeaders">enable_tls_version_and_cipher_suite_headers</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/alb#enable_tls_version_and_cipher_suite_headers Alb#enable_tls_version_and_cipher_suite_headers}. |
| <code><a href="#@cdktf/provider-aws.alb.AlbConfig.property.enableWafFailOpen">enable_waf_fail_open</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/alb#enable_waf_fail_open Alb#enable_waf_fail_open}. |
| <code><a href="#@cdktf/provider-aws.alb.AlbConfig.property.enableXffClientPort">enable_xff_client_port</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/alb#enable_xff_client_port Alb#enable_xff_client_port}. |
| <code><a href="#@cdktf/provider-aws.alb.AlbConfig.property.enableZonalShift">enable_zonal_shift</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/alb#enable_zonal_shift Alb#enable_zonal_shift}. |
| <code><a href="#@cdktf/provider-aws.alb.AlbConfig.property.enforceSecurityGroupInboundRulesOnPrivateLinkTraffic">enforce_security_group_inbound_rules_on_private_link_traffic</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/alb#enforce_security_group_inbound_rules_on_private_link_traffic Alb#enforce_security_group_inbound_rules_on_private_link_traffic}. |
| <code><a href="#@cdktf/provider-aws.alb.AlbConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/alb#id Alb#id}. |
| <code><a href="#@cdktf/provider-aws.alb.AlbConfig.property.idleTimeout">idle_timeout</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/alb#idle_timeout Alb#idle_timeout}. |
| <code><a href="#@cdktf/provider-aws.alb.AlbConfig.property.internal">internal</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/alb#internal Alb#internal}. |
| <code><a href="#@cdktf/provider-aws.alb.AlbConfig.property.ipAddressType">ip_address_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/alb#ip_address_type Alb#ip_address_type}. |
| <code><a href="#@cdktf/provider-aws.alb.AlbConfig.property.ipamPools">ipam_pools</a></code> | <code><a href="#@cdktf/provider-aws.alb.AlbIpamPools">AlbIpamPools</a></code> | ipam_pools block. |
| <code><a href="#@cdktf/provider-aws.alb.AlbConfig.property.loadBalancerType">load_balancer_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/alb#load_balancer_type Alb#load_balancer_type}. |
| <code><a href="#@cdktf/provider-aws.alb.AlbConfig.property.minimumLoadBalancerCapacity">minimum_load_balancer_capacity</a></code> | <code><a href="#@cdktf/provider-aws.alb.AlbMinimumLoadBalancerCapacity">AlbMinimumLoadBalancerCapacity</a></code> | minimum_load_balancer_capacity block. |
| <code><a href="#@cdktf/provider-aws.alb.AlbConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/alb#name Alb#name}. |
| <code><a href="#@cdktf/provider-aws.alb.AlbConfig.property.namePrefix">name_prefix</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/alb#name_prefix Alb#name_prefix}. |
| <code><a href="#@cdktf/provider-aws.alb.AlbConfig.property.preserveHostHeader">preserve_host_header</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/alb#preserve_host_header Alb#preserve_host_header}. |
| <code><a href="#@cdktf/provider-aws.alb.AlbConfig.property.region">region</a></code> | <code>str</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktf/provider-aws.alb.AlbConfig.property.securityGroups">security_groups</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/alb#security_groups Alb#security_groups}. |
| <code><a href="#@cdktf/provider-aws.alb.AlbConfig.property.subnetMapping">subnet_mapping</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.alb.AlbSubnetMapping">AlbSubnetMapping</a>]]</code> | subnet_mapping block. |
| <code><a href="#@cdktf/provider-aws.alb.AlbConfig.property.subnets">subnets</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/alb#subnets Alb#subnets}. |
| <code><a href="#@cdktf/provider-aws.alb.AlbConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/alb#tags Alb#tags}. |
| <code><a href="#@cdktf/provider-aws.alb.AlbConfig.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/alb#tags_all Alb#tags_all}. |
| <code><a href="#@cdktf/provider-aws.alb.AlbConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.alb.AlbTimeouts">AlbTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-aws.alb.AlbConfig.property.xffHeaderProcessingMode">xff_header_processing_mode</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/alb#xff_header_processing_mode Alb#xff_header_processing_mode}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.alb.AlbConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.alb.AlbConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.alb.AlbConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.alb.AlbConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.alb.AlbConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.alb.AlbConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.alb.AlbConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `access_logs`<sup>Optional</sup> <a name="access_logs" id="@cdktf/provider-aws.alb.AlbConfig.property.accessLogs"></a>

```python
access_logs: AlbAccessLogs
```

- *Type:* <a href="#@cdktf/provider-aws.alb.AlbAccessLogs">AlbAccessLogs</a>

access_logs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/alb#access_logs Alb#access_logs}

---

##### `client_keep_alive`<sup>Optional</sup> <a name="client_keep_alive" id="@cdktf/provider-aws.alb.AlbConfig.property.clientKeepAlive"></a>

```python
client_keep_alive: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/alb#client_keep_alive Alb#client_keep_alive}.

---

##### `connection_logs`<sup>Optional</sup> <a name="connection_logs" id="@cdktf/provider-aws.alb.AlbConfig.property.connectionLogs"></a>

```python
connection_logs: AlbConnectionLogs
```

- *Type:* <a href="#@cdktf/provider-aws.alb.AlbConnectionLogs">AlbConnectionLogs</a>

connection_logs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/alb#connection_logs Alb#connection_logs}

---

##### `customer_owned_ipv4_pool`<sup>Optional</sup> <a name="customer_owned_ipv4_pool" id="@cdktf/provider-aws.alb.AlbConfig.property.customerOwnedIpv4Pool"></a>

```python
customer_owned_ipv4_pool: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/alb#customer_owned_ipv4_pool Alb#customer_owned_ipv4_pool}.

---

##### `desync_mitigation_mode`<sup>Optional</sup> <a name="desync_mitigation_mode" id="@cdktf/provider-aws.alb.AlbConfig.property.desyncMitigationMode"></a>

```python
desync_mitigation_mode: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/alb#desync_mitigation_mode Alb#desync_mitigation_mode}.

---

##### `dns_record_client_routing_policy`<sup>Optional</sup> <a name="dns_record_client_routing_policy" id="@cdktf/provider-aws.alb.AlbConfig.property.dnsRecordClientRoutingPolicy"></a>

```python
dns_record_client_routing_policy: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/alb#dns_record_client_routing_policy Alb#dns_record_client_routing_policy}.

---

##### `drop_invalid_header_fields`<sup>Optional</sup> <a name="drop_invalid_header_fields" id="@cdktf/provider-aws.alb.AlbConfig.property.dropInvalidHeaderFields"></a>

```python
drop_invalid_header_fields: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/alb#drop_invalid_header_fields Alb#drop_invalid_header_fields}.

---

##### `enable_cross_zone_load_balancing`<sup>Optional</sup> <a name="enable_cross_zone_load_balancing" id="@cdktf/provider-aws.alb.AlbConfig.property.enableCrossZoneLoadBalancing"></a>

```python
enable_cross_zone_load_balancing: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/alb#enable_cross_zone_load_balancing Alb#enable_cross_zone_load_balancing}.

---

##### `enable_deletion_protection`<sup>Optional</sup> <a name="enable_deletion_protection" id="@cdktf/provider-aws.alb.AlbConfig.property.enableDeletionProtection"></a>

```python
enable_deletion_protection: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/alb#enable_deletion_protection Alb#enable_deletion_protection}.

---

##### `enable_http2`<sup>Optional</sup> <a name="enable_http2" id="@cdktf/provider-aws.alb.AlbConfig.property.enableHttp2"></a>

```python
enable_http2: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/alb#enable_http2 Alb#enable_http2}.

---

##### `enable_tls_version_and_cipher_suite_headers`<sup>Optional</sup> <a name="enable_tls_version_and_cipher_suite_headers" id="@cdktf/provider-aws.alb.AlbConfig.property.enableTlsVersionAndCipherSuiteHeaders"></a>

```python
enable_tls_version_and_cipher_suite_headers: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/alb#enable_tls_version_and_cipher_suite_headers Alb#enable_tls_version_and_cipher_suite_headers}.

---

##### `enable_waf_fail_open`<sup>Optional</sup> <a name="enable_waf_fail_open" id="@cdktf/provider-aws.alb.AlbConfig.property.enableWafFailOpen"></a>

```python
enable_waf_fail_open: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/alb#enable_waf_fail_open Alb#enable_waf_fail_open}.

---

##### `enable_xff_client_port`<sup>Optional</sup> <a name="enable_xff_client_port" id="@cdktf/provider-aws.alb.AlbConfig.property.enableXffClientPort"></a>

```python
enable_xff_client_port: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/alb#enable_xff_client_port Alb#enable_xff_client_port}.

---

##### `enable_zonal_shift`<sup>Optional</sup> <a name="enable_zonal_shift" id="@cdktf/provider-aws.alb.AlbConfig.property.enableZonalShift"></a>

```python
enable_zonal_shift: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/alb#enable_zonal_shift Alb#enable_zonal_shift}.

---

##### `enforce_security_group_inbound_rules_on_private_link_traffic`<sup>Optional</sup> <a name="enforce_security_group_inbound_rules_on_private_link_traffic" id="@cdktf/provider-aws.alb.AlbConfig.property.enforceSecurityGroupInboundRulesOnPrivateLinkTraffic"></a>

```python
enforce_security_group_inbound_rules_on_private_link_traffic: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/alb#enforce_security_group_inbound_rules_on_private_link_traffic Alb#enforce_security_group_inbound_rules_on_private_link_traffic}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.alb.AlbConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/alb#id Alb#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `idle_timeout`<sup>Optional</sup> <a name="idle_timeout" id="@cdktf/provider-aws.alb.AlbConfig.property.idleTimeout"></a>

```python
idle_timeout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/alb#idle_timeout Alb#idle_timeout}.

---

##### `internal`<sup>Optional</sup> <a name="internal" id="@cdktf/provider-aws.alb.AlbConfig.property.internal"></a>

```python
internal: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/alb#internal Alb#internal}.

---

##### `ip_address_type`<sup>Optional</sup> <a name="ip_address_type" id="@cdktf/provider-aws.alb.AlbConfig.property.ipAddressType"></a>

```python
ip_address_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/alb#ip_address_type Alb#ip_address_type}.

---

##### `ipam_pools`<sup>Optional</sup> <a name="ipam_pools" id="@cdktf/provider-aws.alb.AlbConfig.property.ipamPools"></a>

```python
ipam_pools: AlbIpamPools
```

- *Type:* <a href="#@cdktf/provider-aws.alb.AlbIpamPools">AlbIpamPools</a>

ipam_pools block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/alb#ipam_pools Alb#ipam_pools}

---

##### `load_balancer_type`<sup>Optional</sup> <a name="load_balancer_type" id="@cdktf/provider-aws.alb.AlbConfig.property.loadBalancerType"></a>

```python
load_balancer_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/alb#load_balancer_type Alb#load_balancer_type}.

---

##### `minimum_load_balancer_capacity`<sup>Optional</sup> <a name="minimum_load_balancer_capacity" id="@cdktf/provider-aws.alb.AlbConfig.property.minimumLoadBalancerCapacity"></a>

```python
minimum_load_balancer_capacity: AlbMinimumLoadBalancerCapacity
```

- *Type:* <a href="#@cdktf/provider-aws.alb.AlbMinimumLoadBalancerCapacity">AlbMinimumLoadBalancerCapacity</a>

minimum_load_balancer_capacity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/alb#minimum_load_balancer_capacity Alb#minimum_load_balancer_capacity}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-aws.alb.AlbConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/alb#name Alb#name}.

---

##### `name_prefix`<sup>Optional</sup> <a name="name_prefix" id="@cdktf/provider-aws.alb.AlbConfig.property.namePrefix"></a>

```python
name_prefix: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/alb#name_prefix Alb#name_prefix}.

---

##### `preserve_host_header`<sup>Optional</sup> <a name="preserve_host_header" id="@cdktf/provider-aws.alb.AlbConfig.property.preserveHostHeader"></a>

```python
preserve_host_header: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/alb#preserve_host_header Alb#preserve_host_header}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-aws.alb.AlbConfig.property.region"></a>

```python
region: str
```

- *Type:* str

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/alb#region Alb#region}

---

##### `security_groups`<sup>Optional</sup> <a name="security_groups" id="@cdktf/provider-aws.alb.AlbConfig.property.securityGroups"></a>

```python
security_groups: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/alb#security_groups Alb#security_groups}.

---

##### `subnet_mapping`<sup>Optional</sup> <a name="subnet_mapping" id="@cdktf/provider-aws.alb.AlbConfig.property.subnetMapping"></a>

```python
subnet_mapping: typing.Union[IResolvable, typing.List[AlbSubnetMapping]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.alb.AlbSubnetMapping">AlbSubnetMapping</a>]]

subnet_mapping block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/alb#subnet_mapping Alb#subnet_mapping}

---

##### `subnets`<sup>Optional</sup> <a name="subnets" id="@cdktf/provider-aws.alb.AlbConfig.property.subnets"></a>

```python
subnets: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/alb#subnets Alb#subnets}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.alb.AlbConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/alb#tags Alb#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.alb.AlbConfig.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/alb#tags_all Alb#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.alb.AlbConfig.property.timeouts"></a>

```python
timeouts: AlbTimeouts
```

- *Type:* <a href="#@cdktf/provider-aws.alb.AlbTimeouts">AlbTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/alb#timeouts Alb#timeouts}

---

##### `xff_header_processing_mode`<sup>Optional</sup> <a name="xff_header_processing_mode" id="@cdktf/provider-aws.alb.AlbConfig.property.xffHeaderProcessingMode"></a>

```python
xff_header_processing_mode: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/alb#xff_header_processing_mode Alb#xff_header_processing_mode}.

---

### AlbConnectionLogs <a name="AlbConnectionLogs" id="@cdktf/provider-aws.alb.AlbConnectionLogs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.alb.AlbConnectionLogs.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import alb

alb.AlbConnectionLogs(
  bucket: str,
  enabled: typing.Union[bool, IResolvable] = None,
  prefix: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.alb.AlbConnectionLogs.property.bucket">bucket</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/alb#bucket Alb#bucket}. |
| <code><a href="#@cdktf/provider-aws.alb.AlbConnectionLogs.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/alb#enabled Alb#enabled}. |
| <code><a href="#@cdktf/provider-aws.alb.AlbConnectionLogs.property.prefix">prefix</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/alb#prefix Alb#prefix}. |

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-aws.alb.AlbConnectionLogs.property.bucket"></a>

```python
bucket: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/alb#bucket Alb#bucket}.

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-aws.alb.AlbConnectionLogs.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/alb#enabled Alb#enabled}.

---

##### `prefix`<sup>Optional</sup> <a name="prefix" id="@cdktf/provider-aws.alb.AlbConnectionLogs.property.prefix"></a>

```python
prefix: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/alb#prefix Alb#prefix}.

---

### AlbIpamPools <a name="AlbIpamPools" id="@cdktf/provider-aws.alb.AlbIpamPools"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.alb.AlbIpamPools.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import alb

alb.AlbIpamPools(
  ipv4_ipam_pool_id: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.alb.AlbIpamPools.property.ipv4IpamPoolId">ipv4_ipam_pool_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/alb#ipv4_ipam_pool_id Alb#ipv4_ipam_pool_id}. |

---

##### `ipv4_ipam_pool_id`<sup>Required</sup> <a name="ipv4_ipam_pool_id" id="@cdktf/provider-aws.alb.AlbIpamPools.property.ipv4IpamPoolId"></a>

```python
ipv4_ipam_pool_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/alb#ipv4_ipam_pool_id Alb#ipv4_ipam_pool_id}.

---

### AlbMinimumLoadBalancerCapacity <a name="AlbMinimumLoadBalancerCapacity" id="@cdktf/provider-aws.alb.AlbMinimumLoadBalancerCapacity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.alb.AlbMinimumLoadBalancerCapacity.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import alb

alb.AlbMinimumLoadBalancerCapacity(
  capacity_units: typing.Union[int, float]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.alb.AlbMinimumLoadBalancerCapacity.property.capacityUnits">capacity_units</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/alb#capacity_units Alb#capacity_units}. |

---

##### `capacity_units`<sup>Required</sup> <a name="capacity_units" id="@cdktf/provider-aws.alb.AlbMinimumLoadBalancerCapacity.property.capacityUnits"></a>

```python
capacity_units: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/alb#capacity_units Alb#capacity_units}.

---

### AlbSubnetMapping <a name="AlbSubnetMapping" id="@cdktf/provider-aws.alb.AlbSubnetMapping"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.alb.AlbSubnetMapping.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import alb

alb.AlbSubnetMapping(
  subnet_id: str,
  allocation_id: str = None,
  ipv6_address: str = None,
  private_ipv4_address: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.alb.AlbSubnetMapping.property.subnetId">subnet_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/alb#subnet_id Alb#subnet_id}. |
| <code><a href="#@cdktf/provider-aws.alb.AlbSubnetMapping.property.allocationId">allocation_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/alb#allocation_id Alb#allocation_id}. |
| <code><a href="#@cdktf/provider-aws.alb.AlbSubnetMapping.property.ipv6Address">ipv6_address</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/alb#ipv6_address Alb#ipv6_address}. |
| <code><a href="#@cdktf/provider-aws.alb.AlbSubnetMapping.property.privateIpv4Address">private_ipv4_address</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/alb#private_ipv4_address Alb#private_ipv4_address}. |

---

##### `subnet_id`<sup>Required</sup> <a name="subnet_id" id="@cdktf/provider-aws.alb.AlbSubnetMapping.property.subnetId"></a>

```python
subnet_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/alb#subnet_id Alb#subnet_id}.

---

##### `allocation_id`<sup>Optional</sup> <a name="allocation_id" id="@cdktf/provider-aws.alb.AlbSubnetMapping.property.allocationId"></a>

```python
allocation_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/alb#allocation_id Alb#allocation_id}.

---

##### `ipv6_address`<sup>Optional</sup> <a name="ipv6_address" id="@cdktf/provider-aws.alb.AlbSubnetMapping.property.ipv6Address"></a>

```python
ipv6_address: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/alb#ipv6_address Alb#ipv6_address}.

---

##### `private_ipv4_address`<sup>Optional</sup> <a name="private_ipv4_address" id="@cdktf/provider-aws.alb.AlbSubnetMapping.property.privateIpv4Address"></a>

```python
private_ipv4_address: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/alb#private_ipv4_address Alb#private_ipv4_address}.

---

### AlbTimeouts <a name="AlbTimeouts" id="@cdktf/provider-aws.alb.AlbTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.alb.AlbTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import alb

alb.AlbTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.alb.AlbTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/alb#create Alb#create}. |
| <code><a href="#@cdktf/provider-aws.alb.AlbTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/alb#delete Alb#delete}. |
| <code><a href="#@cdktf/provider-aws.alb.AlbTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/alb#update Alb#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.alb.AlbTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/alb#create Alb#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.alb.AlbTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/alb#delete Alb#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.alb.AlbTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/alb#update Alb#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### AlbAccessLogsOutputReference <a name="AlbAccessLogsOutputReference" id="@cdktf/provider-aws.alb.AlbAccessLogsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.alb.AlbAccessLogsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import alb

alb.AlbAccessLogsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.alb.AlbAccessLogsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.alb.AlbAccessLogsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.alb.AlbAccessLogsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.alb.AlbAccessLogsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.alb.AlbAccessLogsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.AlbAccessLogsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.AlbAccessLogsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.AlbAccessLogsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.AlbAccessLogsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.AlbAccessLogsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.AlbAccessLogsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.AlbAccessLogsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.AlbAccessLogsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.AlbAccessLogsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.AlbAccessLogsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.AlbAccessLogsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.alb.AlbAccessLogsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.alb.AlbAccessLogsOutputReference.resetEnabled">reset_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.AlbAccessLogsOutputReference.resetPrefix">reset_prefix</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.alb.AlbAccessLogsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.alb.AlbAccessLogsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.alb.AlbAccessLogsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.alb.AlbAccessLogsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.alb.AlbAccessLogsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.alb.AlbAccessLogsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.alb.AlbAccessLogsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.alb.AlbAccessLogsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.alb.AlbAccessLogsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.alb.AlbAccessLogsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.alb.AlbAccessLogsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.alb.AlbAccessLogsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.alb.AlbAccessLogsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.alb.AlbAccessLogsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.alb.AlbAccessLogsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.alb.AlbAccessLogsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.alb.AlbAccessLogsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.alb.AlbAccessLogsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.alb.AlbAccessLogsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.alb.AlbAccessLogsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.alb.AlbAccessLogsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.alb.AlbAccessLogsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.alb.AlbAccessLogsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.alb.AlbAccessLogsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_enabled` <a name="reset_enabled" id="@cdktf/provider-aws.alb.AlbAccessLogsOutputReference.resetEnabled"></a>

```python
def reset_enabled() -> None
```

##### `reset_prefix` <a name="reset_prefix" id="@cdktf/provider-aws.alb.AlbAccessLogsOutputReference.resetPrefix"></a>

```python
def reset_prefix() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.alb.AlbAccessLogsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.alb.AlbAccessLogsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.AlbAccessLogsOutputReference.property.bucketInput">bucket_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.AlbAccessLogsOutputReference.property.enabledInput">enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.AlbAccessLogsOutputReference.property.prefixInput">prefix_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.AlbAccessLogsOutputReference.property.bucket">bucket</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.AlbAccessLogsOutputReference.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.AlbAccessLogsOutputReference.property.prefix">prefix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.AlbAccessLogsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.alb.AlbAccessLogs">AlbAccessLogs</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.alb.AlbAccessLogsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.alb.AlbAccessLogsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `bucket_input`<sup>Optional</sup> <a name="bucket_input" id="@cdktf/provider-aws.alb.AlbAccessLogsOutputReference.property.bucketInput"></a>

```python
bucket_input: str
```

- *Type:* str

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktf/provider-aws.alb.AlbAccessLogsOutputReference.property.enabledInput"></a>

```python
enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `prefix_input`<sup>Optional</sup> <a name="prefix_input" id="@cdktf/provider-aws.alb.AlbAccessLogsOutputReference.property.prefixInput"></a>

```python
prefix_input: str
```

- *Type:* str

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-aws.alb.AlbAccessLogsOutputReference.property.bucket"></a>

```python
bucket: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-aws.alb.AlbAccessLogsOutputReference.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="@cdktf/provider-aws.alb.AlbAccessLogsOutputReference.property.prefix"></a>

```python
prefix: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.alb.AlbAccessLogsOutputReference.property.internalValue"></a>

```python
internal_value: AlbAccessLogs
```

- *Type:* <a href="#@cdktf/provider-aws.alb.AlbAccessLogs">AlbAccessLogs</a>

---


### AlbConnectionLogsOutputReference <a name="AlbConnectionLogsOutputReference" id="@cdktf/provider-aws.alb.AlbConnectionLogsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.alb.AlbConnectionLogsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import alb

alb.AlbConnectionLogsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.alb.AlbConnectionLogsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.alb.AlbConnectionLogsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.alb.AlbConnectionLogsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.alb.AlbConnectionLogsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.alb.AlbConnectionLogsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.AlbConnectionLogsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.AlbConnectionLogsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.AlbConnectionLogsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.AlbConnectionLogsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.AlbConnectionLogsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.AlbConnectionLogsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.AlbConnectionLogsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.AlbConnectionLogsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.AlbConnectionLogsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.AlbConnectionLogsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.AlbConnectionLogsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.alb.AlbConnectionLogsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.alb.AlbConnectionLogsOutputReference.resetEnabled">reset_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.AlbConnectionLogsOutputReference.resetPrefix">reset_prefix</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.alb.AlbConnectionLogsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.alb.AlbConnectionLogsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.alb.AlbConnectionLogsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.alb.AlbConnectionLogsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.alb.AlbConnectionLogsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.alb.AlbConnectionLogsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.alb.AlbConnectionLogsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.alb.AlbConnectionLogsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.alb.AlbConnectionLogsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.alb.AlbConnectionLogsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.alb.AlbConnectionLogsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.alb.AlbConnectionLogsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.alb.AlbConnectionLogsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.alb.AlbConnectionLogsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.alb.AlbConnectionLogsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.alb.AlbConnectionLogsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.alb.AlbConnectionLogsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.alb.AlbConnectionLogsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.alb.AlbConnectionLogsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.alb.AlbConnectionLogsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.alb.AlbConnectionLogsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.alb.AlbConnectionLogsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.alb.AlbConnectionLogsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.alb.AlbConnectionLogsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_enabled` <a name="reset_enabled" id="@cdktf/provider-aws.alb.AlbConnectionLogsOutputReference.resetEnabled"></a>

```python
def reset_enabled() -> None
```

##### `reset_prefix` <a name="reset_prefix" id="@cdktf/provider-aws.alb.AlbConnectionLogsOutputReference.resetPrefix"></a>

```python
def reset_prefix() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.alb.AlbConnectionLogsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.alb.AlbConnectionLogsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.AlbConnectionLogsOutputReference.property.bucketInput">bucket_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.AlbConnectionLogsOutputReference.property.enabledInput">enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.AlbConnectionLogsOutputReference.property.prefixInput">prefix_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.AlbConnectionLogsOutputReference.property.bucket">bucket</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.AlbConnectionLogsOutputReference.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.AlbConnectionLogsOutputReference.property.prefix">prefix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.AlbConnectionLogsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.alb.AlbConnectionLogs">AlbConnectionLogs</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.alb.AlbConnectionLogsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.alb.AlbConnectionLogsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `bucket_input`<sup>Optional</sup> <a name="bucket_input" id="@cdktf/provider-aws.alb.AlbConnectionLogsOutputReference.property.bucketInput"></a>

```python
bucket_input: str
```

- *Type:* str

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktf/provider-aws.alb.AlbConnectionLogsOutputReference.property.enabledInput"></a>

```python
enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `prefix_input`<sup>Optional</sup> <a name="prefix_input" id="@cdktf/provider-aws.alb.AlbConnectionLogsOutputReference.property.prefixInput"></a>

```python
prefix_input: str
```

- *Type:* str

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-aws.alb.AlbConnectionLogsOutputReference.property.bucket"></a>

```python
bucket: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-aws.alb.AlbConnectionLogsOutputReference.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="@cdktf/provider-aws.alb.AlbConnectionLogsOutputReference.property.prefix"></a>

```python
prefix: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.alb.AlbConnectionLogsOutputReference.property.internalValue"></a>

```python
internal_value: AlbConnectionLogs
```

- *Type:* <a href="#@cdktf/provider-aws.alb.AlbConnectionLogs">AlbConnectionLogs</a>

---


### AlbIpamPoolsOutputReference <a name="AlbIpamPoolsOutputReference" id="@cdktf/provider-aws.alb.AlbIpamPoolsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.alb.AlbIpamPoolsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import alb

alb.AlbIpamPoolsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.alb.AlbIpamPoolsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.alb.AlbIpamPoolsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.alb.AlbIpamPoolsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.alb.AlbIpamPoolsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.alb.AlbIpamPoolsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.AlbIpamPoolsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.AlbIpamPoolsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.AlbIpamPoolsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.AlbIpamPoolsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.AlbIpamPoolsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.AlbIpamPoolsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.AlbIpamPoolsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.AlbIpamPoolsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.AlbIpamPoolsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.AlbIpamPoolsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.AlbIpamPoolsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.alb.AlbIpamPoolsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.alb.AlbIpamPoolsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.alb.AlbIpamPoolsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.alb.AlbIpamPoolsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.alb.AlbIpamPoolsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.alb.AlbIpamPoolsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.alb.AlbIpamPoolsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.alb.AlbIpamPoolsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.alb.AlbIpamPoolsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.alb.AlbIpamPoolsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.alb.AlbIpamPoolsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.alb.AlbIpamPoolsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.alb.AlbIpamPoolsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.alb.AlbIpamPoolsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.alb.AlbIpamPoolsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.alb.AlbIpamPoolsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.alb.AlbIpamPoolsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.alb.AlbIpamPoolsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.alb.AlbIpamPoolsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.alb.AlbIpamPoolsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.alb.AlbIpamPoolsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.alb.AlbIpamPoolsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.alb.AlbIpamPoolsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.alb.AlbIpamPoolsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.alb.AlbIpamPoolsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.alb.AlbIpamPoolsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.alb.AlbIpamPoolsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.AlbIpamPoolsOutputReference.property.ipv4IpamPoolIdInput">ipv4_ipam_pool_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.AlbIpamPoolsOutputReference.property.ipv4IpamPoolId">ipv4_ipam_pool_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.AlbIpamPoolsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.alb.AlbIpamPools">AlbIpamPools</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.alb.AlbIpamPoolsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.alb.AlbIpamPoolsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `ipv4_ipam_pool_id_input`<sup>Optional</sup> <a name="ipv4_ipam_pool_id_input" id="@cdktf/provider-aws.alb.AlbIpamPoolsOutputReference.property.ipv4IpamPoolIdInput"></a>

```python
ipv4_ipam_pool_id_input: str
```

- *Type:* str

---

##### `ipv4_ipam_pool_id`<sup>Required</sup> <a name="ipv4_ipam_pool_id" id="@cdktf/provider-aws.alb.AlbIpamPoolsOutputReference.property.ipv4IpamPoolId"></a>

```python
ipv4_ipam_pool_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.alb.AlbIpamPoolsOutputReference.property.internalValue"></a>

```python
internal_value: AlbIpamPools
```

- *Type:* <a href="#@cdktf/provider-aws.alb.AlbIpamPools">AlbIpamPools</a>

---


### AlbMinimumLoadBalancerCapacityOutputReference <a name="AlbMinimumLoadBalancerCapacityOutputReference" id="@cdktf/provider-aws.alb.AlbMinimumLoadBalancerCapacityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.alb.AlbMinimumLoadBalancerCapacityOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import alb

alb.AlbMinimumLoadBalancerCapacityOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.alb.AlbMinimumLoadBalancerCapacityOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.alb.AlbMinimumLoadBalancerCapacityOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.alb.AlbMinimumLoadBalancerCapacityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.alb.AlbMinimumLoadBalancerCapacityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.alb.AlbMinimumLoadBalancerCapacityOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.AlbMinimumLoadBalancerCapacityOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.AlbMinimumLoadBalancerCapacityOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.AlbMinimumLoadBalancerCapacityOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.AlbMinimumLoadBalancerCapacityOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.AlbMinimumLoadBalancerCapacityOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.AlbMinimumLoadBalancerCapacityOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.AlbMinimumLoadBalancerCapacityOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.AlbMinimumLoadBalancerCapacityOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.AlbMinimumLoadBalancerCapacityOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.AlbMinimumLoadBalancerCapacityOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.AlbMinimumLoadBalancerCapacityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.alb.AlbMinimumLoadBalancerCapacityOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.alb.AlbMinimumLoadBalancerCapacityOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.alb.AlbMinimumLoadBalancerCapacityOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.alb.AlbMinimumLoadBalancerCapacityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.alb.AlbMinimumLoadBalancerCapacityOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.alb.AlbMinimumLoadBalancerCapacityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.alb.AlbMinimumLoadBalancerCapacityOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.alb.AlbMinimumLoadBalancerCapacityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.alb.AlbMinimumLoadBalancerCapacityOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.alb.AlbMinimumLoadBalancerCapacityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.alb.AlbMinimumLoadBalancerCapacityOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.alb.AlbMinimumLoadBalancerCapacityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.alb.AlbMinimumLoadBalancerCapacityOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.alb.AlbMinimumLoadBalancerCapacityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.alb.AlbMinimumLoadBalancerCapacityOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.alb.AlbMinimumLoadBalancerCapacityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.alb.AlbMinimumLoadBalancerCapacityOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.alb.AlbMinimumLoadBalancerCapacityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.alb.AlbMinimumLoadBalancerCapacityOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.alb.AlbMinimumLoadBalancerCapacityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.alb.AlbMinimumLoadBalancerCapacityOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.alb.AlbMinimumLoadBalancerCapacityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.alb.AlbMinimumLoadBalancerCapacityOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.alb.AlbMinimumLoadBalancerCapacityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.alb.AlbMinimumLoadBalancerCapacityOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.alb.AlbMinimumLoadBalancerCapacityOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.alb.AlbMinimumLoadBalancerCapacityOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.AlbMinimumLoadBalancerCapacityOutputReference.property.capacityUnitsInput">capacity_units_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.AlbMinimumLoadBalancerCapacityOutputReference.property.capacityUnits">capacity_units</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.AlbMinimumLoadBalancerCapacityOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.alb.AlbMinimumLoadBalancerCapacity">AlbMinimumLoadBalancerCapacity</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.alb.AlbMinimumLoadBalancerCapacityOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.alb.AlbMinimumLoadBalancerCapacityOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `capacity_units_input`<sup>Optional</sup> <a name="capacity_units_input" id="@cdktf/provider-aws.alb.AlbMinimumLoadBalancerCapacityOutputReference.property.capacityUnitsInput"></a>

```python
capacity_units_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `capacity_units`<sup>Required</sup> <a name="capacity_units" id="@cdktf/provider-aws.alb.AlbMinimumLoadBalancerCapacityOutputReference.property.capacityUnits"></a>

```python
capacity_units: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.alb.AlbMinimumLoadBalancerCapacityOutputReference.property.internalValue"></a>

```python
internal_value: AlbMinimumLoadBalancerCapacity
```

- *Type:* <a href="#@cdktf/provider-aws.alb.AlbMinimumLoadBalancerCapacity">AlbMinimumLoadBalancerCapacity</a>

---


### AlbSubnetMappingList <a name="AlbSubnetMappingList" id="@cdktf/provider-aws.alb.AlbSubnetMappingList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.alb.AlbSubnetMappingList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import alb

alb.AlbSubnetMappingList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.alb.AlbSubnetMappingList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.alb.AlbSubnetMappingList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.alb.AlbSubnetMappingList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.alb.AlbSubnetMappingList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.alb.AlbSubnetMappingList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.alb.AlbSubnetMappingList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.alb.AlbSubnetMappingList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.alb.AlbSubnetMappingList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.AlbSubnetMappingList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.alb.AlbSubnetMappingList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.alb.AlbSubnetMappingList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.alb.AlbSubnetMappingList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.alb.AlbSubnetMappingList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.alb.AlbSubnetMappingList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.alb.AlbSubnetMappingList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.alb.AlbSubnetMappingList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.alb.AlbSubnetMappingList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.alb.AlbSubnetMappingList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> AlbSubnetMappingOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.alb.AlbSubnetMappingList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.alb.AlbSubnetMappingList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.alb.AlbSubnetMappingList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.AlbSubnetMappingList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.alb.AlbSubnetMapping">AlbSubnetMapping</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.alb.AlbSubnetMappingList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.alb.AlbSubnetMappingList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.alb.AlbSubnetMappingList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[AlbSubnetMapping]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.alb.AlbSubnetMapping">AlbSubnetMapping</a>]]

---


### AlbSubnetMappingOutputReference <a name="AlbSubnetMappingOutputReference" id="@cdktf/provider-aws.alb.AlbSubnetMappingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.alb.AlbSubnetMappingOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import alb

alb.AlbSubnetMappingOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.alb.AlbSubnetMappingOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.alb.AlbSubnetMappingOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.alb.AlbSubnetMappingOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.alb.AlbSubnetMappingOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.alb.AlbSubnetMappingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.alb.AlbSubnetMappingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.alb.AlbSubnetMappingOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.alb.AlbSubnetMappingOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.alb.AlbSubnetMappingOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.AlbSubnetMappingOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.AlbSubnetMappingOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.AlbSubnetMappingOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.AlbSubnetMappingOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.AlbSubnetMappingOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.AlbSubnetMappingOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.AlbSubnetMappingOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.AlbSubnetMappingOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.AlbSubnetMappingOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.AlbSubnetMappingOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.AlbSubnetMappingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.alb.AlbSubnetMappingOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.alb.AlbSubnetMappingOutputReference.resetAllocationId">reset_allocation_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.AlbSubnetMappingOutputReference.resetIpv6Address">reset_ipv6_address</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.AlbSubnetMappingOutputReference.resetPrivateIpv4Address">reset_private_ipv4_address</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.alb.AlbSubnetMappingOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.alb.AlbSubnetMappingOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.alb.AlbSubnetMappingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.alb.AlbSubnetMappingOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.alb.AlbSubnetMappingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.alb.AlbSubnetMappingOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.alb.AlbSubnetMappingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.alb.AlbSubnetMappingOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.alb.AlbSubnetMappingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.alb.AlbSubnetMappingOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.alb.AlbSubnetMappingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.alb.AlbSubnetMappingOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.alb.AlbSubnetMappingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.alb.AlbSubnetMappingOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.alb.AlbSubnetMappingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.alb.AlbSubnetMappingOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.alb.AlbSubnetMappingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.alb.AlbSubnetMappingOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.alb.AlbSubnetMappingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.alb.AlbSubnetMappingOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.alb.AlbSubnetMappingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.alb.AlbSubnetMappingOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.alb.AlbSubnetMappingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.alb.AlbSubnetMappingOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_allocation_id` <a name="reset_allocation_id" id="@cdktf/provider-aws.alb.AlbSubnetMappingOutputReference.resetAllocationId"></a>

```python
def reset_allocation_id() -> None
```

##### `reset_ipv6_address` <a name="reset_ipv6_address" id="@cdktf/provider-aws.alb.AlbSubnetMappingOutputReference.resetIpv6Address"></a>

```python
def reset_ipv6_address() -> None
```

##### `reset_private_ipv4_address` <a name="reset_private_ipv4_address" id="@cdktf/provider-aws.alb.AlbSubnetMappingOutputReference.resetPrivateIpv4Address"></a>

```python
def reset_private_ipv4_address() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.alb.AlbSubnetMappingOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.alb.AlbSubnetMappingOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.AlbSubnetMappingOutputReference.property.outpostId">outpost_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.AlbSubnetMappingOutputReference.property.allocationIdInput">allocation_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.AlbSubnetMappingOutputReference.property.ipv6AddressInput">ipv6_address_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.AlbSubnetMappingOutputReference.property.privateIpv4AddressInput">private_ipv4_address_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.AlbSubnetMappingOutputReference.property.subnetIdInput">subnet_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.AlbSubnetMappingOutputReference.property.allocationId">allocation_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.AlbSubnetMappingOutputReference.property.ipv6Address">ipv6_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.AlbSubnetMappingOutputReference.property.privateIpv4Address">private_ipv4_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.AlbSubnetMappingOutputReference.property.subnetId">subnet_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.AlbSubnetMappingOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.alb.AlbSubnetMapping">AlbSubnetMapping</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.alb.AlbSubnetMappingOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.alb.AlbSubnetMappingOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `outpost_id`<sup>Required</sup> <a name="outpost_id" id="@cdktf/provider-aws.alb.AlbSubnetMappingOutputReference.property.outpostId"></a>

```python
outpost_id: str
```

- *Type:* str

---

##### `allocation_id_input`<sup>Optional</sup> <a name="allocation_id_input" id="@cdktf/provider-aws.alb.AlbSubnetMappingOutputReference.property.allocationIdInput"></a>

```python
allocation_id_input: str
```

- *Type:* str

---

##### `ipv6_address_input`<sup>Optional</sup> <a name="ipv6_address_input" id="@cdktf/provider-aws.alb.AlbSubnetMappingOutputReference.property.ipv6AddressInput"></a>

```python
ipv6_address_input: str
```

- *Type:* str

---

##### `private_ipv4_address_input`<sup>Optional</sup> <a name="private_ipv4_address_input" id="@cdktf/provider-aws.alb.AlbSubnetMappingOutputReference.property.privateIpv4AddressInput"></a>

```python
private_ipv4_address_input: str
```

- *Type:* str

---

##### `subnet_id_input`<sup>Optional</sup> <a name="subnet_id_input" id="@cdktf/provider-aws.alb.AlbSubnetMappingOutputReference.property.subnetIdInput"></a>

```python
subnet_id_input: str
```

- *Type:* str

---

##### `allocation_id`<sup>Required</sup> <a name="allocation_id" id="@cdktf/provider-aws.alb.AlbSubnetMappingOutputReference.property.allocationId"></a>

```python
allocation_id: str
```

- *Type:* str

---

##### `ipv6_address`<sup>Required</sup> <a name="ipv6_address" id="@cdktf/provider-aws.alb.AlbSubnetMappingOutputReference.property.ipv6Address"></a>

```python
ipv6_address: str
```

- *Type:* str

---

##### `private_ipv4_address`<sup>Required</sup> <a name="private_ipv4_address" id="@cdktf/provider-aws.alb.AlbSubnetMappingOutputReference.property.privateIpv4Address"></a>

```python
private_ipv4_address: str
```

- *Type:* str

---

##### `subnet_id`<sup>Required</sup> <a name="subnet_id" id="@cdktf/provider-aws.alb.AlbSubnetMappingOutputReference.property.subnetId"></a>

```python
subnet_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.alb.AlbSubnetMappingOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, AlbSubnetMapping]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.alb.AlbSubnetMapping">AlbSubnetMapping</a>]

---


### AlbTimeoutsOutputReference <a name="AlbTimeoutsOutputReference" id="@cdktf/provider-aws.alb.AlbTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.alb.AlbTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import alb

alb.AlbTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.alb.AlbTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.alb.AlbTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.alb.AlbTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.alb.AlbTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.alb.AlbTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.AlbTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.AlbTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.AlbTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.AlbTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.AlbTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.AlbTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.AlbTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.AlbTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.AlbTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.AlbTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.AlbTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.alb.AlbTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.alb.AlbTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.AlbTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.AlbTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.alb.AlbTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.alb.AlbTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.alb.AlbTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.alb.AlbTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.alb.AlbTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.alb.AlbTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.alb.AlbTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.alb.AlbTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.alb.AlbTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.alb.AlbTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.alb.AlbTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.alb.AlbTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.alb.AlbTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.alb.AlbTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.alb.AlbTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.alb.AlbTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.alb.AlbTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.alb.AlbTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.alb.AlbTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.alb.AlbTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.alb.AlbTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.alb.AlbTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.alb.AlbTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.alb.AlbTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-aws.alb.AlbTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-aws.alb.AlbTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-aws.alb.AlbTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.alb.AlbTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.alb.AlbTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.AlbTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.AlbTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.AlbTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.AlbTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.AlbTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.AlbTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.alb.AlbTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.alb.AlbTimeouts">AlbTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.alb.AlbTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.alb.AlbTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-aws.alb.AlbTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-aws.alb.AlbTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-aws.alb.AlbTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.alb.AlbTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.alb.AlbTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-aws.alb.AlbTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.alb.AlbTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, AlbTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.alb.AlbTimeouts">AlbTimeouts</a>]

---



