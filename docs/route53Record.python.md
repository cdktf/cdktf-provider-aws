# `route53Record` Submodule <a name="`route53Record` Submodule" id="@cdktf/provider-aws.route53Record"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Route53Record <a name="Route53Record" id="@cdktf/provider-aws.route53Record.Route53Record"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/route53_record aws_route53_record}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.route53Record.Route53Record.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import route53_record

route53Record.Route53Record(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  type: str,
  zone_id: str,
  alias: Route53RecordAlias = None,
  allow_overwrite: typing.Union[bool, IResolvable] = None,
  cidr_routing_policy: Route53RecordCidrRoutingPolicy = None,
  failover_routing_policy: Route53RecordFailoverRoutingPolicy = None,
  geolocation_routing_policy: Route53RecordGeolocationRoutingPolicy = None,
  health_check_id: str = None,
  id: str = None,
  latency_routing_policy: Route53RecordLatencyRoutingPolicy = None,
  multivalue_answer_routing_policy: typing.Union[bool, IResolvable] = None,
  records: typing.List[str] = None,
  set_identifier: str = None,
  ttl: typing.Union[int, float] = None,
  weighted_routing_policy: Route53RecordWeightedRoutingPolicy = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53Record.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53Record.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53Record.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53Record.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53Record.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53Record.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53Record.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53Record.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53Record.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53Record.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_record#name Route53Record#name}. |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53Record.Initializer.parameter.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_record#type Route53Record#type}. |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53Record.Initializer.parameter.zoneId">zone_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_record#zone_id Route53Record#zone_id}. |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53Record.Initializer.parameter.alias">alias</a></code> | <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordAlias">Route53RecordAlias</a></code> | alias block. |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53Record.Initializer.parameter.allowOverwrite">allow_overwrite</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_record#allow_overwrite Route53Record#allow_overwrite}. |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53Record.Initializer.parameter.cidrRoutingPolicy">cidr_routing_policy</a></code> | <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordCidrRoutingPolicy">Route53RecordCidrRoutingPolicy</a></code> | cidr_routing_policy block. |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53Record.Initializer.parameter.failoverRoutingPolicy">failover_routing_policy</a></code> | <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordFailoverRoutingPolicy">Route53RecordFailoverRoutingPolicy</a></code> | failover_routing_policy block. |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53Record.Initializer.parameter.geolocationRoutingPolicy">geolocation_routing_policy</a></code> | <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordGeolocationRoutingPolicy">Route53RecordGeolocationRoutingPolicy</a></code> | geolocation_routing_policy block. |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53Record.Initializer.parameter.healthCheckId">health_check_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_record#health_check_id Route53Record#health_check_id}. |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53Record.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_record#id Route53Record#id}. |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53Record.Initializer.parameter.latencyRoutingPolicy">latency_routing_policy</a></code> | <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordLatencyRoutingPolicy">Route53RecordLatencyRoutingPolicy</a></code> | latency_routing_policy block. |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53Record.Initializer.parameter.multivalueAnswerRoutingPolicy">multivalue_answer_routing_policy</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_record#multivalue_answer_routing_policy Route53Record#multivalue_answer_routing_policy}. |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53Record.Initializer.parameter.records">records</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_record#records Route53Record#records}. |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53Record.Initializer.parameter.setIdentifier">set_identifier</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_record#set_identifier Route53Record#set_identifier}. |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53Record.Initializer.parameter.ttl">ttl</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_record#ttl Route53Record#ttl}. |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53Record.Initializer.parameter.weightedRoutingPolicy">weighted_routing_policy</a></code> | <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordWeightedRoutingPolicy">Route53RecordWeightedRoutingPolicy</a></code> | weighted_routing_policy block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.route53Record.Route53Record.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.route53Record.Route53Record.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.route53Record.Route53Record.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.route53Record.Route53Record.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.route53Record.Route53Record.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.route53Record.Route53Record.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.route53Record.Route53Record.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.route53Record.Route53Record.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.route53Record.Route53Record.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.route53Record.Route53Record.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_record#name Route53Record#name}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.route53Record.Route53Record.Initializer.parameter.type"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_record#type Route53Record#type}.

---

##### `zone_id`<sup>Required</sup> <a name="zone_id" id="@cdktf/provider-aws.route53Record.Route53Record.Initializer.parameter.zoneId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_record#zone_id Route53Record#zone_id}.

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@cdktf/provider-aws.route53Record.Route53Record.Initializer.parameter.alias"></a>

- *Type:* <a href="#@cdktf/provider-aws.route53Record.Route53RecordAlias">Route53RecordAlias</a>

alias block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_record#alias Route53Record#alias}

---

##### `allow_overwrite`<sup>Optional</sup> <a name="allow_overwrite" id="@cdktf/provider-aws.route53Record.Route53Record.Initializer.parameter.allowOverwrite"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_record#allow_overwrite Route53Record#allow_overwrite}.

---

##### `cidr_routing_policy`<sup>Optional</sup> <a name="cidr_routing_policy" id="@cdktf/provider-aws.route53Record.Route53Record.Initializer.parameter.cidrRoutingPolicy"></a>

- *Type:* <a href="#@cdktf/provider-aws.route53Record.Route53RecordCidrRoutingPolicy">Route53RecordCidrRoutingPolicy</a>

cidr_routing_policy block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_record#cidr_routing_policy Route53Record#cidr_routing_policy}

---

##### `failover_routing_policy`<sup>Optional</sup> <a name="failover_routing_policy" id="@cdktf/provider-aws.route53Record.Route53Record.Initializer.parameter.failoverRoutingPolicy"></a>

- *Type:* <a href="#@cdktf/provider-aws.route53Record.Route53RecordFailoverRoutingPolicy">Route53RecordFailoverRoutingPolicy</a>

failover_routing_policy block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_record#failover_routing_policy Route53Record#failover_routing_policy}

---

##### `geolocation_routing_policy`<sup>Optional</sup> <a name="geolocation_routing_policy" id="@cdktf/provider-aws.route53Record.Route53Record.Initializer.parameter.geolocationRoutingPolicy"></a>

- *Type:* <a href="#@cdktf/provider-aws.route53Record.Route53RecordGeolocationRoutingPolicy">Route53RecordGeolocationRoutingPolicy</a>

geolocation_routing_policy block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_record#geolocation_routing_policy Route53Record#geolocation_routing_policy}

---

##### `health_check_id`<sup>Optional</sup> <a name="health_check_id" id="@cdktf/provider-aws.route53Record.Route53Record.Initializer.parameter.healthCheckId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_record#health_check_id Route53Record#health_check_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.route53Record.Route53Record.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_record#id Route53Record#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `latency_routing_policy`<sup>Optional</sup> <a name="latency_routing_policy" id="@cdktf/provider-aws.route53Record.Route53Record.Initializer.parameter.latencyRoutingPolicy"></a>

- *Type:* <a href="#@cdktf/provider-aws.route53Record.Route53RecordLatencyRoutingPolicy">Route53RecordLatencyRoutingPolicy</a>

latency_routing_policy block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_record#latency_routing_policy Route53Record#latency_routing_policy}

---

##### `multivalue_answer_routing_policy`<sup>Optional</sup> <a name="multivalue_answer_routing_policy" id="@cdktf/provider-aws.route53Record.Route53Record.Initializer.parameter.multivalueAnswerRoutingPolicy"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_record#multivalue_answer_routing_policy Route53Record#multivalue_answer_routing_policy}.

---

##### `records`<sup>Optional</sup> <a name="records" id="@cdktf/provider-aws.route53Record.Route53Record.Initializer.parameter.records"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_record#records Route53Record#records}.

---

##### `set_identifier`<sup>Optional</sup> <a name="set_identifier" id="@cdktf/provider-aws.route53Record.Route53Record.Initializer.parameter.setIdentifier"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_record#set_identifier Route53Record#set_identifier}.

---

##### `ttl`<sup>Optional</sup> <a name="ttl" id="@cdktf/provider-aws.route53Record.Route53Record.Initializer.parameter.ttl"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_record#ttl Route53Record#ttl}.

---

##### `weighted_routing_policy`<sup>Optional</sup> <a name="weighted_routing_policy" id="@cdktf/provider-aws.route53Record.Route53Record.Initializer.parameter.weightedRoutingPolicy"></a>

- *Type:* <a href="#@cdktf/provider-aws.route53Record.Route53RecordWeightedRoutingPolicy">Route53RecordWeightedRoutingPolicy</a>

weighted_routing_policy block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_record#weighted_routing_policy Route53Record#weighted_routing_policy}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53Record.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53Record.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53Record.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53Record.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53Record.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53Record.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53Record.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53Record.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53Record.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53Record.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53Record.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53Record.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53Record.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53Record.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53Record.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53Record.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53Record.putAlias">put_alias</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53Record.putCidrRoutingPolicy">put_cidr_routing_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53Record.putFailoverRoutingPolicy">put_failover_routing_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53Record.putGeolocationRoutingPolicy">put_geolocation_routing_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53Record.putLatencyRoutingPolicy">put_latency_routing_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53Record.putWeightedRoutingPolicy">put_weighted_routing_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53Record.resetAlias">reset_alias</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53Record.resetAllowOverwrite">reset_allow_overwrite</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53Record.resetCidrRoutingPolicy">reset_cidr_routing_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53Record.resetFailoverRoutingPolicy">reset_failover_routing_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53Record.resetGeolocationRoutingPolicy">reset_geolocation_routing_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53Record.resetHealthCheckId">reset_health_check_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53Record.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53Record.resetLatencyRoutingPolicy">reset_latency_routing_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53Record.resetMultivalueAnswerRoutingPolicy">reset_multivalue_answer_routing_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53Record.resetRecords">reset_records</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53Record.resetSetIdentifier">reset_set_identifier</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53Record.resetTtl">reset_ttl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53Record.resetWeightedRoutingPolicy">reset_weighted_routing_policy</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.route53Record.Route53Record.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.route53Record.Route53Record.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.route53Record.Route53Record.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.route53Record.Route53Record.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.route53Record.Route53Record.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.route53Record.Route53Record.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.route53Record.Route53Record.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.route53Record.Route53Record.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.route53Record.Route53Record.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.route53Record.Route53Record.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53Record.Route53Record.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.route53Record.Route53Record.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53Record.Route53Record.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.route53Record.Route53Record.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53Record.Route53Record.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.route53Record.Route53Record.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53Record.Route53Record.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.route53Record.Route53Record.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53Record.Route53Record.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.route53Record.Route53Record.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53Record.Route53Record.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.route53Record.Route53Record.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53Record.Route53Record.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.route53Record.Route53Record.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53Record.Route53Record.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.route53Record.Route53Record.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53Record.Route53Record.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.route53Record.Route53Record.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53Record.Route53Record.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_alias` <a name="put_alias" id="@cdktf/provider-aws.route53Record.Route53Record.putAlias"></a>

```python
def put_alias(
  evaluate_target_health: typing.Union[bool, IResolvable],
  name: str,
  zone_id: str
) -> None
```

###### `evaluate_target_health`<sup>Required</sup> <a name="evaluate_target_health" id="@cdktf/provider-aws.route53Record.Route53Record.putAlias.parameter.evaluateTargetHealth"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_record#evaluate_target_health Route53Record#evaluate_target_health}.

---

###### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.route53Record.Route53Record.putAlias.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_record#name Route53Record#name}.

---

###### `zone_id`<sup>Required</sup> <a name="zone_id" id="@cdktf/provider-aws.route53Record.Route53Record.putAlias.parameter.zoneId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_record#zone_id Route53Record#zone_id}.

---

##### `put_cidr_routing_policy` <a name="put_cidr_routing_policy" id="@cdktf/provider-aws.route53Record.Route53Record.putCidrRoutingPolicy"></a>

```python
def put_cidr_routing_policy(
  collection_id: str,
  location_name: str
) -> None
```

###### `collection_id`<sup>Required</sup> <a name="collection_id" id="@cdktf/provider-aws.route53Record.Route53Record.putCidrRoutingPolicy.parameter.collectionId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_record#collection_id Route53Record#collection_id}.

---

###### `location_name`<sup>Required</sup> <a name="location_name" id="@cdktf/provider-aws.route53Record.Route53Record.putCidrRoutingPolicy.parameter.locationName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_record#location_name Route53Record#location_name}.

---

##### `put_failover_routing_policy` <a name="put_failover_routing_policy" id="@cdktf/provider-aws.route53Record.Route53Record.putFailoverRoutingPolicy"></a>

```python
def put_failover_routing_policy(
  type: str
) -> None
```

###### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.route53Record.Route53Record.putFailoverRoutingPolicy.parameter.type"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_record#type Route53Record#type}.

---

##### `put_geolocation_routing_policy` <a name="put_geolocation_routing_policy" id="@cdktf/provider-aws.route53Record.Route53Record.putGeolocationRoutingPolicy"></a>

```python
def put_geolocation_routing_policy(
  continent: str = None,
  country: str = None,
  subdivision: str = None
) -> None
```

###### `continent`<sup>Optional</sup> <a name="continent" id="@cdktf/provider-aws.route53Record.Route53Record.putGeolocationRoutingPolicy.parameter.continent"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_record#continent Route53Record#continent}.

---

###### `country`<sup>Optional</sup> <a name="country" id="@cdktf/provider-aws.route53Record.Route53Record.putGeolocationRoutingPolicy.parameter.country"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_record#country Route53Record#country}.

---

###### `subdivision`<sup>Optional</sup> <a name="subdivision" id="@cdktf/provider-aws.route53Record.Route53Record.putGeolocationRoutingPolicy.parameter.subdivision"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_record#subdivision Route53Record#subdivision}.

---

##### `put_latency_routing_policy` <a name="put_latency_routing_policy" id="@cdktf/provider-aws.route53Record.Route53Record.putLatencyRoutingPolicy"></a>

```python
def put_latency_routing_policy(
  region: str
) -> None
```

###### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-aws.route53Record.Route53Record.putLatencyRoutingPolicy.parameter.region"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_record#region Route53Record#region}.

---

##### `put_weighted_routing_policy` <a name="put_weighted_routing_policy" id="@cdktf/provider-aws.route53Record.Route53Record.putWeightedRoutingPolicy"></a>

```python
def put_weighted_routing_policy(
  weight: typing.Union[int, float]
) -> None
```

###### `weight`<sup>Required</sup> <a name="weight" id="@cdktf/provider-aws.route53Record.Route53Record.putWeightedRoutingPolicy.parameter.weight"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_record#weight Route53Record#weight}.

---

##### `reset_alias` <a name="reset_alias" id="@cdktf/provider-aws.route53Record.Route53Record.resetAlias"></a>

```python
def reset_alias() -> None
```

##### `reset_allow_overwrite` <a name="reset_allow_overwrite" id="@cdktf/provider-aws.route53Record.Route53Record.resetAllowOverwrite"></a>

```python
def reset_allow_overwrite() -> None
```

##### `reset_cidr_routing_policy` <a name="reset_cidr_routing_policy" id="@cdktf/provider-aws.route53Record.Route53Record.resetCidrRoutingPolicy"></a>

```python
def reset_cidr_routing_policy() -> None
```

##### `reset_failover_routing_policy` <a name="reset_failover_routing_policy" id="@cdktf/provider-aws.route53Record.Route53Record.resetFailoverRoutingPolicy"></a>

```python
def reset_failover_routing_policy() -> None
```

##### `reset_geolocation_routing_policy` <a name="reset_geolocation_routing_policy" id="@cdktf/provider-aws.route53Record.Route53Record.resetGeolocationRoutingPolicy"></a>

```python
def reset_geolocation_routing_policy() -> None
```

##### `reset_health_check_id` <a name="reset_health_check_id" id="@cdktf/provider-aws.route53Record.Route53Record.resetHealthCheckId"></a>

```python
def reset_health_check_id() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.route53Record.Route53Record.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_latency_routing_policy` <a name="reset_latency_routing_policy" id="@cdktf/provider-aws.route53Record.Route53Record.resetLatencyRoutingPolicy"></a>

```python
def reset_latency_routing_policy() -> None
```

##### `reset_multivalue_answer_routing_policy` <a name="reset_multivalue_answer_routing_policy" id="@cdktf/provider-aws.route53Record.Route53Record.resetMultivalueAnswerRoutingPolicy"></a>

```python
def reset_multivalue_answer_routing_policy() -> None
```

##### `reset_records` <a name="reset_records" id="@cdktf/provider-aws.route53Record.Route53Record.resetRecords"></a>

```python
def reset_records() -> None
```

##### `reset_set_identifier` <a name="reset_set_identifier" id="@cdktf/provider-aws.route53Record.Route53Record.resetSetIdentifier"></a>

```python
def reset_set_identifier() -> None
```

##### `reset_ttl` <a name="reset_ttl" id="@cdktf/provider-aws.route53Record.Route53Record.resetTtl"></a>

```python
def reset_ttl() -> None
```

##### `reset_weighted_routing_policy` <a name="reset_weighted_routing_policy" id="@cdktf/provider-aws.route53Record.Route53Record.resetWeightedRoutingPolicy"></a>

```python
def reset_weighted_routing_policy() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53Record.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53Record.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53Record.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.route53Record.Route53Record.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import route53_record

route53Record.Route53Record.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.route53Record.Route53Record.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.route53Record.Route53Record.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import route53_record

route53Record.Route53Record.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.route53Record.Route53Record.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.route53Record.Route53Record.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import route53_record

route53Record.Route53Record.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.route53Record.Route53Record.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53Record.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53Record.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53Record.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53Record.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53Record.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53Record.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53Record.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53Record.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53Record.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53Record.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53Record.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53Record.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53Record.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53Record.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53Record.property.alias">alias</a></code> | <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordAliasOutputReference">Route53RecordAliasOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53Record.property.cidrRoutingPolicy">cidr_routing_policy</a></code> | <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordCidrRoutingPolicyOutputReference">Route53RecordCidrRoutingPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53Record.property.failoverRoutingPolicy">failover_routing_policy</a></code> | <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordFailoverRoutingPolicyOutputReference">Route53RecordFailoverRoutingPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53Record.property.fqdn">fqdn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53Record.property.geolocationRoutingPolicy">geolocation_routing_policy</a></code> | <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordGeolocationRoutingPolicyOutputReference">Route53RecordGeolocationRoutingPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53Record.property.latencyRoutingPolicy">latency_routing_policy</a></code> | <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordLatencyRoutingPolicyOutputReference">Route53RecordLatencyRoutingPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53Record.property.weightedRoutingPolicy">weighted_routing_policy</a></code> | <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordWeightedRoutingPolicyOutputReference">Route53RecordWeightedRoutingPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53Record.property.aliasInput">alias_input</a></code> | <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordAlias">Route53RecordAlias</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53Record.property.allowOverwriteInput">allow_overwrite_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53Record.property.cidrRoutingPolicyInput">cidr_routing_policy_input</a></code> | <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordCidrRoutingPolicy">Route53RecordCidrRoutingPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53Record.property.failoverRoutingPolicyInput">failover_routing_policy_input</a></code> | <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordFailoverRoutingPolicy">Route53RecordFailoverRoutingPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53Record.property.geolocationRoutingPolicyInput">geolocation_routing_policy_input</a></code> | <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordGeolocationRoutingPolicy">Route53RecordGeolocationRoutingPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53Record.property.healthCheckIdInput">health_check_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53Record.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53Record.property.latencyRoutingPolicyInput">latency_routing_policy_input</a></code> | <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordLatencyRoutingPolicy">Route53RecordLatencyRoutingPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53Record.property.multivalueAnswerRoutingPolicyInput">multivalue_answer_routing_policy_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53Record.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53Record.property.recordsInput">records_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53Record.property.setIdentifierInput">set_identifier_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53Record.property.ttlInput">ttl_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53Record.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53Record.property.weightedRoutingPolicyInput">weighted_routing_policy_input</a></code> | <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordWeightedRoutingPolicy">Route53RecordWeightedRoutingPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53Record.property.zoneIdInput">zone_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53Record.property.allowOverwrite">allow_overwrite</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53Record.property.healthCheckId">health_check_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53Record.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53Record.property.multivalueAnswerRoutingPolicy">multivalue_answer_routing_policy</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53Record.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53Record.property.records">records</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53Record.property.setIdentifier">set_identifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53Record.property.ttl">ttl</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53Record.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53Record.property.zoneId">zone_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.route53Record.Route53Record.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.route53Record.Route53Record.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.route53Record.Route53Record.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.route53Record.Route53Record.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.route53Record.Route53Record.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.route53Record.Route53Record.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.route53Record.Route53Record.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.route53Record.Route53Record.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.route53Record.Route53Record.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.route53Record.Route53Record.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.route53Record.Route53Record.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.route53Record.Route53Record.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.route53Record.Route53Record.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.route53Record.Route53Record.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `alias`<sup>Required</sup> <a name="alias" id="@cdktf/provider-aws.route53Record.Route53Record.property.alias"></a>

```python
alias: Route53RecordAliasOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.route53Record.Route53RecordAliasOutputReference">Route53RecordAliasOutputReference</a>

---

##### `cidr_routing_policy`<sup>Required</sup> <a name="cidr_routing_policy" id="@cdktf/provider-aws.route53Record.Route53Record.property.cidrRoutingPolicy"></a>

```python
cidr_routing_policy: Route53RecordCidrRoutingPolicyOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.route53Record.Route53RecordCidrRoutingPolicyOutputReference">Route53RecordCidrRoutingPolicyOutputReference</a>

---

##### `failover_routing_policy`<sup>Required</sup> <a name="failover_routing_policy" id="@cdktf/provider-aws.route53Record.Route53Record.property.failoverRoutingPolicy"></a>

```python
failover_routing_policy: Route53RecordFailoverRoutingPolicyOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.route53Record.Route53RecordFailoverRoutingPolicyOutputReference">Route53RecordFailoverRoutingPolicyOutputReference</a>

---

##### `fqdn`<sup>Required</sup> <a name="fqdn" id="@cdktf/provider-aws.route53Record.Route53Record.property.fqdn"></a>

```python
fqdn: str
```

- *Type:* str

---

##### `geolocation_routing_policy`<sup>Required</sup> <a name="geolocation_routing_policy" id="@cdktf/provider-aws.route53Record.Route53Record.property.geolocationRoutingPolicy"></a>

```python
geolocation_routing_policy: Route53RecordGeolocationRoutingPolicyOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.route53Record.Route53RecordGeolocationRoutingPolicyOutputReference">Route53RecordGeolocationRoutingPolicyOutputReference</a>

---

##### `latency_routing_policy`<sup>Required</sup> <a name="latency_routing_policy" id="@cdktf/provider-aws.route53Record.Route53Record.property.latencyRoutingPolicy"></a>

```python
latency_routing_policy: Route53RecordLatencyRoutingPolicyOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.route53Record.Route53RecordLatencyRoutingPolicyOutputReference">Route53RecordLatencyRoutingPolicyOutputReference</a>

---

##### `weighted_routing_policy`<sup>Required</sup> <a name="weighted_routing_policy" id="@cdktf/provider-aws.route53Record.Route53Record.property.weightedRoutingPolicy"></a>

```python
weighted_routing_policy: Route53RecordWeightedRoutingPolicyOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.route53Record.Route53RecordWeightedRoutingPolicyOutputReference">Route53RecordWeightedRoutingPolicyOutputReference</a>

---

##### `alias_input`<sup>Optional</sup> <a name="alias_input" id="@cdktf/provider-aws.route53Record.Route53Record.property.aliasInput"></a>

```python
alias_input: Route53RecordAlias
```

- *Type:* <a href="#@cdktf/provider-aws.route53Record.Route53RecordAlias">Route53RecordAlias</a>

---

##### `allow_overwrite_input`<sup>Optional</sup> <a name="allow_overwrite_input" id="@cdktf/provider-aws.route53Record.Route53Record.property.allowOverwriteInput"></a>

```python
allow_overwrite_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `cidr_routing_policy_input`<sup>Optional</sup> <a name="cidr_routing_policy_input" id="@cdktf/provider-aws.route53Record.Route53Record.property.cidrRoutingPolicyInput"></a>

```python
cidr_routing_policy_input: Route53RecordCidrRoutingPolicy
```

- *Type:* <a href="#@cdktf/provider-aws.route53Record.Route53RecordCidrRoutingPolicy">Route53RecordCidrRoutingPolicy</a>

---

##### `failover_routing_policy_input`<sup>Optional</sup> <a name="failover_routing_policy_input" id="@cdktf/provider-aws.route53Record.Route53Record.property.failoverRoutingPolicyInput"></a>

```python
failover_routing_policy_input: Route53RecordFailoverRoutingPolicy
```

- *Type:* <a href="#@cdktf/provider-aws.route53Record.Route53RecordFailoverRoutingPolicy">Route53RecordFailoverRoutingPolicy</a>

---

##### `geolocation_routing_policy_input`<sup>Optional</sup> <a name="geolocation_routing_policy_input" id="@cdktf/provider-aws.route53Record.Route53Record.property.geolocationRoutingPolicyInput"></a>

```python
geolocation_routing_policy_input: Route53RecordGeolocationRoutingPolicy
```

- *Type:* <a href="#@cdktf/provider-aws.route53Record.Route53RecordGeolocationRoutingPolicy">Route53RecordGeolocationRoutingPolicy</a>

---

##### `health_check_id_input`<sup>Optional</sup> <a name="health_check_id_input" id="@cdktf/provider-aws.route53Record.Route53Record.property.healthCheckIdInput"></a>

```python
health_check_id_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.route53Record.Route53Record.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `latency_routing_policy_input`<sup>Optional</sup> <a name="latency_routing_policy_input" id="@cdktf/provider-aws.route53Record.Route53Record.property.latencyRoutingPolicyInput"></a>

```python
latency_routing_policy_input: Route53RecordLatencyRoutingPolicy
```

- *Type:* <a href="#@cdktf/provider-aws.route53Record.Route53RecordLatencyRoutingPolicy">Route53RecordLatencyRoutingPolicy</a>

---

##### `multivalue_answer_routing_policy_input`<sup>Optional</sup> <a name="multivalue_answer_routing_policy_input" id="@cdktf/provider-aws.route53Record.Route53Record.property.multivalueAnswerRoutingPolicyInput"></a>

```python
multivalue_answer_routing_policy_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-aws.route53Record.Route53Record.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `records_input`<sup>Optional</sup> <a name="records_input" id="@cdktf/provider-aws.route53Record.Route53Record.property.recordsInput"></a>

```python
records_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `set_identifier_input`<sup>Optional</sup> <a name="set_identifier_input" id="@cdktf/provider-aws.route53Record.Route53Record.property.setIdentifierInput"></a>

```python
set_identifier_input: str
```

- *Type:* str

---

##### `ttl_input`<sup>Optional</sup> <a name="ttl_input" id="@cdktf/provider-aws.route53Record.Route53Record.property.ttlInput"></a>

```python
ttl_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-aws.route53Record.Route53Record.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `weighted_routing_policy_input`<sup>Optional</sup> <a name="weighted_routing_policy_input" id="@cdktf/provider-aws.route53Record.Route53Record.property.weightedRoutingPolicyInput"></a>

```python
weighted_routing_policy_input: Route53RecordWeightedRoutingPolicy
```

- *Type:* <a href="#@cdktf/provider-aws.route53Record.Route53RecordWeightedRoutingPolicy">Route53RecordWeightedRoutingPolicy</a>

---

##### `zone_id_input`<sup>Optional</sup> <a name="zone_id_input" id="@cdktf/provider-aws.route53Record.Route53Record.property.zoneIdInput"></a>

```python
zone_id_input: str
```

- *Type:* str

---

##### `allow_overwrite`<sup>Required</sup> <a name="allow_overwrite" id="@cdktf/provider-aws.route53Record.Route53Record.property.allowOverwrite"></a>

```python
allow_overwrite: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `health_check_id`<sup>Required</sup> <a name="health_check_id" id="@cdktf/provider-aws.route53Record.Route53Record.property.healthCheckId"></a>

```python
health_check_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.route53Record.Route53Record.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `multivalue_answer_routing_policy`<sup>Required</sup> <a name="multivalue_answer_routing_policy" id="@cdktf/provider-aws.route53Record.Route53Record.property.multivalueAnswerRoutingPolicy"></a>

```python
multivalue_answer_routing_policy: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.route53Record.Route53Record.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `records`<sup>Required</sup> <a name="records" id="@cdktf/provider-aws.route53Record.Route53Record.property.records"></a>

```python
records: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `set_identifier`<sup>Required</sup> <a name="set_identifier" id="@cdktf/provider-aws.route53Record.Route53Record.property.setIdentifier"></a>

```python
set_identifier: str
```

- *Type:* str

---

##### `ttl`<sup>Required</sup> <a name="ttl" id="@cdktf/provider-aws.route53Record.Route53Record.property.ttl"></a>

```python
ttl: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.route53Record.Route53Record.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `zone_id`<sup>Required</sup> <a name="zone_id" id="@cdktf/provider-aws.route53Record.Route53Record.property.zoneId"></a>

```python
zone_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53Record.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.route53Record.Route53Record.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### Route53RecordAlias <a name="Route53RecordAlias" id="@cdktf/provider-aws.route53Record.Route53RecordAlias"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.route53Record.Route53RecordAlias.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import route53_record

route53Record.Route53RecordAlias(
  evaluate_target_health: typing.Union[bool, IResolvable],
  name: str,
  zone_id: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordAlias.property.evaluateTargetHealth">evaluate_target_health</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_record#evaluate_target_health Route53Record#evaluate_target_health}. |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordAlias.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_record#name Route53Record#name}. |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordAlias.property.zoneId">zone_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_record#zone_id Route53Record#zone_id}. |

---

##### `evaluate_target_health`<sup>Required</sup> <a name="evaluate_target_health" id="@cdktf/provider-aws.route53Record.Route53RecordAlias.property.evaluateTargetHealth"></a>

```python
evaluate_target_health: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_record#evaluate_target_health Route53Record#evaluate_target_health}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.route53Record.Route53RecordAlias.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_record#name Route53Record#name}.

---

##### `zone_id`<sup>Required</sup> <a name="zone_id" id="@cdktf/provider-aws.route53Record.Route53RecordAlias.property.zoneId"></a>

```python
zone_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_record#zone_id Route53Record#zone_id}.

---

### Route53RecordCidrRoutingPolicy <a name="Route53RecordCidrRoutingPolicy" id="@cdktf/provider-aws.route53Record.Route53RecordCidrRoutingPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.route53Record.Route53RecordCidrRoutingPolicy.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import route53_record

route53Record.Route53RecordCidrRoutingPolicy(
  collection_id: str,
  location_name: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordCidrRoutingPolicy.property.collectionId">collection_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_record#collection_id Route53Record#collection_id}. |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordCidrRoutingPolicy.property.locationName">location_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_record#location_name Route53Record#location_name}. |

---

##### `collection_id`<sup>Required</sup> <a name="collection_id" id="@cdktf/provider-aws.route53Record.Route53RecordCidrRoutingPolicy.property.collectionId"></a>

```python
collection_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_record#collection_id Route53Record#collection_id}.

---

##### `location_name`<sup>Required</sup> <a name="location_name" id="@cdktf/provider-aws.route53Record.Route53RecordCidrRoutingPolicy.property.locationName"></a>

```python
location_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_record#location_name Route53Record#location_name}.

---

### Route53RecordConfig <a name="Route53RecordConfig" id="@cdktf/provider-aws.route53Record.Route53RecordConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.route53Record.Route53RecordConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import route53_record

route53Record.Route53RecordConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  type: str,
  zone_id: str,
  alias: Route53RecordAlias = None,
  allow_overwrite: typing.Union[bool, IResolvable] = None,
  cidr_routing_policy: Route53RecordCidrRoutingPolicy = None,
  failover_routing_policy: Route53RecordFailoverRoutingPolicy = None,
  geolocation_routing_policy: Route53RecordGeolocationRoutingPolicy = None,
  health_check_id: str = None,
  id: str = None,
  latency_routing_policy: Route53RecordLatencyRoutingPolicy = None,
  multivalue_answer_routing_policy: typing.Union[bool, IResolvable] = None,
  records: typing.List[str] = None,
  set_identifier: str = None,
  ttl: typing.Union[int, float] = None,
  weighted_routing_policy: Route53RecordWeightedRoutingPolicy = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_record#name Route53Record#name}. |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordConfig.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_record#type Route53Record#type}. |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordConfig.property.zoneId">zone_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_record#zone_id Route53Record#zone_id}. |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordConfig.property.alias">alias</a></code> | <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordAlias">Route53RecordAlias</a></code> | alias block. |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordConfig.property.allowOverwrite">allow_overwrite</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_record#allow_overwrite Route53Record#allow_overwrite}. |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordConfig.property.cidrRoutingPolicy">cidr_routing_policy</a></code> | <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordCidrRoutingPolicy">Route53RecordCidrRoutingPolicy</a></code> | cidr_routing_policy block. |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordConfig.property.failoverRoutingPolicy">failover_routing_policy</a></code> | <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordFailoverRoutingPolicy">Route53RecordFailoverRoutingPolicy</a></code> | failover_routing_policy block. |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordConfig.property.geolocationRoutingPolicy">geolocation_routing_policy</a></code> | <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordGeolocationRoutingPolicy">Route53RecordGeolocationRoutingPolicy</a></code> | geolocation_routing_policy block. |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordConfig.property.healthCheckId">health_check_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_record#health_check_id Route53Record#health_check_id}. |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_record#id Route53Record#id}. |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordConfig.property.latencyRoutingPolicy">latency_routing_policy</a></code> | <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordLatencyRoutingPolicy">Route53RecordLatencyRoutingPolicy</a></code> | latency_routing_policy block. |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordConfig.property.multivalueAnswerRoutingPolicy">multivalue_answer_routing_policy</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_record#multivalue_answer_routing_policy Route53Record#multivalue_answer_routing_policy}. |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordConfig.property.records">records</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_record#records Route53Record#records}. |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordConfig.property.setIdentifier">set_identifier</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_record#set_identifier Route53Record#set_identifier}. |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordConfig.property.ttl">ttl</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_record#ttl Route53Record#ttl}. |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordConfig.property.weightedRoutingPolicy">weighted_routing_policy</a></code> | <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordWeightedRoutingPolicy">Route53RecordWeightedRoutingPolicy</a></code> | weighted_routing_policy block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.route53Record.Route53RecordConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.route53Record.Route53RecordConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.route53Record.Route53RecordConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.route53Record.Route53RecordConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.route53Record.Route53RecordConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.route53Record.Route53RecordConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.route53Record.Route53RecordConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.route53Record.Route53RecordConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_record#name Route53Record#name}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.route53Record.Route53RecordConfig.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_record#type Route53Record#type}.

---

##### `zone_id`<sup>Required</sup> <a name="zone_id" id="@cdktf/provider-aws.route53Record.Route53RecordConfig.property.zoneId"></a>

```python
zone_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_record#zone_id Route53Record#zone_id}.

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@cdktf/provider-aws.route53Record.Route53RecordConfig.property.alias"></a>

```python
alias: Route53RecordAlias
```

- *Type:* <a href="#@cdktf/provider-aws.route53Record.Route53RecordAlias">Route53RecordAlias</a>

alias block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_record#alias Route53Record#alias}

---

##### `allow_overwrite`<sup>Optional</sup> <a name="allow_overwrite" id="@cdktf/provider-aws.route53Record.Route53RecordConfig.property.allowOverwrite"></a>

```python
allow_overwrite: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_record#allow_overwrite Route53Record#allow_overwrite}.

---

##### `cidr_routing_policy`<sup>Optional</sup> <a name="cidr_routing_policy" id="@cdktf/provider-aws.route53Record.Route53RecordConfig.property.cidrRoutingPolicy"></a>

```python
cidr_routing_policy: Route53RecordCidrRoutingPolicy
```

- *Type:* <a href="#@cdktf/provider-aws.route53Record.Route53RecordCidrRoutingPolicy">Route53RecordCidrRoutingPolicy</a>

cidr_routing_policy block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_record#cidr_routing_policy Route53Record#cidr_routing_policy}

---

##### `failover_routing_policy`<sup>Optional</sup> <a name="failover_routing_policy" id="@cdktf/provider-aws.route53Record.Route53RecordConfig.property.failoverRoutingPolicy"></a>

```python
failover_routing_policy: Route53RecordFailoverRoutingPolicy
```

- *Type:* <a href="#@cdktf/provider-aws.route53Record.Route53RecordFailoverRoutingPolicy">Route53RecordFailoverRoutingPolicy</a>

failover_routing_policy block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_record#failover_routing_policy Route53Record#failover_routing_policy}

---

##### `geolocation_routing_policy`<sup>Optional</sup> <a name="geolocation_routing_policy" id="@cdktf/provider-aws.route53Record.Route53RecordConfig.property.geolocationRoutingPolicy"></a>

```python
geolocation_routing_policy: Route53RecordGeolocationRoutingPolicy
```

- *Type:* <a href="#@cdktf/provider-aws.route53Record.Route53RecordGeolocationRoutingPolicy">Route53RecordGeolocationRoutingPolicy</a>

geolocation_routing_policy block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_record#geolocation_routing_policy Route53Record#geolocation_routing_policy}

---

##### `health_check_id`<sup>Optional</sup> <a name="health_check_id" id="@cdktf/provider-aws.route53Record.Route53RecordConfig.property.healthCheckId"></a>

```python
health_check_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_record#health_check_id Route53Record#health_check_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.route53Record.Route53RecordConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_record#id Route53Record#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `latency_routing_policy`<sup>Optional</sup> <a name="latency_routing_policy" id="@cdktf/provider-aws.route53Record.Route53RecordConfig.property.latencyRoutingPolicy"></a>

```python
latency_routing_policy: Route53RecordLatencyRoutingPolicy
```

- *Type:* <a href="#@cdktf/provider-aws.route53Record.Route53RecordLatencyRoutingPolicy">Route53RecordLatencyRoutingPolicy</a>

latency_routing_policy block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_record#latency_routing_policy Route53Record#latency_routing_policy}

---

##### `multivalue_answer_routing_policy`<sup>Optional</sup> <a name="multivalue_answer_routing_policy" id="@cdktf/provider-aws.route53Record.Route53RecordConfig.property.multivalueAnswerRoutingPolicy"></a>

```python
multivalue_answer_routing_policy: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_record#multivalue_answer_routing_policy Route53Record#multivalue_answer_routing_policy}.

---

##### `records`<sup>Optional</sup> <a name="records" id="@cdktf/provider-aws.route53Record.Route53RecordConfig.property.records"></a>

```python
records: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_record#records Route53Record#records}.

---

##### `set_identifier`<sup>Optional</sup> <a name="set_identifier" id="@cdktf/provider-aws.route53Record.Route53RecordConfig.property.setIdentifier"></a>

```python
set_identifier: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_record#set_identifier Route53Record#set_identifier}.

---

##### `ttl`<sup>Optional</sup> <a name="ttl" id="@cdktf/provider-aws.route53Record.Route53RecordConfig.property.ttl"></a>

```python
ttl: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_record#ttl Route53Record#ttl}.

---

##### `weighted_routing_policy`<sup>Optional</sup> <a name="weighted_routing_policy" id="@cdktf/provider-aws.route53Record.Route53RecordConfig.property.weightedRoutingPolicy"></a>

```python
weighted_routing_policy: Route53RecordWeightedRoutingPolicy
```

- *Type:* <a href="#@cdktf/provider-aws.route53Record.Route53RecordWeightedRoutingPolicy">Route53RecordWeightedRoutingPolicy</a>

weighted_routing_policy block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_record#weighted_routing_policy Route53Record#weighted_routing_policy}

---

### Route53RecordFailoverRoutingPolicy <a name="Route53RecordFailoverRoutingPolicy" id="@cdktf/provider-aws.route53Record.Route53RecordFailoverRoutingPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.route53Record.Route53RecordFailoverRoutingPolicy.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import route53_record

route53Record.Route53RecordFailoverRoutingPolicy(
  type: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordFailoverRoutingPolicy.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_record#type Route53Record#type}. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.route53Record.Route53RecordFailoverRoutingPolicy.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_record#type Route53Record#type}.

---

### Route53RecordGeolocationRoutingPolicy <a name="Route53RecordGeolocationRoutingPolicy" id="@cdktf/provider-aws.route53Record.Route53RecordGeolocationRoutingPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.route53Record.Route53RecordGeolocationRoutingPolicy.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import route53_record

route53Record.Route53RecordGeolocationRoutingPolicy(
  continent: str = None,
  country: str = None,
  subdivision: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordGeolocationRoutingPolicy.property.continent">continent</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_record#continent Route53Record#continent}. |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordGeolocationRoutingPolicy.property.country">country</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_record#country Route53Record#country}. |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordGeolocationRoutingPolicy.property.subdivision">subdivision</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_record#subdivision Route53Record#subdivision}. |

---

##### `continent`<sup>Optional</sup> <a name="continent" id="@cdktf/provider-aws.route53Record.Route53RecordGeolocationRoutingPolicy.property.continent"></a>

```python
continent: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_record#continent Route53Record#continent}.

---

##### `country`<sup>Optional</sup> <a name="country" id="@cdktf/provider-aws.route53Record.Route53RecordGeolocationRoutingPolicy.property.country"></a>

```python
country: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_record#country Route53Record#country}.

---

##### `subdivision`<sup>Optional</sup> <a name="subdivision" id="@cdktf/provider-aws.route53Record.Route53RecordGeolocationRoutingPolicy.property.subdivision"></a>

```python
subdivision: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_record#subdivision Route53Record#subdivision}.

---

### Route53RecordLatencyRoutingPolicy <a name="Route53RecordLatencyRoutingPolicy" id="@cdktf/provider-aws.route53Record.Route53RecordLatencyRoutingPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.route53Record.Route53RecordLatencyRoutingPolicy.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import route53_record

route53Record.Route53RecordLatencyRoutingPolicy(
  region: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordLatencyRoutingPolicy.property.region">region</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_record#region Route53Record#region}. |

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-aws.route53Record.Route53RecordLatencyRoutingPolicy.property.region"></a>

```python
region: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_record#region Route53Record#region}.

---

### Route53RecordWeightedRoutingPolicy <a name="Route53RecordWeightedRoutingPolicy" id="@cdktf/provider-aws.route53Record.Route53RecordWeightedRoutingPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.route53Record.Route53RecordWeightedRoutingPolicy.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import route53_record

route53Record.Route53RecordWeightedRoutingPolicy(
  weight: typing.Union[int, float]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordWeightedRoutingPolicy.property.weight">weight</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_record#weight Route53Record#weight}. |

---

##### `weight`<sup>Required</sup> <a name="weight" id="@cdktf/provider-aws.route53Record.Route53RecordWeightedRoutingPolicy.property.weight"></a>

```python
weight: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_record#weight Route53Record#weight}.

---

## Classes <a name="Classes" id="Classes"></a>

### Route53RecordAliasOutputReference <a name="Route53RecordAliasOutputReference" id="@cdktf/provider-aws.route53Record.Route53RecordAliasOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.route53Record.Route53RecordAliasOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import route53_record

route53Record.Route53RecordAliasOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordAliasOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordAliasOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.route53Record.Route53RecordAliasOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53Record.Route53RecordAliasOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordAliasOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordAliasOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordAliasOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordAliasOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordAliasOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordAliasOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordAliasOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordAliasOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordAliasOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordAliasOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordAliasOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordAliasOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordAliasOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.route53Record.Route53RecordAliasOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.route53Record.Route53RecordAliasOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53Record.Route53RecordAliasOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.route53Record.Route53RecordAliasOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53Record.Route53RecordAliasOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.route53Record.Route53RecordAliasOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53Record.Route53RecordAliasOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.route53Record.Route53RecordAliasOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53Record.Route53RecordAliasOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.route53Record.Route53RecordAliasOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53Record.Route53RecordAliasOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.route53Record.Route53RecordAliasOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53Record.Route53RecordAliasOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.route53Record.Route53RecordAliasOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53Record.Route53RecordAliasOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.route53Record.Route53RecordAliasOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53Record.Route53RecordAliasOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.route53Record.Route53RecordAliasOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53Record.Route53RecordAliasOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.route53Record.Route53RecordAliasOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.route53Record.Route53RecordAliasOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.route53Record.Route53RecordAliasOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.route53Record.Route53RecordAliasOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.route53Record.Route53RecordAliasOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordAliasOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordAliasOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordAliasOutputReference.property.evaluateTargetHealthInput">evaluate_target_health_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordAliasOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordAliasOutputReference.property.zoneIdInput">zone_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordAliasOutputReference.property.evaluateTargetHealth">evaluate_target_health</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordAliasOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordAliasOutputReference.property.zoneId">zone_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordAliasOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordAlias">Route53RecordAlias</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.route53Record.Route53RecordAliasOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.route53Record.Route53RecordAliasOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `evaluate_target_health_input`<sup>Optional</sup> <a name="evaluate_target_health_input" id="@cdktf/provider-aws.route53Record.Route53RecordAliasOutputReference.property.evaluateTargetHealthInput"></a>

```python
evaluate_target_health_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-aws.route53Record.Route53RecordAliasOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `zone_id_input`<sup>Optional</sup> <a name="zone_id_input" id="@cdktf/provider-aws.route53Record.Route53RecordAliasOutputReference.property.zoneIdInput"></a>

```python
zone_id_input: str
```

- *Type:* str

---

##### `evaluate_target_health`<sup>Required</sup> <a name="evaluate_target_health" id="@cdktf/provider-aws.route53Record.Route53RecordAliasOutputReference.property.evaluateTargetHealth"></a>

```python
evaluate_target_health: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.route53Record.Route53RecordAliasOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `zone_id`<sup>Required</sup> <a name="zone_id" id="@cdktf/provider-aws.route53Record.Route53RecordAliasOutputReference.property.zoneId"></a>

```python
zone_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.route53Record.Route53RecordAliasOutputReference.property.internalValue"></a>

```python
internal_value: Route53RecordAlias
```

- *Type:* <a href="#@cdktf/provider-aws.route53Record.Route53RecordAlias">Route53RecordAlias</a>

---


### Route53RecordCidrRoutingPolicyOutputReference <a name="Route53RecordCidrRoutingPolicyOutputReference" id="@cdktf/provider-aws.route53Record.Route53RecordCidrRoutingPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.route53Record.Route53RecordCidrRoutingPolicyOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import route53_record

route53Record.Route53RecordCidrRoutingPolicyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordCidrRoutingPolicyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordCidrRoutingPolicyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.route53Record.Route53RecordCidrRoutingPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53Record.Route53RecordCidrRoutingPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordCidrRoutingPolicyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordCidrRoutingPolicyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordCidrRoutingPolicyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordCidrRoutingPolicyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordCidrRoutingPolicyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordCidrRoutingPolicyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordCidrRoutingPolicyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordCidrRoutingPolicyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordCidrRoutingPolicyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordCidrRoutingPolicyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordCidrRoutingPolicyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordCidrRoutingPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordCidrRoutingPolicyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.route53Record.Route53RecordCidrRoutingPolicyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.route53Record.Route53RecordCidrRoutingPolicyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53Record.Route53RecordCidrRoutingPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.route53Record.Route53RecordCidrRoutingPolicyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53Record.Route53RecordCidrRoutingPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.route53Record.Route53RecordCidrRoutingPolicyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53Record.Route53RecordCidrRoutingPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.route53Record.Route53RecordCidrRoutingPolicyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53Record.Route53RecordCidrRoutingPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.route53Record.Route53RecordCidrRoutingPolicyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53Record.Route53RecordCidrRoutingPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.route53Record.Route53RecordCidrRoutingPolicyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53Record.Route53RecordCidrRoutingPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.route53Record.Route53RecordCidrRoutingPolicyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53Record.Route53RecordCidrRoutingPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.route53Record.Route53RecordCidrRoutingPolicyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53Record.Route53RecordCidrRoutingPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.route53Record.Route53RecordCidrRoutingPolicyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53Record.Route53RecordCidrRoutingPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.route53Record.Route53RecordCidrRoutingPolicyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.route53Record.Route53RecordCidrRoutingPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.route53Record.Route53RecordCidrRoutingPolicyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.route53Record.Route53RecordCidrRoutingPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.route53Record.Route53RecordCidrRoutingPolicyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordCidrRoutingPolicyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordCidrRoutingPolicyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordCidrRoutingPolicyOutputReference.property.collectionIdInput">collection_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordCidrRoutingPolicyOutputReference.property.locationNameInput">location_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordCidrRoutingPolicyOutputReference.property.collectionId">collection_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordCidrRoutingPolicyOutputReference.property.locationName">location_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordCidrRoutingPolicyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordCidrRoutingPolicy">Route53RecordCidrRoutingPolicy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.route53Record.Route53RecordCidrRoutingPolicyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.route53Record.Route53RecordCidrRoutingPolicyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `collection_id_input`<sup>Optional</sup> <a name="collection_id_input" id="@cdktf/provider-aws.route53Record.Route53RecordCidrRoutingPolicyOutputReference.property.collectionIdInput"></a>

```python
collection_id_input: str
```

- *Type:* str

---

##### `location_name_input`<sup>Optional</sup> <a name="location_name_input" id="@cdktf/provider-aws.route53Record.Route53RecordCidrRoutingPolicyOutputReference.property.locationNameInput"></a>

```python
location_name_input: str
```

- *Type:* str

---

##### `collection_id`<sup>Required</sup> <a name="collection_id" id="@cdktf/provider-aws.route53Record.Route53RecordCidrRoutingPolicyOutputReference.property.collectionId"></a>

```python
collection_id: str
```

- *Type:* str

---

##### `location_name`<sup>Required</sup> <a name="location_name" id="@cdktf/provider-aws.route53Record.Route53RecordCidrRoutingPolicyOutputReference.property.locationName"></a>

```python
location_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.route53Record.Route53RecordCidrRoutingPolicyOutputReference.property.internalValue"></a>

```python
internal_value: Route53RecordCidrRoutingPolicy
```

- *Type:* <a href="#@cdktf/provider-aws.route53Record.Route53RecordCidrRoutingPolicy">Route53RecordCidrRoutingPolicy</a>

---


### Route53RecordFailoverRoutingPolicyOutputReference <a name="Route53RecordFailoverRoutingPolicyOutputReference" id="@cdktf/provider-aws.route53Record.Route53RecordFailoverRoutingPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.route53Record.Route53RecordFailoverRoutingPolicyOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import route53_record

route53Record.Route53RecordFailoverRoutingPolicyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordFailoverRoutingPolicyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordFailoverRoutingPolicyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.route53Record.Route53RecordFailoverRoutingPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53Record.Route53RecordFailoverRoutingPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordFailoverRoutingPolicyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordFailoverRoutingPolicyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordFailoverRoutingPolicyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordFailoverRoutingPolicyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordFailoverRoutingPolicyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordFailoverRoutingPolicyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordFailoverRoutingPolicyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordFailoverRoutingPolicyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordFailoverRoutingPolicyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordFailoverRoutingPolicyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordFailoverRoutingPolicyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordFailoverRoutingPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordFailoverRoutingPolicyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.route53Record.Route53RecordFailoverRoutingPolicyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.route53Record.Route53RecordFailoverRoutingPolicyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53Record.Route53RecordFailoverRoutingPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.route53Record.Route53RecordFailoverRoutingPolicyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53Record.Route53RecordFailoverRoutingPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.route53Record.Route53RecordFailoverRoutingPolicyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53Record.Route53RecordFailoverRoutingPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.route53Record.Route53RecordFailoverRoutingPolicyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53Record.Route53RecordFailoverRoutingPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.route53Record.Route53RecordFailoverRoutingPolicyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53Record.Route53RecordFailoverRoutingPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.route53Record.Route53RecordFailoverRoutingPolicyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53Record.Route53RecordFailoverRoutingPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.route53Record.Route53RecordFailoverRoutingPolicyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53Record.Route53RecordFailoverRoutingPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.route53Record.Route53RecordFailoverRoutingPolicyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53Record.Route53RecordFailoverRoutingPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.route53Record.Route53RecordFailoverRoutingPolicyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53Record.Route53RecordFailoverRoutingPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.route53Record.Route53RecordFailoverRoutingPolicyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.route53Record.Route53RecordFailoverRoutingPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.route53Record.Route53RecordFailoverRoutingPolicyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.route53Record.Route53RecordFailoverRoutingPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.route53Record.Route53RecordFailoverRoutingPolicyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordFailoverRoutingPolicyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordFailoverRoutingPolicyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordFailoverRoutingPolicyOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordFailoverRoutingPolicyOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordFailoverRoutingPolicyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordFailoverRoutingPolicy">Route53RecordFailoverRoutingPolicy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.route53Record.Route53RecordFailoverRoutingPolicyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.route53Record.Route53RecordFailoverRoutingPolicyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-aws.route53Record.Route53RecordFailoverRoutingPolicyOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.route53Record.Route53RecordFailoverRoutingPolicyOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.route53Record.Route53RecordFailoverRoutingPolicyOutputReference.property.internalValue"></a>

```python
internal_value: Route53RecordFailoverRoutingPolicy
```

- *Type:* <a href="#@cdktf/provider-aws.route53Record.Route53RecordFailoverRoutingPolicy">Route53RecordFailoverRoutingPolicy</a>

---


### Route53RecordGeolocationRoutingPolicyOutputReference <a name="Route53RecordGeolocationRoutingPolicyOutputReference" id="@cdktf/provider-aws.route53Record.Route53RecordGeolocationRoutingPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.route53Record.Route53RecordGeolocationRoutingPolicyOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import route53_record

route53Record.Route53RecordGeolocationRoutingPolicyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordGeolocationRoutingPolicyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordGeolocationRoutingPolicyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.route53Record.Route53RecordGeolocationRoutingPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53Record.Route53RecordGeolocationRoutingPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordGeolocationRoutingPolicyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordGeolocationRoutingPolicyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordGeolocationRoutingPolicyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordGeolocationRoutingPolicyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordGeolocationRoutingPolicyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordGeolocationRoutingPolicyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordGeolocationRoutingPolicyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordGeolocationRoutingPolicyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordGeolocationRoutingPolicyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordGeolocationRoutingPolicyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordGeolocationRoutingPolicyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordGeolocationRoutingPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordGeolocationRoutingPolicyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordGeolocationRoutingPolicyOutputReference.resetContinent">reset_continent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordGeolocationRoutingPolicyOutputReference.resetCountry">reset_country</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordGeolocationRoutingPolicyOutputReference.resetSubdivision">reset_subdivision</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.route53Record.Route53RecordGeolocationRoutingPolicyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.route53Record.Route53RecordGeolocationRoutingPolicyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53Record.Route53RecordGeolocationRoutingPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.route53Record.Route53RecordGeolocationRoutingPolicyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53Record.Route53RecordGeolocationRoutingPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.route53Record.Route53RecordGeolocationRoutingPolicyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53Record.Route53RecordGeolocationRoutingPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.route53Record.Route53RecordGeolocationRoutingPolicyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53Record.Route53RecordGeolocationRoutingPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.route53Record.Route53RecordGeolocationRoutingPolicyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53Record.Route53RecordGeolocationRoutingPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.route53Record.Route53RecordGeolocationRoutingPolicyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53Record.Route53RecordGeolocationRoutingPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.route53Record.Route53RecordGeolocationRoutingPolicyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53Record.Route53RecordGeolocationRoutingPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.route53Record.Route53RecordGeolocationRoutingPolicyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53Record.Route53RecordGeolocationRoutingPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.route53Record.Route53RecordGeolocationRoutingPolicyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53Record.Route53RecordGeolocationRoutingPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.route53Record.Route53RecordGeolocationRoutingPolicyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.route53Record.Route53RecordGeolocationRoutingPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.route53Record.Route53RecordGeolocationRoutingPolicyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.route53Record.Route53RecordGeolocationRoutingPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.route53Record.Route53RecordGeolocationRoutingPolicyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_continent` <a name="reset_continent" id="@cdktf/provider-aws.route53Record.Route53RecordGeolocationRoutingPolicyOutputReference.resetContinent"></a>

```python
def reset_continent() -> None
```

##### `reset_country` <a name="reset_country" id="@cdktf/provider-aws.route53Record.Route53RecordGeolocationRoutingPolicyOutputReference.resetCountry"></a>

```python
def reset_country() -> None
```

##### `reset_subdivision` <a name="reset_subdivision" id="@cdktf/provider-aws.route53Record.Route53RecordGeolocationRoutingPolicyOutputReference.resetSubdivision"></a>

```python
def reset_subdivision() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordGeolocationRoutingPolicyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordGeolocationRoutingPolicyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordGeolocationRoutingPolicyOutputReference.property.continentInput">continent_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordGeolocationRoutingPolicyOutputReference.property.countryInput">country_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordGeolocationRoutingPolicyOutputReference.property.subdivisionInput">subdivision_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordGeolocationRoutingPolicyOutputReference.property.continent">continent</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordGeolocationRoutingPolicyOutputReference.property.country">country</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordGeolocationRoutingPolicyOutputReference.property.subdivision">subdivision</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordGeolocationRoutingPolicyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordGeolocationRoutingPolicy">Route53RecordGeolocationRoutingPolicy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.route53Record.Route53RecordGeolocationRoutingPolicyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.route53Record.Route53RecordGeolocationRoutingPolicyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `continent_input`<sup>Optional</sup> <a name="continent_input" id="@cdktf/provider-aws.route53Record.Route53RecordGeolocationRoutingPolicyOutputReference.property.continentInput"></a>

```python
continent_input: str
```

- *Type:* str

---

##### `country_input`<sup>Optional</sup> <a name="country_input" id="@cdktf/provider-aws.route53Record.Route53RecordGeolocationRoutingPolicyOutputReference.property.countryInput"></a>

```python
country_input: str
```

- *Type:* str

---

##### `subdivision_input`<sup>Optional</sup> <a name="subdivision_input" id="@cdktf/provider-aws.route53Record.Route53RecordGeolocationRoutingPolicyOutputReference.property.subdivisionInput"></a>

```python
subdivision_input: str
```

- *Type:* str

---

##### `continent`<sup>Required</sup> <a name="continent" id="@cdktf/provider-aws.route53Record.Route53RecordGeolocationRoutingPolicyOutputReference.property.continent"></a>

```python
continent: str
```

- *Type:* str

---

##### `country`<sup>Required</sup> <a name="country" id="@cdktf/provider-aws.route53Record.Route53RecordGeolocationRoutingPolicyOutputReference.property.country"></a>

```python
country: str
```

- *Type:* str

---

##### `subdivision`<sup>Required</sup> <a name="subdivision" id="@cdktf/provider-aws.route53Record.Route53RecordGeolocationRoutingPolicyOutputReference.property.subdivision"></a>

```python
subdivision: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.route53Record.Route53RecordGeolocationRoutingPolicyOutputReference.property.internalValue"></a>

```python
internal_value: Route53RecordGeolocationRoutingPolicy
```

- *Type:* <a href="#@cdktf/provider-aws.route53Record.Route53RecordGeolocationRoutingPolicy">Route53RecordGeolocationRoutingPolicy</a>

---


### Route53RecordLatencyRoutingPolicyOutputReference <a name="Route53RecordLatencyRoutingPolicyOutputReference" id="@cdktf/provider-aws.route53Record.Route53RecordLatencyRoutingPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.route53Record.Route53RecordLatencyRoutingPolicyOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import route53_record

route53Record.Route53RecordLatencyRoutingPolicyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordLatencyRoutingPolicyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordLatencyRoutingPolicyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.route53Record.Route53RecordLatencyRoutingPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53Record.Route53RecordLatencyRoutingPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordLatencyRoutingPolicyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordLatencyRoutingPolicyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordLatencyRoutingPolicyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordLatencyRoutingPolicyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordLatencyRoutingPolicyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordLatencyRoutingPolicyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordLatencyRoutingPolicyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordLatencyRoutingPolicyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordLatencyRoutingPolicyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordLatencyRoutingPolicyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordLatencyRoutingPolicyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordLatencyRoutingPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordLatencyRoutingPolicyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.route53Record.Route53RecordLatencyRoutingPolicyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.route53Record.Route53RecordLatencyRoutingPolicyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53Record.Route53RecordLatencyRoutingPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.route53Record.Route53RecordLatencyRoutingPolicyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53Record.Route53RecordLatencyRoutingPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.route53Record.Route53RecordLatencyRoutingPolicyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53Record.Route53RecordLatencyRoutingPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.route53Record.Route53RecordLatencyRoutingPolicyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53Record.Route53RecordLatencyRoutingPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.route53Record.Route53RecordLatencyRoutingPolicyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53Record.Route53RecordLatencyRoutingPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.route53Record.Route53RecordLatencyRoutingPolicyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53Record.Route53RecordLatencyRoutingPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.route53Record.Route53RecordLatencyRoutingPolicyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53Record.Route53RecordLatencyRoutingPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.route53Record.Route53RecordLatencyRoutingPolicyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53Record.Route53RecordLatencyRoutingPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.route53Record.Route53RecordLatencyRoutingPolicyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53Record.Route53RecordLatencyRoutingPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.route53Record.Route53RecordLatencyRoutingPolicyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.route53Record.Route53RecordLatencyRoutingPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.route53Record.Route53RecordLatencyRoutingPolicyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.route53Record.Route53RecordLatencyRoutingPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.route53Record.Route53RecordLatencyRoutingPolicyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordLatencyRoutingPolicyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordLatencyRoutingPolicyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordLatencyRoutingPolicyOutputReference.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordLatencyRoutingPolicyOutputReference.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordLatencyRoutingPolicyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordLatencyRoutingPolicy">Route53RecordLatencyRoutingPolicy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.route53Record.Route53RecordLatencyRoutingPolicyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.route53Record.Route53RecordLatencyRoutingPolicyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktf/provider-aws.route53Record.Route53RecordLatencyRoutingPolicyOutputReference.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-aws.route53Record.Route53RecordLatencyRoutingPolicyOutputReference.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.route53Record.Route53RecordLatencyRoutingPolicyOutputReference.property.internalValue"></a>

```python
internal_value: Route53RecordLatencyRoutingPolicy
```

- *Type:* <a href="#@cdktf/provider-aws.route53Record.Route53RecordLatencyRoutingPolicy">Route53RecordLatencyRoutingPolicy</a>

---


### Route53RecordWeightedRoutingPolicyOutputReference <a name="Route53RecordWeightedRoutingPolicyOutputReference" id="@cdktf/provider-aws.route53Record.Route53RecordWeightedRoutingPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.route53Record.Route53RecordWeightedRoutingPolicyOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import route53_record

route53Record.Route53RecordWeightedRoutingPolicyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordWeightedRoutingPolicyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordWeightedRoutingPolicyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.route53Record.Route53RecordWeightedRoutingPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53Record.Route53RecordWeightedRoutingPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordWeightedRoutingPolicyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordWeightedRoutingPolicyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordWeightedRoutingPolicyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordWeightedRoutingPolicyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordWeightedRoutingPolicyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordWeightedRoutingPolicyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordWeightedRoutingPolicyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordWeightedRoutingPolicyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordWeightedRoutingPolicyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordWeightedRoutingPolicyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordWeightedRoutingPolicyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordWeightedRoutingPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordWeightedRoutingPolicyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.route53Record.Route53RecordWeightedRoutingPolicyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.route53Record.Route53RecordWeightedRoutingPolicyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53Record.Route53RecordWeightedRoutingPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.route53Record.Route53RecordWeightedRoutingPolicyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53Record.Route53RecordWeightedRoutingPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.route53Record.Route53RecordWeightedRoutingPolicyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53Record.Route53RecordWeightedRoutingPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.route53Record.Route53RecordWeightedRoutingPolicyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53Record.Route53RecordWeightedRoutingPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.route53Record.Route53RecordWeightedRoutingPolicyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53Record.Route53RecordWeightedRoutingPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.route53Record.Route53RecordWeightedRoutingPolicyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53Record.Route53RecordWeightedRoutingPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.route53Record.Route53RecordWeightedRoutingPolicyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53Record.Route53RecordWeightedRoutingPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.route53Record.Route53RecordWeightedRoutingPolicyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53Record.Route53RecordWeightedRoutingPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.route53Record.Route53RecordWeightedRoutingPolicyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.route53Record.Route53RecordWeightedRoutingPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.route53Record.Route53RecordWeightedRoutingPolicyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.route53Record.Route53RecordWeightedRoutingPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.route53Record.Route53RecordWeightedRoutingPolicyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.route53Record.Route53RecordWeightedRoutingPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.route53Record.Route53RecordWeightedRoutingPolicyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordWeightedRoutingPolicyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordWeightedRoutingPolicyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordWeightedRoutingPolicyOutputReference.property.weightInput">weight_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordWeightedRoutingPolicyOutputReference.property.weight">weight</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordWeightedRoutingPolicyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.route53Record.Route53RecordWeightedRoutingPolicy">Route53RecordWeightedRoutingPolicy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.route53Record.Route53RecordWeightedRoutingPolicyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.route53Record.Route53RecordWeightedRoutingPolicyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `weight_input`<sup>Optional</sup> <a name="weight_input" id="@cdktf/provider-aws.route53Record.Route53RecordWeightedRoutingPolicyOutputReference.property.weightInput"></a>

```python
weight_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `weight`<sup>Required</sup> <a name="weight" id="@cdktf/provider-aws.route53Record.Route53RecordWeightedRoutingPolicyOutputReference.property.weight"></a>

```python
weight: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.route53Record.Route53RecordWeightedRoutingPolicyOutputReference.property.internalValue"></a>

```python
internal_value: Route53RecordWeightedRoutingPolicy
```

- *Type:* <a href="#@cdktf/provider-aws.route53Record.Route53RecordWeightedRoutingPolicy">Route53RecordWeightedRoutingPolicy</a>

---



