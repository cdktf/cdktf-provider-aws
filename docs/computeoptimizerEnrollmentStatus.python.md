# `computeoptimizerEnrollmentStatus` Submodule <a name="`computeoptimizerEnrollmentStatus` Submodule" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ComputeoptimizerEnrollmentStatus <a name="ComputeoptimizerEnrollmentStatus" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/computeoptimizer_enrollment_status aws_computeoptimizer_enrollment_status}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import computeoptimizer_enrollment_status

computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  status: str,
  include_member_accounts: typing.Union[bool, IResolvable] = None,
  region: str = None,
  timeouts: ComputeoptimizerEnrollmentStatusTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.Initializer.parameter.status">status</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/computeoptimizer_enrollment_status#status ComputeoptimizerEnrollmentStatus#status}. |
| <code><a href="#@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.Initializer.parameter.includeMemberAccounts">include_member_accounts</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/computeoptimizer_enrollment_status#include_member_accounts ComputeoptimizerEnrollmentStatus#include_member_accounts}. |
| <code><a href="#@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.Initializer.parameter.region">region</a></code> | <code>str</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatusTimeouts">ComputeoptimizerEnrollmentStatusTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.Initializer.parameter.status"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/computeoptimizer_enrollment_status#status ComputeoptimizerEnrollmentStatus#status}.

---

##### `include_member_accounts`<sup>Optional</sup> <a name="include_member_accounts" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.Initializer.parameter.includeMemberAccounts"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/computeoptimizer_enrollment_status#include_member_accounts ComputeoptimizerEnrollmentStatus#include_member_accounts}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.Initializer.parameter.region"></a>

- *Type:* str

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/computeoptimizer_enrollment_status#region ComputeoptimizerEnrollmentStatus#region}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatusTimeouts">ComputeoptimizerEnrollmentStatusTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/computeoptimizer_enrollment_status#timeouts ComputeoptimizerEnrollmentStatus#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.resetIncludeMemberAccounts">reset_include_member_accounts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.resetRegion">reset_region</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.putTimeouts.parameter.create"></a>

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/computeoptimizer_enrollment_status#create ComputeoptimizerEnrollmentStatus#create}

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.putTimeouts.parameter.update"></a>

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/computeoptimizer_enrollment_status#update ComputeoptimizerEnrollmentStatus#update}

---

##### `reset_include_member_accounts` <a name="reset_include_member_accounts" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.resetIncludeMemberAccounts"></a>

```python
def reset_include_member_accounts() -> None
```

##### `reset_region` <a name="reset_region" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.resetRegion"></a>

```python
def reset_region() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a ComputeoptimizerEnrollmentStatus resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import computeoptimizer_enrollment_status

computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import computeoptimizer_enrollment_status

computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import computeoptimizer_enrollment_status

computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_aws import computeoptimizer_enrollment_status

computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a ComputeoptimizerEnrollmentStatus resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the ComputeoptimizerEnrollmentStatus to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing ComputeoptimizerEnrollmentStatus that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/computeoptimizer_enrollment_status#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ComputeoptimizerEnrollmentStatus to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.property.numberOfMemberAccountsOptedIn">number_of_member_accounts_opted_in</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatusTimeoutsOutputReference">ComputeoptimizerEnrollmentStatusTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.property.includeMemberAccountsInput">include_member_accounts_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.property.statusInput">status_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatusTimeouts">ComputeoptimizerEnrollmentStatusTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.property.includeMemberAccounts">include_member_accounts</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.property.status">status</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `number_of_member_accounts_opted_in`<sup>Required</sup> <a name="number_of_member_accounts_opted_in" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.property.numberOfMemberAccountsOptedIn"></a>

```python
number_of_member_accounts_opted_in: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.property.timeouts"></a>

```python
timeouts: ComputeoptimizerEnrollmentStatusTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatusTimeoutsOutputReference">ComputeoptimizerEnrollmentStatusTimeoutsOutputReference</a>

---

##### `include_member_accounts_input`<sup>Optional</sup> <a name="include_member_accounts_input" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.property.includeMemberAccountsInput"></a>

```python
include_member_accounts_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `status_input`<sup>Optional</sup> <a name="status_input" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.property.statusInput"></a>

