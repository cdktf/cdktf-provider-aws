# `albTargetGroup` Submodule <a name="`albTargetGroup` Submodule" id="@cdktf/provider-aws.albTargetGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AlbTargetGroup <a name="AlbTargetGroup" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/alb_target_group aws_alb_target_group}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import alb_target_group

albTargetGroup.AlbTargetGroup(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  connection_termination: typing.Union[bool, IResolvable] = None,
  deregistration_delay: str = None,
  health_check: AlbTargetGroupHealthCheck = None,
  id: str = None,
  ip_address_type: str = None,
  lambda_multi_value_headers_enabled: typing.Union[bool, IResolvable] = None,
  load_balancing_algorithm_type: str = None,
  load_balancing_anomaly_mitigation: str = None,
  load_balancing_cross_zone_enabled: str = None,
  name: str = None,
  name_prefix: str = None,
  port: typing.Union[int, float] = None,
  preserve_client_ip: str = None,
  protocol: str = None,
  protocol_version: str = None,
  proxy_protocol_v2: typing.Union[bool, IResolvable] = None,
  region: str = None,
  slow_start: typing.Union[int, float] = None,
  stickiness: AlbTargetGroupStickiness = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None,
  target_failover: typing.Union[IResolvable, typing.List[AlbTargetGroupTargetFailover]] = None,
  target_group_health: AlbTargetGroupTargetGroupHealth = None,
  target_health_state: typing.Union[IResolvable, typing.List[AlbTargetGroupTargetHealthState]] = None,
  target_type: str = None,
  vpc_id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.Initializer.parameter.connectionTermination">connection_termination</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/alb_target_group#connection_termination AlbTargetGroup#connection_termination}. |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.Initializer.parameter.deregistrationDelay">deregistration_delay</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/alb_target_group#deregistration_delay AlbTargetGroup#deregistration_delay}. |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.Initializer.parameter.healthCheck">health_check</a></code> | <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheck">AlbTargetGroupHealthCheck</a></code> | health_check block. |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/alb_target_group#id AlbTargetGroup#id}. |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.Initializer.parameter.ipAddressType">ip_address_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/alb_target_group#ip_address_type AlbTargetGroup#ip_address_type}. |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.Initializer.parameter.lambdaMultiValueHeadersEnabled">lambda_multi_value_headers_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/alb_target_group#lambda_multi_value_headers_enabled AlbTargetGroup#lambda_multi_value_headers_enabled}. |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.Initializer.parameter.loadBalancingAlgorithmType">load_balancing_algorithm_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/alb_target_group#load_balancing_algorithm_type AlbTargetGroup#load_balancing_algorithm_type}. |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.Initializer.parameter.loadBalancingAnomalyMitigation">load_balancing_anomaly_mitigation</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/alb_target_group#load_balancing_anomaly_mitigation AlbTargetGroup#load_balancing_anomaly_mitigation}. |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.Initializer.parameter.loadBalancingCrossZoneEnabled">load_balancing_cross_zone_enabled</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/alb_target_group#load_balancing_cross_zone_enabled AlbTargetGroup#load_balancing_cross_zone_enabled}. |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/alb_target_group#name AlbTargetGroup#name}. |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.Initializer.parameter.namePrefix">name_prefix</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/alb_target_group#name_prefix AlbTargetGroup#name_prefix}. |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.Initializer.parameter.port">port</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/alb_target_group#port AlbTargetGroup#port}. |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.Initializer.parameter.preserveClientIp">preserve_client_ip</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/alb_target_group#preserve_client_ip AlbTargetGroup#preserve_client_ip}. |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.Initializer.parameter.protocol">protocol</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/alb_target_group#protocol AlbTargetGroup#protocol}. |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.Initializer.parameter.protocolVersion">protocol_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/alb_target_group#protocol_version AlbTargetGroup#protocol_version}. |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.Initializer.parameter.proxyProtocolV2">proxy_protocol_v2</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/alb_target_group#proxy_protocol_v2 AlbTargetGroup#proxy_protocol_v2}. |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.Initializer.parameter.region">region</a></code> | <code>str</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.Initializer.parameter.slowStart">slow_start</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/alb_target_group#slow_start AlbTargetGroup#slow_start}. |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.Initializer.parameter.stickiness">stickiness</a></code> | <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupStickiness">AlbTargetGroupStickiness</a></code> | stickiness block. |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/alb_target_group#tags AlbTargetGroup#tags}. |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.Initializer.parameter.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/alb_target_group#tags_all AlbTargetGroup#tags_all}. |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.Initializer.parameter.targetFailover">target_failover</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetFailover">AlbTargetGroupTargetFailover</a>]]</code> | target_failover block. |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.Initializer.parameter.targetGroupHealth">target_group_health</a></code> | <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetGroupHealth">AlbTargetGroupTargetGroupHealth</a></code> | target_group_health block. |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.Initializer.parameter.targetHealthState">target_health_state</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetHealthState">AlbTargetGroupTargetHealthState</a>]]</code> | target_health_state block. |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.Initializer.parameter.targetType">target_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/alb_target_group#target_type AlbTargetGroup#target_type}. |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.Initializer.parameter.vpcId">vpc_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/alb_target_group#vpc_id AlbTargetGroup#vpc_id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `connection_termination`<sup>Optional</sup> <a name="connection_termination" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.Initializer.parameter.connectionTermination"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/alb_target_group#connection_termination AlbTargetGroup#connection_termination}.

---

##### `deregistration_delay`<sup>Optional</sup> <a name="deregistration_delay" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.Initializer.parameter.deregistrationDelay"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/alb_target_group#deregistration_delay AlbTargetGroup#deregistration_delay}.

---

##### `health_check`<sup>Optional</sup> <a name="health_check" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.Initializer.parameter.healthCheck"></a>

- *Type:* <a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheck">AlbTargetGroupHealthCheck</a>

health_check block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/alb_target_group#health_check AlbTargetGroup#health_check}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/alb_target_group#id AlbTargetGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ip_address_type`<sup>Optional</sup> <a name="ip_address_type" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.Initializer.parameter.ipAddressType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/alb_target_group#ip_address_type AlbTargetGroup#ip_address_type}.

---

##### `lambda_multi_value_headers_enabled`<sup>Optional</sup> <a name="lambda_multi_value_headers_enabled" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.Initializer.parameter.lambdaMultiValueHeadersEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/alb_target_group#lambda_multi_value_headers_enabled AlbTargetGroup#lambda_multi_value_headers_enabled}.

---

##### `load_balancing_algorithm_type`<sup>Optional</sup> <a name="load_balancing_algorithm_type" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.Initializer.parameter.loadBalancingAlgorithmType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/alb_target_group#load_balancing_algorithm_type AlbTargetGroup#load_balancing_algorithm_type}.

---

##### `load_balancing_anomaly_mitigation`<sup>Optional</sup> <a name="load_balancing_anomaly_mitigation" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.Initializer.parameter.loadBalancingAnomalyMitigation"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/alb_target_group#load_balancing_anomaly_mitigation AlbTargetGroup#load_balancing_anomaly_mitigation}.

---

##### `load_balancing_cross_zone_enabled`<sup>Optional</sup> <a name="load_balancing_cross_zone_enabled" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.Initializer.parameter.loadBalancingCrossZoneEnabled"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/alb_target_group#load_balancing_cross_zone_enabled AlbTargetGroup#load_balancing_cross_zone_enabled}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/alb_target_group#name AlbTargetGroup#name}.

---

##### `name_prefix`<sup>Optional</sup> <a name="name_prefix" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.Initializer.parameter.namePrefix"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/alb_target_group#name_prefix AlbTargetGroup#name_prefix}.

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.Initializer.parameter.port"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/alb_target_group#port AlbTargetGroup#port}.

---

##### `preserve_client_ip`<sup>Optional</sup> <a name="preserve_client_ip" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.Initializer.parameter.preserveClientIp"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/alb_target_group#preserve_client_ip AlbTargetGroup#preserve_client_ip}.

---

##### `protocol`<sup>Optional</sup> <a name="protocol" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.Initializer.parameter.protocol"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/alb_target_group#protocol AlbTargetGroup#protocol}.

---

##### `protocol_version`<sup>Optional</sup> <a name="protocol_version" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.Initializer.parameter.protocolVersion"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/alb_target_group#protocol_version AlbTargetGroup#protocol_version}.

---

##### `proxy_protocol_v2`<sup>Optional</sup> <a name="proxy_protocol_v2" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.Initializer.parameter.proxyProtocolV2"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/alb_target_group#proxy_protocol_v2 AlbTargetGroup#proxy_protocol_v2}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.Initializer.parameter.region"></a>

- *Type:* str

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/alb_target_group#region AlbTargetGroup#region}

---

##### `slow_start`<sup>Optional</sup> <a name="slow_start" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.Initializer.parameter.slowStart"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/alb_target_group#slow_start AlbTargetGroup#slow_start}.

---

##### `stickiness`<sup>Optional</sup> <a name="stickiness" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.Initializer.parameter.stickiness"></a>

- *Type:* <a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupStickiness">AlbTargetGroupStickiness</a>

stickiness block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/alb_target_group#stickiness AlbTargetGroup#stickiness}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/alb_target_group#tags AlbTargetGroup#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.Initializer.parameter.tagsAll"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/alb_target_group#tags_all AlbTargetGroup#tags_all}.

---

##### `target_failover`<sup>Optional</sup> <a name="target_failover" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.Initializer.parameter.targetFailover"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetFailover">AlbTargetGroupTargetFailover</a>]]

target_failover block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/alb_target_group#target_failover AlbTargetGroup#target_failover}

---

##### `target_group_health`<sup>Optional</sup> <a name="target_group_health" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.Initializer.parameter.targetGroupHealth"></a>

- *Type:* <a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetGroupHealth">AlbTargetGroupTargetGroupHealth</a>

target_group_health block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/alb_target_group#target_group_health AlbTargetGroup#target_group_health}

---

##### `target_health_state`<sup>Optional</sup> <a name="target_health_state" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.Initializer.parameter.targetHealthState"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetHealthState">AlbTargetGroupTargetHealthState</a>]]

target_health_state block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/alb_target_group#target_health_state AlbTargetGroup#target_health_state}

---

##### `target_type`<sup>Optional</sup> <a name="target_type" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.Initializer.parameter.targetType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/alb_target_group#target_type AlbTargetGroup#target_type}.

---

##### `vpc_id`<sup>Optional</sup> <a name="vpc_id" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.Initializer.parameter.vpcId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/alb_target_group#vpc_id AlbTargetGroup#vpc_id}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.putHealthCheck">put_health_check</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.putStickiness">put_stickiness</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.putTargetFailover">put_target_failover</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.putTargetGroupHealth">put_target_group_health</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.putTargetHealthState">put_target_health_state</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.resetConnectionTermination">reset_connection_termination</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.resetDeregistrationDelay">reset_deregistration_delay</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.resetHealthCheck">reset_health_check</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.resetIpAddressType">reset_ip_address_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.resetLambdaMultiValueHeadersEnabled">reset_lambda_multi_value_headers_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.resetLoadBalancingAlgorithmType">reset_load_balancing_algorithm_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.resetLoadBalancingAnomalyMitigation">reset_load_balancing_anomaly_mitigation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.resetLoadBalancingCrossZoneEnabled">reset_load_balancing_cross_zone_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.resetNamePrefix">reset_name_prefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.resetPort">reset_port</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.resetPreserveClientIp">reset_preserve_client_ip</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.resetProtocol">reset_protocol</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.resetProtocolVersion">reset_protocol_version</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.resetProxyProtocolV2">reset_proxy_protocol_v2</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.resetRegion">reset_region</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.resetSlowStart">reset_slow_start</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.resetStickiness">reset_stickiness</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.resetTagsAll">reset_tags_all</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.resetTargetFailover">reset_target_failover</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.resetTargetGroupHealth">reset_target_group_health</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.resetTargetHealthState">reset_target_health_state</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.resetTargetType">reset_target_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.resetVpcId">reset_vpc_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_health_check` <a name="put_health_check" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.putHealthCheck"></a>

```python
def put_health_check(
  enabled: typing.Union[bool, IResolvable] = None,
  healthy_threshold: typing.Union[int, float] = None,
  interval: typing.Union[int, float] = None,
  matcher: str = None,
  path: str = None,
  port: str = None,
  protocol: str = None,
  timeout: typing.Union[int, float] = None,
  unhealthy_threshold: typing.Union[int, float] = None
) -> None
```

###### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.putHealthCheck.parameter.enabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/alb_target_group#enabled AlbTargetGroup#enabled}.

---

###### `healthy_threshold`<sup>Optional</sup> <a name="healthy_threshold" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.putHealthCheck.parameter.healthyThreshold"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/alb_target_group#healthy_threshold AlbTargetGroup#healthy_threshold}.

---

###### `interval`<sup>Optional</sup> <a name="interval" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.putHealthCheck.parameter.interval"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/alb_target_group#interval AlbTargetGroup#interval}.

---

###### `matcher`<sup>Optional</sup> <a name="matcher" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.putHealthCheck.parameter.matcher"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/alb_target_group#matcher AlbTargetGroup#matcher}.

---

###### `path`<sup>Optional</sup> <a name="path" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.putHealthCheck.parameter.path"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/alb_target_group#path AlbTargetGroup#path}.

---

###### `port`<sup>Optional</sup> <a name="port" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.putHealthCheck.parameter.port"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/alb_target_group#port AlbTargetGroup#port}.

---

###### `protocol`<sup>Optional</sup> <a name="protocol" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.putHealthCheck.parameter.protocol"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/alb_target_group#protocol AlbTargetGroup#protocol}.

---

###### `timeout`<sup>Optional</sup> <a name="timeout" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.putHealthCheck.parameter.timeout"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/alb_target_group#timeout AlbTargetGroup#timeout}.

---

###### `unhealthy_threshold`<sup>Optional</sup> <a name="unhealthy_threshold" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.putHealthCheck.parameter.unhealthyThreshold"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/alb_target_group#unhealthy_threshold AlbTargetGroup#unhealthy_threshold}.

---

##### `put_stickiness` <a name="put_stickiness" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.putStickiness"></a>

```python
def put_stickiness(
  type: str,
  cookie_duration: typing.Union[int, float] = None,
  cookie_name: str = None,
  enabled: typing.Union[bool, IResolvable] = None
) -> None
```

###### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.putStickiness.parameter.type"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/alb_target_group#type AlbTargetGroup#type}.

---

###### `cookie_duration`<sup>Optional</sup> <a name="cookie_duration" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.putStickiness.parameter.cookieDuration"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/alb_target_group#cookie_duration AlbTargetGroup#cookie_duration}.

---

###### `cookie_name`<sup>Optional</sup> <a name="cookie_name" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.putStickiness.parameter.cookieName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/alb_target_group#cookie_name AlbTargetGroup#cookie_name}.

---

###### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.putStickiness.parameter.enabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/alb_target_group#enabled AlbTargetGroup#enabled}.

---

##### `put_target_failover` <a name="put_target_failover" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.putTargetFailover"></a>

```python
def put_target_failover(
  value: typing.Union[IResolvable, typing.List[AlbTargetGroupTargetFailover]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.putTargetFailover.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetFailover">AlbTargetGroupTargetFailover</a>]]

---

##### `put_target_group_health` <a name="put_target_group_health" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.putTargetGroupHealth"></a>

```python
def put_target_group_health(
  dns_failover: AlbTargetGroupTargetGroupHealthDnsFailover = None,
  unhealthy_state_routing: AlbTargetGroupTargetGroupHealthUnhealthyStateRouting = None
) -> None
```

###### `dns_failover`<sup>Optional</sup> <a name="dns_failover" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.putTargetGroupHealth.parameter.dnsFailover"></a>

- *Type:* <a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetGroupHealthDnsFailover">AlbTargetGroupTargetGroupHealthDnsFailover</a>

dns_failover block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/alb_target_group#dns_failover AlbTargetGroup#dns_failover}

---

###### `unhealthy_state_routing`<sup>Optional</sup> <a name="unhealthy_state_routing" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.putTargetGroupHealth.parameter.unhealthyStateRouting"></a>

- *Type:* <a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetGroupHealthUnhealthyStateRouting">AlbTargetGroupTargetGroupHealthUnhealthyStateRouting</a>

unhealthy_state_routing block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/alb_target_group#unhealthy_state_routing AlbTargetGroup#unhealthy_state_routing}

---

##### `put_target_health_state` <a name="put_target_health_state" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.putTargetHealthState"></a>

```python
def put_target_health_state(
  value: typing.Union[IResolvable, typing.List[AlbTargetGroupTargetHealthState]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.putTargetHealthState.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetHealthState">AlbTargetGroupTargetHealthState</a>]]

---

##### `reset_connection_termination` <a name="reset_connection_termination" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.resetConnectionTermination"></a>

```python
def reset_connection_termination() -> None
```

##### `reset_deregistration_delay` <a name="reset_deregistration_delay" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.resetDeregistrationDelay"></a>

```python
def reset_deregistration_delay() -> None
```

##### `reset_health_check` <a name="reset_health_check" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.resetHealthCheck"></a>

```python
def reset_health_check() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_ip_address_type` <a name="reset_ip_address_type" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.resetIpAddressType"></a>

```python
def reset_ip_address_type() -> None
```

##### `reset_lambda_multi_value_headers_enabled` <a name="reset_lambda_multi_value_headers_enabled" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.resetLambdaMultiValueHeadersEnabled"></a>

```python
def reset_lambda_multi_value_headers_enabled() -> None
```

##### `reset_load_balancing_algorithm_type` <a name="reset_load_balancing_algorithm_type" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.resetLoadBalancingAlgorithmType"></a>

```python
def reset_load_balancing_algorithm_type() -> None
```

##### `reset_load_balancing_anomaly_mitigation` <a name="reset_load_balancing_anomaly_mitigation" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.resetLoadBalancingAnomalyMitigation"></a>

```python
def reset_load_balancing_anomaly_mitigation() -> None
```

##### `reset_load_balancing_cross_zone_enabled` <a name="reset_load_balancing_cross_zone_enabled" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.resetLoadBalancingCrossZoneEnabled"></a>

```python
def reset_load_balancing_cross_zone_enabled() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_name_prefix` <a name="reset_name_prefix" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.resetNamePrefix"></a>

```python
def reset_name_prefix() -> None
```

##### `reset_port` <a name="reset_port" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.resetPort"></a>

```python
def reset_port() -> None
```

##### `reset_preserve_client_ip` <a name="reset_preserve_client_ip" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.resetPreserveClientIp"></a>

```python
def reset_preserve_client_ip() -> None
```

##### `reset_protocol` <a name="reset_protocol" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.resetProtocol"></a>

```python
def reset_protocol() -> None
```

##### `reset_protocol_version` <a name="reset_protocol_version" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.resetProtocolVersion"></a>

```python
def reset_protocol_version() -> None
```

##### `reset_proxy_protocol_v2` <a name="reset_proxy_protocol_v2" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.resetProxyProtocolV2"></a>

```python
def reset_proxy_protocol_v2() -> None
```

##### `reset_region` <a name="reset_region" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.resetRegion"></a>

```python
def reset_region() -> None
```

##### `reset_slow_start` <a name="reset_slow_start" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.resetSlowStart"></a>

```python
def reset_slow_start() -> None
```

##### `reset_stickiness` <a name="reset_stickiness" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.resetStickiness"></a>

```python
def reset_stickiness() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_tags_all` <a name="reset_tags_all" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.resetTagsAll"></a>

```python
def reset_tags_all() -> None
```

##### `reset_target_failover` <a name="reset_target_failover" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.resetTargetFailover"></a>

```python
def reset_target_failover() -> None
```

##### `reset_target_group_health` <a name="reset_target_group_health" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.resetTargetGroupHealth"></a>

```python
def reset_target_group_health() -> None
```

##### `reset_target_health_state` <a name="reset_target_health_state" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.resetTargetHealthState"></a>

```python
def reset_target_health_state() -> None
```

##### `reset_target_type` <a name="reset_target_type" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.resetTargetType"></a>

```python
def reset_target_type() -> None
```

##### `reset_vpc_id` <a name="reset_vpc_id" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.resetVpcId"></a>

```python
def reset_vpc_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a AlbTargetGroup resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import alb_target_group

albTargetGroup.AlbTargetGroup.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import alb_target_group

albTargetGroup.AlbTargetGroup.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import alb_target_group

albTargetGroup.AlbTargetGroup.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_aws import alb_target_group

albTargetGroup.AlbTargetGroup.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a AlbTargetGroup resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the AlbTargetGroup to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing AlbTargetGroup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/alb_target_group#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the AlbTargetGroup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.arnSuffix">arn_suffix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.healthCheck">health_check</a></code> | <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheckOutputReference">AlbTargetGroupHealthCheckOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.loadBalancerArns">load_balancer_arns</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.stickiness">stickiness</a></code> | <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupStickinessOutputReference">AlbTargetGroupStickinessOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.targetFailover">target_failover</a></code> | <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetFailoverList">AlbTargetGroupTargetFailoverList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.targetGroupHealth">target_group_health</a></code> | <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetGroupHealthOutputReference">AlbTargetGroupTargetGroupHealthOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.targetHealthState">target_health_state</a></code> | <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetHealthStateList">AlbTargetGroupTargetHealthStateList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.connectionTerminationInput">connection_termination_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.deregistrationDelayInput">deregistration_delay_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.healthCheckInput">health_check_input</a></code> | <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheck">AlbTargetGroupHealthCheck</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.ipAddressTypeInput">ip_address_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.lambdaMultiValueHeadersEnabledInput">lambda_multi_value_headers_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.loadBalancingAlgorithmTypeInput">load_balancing_algorithm_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.loadBalancingAnomalyMitigationInput">load_balancing_anomaly_mitigation_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.loadBalancingCrossZoneEnabledInput">load_balancing_cross_zone_enabled_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.namePrefixInput">name_prefix_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.portInput">port_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.preserveClientIpInput">preserve_client_ip_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.protocolInput">protocol_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.protocolVersionInput">protocol_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.proxyProtocolV2Input">proxy_protocol_v2_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.slowStartInput">slow_start_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.stickinessInput">stickiness_input</a></code> | <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupStickiness">AlbTargetGroupStickiness</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.tagsAllInput">tags_all_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.targetFailoverInput">target_failover_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetFailover">AlbTargetGroupTargetFailover</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.targetGroupHealthInput">target_group_health_input</a></code> | <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetGroupHealth">AlbTargetGroupTargetGroupHealth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.targetHealthStateInput">target_health_state_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetHealthState">AlbTargetGroupTargetHealthState</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.targetTypeInput">target_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.vpcIdInput">vpc_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.connectionTermination">connection_termination</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.deregistrationDelay">deregistration_delay</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.ipAddressType">ip_address_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.lambdaMultiValueHeadersEnabled">lambda_multi_value_headers_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.loadBalancingAlgorithmType">load_balancing_algorithm_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.loadBalancingAnomalyMitigation">load_balancing_anomaly_mitigation</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.loadBalancingCrossZoneEnabled">load_balancing_cross_zone_enabled</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.namePrefix">name_prefix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.port">port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.preserveClientIp">preserve_client_ip</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.protocol">protocol</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.protocolVersion">protocol_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.proxyProtocolV2">proxy_protocol_v2</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.slowStart">slow_start</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.targetType">target_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.vpcId">vpc_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `arn_suffix`<sup>Required</sup> <a name="arn_suffix" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.arnSuffix"></a>

```python
arn_suffix: str
```

- *Type:* str

---

##### `health_check`<sup>Required</sup> <a name="health_check" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.healthCheck"></a>

```python
health_check: AlbTargetGroupHealthCheckOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheckOutputReference">AlbTargetGroupHealthCheckOutputReference</a>

---

##### `load_balancer_arns`<sup>Required</sup> <a name="load_balancer_arns" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.loadBalancerArns"></a>

```python
load_balancer_arns: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `stickiness`<sup>Required</sup> <a name="stickiness" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.stickiness"></a>

```python
stickiness: AlbTargetGroupStickinessOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupStickinessOutputReference">AlbTargetGroupStickinessOutputReference</a>

---

##### `target_failover`<sup>Required</sup> <a name="target_failover" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.targetFailover"></a>

```python
target_failover: AlbTargetGroupTargetFailoverList
```

- *Type:* <a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetFailoverList">AlbTargetGroupTargetFailoverList</a>

---

##### `target_group_health`<sup>Required</sup> <a name="target_group_health" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.targetGroupHealth"></a>

```python
target_group_health: AlbTargetGroupTargetGroupHealthOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetGroupHealthOutputReference">AlbTargetGroupTargetGroupHealthOutputReference</a>

---

##### `target_health_state`<sup>Required</sup> <a name="target_health_state" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.targetHealthState"></a>

```python
target_health_state: AlbTargetGroupTargetHealthStateList
```

- *Type:* <a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetHealthStateList">AlbTargetGroupTargetHealthStateList</a>

---

##### `connection_termination_input`<sup>Optional</sup> <a name="connection_termination_input" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.connectionTerminationInput"></a>

```python
connection_termination_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `deregistration_delay_input`<sup>Optional</sup> <a name="deregistration_delay_input" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.deregistrationDelayInput"></a>

```python
deregistration_delay_input: str
```

- *Type:* str

---

##### `health_check_input`<sup>Optional</sup> <a name="health_check_input" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.healthCheckInput"></a>

```python
health_check_input: AlbTargetGroupHealthCheck
```

- *Type:* <a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheck">AlbTargetGroupHealthCheck</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `ip_address_type_input`<sup>Optional</sup> <a name="ip_address_type_input" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.ipAddressTypeInput"></a>

```python
ip_address_type_input: str
```

- *Type:* str

---

##### `lambda_multi_value_headers_enabled_input`<sup>Optional</sup> <a name="lambda_multi_value_headers_enabled_input" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.lambdaMultiValueHeadersEnabledInput"></a>

```python
lambda_multi_value_headers_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `load_balancing_algorithm_type_input`<sup>Optional</sup> <a name="load_balancing_algorithm_type_input" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.loadBalancingAlgorithmTypeInput"></a>

```python
load_balancing_algorithm_type_input: str
```

- *Type:* str

---

##### `load_balancing_anomaly_mitigation_input`<sup>Optional</sup> <a name="load_balancing_anomaly_mitigation_input" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.loadBalancingAnomalyMitigationInput"></a>

```python
load_balancing_anomaly_mitigation_input: str
```

- *Type:* str

---

##### `load_balancing_cross_zone_enabled_input`<sup>Optional</sup> <a name="load_balancing_cross_zone_enabled_input" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.loadBalancingCrossZoneEnabledInput"></a>

```python
load_balancing_cross_zone_enabled_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `name_prefix_input`<sup>Optional</sup> <a name="name_prefix_input" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.namePrefixInput"></a>

```python
name_prefix_input: str
```

- *Type:* str

---

##### `port_input`<sup>Optional</sup> <a name="port_input" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.portInput"></a>

```python
port_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `preserve_client_ip_input`<sup>Optional</sup> <a name="preserve_client_ip_input" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.preserveClientIpInput"></a>

```python
preserve_client_ip_input: str
```

- *Type:* str

---

##### `protocol_input`<sup>Optional</sup> <a name="protocol_input" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.protocolInput"></a>

```python
protocol_input: str
```

- *Type:* str

---

##### `protocol_version_input`<sup>Optional</sup> <a name="protocol_version_input" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.protocolVersionInput"></a>

```python
protocol_version_input: str
```

- *Type:* str

---

##### `proxy_protocol_v2_input`<sup>Optional</sup> <a name="proxy_protocol_v2_input" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.proxyProtocolV2Input"></a>

```python
proxy_protocol_v2_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `slow_start_input`<sup>Optional</sup> <a name="slow_start_input" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.slowStartInput"></a>

```python
slow_start_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `stickiness_input`<sup>Optional</sup> <a name="stickiness_input" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.stickinessInput"></a>

```python
stickiness_input: AlbTargetGroupStickiness
```

- *Type:* <a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupStickiness">AlbTargetGroupStickiness</a>

---

##### `tags_all_input`<sup>Optional</sup> <a name="tags_all_input" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.tagsAllInput"></a>

```python
tags_all_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `target_failover_input`<sup>Optional</sup> <a name="target_failover_input" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.targetFailoverInput"></a>

```python
target_failover_input: typing.Union[IResolvable, typing.List[AlbTargetGroupTargetFailover]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetFailover">AlbTargetGroupTargetFailover</a>]]

---

##### `target_group_health_input`<sup>Optional</sup> <a name="target_group_health_input" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.targetGroupHealthInput"></a>

```python
target_group_health_input: AlbTargetGroupTargetGroupHealth
```

- *Type:* <a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetGroupHealth">AlbTargetGroupTargetGroupHealth</a>

---

##### `target_health_state_input`<sup>Optional</sup> <a name="target_health_state_input" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.targetHealthStateInput"></a>

```python
target_health_state_input: typing.Union[IResolvable, typing.List[AlbTargetGroupTargetHealthState]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetHealthState">AlbTargetGroupTargetHealthState</a>]]

---

##### `target_type_input`<sup>Optional</sup> <a name="target_type_input" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.targetTypeInput"></a>

```python
target_type_input: str
```

- *Type:* str

---

##### `vpc_id_input`<sup>Optional</sup> <a name="vpc_id_input" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.vpcIdInput"></a>

```python
vpc_id_input: str
```

- *Type:* str

---

##### `connection_termination`<sup>Required</sup> <a name="connection_termination" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.connectionTermination"></a>

```python
connection_termination: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `deregistration_delay`<sup>Required</sup> <a name="deregistration_delay" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.deregistrationDelay"></a>

```python
deregistration_delay: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `ip_address_type`<sup>Required</sup> <a name="ip_address_type" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.ipAddressType"></a>

```python
ip_address_type: str
```

- *Type:* str

---

##### `lambda_multi_value_headers_enabled`<sup>Required</sup> <a name="lambda_multi_value_headers_enabled" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.lambdaMultiValueHeadersEnabled"></a>

```python
lambda_multi_value_headers_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `load_balancing_algorithm_type`<sup>Required</sup> <a name="load_balancing_algorithm_type" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.loadBalancingAlgorithmType"></a>

```python
load_balancing_algorithm_type: str
```

- *Type:* str

---

##### `load_balancing_anomaly_mitigation`<sup>Required</sup> <a name="load_balancing_anomaly_mitigation" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.loadBalancingAnomalyMitigation"></a>

```python
load_balancing_anomaly_mitigation: str
```

- *Type:* str

---

##### `load_balancing_cross_zone_enabled`<sup>Required</sup> <a name="load_balancing_cross_zone_enabled" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.loadBalancingCrossZoneEnabled"></a>

```python
load_balancing_cross_zone_enabled: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `name_prefix`<sup>Required</sup> <a name="name_prefix" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.namePrefix"></a>

```python
name_prefix: str
```

- *Type:* str

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `preserve_client_ip`<sup>Required</sup> <a name="preserve_client_ip" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.preserveClientIp"></a>

```python
preserve_client_ip: str
```

- *Type:* str

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.protocol"></a>

```python
protocol: str
```

- *Type:* str

---

##### `protocol_version`<sup>Required</sup> <a name="protocol_version" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.protocolVersion"></a>

```python
protocol_version: str
```

- *Type:* str

---

##### `proxy_protocol_v2`<sup>Required</sup> <a name="proxy_protocol_v2" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.proxyProtocolV2"></a>

```python
proxy_protocol_v2: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `slow_start`<sup>Required</sup> <a name="slow_start" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.slowStart"></a>

```python
slow_start: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_all`<sup>Required</sup> <a name="tags_all" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `target_type`<sup>Required</sup> <a name="target_type" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.targetType"></a>

```python
target_type: str
```

- *Type:* str

---

##### `vpc_id`<sup>Required</sup> <a name="vpc_id" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.vpcId"></a>

```python
vpc_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroup.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### AlbTargetGroupConfig <a name="AlbTargetGroupConfig" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import alb_target_group

albTargetGroup.AlbTargetGroupConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  connection_termination: typing.Union[bool, IResolvable] = None,
  deregistration_delay: str = None,
  health_check: AlbTargetGroupHealthCheck = None,
  id: str = None,
  ip_address_type: str = None,
  lambda_multi_value_headers_enabled: typing.Union[bool, IResolvable] = None,
  load_balancing_algorithm_type: str = None,
  load_balancing_anomaly_mitigation: str = None,
  load_balancing_cross_zone_enabled: str = None,
  name: str = None,
  name_prefix: str = None,
  port: typing.Union[int, float] = None,
  preserve_client_ip: str = None,
  protocol: str = None,
  protocol_version: str = None,
  proxy_protocol_v2: typing.Union[bool, IResolvable] = None,
  region: str = None,
  slow_start: typing.Union[int, float] = None,
  stickiness: AlbTargetGroupStickiness = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None,
  target_failover: typing.Union[IResolvable, typing.List[AlbTargetGroupTargetFailover]] = None,
  target_group_health: AlbTargetGroupTargetGroupHealth = None,
  target_health_state: typing.Union[IResolvable, typing.List[AlbTargetGroupTargetHealthState]] = None,
  target_type: str = None,
  vpc_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupConfig.property.connectionTermination">connection_termination</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/alb_target_group#connection_termination AlbTargetGroup#connection_termination}. |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupConfig.property.deregistrationDelay">deregistration_delay</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/alb_target_group#deregistration_delay AlbTargetGroup#deregistration_delay}. |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupConfig.property.healthCheck">health_check</a></code> | <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheck">AlbTargetGroupHealthCheck</a></code> | health_check block. |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/alb_target_group#id AlbTargetGroup#id}. |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupConfig.property.ipAddressType">ip_address_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/alb_target_group#ip_address_type AlbTargetGroup#ip_address_type}. |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupConfig.property.lambdaMultiValueHeadersEnabled">lambda_multi_value_headers_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/alb_target_group#lambda_multi_value_headers_enabled AlbTargetGroup#lambda_multi_value_headers_enabled}. |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupConfig.property.loadBalancingAlgorithmType">load_balancing_algorithm_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/alb_target_group#load_balancing_algorithm_type AlbTargetGroup#load_balancing_algorithm_type}. |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupConfig.property.loadBalancingAnomalyMitigation">load_balancing_anomaly_mitigation</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/alb_target_group#load_balancing_anomaly_mitigation AlbTargetGroup#load_balancing_anomaly_mitigation}. |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupConfig.property.loadBalancingCrossZoneEnabled">load_balancing_cross_zone_enabled</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/alb_target_group#load_balancing_cross_zone_enabled AlbTargetGroup#load_balancing_cross_zone_enabled}. |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/alb_target_group#name AlbTargetGroup#name}. |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupConfig.property.namePrefix">name_prefix</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/alb_target_group#name_prefix AlbTargetGroup#name_prefix}. |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupConfig.property.port">port</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/alb_target_group#port AlbTargetGroup#port}. |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupConfig.property.preserveClientIp">preserve_client_ip</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/alb_target_group#preserve_client_ip AlbTargetGroup#preserve_client_ip}. |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupConfig.property.protocol">protocol</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/alb_target_group#protocol AlbTargetGroup#protocol}. |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupConfig.property.protocolVersion">protocol_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/alb_target_group#protocol_version AlbTargetGroup#protocol_version}. |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupConfig.property.proxyProtocolV2">proxy_protocol_v2</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/alb_target_group#proxy_protocol_v2 AlbTargetGroup#proxy_protocol_v2}. |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupConfig.property.region">region</a></code> | <code>str</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupConfig.property.slowStart">slow_start</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/alb_target_group#slow_start AlbTargetGroup#slow_start}. |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupConfig.property.stickiness">stickiness</a></code> | <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupStickiness">AlbTargetGroupStickiness</a></code> | stickiness block. |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/alb_target_group#tags AlbTargetGroup#tags}. |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupConfig.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/alb_target_group#tags_all AlbTargetGroup#tags_all}. |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupConfig.property.targetFailover">target_failover</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetFailover">AlbTargetGroupTargetFailover</a>]]</code> | target_failover block. |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupConfig.property.targetGroupHealth">target_group_health</a></code> | <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetGroupHealth">AlbTargetGroupTargetGroupHealth</a></code> | target_group_health block. |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupConfig.property.targetHealthState">target_health_state</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetHealthState">AlbTargetGroupTargetHealthState</a>]]</code> | target_health_state block. |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupConfig.property.targetType">target_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/alb_target_group#target_type AlbTargetGroup#target_type}. |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupConfig.property.vpcId">vpc_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/alb_target_group#vpc_id AlbTargetGroup#vpc_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `connection_termination`<sup>Optional</sup> <a name="connection_termination" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupConfig.property.connectionTermination"></a>

```python
connection_termination: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/alb_target_group#connection_termination AlbTargetGroup#connection_termination}.

---

##### `deregistration_delay`<sup>Optional</sup> <a name="deregistration_delay" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupConfig.property.deregistrationDelay"></a>

```python
deregistration_delay: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/alb_target_group#deregistration_delay AlbTargetGroup#deregistration_delay}.

---

##### `health_check`<sup>Optional</sup> <a name="health_check" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupConfig.property.healthCheck"></a>

```python
health_check: AlbTargetGroupHealthCheck
```

- *Type:* <a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheck">AlbTargetGroupHealthCheck</a>

health_check block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/alb_target_group#health_check AlbTargetGroup#health_check}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/alb_target_group#id AlbTargetGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ip_address_type`<sup>Optional</sup> <a name="ip_address_type" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupConfig.property.ipAddressType"></a>

```python
ip_address_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/alb_target_group#ip_address_type AlbTargetGroup#ip_address_type}.

---

##### `lambda_multi_value_headers_enabled`<sup>Optional</sup> <a name="lambda_multi_value_headers_enabled" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupConfig.property.lambdaMultiValueHeadersEnabled"></a>

```python
lambda_multi_value_headers_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/alb_target_group#lambda_multi_value_headers_enabled AlbTargetGroup#lambda_multi_value_headers_enabled}.

---

##### `load_balancing_algorithm_type`<sup>Optional</sup> <a name="load_balancing_algorithm_type" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupConfig.property.loadBalancingAlgorithmType"></a>

```python
load_balancing_algorithm_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/alb_target_group#load_balancing_algorithm_type AlbTargetGroup#load_balancing_algorithm_type}.

---

##### `load_balancing_anomaly_mitigation`<sup>Optional</sup> <a name="load_balancing_anomaly_mitigation" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupConfig.property.loadBalancingAnomalyMitigation"></a>

```python
load_balancing_anomaly_mitigation: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/alb_target_group#load_balancing_anomaly_mitigation AlbTargetGroup#load_balancing_anomaly_mitigation}.

---

##### `load_balancing_cross_zone_enabled`<sup>Optional</sup> <a name="load_balancing_cross_zone_enabled" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupConfig.property.loadBalancingCrossZoneEnabled"></a>

```python
load_balancing_cross_zone_enabled: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/alb_target_group#load_balancing_cross_zone_enabled AlbTargetGroup#load_balancing_cross_zone_enabled}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/alb_target_group#name AlbTargetGroup#name}.

---

##### `name_prefix`<sup>Optional</sup> <a name="name_prefix" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupConfig.property.namePrefix"></a>

```python
name_prefix: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/alb_target_group#name_prefix AlbTargetGroup#name_prefix}.

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupConfig.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/alb_target_group#port AlbTargetGroup#port}.

---

##### `preserve_client_ip`<sup>Optional</sup> <a name="preserve_client_ip" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupConfig.property.preserveClientIp"></a>

```python
preserve_client_ip: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/alb_target_group#preserve_client_ip AlbTargetGroup#preserve_client_ip}.

---

##### `protocol`<sup>Optional</sup> <a name="protocol" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupConfig.property.protocol"></a>

```python
protocol: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/alb_target_group#protocol AlbTargetGroup#protocol}.

---

##### `protocol_version`<sup>Optional</sup> <a name="protocol_version" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupConfig.property.protocolVersion"></a>

```python
protocol_version: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/alb_target_group#protocol_version AlbTargetGroup#protocol_version}.

---

##### `proxy_protocol_v2`<sup>Optional</sup> <a name="proxy_protocol_v2" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupConfig.property.proxyProtocolV2"></a>

```python
proxy_protocol_v2: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/alb_target_group#proxy_protocol_v2 AlbTargetGroup#proxy_protocol_v2}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupConfig.property.region"></a>

```python
region: str
```

- *Type:* str

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/alb_target_group#region AlbTargetGroup#region}

---

##### `slow_start`<sup>Optional</sup> <a name="slow_start" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupConfig.property.slowStart"></a>

```python
slow_start: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/alb_target_group#slow_start AlbTargetGroup#slow_start}.

---

##### `stickiness`<sup>Optional</sup> <a name="stickiness" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupConfig.property.stickiness"></a>

```python
stickiness: AlbTargetGroupStickiness
```

- *Type:* <a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupStickiness">AlbTargetGroupStickiness</a>

stickiness block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/alb_target_group#stickiness AlbTargetGroup#stickiness}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/alb_target_group#tags AlbTargetGroup#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupConfig.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/alb_target_group#tags_all AlbTargetGroup#tags_all}.

---

##### `target_failover`<sup>Optional</sup> <a name="target_failover" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupConfig.property.targetFailover"></a>

```python
target_failover: typing.Union[IResolvable, typing.List[AlbTargetGroupTargetFailover]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetFailover">AlbTargetGroupTargetFailover</a>]]

target_failover block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/alb_target_group#target_failover AlbTargetGroup#target_failover}

---

##### `target_group_health`<sup>Optional</sup> <a name="target_group_health" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupConfig.property.targetGroupHealth"></a>

```python
target_group_health: AlbTargetGroupTargetGroupHealth
```

- *Type:* <a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetGroupHealth">AlbTargetGroupTargetGroupHealth</a>

target_group_health block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/alb_target_group#target_group_health AlbTargetGroup#target_group_health}

---

##### `target_health_state`<sup>Optional</sup> <a name="target_health_state" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupConfig.property.targetHealthState"></a>

```python
target_health_state: typing.Union[IResolvable, typing.List[AlbTargetGroupTargetHealthState]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetHealthState">AlbTargetGroupTargetHealthState</a>]]

target_health_state block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/alb_target_group#target_health_state AlbTargetGroup#target_health_state}

---

##### `target_type`<sup>Optional</sup> <a name="target_type" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupConfig.property.targetType"></a>

```python
target_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/alb_target_group#target_type AlbTargetGroup#target_type}.

---

##### `vpc_id`<sup>Optional</sup> <a name="vpc_id" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupConfig.property.vpcId"></a>

```python
vpc_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/alb_target_group#vpc_id AlbTargetGroup#vpc_id}.

---

### AlbTargetGroupHealthCheck <a name="AlbTargetGroupHealthCheck" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheck"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheck.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import alb_target_group

albTargetGroup.AlbTargetGroupHealthCheck(
  enabled: typing.Union[bool, IResolvable] = None,
  healthy_threshold: typing.Union[int, float] = None,
  interval: typing.Union[int, float] = None,
  matcher: str = None,
  path: str = None,
  port: str = None,
  protocol: str = None,
  timeout: typing.Union[int, float] = None,
  unhealthy_threshold: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheck.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/alb_target_group#enabled AlbTargetGroup#enabled}. |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheck.property.healthyThreshold">healthy_threshold</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/alb_target_group#healthy_threshold AlbTargetGroup#healthy_threshold}. |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheck.property.interval">interval</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/alb_target_group#interval AlbTargetGroup#interval}. |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheck.property.matcher">matcher</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/alb_target_group#matcher AlbTargetGroup#matcher}. |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheck.property.path">path</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/alb_target_group#path AlbTargetGroup#path}. |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheck.property.port">port</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/alb_target_group#port AlbTargetGroup#port}. |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheck.property.protocol">protocol</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/alb_target_group#protocol AlbTargetGroup#protocol}. |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheck.property.timeout">timeout</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/alb_target_group#timeout AlbTargetGroup#timeout}. |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheck.property.unhealthyThreshold">unhealthy_threshold</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/alb_target_group#unhealthy_threshold AlbTargetGroup#unhealthy_threshold}. |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheck.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/alb_target_group#enabled AlbTargetGroup#enabled}.

---

##### `healthy_threshold`<sup>Optional</sup> <a name="healthy_threshold" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheck.property.healthyThreshold"></a>

```python
healthy_threshold: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/alb_target_group#healthy_threshold AlbTargetGroup#healthy_threshold}.

---

##### `interval`<sup>Optional</sup> <a name="interval" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheck.property.interval"></a>

```python
interval: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/alb_target_group#interval AlbTargetGroup#interval}.

---

##### `matcher`<sup>Optional</sup> <a name="matcher" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheck.property.matcher"></a>

```python
matcher: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/alb_target_group#matcher AlbTargetGroup#matcher}.

---

##### `path`<sup>Optional</sup> <a name="path" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheck.property.path"></a>

```python
path: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/alb_target_group#path AlbTargetGroup#path}.

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheck.property.port"></a>

```python
port: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/alb_target_group#port AlbTargetGroup#port}.

---

##### `protocol`<sup>Optional</sup> <a name="protocol" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheck.property.protocol"></a>

```python
protocol: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/alb_target_group#protocol AlbTargetGroup#protocol}.

---

##### `timeout`<sup>Optional</sup> <a name="timeout" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheck.property.timeout"></a>

```python
timeout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/alb_target_group#timeout AlbTargetGroup#timeout}.

---

##### `unhealthy_threshold`<sup>Optional</sup> <a name="unhealthy_threshold" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheck.property.unhealthyThreshold"></a>

```python
unhealthy_threshold: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/alb_target_group#unhealthy_threshold AlbTargetGroup#unhealthy_threshold}.

---

### AlbTargetGroupStickiness <a name="AlbTargetGroupStickiness" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupStickiness"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupStickiness.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import alb_target_group

albTargetGroup.AlbTargetGroupStickiness(
  type: str,
  cookie_duration: typing.Union[int, float] = None,
  cookie_name: str = None,
  enabled: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupStickiness.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/alb_target_group#type AlbTargetGroup#type}. |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupStickiness.property.cookieDuration">cookie_duration</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/alb_target_group#cookie_duration AlbTargetGroup#cookie_duration}. |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupStickiness.property.cookieName">cookie_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/alb_target_group#cookie_name AlbTargetGroup#cookie_name}. |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupStickiness.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/alb_target_group#enabled AlbTargetGroup#enabled}. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupStickiness.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/alb_target_group#type AlbTargetGroup#type}.

---

##### `cookie_duration`<sup>Optional</sup> <a name="cookie_duration" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupStickiness.property.cookieDuration"></a>

```python
cookie_duration: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/alb_target_group#cookie_duration AlbTargetGroup#cookie_duration}.

---

##### `cookie_name`<sup>Optional</sup> <a name="cookie_name" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupStickiness.property.cookieName"></a>

```python
cookie_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/alb_target_group#cookie_name AlbTargetGroup#cookie_name}.

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupStickiness.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/alb_target_group#enabled AlbTargetGroup#enabled}.

---

### AlbTargetGroupTargetFailover <a name="AlbTargetGroupTargetFailover" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetFailover"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetFailover.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import alb_target_group

albTargetGroup.AlbTargetGroupTargetFailover(
  on_deregistration: str,
  on_unhealthy: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetFailover.property.onDeregistration">on_deregistration</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/alb_target_group#on_deregistration AlbTargetGroup#on_deregistration}. |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetFailover.property.onUnhealthy">on_unhealthy</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/alb_target_group#on_unhealthy AlbTargetGroup#on_unhealthy}. |

---

##### `on_deregistration`<sup>Required</sup> <a name="on_deregistration" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetFailover.property.onDeregistration"></a>

```python
on_deregistration: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/alb_target_group#on_deregistration AlbTargetGroup#on_deregistration}.

---

##### `on_unhealthy`<sup>Required</sup> <a name="on_unhealthy" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetFailover.property.onUnhealthy"></a>

```python
on_unhealthy: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/alb_target_group#on_unhealthy AlbTargetGroup#on_unhealthy}.

---

### AlbTargetGroupTargetGroupHealth <a name="AlbTargetGroupTargetGroupHealth" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetGroupHealth"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetGroupHealth.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import alb_target_group

albTargetGroup.AlbTargetGroupTargetGroupHealth(
  dns_failover: AlbTargetGroupTargetGroupHealthDnsFailover = None,
  unhealthy_state_routing: AlbTargetGroupTargetGroupHealthUnhealthyStateRouting = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetGroupHealth.property.dnsFailover">dns_failover</a></code> | <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetGroupHealthDnsFailover">AlbTargetGroupTargetGroupHealthDnsFailover</a></code> | dns_failover block. |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetGroupHealth.property.unhealthyStateRouting">unhealthy_state_routing</a></code> | <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetGroupHealthUnhealthyStateRouting">AlbTargetGroupTargetGroupHealthUnhealthyStateRouting</a></code> | unhealthy_state_routing block. |

---

##### `dns_failover`<sup>Optional</sup> <a name="dns_failover" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetGroupHealth.property.dnsFailover"></a>

```python
dns_failover: AlbTargetGroupTargetGroupHealthDnsFailover
```

- *Type:* <a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetGroupHealthDnsFailover">AlbTargetGroupTargetGroupHealthDnsFailover</a>

dns_failover block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/alb_target_group#dns_failover AlbTargetGroup#dns_failover}

---

##### `unhealthy_state_routing`<sup>Optional</sup> <a name="unhealthy_state_routing" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetGroupHealth.property.unhealthyStateRouting"></a>

```python
unhealthy_state_routing: AlbTargetGroupTargetGroupHealthUnhealthyStateRouting
```

- *Type:* <a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetGroupHealthUnhealthyStateRouting">AlbTargetGroupTargetGroupHealthUnhealthyStateRouting</a>

unhealthy_state_routing block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/alb_target_group#unhealthy_state_routing AlbTargetGroup#unhealthy_state_routing}

---

### AlbTargetGroupTargetGroupHealthDnsFailover <a name="AlbTargetGroupTargetGroupHealthDnsFailover" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetGroupHealthDnsFailover"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetGroupHealthDnsFailover.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import alb_target_group

albTargetGroup.AlbTargetGroupTargetGroupHealthDnsFailover(
  minimum_healthy_targets_count: str = None,
  minimum_healthy_targets_percentage: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetGroupHealthDnsFailover.property.minimumHealthyTargetsCount">minimum_healthy_targets_count</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/alb_target_group#minimum_healthy_targets_count AlbTargetGroup#minimum_healthy_targets_count}. |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetGroupHealthDnsFailover.property.minimumHealthyTargetsPercentage">minimum_healthy_targets_percentage</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/alb_target_group#minimum_healthy_targets_percentage AlbTargetGroup#minimum_healthy_targets_percentage}. |

---

##### `minimum_healthy_targets_count`<sup>Optional</sup> <a name="minimum_healthy_targets_count" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetGroupHealthDnsFailover.property.minimumHealthyTargetsCount"></a>

```python
minimum_healthy_targets_count: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/alb_target_group#minimum_healthy_targets_count AlbTargetGroup#minimum_healthy_targets_count}.

---

##### `minimum_healthy_targets_percentage`<sup>Optional</sup> <a name="minimum_healthy_targets_percentage" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetGroupHealthDnsFailover.property.minimumHealthyTargetsPercentage"></a>

```python
minimum_healthy_targets_percentage: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/alb_target_group#minimum_healthy_targets_percentage AlbTargetGroup#minimum_healthy_targets_percentage}.

---

### AlbTargetGroupTargetGroupHealthUnhealthyStateRouting <a name="AlbTargetGroupTargetGroupHealthUnhealthyStateRouting" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetGroupHealthUnhealthyStateRouting"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetGroupHealthUnhealthyStateRouting.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import alb_target_group

albTargetGroup.AlbTargetGroupTargetGroupHealthUnhealthyStateRouting(
  minimum_healthy_targets_count: typing.Union[int, float] = None,
  minimum_healthy_targets_percentage: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetGroupHealthUnhealthyStateRouting.property.minimumHealthyTargetsCount">minimum_healthy_targets_count</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/alb_target_group#minimum_healthy_targets_count AlbTargetGroup#minimum_healthy_targets_count}. |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetGroupHealthUnhealthyStateRouting.property.minimumHealthyTargetsPercentage">minimum_healthy_targets_percentage</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/alb_target_group#minimum_healthy_targets_percentage AlbTargetGroup#minimum_healthy_targets_percentage}. |

---

##### `minimum_healthy_targets_count`<sup>Optional</sup> <a name="minimum_healthy_targets_count" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetGroupHealthUnhealthyStateRouting.property.minimumHealthyTargetsCount"></a>

```python
minimum_healthy_targets_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/alb_target_group#minimum_healthy_targets_count AlbTargetGroup#minimum_healthy_targets_count}.

---

##### `minimum_healthy_targets_percentage`<sup>Optional</sup> <a name="minimum_healthy_targets_percentage" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetGroupHealthUnhealthyStateRouting.property.minimumHealthyTargetsPercentage"></a>

```python
minimum_healthy_targets_percentage: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/alb_target_group#minimum_healthy_targets_percentage AlbTargetGroup#minimum_healthy_targets_percentage}.

---

### AlbTargetGroupTargetHealthState <a name="AlbTargetGroupTargetHealthState" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetHealthState"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetHealthState.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import alb_target_group

albTargetGroup.AlbTargetGroupTargetHealthState(
  enable_unhealthy_connection_termination: typing.Union[bool, IResolvable],
  unhealthy_draining_interval: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetHealthState.property.enableUnhealthyConnectionTermination">enable_unhealthy_connection_termination</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/alb_target_group#enable_unhealthy_connection_termination AlbTargetGroup#enable_unhealthy_connection_termination}. |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetHealthState.property.unhealthyDrainingInterval">unhealthy_draining_interval</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/alb_target_group#unhealthy_draining_interval AlbTargetGroup#unhealthy_draining_interval}. |

---

##### `enable_unhealthy_connection_termination`<sup>Required</sup> <a name="enable_unhealthy_connection_termination" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetHealthState.property.enableUnhealthyConnectionTermination"></a>

```python
enable_unhealthy_connection_termination: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/alb_target_group#enable_unhealthy_connection_termination AlbTargetGroup#enable_unhealthy_connection_termination}.

---

##### `unhealthy_draining_interval`<sup>Optional</sup> <a name="unhealthy_draining_interval" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetHealthState.property.unhealthyDrainingInterval"></a>

```python
unhealthy_draining_interval: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/alb_target_group#unhealthy_draining_interval AlbTargetGroup#unhealthy_draining_interval}.

---

## Classes <a name="Classes" id="Classes"></a>

### AlbTargetGroupHealthCheckOutputReference <a name="AlbTargetGroupHealthCheckOutputReference" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheckOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheckOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import alb_target_group

albTargetGroup.AlbTargetGroupHealthCheckOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheckOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheckOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheckOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheckOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheckOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheckOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheckOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheckOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheckOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheckOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheckOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheckOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheckOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheckOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheckOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheckOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheckOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheckOutputReference.resetEnabled">reset_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheckOutputReference.resetHealthyThreshold">reset_healthy_threshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheckOutputReference.resetInterval">reset_interval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheckOutputReference.resetMatcher">reset_matcher</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheckOutputReference.resetPath">reset_path</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheckOutputReference.resetPort">reset_port</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheckOutputReference.resetProtocol">reset_protocol</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheckOutputReference.resetTimeout">reset_timeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheckOutputReference.resetUnhealthyThreshold">reset_unhealthy_threshold</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheckOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheckOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheckOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheckOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheckOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheckOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheckOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheckOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheckOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheckOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheckOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheckOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheckOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheckOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheckOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheckOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheckOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheckOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheckOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheckOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheckOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheckOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheckOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheckOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_enabled` <a name="reset_enabled" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheckOutputReference.resetEnabled"></a>

```python
def reset_enabled() -> None
```

##### `reset_healthy_threshold` <a name="reset_healthy_threshold" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheckOutputReference.resetHealthyThreshold"></a>

```python
def reset_healthy_threshold() -> None
```

##### `reset_interval` <a name="reset_interval" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheckOutputReference.resetInterval"></a>

```python
def reset_interval() -> None
```

##### `reset_matcher` <a name="reset_matcher" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheckOutputReference.resetMatcher"></a>

```python
def reset_matcher() -> None
```

##### `reset_path` <a name="reset_path" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheckOutputReference.resetPath"></a>

```python
def reset_path() -> None
```

##### `reset_port` <a name="reset_port" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheckOutputReference.resetPort"></a>

```python
def reset_port() -> None
```

##### `reset_protocol` <a name="reset_protocol" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheckOutputReference.resetProtocol"></a>

```python
def reset_protocol() -> None
```

##### `reset_timeout` <a name="reset_timeout" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheckOutputReference.resetTimeout"></a>

```python
def reset_timeout() -> None
```

##### `reset_unhealthy_threshold` <a name="reset_unhealthy_threshold" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheckOutputReference.resetUnhealthyThreshold"></a>

```python
def reset_unhealthy_threshold() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheckOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheckOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheckOutputReference.property.enabledInput">enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheckOutputReference.property.healthyThresholdInput">healthy_threshold_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheckOutputReference.property.intervalInput">interval_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheckOutputReference.property.matcherInput">matcher_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheckOutputReference.property.pathInput">path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheckOutputReference.property.portInput">port_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheckOutputReference.property.protocolInput">protocol_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheckOutputReference.property.timeoutInput">timeout_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheckOutputReference.property.unhealthyThresholdInput">unhealthy_threshold_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheckOutputReference.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheckOutputReference.property.healthyThreshold">healthy_threshold</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheckOutputReference.property.interval">interval</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheckOutputReference.property.matcher">matcher</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheckOutputReference.property.path">path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheckOutputReference.property.port">port</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheckOutputReference.property.protocol">protocol</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheckOutputReference.property.timeout">timeout</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheckOutputReference.property.unhealthyThreshold">unhealthy_threshold</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheckOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheck">AlbTargetGroupHealthCheck</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheckOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheckOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheckOutputReference.property.enabledInput"></a>

```python
enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `healthy_threshold_input`<sup>Optional</sup> <a name="healthy_threshold_input" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheckOutputReference.property.healthyThresholdInput"></a>

```python
healthy_threshold_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `interval_input`<sup>Optional</sup> <a name="interval_input" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheckOutputReference.property.intervalInput"></a>

```python
interval_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `matcher_input`<sup>Optional</sup> <a name="matcher_input" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheckOutputReference.property.matcherInput"></a>

```python
matcher_input: str
```

- *Type:* str

---

##### `path_input`<sup>Optional</sup> <a name="path_input" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheckOutputReference.property.pathInput"></a>

```python
path_input: str
```

- *Type:* str

---

##### `port_input`<sup>Optional</sup> <a name="port_input" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheckOutputReference.property.portInput"></a>

```python
port_input: str
```

- *Type:* str

---

##### `protocol_input`<sup>Optional</sup> <a name="protocol_input" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheckOutputReference.property.protocolInput"></a>

```python
protocol_input: str
```

- *Type:* str

---

##### `timeout_input`<sup>Optional</sup> <a name="timeout_input" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheckOutputReference.property.timeoutInput"></a>

```python
timeout_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `unhealthy_threshold_input`<sup>Optional</sup> <a name="unhealthy_threshold_input" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheckOutputReference.property.unhealthyThresholdInput"></a>

```python
unhealthy_threshold_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheckOutputReference.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `healthy_threshold`<sup>Required</sup> <a name="healthy_threshold" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheckOutputReference.property.healthyThreshold"></a>

```python
healthy_threshold: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `interval`<sup>Required</sup> <a name="interval" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheckOutputReference.property.interval"></a>

```python
interval: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `matcher`<sup>Required</sup> <a name="matcher" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheckOutputReference.property.matcher"></a>

```python
matcher: str
```

- *Type:* str

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheckOutputReference.property.path"></a>

```python
path: str
```

- *Type:* str

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheckOutputReference.property.port"></a>

```python
port: str
```

- *Type:* str

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheckOutputReference.property.protocol"></a>

```python
protocol: str
```

- *Type:* str

---

##### `timeout`<sup>Required</sup> <a name="timeout" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheckOutputReference.property.timeout"></a>

```python
timeout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `unhealthy_threshold`<sup>Required</sup> <a name="unhealthy_threshold" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheckOutputReference.property.unhealthyThreshold"></a>

```python
unhealthy_threshold: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheckOutputReference.property.internalValue"></a>

```python
internal_value: AlbTargetGroupHealthCheck
```

- *Type:* <a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupHealthCheck">AlbTargetGroupHealthCheck</a>

---


### AlbTargetGroupStickinessOutputReference <a name="AlbTargetGroupStickinessOutputReference" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupStickinessOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupStickinessOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import alb_target_group

albTargetGroup.AlbTargetGroupStickinessOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupStickinessOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupStickinessOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupStickinessOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupStickinessOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupStickinessOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupStickinessOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupStickinessOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupStickinessOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupStickinessOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupStickinessOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupStickinessOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupStickinessOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupStickinessOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupStickinessOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupStickinessOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupStickinessOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupStickinessOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupStickinessOutputReference.resetCookieDuration">reset_cookie_duration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupStickinessOutputReference.resetCookieName">reset_cookie_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupStickinessOutputReference.resetEnabled">reset_enabled</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupStickinessOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupStickinessOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupStickinessOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupStickinessOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupStickinessOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupStickinessOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupStickinessOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupStickinessOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupStickinessOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupStickinessOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupStickinessOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupStickinessOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupStickinessOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupStickinessOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupStickinessOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupStickinessOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupStickinessOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupStickinessOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupStickinessOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupStickinessOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupStickinessOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupStickinessOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupStickinessOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupStickinessOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_cookie_duration` <a name="reset_cookie_duration" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupStickinessOutputReference.resetCookieDuration"></a>

```python
def reset_cookie_duration() -> None
```

##### `reset_cookie_name` <a name="reset_cookie_name" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupStickinessOutputReference.resetCookieName"></a>

```python
def reset_cookie_name() -> None
```

##### `reset_enabled` <a name="reset_enabled" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupStickinessOutputReference.resetEnabled"></a>

```python
def reset_enabled() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupStickinessOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupStickinessOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupStickinessOutputReference.property.cookieDurationInput">cookie_duration_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupStickinessOutputReference.property.cookieNameInput">cookie_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupStickinessOutputReference.property.enabledInput">enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupStickinessOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupStickinessOutputReference.property.cookieDuration">cookie_duration</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupStickinessOutputReference.property.cookieName">cookie_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupStickinessOutputReference.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupStickinessOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupStickinessOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupStickiness">AlbTargetGroupStickiness</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupStickinessOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupStickinessOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cookie_duration_input`<sup>Optional</sup> <a name="cookie_duration_input" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupStickinessOutputReference.property.cookieDurationInput"></a>

```python
cookie_duration_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `cookie_name_input`<sup>Optional</sup> <a name="cookie_name_input" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupStickinessOutputReference.property.cookieNameInput"></a>

```python
cookie_name_input: str
```

- *Type:* str

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupStickinessOutputReference.property.enabledInput"></a>

```python
enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupStickinessOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `cookie_duration`<sup>Required</sup> <a name="cookie_duration" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupStickinessOutputReference.property.cookieDuration"></a>

```python
cookie_duration: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `cookie_name`<sup>Required</sup> <a name="cookie_name" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupStickinessOutputReference.property.cookieName"></a>

```python
cookie_name: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupStickinessOutputReference.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupStickinessOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupStickinessOutputReference.property.internalValue"></a>

```python
internal_value: AlbTargetGroupStickiness
```

- *Type:* <a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupStickiness">AlbTargetGroupStickiness</a>

---


### AlbTargetGroupTargetFailoverList <a name="AlbTargetGroupTargetFailoverList" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetFailoverList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetFailoverList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import alb_target_group

albTargetGroup.AlbTargetGroupTargetFailoverList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetFailoverList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetFailoverList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetFailoverList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetFailoverList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetFailoverList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetFailoverList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetFailoverList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetFailoverList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetFailoverList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetFailoverList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetFailoverList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetFailoverList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetFailoverList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetFailoverList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetFailoverList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetFailoverList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetFailoverList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetFailoverList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> AlbTargetGroupTargetFailoverOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetFailoverList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetFailoverList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetFailoverList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetFailoverList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetFailover">AlbTargetGroupTargetFailover</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetFailoverList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetFailoverList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetFailoverList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[AlbTargetGroupTargetFailover]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetFailover">AlbTargetGroupTargetFailover</a>]]

---


### AlbTargetGroupTargetFailoverOutputReference <a name="AlbTargetGroupTargetFailoverOutputReference" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetFailoverOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetFailoverOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import alb_target_group

albTargetGroup.AlbTargetGroupTargetFailoverOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetFailoverOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetFailoverOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetFailoverOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetFailoverOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetFailoverOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetFailoverOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetFailoverOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetFailoverOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetFailoverOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetFailoverOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetFailoverOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetFailoverOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetFailoverOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetFailoverOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetFailoverOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetFailoverOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetFailoverOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetFailoverOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetFailoverOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetFailoverOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetFailoverOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetFailoverOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetFailoverOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetFailoverOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetFailoverOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetFailoverOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetFailoverOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetFailoverOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetFailoverOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetFailoverOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetFailoverOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetFailoverOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetFailoverOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetFailoverOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetFailoverOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetFailoverOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetFailoverOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetFailoverOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetFailoverOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetFailoverOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetFailoverOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetFailoverOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetFailoverOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetFailoverOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetFailoverOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetFailoverOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetFailoverOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetFailoverOutputReference.property.onDeregistrationInput">on_deregistration_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetFailoverOutputReference.property.onUnhealthyInput">on_unhealthy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetFailoverOutputReference.property.onDeregistration">on_deregistration</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetFailoverOutputReference.property.onUnhealthy">on_unhealthy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetFailoverOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetFailover">AlbTargetGroupTargetFailover</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetFailoverOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetFailoverOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `on_deregistration_input`<sup>Optional</sup> <a name="on_deregistration_input" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetFailoverOutputReference.property.onDeregistrationInput"></a>

```python
on_deregistration_input: str
```

- *Type:* str

---

##### `on_unhealthy_input`<sup>Optional</sup> <a name="on_unhealthy_input" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetFailoverOutputReference.property.onUnhealthyInput"></a>

```python
on_unhealthy_input: str
```

- *Type:* str

---

##### `on_deregistration`<sup>Required</sup> <a name="on_deregistration" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetFailoverOutputReference.property.onDeregistration"></a>

```python
on_deregistration: str
```

- *Type:* str

---

##### `on_unhealthy`<sup>Required</sup> <a name="on_unhealthy" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetFailoverOutputReference.property.onUnhealthy"></a>

```python
on_unhealthy: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetFailoverOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, AlbTargetGroupTargetFailover]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetFailover">AlbTargetGroupTargetFailover</a>]

---


### AlbTargetGroupTargetGroupHealthDnsFailoverOutputReference <a name="AlbTargetGroupTargetGroupHealthDnsFailoverOutputReference" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetGroupHealthDnsFailoverOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetGroupHealthDnsFailoverOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import alb_target_group

albTargetGroup.AlbTargetGroupTargetGroupHealthDnsFailoverOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetGroupHealthDnsFailoverOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetGroupHealthDnsFailoverOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetGroupHealthDnsFailoverOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetGroupHealthDnsFailoverOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetGroupHealthDnsFailoverOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetGroupHealthDnsFailoverOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetGroupHealthDnsFailoverOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetGroupHealthDnsFailoverOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetGroupHealthDnsFailoverOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetGroupHealthDnsFailoverOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetGroupHealthDnsFailoverOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetGroupHealthDnsFailoverOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetGroupHealthDnsFailoverOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetGroupHealthDnsFailoverOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetGroupHealthDnsFailoverOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetGroupHealthDnsFailoverOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetGroupHealthDnsFailoverOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetGroupHealthDnsFailoverOutputReference.resetMinimumHealthyTargetsCount">reset_minimum_healthy_targets_count</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetGroupHealthDnsFailoverOutputReference.resetMinimumHealthyTargetsPercentage">reset_minimum_healthy_targets_percentage</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetGroupHealthDnsFailoverOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetGroupHealthDnsFailoverOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetGroupHealthDnsFailoverOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetGroupHealthDnsFailoverOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetGroupHealthDnsFailoverOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetGroupHealthDnsFailoverOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetGroupHealthDnsFailoverOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetGroupHealthDnsFailoverOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetGroupHealthDnsFailoverOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetGroupHealthDnsFailoverOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetGroupHealthDnsFailoverOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetGroupHealthDnsFailoverOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetGroupHealthDnsFailoverOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetGroupHealthDnsFailoverOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetGroupHealthDnsFailoverOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetGroupHealthDnsFailoverOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetGroupHealthDnsFailoverOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetGroupHealthDnsFailoverOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetGroupHealthDnsFailoverOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetGroupHealthDnsFailoverOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetGroupHealthDnsFailoverOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetGroupHealthDnsFailoverOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetGroupHealthDnsFailoverOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetGroupHealthDnsFailoverOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_minimum_healthy_targets_count` <a name="reset_minimum_healthy_targets_count" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetGroupHealthDnsFailoverOutputReference.resetMinimumHealthyTargetsCount"></a>

```python
def reset_minimum_healthy_targets_count() -> None
```

##### `reset_minimum_healthy_targets_percentage` <a name="reset_minimum_healthy_targets_percentage" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetGroupHealthDnsFailoverOutputReference.resetMinimumHealthyTargetsPercentage"></a>

```python
def reset_minimum_healthy_targets_percentage() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetGroupHealthDnsFailoverOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetGroupHealthDnsFailoverOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetGroupHealthDnsFailoverOutputReference.property.minimumHealthyTargetsCountInput">minimum_healthy_targets_count_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetGroupHealthDnsFailoverOutputReference.property.minimumHealthyTargetsPercentageInput">minimum_healthy_targets_percentage_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetGroupHealthDnsFailoverOutputReference.property.minimumHealthyTargetsCount">minimum_healthy_targets_count</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetGroupHealthDnsFailoverOutputReference.property.minimumHealthyTargetsPercentage">minimum_healthy_targets_percentage</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetGroupHealthDnsFailoverOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetGroupHealthDnsFailover">AlbTargetGroupTargetGroupHealthDnsFailover</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetGroupHealthDnsFailoverOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetGroupHealthDnsFailoverOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `minimum_healthy_targets_count_input`<sup>Optional</sup> <a name="minimum_healthy_targets_count_input" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetGroupHealthDnsFailoverOutputReference.property.minimumHealthyTargetsCountInput"></a>

```python
minimum_healthy_targets_count_input: str
```

- *Type:* str

---

##### `minimum_healthy_targets_percentage_input`<sup>Optional</sup> <a name="minimum_healthy_targets_percentage_input" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetGroupHealthDnsFailoverOutputReference.property.minimumHealthyTargetsPercentageInput"></a>

```python
minimum_healthy_targets_percentage_input: str
```

- *Type:* str

---

##### `minimum_healthy_targets_count`<sup>Required</sup> <a name="minimum_healthy_targets_count" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetGroupHealthDnsFailoverOutputReference.property.minimumHealthyTargetsCount"></a>

```python
minimum_healthy_targets_count: str
```

- *Type:* str

---

##### `minimum_healthy_targets_percentage`<sup>Required</sup> <a name="minimum_healthy_targets_percentage" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetGroupHealthDnsFailoverOutputReference.property.minimumHealthyTargetsPercentage"></a>

```python
minimum_healthy_targets_percentage: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetGroupHealthDnsFailoverOutputReference.property.internalValue"></a>

```python
internal_value: AlbTargetGroupTargetGroupHealthDnsFailover
```

- *Type:* <a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetGroupHealthDnsFailover">AlbTargetGroupTargetGroupHealthDnsFailover</a>

---


### AlbTargetGroupTargetGroupHealthOutputReference <a name="AlbTargetGroupTargetGroupHealthOutputReference" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetGroupHealthOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetGroupHealthOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import alb_target_group

albTargetGroup.AlbTargetGroupTargetGroupHealthOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetGroupHealthOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetGroupHealthOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetGroupHealthOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetGroupHealthOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetGroupHealthOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetGroupHealthOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetGroupHealthOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetGroupHealthOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetGroupHealthOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetGroupHealthOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetGroupHealthOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetGroupHealthOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetGroupHealthOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetGroupHealthOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetGroupHealthOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetGroupHealthOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetGroupHealthOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetGroupHealthOutputReference.putDnsFailover">put_dns_failover</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetGroupHealthOutputReference.putUnhealthyStateRouting">put_unhealthy_state_routing</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetGroupHealthOutputReference.resetDnsFailover">reset_dns_failover</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetGroupHealthOutputReference.resetUnhealthyStateRouting">reset_unhealthy_state_routing</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetGroupHealthOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetGroupHealthOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetGroupHealthOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetGroupHealthOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetGroupHealthOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetGroupHealthOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetGroupHealthOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetGroupHealthOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetGroupHealthOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetGroupHealthOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetGroupHealthOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetGroupHealthOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetGroupHealthOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetGroupHealthOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetGroupHealthOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetGroupHealthOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetGroupHealthOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetGroupHealthOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetGroupHealthOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetGroupHealthOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetGroupHealthOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetGroupHealthOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetGroupHealthOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetGroupHealthOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_dns_failover` <a name="put_dns_failover" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetGroupHealthOutputReference.putDnsFailover"></a>

```python
def put_dns_failover(
  minimum_healthy_targets_count: str = None,
  minimum_healthy_targets_percentage: str = None
) -> None
```

###### `minimum_healthy_targets_count`<sup>Optional</sup> <a name="minimum_healthy_targets_count" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetGroupHealthOutputReference.putDnsFailover.parameter.minimumHealthyTargetsCount"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/alb_target_group#minimum_healthy_targets_count AlbTargetGroup#minimum_healthy_targets_count}.

---

###### `minimum_healthy_targets_percentage`<sup>Optional</sup> <a name="minimum_healthy_targets_percentage" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetGroupHealthOutputReference.putDnsFailover.parameter.minimumHealthyTargetsPercentage"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/alb_target_group#minimum_healthy_targets_percentage AlbTargetGroup#minimum_healthy_targets_percentage}.

---

##### `put_unhealthy_state_routing` <a name="put_unhealthy_state_routing" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetGroupHealthOutputReference.putUnhealthyStateRouting"></a>

```python
def put_unhealthy_state_routing(
  minimum_healthy_targets_count: typing.Union[int, float] = None,
  minimum_healthy_targets_percentage: str = None
) -> None
```

###### `minimum_healthy_targets_count`<sup>Optional</sup> <a name="minimum_healthy_targets_count" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetGroupHealthOutputReference.putUnhealthyStateRouting.parameter.minimumHealthyTargetsCount"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/alb_target_group#minimum_healthy_targets_count AlbTargetGroup#minimum_healthy_targets_count}.

---

###### `minimum_healthy_targets_percentage`<sup>Optional</sup> <a name="minimum_healthy_targets_percentage" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetGroupHealthOutputReference.putUnhealthyStateRouting.parameter.minimumHealthyTargetsPercentage"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/alb_target_group#minimum_healthy_targets_percentage AlbTargetGroup#minimum_healthy_targets_percentage}.

---

##### `reset_dns_failover` <a name="reset_dns_failover" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetGroupHealthOutputReference.resetDnsFailover"></a>

```python
def reset_dns_failover() -> None
```

##### `reset_unhealthy_state_routing` <a name="reset_unhealthy_state_routing" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetGroupHealthOutputReference.resetUnhealthyStateRouting"></a>

```python
def reset_unhealthy_state_routing() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetGroupHealthOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetGroupHealthOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetGroupHealthOutputReference.property.dnsFailover">dns_failover</a></code> | <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetGroupHealthDnsFailoverOutputReference">AlbTargetGroupTargetGroupHealthDnsFailoverOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetGroupHealthOutputReference.property.unhealthyStateRouting">unhealthy_state_routing</a></code> | <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetGroupHealthUnhealthyStateRoutingOutputReference">AlbTargetGroupTargetGroupHealthUnhealthyStateRoutingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetGroupHealthOutputReference.property.dnsFailoverInput">dns_failover_input</a></code> | <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetGroupHealthDnsFailover">AlbTargetGroupTargetGroupHealthDnsFailover</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetGroupHealthOutputReference.property.unhealthyStateRoutingInput">unhealthy_state_routing_input</a></code> | <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetGroupHealthUnhealthyStateRouting">AlbTargetGroupTargetGroupHealthUnhealthyStateRouting</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetGroupHealthOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetGroupHealth">AlbTargetGroupTargetGroupHealth</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetGroupHealthOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetGroupHealthOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `dns_failover`<sup>Required</sup> <a name="dns_failover" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetGroupHealthOutputReference.property.dnsFailover"></a>

```python
dns_failover: AlbTargetGroupTargetGroupHealthDnsFailoverOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetGroupHealthDnsFailoverOutputReference">AlbTargetGroupTargetGroupHealthDnsFailoverOutputReference</a>

---

##### `unhealthy_state_routing`<sup>Required</sup> <a name="unhealthy_state_routing" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetGroupHealthOutputReference.property.unhealthyStateRouting"></a>

```python
unhealthy_state_routing: AlbTargetGroupTargetGroupHealthUnhealthyStateRoutingOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetGroupHealthUnhealthyStateRoutingOutputReference">AlbTargetGroupTargetGroupHealthUnhealthyStateRoutingOutputReference</a>

---

##### `dns_failover_input`<sup>Optional</sup> <a name="dns_failover_input" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetGroupHealthOutputReference.property.dnsFailoverInput"></a>

```python
dns_failover_input: AlbTargetGroupTargetGroupHealthDnsFailover
```

- *Type:* <a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetGroupHealthDnsFailover">AlbTargetGroupTargetGroupHealthDnsFailover</a>

---

##### `unhealthy_state_routing_input`<sup>Optional</sup> <a name="unhealthy_state_routing_input" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetGroupHealthOutputReference.property.unhealthyStateRoutingInput"></a>

```python
unhealthy_state_routing_input: AlbTargetGroupTargetGroupHealthUnhealthyStateRouting
```

- *Type:* <a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetGroupHealthUnhealthyStateRouting">AlbTargetGroupTargetGroupHealthUnhealthyStateRouting</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetGroupHealthOutputReference.property.internalValue"></a>

```python
internal_value: AlbTargetGroupTargetGroupHealth
```

- *Type:* <a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetGroupHealth">AlbTargetGroupTargetGroupHealth</a>

---


### AlbTargetGroupTargetGroupHealthUnhealthyStateRoutingOutputReference <a name="AlbTargetGroupTargetGroupHealthUnhealthyStateRoutingOutputReference" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetGroupHealthUnhealthyStateRoutingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetGroupHealthUnhealthyStateRoutingOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import alb_target_group

albTargetGroup.AlbTargetGroupTargetGroupHealthUnhealthyStateRoutingOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetGroupHealthUnhealthyStateRoutingOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetGroupHealthUnhealthyStateRoutingOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetGroupHealthUnhealthyStateRoutingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetGroupHealthUnhealthyStateRoutingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetGroupHealthUnhealthyStateRoutingOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetGroupHealthUnhealthyStateRoutingOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetGroupHealthUnhealthyStateRoutingOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetGroupHealthUnhealthyStateRoutingOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetGroupHealthUnhealthyStateRoutingOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetGroupHealthUnhealthyStateRoutingOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetGroupHealthUnhealthyStateRoutingOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetGroupHealthUnhealthyStateRoutingOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetGroupHealthUnhealthyStateRoutingOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetGroupHealthUnhealthyStateRoutingOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetGroupHealthUnhealthyStateRoutingOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetGroupHealthUnhealthyStateRoutingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetGroupHealthUnhealthyStateRoutingOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetGroupHealthUnhealthyStateRoutingOutputReference.resetMinimumHealthyTargetsCount">reset_minimum_healthy_targets_count</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetGroupHealthUnhealthyStateRoutingOutputReference.resetMinimumHealthyTargetsPercentage">reset_minimum_healthy_targets_percentage</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetGroupHealthUnhealthyStateRoutingOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetGroupHealthUnhealthyStateRoutingOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetGroupHealthUnhealthyStateRoutingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetGroupHealthUnhealthyStateRoutingOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetGroupHealthUnhealthyStateRoutingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetGroupHealthUnhealthyStateRoutingOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetGroupHealthUnhealthyStateRoutingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetGroupHealthUnhealthyStateRoutingOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetGroupHealthUnhealthyStateRoutingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetGroupHealthUnhealthyStateRoutingOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetGroupHealthUnhealthyStateRoutingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetGroupHealthUnhealthyStateRoutingOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetGroupHealthUnhealthyStateRoutingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetGroupHealthUnhealthyStateRoutingOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetGroupHealthUnhealthyStateRoutingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetGroupHealthUnhealthyStateRoutingOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetGroupHealthUnhealthyStateRoutingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetGroupHealthUnhealthyStateRoutingOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetGroupHealthUnhealthyStateRoutingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetGroupHealthUnhealthyStateRoutingOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetGroupHealthUnhealthyStateRoutingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetGroupHealthUnhealthyStateRoutingOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetGroupHealthUnhealthyStateRoutingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetGroupHealthUnhealthyStateRoutingOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_minimum_healthy_targets_count` <a name="reset_minimum_healthy_targets_count" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetGroupHealthUnhealthyStateRoutingOutputReference.resetMinimumHealthyTargetsCount"></a>

```python
def reset_minimum_healthy_targets_count() -> None
```

##### `reset_minimum_healthy_targets_percentage` <a name="reset_minimum_healthy_targets_percentage" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetGroupHealthUnhealthyStateRoutingOutputReference.resetMinimumHealthyTargetsPercentage"></a>

```python
def reset_minimum_healthy_targets_percentage() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetGroupHealthUnhealthyStateRoutingOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetGroupHealthUnhealthyStateRoutingOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetGroupHealthUnhealthyStateRoutingOutputReference.property.minimumHealthyTargetsCountInput">minimum_healthy_targets_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetGroupHealthUnhealthyStateRoutingOutputReference.property.minimumHealthyTargetsPercentageInput">minimum_healthy_targets_percentage_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetGroupHealthUnhealthyStateRoutingOutputReference.property.minimumHealthyTargetsCount">minimum_healthy_targets_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetGroupHealthUnhealthyStateRoutingOutputReference.property.minimumHealthyTargetsPercentage">minimum_healthy_targets_percentage</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetGroupHealthUnhealthyStateRoutingOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetGroupHealthUnhealthyStateRouting">AlbTargetGroupTargetGroupHealthUnhealthyStateRouting</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetGroupHealthUnhealthyStateRoutingOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetGroupHealthUnhealthyStateRoutingOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `minimum_healthy_targets_count_input`<sup>Optional</sup> <a name="minimum_healthy_targets_count_input" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetGroupHealthUnhealthyStateRoutingOutputReference.property.minimumHealthyTargetsCountInput"></a>

```python
minimum_healthy_targets_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `minimum_healthy_targets_percentage_input`<sup>Optional</sup> <a name="minimum_healthy_targets_percentage_input" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetGroupHealthUnhealthyStateRoutingOutputReference.property.minimumHealthyTargetsPercentageInput"></a>

```python
minimum_healthy_targets_percentage_input: str
```

- *Type:* str

---

##### `minimum_healthy_targets_count`<sup>Required</sup> <a name="minimum_healthy_targets_count" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetGroupHealthUnhealthyStateRoutingOutputReference.property.minimumHealthyTargetsCount"></a>

```python
minimum_healthy_targets_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `minimum_healthy_targets_percentage`<sup>Required</sup> <a name="minimum_healthy_targets_percentage" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetGroupHealthUnhealthyStateRoutingOutputReference.property.minimumHealthyTargetsPercentage"></a>

```python
minimum_healthy_targets_percentage: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetGroupHealthUnhealthyStateRoutingOutputReference.property.internalValue"></a>

```python
internal_value: AlbTargetGroupTargetGroupHealthUnhealthyStateRouting
```

- *Type:* <a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetGroupHealthUnhealthyStateRouting">AlbTargetGroupTargetGroupHealthUnhealthyStateRouting</a>

---


### AlbTargetGroupTargetHealthStateList <a name="AlbTargetGroupTargetHealthStateList" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetHealthStateList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetHealthStateList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import alb_target_group

albTargetGroup.AlbTargetGroupTargetHealthStateList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetHealthStateList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetHealthStateList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetHealthStateList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetHealthStateList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetHealthStateList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetHealthStateList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetHealthStateList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetHealthStateList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetHealthStateList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetHealthStateList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetHealthStateList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetHealthStateList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetHealthStateList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetHealthStateList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetHealthStateList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetHealthStateList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetHealthStateList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetHealthStateList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> AlbTargetGroupTargetHealthStateOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetHealthStateList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetHealthStateList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetHealthStateList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetHealthStateList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetHealthState">AlbTargetGroupTargetHealthState</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetHealthStateList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetHealthStateList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetHealthStateList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[AlbTargetGroupTargetHealthState]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetHealthState">AlbTargetGroupTargetHealthState</a>]]

---


### AlbTargetGroupTargetHealthStateOutputReference <a name="AlbTargetGroupTargetHealthStateOutputReference" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetHealthStateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetHealthStateOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import alb_target_group

albTargetGroup.AlbTargetGroupTargetHealthStateOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetHealthStateOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetHealthStateOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetHealthStateOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetHealthStateOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetHealthStateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetHealthStateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetHealthStateOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetHealthStateOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetHealthStateOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetHealthStateOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetHealthStateOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetHealthStateOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetHealthStateOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetHealthStateOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetHealthStateOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetHealthStateOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetHealthStateOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetHealthStateOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetHealthStateOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetHealthStateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetHealthStateOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetHealthStateOutputReference.resetUnhealthyDrainingInterval">reset_unhealthy_draining_interval</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetHealthStateOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetHealthStateOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetHealthStateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetHealthStateOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetHealthStateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetHealthStateOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetHealthStateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetHealthStateOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetHealthStateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetHealthStateOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetHealthStateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetHealthStateOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetHealthStateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetHealthStateOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetHealthStateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetHealthStateOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetHealthStateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetHealthStateOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetHealthStateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetHealthStateOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetHealthStateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetHealthStateOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetHealthStateOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetHealthStateOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_unhealthy_draining_interval` <a name="reset_unhealthy_draining_interval" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetHealthStateOutputReference.resetUnhealthyDrainingInterval"></a>

```python
def reset_unhealthy_draining_interval() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetHealthStateOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetHealthStateOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetHealthStateOutputReference.property.enableUnhealthyConnectionTerminationInput">enable_unhealthy_connection_termination_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetHealthStateOutputReference.property.unhealthyDrainingIntervalInput">unhealthy_draining_interval_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetHealthStateOutputReference.property.enableUnhealthyConnectionTermination">enable_unhealthy_connection_termination</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetHealthStateOutputReference.property.unhealthyDrainingInterval">unhealthy_draining_interval</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetHealthStateOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetHealthState">AlbTargetGroupTargetHealthState</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetHealthStateOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetHealthStateOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `enable_unhealthy_connection_termination_input`<sup>Optional</sup> <a name="enable_unhealthy_connection_termination_input" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetHealthStateOutputReference.property.enableUnhealthyConnectionTerminationInput"></a>

```python
enable_unhealthy_connection_termination_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `unhealthy_draining_interval_input`<sup>Optional</sup> <a name="unhealthy_draining_interval_input" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetHealthStateOutputReference.property.unhealthyDrainingIntervalInput"></a>

```python
unhealthy_draining_interval_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `enable_unhealthy_connection_termination`<sup>Required</sup> <a name="enable_unhealthy_connection_termination" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetHealthStateOutputReference.property.enableUnhealthyConnectionTermination"></a>

```python
enable_unhealthy_connection_termination: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `unhealthy_draining_interval`<sup>Required</sup> <a name="unhealthy_draining_interval" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetHealthStateOutputReference.property.unhealthyDrainingInterval"></a>

```python
unhealthy_draining_interval: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetHealthStateOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, AlbTargetGroupTargetHealthState]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.albTargetGroup.AlbTargetGroupTargetHealthState">AlbTargetGroupTargetHealthState</a>]

---



