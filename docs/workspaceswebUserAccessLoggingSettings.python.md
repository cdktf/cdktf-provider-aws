# `workspaceswebUserAccessLoggingSettings` Submodule <a name="`workspaceswebUserAccessLoggingSettings` Submodule" id="@cdktf/provider-aws.workspaceswebUserAccessLoggingSettings"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### WorkspaceswebUserAccessLoggingSettings <a name="WorkspaceswebUserAccessLoggingSettings" id="@cdktf/provider-aws.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettings"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/workspacesweb_user_access_logging_settings aws_workspacesweb_user_access_logging_settings}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettings.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import workspacesweb_user_access_logging_settings

workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettings(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  kinesis_stream_arn: str,
  region: str = None,
  tags: typing.Mapping[str] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettings.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettings.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettings.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettings.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettings.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettings.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettings.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettings.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettings.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettings.Initializer.parameter.kinesisStreamArn">kinesis_stream_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/workspacesweb_user_access_logging_settings#kinesis_stream_arn WorkspaceswebUserAccessLoggingSettings#kinesis_stream_arn}. |
| <code><a href="#@cdktf/provider-aws.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettings.Initializer.parameter.region">region</a></code> | <code>str</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktf/provider-aws.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettings.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/workspacesweb_user_access_logging_settings#tags WorkspaceswebUserAccessLoggingSettings#tags}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettings.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettings.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettings.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettings.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettings.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettings.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettings.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettings.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettings.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `kinesis_stream_arn`<sup>Required</sup> <a name="kinesis_stream_arn" id="@cdktf/provider-aws.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettings.Initializer.parameter.kinesisStreamArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/workspacesweb_user_access_logging_settings#kinesis_stream_arn WorkspaceswebUserAccessLoggingSettings#kinesis_stream_arn}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-aws.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettings.Initializer.parameter.region"></a>

- *Type:* str

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/workspacesweb_user_access_logging_settings#region WorkspaceswebUserAccessLoggingSettings#region}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettings.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/workspacesweb_user_access_logging_settings#tags WorkspaceswebUserAccessLoggingSettings#tags}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettings.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettings.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettings.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettings.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettings.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettings.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettings.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettings.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettings.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettings.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettings.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettings.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettings.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettings.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettings.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettings.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettings.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettings.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettings.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettings.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettings.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettings.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettings.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettings.resetRegion">reset_region</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettings.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettings.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettings.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettings.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettings.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettings.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettings.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettings.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-aws.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettings.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettings.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettings.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-aws.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettings.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-aws.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettings.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettings.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettings.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettings.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettings.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettings.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettings.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettings.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettings.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettings.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettings.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettings.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettings.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettings.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettings.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettings.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettings.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettings.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettings.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-aws.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettings.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-aws.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettings.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettings.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettings.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettings.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettings.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-aws.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettings.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettings.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-aws.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettings.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-aws.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettings.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettings.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-aws.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettings.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettings.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `reset_region` <a name="reset_region" id="@cdktf/provider-aws.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettings.resetRegion"></a>

```python
def reset_region() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-aws.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettings.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettings.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettings.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettings.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettings.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a WorkspaceswebUserAccessLoggingSettings resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettings.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import workspacesweb_user_access_logging_settings

workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettings.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettings.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettings.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import workspacesweb_user_access_logging_settings

workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettings.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettings.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettings.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import workspacesweb_user_access_logging_settings

workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettings.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettings.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-aws.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettings.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_aws import workspacesweb_user_access_logging_settings

workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettings.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a WorkspaceswebUserAccessLoggingSettings resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettings.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-aws.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettings.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the WorkspaceswebUserAccessLoggingSettings to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-aws.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettings.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing WorkspaceswebUserAccessLoggingSettings that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/workspacesweb_user_access_logging_settings#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettings.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the WorkspaceswebUserAccessLoggingSettings to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettings.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettings.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettings.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettings.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettings.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettings.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettings.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettings.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettings.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettings.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettings.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettings.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettings.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettings.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettings.property.associatedPortalArns">associated_portal_arns</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettings.property.tagsAll">tags_all</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettings.property.userAccessLoggingSettingsArn">user_access_logging_settings_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettings.property.kinesisStreamArnInput">kinesis_stream_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettings.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettings.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettings.property.kinesisStreamArn">kinesis_stream_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettings.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettings.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettings.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettings.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettings.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettings.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettings.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettings.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettings.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettings.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettings.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettings.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettings.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettings.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettings.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettings.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `associated_portal_arns`<sup>Required</sup> <a name="associated_portal_arns" id="@cdktf/provider-aws.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettings.property.associatedPortalArns"></a>

```python
associated_portal_arns: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `tags_all`<sup>Required</sup> <a name="tags_all" id="@cdktf/provider-aws.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettings.property.tagsAll"></a>

```python
tags_all: StringMap
```

- *Type:* cdktf.StringMap

---

##### `user_access_logging_settings_arn`<sup>Required</sup> <a name="user_access_logging_settings_arn" id="@cdktf/provider-aws.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettings.property.userAccessLoggingSettingsArn"></a>

```python
user_access_logging_settings_arn: str
```

- *Type:* str

---

##### `kinesis_stream_arn_input`<sup>Optional</sup> <a name="kinesis_stream_arn_input" id="@cdktf/provider-aws.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettings.property.kinesisStreamArnInput"></a>

```python
kinesis_stream_arn_input: str
```

- *Type:* str

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktf/provider-aws.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettings.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-aws.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettings.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `kinesis_stream_arn`<sup>Required</sup> <a name="kinesis_stream_arn" id="@cdktf/provider-aws.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettings.property.kinesisStreamArn"></a>

```python
kinesis_stream_arn: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-aws.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettings.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettings.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettings.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettings.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### WorkspaceswebUserAccessLoggingSettingsConfig <a name="WorkspaceswebUserAccessLoggingSettingsConfig" id="@cdktf/provider-aws.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettingsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettingsConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import workspacesweb_user_access_logging_settings

workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettingsConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  kinesis_stream_arn: str,
  region: str = None,
  tags: typing.Mapping[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettingsConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettingsConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettingsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettingsConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettingsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettingsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettingsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettingsConfig.property.kinesisStreamArn">kinesis_stream_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/workspacesweb_user_access_logging_settings#kinesis_stream_arn WorkspaceswebUserAccessLoggingSettings#kinesis_stream_arn}. |
| <code><a href="#@cdktf/provider-aws.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettingsConfig.property.region">region</a></code> | <code>str</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktf/provider-aws.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettingsConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/workspacesweb_user_access_logging_settings#tags WorkspaceswebUserAccessLoggingSettings#tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettingsConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettingsConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettingsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettingsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettingsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettingsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettingsConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `kinesis_stream_arn`<sup>Required</sup> <a name="kinesis_stream_arn" id="@cdktf/provider-aws.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettingsConfig.property.kinesisStreamArn"></a>

```python
kinesis_stream_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/workspacesweb_user_access_logging_settings#kinesis_stream_arn WorkspaceswebUserAccessLoggingSettings#kinesis_stream_arn}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-aws.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettingsConfig.property.region"></a>

```python
region: str
```

- *Type:* str

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/workspacesweb_user_access_logging_settings#region WorkspaceswebUserAccessLoggingSettings#region}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.workspaceswebUserAccessLoggingSettings.WorkspaceswebUserAccessLoggingSettingsConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.11.0/docs/resources/workspacesweb_user_access_logging_settings#tags WorkspaceswebUserAccessLoggingSettings#tags}.

---



