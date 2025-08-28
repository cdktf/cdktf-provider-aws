# `chimeVoiceConnectorStreaming` Submodule <a name="`chimeVoiceConnectorStreaming` Submodule" id="@cdktf/provider-aws.chimeVoiceConnectorStreaming"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ChimeVoiceConnectorStreaming <a name="ChimeVoiceConnectorStreaming" id="@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/chime_voice_connector_streaming aws_chime_voice_connector_streaming}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import chime_voice_connector_streaming

chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  data_retention: typing.Union[int, float],
  voice_connector_id: str,
  disabled: typing.Union[bool, IResolvable] = None,
  id: str = None,
  media_insights_configuration: ChimeVoiceConnectorStreamingMediaInsightsConfiguration = None,
  region: str = None,
  streaming_notification_targets: typing.List[str] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.Initializer.parameter.dataRetention">data_retention</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/chime_voice_connector_streaming#data_retention ChimeVoiceConnectorStreaming#data_retention}. |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.Initializer.parameter.voiceConnectorId">voice_connector_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/chime_voice_connector_streaming#voice_connector_id ChimeVoiceConnectorStreaming#voice_connector_id}. |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.Initializer.parameter.disabled">disabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/chime_voice_connector_streaming#disabled ChimeVoiceConnectorStreaming#disabled}. |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/chime_voice_connector_streaming#id ChimeVoiceConnectorStreaming#id}. |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.Initializer.parameter.mediaInsightsConfiguration">media_insights_configuration</a></code> | <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreamingMediaInsightsConfiguration">ChimeVoiceConnectorStreamingMediaInsightsConfiguration</a></code> | media_insights_configuration block. |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.Initializer.parameter.region">region</a></code> | <code>str</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.Initializer.parameter.streamingNotificationTargets">streaming_notification_targets</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/chime_voice_connector_streaming#streaming_notification_targets ChimeVoiceConnectorStreaming#streaming_notification_targets}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `data_retention`<sup>Required</sup> <a name="data_retention" id="@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.Initializer.parameter.dataRetention"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/chime_voice_connector_streaming#data_retention ChimeVoiceConnectorStreaming#data_retention}.

---

##### `voice_connector_id`<sup>Required</sup> <a name="voice_connector_id" id="@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.Initializer.parameter.voiceConnectorId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/chime_voice_connector_streaming#voice_connector_id ChimeVoiceConnectorStreaming#voice_connector_id}.

---

##### `disabled`<sup>Optional</sup> <a name="disabled" id="@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.Initializer.parameter.disabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/chime_voice_connector_streaming#disabled ChimeVoiceConnectorStreaming#disabled}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/chime_voice_connector_streaming#id ChimeVoiceConnectorStreaming#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `media_insights_configuration`<sup>Optional</sup> <a name="media_insights_configuration" id="@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.Initializer.parameter.mediaInsightsConfiguration"></a>

- *Type:* <a href="#@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreamingMediaInsightsConfiguration">ChimeVoiceConnectorStreamingMediaInsightsConfiguration</a>

media_insights_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/chime_voice_connector_streaming#media_insights_configuration ChimeVoiceConnectorStreaming#media_insights_configuration}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.Initializer.parameter.region"></a>

- *Type:* str

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/chime_voice_connector_streaming#region ChimeVoiceConnectorStreaming#region}

---

##### `streaming_notification_targets`<sup>Optional</sup> <a name="streaming_notification_targets" id="@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.Initializer.parameter.streamingNotificationTargets"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/chime_voice_connector_streaming#streaming_notification_targets ChimeVoiceConnectorStreaming#streaming_notification_targets}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.putMediaInsightsConfiguration">put_media_insights_configuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.resetDisabled">reset_disabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.resetMediaInsightsConfiguration">reset_media_insights_configuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.resetRegion">reset_region</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.resetStreamingNotificationTargets">reset_streaming_notification_targets</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_media_insights_configuration` <a name="put_media_insights_configuration" id="@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.putMediaInsightsConfiguration"></a>

```python
def put_media_insights_configuration(
  configuration_arn: str = None,
  disabled: typing.Union[bool, IResolvable] = None
) -> None
```

###### `configuration_arn`<sup>Optional</sup> <a name="configuration_arn" id="@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.putMediaInsightsConfiguration.parameter.configurationArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/chime_voice_connector_streaming#configuration_arn ChimeVoiceConnectorStreaming#configuration_arn}.

