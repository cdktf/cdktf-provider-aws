# `verifiedaccessInstanceLoggingConfiguration` Submodule <a name="`verifiedaccessInstanceLoggingConfiguration` Submodule" id="@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VerifiedaccessInstanceLoggingConfiguration <a name="VerifiedaccessInstanceLoggingConfiguration" id="@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfiguration"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.51.0/docs/resources/verifiedaccess_instance_logging_configuration aws_verifiedaccess_instance_logging_configuration}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfiguration.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import verifiedaccess_instance_logging_configuration

verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfiguration(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  access_logs: VerifiedaccessInstanceLoggingConfigurationAccessLogs,
  verifiedaccess_instance_id: str,
  id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfiguration.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfiguration.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfiguration.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfiguration.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfiguration.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfiguration.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfiguration.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfiguration.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfiguration.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfiguration.Initializer.parameter.accessLogs">access_logs</a></code> | <code><a href="#@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfigurationAccessLogs">VerifiedaccessInstanceLoggingConfigurationAccessLogs</a></code> | access_logs block. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfiguration.Initializer.parameter.verifiedaccessInstanceId">verifiedaccess_instance_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.51.0/docs/resources/verifiedaccess_instance_logging_configuration#verifiedaccess_instance_id VerifiedaccessInstanceLoggingConfiguration#verifiedaccess_instance_id}. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfiguration.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.51.0/docs/resources/verifiedaccess_instance_logging_configuration#id VerifiedaccessInstanceLoggingConfiguration#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfiguration.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfiguration.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfiguration.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfiguration.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfiguration.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfiguration.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfiguration.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfiguration.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfiguration.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `access_logs`<sup>Required</sup> <a name="access_logs" id="@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfiguration.Initializer.parameter.accessLogs"></a>

- *Type:* <a href="#@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfigurationAccessLogs">VerifiedaccessInstanceLoggingConfigurationAccessLogs</a>

access_logs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.51.0/docs/resources/verifiedaccess_instance_logging_configuration#access_logs VerifiedaccessInstanceLoggingConfiguration#access_logs}

---

##### `verifiedaccess_instance_id`<sup>Required</sup> <a name="verifiedaccess_instance_id" id="@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfiguration.Initializer.parameter.verifiedaccessInstanceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.51.0/docs/resources/verifiedaccess_instance_logging_configuration#verifiedaccess_instance_id VerifiedaccessInstanceLoggingConfiguration#verifiedaccess_instance_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfiguration.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.51.0/docs/resources/verifiedaccess_instance_logging_configuration#id VerifiedaccessInstanceLoggingConfiguration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfiguration.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfiguration.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfiguration.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfiguration.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfiguration.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfiguration.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfiguration.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfiguration.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfiguration.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfiguration.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfiguration.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfiguration.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfiguration.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfiguration.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfiguration.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfiguration.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfiguration.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfiguration.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfiguration.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfiguration.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfiguration.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfiguration.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfiguration.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfiguration.putAccessLogs">put_access_logs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfiguration.resetId">reset_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfiguration.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfiguration.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfiguration.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfiguration.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfiguration.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfiguration.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfiguration.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfiguration.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfiguration.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfiguration.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfiguration.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfiguration.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfiguration.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfiguration.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfiguration.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfiguration.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfiguration.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfiguration.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfiguration.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfiguration.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfiguration.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfiguration.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfiguration.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfiguration.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfiguration.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfiguration.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfiguration.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfiguration.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfiguration.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfiguration.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfiguration.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfiguration.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_access_logs` <a name="put_access_logs" id="@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfiguration.putAccessLogs"></a>

```python
def put_access_logs(
  cloudwatch_logs: VerifiedaccessInstanceLoggingConfigurationAccessLogsCloudwatchLogs = None,
  include_trust_context: typing.Union[bool, IResolvable] = None,
  kinesis_data_firehose: VerifiedaccessInstanceLoggingConfigurationAccessLogsKinesisDataFirehose = None,
  log_version: str = None,
  s3: VerifiedaccessInstanceLoggingConfigurationAccessLogsS3 = None
) -> None
```

###### `cloudwatch_logs`<sup>Optional</sup> <a name="cloudwatch_logs" id="@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfiguration.putAccessLogs.parameter.cloudwatchLogs"></a>

- *Type:* <a href="#@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfigurationAccessLogsCloudwatchLogs">VerifiedaccessInstanceLoggingConfigurationAccessLogsCloudwatchLogs</a>

cloudwatch_logs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.51.0/docs/resources/verifiedaccess_instance_logging_configuration#cloudwatch_logs VerifiedaccessInstanceLoggingConfiguration#cloudwatch_logs}

---

###### `include_trust_context`<sup>Optional</sup> <a name="include_trust_context" id="@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfiguration.putAccessLogs.parameter.includeTrustContext"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.51.0/docs/resources/verifiedaccess_instance_logging_configuration#include_trust_context VerifiedaccessInstanceLoggingConfiguration#include_trust_context}.

---

###### `kinesis_data_firehose`<sup>Optional</sup> <a name="kinesis_data_firehose" id="@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfiguration.putAccessLogs.parameter.kinesisDataFirehose"></a>

- *Type:* <a href="#@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfigurationAccessLogsKinesisDataFirehose">VerifiedaccessInstanceLoggingConfigurationAccessLogsKinesisDataFirehose</a>

kinesis_data_firehose block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.51.0/docs/resources/verifiedaccess_instance_logging_configuration#kinesis_data_firehose VerifiedaccessInstanceLoggingConfiguration#kinesis_data_firehose}

---

###### `log_version`<sup>Optional</sup> <a name="log_version" id="@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfiguration.putAccessLogs.parameter.logVersion"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.51.0/docs/resources/verifiedaccess_instance_logging_configuration#log_version VerifiedaccessInstanceLoggingConfiguration#log_version}.

---

###### `s3`<sup>Optional</sup> <a name="s3" id="@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfiguration.putAccessLogs.parameter.s3"></a>

- *Type:* <a href="#@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfigurationAccessLogsS3">VerifiedaccessInstanceLoggingConfigurationAccessLogsS3</a>

s3 block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.51.0/docs/resources/verifiedaccess_instance_logging_configuration#s3 VerifiedaccessInstanceLoggingConfiguration#s3}

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfiguration.resetId"></a>

```python
def reset_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfiguration.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfiguration.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfiguration.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfiguration.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a VerifiedaccessInstanceLoggingConfiguration resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfiguration.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import verifiedaccess_instance_logging_configuration

verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfiguration.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfiguration.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfiguration.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import verifiedaccess_instance_logging_configuration

verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfiguration.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfiguration.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import verifiedaccess_instance_logging_configuration

verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfiguration.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfiguration.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfiguration.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_aws import verifiedaccess_instance_logging_configuration

verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfiguration.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a VerifiedaccessInstanceLoggingConfiguration resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfiguration.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfiguration.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the VerifiedaccessInstanceLoggingConfiguration to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfiguration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing VerifiedaccessInstanceLoggingConfiguration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.51.0/docs/resources/verifiedaccess_instance_logging_configuration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfiguration.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the VerifiedaccessInstanceLoggingConfiguration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfiguration.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfiguration.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfiguration.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfiguration.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfiguration.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfiguration.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfiguration.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfiguration.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfiguration.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfiguration.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfiguration.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfiguration.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfiguration.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfiguration.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfiguration.property.accessLogs">access_logs</a></code> | <code><a href="#@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfigurationAccessLogsOutputReference">VerifiedaccessInstanceLoggingConfigurationAccessLogsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfiguration.property.accessLogsInput">access_logs_input</a></code> | <code><a href="#@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfigurationAccessLogs">VerifiedaccessInstanceLoggingConfigurationAccessLogs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfiguration.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfiguration.property.verifiedaccessInstanceIdInput">verifiedaccess_instance_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfiguration.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfiguration.property.verifiedaccessInstanceId">verifiedaccess_instance_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfiguration.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfiguration.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfiguration.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfiguration.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfiguration.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfiguration.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfiguration.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfiguration.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfiguration.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfiguration.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfiguration.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfiguration.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfiguration.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfiguration.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `access_logs`<sup>Required</sup> <a name="access_logs" id="@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfiguration.property.accessLogs"></a>

```python
access_logs: VerifiedaccessInstanceLoggingConfigurationAccessLogsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfigurationAccessLogsOutputReference">VerifiedaccessInstanceLoggingConfigurationAccessLogsOutputReference</a>

---

##### `access_logs_input`<sup>Optional</sup> <a name="access_logs_input" id="@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfiguration.property.accessLogsInput"></a>

```python
access_logs_input: VerifiedaccessInstanceLoggingConfigurationAccessLogs
```

- *Type:* <a href="#@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfigurationAccessLogs">VerifiedaccessInstanceLoggingConfigurationAccessLogs</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfiguration.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `verifiedaccess_instance_id_input`<sup>Optional</sup> <a name="verifiedaccess_instance_id_input" id="@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfiguration.property.verifiedaccessInstanceIdInput"></a>

```python
verifiedaccess_instance_id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfiguration.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `verifiedaccess_instance_id`<sup>Required</sup> <a name="verifiedaccess_instance_id" id="@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfiguration.property.verifiedaccessInstanceId"></a>

```python
verifiedaccess_instance_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfiguration.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfiguration.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### VerifiedaccessInstanceLoggingConfigurationAccessLogs <a name="VerifiedaccessInstanceLoggingConfigurationAccessLogs" id="@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfigurationAccessLogs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfigurationAccessLogs.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import verifiedaccess_instance_logging_configuration

verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfigurationAccessLogs(
  cloudwatch_logs: VerifiedaccessInstanceLoggingConfigurationAccessLogsCloudwatchLogs = None,
  include_trust_context: typing.Union[bool, IResolvable] = None,
  kinesis_data_firehose: VerifiedaccessInstanceLoggingConfigurationAccessLogsKinesisDataFirehose = None,
  log_version: str = None,
  s3: VerifiedaccessInstanceLoggingConfigurationAccessLogsS3 = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfigurationAccessLogs.property.cloudwatchLogs">cloudwatch_logs</a></code> | <code><a href="#@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfigurationAccessLogsCloudwatchLogs">VerifiedaccessInstanceLoggingConfigurationAccessLogsCloudwatchLogs</a></code> | cloudwatch_logs block. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfigurationAccessLogs.property.includeTrustContext">include_trust_context</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.51.0/docs/resources/verifiedaccess_instance_logging_configuration#include_trust_context VerifiedaccessInstanceLoggingConfiguration#include_trust_context}. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfigurationAccessLogs.property.kinesisDataFirehose">kinesis_data_firehose</a></code> | <code><a href="#@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfigurationAccessLogsKinesisDataFirehose">VerifiedaccessInstanceLoggingConfigurationAccessLogsKinesisDataFirehose</a></code> | kinesis_data_firehose block. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfigurationAccessLogs.property.logVersion">log_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.51.0/docs/resources/verifiedaccess_instance_logging_configuration#log_version VerifiedaccessInstanceLoggingConfiguration#log_version}. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfigurationAccessLogs.property.s3">s3</a></code> | <code><a href="#@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfigurationAccessLogsS3">VerifiedaccessInstanceLoggingConfigurationAccessLogsS3</a></code> | s3 block. |

---

##### `cloudwatch_logs`<sup>Optional</sup> <a name="cloudwatch_logs" id="@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfigurationAccessLogs.property.cloudwatchLogs"></a>

```python
cloudwatch_logs: VerifiedaccessInstanceLoggingConfigurationAccessLogsCloudwatchLogs
```

- *Type:* <a href="#@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfigurationAccessLogsCloudwatchLogs">VerifiedaccessInstanceLoggingConfigurationAccessLogsCloudwatchLogs</a>

cloudwatch_logs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.51.0/docs/resources/verifiedaccess_instance_logging_configuration#cloudwatch_logs VerifiedaccessInstanceLoggingConfiguration#cloudwatch_logs}

---

##### `include_trust_context`<sup>Optional</sup> <a name="include_trust_context" id="@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfigurationAccessLogs.property.includeTrustContext"></a>

```python
include_trust_context: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.51.0/docs/resources/verifiedaccess_instance_logging_configuration#include_trust_context VerifiedaccessInstanceLoggingConfiguration#include_trust_context}.

---

##### `kinesis_data_firehose`<sup>Optional</sup> <a name="kinesis_data_firehose" id="@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfigurationAccessLogs.property.kinesisDataFirehose"></a>

```python
kinesis_data_firehose: VerifiedaccessInstanceLoggingConfigurationAccessLogsKinesisDataFirehose
```

- *Type:* <a href="#@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfigurationAccessLogsKinesisDataFirehose">VerifiedaccessInstanceLoggingConfigurationAccessLogsKinesisDataFirehose</a>

kinesis_data_firehose block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.51.0/docs/resources/verifiedaccess_instance_logging_configuration#kinesis_data_firehose VerifiedaccessInstanceLoggingConfiguration#kinesis_data_firehose}

---

##### `log_version`<sup>Optional</sup> <a name="log_version" id="@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfigurationAccessLogs.property.logVersion"></a>

```python
log_version: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.51.0/docs/resources/verifiedaccess_instance_logging_configuration#log_version VerifiedaccessInstanceLoggingConfiguration#log_version}.

---

##### `s3`<sup>Optional</sup> <a name="s3" id="@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfigurationAccessLogs.property.s3"></a>

```python
s3: VerifiedaccessInstanceLoggingConfigurationAccessLogsS3
```

- *Type:* <a href="#@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfigurationAccessLogsS3">VerifiedaccessInstanceLoggingConfigurationAccessLogsS3</a>

s3 block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.51.0/docs/resources/verifiedaccess_instance_logging_configuration#s3 VerifiedaccessInstanceLoggingConfiguration#s3}

---

### VerifiedaccessInstanceLoggingConfigurationAccessLogsCloudwatchLogs <a name="VerifiedaccessInstanceLoggingConfigurationAccessLogsCloudwatchLogs" id="@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfigurationAccessLogsCloudwatchLogs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfigurationAccessLogsCloudwatchLogs.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import verifiedaccess_instance_logging_configuration

verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfigurationAccessLogsCloudwatchLogs(
  enabled: typing.Union[bool, IResolvable],
  log_group: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfigurationAccessLogsCloudwatchLogs.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.51.0/docs/resources/verifiedaccess_instance_logging_configuration#enabled VerifiedaccessInstanceLoggingConfiguration#enabled}. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfigurationAccessLogsCloudwatchLogs.property.logGroup">log_group</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.51.0/docs/resources/verifiedaccess_instance_logging_configuration#log_group VerifiedaccessInstanceLoggingConfiguration#log_group}. |

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfigurationAccessLogsCloudwatchLogs.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.51.0/docs/resources/verifiedaccess_instance_logging_configuration#enabled VerifiedaccessInstanceLoggingConfiguration#enabled}.

---

##### `log_group`<sup>Optional</sup> <a name="log_group" id="@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfigurationAccessLogsCloudwatchLogs.property.logGroup"></a>

```python
log_group: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.51.0/docs/resources/verifiedaccess_instance_logging_configuration#log_group VerifiedaccessInstanceLoggingConfiguration#log_group}.

---

### VerifiedaccessInstanceLoggingConfigurationAccessLogsKinesisDataFirehose <a name="VerifiedaccessInstanceLoggingConfigurationAccessLogsKinesisDataFirehose" id="@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfigurationAccessLogsKinesisDataFirehose"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfigurationAccessLogsKinesisDataFirehose.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import verifiedaccess_instance_logging_configuration

verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfigurationAccessLogsKinesisDataFirehose(
  enabled: typing.Union[bool, IResolvable],
  delivery_stream: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfigurationAccessLogsKinesisDataFirehose.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.51.0/docs/resources/verifiedaccess_instance_logging_configuration#enabled VerifiedaccessInstanceLoggingConfiguration#enabled}. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfigurationAccessLogsKinesisDataFirehose.property.deliveryStream">delivery_stream</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.51.0/docs/resources/verifiedaccess_instance_logging_configuration#delivery_stream VerifiedaccessInstanceLoggingConfiguration#delivery_stream}. |

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfigurationAccessLogsKinesisDataFirehose.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.51.0/docs/resources/verifiedaccess_instance_logging_configuration#enabled VerifiedaccessInstanceLoggingConfiguration#enabled}.

---

##### `delivery_stream`<sup>Optional</sup> <a name="delivery_stream" id="@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfigurationAccessLogsKinesisDataFirehose.property.deliveryStream"></a>

```python
delivery_stream: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.51.0/docs/resources/verifiedaccess_instance_logging_configuration#delivery_stream VerifiedaccessInstanceLoggingConfiguration#delivery_stream}.

---

### VerifiedaccessInstanceLoggingConfigurationAccessLogsS3 <a name="VerifiedaccessInstanceLoggingConfigurationAccessLogsS3" id="@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfigurationAccessLogsS3"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfigurationAccessLogsS3.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import verifiedaccess_instance_logging_configuration

verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfigurationAccessLogsS3(
  enabled: typing.Union[bool, IResolvable],
  bucket_name: str = None,
  bucket_owner: str = None,
  prefix: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfigurationAccessLogsS3.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.51.0/docs/resources/verifiedaccess_instance_logging_configuration#enabled VerifiedaccessInstanceLoggingConfiguration#enabled}. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfigurationAccessLogsS3.property.bucketName">bucket_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.51.0/docs/resources/verifiedaccess_instance_logging_configuration#bucket_name VerifiedaccessInstanceLoggingConfiguration#bucket_name}. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfigurationAccessLogsS3.property.bucketOwner">bucket_owner</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.51.0/docs/resources/verifiedaccess_instance_logging_configuration#bucket_owner VerifiedaccessInstanceLoggingConfiguration#bucket_owner}. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfigurationAccessLogsS3.property.prefix">prefix</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.51.0/docs/resources/verifiedaccess_instance_logging_configuration#prefix VerifiedaccessInstanceLoggingConfiguration#prefix}. |

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfigurationAccessLogsS3.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.51.0/docs/resources/verifiedaccess_instance_logging_configuration#enabled VerifiedaccessInstanceLoggingConfiguration#enabled}.

---

##### `bucket_name`<sup>Optional</sup> <a name="bucket_name" id="@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfigurationAccessLogsS3.property.bucketName"></a>

```python
bucket_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.51.0/docs/resources/verifiedaccess_instance_logging_configuration#bucket_name VerifiedaccessInstanceLoggingConfiguration#bucket_name}.

---

##### `bucket_owner`<sup>Optional</sup> <a name="bucket_owner" id="@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfigurationAccessLogsS3.property.bucketOwner"></a>

```python
bucket_owner: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.51.0/docs/resources/verifiedaccess_instance_logging_configuration#bucket_owner VerifiedaccessInstanceLoggingConfiguration#bucket_owner}.

---

##### `prefix`<sup>Optional</sup> <a name="prefix" id="@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfigurationAccessLogsS3.property.prefix"></a>

```python
prefix: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.51.0/docs/resources/verifiedaccess_instance_logging_configuration#prefix VerifiedaccessInstanceLoggingConfiguration#prefix}.

---

### VerifiedaccessInstanceLoggingConfigurationConfig <a name="VerifiedaccessInstanceLoggingConfigurationConfig" id="@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfigurationConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import verifiedaccess_instance_logging_configuration

verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfigurationConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  access_logs: VerifiedaccessInstanceLoggingConfigurationAccessLogs,
  verifiedaccess_instance_id: str,
  id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfigurationConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfigurationConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfigurationConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfigurationConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfigurationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfigurationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfigurationConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfigurationConfig.property.accessLogs">access_logs</a></code> | <code><a href="#@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfigurationAccessLogs">VerifiedaccessInstanceLoggingConfigurationAccessLogs</a></code> | access_logs block. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfigurationConfig.property.verifiedaccessInstanceId">verifiedaccess_instance_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.51.0/docs/resources/verifiedaccess_instance_logging_configuration#verifiedaccess_instance_id VerifiedaccessInstanceLoggingConfiguration#verifiedaccess_instance_id}. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfigurationConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.51.0/docs/resources/verifiedaccess_instance_logging_configuration#id VerifiedaccessInstanceLoggingConfiguration#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfigurationConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfigurationConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfigurationConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfigurationConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfigurationConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfigurationConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfigurationConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `access_logs`<sup>Required</sup> <a name="access_logs" id="@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfigurationConfig.property.accessLogs"></a>

```python
access_logs: VerifiedaccessInstanceLoggingConfigurationAccessLogs
```

- *Type:* <a href="#@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfigurationAccessLogs">VerifiedaccessInstanceLoggingConfigurationAccessLogs</a>

access_logs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.51.0/docs/resources/verifiedaccess_instance_logging_configuration#access_logs VerifiedaccessInstanceLoggingConfiguration#access_logs}

---

##### `verifiedaccess_instance_id`<sup>Required</sup> <a name="verifiedaccess_instance_id" id="@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfigurationConfig.property.verifiedaccessInstanceId"></a>

```python
verifiedaccess_instance_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.51.0/docs/resources/verifiedaccess_instance_logging_configuration#verifiedaccess_instance_id VerifiedaccessInstanceLoggingConfiguration#verifiedaccess_instance_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfigurationConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.51.0/docs/resources/verifiedaccess_instance_logging_configuration#id VerifiedaccessInstanceLoggingConfiguration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

## Classes <a name="Classes" id="Classes"></a>

### VerifiedaccessInstanceLoggingConfigurationAccessLogsCloudwatchLogsOutputReference <a name="VerifiedaccessInstanceLoggingConfigurationAccessLogsCloudwatchLogsOutputReference" id="@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfigurationAccessLogsCloudwatchLogsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfigurationAccessLogsCloudwatchLogsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import verifiedaccess_instance_logging_configuration

verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfigurationAccessLogsCloudwatchLogsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfigurationAccessLogsCloudwatchLogsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfigurationAccessLogsCloudwatchLogsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfigurationAccessLogsCloudwatchLogsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfigurationAccessLogsCloudwatchLogsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfigurationAccessLogsCloudwatchLogsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfigurationAccessLogsCloudwatchLogsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfigurationAccessLogsCloudwatchLogsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfigurationAccessLogsCloudwatchLogsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfigurationAccessLogsCloudwatchLogsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfigurationAccessLogsCloudwatchLogsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfigurationAccessLogsCloudwatchLogsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfigurationAccessLogsCloudwatchLogsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfigurationAccessLogsCloudwatchLogsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfigurationAccessLogsCloudwatchLogsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfigurationAccessLogsCloudwatchLogsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfigurationAccessLogsCloudwatchLogsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfigurationAccessLogsCloudwatchLogsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfigurationAccessLogsCloudwatchLogsOutputReference.resetLogGroup">reset_log_group</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfigurationAccessLogsCloudwatchLogsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfigurationAccessLogsCloudwatchLogsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfigurationAccessLogsCloudwatchLogsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfigurationAccessLogsCloudwatchLogsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfigurationAccessLogsCloudwatchLogsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfigurationAccessLogsCloudwatchLogsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfigurationAccessLogsCloudwatchLogsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfigurationAccessLogsCloudwatchLogsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfigurationAccessLogsCloudwatchLogsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfigurationAccessLogsCloudwatchLogsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfigurationAccessLogsCloudwatchLogsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfigurationAccessLogsCloudwatchLogsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfigurationAccessLogsCloudwatchLogsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfigurationAccessLogsCloudwatchLogsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfigurationAccessLogsCloudwatchLogsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfigurationAccessLogsCloudwatchLogsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfigurationAccessLogsCloudwatchLogsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfigurationAccessLogsCloudwatchLogsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfigurationAccessLogsCloudwatchLogsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfigurationAccessLogsCloudwatchLogsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfigurationAccessLogsCloudwatchLogsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfigurationAccessLogsCloudwatchLogsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfigurationAccessLogsCloudwatchLogsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfigurationAccessLogsCloudwatchLogsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_log_group` <a name="reset_log_group" id="@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfigurationAccessLogsCloudwatchLogsOutputReference.resetLogGroup"></a>

```python
def reset_log_group() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfigurationAccessLogsCloudwatchLogsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfigurationAccessLogsCloudwatchLogsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfigurationAccessLogsCloudwatchLogsOutputReference.property.enabledInput">enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfigurationAccessLogsCloudwatchLogsOutputReference.property.logGroupInput">log_group_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfigurationAccessLogsCloudwatchLogsOutputReference.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfigurationAccessLogsCloudwatchLogsOutputReference.property.logGroup">log_group</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfigurationAccessLogsCloudwatchLogsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfigurationAccessLogsCloudwatchLogs">VerifiedaccessInstanceLoggingConfigurationAccessLogsCloudwatchLogs</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfigurationAccessLogsCloudwatchLogsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfigurationAccessLogsCloudwatchLogsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfigurationAccessLogsCloudwatchLogsOutputReference.property.enabledInput"></a>

```python
enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `log_group_input`<sup>Optional</sup> <a name="log_group_input" id="@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfigurationAccessLogsCloudwatchLogsOutputReference.property.logGroupInput"></a>

```python
log_group_input: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfigurationAccessLogsCloudwatchLogsOutputReference.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `log_group`<sup>Required</sup> <a name="log_group" id="@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfigurationAccessLogsCloudwatchLogsOutputReference.property.logGroup"></a>

```python
log_group: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfigurationAccessLogsCloudwatchLogsOutputReference.property.internalValue"></a>

```python
internal_value: VerifiedaccessInstanceLoggingConfigurationAccessLogsCloudwatchLogs
```

- *Type:* <a href="#@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfigurationAccessLogsCloudwatchLogs">VerifiedaccessInstanceLoggingConfigurationAccessLogsCloudwatchLogs</a>

---


### VerifiedaccessInstanceLoggingConfigurationAccessLogsKinesisDataFirehoseOutputReference <a name="VerifiedaccessInstanceLoggingConfigurationAccessLogsKinesisDataFirehoseOutputReference" id="@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfigurationAccessLogsKinesisDataFirehoseOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfigurationAccessLogsKinesisDataFirehoseOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import verifiedaccess_instance_logging_configuration

verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfigurationAccessLogsKinesisDataFirehoseOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfigurationAccessLogsKinesisDataFirehoseOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfigurationAccessLogsKinesisDataFirehoseOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfigurationAccessLogsKinesisDataFirehoseOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfigurationAccessLogsKinesisDataFirehoseOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfigurationAccessLogsKinesisDataFirehoseOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfigurationAccessLogsKinesisDataFirehoseOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfigurationAccessLogsKinesisDataFirehoseOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfigurationAccessLogsKinesisDataFirehoseOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfigurationAccessLogsKinesisDataFirehoseOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfigurationAccessLogsKinesisDataFirehoseOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfigurationAccessLogsKinesisDataFirehoseOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfigurationAccessLogsKinesisDataFirehoseOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfigurationAccessLogsKinesisDataFirehoseOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfigurationAccessLogsKinesisDataFirehoseOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfigurationAccessLogsKinesisDataFirehoseOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfigurationAccessLogsKinesisDataFirehoseOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfigurationAccessLogsKinesisDataFirehoseOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfigurationAccessLogsKinesisDataFirehoseOutputReference.resetDeliveryStream">reset_delivery_stream</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfigurationAccessLogsKinesisDataFirehoseOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfigurationAccessLogsKinesisDataFirehoseOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfigurationAccessLogsKinesisDataFirehoseOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfigurationAccessLogsKinesisDataFirehoseOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfigurationAccessLogsKinesisDataFirehoseOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfigurationAccessLogsKinesisDataFirehoseOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfigurationAccessLogsKinesisDataFirehoseOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfigurationAccessLogsKinesisDataFirehoseOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfigurationAccessLogsKinesisDataFirehoseOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfigurationAccessLogsKinesisDataFirehoseOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfigurationAccessLogsKinesisDataFirehoseOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfigurationAccessLogsKinesisDataFirehoseOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfigurationAccessLogsKinesisDataFirehoseOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfigurationAccessLogsKinesisDataFirehoseOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfigurationAccessLogsKinesisDataFirehoseOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfigurationAccessLogsKinesisDataFirehoseOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfigurationAccessLogsKinesisDataFirehoseOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfigurationAccessLogsKinesisDataFirehoseOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfigurationAccessLogsKinesisDataFirehoseOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfigurationAccessLogsKinesisDataFirehoseOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfigurationAccessLogsKinesisDataFirehoseOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfigurationAccessLogsKinesisDataFirehoseOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfigurationAccessLogsKinesisDataFirehoseOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfigurationAccessLogsKinesisDataFirehoseOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_delivery_stream` <a name="reset_delivery_stream" id="@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfigurationAccessLogsKinesisDataFirehoseOutputReference.resetDeliveryStream"></a>

```python
def reset_delivery_stream() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfigurationAccessLogsKinesisDataFirehoseOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfigurationAccessLogsKinesisDataFirehoseOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfigurationAccessLogsKinesisDataFirehoseOutputReference.property.deliveryStreamInput">delivery_stream_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfigurationAccessLogsKinesisDataFirehoseOutputReference.property.enabledInput">enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfigurationAccessLogsKinesisDataFirehoseOutputReference.property.deliveryStream">delivery_stream</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfigurationAccessLogsKinesisDataFirehoseOutputReference.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfigurationAccessLogsKinesisDataFirehoseOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfigurationAccessLogsKinesisDataFirehose">VerifiedaccessInstanceLoggingConfigurationAccessLogsKinesisDataFirehose</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfigurationAccessLogsKinesisDataFirehoseOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfigurationAccessLogsKinesisDataFirehoseOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `delivery_stream_input`<sup>Optional</sup> <a name="delivery_stream_input" id="@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfigurationAccessLogsKinesisDataFirehoseOutputReference.property.deliveryStreamInput"></a>

```python
delivery_stream_input: str
```

- *Type:* str

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfigurationAccessLogsKinesisDataFirehoseOutputReference.property.enabledInput"></a>

```python
enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `delivery_stream`<sup>Required</sup> <a name="delivery_stream" id="@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfigurationAccessLogsKinesisDataFirehoseOutputReference.property.deliveryStream"></a>

```python
delivery_stream: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfigurationAccessLogsKinesisDataFirehoseOutputReference.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfigurationAccessLogsKinesisDataFirehoseOutputReference.property.internalValue"></a>

```python
internal_value: VerifiedaccessInstanceLoggingConfigurationAccessLogsKinesisDataFirehose
```

- *Type:* <a href="#@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfigurationAccessLogsKinesisDataFirehose">VerifiedaccessInstanceLoggingConfigurationAccessLogsKinesisDataFirehose</a>

---


### VerifiedaccessInstanceLoggingConfigurationAccessLogsOutputReference <a name="VerifiedaccessInstanceLoggingConfigurationAccessLogsOutputReference" id="@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfigurationAccessLogsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfigurationAccessLogsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import verifiedaccess_instance_logging_configuration

verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfigurationAccessLogsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfigurationAccessLogsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfigurationAccessLogsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfigurationAccessLogsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfigurationAccessLogsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfigurationAccessLogsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfigurationAccessLogsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfigurationAccessLogsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfigurationAccessLogsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfigurationAccessLogsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfigurationAccessLogsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfigurationAccessLogsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfigurationAccessLogsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfigurationAccessLogsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfigurationAccessLogsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfigurationAccessLogsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfigurationAccessLogsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfigurationAccessLogsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfigurationAccessLogsOutputReference.putCloudwatchLogs">put_cloudwatch_logs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfigurationAccessLogsOutputReference.putKinesisDataFirehose">put_kinesis_data_firehose</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfigurationAccessLogsOutputReference.putS3">put_s3</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfigurationAccessLogsOutputReference.resetCloudwatchLogs">reset_cloudwatch_logs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfigurationAccessLogsOutputReference.resetIncludeTrustContext">reset_include_trust_context</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfigurationAccessLogsOutputReference.resetKinesisDataFirehose">reset_kinesis_data_firehose</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfigurationAccessLogsOutputReference.resetLogVersion">reset_log_version</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfigurationAccessLogsOutputReference.resetS3">reset_s3</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfigurationAccessLogsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfigurationAccessLogsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfigurationAccessLogsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfigurationAccessLogsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfigurationAccessLogsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfigurationAccessLogsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfigurationAccessLogsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfigurationAccessLogsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfigurationAccessLogsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfigurationAccessLogsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfigurationAccessLogsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfigurationAccessLogsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfigurationAccessLogsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfigurationAccessLogsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfigurationAccessLogsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfigurationAccessLogsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfigurationAccessLogsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfigurationAccessLogsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfigurationAccessLogsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfigurationAccessLogsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfigurationAccessLogsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfigurationAccessLogsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfigurationAccessLogsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfigurationAccessLogsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_cloudwatch_logs` <a name="put_cloudwatch_logs" id="@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfigurationAccessLogsOutputReference.putCloudwatchLogs"></a>

```python
def put_cloudwatch_logs(
  enabled: typing.Union[bool, IResolvable],
  log_group: str = None
) -> None
```

###### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfigurationAccessLogsOutputReference.putCloudwatchLogs.parameter.enabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.51.0/docs/resources/verifiedaccess_instance_logging_configuration#enabled VerifiedaccessInstanceLoggingConfiguration#enabled}.

---

###### `log_group`<sup>Optional</sup> <a name="log_group" id="@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfigurationAccessLogsOutputReference.putCloudwatchLogs.parameter.logGroup"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.51.0/docs/resources/verifiedaccess_instance_logging_configuration#log_group VerifiedaccessInstanceLoggingConfiguration#log_group}.

---

##### `put_kinesis_data_firehose` <a name="put_kinesis_data_firehose" id="@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfigurationAccessLogsOutputReference.putKinesisDataFirehose"></a>

```python
def put_kinesis_data_firehose(
  enabled: typing.Union[bool, IResolvable],
  delivery_stream: str = None
) -> None
```

###### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfigurationAccessLogsOutputReference.putKinesisDataFirehose.parameter.enabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.51.0/docs/resources/verifiedaccess_instance_logging_configuration#enabled VerifiedaccessInstanceLoggingConfiguration#enabled}.

---

###### `delivery_stream`<sup>Optional</sup> <a name="delivery_stream" id="@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfigurationAccessLogsOutputReference.putKinesisDataFirehose.parameter.deliveryStream"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.51.0/docs/resources/verifiedaccess_instance_logging_configuration#delivery_stream VerifiedaccessInstanceLoggingConfiguration#delivery_stream}.

---

##### `put_s3` <a name="put_s3" id="@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfigurationAccessLogsOutputReference.putS3"></a>

```python
def put_s3(
  enabled: typing.Union[bool, IResolvable],
  bucket_name: str = None,
  bucket_owner: str = None,
  prefix: str = None
) -> None
```

###### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfigurationAccessLogsOutputReference.putS3.parameter.enabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.51.0/docs/resources/verifiedaccess_instance_logging_configuration#enabled VerifiedaccessInstanceLoggingConfiguration#enabled}.

---

###### `bucket_name`<sup>Optional</sup> <a name="bucket_name" id="@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfigurationAccessLogsOutputReference.putS3.parameter.bucketName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.51.0/docs/resources/verifiedaccess_instance_logging_configuration#bucket_name VerifiedaccessInstanceLoggingConfiguration#bucket_name}.

---

###### `bucket_owner`<sup>Optional</sup> <a name="bucket_owner" id="@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfigurationAccessLogsOutputReference.putS3.parameter.bucketOwner"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.51.0/docs/resources/verifiedaccess_instance_logging_configuration#bucket_owner VerifiedaccessInstanceLoggingConfiguration#bucket_owner}.

---

###### `prefix`<sup>Optional</sup> <a name="prefix" id="@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfigurationAccessLogsOutputReference.putS3.parameter.prefix"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.51.0/docs/resources/verifiedaccess_instance_logging_configuration#prefix VerifiedaccessInstanceLoggingConfiguration#prefix}.

---

##### `reset_cloudwatch_logs` <a name="reset_cloudwatch_logs" id="@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfigurationAccessLogsOutputReference.resetCloudwatchLogs"></a>

```python
def reset_cloudwatch_logs() -> None
```

##### `reset_include_trust_context` <a name="reset_include_trust_context" id="@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfigurationAccessLogsOutputReference.resetIncludeTrustContext"></a>

```python
def reset_include_trust_context() -> None
```

##### `reset_kinesis_data_firehose` <a name="reset_kinesis_data_firehose" id="@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfigurationAccessLogsOutputReference.resetKinesisDataFirehose"></a>

```python
def reset_kinesis_data_firehose() -> None
```

##### `reset_log_version` <a name="reset_log_version" id="@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfigurationAccessLogsOutputReference.resetLogVersion"></a>

```python
def reset_log_version() -> None
```

##### `reset_s3` <a name="reset_s3" id="@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfigurationAccessLogsOutputReference.resetS3"></a>

```python
def reset_s3() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfigurationAccessLogsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfigurationAccessLogsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfigurationAccessLogsOutputReference.property.cloudwatchLogs">cloudwatch_logs</a></code> | <code><a href="#@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfigurationAccessLogsCloudwatchLogsOutputReference">VerifiedaccessInstanceLoggingConfigurationAccessLogsCloudwatchLogsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfigurationAccessLogsOutputReference.property.kinesisDataFirehose">kinesis_data_firehose</a></code> | <code><a href="#@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfigurationAccessLogsKinesisDataFirehoseOutputReference">VerifiedaccessInstanceLoggingConfigurationAccessLogsKinesisDataFirehoseOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfigurationAccessLogsOutputReference.property.s3">s3</a></code> | <code><a href="#@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfigurationAccessLogsS3OutputReference">VerifiedaccessInstanceLoggingConfigurationAccessLogsS3OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfigurationAccessLogsOutputReference.property.cloudwatchLogsInput">cloudwatch_logs_input</a></code> | <code><a href="#@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfigurationAccessLogsCloudwatchLogs">VerifiedaccessInstanceLoggingConfigurationAccessLogsCloudwatchLogs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfigurationAccessLogsOutputReference.property.includeTrustContextInput">include_trust_context_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfigurationAccessLogsOutputReference.property.kinesisDataFirehoseInput">kinesis_data_firehose_input</a></code> | <code><a href="#@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfigurationAccessLogsKinesisDataFirehose">VerifiedaccessInstanceLoggingConfigurationAccessLogsKinesisDataFirehose</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfigurationAccessLogsOutputReference.property.logVersionInput">log_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfigurationAccessLogsOutputReference.property.s3Input">s3_input</a></code> | <code><a href="#@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfigurationAccessLogsS3">VerifiedaccessInstanceLoggingConfigurationAccessLogsS3</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfigurationAccessLogsOutputReference.property.includeTrustContext">include_trust_context</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfigurationAccessLogsOutputReference.property.logVersion">log_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfigurationAccessLogsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfigurationAccessLogs">VerifiedaccessInstanceLoggingConfigurationAccessLogs</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfigurationAccessLogsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfigurationAccessLogsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cloudwatch_logs`<sup>Required</sup> <a name="cloudwatch_logs" id="@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfigurationAccessLogsOutputReference.property.cloudwatchLogs"></a>

```python
cloudwatch_logs: VerifiedaccessInstanceLoggingConfigurationAccessLogsCloudwatchLogsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfigurationAccessLogsCloudwatchLogsOutputReference">VerifiedaccessInstanceLoggingConfigurationAccessLogsCloudwatchLogsOutputReference</a>

---

##### `kinesis_data_firehose`<sup>Required</sup> <a name="kinesis_data_firehose" id="@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfigurationAccessLogsOutputReference.property.kinesisDataFirehose"></a>

```python
kinesis_data_firehose: VerifiedaccessInstanceLoggingConfigurationAccessLogsKinesisDataFirehoseOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfigurationAccessLogsKinesisDataFirehoseOutputReference">VerifiedaccessInstanceLoggingConfigurationAccessLogsKinesisDataFirehoseOutputReference</a>

---

##### `s3`<sup>Required</sup> <a name="s3" id="@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfigurationAccessLogsOutputReference.property.s3"></a>

```python
s3: VerifiedaccessInstanceLoggingConfigurationAccessLogsS3OutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfigurationAccessLogsS3OutputReference">VerifiedaccessInstanceLoggingConfigurationAccessLogsS3OutputReference</a>

---

##### `cloudwatch_logs_input`<sup>Optional</sup> <a name="cloudwatch_logs_input" id="@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfigurationAccessLogsOutputReference.property.cloudwatchLogsInput"></a>

```python
cloudwatch_logs_input: VerifiedaccessInstanceLoggingConfigurationAccessLogsCloudwatchLogs
```

- *Type:* <a href="#@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfigurationAccessLogsCloudwatchLogs">VerifiedaccessInstanceLoggingConfigurationAccessLogsCloudwatchLogs</a>

---

##### `include_trust_context_input`<sup>Optional</sup> <a name="include_trust_context_input" id="@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfigurationAccessLogsOutputReference.property.includeTrustContextInput"></a>

```python
include_trust_context_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `kinesis_data_firehose_input`<sup>Optional</sup> <a name="kinesis_data_firehose_input" id="@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfigurationAccessLogsOutputReference.property.kinesisDataFirehoseInput"></a>

```python
kinesis_data_firehose_input: VerifiedaccessInstanceLoggingConfigurationAccessLogsKinesisDataFirehose
```

- *Type:* <a href="#@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfigurationAccessLogsKinesisDataFirehose">VerifiedaccessInstanceLoggingConfigurationAccessLogsKinesisDataFirehose</a>

---

##### `log_version_input`<sup>Optional</sup> <a name="log_version_input" id="@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfigurationAccessLogsOutputReference.property.logVersionInput"></a>

```python
log_version_input: str
```

- *Type:* str

---

##### `s3_input`<sup>Optional</sup> <a name="s3_input" id="@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfigurationAccessLogsOutputReference.property.s3Input"></a>

```python
s3_input: VerifiedaccessInstanceLoggingConfigurationAccessLogsS3
```

- *Type:* <a href="#@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfigurationAccessLogsS3">VerifiedaccessInstanceLoggingConfigurationAccessLogsS3</a>

---

##### `include_trust_context`<sup>Required</sup> <a name="include_trust_context" id="@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfigurationAccessLogsOutputReference.property.includeTrustContext"></a>

```python
include_trust_context: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `log_version`<sup>Required</sup> <a name="log_version" id="@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfigurationAccessLogsOutputReference.property.logVersion"></a>

```python
log_version: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfigurationAccessLogsOutputReference.property.internalValue"></a>

```python
internal_value: VerifiedaccessInstanceLoggingConfigurationAccessLogs
```

- *Type:* <a href="#@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfigurationAccessLogs">VerifiedaccessInstanceLoggingConfigurationAccessLogs</a>

---


### VerifiedaccessInstanceLoggingConfigurationAccessLogsS3OutputReference <a name="VerifiedaccessInstanceLoggingConfigurationAccessLogsS3OutputReference" id="@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfigurationAccessLogsS3OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfigurationAccessLogsS3OutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import verifiedaccess_instance_logging_configuration

verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfigurationAccessLogsS3OutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfigurationAccessLogsS3OutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfigurationAccessLogsS3OutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfigurationAccessLogsS3OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfigurationAccessLogsS3OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfigurationAccessLogsS3OutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfigurationAccessLogsS3OutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfigurationAccessLogsS3OutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfigurationAccessLogsS3OutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfigurationAccessLogsS3OutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfigurationAccessLogsS3OutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfigurationAccessLogsS3OutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfigurationAccessLogsS3OutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfigurationAccessLogsS3OutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfigurationAccessLogsS3OutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfigurationAccessLogsS3OutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfigurationAccessLogsS3OutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfigurationAccessLogsS3OutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfigurationAccessLogsS3OutputReference.resetBucketName">reset_bucket_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfigurationAccessLogsS3OutputReference.resetBucketOwner">reset_bucket_owner</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfigurationAccessLogsS3OutputReference.resetPrefix">reset_prefix</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfigurationAccessLogsS3OutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfigurationAccessLogsS3OutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfigurationAccessLogsS3OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfigurationAccessLogsS3OutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfigurationAccessLogsS3OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfigurationAccessLogsS3OutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfigurationAccessLogsS3OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfigurationAccessLogsS3OutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfigurationAccessLogsS3OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfigurationAccessLogsS3OutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfigurationAccessLogsS3OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfigurationAccessLogsS3OutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfigurationAccessLogsS3OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfigurationAccessLogsS3OutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfigurationAccessLogsS3OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfigurationAccessLogsS3OutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfigurationAccessLogsS3OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfigurationAccessLogsS3OutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfigurationAccessLogsS3OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfigurationAccessLogsS3OutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfigurationAccessLogsS3OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfigurationAccessLogsS3OutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfigurationAccessLogsS3OutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfigurationAccessLogsS3OutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_bucket_name` <a name="reset_bucket_name" id="@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfigurationAccessLogsS3OutputReference.resetBucketName"></a>

```python
def reset_bucket_name() -> None
```

##### `reset_bucket_owner` <a name="reset_bucket_owner" id="@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfigurationAccessLogsS3OutputReference.resetBucketOwner"></a>

```python
def reset_bucket_owner() -> None
```

##### `reset_prefix` <a name="reset_prefix" id="@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfigurationAccessLogsS3OutputReference.resetPrefix"></a>

```python
def reset_prefix() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfigurationAccessLogsS3OutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfigurationAccessLogsS3OutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfigurationAccessLogsS3OutputReference.property.bucketNameInput">bucket_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfigurationAccessLogsS3OutputReference.property.bucketOwnerInput">bucket_owner_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfigurationAccessLogsS3OutputReference.property.enabledInput">enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfigurationAccessLogsS3OutputReference.property.prefixInput">prefix_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfigurationAccessLogsS3OutputReference.property.bucketName">bucket_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfigurationAccessLogsS3OutputReference.property.bucketOwner">bucket_owner</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfigurationAccessLogsS3OutputReference.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfigurationAccessLogsS3OutputReference.property.prefix">prefix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfigurationAccessLogsS3OutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfigurationAccessLogsS3">VerifiedaccessInstanceLoggingConfigurationAccessLogsS3</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfigurationAccessLogsS3OutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfigurationAccessLogsS3OutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `bucket_name_input`<sup>Optional</sup> <a name="bucket_name_input" id="@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfigurationAccessLogsS3OutputReference.property.bucketNameInput"></a>

```python
bucket_name_input: str
```

- *Type:* str

---

##### `bucket_owner_input`<sup>Optional</sup> <a name="bucket_owner_input" id="@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfigurationAccessLogsS3OutputReference.property.bucketOwnerInput"></a>

```python
bucket_owner_input: str
```

- *Type:* str

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfigurationAccessLogsS3OutputReference.property.enabledInput"></a>

```python
enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `prefix_input`<sup>Optional</sup> <a name="prefix_input" id="@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfigurationAccessLogsS3OutputReference.property.prefixInput"></a>

```python
prefix_input: str
```

- *Type:* str

---

##### `bucket_name`<sup>Required</sup> <a name="bucket_name" id="@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfigurationAccessLogsS3OutputReference.property.bucketName"></a>

```python
bucket_name: str
```

- *Type:* str

---

##### `bucket_owner`<sup>Required</sup> <a name="bucket_owner" id="@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfigurationAccessLogsS3OutputReference.property.bucketOwner"></a>

```python
bucket_owner: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfigurationAccessLogsS3OutputReference.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfigurationAccessLogsS3OutputReference.property.prefix"></a>

```python
prefix: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfigurationAccessLogsS3OutputReference.property.internalValue"></a>

```python
internal_value: VerifiedaccessInstanceLoggingConfigurationAccessLogsS3
```

- *Type:* <a href="#@cdktf/provider-aws.verifiedaccessInstanceLoggingConfiguration.VerifiedaccessInstanceLoggingConfigurationAccessLogsS3">VerifiedaccessInstanceLoggingConfigurationAccessLogsS3</a>

---



