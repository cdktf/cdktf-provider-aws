# `quicksightAccountSettings` Submodule <a name="`quicksightAccountSettings` Submodule" id="@cdktf/provider-aws.quicksightAccountSettings"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### QuicksightAccountSettings <a name="QuicksightAccountSettings" id="@cdktf/provider-aws.quicksightAccountSettings.QuicksightAccountSettings"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/quicksight_account_settings aws_quicksight_account_settings}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.quicksightAccountSettings.QuicksightAccountSettings.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import quicksight_account_settings

quicksightAccountSettings.QuicksightAccountSettings(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  aws_account_id: str = None,
  default_namespace: str = None,
  termination_protection_enabled: typing.Union[bool, IResolvable] = None,
  timeouts: QuicksightAccountSettingsTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSettings.QuicksightAccountSettings.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSettings.QuicksightAccountSettings.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSettings.QuicksightAccountSettings.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSettings.QuicksightAccountSettings.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSettings.QuicksightAccountSettings.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSettings.QuicksightAccountSettings.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSettings.QuicksightAccountSettings.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSettings.QuicksightAccountSettings.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSettings.QuicksightAccountSettings.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSettings.QuicksightAccountSettings.Initializer.parameter.awsAccountId">aws_account_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/quicksight_account_settings#aws_account_id QuicksightAccountSettings#aws_account_id}. |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSettings.QuicksightAccountSettings.Initializer.parameter.defaultNamespace">default_namespace</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/quicksight_account_settings#default_namespace QuicksightAccountSettings#default_namespace}. |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSettings.QuicksightAccountSettings.Initializer.parameter.terminationProtectionEnabled">termination_protection_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/quicksight_account_settings#termination_protection_enabled QuicksightAccountSettings#termination_protection_enabled}. |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSettings.QuicksightAccountSettings.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.quicksightAccountSettings.QuicksightAccountSettingsTimeouts">QuicksightAccountSettingsTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.quicksightAccountSettings.QuicksightAccountSettings.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.quicksightAccountSettings.QuicksightAccountSettings.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.quicksightAccountSettings.QuicksightAccountSettings.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.quicksightAccountSettings.QuicksightAccountSettings.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.quicksightAccountSettings.QuicksightAccountSettings.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.quicksightAccountSettings.QuicksightAccountSettings.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.quicksightAccountSettings.QuicksightAccountSettings.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.quicksightAccountSettings.QuicksightAccountSettings.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.quicksightAccountSettings.QuicksightAccountSettings.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `aws_account_id`<sup>Optional</sup> <a name="aws_account_id" id="@cdktf/provider-aws.quicksightAccountSettings.QuicksightAccountSettings.Initializer.parameter.awsAccountId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/quicksight_account_settings#aws_account_id QuicksightAccountSettings#aws_account_id}.

---

##### `default_namespace`<sup>Optional</sup> <a name="default_namespace" id="@cdktf/provider-aws.quicksightAccountSettings.QuicksightAccountSettings.Initializer.parameter.defaultNamespace"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/quicksight_account_settings#default_namespace QuicksightAccountSettings#default_namespace}.

---

##### `termination_protection_enabled`<sup>Optional</sup> <a name="termination_protection_enabled" id="@cdktf/provider-aws.quicksightAccountSettings.QuicksightAccountSettings.Initializer.parameter.terminationProtectionEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/quicksight_account_settings#termination_protection_enabled QuicksightAccountSettings#termination_protection_enabled}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.quicksightAccountSettings.QuicksightAccountSettings.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-aws.quicksightAccountSettings.QuicksightAccountSettingsTimeouts">QuicksightAccountSettingsTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/quicksight_account_settings#timeouts QuicksightAccountSettings#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSettings.QuicksightAccountSettings.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSettings.QuicksightAccountSettings.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSettings.QuicksightAccountSettings.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSettings.QuicksightAccountSettings.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSettings.QuicksightAccountSettings.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSettings.QuicksightAccountSettings.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSettings.QuicksightAccountSettings.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSettings.QuicksightAccountSettings.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSettings.QuicksightAccountSettings.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSettings.QuicksightAccountSettings.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSettings.QuicksightAccountSettings.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSettings.QuicksightAccountSettings.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSettings.QuicksightAccountSettings.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSettings.QuicksightAccountSettings.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSettings.QuicksightAccountSettings.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSettings.QuicksightAccountSettings.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSettings.QuicksightAccountSettings.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSettings.QuicksightAccountSettings.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSettings.QuicksightAccountSettings.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSettings.QuicksightAccountSettings.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSettings.QuicksightAccountSettings.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSettings.QuicksightAccountSettings.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSettings.QuicksightAccountSettings.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSettings.QuicksightAccountSettings.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSettings.QuicksightAccountSettings.resetAwsAccountId">reset_aws_account_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSettings.QuicksightAccountSettings.resetDefaultNamespace">reset_default_namespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSettings.QuicksightAccountSettings.resetTerminationProtectionEnabled">reset_termination_protection_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSettings.QuicksightAccountSettings.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.quicksightAccountSettings.QuicksightAccountSettings.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.quicksightAccountSettings.QuicksightAccountSettings.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.quicksightAccountSettings.QuicksightAccountSettings.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.quicksightAccountSettings.QuicksightAccountSettings.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.quicksightAccountSettings.QuicksightAccountSettings.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.quicksightAccountSettings.QuicksightAccountSettings.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.quicksightAccountSettings.QuicksightAccountSettings.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-aws.quicksightAccountSettings.QuicksightAccountSettings.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.quicksightAccountSettings.QuicksightAccountSettings.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.quicksightAccountSettings.QuicksightAccountSettings.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-aws.quicksightAccountSettings.QuicksightAccountSettings.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-aws.quicksightAccountSettings.QuicksightAccountSettings.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.quicksightAccountSettings.QuicksightAccountSettings.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightAccountSettings.QuicksightAccountSettings.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.quicksightAccountSettings.QuicksightAccountSettings.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightAccountSettings.QuicksightAccountSettings.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.quicksightAccountSettings.QuicksightAccountSettings.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightAccountSettings.QuicksightAccountSettings.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.quicksightAccountSettings.QuicksightAccountSettings.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightAccountSettings.QuicksightAccountSettings.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.quicksightAccountSettings.QuicksightAccountSettings.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightAccountSettings.QuicksightAccountSettings.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.quicksightAccountSettings.QuicksightAccountSettings.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightAccountSettings.QuicksightAccountSettings.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.quicksightAccountSettings.QuicksightAccountSettings.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightAccountSettings.QuicksightAccountSettings.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.quicksightAccountSettings.QuicksightAccountSettings.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightAccountSettings.QuicksightAccountSettings.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.quicksightAccountSettings.QuicksightAccountSettings.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightAccountSettings.QuicksightAccountSettings.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-aws.quicksightAccountSettings.QuicksightAccountSettings.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-aws.quicksightAccountSettings.QuicksightAccountSettings.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.quicksightAccountSettings.QuicksightAccountSettings.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.quicksightAccountSettings.QuicksightAccountSettings.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.quicksightAccountSettings.QuicksightAccountSettings.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightAccountSettings.QuicksightAccountSettings.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-aws.quicksightAccountSettings.QuicksightAccountSettings.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.quicksightAccountSettings.QuicksightAccountSettings.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-aws.quicksightAccountSettings.QuicksightAccountSettings.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-aws.quicksightAccountSettings.QuicksightAccountSettings.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.quicksightAccountSettings.QuicksightAccountSettings.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-aws.quicksightAccountSettings.QuicksightAccountSettings.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.quicksightAccountSettings.QuicksightAccountSettings.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-aws.quicksightAccountSettings.QuicksightAccountSettings.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.quicksightAccountSettings.QuicksightAccountSettings.putTimeouts.parameter.create"></a>

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/quicksight_account_settings#create QuicksightAccountSettings#create}

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.quicksightAccountSettings.QuicksightAccountSettings.putTimeouts.parameter.update"></a>

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/quicksight_account_settings#update QuicksightAccountSettings#update}

---

##### `reset_aws_account_id` <a name="reset_aws_account_id" id="@cdktf/provider-aws.quicksightAccountSettings.QuicksightAccountSettings.resetAwsAccountId"></a>

```python
def reset_aws_account_id() -> None
```

##### `reset_default_namespace` <a name="reset_default_namespace" id="@cdktf/provider-aws.quicksightAccountSettings.QuicksightAccountSettings.resetDefaultNamespace"></a>

```python
def reset_default_namespace() -> None
```

##### `reset_termination_protection_enabled` <a name="reset_termination_protection_enabled" id="@cdktf/provider-aws.quicksightAccountSettings.QuicksightAccountSettings.resetTerminationProtectionEnabled"></a>

```python
def reset_termination_protection_enabled() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-aws.quicksightAccountSettings.QuicksightAccountSettings.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSettings.QuicksightAccountSettings.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSettings.QuicksightAccountSettings.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSettings.QuicksightAccountSettings.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSettings.QuicksightAccountSettings.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a QuicksightAccountSettings resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.quicksightAccountSettings.QuicksightAccountSettings.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import quicksight_account_settings

quicksightAccountSettings.QuicksightAccountSettings.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.quicksightAccountSettings.QuicksightAccountSettings.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.quicksightAccountSettings.QuicksightAccountSettings.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import quicksight_account_settings

quicksightAccountSettings.QuicksightAccountSettings.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.quicksightAccountSettings.QuicksightAccountSettings.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.quicksightAccountSettings.QuicksightAccountSettings.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import quicksight_account_settings

quicksightAccountSettings.QuicksightAccountSettings.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.quicksightAccountSettings.QuicksightAccountSettings.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-aws.quicksightAccountSettings.QuicksightAccountSettings.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_aws import quicksight_account_settings

quicksightAccountSettings.QuicksightAccountSettings.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a QuicksightAccountSettings resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.quicksightAccountSettings.QuicksightAccountSettings.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-aws.quicksightAccountSettings.QuicksightAccountSettings.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the QuicksightAccountSettings to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-aws.quicksightAccountSettings.QuicksightAccountSettings.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing QuicksightAccountSettings that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/quicksight_account_settings#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.quicksightAccountSettings.QuicksightAccountSettings.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the QuicksightAccountSettings to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSettings.QuicksightAccountSettings.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSettings.QuicksightAccountSettings.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSettings.QuicksightAccountSettings.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSettings.QuicksightAccountSettings.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSettings.QuicksightAccountSettings.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSettings.QuicksightAccountSettings.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSettings.QuicksightAccountSettings.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSettings.QuicksightAccountSettings.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSettings.QuicksightAccountSettings.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSettings.QuicksightAccountSettings.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSettings.QuicksightAccountSettings.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSettings.QuicksightAccountSettings.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSettings.QuicksightAccountSettings.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSettings.QuicksightAccountSettings.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSettings.QuicksightAccountSettings.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.quicksightAccountSettings.QuicksightAccountSettingsTimeoutsOutputReference">QuicksightAccountSettingsTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSettings.QuicksightAccountSettings.property.awsAccountIdInput">aws_account_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSettings.QuicksightAccountSettings.property.defaultNamespaceInput">default_namespace_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSettings.QuicksightAccountSettings.property.terminationProtectionEnabledInput">termination_protection_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSettings.QuicksightAccountSettings.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.quicksightAccountSettings.QuicksightAccountSettingsTimeouts">QuicksightAccountSettingsTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSettings.QuicksightAccountSettings.property.awsAccountId">aws_account_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSettings.QuicksightAccountSettings.property.defaultNamespace">default_namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSettings.QuicksightAccountSettings.property.terminationProtectionEnabled">termination_protection_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.quicksightAccountSettings.QuicksightAccountSettings.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.quicksightAccountSettings.QuicksightAccountSettings.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.quicksightAccountSettings.QuicksightAccountSettings.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.quicksightAccountSettings.QuicksightAccountSettings.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.quicksightAccountSettings.QuicksightAccountSettings.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.quicksightAccountSettings.QuicksightAccountSettings.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.quicksightAccountSettings.QuicksightAccountSettings.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.quicksightAccountSettings.QuicksightAccountSettings.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.quicksightAccountSettings.QuicksightAccountSettings.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.quicksightAccountSettings.QuicksightAccountSettings.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.quicksightAccountSettings.QuicksightAccountSettings.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.quicksightAccountSettings.QuicksightAccountSettings.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.quicksightAccountSettings.QuicksightAccountSettings.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.quicksightAccountSettings.QuicksightAccountSettings.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.quicksightAccountSettings.QuicksightAccountSettings.property.timeouts"></a>

```python
timeouts: QuicksightAccountSettingsTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightAccountSettings.QuicksightAccountSettingsTimeoutsOutputReference">QuicksightAccountSettingsTimeoutsOutputReference</a>

---

##### `aws_account_id_input`<sup>Optional</sup> <a name="aws_account_id_input" id="@cdktf/provider-aws.quicksightAccountSettings.QuicksightAccountSettings.property.awsAccountIdInput"></a>

```python
aws_account_id_input: str
```

- *Type:* str

---

##### `default_namespace_input`<sup>Optional</sup> <a name="default_namespace_input" id="@cdktf/provider-aws.quicksightAccountSettings.QuicksightAccountSettings.property.defaultNamespaceInput"></a>

```python
default_namespace_input: str
```

- *Type:* str

---

##### `termination_protection_enabled_input`<sup>Optional</sup> <a name="termination_protection_enabled_input" id="@cdktf/provider-aws.quicksightAccountSettings.QuicksightAccountSettings.property.terminationProtectionEnabledInput"></a>

```python
termination_protection_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-aws.quicksightAccountSettings.QuicksightAccountSettings.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, QuicksightAccountSettingsTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.quicksightAccountSettings.QuicksightAccountSettingsTimeouts">QuicksightAccountSettingsTimeouts</a>]

---

##### `aws_account_id`<sup>Required</sup> <a name="aws_account_id" id="@cdktf/provider-aws.quicksightAccountSettings.QuicksightAccountSettings.property.awsAccountId"></a>

```python
aws_account_id: str
```

- *Type:* str

---

##### `default_namespace`<sup>Required</sup> <a name="default_namespace" id="@cdktf/provider-aws.quicksightAccountSettings.QuicksightAccountSettings.property.defaultNamespace"></a>

```python
default_namespace: str
```

- *Type:* str

---

##### `termination_protection_enabled`<sup>Required</sup> <a name="termination_protection_enabled" id="@cdktf/provider-aws.quicksightAccountSettings.QuicksightAccountSettings.property.terminationProtectionEnabled"></a>

```python
termination_protection_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSettings.QuicksightAccountSettings.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.quicksightAccountSettings.QuicksightAccountSettings.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### QuicksightAccountSettingsConfig <a name="QuicksightAccountSettingsConfig" id="@cdktf/provider-aws.quicksightAccountSettings.QuicksightAccountSettingsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.quicksightAccountSettings.QuicksightAccountSettingsConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import quicksight_account_settings

quicksightAccountSettings.QuicksightAccountSettingsConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  aws_account_id: str = None,
  default_namespace: str = None,
  termination_protection_enabled: typing.Union[bool, IResolvable] = None,
  timeouts: QuicksightAccountSettingsTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSettings.QuicksightAccountSettingsConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSettings.QuicksightAccountSettingsConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSettings.QuicksightAccountSettingsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSettings.QuicksightAccountSettingsConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSettings.QuicksightAccountSettingsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSettings.QuicksightAccountSettingsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSettings.QuicksightAccountSettingsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSettings.QuicksightAccountSettingsConfig.property.awsAccountId">aws_account_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/quicksight_account_settings#aws_account_id QuicksightAccountSettings#aws_account_id}. |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSettings.QuicksightAccountSettingsConfig.property.defaultNamespace">default_namespace</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/quicksight_account_settings#default_namespace QuicksightAccountSettings#default_namespace}. |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSettings.QuicksightAccountSettingsConfig.property.terminationProtectionEnabled">termination_protection_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/quicksight_account_settings#termination_protection_enabled QuicksightAccountSettings#termination_protection_enabled}. |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSettings.QuicksightAccountSettingsConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.quicksightAccountSettings.QuicksightAccountSettingsTimeouts">QuicksightAccountSettingsTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.quicksightAccountSettings.QuicksightAccountSettingsConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.quicksightAccountSettings.QuicksightAccountSettingsConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.quicksightAccountSettings.QuicksightAccountSettingsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.quicksightAccountSettings.QuicksightAccountSettingsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.quicksightAccountSettings.QuicksightAccountSettingsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.quicksightAccountSettings.QuicksightAccountSettingsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.quicksightAccountSettings.QuicksightAccountSettingsConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `aws_account_id`<sup>Optional</sup> <a name="aws_account_id" id="@cdktf/provider-aws.quicksightAccountSettings.QuicksightAccountSettingsConfig.property.awsAccountId"></a>

```python
aws_account_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/quicksight_account_settings#aws_account_id QuicksightAccountSettings#aws_account_id}.

---

##### `default_namespace`<sup>Optional</sup> <a name="default_namespace" id="@cdktf/provider-aws.quicksightAccountSettings.QuicksightAccountSettingsConfig.property.defaultNamespace"></a>

```python
default_namespace: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/quicksight_account_settings#default_namespace QuicksightAccountSettings#default_namespace}.

---

##### `termination_protection_enabled`<sup>Optional</sup> <a name="termination_protection_enabled" id="@cdktf/provider-aws.quicksightAccountSettings.QuicksightAccountSettingsConfig.property.terminationProtectionEnabled"></a>

```python
termination_protection_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/quicksight_account_settings#termination_protection_enabled QuicksightAccountSettings#termination_protection_enabled}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.quicksightAccountSettings.QuicksightAccountSettingsConfig.property.timeouts"></a>

```python
timeouts: QuicksightAccountSettingsTimeouts
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightAccountSettings.QuicksightAccountSettingsTimeouts">QuicksightAccountSettingsTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/quicksight_account_settings#timeouts QuicksightAccountSettings#timeouts}

---

### QuicksightAccountSettingsTimeouts <a name="QuicksightAccountSettingsTimeouts" id="@cdktf/provider-aws.quicksightAccountSettings.QuicksightAccountSettingsTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.quicksightAccountSettings.QuicksightAccountSettingsTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import quicksight_account_settings

quicksightAccountSettings.QuicksightAccountSettingsTimeouts(
  create: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSettings.QuicksightAccountSettingsTimeouts.property.create">create</a></code> | <code>str</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSettings.QuicksightAccountSettingsTimeouts.property.update">update</a></code> | <code>str</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.quicksightAccountSettings.QuicksightAccountSettingsTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/quicksight_account_settings#create QuicksightAccountSettings#create}

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.quicksightAccountSettings.QuicksightAccountSettingsTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.5.0/docs/resources/quicksight_account_settings#update QuicksightAccountSettings#update}

---

## Classes <a name="Classes" id="Classes"></a>

### QuicksightAccountSettingsTimeoutsOutputReference <a name="QuicksightAccountSettingsTimeoutsOutputReference" id="@cdktf/provider-aws.quicksightAccountSettings.QuicksightAccountSettingsTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.quicksightAccountSettings.QuicksightAccountSettingsTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import quicksight_account_settings

quicksightAccountSettings.QuicksightAccountSettingsTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSettings.QuicksightAccountSettingsTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSettings.QuicksightAccountSettingsTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.quicksightAccountSettings.QuicksightAccountSettingsTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightAccountSettings.QuicksightAccountSettingsTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSettings.QuicksightAccountSettingsTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSettings.QuicksightAccountSettingsTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSettings.QuicksightAccountSettingsTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSettings.QuicksightAccountSettingsTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSettings.QuicksightAccountSettingsTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSettings.QuicksightAccountSettingsTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSettings.QuicksightAccountSettingsTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSettings.QuicksightAccountSettingsTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSettings.QuicksightAccountSettingsTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSettings.QuicksightAccountSettingsTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSettings.QuicksightAccountSettingsTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSettings.QuicksightAccountSettingsTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSettings.QuicksightAccountSettingsTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSettings.QuicksightAccountSettingsTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSettings.QuicksightAccountSettingsTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.quicksightAccountSettings.QuicksightAccountSettingsTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.quicksightAccountSettings.QuicksightAccountSettingsTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightAccountSettings.QuicksightAccountSettingsTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.quicksightAccountSettings.QuicksightAccountSettingsTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightAccountSettings.QuicksightAccountSettingsTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.quicksightAccountSettings.QuicksightAccountSettingsTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightAccountSettings.QuicksightAccountSettingsTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.quicksightAccountSettings.QuicksightAccountSettingsTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightAccountSettings.QuicksightAccountSettingsTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.quicksightAccountSettings.QuicksightAccountSettingsTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightAccountSettings.QuicksightAccountSettingsTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.quicksightAccountSettings.QuicksightAccountSettingsTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightAccountSettings.QuicksightAccountSettingsTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.quicksightAccountSettings.QuicksightAccountSettingsTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightAccountSettings.QuicksightAccountSettingsTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.quicksightAccountSettings.QuicksightAccountSettingsTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightAccountSettings.QuicksightAccountSettingsTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.quicksightAccountSettings.QuicksightAccountSettingsTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.quicksightAccountSettings.QuicksightAccountSettingsTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.quicksightAccountSettings.QuicksightAccountSettingsTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.quicksightAccountSettings.QuicksightAccountSettingsTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.quicksightAccountSettings.QuicksightAccountSettingsTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.quicksightAccountSettings.QuicksightAccountSettingsTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.quicksightAccountSettings.QuicksightAccountSettingsTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-aws.quicksightAccountSettings.QuicksightAccountSettingsTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-aws.quicksightAccountSettings.QuicksightAccountSettingsTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSettings.QuicksightAccountSettingsTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSettings.QuicksightAccountSettingsTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSettings.QuicksightAccountSettingsTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSettings.QuicksightAccountSettingsTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSettings.QuicksightAccountSettingsTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSettings.QuicksightAccountSettingsTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightAccountSettings.QuicksightAccountSettingsTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.quicksightAccountSettings.QuicksightAccountSettingsTimeouts">QuicksightAccountSettingsTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.quicksightAccountSettings.QuicksightAccountSettingsTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.quicksightAccountSettings.QuicksightAccountSettingsTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-aws.quicksightAccountSettings.QuicksightAccountSettingsTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-aws.quicksightAccountSettings.QuicksightAccountSettingsTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.quicksightAccountSettings.QuicksightAccountSettingsTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-aws.quicksightAccountSettings.QuicksightAccountSettingsTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.quicksightAccountSettings.QuicksightAccountSettingsTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, QuicksightAccountSettingsTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.quicksightAccountSettings.QuicksightAccountSettingsTimeouts">QuicksightAccountSettingsTimeouts</a>]

---