---

###### `disabled`<sup>Optional</sup> <a name="disabled" id="@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.putMediaInsightsConfiguration.parameter.disabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/chime_voice_connector_streaming#disabled ChimeVoiceConnectorStreaming#disabled}.

---

##### `reset_disabled` <a name="reset_disabled" id="@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.resetDisabled"></a>

```python
def reset_disabled() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_media_insights_configuration` <a name="reset_media_insights_configuration" id="@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.resetMediaInsightsConfiguration"></a>

```python
def reset_media_insights_configuration() -> None
```

##### `reset_region` <a name="reset_region" id="@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.resetRegion"></a>

```python
def reset_region() -> None
```

##### `reset_streaming_notification_targets` <a name="reset_streaming_notification_targets" id="@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.resetStreamingNotificationTargets"></a>

```python
def reset_streaming_notification_targets() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a ChimeVoiceConnectorStreaming resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import chime_voice_connector_streaming

chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import chime_voice_connector_streaming

chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import chime_voice_connector_streaming

chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_aws import chime_voice_connector_streaming

chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a ChimeVoiceConnectorStreaming resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the ChimeVoiceConnectorStreaming to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing ChimeVoiceConnectorStreaming that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/chime_voice_connector_streaming#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ChimeVoiceConnectorStreaming to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.property.mediaInsightsConfiguration">media_insights_configuration</a></code> | <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreamingMediaInsightsConfigurationOutputReference">ChimeVoiceConnectorStreamingMediaInsightsConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.property.dataRetentionInput">data_retention_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.property.disabledInput">disabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.property.mediaInsightsConfigurationInput">media_insights_configuration_input</a></code> | <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreamingMediaInsightsConfiguration">ChimeVoiceConnectorStreamingMediaInsightsConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.property.streamingNotificationTargetsInput">streaming_notification_targets_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.property.voiceConnectorIdInput">voice_connector_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.property.dataRetention">data_retention</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.property.disabled">disabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.property.streamingNotificationTargets">streaming_notification_targets</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.property.voiceConnectorId">voice_connector_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `media_insights_configuration`<sup>Required</sup> <a name="media_insights_configuration" id="@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.property.mediaInsightsConfiguration"></a>

```python
media_insights_configuration: ChimeVoiceConnectorStreamingMediaInsightsConfigurationOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreamingMediaInsightsConfigurationOutputReference">ChimeVoiceConnectorStreamingMediaInsightsConfigurationOutputReference</a>

---

##### `data_retention_input`<sup>Optional</sup> <a name="data_retention_input" id="@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.property.dataRetentionInput"></a>

```python
data_retention_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `disabled_input`<sup>Optional</sup> <a name="disabled_input" id="@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.property.disabledInput"></a>

```python
disabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `media_insights_configuration_input`<sup>Optional</sup> <a name="media_insights_configuration_input" id="@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.property.mediaInsightsConfigurationInput"></a>

```python
media_insights_configuration_input: ChimeVoiceConnectorStreamingMediaInsightsConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreamingMediaInsightsConfiguration">ChimeVoiceConnectorStreamingMediaInsightsConfiguration</a>

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `streaming_notification_targets_input`<sup>Optional</sup> <a name="streaming_notification_targets_input" id="@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.property.streamingNotificationTargetsInput"></a>

```python
streaming_notification_targets_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `voice_connector_id_input`<sup>Optional</sup> <a name="voice_connector_id_input" id="@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.property.voiceConnectorIdInput"></a>

```python
voice_connector_id_input: str
```

- *Type:* str

---

##### `data_retention`<sup>Required</sup> <a name="data_retention" id="@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.property.dataRetention"></a>

```python
data_retention: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `disabled`<sup>Required</sup> <a name="disabled" id="@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.property.disabled"></a>

```python
disabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `streaming_notification_targets`<sup>Required</sup> <a name="streaming_notification_targets" id="@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.property.streamingNotificationTargets"></a>

```python
streaming_notification_targets: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `voice_connector_id`<sup>Required</sup> <a name="voice_connector_id" id="@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.property.voiceConnectorId"></a>

```python
voice_connector_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreaming.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ChimeVoiceConnectorStreamingConfig <a name="ChimeVoiceConnectorStreamingConfig" id="@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreamingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreamingConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import chime_voice_connector_streaming

chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreamingConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  data_retention: typing.Union[int, float],
  voice_connector_id: str,
  disabled: typing.Union[bool, IResolvable] = None,
  id: str = None,
  media_insights_configuration: ChimeVoiceConnectorStreamingMediaInsightsConfiguration = None,
  region: str = None,
  streaming_notification_targets: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreamingConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreamingConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreamingConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreamingConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreamingConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreamingConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreamingConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreamingConfig.property.dataRetention">data_retention</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/chime_voice_connector_streaming#data_retention ChimeVoiceConnectorStreaming#data_retention}. |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreamingConfig.property.voiceConnectorId">voice_connector_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/chime_voice_connector_streaming#voice_connector_id ChimeVoiceConnectorStreaming#voice_connector_id}. |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreamingConfig.property.disabled">disabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/chime_voice_connector_streaming#disabled ChimeVoiceConnectorStreaming#disabled}. |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreamingConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/chime_voice_connector_streaming#id ChimeVoiceConnectorStreaming#id}. |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreamingConfig.property.mediaInsightsConfiguration">media_insights_configuration</a></code> | <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreamingMediaInsightsConfiguration">ChimeVoiceConnectorStreamingMediaInsightsConfiguration</a></code> | media_insights_configuration block. |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreamingConfig.property.region">region</a></code> | <code>str</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreamingConfig.property.streamingNotificationTargets">streaming_notification_targets</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/chime_voice_connector_streaming#streaming_notification_targets ChimeVoiceConnectorStreaming#streaming_notification_targets}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreamingConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreamingConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreamingConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreamingConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreamingConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreamingConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreamingConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `data_retention`<sup>Required</sup> <a name="data_retention" id="@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreamingConfig.property.dataRetention"></a>

```python
data_retention: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/chime_voice_connector_streaming#data_retention ChimeVoiceConnectorStreaming#data_retention}.

---

##### `voice_connector_id`<sup>Required</sup> <a name="voice_connector_id" id="@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreamingConfig.property.voiceConnectorId"></a>

```python
voice_connector_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/chime_voice_connector_streaming#voice_connector_id ChimeVoiceConnectorStreaming#voice_connector_id}.

---

##### `disabled`<sup>Optional</sup> <a name="disabled" id="@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreamingConfig.property.disabled"></a>

```python
disabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/chime_voice_connector_streaming#disabled ChimeVoiceConnectorStreaming#disabled}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreamingConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/chime_voice_connector_streaming#id ChimeVoiceConnectorStreaming#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `media_insights_configuration`<sup>Optional</sup> <a name="media_insights_configuration" id="@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreamingConfig.property.mediaInsightsConfiguration"></a>

```python
media_insights_configuration: ChimeVoiceConnectorStreamingMediaInsightsConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreamingMediaInsightsConfiguration">ChimeVoiceConnectorStreamingMediaInsightsConfiguration</a>

media_insights_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/chime_voice_connector_streaming#media_insights_configuration ChimeVoiceConnectorStreaming#media_insights_configuration}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreamingConfig.property.region"></a>

```python
region: str
```

- *Type:* str

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/chime_voice_connector_streaming#region ChimeVoiceConnectorStreaming#region}

---

##### `streaming_notification_targets`<sup>Optional</sup> <a name="streaming_notification_targets" id="@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreamingConfig.property.streamingNotificationTargets"></a>

```python
streaming_notification_targets: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/chime_voice_connector_streaming#streaming_notification_targets ChimeVoiceConnectorStreaming#streaming_notification_targets}.

---

### ChimeVoiceConnectorStreamingMediaInsightsConfiguration <a name="ChimeVoiceConnectorStreamingMediaInsightsConfiguration" id="@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreamingMediaInsightsConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreamingMediaInsightsConfiguration.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import chime_voice_connector_streaming

chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreamingMediaInsightsConfiguration(
  configuration_arn: str = None,
  disabled: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreamingMediaInsightsConfiguration.property.configurationArn">configuration_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/chime_voice_connector_streaming#configuration_arn ChimeVoiceConnectorStreaming#configuration_arn}. |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreamingMediaInsightsConfiguration.property.disabled">disabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/chime_voice_connector_streaming#disabled ChimeVoiceConnectorStreaming#disabled}. |

---

##### `configuration_arn`<sup>Optional</sup> <a name="configuration_arn" id="@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreamingMediaInsightsConfiguration.property.configurationArn"></a>

```python
configuration_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/chime_voice_connector_streaming#configuration_arn ChimeVoiceConnectorStreaming#configuration_arn}.

