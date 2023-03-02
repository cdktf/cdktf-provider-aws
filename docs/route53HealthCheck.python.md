# `route53HealthCheck` Submodule <a name="`route53HealthCheck` Submodule" id="@cdktf/provider-aws.route53HealthCheck"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Route53HealthCheck <a name="Route53HealthCheck" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/route53_health_check aws_route53_health_check}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import route53_health_check

route53HealthCheck.Route53HealthCheck(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  type: str,
  child_healthchecks: typing.List[str] = None,
  child_health_threshold: typing.Union[int, float] = None,
  cloudwatch_alarm_name: str = None,
  cloudwatch_alarm_region: str = None,
  disabled: typing.Union[bool, IResolvable] = None,
  enable_sni: typing.Union[bool, IResolvable] = None,
  failure_threshold: typing.Union[int, float] = None,
  fqdn: str = None,
  id: str = None,
  insufficient_data_health_status: str = None,
  invert_healthcheck: typing.Union[bool, IResolvable] = None,
  ip_address: str = None,
  measure_latency: typing.Union[bool, IResolvable] = None,
  port: typing.Union[int, float] = None,
  reference_name: str = None,
  regions: typing.List[str] = None,
  request_interval: typing.Union[int, float] = None,
  resource_path: str = None,
  routing_control_arn: str = None,
  search_string: str = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.Initializer.parameter.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_health_check#type Route53HealthCheck#type}. |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.Initializer.parameter.childHealthchecks">child_healthchecks</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_health_check#child_healthchecks Route53HealthCheck#child_healthchecks}. |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.Initializer.parameter.childHealthThreshold">child_health_threshold</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_health_check#child_health_threshold Route53HealthCheck#child_health_threshold}. |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.Initializer.parameter.cloudwatchAlarmName">cloudwatch_alarm_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_health_check#cloudwatch_alarm_name Route53HealthCheck#cloudwatch_alarm_name}. |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.Initializer.parameter.cloudwatchAlarmRegion">cloudwatch_alarm_region</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_health_check#cloudwatch_alarm_region Route53HealthCheck#cloudwatch_alarm_region}. |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.Initializer.parameter.disabled">disabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_health_check#disabled Route53HealthCheck#disabled}. |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.Initializer.parameter.enableSni">enable_sni</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_health_check#enable_sni Route53HealthCheck#enable_sni}. |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.Initializer.parameter.failureThreshold">failure_threshold</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_health_check#failure_threshold Route53HealthCheck#failure_threshold}. |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.Initializer.parameter.fqdn">fqdn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_health_check#fqdn Route53HealthCheck#fqdn}. |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_health_check#id Route53HealthCheck#id}. |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.Initializer.parameter.insufficientDataHealthStatus">insufficient_data_health_status</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_health_check#insufficient_data_health_status Route53HealthCheck#insufficient_data_health_status}. |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.Initializer.parameter.invertHealthcheck">invert_healthcheck</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_health_check#invert_healthcheck Route53HealthCheck#invert_healthcheck}. |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.Initializer.parameter.ipAddress">ip_address</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_health_check#ip_address Route53HealthCheck#ip_address}. |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.Initializer.parameter.measureLatency">measure_latency</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_health_check#measure_latency Route53HealthCheck#measure_latency}. |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.Initializer.parameter.port">port</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_health_check#port Route53HealthCheck#port}. |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.Initializer.parameter.referenceName">reference_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_health_check#reference_name Route53HealthCheck#reference_name}. |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.Initializer.parameter.regions">regions</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_health_check#regions Route53HealthCheck#regions}. |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.Initializer.parameter.requestInterval">request_interval</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_health_check#request_interval Route53HealthCheck#request_interval}. |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.Initializer.parameter.resourcePath">resource_path</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_health_check#resource_path Route53HealthCheck#resource_path}. |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.Initializer.parameter.routingControlArn">routing_control_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_health_check#routing_control_arn Route53HealthCheck#routing_control_arn}. |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.Initializer.parameter.searchString">search_string</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_health_check#search_string Route53HealthCheck#search_string}. |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_health_check#tags Route53HealthCheck#tags}. |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.Initializer.parameter.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_health_check#tags_all Route53HealthCheck#tags_all}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.Initializer.parameter.type"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_health_check#type Route53HealthCheck#type}.

---

##### `child_healthchecks`<sup>Optional</sup> <a name="child_healthchecks" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.Initializer.parameter.childHealthchecks"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_health_check#child_healthchecks Route53HealthCheck#child_healthchecks}.

---

##### `child_health_threshold`<sup>Optional</sup> <a name="child_health_threshold" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.Initializer.parameter.childHealthThreshold"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_health_check#child_health_threshold Route53HealthCheck#child_health_threshold}.

---

##### `cloudwatch_alarm_name`<sup>Optional</sup> <a name="cloudwatch_alarm_name" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.Initializer.parameter.cloudwatchAlarmName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_health_check#cloudwatch_alarm_name Route53HealthCheck#cloudwatch_alarm_name}.

---

##### `cloudwatch_alarm_region`<sup>Optional</sup> <a name="cloudwatch_alarm_region" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.Initializer.parameter.cloudwatchAlarmRegion"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_health_check#cloudwatch_alarm_region Route53HealthCheck#cloudwatch_alarm_region}.

---

##### `disabled`<sup>Optional</sup> <a name="disabled" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.Initializer.parameter.disabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_health_check#disabled Route53HealthCheck#disabled}.

---

##### `enable_sni`<sup>Optional</sup> <a name="enable_sni" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.Initializer.parameter.enableSni"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_health_check#enable_sni Route53HealthCheck#enable_sni}.

---

##### `failure_threshold`<sup>Optional</sup> <a name="failure_threshold" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.Initializer.parameter.failureThreshold"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_health_check#failure_threshold Route53HealthCheck#failure_threshold}.

---

##### `fqdn`<sup>Optional</sup> <a name="fqdn" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.Initializer.parameter.fqdn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_health_check#fqdn Route53HealthCheck#fqdn}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_health_check#id Route53HealthCheck#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `insufficient_data_health_status`<sup>Optional</sup> <a name="insufficient_data_health_status" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.Initializer.parameter.insufficientDataHealthStatus"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_health_check#insufficient_data_health_status Route53HealthCheck#insufficient_data_health_status}.

---

##### `invert_healthcheck`<sup>Optional</sup> <a name="invert_healthcheck" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.Initializer.parameter.invertHealthcheck"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_health_check#invert_healthcheck Route53HealthCheck#invert_healthcheck}.

---

##### `ip_address`<sup>Optional</sup> <a name="ip_address" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.Initializer.parameter.ipAddress"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_health_check#ip_address Route53HealthCheck#ip_address}.

---

##### `measure_latency`<sup>Optional</sup> <a name="measure_latency" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.Initializer.parameter.measureLatency"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_health_check#measure_latency Route53HealthCheck#measure_latency}.

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.Initializer.parameter.port"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_health_check#port Route53HealthCheck#port}.

---

##### `reference_name`<sup>Optional</sup> <a name="reference_name" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.Initializer.parameter.referenceName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_health_check#reference_name Route53HealthCheck#reference_name}.

---

##### `regions`<sup>Optional</sup> <a name="regions" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.Initializer.parameter.regions"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_health_check#regions Route53HealthCheck#regions}.

---

##### `request_interval`<sup>Optional</sup> <a name="request_interval" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.Initializer.parameter.requestInterval"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_health_check#request_interval Route53HealthCheck#request_interval}.

---

##### `resource_path`<sup>Optional</sup> <a name="resource_path" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.Initializer.parameter.resourcePath"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_health_check#resource_path Route53HealthCheck#resource_path}.

---

##### `routing_control_arn`<sup>Optional</sup> <a name="routing_control_arn" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.Initializer.parameter.routingControlArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_health_check#routing_control_arn Route53HealthCheck#routing_control_arn}.

---

##### `search_string`<sup>Optional</sup> <a name="search_string" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.Initializer.parameter.searchString"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_health_check#search_string Route53HealthCheck#search_string}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_health_check#tags Route53HealthCheck#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.Initializer.parameter.tagsAll"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_health_check#tags_all Route53HealthCheck#tags_all}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.resetChildHealthchecks">reset_child_healthchecks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.resetChildHealthThreshold">reset_child_health_threshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.resetCloudwatchAlarmName">reset_cloudwatch_alarm_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.resetCloudwatchAlarmRegion">reset_cloudwatch_alarm_region</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.resetDisabled">reset_disabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.resetEnableSni">reset_enable_sni</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.resetFailureThreshold">reset_failure_threshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.resetFqdn">reset_fqdn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.resetInsufficientDataHealthStatus">reset_insufficient_data_health_status</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.resetInvertHealthcheck">reset_invert_healthcheck</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.resetIpAddress">reset_ip_address</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.resetMeasureLatency">reset_measure_latency</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.resetPort">reset_port</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.resetReferenceName">reset_reference_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.resetRegions">reset_regions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.resetRequestInterval">reset_request_interval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.resetResourcePath">reset_resource_path</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.resetRoutingControlArn">reset_routing_control_arn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.resetSearchString">reset_search_string</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.resetTagsAll">reset_tags_all</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_child_healthchecks` <a name="reset_child_healthchecks" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.resetChildHealthchecks"></a>

```python
def reset_child_healthchecks() -> None
```

##### `reset_child_health_threshold` <a name="reset_child_health_threshold" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.resetChildHealthThreshold"></a>

```python
def reset_child_health_threshold() -> None
```

##### `reset_cloudwatch_alarm_name` <a name="reset_cloudwatch_alarm_name" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.resetCloudwatchAlarmName"></a>

```python
def reset_cloudwatch_alarm_name() -> None
```

##### `reset_cloudwatch_alarm_region` <a name="reset_cloudwatch_alarm_region" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.resetCloudwatchAlarmRegion"></a>

```python
def reset_cloudwatch_alarm_region() -> None
```

##### `reset_disabled` <a name="reset_disabled" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.resetDisabled"></a>

```python
def reset_disabled() -> None
```

##### `reset_enable_sni` <a name="reset_enable_sni" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.resetEnableSni"></a>

```python
def reset_enable_sni() -> None
```

##### `reset_failure_threshold` <a name="reset_failure_threshold" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.resetFailureThreshold"></a>

```python
def reset_failure_threshold() -> None
```

##### `reset_fqdn` <a name="reset_fqdn" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.resetFqdn"></a>

```python
def reset_fqdn() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_insufficient_data_health_status` <a name="reset_insufficient_data_health_status" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.resetInsufficientDataHealthStatus"></a>

```python
def reset_insufficient_data_health_status() -> None
```

##### `reset_invert_healthcheck` <a name="reset_invert_healthcheck" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.resetInvertHealthcheck"></a>

```python
def reset_invert_healthcheck() -> None
```

##### `reset_ip_address` <a name="reset_ip_address" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.resetIpAddress"></a>

```python
def reset_ip_address() -> None
```

##### `reset_measure_latency` <a name="reset_measure_latency" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.resetMeasureLatency"></a>

```python
def reset_measure_latency() -> None
```

##### `reset_port` <a name="reset_port" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.resetPort"></a>

```python
def reset_port() -> None
```

##### `reset_reference_name` <a name="reset_reference_name" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.resetReferenceName"></a>

```python
def reset_reference_name() -> None
```

##### `reset_regions` <a name="reset_regions" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.resetRegions"></a>

```python
def reset_regions() -> None
```

##### `reset_request_interval` <a name="reset_request_interval" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.resetRequestInterval"></a>

```python
def reset_request_interval() -> None
```

##### `reset_resource_path` <a name="reset_resource_path" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.resetResourcePath"></a>

```python
def reset_resource_path() -> None
```

##### `reset_routing_control_arn` <a name="reset_routing_control_arn" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.resetRoutingControlArn"></a>

```python
def reset_routing_control_arn() -> None
```

##### `reset_search_string` <a name="reset_search_string" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.resetSearchString"></a>

```python
def reset_search_string() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_tags_all` <a name="reset_tags_all" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.resetTagsAll"></a>

```python
def reset_tags_all() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import route53_health_check

route53HealthCheck.Route53HealthCheck.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import route53_health_check

route53HealthCheck.Route53HealthCheck.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import route53_health_check

route53HealthCheck.Route53HealthCheck.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.childHealthchecksInput">child_healthchecks_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.childHealthThresholdInput">child_health_threshold_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.cloudwatchAlarmNameInput">cloudwatch_alarm_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.cloudwatchAlarmRegionInput">cloudwatch_alarm_region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.disabledInput">disabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.enableSniInput">enable_sni_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.failureThresholdInput">failure_threshold_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.fqdnInput">fqdn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.insufficientDataHealthStatusInput">insufficient_data_health_status_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.invertHealthcheckInput">invert_healthcheck_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.ipAddressInput">ip_address_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.measureLatencyInput">measure_latency_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.portInput">port_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.referenceNameInput">reference_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.regionsInput">regions_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.requestIntervalInput">request_interval_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.resourcePathInput">resource_path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.routingControlArnInput">routing_control_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.searchStringInput">search_string_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.tagsAllInput">tags_all_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.childHealthchecks">child_healthchecks</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.childHealthThreshold">child_health_threshold</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.cloudwatchAlarmName">cloudwatch_alarm_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.cloudwatchAlarmRegion">cloudwatch_alarm_region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.disabled">disabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.enableSni">enable_sni</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.failureThreshold">failure_threshold</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.fqdn">fqdn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.insufficientDataHealthStatus">insufficient_data_health_status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.invertHealthcheck">invert_healthcheck</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.ipAddress">ip_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.measureLatency">measure_latency</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.port">port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.referenceName">reference_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.regions">regions</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.requestInterval">request_interval</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.resourcePath">resource_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.routingControlArn">routing_control_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.searchString">search_string</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.type">type</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `child_healthchecks_input`<sup>Optional</sup> <a name="child_healthchecks_input" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.childHealthchecksInput"></a>

```python
child_healthchecks_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `child_health_threshold_input`<sup>Optional</sup> <a name="child_health_threshold_input" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.childHealthThresholdInput"></a>

```python
child_health_threshold_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `cloudwatch_alarm_name_input`<sup>Optional</sup> <a name="cloudwatch_alarm_name_input" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.cloudwatchAlarmNameInput"></a>

```python
cloudwatch_alarm_name_input: str
```

- *Type:* str

---

##### `cloudwatch_alarm_region_input`<sup>Optional</sup> <a name="cloudwatch_alarm_region_input" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.cloudwatchAlarmRegionInput"></a>

```python
cloudwatch_alarm_region_input: str
```

- *Type:* str

---

##### `disabled_input`<sup>Optional</sup> <a name="disabled_input" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.disabledInput"></a>

```python
disabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enable_sni_input`<sup>Optional</sup> <a name="enable_sni_input" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.enableSniInput"></a>

```python
enable_sni_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `failure_threshold_input`<sup>Optional</sup> <a name="failure_threshold_input" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.failureThresholdInput"></a>

```python
failure_threshold_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `fqdn_input`<sup>Optional</sup> <a name="fqdn_input" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.fqdnInput"></a>

```python
fqdn_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `insufficient_data_health_status_input`<sup>Optional</sup> <a name="insufficient_data_health_status_input" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.insufficientDataHealthStatusInput"></a>

```python
insufficient_data_health_status_input: str
```

- *Type:* str

---

##### `invert_healthcheck_input`<sup>Optional</sup> <a name="invert_healthcheck_input" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.invertHealthcheckInput"></a>

```python
invert_healthcheck_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `ip_address_input`<sup>Optional</sup> <a name="ip_address_input" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.ipAddressInput"></a>

```python
ip_address_input: str
```

- *Type:* str

---

##### `measure_latency_input`<sup>Optional</sup> <a name="measure_latency_input" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.measureLatencyInput"></a>

```python
measure_latency_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `port_input`<sup>Optional</sup> <a name="port_input" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.portInput"></a>

```python
port_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `reference_name_input`<sup>Optional</sup> <a name="reference_name_input" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.referenceNameInput"></a>

```python
reference_name_input: str
```

- *Type:* str

---

##### `regions_input`<sup>Optional</sup> <a name="regions_input" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.regionsInput"></a>

```python
regions_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `request_interval_input`<sup>Optional</sup> <a name="request_interval_input" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.requestIntervalInput"></a>

```python
request_interval_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `resource_path_input`<sup>Optional</sup> <a name="resource_path_input" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.resourcePathInput"></a>

```python
resource_path_input: str
```

- *Type:* str

---

##### `routing_control_arn_input`<sup>Optional</sup> <a name="routing_control_arn_input" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.routingControlArnInput"></a>

```python
routing_control_arn_input: str
```

- *Type:* str

---

##### `search_string_input`<sup>Optional</sup> <a name="search_string_input" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.searchStringInput"></a>

```python
search_string_input: str
```

- *Type:* str

---

##### `tags_all_input`<sup>Optional</sup> <a name="tags_all_input" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.tagsAllInput"></a>

```python
tags_all_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `child_healthchecks`<sup>Required</sup> <a name="child_healthchecks" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.childHealthchecks"></a>

```python
child_healthchecks: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `child_health_threshold`<sup>Required</sup> <a name="child_health_threshold" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.childHealthThreshold"></a>

```python
child_health_threshold: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `cloudwatch_alarm_name`<sup>Required</sup> <a name="cloudwatch_alarm_name" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.cloudwatchAlarmName"></a>

```python
cloudwatch_alarm_name: str
```

- *Type:* str

---

##### `cloudwatch_alarm_region`<sup>Required</sup> <a name="cloudwatch_alarm_region" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.cloudwatchAlarmRegion"></a>

```python
cloudwatch_alarm_region: str
```

- *Type:* str

---

##### `disabled`<sup>Required</sup> <a name="disabled" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.disabled"></a>

```python
disabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enable_sni`<sup>Required</sup> <a name="enable_sni" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.enableSni"></a>

```python
enable_sni: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `failure_threshold`<sup>Required</sup> <a name="failure_threshold" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.failureThreshold"></a>

```python
failure_threshold: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `fqdn`<sup>Required</sup> <a name="fqdn" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.fqdn"></a>

```python
fqdn: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `insufficient_data_health_status`<sup>Required</sup> <a name="insufficient_data_health_status" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.insufficientDataHealthStatus"></a>

```python
insufficient_data_health_status: str
```

- *Type:* str

---

##### `invert_healthcheck`<sup>Required</sup> <a name="invert_healthcheck" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.invertHealthcheck"></a>

```python
invert_healthcheck: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `ip_address`<sup>Required</sup> <a name="ip_address" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.ipAddress"></a>

```python
ip_address: str
```

- *Type:* str

---

##### `measure_latency`<sup>Required</sup> <a name="measure_latency" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.measureLatency"></a>

```python
measure_latency: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `reference_name`<sup>Required</sup> <a name="reference_name" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.referenceName"></a>

```python
reference_name: str
```

- *Type:* str

---

##### `regions`<sup>Required</sup> <a name="regions" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.regions"></a>

```python
regions: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `request_interval`<sup>Required</sup> <a name="request_interval" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.requestInterval"></a>

```python
request_interval: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `resource_path`<sup>Required</sup> <a name="resource_path" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.resourcePath"></a>

```python
resource_path: str
```

- *Type:* str

---

##### `routing_control_arn`<sup>Required</sup> <a name="routing_control_arn" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.routingControlArn"></a>

```python
routing_control_arn: str
```

- *Type:* str

---

##### `search_string`<sup>Required</sup> <a name="search_string" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.searchString"></a>

```python
search_string: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_all`<sup>Required</sup> <a name="tags_all" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.type"></a>

```python
type: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheck.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### Route53HealthCheckConfig <a name="Route53HealthCheckConfig" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheckConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheckConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import route53_health_check

route53HealthCheck.Route53HealthCheckConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  type: str,
  child_healthchecks: typing.List[str] = None,
  child_health_threshold: typing.Union[int, float] = None,
  cloudwatch_alarm_name: str = None,
  cloudwatch_alarm_region: str = None,
  disabled: typing.Union[bool, IResolvable] = None,
  enable_sni: typing.Union[bool, IResolvable] = None,
  failure_threshold: typing.Union[int, float] = None,
  fqdn: str = None,
  id: str = None,
  insufficient_data_health_status: str = None,
  invert_healthcheck: typing.Union[bool, IResolvable] = None,
  ip_address: str = None,
  measure_latency: typing.Union[bool, IResolvable] = None,
  port: typing.Union[int, float] = None,
  reference_name: str = None,
  regions: typing.List[str] = None,
  request_interval: typing.Union[int, float] = None,
  resource_path: str = None,
  routing_control_arn: str = None,
  search_string: str = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheckConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheckConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheckConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheckConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheckConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheckConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheckConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheckConfig.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_health_check#type Route53HealthCheck#type}. |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheckConfig.property.childHealthchecks">child_healthchecks</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_health_check#child_healthchecks Route53HealthCheck#child_healthchecks}. |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheckConfig.property.childHealthThreshold">child_health_threshold</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_health_check#child_health_threshold Route53HealthCheck#child_health_threshold}. |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheckConfig.property.cloudwatchAlarmName">cloudwatch_alarm_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_health_check#cloudwatch_alarm_name Route53HealthCheck#cloudwatch_alarm_name}. |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheckConfig.property.cloudwatchAlarmRegion">cloudwatch_alarm_region</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_health_check#cloudwatch_alarm_region Route53HealthCheck#cloudwatch_alarm_region}. |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheckConfig.property.disabled">disabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_health_check#disabled Route53HealthCheck#disabled}. |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheckConfig.property.enableSni">enable_sni</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_health_check#enable_sni Route53HealthCheck#enable_sni}. |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheckConfig.property.failureThreshold">failure_threshold</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_health_check#failure_threshold Route53HealthCheck#failure_threshold}. |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheckConfig.property.fqdn">fqdn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_health_check#fqdn Route53HealthCheck#fqdn}. |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheckConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_health_check#id Route53HealthCheck#id}. |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheckConfig.property.insufficientDataHealthStatus">insufficient_data_health_status</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_health_check#insufficient_data_health_status Route53HealthCheck#insufficient_data_health_status}. |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheckConfig.property.invertHealthcheck">invert_healthcheck</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_health_check#invert_healthcheck Route53HealthCheck#invert_healthcheck}. |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheckConfig.property.ipAddress">ip_address</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_health_check#ip_address Route53HealthCheck#ip_address}. |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheckConfig.property.measureLatency">measure_latency</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_health_check#measure_latency Route53HealthCheck#measure_latency}. |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheckConfig.property.port">port</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_health_check#port Route53HealthCheck#port}. |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheckConfig.property.referenceName">reference_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_health_check#reference_name Route53HealthCheck#reference_name}. |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheckConfig.property.regions">regions</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_health_check#regions Route53HealthCheck#regions}. |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheckConfig.property.requestInterval">request_interval</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_health_check#request_interval Route53HealthCheck#request_interval}. |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheckConfig.property.resourcePath">resource_path</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_health_check#resource_path Route53HealthCheck#resource_path}. |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheckConfig.property.routingControlArn">routing_control_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_health_check#routing_control_arn Route53HealthCheck#routing_control_arn}. |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheckConfig.property.searchString">search_string</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_health_check#search_string Route53HealthCheck#search_string}. |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheckConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_health_check#tags Route53HealthCheck#tags}. |
| <code><a href="#@cdktf/provider-aws.route53HealthCheck.Route53HealthCheckConfig.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_health_check#tags_all Route53HealthCheck#tags_all}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheckConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheckConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheckConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheckConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheckConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheckConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheckConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheckConfig.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_health_check#type Route53HealthCheck#type}.

---

##### `child_healthchecks`<sup>Optional</sup> <a name="child_healthchecks" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheckConfig.property.childHealthchecks"></a>

```python
child_healthchecks: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_health_check#child_healthchecks Route53HealthCheck#child_healthchecks}.

---

##### `child_health_threshold`<sup>Optional</sup> <a name="child_health_threshold" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheckConfig.property.childHealthThreshold"></a>

```python
child_health_threshold: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_health_check#child_health_threshold Route53HealthCheck#child_health_threshold}.

---

##### `cloudwatch_alarm_name`<sup>Optional</sup> <a name="cloudwatch_alarm_name" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheckConfig.property.cloudwatchAlarmName"></a>

```python
cloudwatch_alarm_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_health_check#cloudwatch_alarm_name Route53HealthCheck#cloudwatch_alarm_name}.

---

##### `cloudwatch_alarm_region`<sup>Optional</sup> <a name="cloudwatch_alarm_region" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheckConfig.property.cloudwatchAlarmRegion"></a>

```python
cloudwatch_alarm_region: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_health_check#cloudwatch_alarm_region Route53HealthCheck#cloudwatch_alarm_region}.

---

##### `disabled`<sup>Optional</sup> <a name="disabled" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheckConfig.property.disabled"></a>

```python
disabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_health_check#disabled Route53HealthCheck#disabled}.

---

##### `enable_sni`<sup>Optional</sup> <a name="enable_sni" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheckConfig.property.enableSni"></a>

```python
enable_sni: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_health_check#enable_sni Route53HealthCheck#enable_sni}.

---

##### `failure_threshold`<sup>Optional</sup> <a name="failure_threshold" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheckConfig.property.failureThreshold"></a>

```python
failure_threshold: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_health_check#failure_threshold Route53HealthCheck#failure_threshold}.

---

##### `fqdn`<sup>Optional</sup> <a name="fqdn" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheckConfig.property.fqdn"></a>

```python
fqdn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_health_check#fqdn Route53HealthCheck#fqdn}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheckConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_health_check#id Route53HealthCheck#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `insufficient_data_health_status`<sup>Optional</sup> <a name="insufficient_data_health_status" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheckConfig.property.insufficientDataHealthStatus"></a>

```python
insufficient_data_health_status: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_health_check#insufficient_data_health_status Route53HealthCheck#insufficient_data_health_status}.

---

##### `invert_healthcheck`<sup>Optional</sup> <a name="invert_healthcheck" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheckConfig.property.invertHealthcheck"></a>

```python
invert_healthcheck: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_health_check#invert_healthcheck Route53HealthCheck#invert_healthcheck}.

---

##### `ip_address`<sup>Optional</sup> <a name="ip_address" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheckConfig.property.ipAddress"></a>

```python
ip_address: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_health_check#ip_address Route53HealthCheck#ip_address}.

---

##### `measure_latency`<sup>Optional</sup> <a name="measure_latency" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheckConfig.property.measureLatency"></a>

```python
measure_latency: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_health_check#measure_latency Route53HealthCheck#measure_latency}.

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheckConfig.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_health_check#port Route53HealthCheck#port}.

---

##### `reference_name`<sup>Optional</sup> <a name="reference_name" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheckConfig.property.referenceName"></a>

```python
reference_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_health_check#reference_name Route53HealthCheck#reference_name}.

---

##### `regions`<sup>Optional</sup> <a name="regions" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheckConfig.property.regions"></a>

```python
regions: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_health_check#regions Route53HealthCheck#regions}.

---

##### `request_interval`<sup>Optional</sup> <a name="request_interval" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheckConfig.property.requestInterval"></a>

```python
request_interval: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_health_check#request_interval Route53HealthCheck#request_interval}.

---

##### `resource_path`<sup>Optional</sup> <a name="resource_path" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheckConfig.property.resourcePath"></a>

```python
resource_path: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_health_check#resource_path Route53HealthCheck#resource_path}.

---

##### `routing_control_arn`<sup>Optional</sup> <a name="routing_control_arn" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheckConfig.property.routingControlArn"></a>

```python
routing_control_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_health_check#routing_control_arn Route53HealthCheck#routing_control_arn}.

---

##### `search_string`<sup>Optional</sup> <a name="search_string" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheckConfig.property.searchString"></a>

```python
search_string: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_health_check#search_string Route53HealthCheck#search_string}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheckConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_health_check#tags Route53HealthCheck#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.route53HealthCheck.Route53HealthCheckConfig.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_health_check#tags_all Route53HealthCheck#tags_all}.

---