```python
status_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, ComputeoptimizerEnrollmentStatusTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatusTimeouts">ComputeoptimizerEnrollmentStatusTimeouts</a>]

---

##### `include_member_accounts`<sup>Required</sup> <a name="include_member_accounts" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.property.includeMemberAccounts"></a>

```python
include_member_accounts: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.property.status"></a>

```python
status: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatus.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ComputeoptimizerEnrollmentStatusConfig <a name="ComputeoptimizerEnrollmentStatusConfig" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatusConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatusConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import computeoptimizer_enrollment_status

computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatusConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  status: str,
  include_member_accounts: typing.Union[bool, IResolvable] = None,
  region: str = None,
  timeouts: ComputeoptimizerEnrollmentStatusTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatusConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatusConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatusConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatusConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatusConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatusConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatusConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatusConfig.property.status">status</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/computeoptimizer_enrollment_status#status ComputeoptimizerEnrollmentStatus#status}. |
| <code><a href="#@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatusConfig.property.includeMemberAccounts">include_member_accounts</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/computeoptimizer_enrollment_status#include_member_accounts ComputeoptimizerEnrollmentStatus#include_member_accounts}. |
| <code><a href="#@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatusConfig.property.region">region</a></code> | <code>str</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatusConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatusTimeouts">ComputeoptimizerEnrollmentStatusTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatusConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatusConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatusConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatusConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatusConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatusConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatusConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatusConfig.property.status"></a>

```python
status: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/computeoptimizer_enrollment_status#status ComputeoptimizerEnrollmentStatus#status}.

---

##### `include_member_accounts`<sup>Optional</sup> <a name="include_member_accounts" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatusConfig.property.includeMemberAccounts"></a>

```python
include_member_accounts: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/computeoptimizer_enrollment_status#include_member_accounts ComputeoptimizerEnrollmentStatus#include_member_accounts}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatusConfig.property.region"></a>

```python
region: str
```

- *Type:* str

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/computeoptimizer_enrollment_status#region ComputeoptimizerEnrollmentStatus#region}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatusConfig.property.timeouts"></a>

```python
timeouts: ComputeoptimizerEnrollmentStatusTimeouts
```

- *Type:* <a href="#@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatusTimeouts">ComputeoptimizerEnrollmentStatusTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/computeoptimizer_enrollment_status#timeouts ComputeoptimizerEnrollmentStatus#timeouts}

---

### ComputeoptimizerEnrollmentStatusTimeouts <a name="ComputeoptimizerEnrollmentStatusTimeouts" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatusTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatusTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import computeoptimizer_enrollment_status

computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatusTimeouts(
  create: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatusTimeouts.property.create">create</a></code> | <code>str</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |
| <code><a href="#@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatusTimeouts.property.update">update</a></code> | <code>str</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatusTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/computeoptimizer_enrollment_status#create ComputeoptimizerEnrollmentStatus#create}

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatusTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.13.0/docs/resources/computeoptimizer_enrollment_status#update ComputeoptimizerEnrollmentStatus#update}

---

## Classes <a name="Classes" id="Classes"></a>

### ComputeoptimizerEnrollmentStatusTimeoutsOutputReference <a name="ComputeoptimizerEnrollmentStatusTimeoutsOutputReference" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatusTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatusTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import computeoptimizer_enrollment_status

computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatusTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatusTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatusTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatusTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatusTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatusTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatusTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatusTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatusTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatusTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatusTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatusTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatusTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatusTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatusTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatusTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatusTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatusTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatusTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatusTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatusTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatusTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatusTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatusTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatusTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatusTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatusTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatusTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatusTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatusTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatusTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatusTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatusTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatusTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatusTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatusTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatusTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatusTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatusTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatusTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatusTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatusTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatusTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatusTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatusTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatusTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatusTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatusTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatusTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatusTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatusTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatusTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatusTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatusTimeouts">ComputeoptimizerEnrollmentStatusTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatusTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatusTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatusTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatusTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatusTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatusTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatusTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ComputeoptimizerEnrollmentStatusTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.computeoptimizerEnrollmentStatus.ComputeoptimizerEnrollmentStatusTimeouts">ComputeoptimizerEnrollmentStatusTimeouts</a>]

---



