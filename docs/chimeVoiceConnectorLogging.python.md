# `chimeVoiceConnectorLogging` Submodule <a name="`chimeVoiceConnectorLogging` Submodule" id="@cdktf/provider-aws.chimeVoiceConnectorLogging"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ChimeVoiceConnectorLogging <a name="ChimeVoiceConnectorLogging" id="@cdktf/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLogging"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.71.0/docs/resources/chime_voice_connector_logging aws_chime_voice_connector_logging}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLogging.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import chime_voice_connector_logging

chimeVoiceConnectorLogging.ChimeVoiceConnectorLogging(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  voice_connector_id: str,
  enable_media_metric_logs: typing.Union[bool, IResolvable] = None,
  enable_sip_logs: typing.Union[bool, IResolvable] = None,
  id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLogging.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLogging.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLogging.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLogging.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLogging.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLogging.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLogging.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLogging.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLogging.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLogging.Initializer.parameter.voiceConnectorId">voice_connector_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.71.0/docs/resources/chime_voice_connector_logging#voice_connector_id ChimeVoiceConnectorLogging#voice_connector_id}. |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLogging.Initializer.parameter.enableMediaMetricLogs">enable_media_metric_logs</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.71.0/docs/resources/chime_voice_connector_logging#enable_media_metric_logs ChimeVoiceConnectorLogging#enable_media_metric_logs}. |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLogging.Initializer.parameter.enableSipLogs">enable_sip_logs</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.71.0/docs/resources/chime_voice_connector_logging#enable_sip_logs ChimeVoiceConnectorLogging#enable_sip_logs}. |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLogging.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.71.0/docs/resources/chime_voice_connector_logging#id ChimeVoiceConnectorLogging#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLogging.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLogging.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLogging.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLogging.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLogging.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLogging.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLogging.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLogging.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLogging.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `voice_connector_id`<sup>Required</sup> <a name="voice_connector_id" id="@cdktf/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLogging.Initializer.parameter.voiceConnectorId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.71.0/docs/resources/chime_voice_connector_logging#voice_connector_id ChimeVoiceConnectorLogging#voice_connector_id}.

---

##### `enable_media_metric_logs`<sup>Optional</sup> <a name="enable_media_metric_logs" id="@cdktf/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLogging.Initializer.parameter.enableMediaMetricLogs"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.71.0/docs/resources/chime_voice_connector_logging#enable_media_metric_logs ChimeVoiceConnectorLogging#enable_media_metric_logs}.

---

##### `enable_sip_logs`<sup>Optional</sup> <a name="enable_sip_logs" id="@cdktf/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLogging.Initializer.parameter.enableSipLogs"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.71.0/docs/resources/chime_voice_connector_logging#enable_sip_logs ChimeVoiceConnectorLogging#enable_sip_logs}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLogging.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.71.0/docs/resources/chime_voice_connector_logging#id ChimeVoiceConnectorLogging#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLogging.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLogging.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLogging.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLogging.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLogging.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLogging.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLogging.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLogging.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLogging.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLogging.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLogging.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLogging.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLogging.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLogging.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLogging.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLogging.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLogging.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLogging.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLogging.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLogging.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLogging.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLogging.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLogging.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLogging.resetEnableMediaMetricLogs">reset_enable_media_metric_logs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLogging.resetEnableSipLogs">reset_enable_sip_logs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLogging.resetId">reset_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLogging.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLogging.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLogging.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLogging.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLogging.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLogging.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLogging.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLogging.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLogging.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLogging.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLogging.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLogging.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLogging.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLogging.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLogging.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLogging.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLogging.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLogging.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLogging.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLogging.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLogging.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLogging.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLogging.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLogging.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLogging.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLogging.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLogging.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLogging.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLogging.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLogging.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLogging.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLogging.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLogging.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLogging.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLogging.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLogging.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLogging.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLogging.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLogging.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLogging.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLogging.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLogging.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLogging.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `reset_enable_media_metric_logs` <a name="reset_enable_media_metric_logs" id="@cdktf/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLogging.resetEnableMediaMetricLogs"></a>

```python
def reset_enable_media_metric_logs() -> None
```

##### `reset_enable_sip_logs` <a name="reset_enable_sip_logs" id="@cdktf/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLogging.resetEnableSipLogs"></a>

```python
def reset_enable_sip_logs() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLogging.resetId"></a>

```python
def reset_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLogging.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLogging.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLogging.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLogging.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a ChimeVoiceConnectorLogging resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLogging.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import chime_voice_connector_logging

chimeVoiceConnectorLogging.ChimeVoiceConnectorLogging.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLogging.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLogging.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import chime_voice_connector_logging

chimeVoiceConnectorLogging.ChimeVoiceConnectorLogging.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLogging.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLogging.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import chime_voice_connector_logging

chimeVoiceConnectorLogging.ChimeVoiceConnectorLogging.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLogging.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLogging.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_aws import chime_voice_connector_logging

chimeVoiceConnectorLogging.ChimeVoiceConnectorLogging.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a ChimeVoiceConnectorLogging resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLogging.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLogging.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the ChimeVoiceConnectorLogging to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLogging.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing ChimeVoiceConnectorLogging that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.71.0/docs/resources/chime_voice_connector_logging#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLogging.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ChimeVoiceConnectorLogging to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLogging.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLogging.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLogging.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLogging.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLogging.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLogging.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLogging.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLogging.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLogging.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLogging.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLogging.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLogging.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLogging.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLogging.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLogging.property.enableMediaMetricLogsInput">enable_media_metric_logs_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLogging.property.enableSipLogsInput">enable_sip_logs_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLogging.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLogging.property.voiceConnectorIdInput">voice_connector_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLogging.property.enableMediaMetricLogs">enable_media_metric_logs</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLogging.property.enableSipLogs">enable_sip_logs</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLogging.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLogging.property.voiceConnectorId">voice_connector_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLogging.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLogging.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLogging.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLogging.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLogging.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLogging.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLogging.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLogging.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLogging.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLogging.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLogging.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLogging.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLogging.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLogging.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `enable_media_metric_logs_input`<sup>Optional</sup> <a name="enable_media_metric_logs_input" id="@cdktf/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLogging.property.enableMediaMetricLogsInput"></a>

```python
enable_media_metric_logs_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enable_sip_logs_input`<sup>Optional</sup> <a name="enable_sip_logs_input" id="@cdktf/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLogging.property.enableSipLogsInput"></a>

```python
enable_sip_logs_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLogging.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `voice_connector_id_input`<sup>Optional</sup> <a name="voice_connector_id_input" id="@cdktf/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLogging.property.voiceConnectorIdInput"></a>

```python
voice_connector_id_input: str
```

- *Type:* str

---

##### `enable_media_metric_logs`<sup>Required</sup> <a name="enable_media_metric_logs" id="@cdktf/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLogging.property.enableMediaMetricLogs"></a>

```python
enable_media_metric_logs: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enable_sip_logs`<sup>Required</sup> <a name="enable_sip_logs" id="@cdktf/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLogging.property.enableSipLogs"></a>

```python
enable_sip_logs: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLogging.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `voice_connector_id`<sup>Required</sup> <a name="voice_connector_id" id="@cdktf/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLogging.property.voiceConnectorId"></a>

```python
voice_connector_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLogging.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLogging.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ChimeVoiceConnectorLoggingConfig <a name="ChimeVoiceConnectorLoggingConfig" id="@cdktf/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLoggingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLoggingConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import chime_voice_connector_logging

chimeVoiceConnectorLogging.ChimeVoiceConnectorLoggingConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  voice_connector_id: str,
  enable_media_metric_logs: typing.Union[bool, IResolvable] = None,
  enable_sip_logs: typing.Union[bool, IResolvable] = None,
  id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLoggingConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLoggingConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLoggingConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLoggingConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLoggingConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLoggingConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLoggingConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLoggingConfig.property.voiceConnectorId">voice_connector_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.71.0/docs/resources/chime_voice_connector_logging#voice_connector_id ChimeVoiceConnectorLogging#voice_connector_id}. |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLoggingConfig.property.enableMediaMetricLogs">enable_media_metric_logs</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.71.0/docs/resources/chime_voice_connector_logging#enable_media_metric_logs ChimeVoiceConnectorLogging#enable_media_metric_logs}. |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLoggingConfig.property.enableSipLogs">enable_sip_logs</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.71.0/docs/resources/chime_voice_connector_logging#enable_sip_logs ChimeVoiceConnectorLogging#enable_sip_logs}. |
| <code><a href="#@cdktf/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLoggingConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.71.0/docs/resources/chime_voice_connector_logging#id ChimeVoiceConnectorLogging#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLoggingConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLoggingConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLoggingConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLoggingConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLoggingConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLoggingConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLoggingConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `voice_connector_id`<sup>Required</sup> <a name="voice_connector_id" id="@cdktf/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLoggingConfig.property.voiceConnectorId"></a>

```python
voice_connector_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.71.0/docs/resources/chime_voice_connector_logging#voice_connector_id ChimeVoiceConnectorLogging#voice_connector_id}.

---

##### `enable_media_metric_logs`<sup>Optional</sup> <a name="enable_media_metric_logs" id="@cdktf/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLoggingConfig.property.enableMediaMetricLogs"></a>

```python
enable_media_metric_logs: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.71.0/docs/resources/chime_voice_connector_logging#enable_media_metric_logs ChimeVoiceConnectorLogging#enable_media_metric_logs}.

---

##### `enable_sip_logs`<sup>Optional</sup> <a name="enable_sip_logs" id="@cdktf/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLoggingConfig.property.enableSipLogs"></a>

```python
enable_sip_logs: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.71.0/docs/resources/chime_voice_connector_logging#enable_sip_logs ChimeVoiceConnectorLogging#enable_sip_logs}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.chimeVoiceConnectorLogging.ChimeVoiceConnectorLoggingConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.71.0/docs/resources/chime_voice_connector_logging#id ChimeVoiceConnectorLogging#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



