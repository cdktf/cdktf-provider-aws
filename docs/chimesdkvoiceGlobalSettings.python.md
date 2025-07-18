# `chimesdkvoiceGlobalSettings` Submodule <a name="`chimesdkvoiceGlobalSettings` Submodule" id="@cdktf/provider-aws.chimesdkvoiceGlobalSettings"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ChimesdkvoiceGlobalSettings <a name="ChimesdkvoiceGlobalSettings" id="@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettings"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/chimesdkvoice_global_settings aws_chimesdkvoice_global_settings}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettings.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import chimesdkvoice_global_settings

chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettings(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  voice_connector: ChimesdkvoiceGlobalSettingsVoiceConnector,
  id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettings.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettings.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettings.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettings.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettings.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettings.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettings.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettings.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettings.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettings.Initializer.parameter.voiceConnector">voice_connector</a></code> | <code><a href="#@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettingsVoiceConnector">ChimesdkvoiceGlobalSettingsVoiceConnector</a></code> | voice_connector block. |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettings.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/chimesdkvoice_global_settings#id ChimesdkvoiceGlobalSettings#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettings.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettings.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettings.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettings.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettings.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettings.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettings.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettings.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettings.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `voice_connector`<sup>Required</sup> <a name="voice_connector" id="@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettings.Initializer.parameter.voiceConnector"></a>

- *Type:* <a href="#@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettingsVoiceConnector">ChimesdkvoiceGlobalSettingsVoiceConnector</a>

voice_connector block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/chimesdkvoice_global_settings#voice_connector ChimesdkvoiceGlobalSettings#voice_connector}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettings.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/chimesdkvoice_global_settings#id ChimesdkvoiceGlobalSettings#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettings.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettings.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettings.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettings.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettings.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettings.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettings.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettings.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettings.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettings.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettings.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettings.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettings.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettings.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettings.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettings.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettings.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettings.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettings.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettings.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettings.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettings.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettings.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettings.putVoiceConnector">put_voice_connector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettings.resetId">reset_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettings.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettings.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettings.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettings.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettings.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettings.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettings.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettings.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettings.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettings.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettings.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettings.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettings.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettings.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettings.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettings.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettings.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettings.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettings.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettings.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettings.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettings.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettings.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettings.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettings.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettings.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettings.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettings.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettings.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettings.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettings.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettings.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettings.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettings.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettings.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettings.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettings.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettings.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettings.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettings.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettings.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettings.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettings.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_voice_connector` <a name="put_voice_connector" id="@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettings.putVoiceConnector"></a>

```python
def put_voice_connector(
  cdr_bucket: str = None
) -> None
```

###### `cdr_bucket`<sup>Optional</sup> <a name="cdr_bucket" id="@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettings.putVoiceConnector.parameter.cdrBucket"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/chimesdkvoice_global_settings#cdr_bucket ChimesdkvoiceGlobalSettings#cdr_bucket}.

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettings.resetId"></a>

```python
def reset_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettings.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettings.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettings.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettings.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a ChimesdkvoiceGlobalSettings resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettings.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import chimesdkvoice_global_settings

chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettings.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettings.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettings.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import chimesdkvoice_global_settings

chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettings.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettings.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettings.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import chimesdkvoice_global_settings

chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettings.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettings.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettings.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_aws import chimesdkvoice_global_settings

chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettings.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a ChimesdkvoiceGlobalSettings resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettings.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettings.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the ChimesdkvoiceGlobalSettings to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettings.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing ChimesdkvoiceGlobalSettings that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/chimesdkvoice_global_settings#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettings.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ChimesdkvoiceGlobalSettings to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettings.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettings.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettings.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettings.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettings.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettings.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettings.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettings.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettings.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettings.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettings.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettings.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettings.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettings.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettings.property.voiceConnector">voice_connector</a></code> | <code><a href="#@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettingsVoiceConnectorOutputReference">ChimesdkvoiceGlobalSettingsVoiceConnectorOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettings.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettings.property.voiceConnectorInput">voice_connector_input</a></code> | <code><a href="#@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettingsVoiceConnector">ChimesdkvoiceGlobalSettingsVoiceConnector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettings.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettings.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettings.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettings.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettings.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettings.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettings.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettings.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettings.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettings.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettings.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettings.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettings.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettings.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettings.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `voice_connector`<sup>Required</sup> <a name="voice_connector" id="@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettings.property.voiceConnector"></a>

```python
voice_connector: ChimesdkvoiceGlobalSettingsVoiceConnectorOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettingsVoiceConnectorOutputReference">ChimesdkvoiceGlobalSettingsVoiceConnectorOutputReference</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettings.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `voice_connector_input`<sup>Optional</sup> <a name="voice_connector_input" id="@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettings.property.voiceConnectorInput"></a>

```python
voice_connector_input: ChimesdkvoiceGlobalSettingsVoiceConnector
```

- *Type:* <a href="#@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettingsVoiceConnector">ChimesdkvoiceGlobalSettingsVoiceConnector</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettings.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettings.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettings.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ChimesdkvoiceGlobalSettingsConfig <a name="ChimesdkvoiceGlobalSettingsConfig" id="@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettingsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettingsConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import chimesdkvoice_global_settings

chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettingsConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  voice_connector: ChimesdkvoiceGlobalSettingsVoiceConnector,
  id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettingsConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettingsConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettingsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettingsConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettingsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettingsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettingsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettingsConfig.property.voiceConnector">voice_connector</a></code> | <code><a href="#@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettingsVoiceConnector">ChimesdkvoiceGlobalSettingsVoiceConnector</a></code> | voice_connector block. |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettingsConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/chimesdkvoice_global_settings#id ChimesdkvoiceGlobalSettings#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettingsConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettingsConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettingsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettingsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettingsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettingsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettingsConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `voice_connector`<sup>Required</sup> <a name="voice_connector" id="@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettingsConfig.property.voiceConnector"></a>

```python
voice_connector: ChimesdkvoiceGlobalSettingsVoiceConnector
```

- *Type:* <a href="#@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettingsVoiceConnector">ChimesdkvoiceGlobalSettingsVoiceConnector</a>

voice_connector block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/chimesdkvoice_global_settings#voice_connector ChimesdkvoiceGlobalSettings#voice_connector}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettingsConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/chimesdkvoice_global_settings#id ChimesdkvoiceGlobalSettings#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### ChimesdkvoiceGlobalSettingsVoiceConnector <a name="ChimesdkvoiceGlobalSettingsVoiceConnector" id="@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettingsVoiceConnector"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettingsVoiceConnector.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import chimesdkvoice_global_settings

chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettingsVoiceConnector(
  cdr_bucket: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettingsVoiceConnector.property.cdrBucket">cdr_bucket</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/chimesdkvoice_global_settings#cdr_bucket ChimesdkvoiceGlobalSettings#cdr_bucket}. |

---

##### `cdr_bucket`<sup>Optional</sup> <a name="cdr_bucket" id="@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettingsVoiceConnector.property.cdrBucket"></a>

```python
cdr_bucket: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/chimesdkvoice_global_settings#cdr_bucket ChimesdkvoiceGlobalSettings#cdr_bucket}.

---

## Classes <a name="Classes" id="Classes"></a>

### ChimesdkvoiceGlobalSettingsVoiceConnectorOutputReference <a name="ChimesdkvoiceGlobalSettingsVoiceConnectorOutputReference" id="@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettingsVoiceConnectorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettingsVoiceConnectorOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import chimesdkvoice_global_settings

chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettingsVoiceConnectorOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettingsVoiceConnectorOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettingsVoiceConnectorOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettingsVoiceConnectorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettingsVoiceConnectorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettingsVoiceConnectorOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettingsVoiceConnectorOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettingsVoiceConnectorOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettingsVoiceConnectorOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettingsVoiceConnectorOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettingsVoiceConnectorOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettingsVoiceConnectorOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettingsVoiceConnectorOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettingsVoiceConnectorOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettingsVoiceConnectorOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettingsVoiceConnectorOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettingsVoiceConnectorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettingsVoiceConnectorOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettingsVoiceConnectorOutputReference.resetCdrBucket">reset_cdr_bucket</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettingsVoiceConnectorOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettingsVoiceConnectorOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettingsVoiceConnectorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettingsVoiceConnectorOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettingsVoiceConnectorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettingsVoiceConnectorOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettingsVoiceConnectorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettingsVoiceConnectorOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettingsVoiceConnectorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettingsVoiceConnectorOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettingsVoiceConnectorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettingsVoiceConnectorOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettingsVoiceConnectorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettingsVoiceConnectorOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettingsVoiceConnectorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettingsVoiceConnectorOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettingsVoiceConnectorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettingsVoiceConnectorOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettingsVoiceConnectorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettingsVoiceConnectorOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettingsVoiceConnectorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettingsVoiceConnectorOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettingsVoiceConnectorOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettingsVoiceConnectorOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_cdr_bucket` <a name="reset_cdr_bucket" id="@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettingsVoiceConnectorOutputReference.resetCdrBucket"></a>

```python
def reset_cdr_bucket() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettingsVoiceConnectorOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettingsVoiceConnectorOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettingsVoiceConnectorOutputReference.property.cdrBucketInput">cdr_bucket_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettingsVoiceConnectorOutputReference.property.cdrBucket">cdr_bucket</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettingsVoiceConnectorOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettingsVoiceConnector">ChimesdkvoiceGlobalSettingsVoiceConnector</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettingsVoiceConnectorOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettingsVoiceConnectorOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cdr_bucket_input`<sup>Optional</sup> <a name="cdr_bucket_input" id="@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettingsVoiceConnectorOutputReference.property.cdrBucketInput"></a>

```python
cdr_bucket_input: str
```

- *Type:* str

---

##### `cdr_bucket`<sup>Required</sup> <a name="cdr_bucket" id="@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettingsVoiceConnectorOutputReference.property.cdrBucket"></a>

```python
cdr_bucket: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettingsVoiceConnectorOutputReference.property.internalValue"></a>

```python
internal_value: ChimesdkvoiceGlobalSettingsVoiceConnector
```

- *Type:* <a href="#@cdktf/provider-aws.chimesdkvoiceGlobalSettings.ChimesdkvoiceGlobalSettingsVoiceConnector">ChimesdkvoiceGlobalSettingsVoiceConnector</a>

---