---

##### `disabled`<sup>Optional</sup> <a name="disabled" id="@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreamingMediaInsightsConfiguration.property.disabled"></a>

```python
disabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/chime_voice_connector_streaming#disabled ChimeVoiceConnectorStreaming#disabled}.

---

## Classes <a name="Classes" id="Classes"></a>

### ChimeVoiceConnectorStreamingMediaInsightsConfigurationOutputReference <a name="ChimeVoiceConnectorStreamingMediaInsightsConfigurationOutputReference" id="@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreamingMediaInsightsConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreamingMediaInsightsConfigurationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import chime_voice_connector_streaming

chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreamingMediaInsightsConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreamingMediaInsightsConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreamingMediaInsightsConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreamingMediaInsightsConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreamingMediaInsightsConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreamingMediaInsightsConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreamingMediaInsightsConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreamingMediaInsightsConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreamingMediaInsightsConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreamingMediaInsightsConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreamingMediaInsightsConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreamingMediaInsightsConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreamingMediaInsightsConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreamingMediaInsightsConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreamingMediaInsightsConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreamingMediaInsightsConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreamingMediaInsightsConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreamingMediaInsightsConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreamingMediaInsightsConfigurationOutputReference.resetConfigurationArn">reset_configuration_arn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreamingMediaInsightsConfigurationOutputReference.resetDisabled">reset_disabled</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreamingMediaInsightsConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreamingMediaInsightsConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreamingMediaInsightsConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreamingMediaInsightsConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreamingMediaInsightsConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreamingMediaInsightsConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreamingMediaInsightsConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreamingMediaInsightsConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreamingMediaInsightsConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreamingMediaInsightsConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreamingMediaInsightsConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreamingMediaInsightsConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreamingMediaInsightsConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreamingMediaInsightsConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreamingMediaInsightsConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreamingMediaInsightsConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreamingMediaInsightsConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreamingMediaInsightsConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreamingMediaInsightsConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreamingMediaInsightsConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreamingMediaInsightsConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreamingMediaInsightsConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreamingMediaInsightsConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreamingMediaInsightsConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_configuration_arn` <a name="reset_configuration_arn" id="@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreamingMediaInsightsConfigurationOutputReference.resetConfigurationArn"></a>

```python
def reset_configuration_arn() -> None
```

##### `reset_disabled` <a name="reset_disabled" id="@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreamingMediaInsightsConfigurationOutputReference.resetDisabled"></a>

```python
def reset_disabled() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreamingMediaInsightsConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreamingMediaInsightsConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreamingMediaInsightsConfigurationOutputReference.property.configurationArnInput">configuration_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreamingMediaInsightsConfigurationOutputReference.property.disabledInput">disabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreamingMediaInsightsConfigurationOutputReference.property.configurationArn">configuration_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreamingMediaInsightsConfigurationOutputReference.property.disabled">disabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreamingMediaInsightsConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreamingMediaInsightsConfiguration">ChimeVoiceConnectorStreamingMediaInsightsConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreamingMediaInsightsConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreamingMediaInsightsConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `configuration_arn_input`<sup>Optional</sup> <a name="configuration_arn_input" id="@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreamingMediaInsightsConfigurationOutputReference.property.configurationArnInput"></a>

```python
configuration_arn_input: str
```

- *Type:* str

---

##### `disabled_input`<sup>Optional</sup> <a name="disabled_input" id="@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreamingMediaInsightsConfigurationOutputReference.property.disabledInput"></a>

```python
disabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `configuration_arn`<sup>Required</sup> <a name="configuration_arn" id="@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreamingMediaInsightsConfigurationOutputReference.property.configurationArn"></a>

```python
configuration_arn: str
```

- *Type:* str

---

##### `disabled`<sup>Required</sup> <a name="disabled" id="@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreamingMediaInsightsConfigurationOutputReference.property.disabled"></a>

```python
disabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreamingMediaInsightsConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: ChimeVoiceConnectorStreamingMediaInsightsConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.chimeVoiceConnectorStreaming.ChimeVoiceConnectorStreamingMediaInsightsConfiguration">ChimeVoiceConnectorStreamingMediaInsightsConfiguration</a>

---



