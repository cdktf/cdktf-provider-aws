# `devicefarmNetworkProfile` Submodule <a name="`devicefarmNetworkProfile` Submodule" id="@cdktf/provider-aws.devicefarmNetworkProfile"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DevicefarmNetworkProfile <a name="DevicefarmNetworkProfile" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/devicefarm_network_profile aws_devicefarm_network_profile}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import devicefarm_network_profile

devicefarmNetworkProfile.DevicefarmNetworkProfile(
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
  project_arn: str,
  description: str = None,
  downlink_bandwidth_bits: typing.Union[int, float] = None,
  downlink_delay_ms: typing.Union[int, float] = None,
  downlink_jitter_ms: typing.Union[int, float] = None,
  downlink_loss_percent: typing.Union[int, float] = None,
  id: str = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None,
  type: str = None,
  uplink_bandwidth_bits: typing.Union[int, float] = None,
  uplink_delay_ms: typing.Union[int, float] = None,
  uplink_jitter_ms: typing.Union[int, float] = None,
  uplink_loss_percent: typing.Union[int, float] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/devicefarm_network_profile#name DevicefarmNetworkProfile#name}. |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.Initializer.parameter.projectArn">project_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/devicefarm_network_profile#project_arn DevicefarmNetworkProfile#project_arn}. |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/devicefarm_network_profile#description DevicefarmNetworkProfile#description}. |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.Initializer.parameter.downlinkBandwidthBits">downlink_bandwidth_bits</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/devicefarm_network_profile#downlink_bandwidth_bits DevicefarmNetworkProfile#downlink_bandwidth_bits}. |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.Initializer.parameter.downlinkDelayMs">downlink_delay_ms</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/devicefarm_network_profile#downlink_delay_ms DevicefarmNetworkProfile#downlink_delay_ms}. |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.Initializer.parameter.downlinkJitterMs">downlink_jitter_ms</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/devicefarm_network_profile#downlink_jitter_ms DevicefarmNetworkProfile#downlink_jitter_ms}. |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.Initializer.parameter.downlinkLossPercent">downlink_loss_percent</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/devicefarm_network_profile#downlink_loss_percent DevicefarmNetworkProfile#downlink_loss_percent}. |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/devicefarm_network_profile#id DevicefarmNetworkProfile#id}. |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/devicefarm_network_profile#tags DevicefarmNetworkProfile#tags}. |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.Initializer.parameter.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/devicefarm_network_profile#tags_all DevicefarmNetworkProfile#tags_all}. |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.Initializer.parameter.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/devicefarm_network_profile#type DevicefarmNetworkProfile#type}. |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.Initializer.parameter.uplinkBandwidthBits">uplink_bandwidth_bits</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/devicefarm_network_profile#uplink_bandwidth_bits DevicefarmNetworkProfile#uplink_bandwidth_bits}. |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.Initializer.parameter.uplinkDelayMs">uplink_delay_ms</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/devicefarm_network_profile#uplink_delay_ms DevicefarmNetworkProfile#uplink_delay_ms}. |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.Initializer.parameter.uplinkJitterMs">uplink_jitter_ms</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/devicefarm_network_profile#uplink_jitter_ms DevicefarmNetworkProfile#uplink_jitter_ms}. |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.Initializer.parameter.uplinkLossPercent">uplink_loss_percent</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/devicefarm_network_profile#uplink_loss_percent DevicefarmNetworkProfile#uplink_loss_percent}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/devicefarm_network_profile#name DevicefarmNetworkProfile#name}.

---

##### `project_arn`<sup>Required</sup> <a name="project_arn" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.Initializer.parameter.projectArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/devicefarm_network_profile#project_arn DevicefarmNetworkProfile#project_arn}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/devicefarm_network_profile#description DevicefarmNetworkProfile#description}.

---

##### `downlink_bandwidth_bits`<sup>Optional</sup> <a name="downlink_bandwidth_bits" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.Initializer.parameter.downlinkBandwidthBits"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/devicefarm_network_profile#downlink_bandwidth_bits DevicefarmNetworkProfile#downlink_bandwidth_bits}.

---

##### `downlink_delay_ms`<sup>Optional</sup> <a name="downlink_delay_ms" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.Initializer.parameter.downlinkDelayMs"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/devicefarm_network_profile#downlink_delay_ms DevicefarmNetworkProfile#downlink_delay_ms}.

---

##### `downlink_jitter_ms`<sup>Optional</sup> <a name="downlink_jitter_ms" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.Initializer.parameter.downlinkJitterMs"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/devicefarm_network_profile#downlink_jitter_ms DevicefarmNetworkProfile#downlink_jitter_ms}.

---

##### `downlink_loss_percent`<sup>Optional</sup> <a name="downlink_loss_percent" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.Initializer.parameter.downlinkLossPercent"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/devicefarm_network_profile#downlink_loss_percent DevicefarmNetworkProfile#downlink_loss_percent}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/devicefarm_network_profile#id DevicefarmNetworkProfile#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/devicefarm_network_profile#tags DevicefarmNetworkProfile#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.Initializer.parameter.tagsAll"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/devicefarm_network_profile#tags_all DevicefarmNetworkProfile#tags_all}.

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.Initializer.parameter.type"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/devicefarm_network_profile#type DevicefarmNetworkProfile#type}.

---

##### `uplink_bandwidth_bits`<sup>Optional</sup> <a name="uplink_bandwidth_bits" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.Initializer.parameter.uplinkBandwidthBits"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/devicefarm_network_profile#uplink_bandwidth_bits DevicefarmNetworkProfile#uplink_bandwidth_bits}.

---

##### `uplink_delay_ms`<sup>Optional</sup> <a name="uplink_delay_ms" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.Initializer.parameter.uplinkDelayMs"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/devicefarm_network_profile#uplink_delay_ms DevicefarmNetworkProfile#uplink_delay_ms}.

---

##### `uplink_jitter_ms`<sup>Optional</sup> <a name="uplink_jitter_ms" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.Initializer.parameter.uplinkJitterMs"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/devicefarm_network_profile#uplink_jitter_ms DevicefarmNetworkProfile#uplink_jitter_ms}.

---

##### `uplink_loss_percent`<sup>Optional</sup> <a name="uplink_loss_percent" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.Initializer.parameter.uplinkLossPercent"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/devicefarm_network_profile#uplink_loss_percent DevicefarmNetworkProfile#uplink_loss_percent}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.resetDownlinkBandwidthBits">reset_downlink_bandwidth_bits</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.resetDownlinkDelayMs">reset_downlink_delay_ms</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.resetDownlinkJitterMs">reset_downlink_jitter_ms</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.resetDownlinkLossPercent">reset_downlink_loss_percent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.resetTagsAll">reset_tags_all</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.resetType">reset_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.resetUplinkBandwidthBits">reset_uplink_bandwidth_bits</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.resetUplinkDelayMs">reset_uplink_delay_ms</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.resetUplinkJitterMs">reset_uplink_jitter_ms</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.resetUplinkLossPercent">reset_uplink_loss_percent</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_description` <a name="reset_description" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_downlink_bandwidth_bits` <a name="reset_downlink_bandwidth_bits" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.resetDownlinkBandwidthBits"></a>

```python
def reset_downlink_bandwidth_bits() -> None
```

##### `reset_downlink_delay_ms` <a name="reset_downlink_delay_ms" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.resetDownlinkDelayMs"></a>

```python
def reset_downlink_delay_ms() -> None
```

##### `reset_downlink_jitter_ms` <a name="reset_downlink_jitter_ms" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.resetDownlinkJitterMs"></a>

```python
def reset_downlink_jitter_ms() -> None
```

##### `reset_downlink_loss_percent` <a name="reset_downlink_loss_percent" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.resetDownlinkLossPercent"></a>

```python
def reset_downlink_loss_percent() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_tags_all` <a name="reset_tags_all" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.resetTagsAll"></a>

```python
def reset_tags_all() -> None
```

##### `reset_type` <a name="reset_type" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.resetType"></a>

```python
def reset_type() -> None
```

##### `reset_uplink_bandwidth_bits` <a name="reset_uplink_bandwidth_bits" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.resetUplinkBandwidthBits"></a>

```python
def reset_uplink_bandwidth_bits() -> None
```

##### `reset_uplink_delay_ms` <a name="reset_uplink_delay_ms" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.resetUplinkDelayMs"></a>

```python
def reset_uplink_delay_ms() -> None
```

##### `reset_uplink_jitter_ms` <a name="reset_uplink_jitter_ms" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.resetUplinkJitterMs"></a>

```python
def reset_uplink_jitter_ms() -> None
```

##### `reset_uplink_loss_percent` <a name="reset_uplink_loss_percent" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.resetUplinkLossPercent"></a>

```python
def reset_uplink_loss_percent() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import devicefarm_network_profile

devicefarmNetworkProfile.DevicefarmNetworkProfile.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import devicefarm_network_profile

devicefarmNetworkProfile.DevicefarmNetworkProfile.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import devicefarm_network_profile

devicefarmNetworkProfile.DevicefarmNetworkProfile.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.property.downlinkBandwidthBitsInput">downlink_bandwidth_bits_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.property.downlinkDelayMsInput">downlink_delay_ms_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.property.downlinkJitterMsInput">downlink_jitter_ms_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.property.downlinkLossPercentInput">downlink_loss_percent_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.property.projectArnInput">project_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.property.tagsAllInput">tags_all_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.property.uplinkBandwidthBitsInput">uplink_bandwidth_bits_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.property.uplinkDelayMsInput">uplink_delay_ms_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.property.uplinkJitterMsInput">uplink_jitter_ms_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.property.uplinkLossPercentInput">uplink_loss_percent_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.property.downlinkBandwidthBits">downlink_bandwidth_bits</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.property.downlinkDelayMs">downlink_delay_ms</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.property.downlinkJitterMs">downlink_jitter_ms</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.property.downlinkLossPercent">downlink_loss_percent</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.property.projectArn">project_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.property.uplinkBandwidthBits">uplink_bandwidth_bits</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.property.uplinkDelayMs">uplink_delay_ms</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.property.uplinkJitterMs">uplink_jitter_ms</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.property.uplinkLossPercent">uplink_loss_percent</a></code> | <code>typing.Union[int, float]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `downlink_bandwidth_bits_input`<sup>Optional</sup> <a name="downlink_bandwidth_bits_input" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.property.downlinkBandwidthBitsInput"></a>

```python
downlink_bandwidth_bits_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `downlink_delay_ms_input`<sup>Optional</sup> <a name="downlink_delay_ms_input" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.property.downlinkDelayMsInput"></a>

```python
downlink_delay_ms_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `downlink_jitter_ms_input`<sup>Optional</sup> <a name="downlink_jitter_ms_input" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.property.downlinkJitterMsInput"></a>

```python
downlink_jitter_ms_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `downlink_loss_percent_input`<sup>Optional</sup> <a name="downlink_loss_percent_input" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.property.downlinkLossPercentInput"></a>

```python
downlink_loss_percent_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `project_arn_input`<sup>Optional</sup> <a name="project_arn_input" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.property.projectArnInput"></a>

```python
project_arn_input: str
```

- *Type:* str

---

##### `tags_all_input`<sup>Optional</sup> <a name="tags_all_input" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.property.tagsAllInput"></a>

```python
tags_all_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `uplink_bandwidth_bits_input`<sup>Optional</sup> <a name="uplink_bandwidth_bits_input" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.property.uplinkBandwidthBitsInput"></a>

```python
uplink_bandwidth_bits_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `uplink_delay_ms_input`<sup>Optional</sup> <a name="uplink_delay_ms_input" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.property.uplinkDelayMsInput"></a>

```python
uplink_delay_ms_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `uplink_jitter_ms_input`<sup>Optional</sup> <a name="uplink_jitter_ms_input" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.property.uplinkJitterMsInput"></a>

```python
uplink_jitter_ms_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `uplink_loss_percent_input`<sup>Optional</sup> <a name="uplink_loss_percent_input" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.property.uplinkLossPercentInput"></a>

```python
uplink_loss_percent_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `downlink_bandwidth_bits`<sup>Required</sup> <a name="downlink_bandwidth_bits" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.property.downlinkBandwidthBits"></a>

```python
downlink_bandwidth_bits: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `downlink_delay_ms`<sup>Required</sup> <a name="downlink_delay_ms" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.property.downlinkDelayMs"></a>

```python
downlink_delay_ms: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `downlink_jitter_ms`<sup>Required</sup> <a name="downlink_jitter_ms" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.property.downlinkJitterMs"></a>

```python
downlink_jitter_ms: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `downlink_loss_percent`<sup>Required</sup> <a name="downlink_loss_percent" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.property.downlinkLossPercent"></a>

```python
downlink_loss_percent: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `project_arn`<sup>Required</sup> <a name="project_arn" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.property.projectArn"></a>

```python
project_arn: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_all`<sup>Required</sup> <a name="tags_all" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `uplink_bandwidth_bits`<sup>Required</sup> <a name="uplink_bandwidth_bits" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.property.uplinkBandwidthBits"></a>

```python
uplink_bandwidth_bits: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `uplink_delay_ms`<sup>Required</sup> <a name="uplink_delay_ms" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.property.uplinkDelayMs"></a>

```python
uplink_delay_ms: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `uplink_jitter_ms`<sup>Required</sup> <a name="uplink_jitter_ms" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.property.uplinkJitterMs"></a>

```python
uplink_jitter_ms: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `uplink_loss_percent`<sup>Required</sup> <a name="uplink_loss_percent" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.property.uplinkLossPercent"></a>

```python
uplink_loss_percent: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfile.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DevicefarmNetworkProfileConfig <a name="DevicefarmNetworkProfileConfig" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfileConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfileConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import devicefarm_network_profile

devicefarmNetworkProfile.DevicefarmNetworkProfileConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  project_arn: str,
  description: str = None,
  downlink_bandwidth_bits: typing.Union[int, float] = None,
  downlink_delay_ms: typing.Union[int, float] = None,
  downlink_jitter_ms: typing.Union[int, float] = None,
  downlink_loss_percent: typing.Union[int, float] = None,
  id: str = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None,
  type: str = None,
  uplink_bandwidth_bits: typing.Union[int, float] = None,
  uplink_delay_ms: typing.Union[int, float] = None,
  uplink_jitter_ms: typing.Union[int, float] = None,
  uplink_loss_percent: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfileConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfileConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfileConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfileConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfileConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfileConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfileConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfileConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/devicefarm_network_profile#name DevicefarmNetworkProfile#name}. |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfileConfig.property.projectArn">project_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/devicefarm_network_profile#project_arn DevicefarmNetworkProfile#project_arn}. |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfileConfig.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/devicefarm_network_profile#description DevicefarmNetworkProfile#description}. |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfileConfig.property.downlinkBandwidthBits">downlink_bandwidth_bits</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/devicefarm_network_profile#downlink_bandwidth_bits DevicefarmNetworkProfile#downlink_bandwidth_bits}. |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfileConfig.property.downlinkDelayMs">downlink_delay_ms</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/devicefarm_network_profile#downlink_delay_ms DevicefarmNetworkProfile#downlink_delay_ms}. |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfileConfig.property.downlinkJitterMs">downlink_jitter_ms</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/devicefarm_network_profile#downlink_jitter_ms DevicefarmNetworkProfile#downlink_jitter_ms}. |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfileConfig.property.downlinkLossPercent">downlink_loss_percent</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/devicefarm_network_profile#downlink_loss_percent DevicefarmNetworkProfile#downlink_loss_percent}. |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfileConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/devicefarm_network_profile#id DevicefarmNetworkProfile#id}. |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfileConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/devicefarm_network_profile#tags DevicefarmNetworkProfile#tags}. |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfileConfig.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/devicefarm_network_profile#tags_all DevicefarmNetworkProfile#tags_all}. |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfileConfig.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/devicefarm_network_profile#type DevicefarmNetworkProfile#type}. |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfileConfig.property.uplinkBandwidthBits">uplink_bandwidth_bits</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/devicefarm_network_profile#uplink_bandwidth_bits DevicefarmNetworkProfile#uplink_bandwidth_bits}. |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfileConfig.property.uplinkDelayMs">uplink_delay_ms</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/devicefarm_network_profile#uplink_delay_ms DevicefarmNetworkProfile#uplink_delay_ms}. |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfileConfig.property.uplinkJitterMs">uplink_jitter_ms</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/devicefarm_network_profile#uplink_jitter_ms DevicefarmNetworkProfile#uplink_jitter_ms}. |
| <code><a href="#@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfileConfig.property.uplinkLossPercent">uplink_loss_percent</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/devicefarm_network_profile#uplink_loss_percent DevicefarmNetworkProfile#uplink_loss_percent}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfileConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfileConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfileConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfileConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfileConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfileConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfileConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfileConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/devicefarm_network_profile#name DevicefarmNetworkProfile#name}.

---

##### `project_arn`<sup>Required</sup> <a name="project_arn" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfileConfig.property.projectArn"></a>

```python
project_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/devicefarm_network_profile#project_arn DevicefarmNetworkProfile#project_arn}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfileConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/devicefarm_network_profile#description DevicefarmNetworkProfile#description}.

---

##### `downlink_bandwidth_bits`<sup>Optional</sup> <a name="downlink_bandwidth_bits" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfileConfig.property.downlinkBandwidthBits"></a>

```python
downlink_bandwidth_bits: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/devicefarm_network_profile#downlink_bandwidth_bits DevicefarmNetworkProfile#downlink_bandwidth_bits}.

---

##### `downlink_delay_ms`<sup>Optional</sup> <a name="downlink_delay_ms" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfileConfig.property.downlinkDelayMs"></a>

```python
downlink_delay_ms: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/devicefarm_network_profile#downlink_delay_ms DevicefarmNetworkProfile#downlink_delay_ms}.

---

##### `downlink_jitter_ms`<sup>Optional</sup> <a name="downlink_jitter_ms" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfileConfig.property.downlinkJitterMs"></a>

```python
downlink_jitter_ms: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/devicefarm_network_profile#downlink_jitter_ms DevicefarmNetworkProfile#downlink_jitter_ms}.

---

##### `downlink_loss_percent`<sup>Optional</sup> <a name="downlink_loss_percent" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfileConfig.property.downlinkLossPercent"></a>

```python
downlink_loss_percent: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/devicefarm_network_profile#downlink_loss_percent DevicefarmNetworkProfile#downlink_loss_percent}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfileConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/devicefarm_network_profile#id DevicefarmNetworkProfile#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfileConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/devicefarm_network_profile#tags DevicefarmNetworkProfile#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfileConfig.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/devicefarm_network_profile#tags_all DevicefarmNetworkProfile#tags_all}.

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfileConfig.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/devicefarm_network_profile#type DevicefarmNetworkProfile#type}.

---

##### `uplink_bandwidth_bits`<sup>Optional</sup> <a name="uplink_bandwidth_bits" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfileConfig.property.uplinkBandwidthBits"></a>

```python
uplink_bandwidth_bits: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/devicefarm_network_profile#uplink_bandwidth_bits DevicefarmNetworkProfile#uplink_bandwidth_bits}.

---

##### `uplink_delay_ms`<sup>Optional</sup> <a name="uplink_delay_ms" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfileConfig.property.uplinkDelayMs"></a>

```python
uplink_delay_ms: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/devicefarm_network_profile#uplink_delay_ms DevicefarmNetworkProfile#uplink_delay_ms}.

---

##### `uplink_jitter_ms`<sup>Optional</sup> <a name="uplink_jitter_ms" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfileConfig.property.uplinkJitterMs"></a>

```python
uplink_jitter_ms: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/devicefarm_network_profile#uplink_jitter_ms DevicefarmNetworkProfile#uplink_jitter_ms}.

---

##### `uplink_loss_percent`<sup>Optional</sup> <a name="uplink_loss_percent" id="@cdktf/provider-aws.devicefarmNetworkProfile.DevicefarmNetworkProfileConfig.property.uplinkLossPercent"></a>

```python
uplink_loss_percent: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/devicefarm_network_profile#uplink_loss_percent DevicefarmNetworkProfile#uplink_loss_percent}.

---



