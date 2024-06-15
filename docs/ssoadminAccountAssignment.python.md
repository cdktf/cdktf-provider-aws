# `ssoadminAccountAssignment` Submodule <a name="`ssoadminAccountAssignment` Submodule" id="@cdktf/provider-aws.ssoadminAccountAssignment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SsoadminAccountAssignment <a name="SsoadminAccountAssignment" id="@cdktf/provider-aws.ssoadminAccountAssignment.SsoadminAccountAssignment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.54.1/docs/resources/ssoadmin_account_assignment aws_ssoadmin_account_assignment}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ssoadminAccountAssignment.SsoadminAccountAssignment.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ssoadmin_account_assignment

ssoadminAccountAssignment.SsoadminAccountAssignment(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  instance_arn: str,
  permission_set_arn: str,
  principal_id: str,
  principal_type: str,
  target_id: str,
  id: str = None,
  target_type: str = None,
  timeouts: SsoadminAccountAssignmentTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssoadminAccountAssignment.SsoadminAccountAssignment.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.ssoadminAccountAssignment.SsoadminAccountAssignment.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.ssoadminAccountAssignment.SsoadminAccountAssignment.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminAccountAssignment.SsoadminAccountAssignment.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminAccountAssignment.SsoadminAccountAssignment.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminAccountAssignment.SsoadminAccountAssignment.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminAccountAssignment.SsoadminAccountAssignment.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminAccountAssignment.SsoadminAccountAssignment.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminAccountAssignment.SsoadminAccountAssignment.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminAccountAssignment.SsoadminAccountAssignment.Initializer.parameter.instanceArn">instance_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.54.1/docs/resources/ssoadmin_account_assignment#instance_arn SsoadminAccountAssignment#instance_arn}. |
| <code><a href="#@cdktf/provider-aws.ssoadminAccountAssignment.SsoadminAccountAssignment.Initializer.parameter.permissionSetArn">permission_set_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.54.1/docs/resources/ssoadmin_account_assignment#permission_set_arn SsoadminAccountAssignment#permission_set_arn}. |
| <code><a href="#@cdktf/provider-aws.ssoadminAccountAssignment.SsoadminAccountAssignment.Initializer.parameter.principalId">principal_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.54.1/docs/resources/ssoadmin_account_assignment#principal_id SsoadminAccountAssignment#principal_id}. |
| <code><a href="#@cdktf/provider-aws.ssoadminAccountAssignment.SsoadminAccountAssignment.Initializer.parameter.principalType">principal_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.54.1/docs/resources/ssoadmin_account_assignment#principal_type SsoadminAccountAssignment#principal_type}. |
| <code><a href="#@cdktf/provider-aws.ssoadminAccountAssignment.SsoadminAccountAssignment.Initializer.parameter.targetId">target_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.54.1/docs/resources/ssoadmin_account_assignment#target_id SsoadminAccountAssignment#target_id}. |
| <code><a href="#@cdktf/provider-aws.ssoadminAccountAssignment.SsoadminAccountAssignment.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.54.1/docs/resources/ssoadmin_account_assignment#id SsoadminAccountAssignment#id}. |
| <code><a href="#@cdktf/provider-aws.ssoadminAccountAssignment.SsoadminAccountAssignment.Initializer.parameter.targetType">target_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.54.1/docs/resources/ssoadmin_account_assignment#target_type SsoadminAccountAssignment#target_type}. |
| <code><a href="#@cdktf/provider-aws.ssoadminAccountAssignment.SsoadminAccountAssignment.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.ssoadminAccountAssignment.SsoadminAccountAssignmentTimeouts">SsoadminAccountAssignmentTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.ssoadminAccountAssignment.SsoadminAccountAssignment.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.ssoadminAccountAssignment.SsoadminAccountAssignment.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.ssoadminAccountAssignment.SsoadminAccountAssignment.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.ssoadminAccountAssignment.SsoadminAccountAssignment.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.ssoadminAccountAssignment.SsoadminAccountAssignment.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.ssoadminAccountAssignment.SsoadminAccountAssignment.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.ssoadminAccountAssignment.SsoadminAccountAssignment.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.ssoadminAccountAssignment.SsoadminAccountAssignment.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.ssoadminAccountAssignment.SsoadminAccountAssignment.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `instance_arn`<sup>Required</sup> <a name="instance_arn" id="@cdktf/provider-aws.ssoadminAccountAssignment.SsoadminAccountAssignment.Initializer.parameter.instanceArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.54.1/docs/resources/ssoadmin_account_assignment#instance_arn SsoadminAccountAssignment#instance_arn}.

---

##### `permission_set_arn`<sup>Required</sup> <a name="permission_set_arn" id="@cdktf/provider-aws.ssoadminAccountAssignment.SsoadminAccountAssignment.Initializer.parameter.permissionSetArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.54.1/docs/resources/ssoadmin_account_assignment#permission_set_arn SsoadminAccountAssignment#permission_set_arn}.

---

##### `principal_id`<sup>Required</sup> <a name="principal_id" id="@cdktf/provider-aws.ssoadminAccountAssignment.SsoadminAccountAssignment.Initializer.parameter.principalId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.54.1/docs/resources/ssoadmin_account_assignment#principal_id SsoadminAccountAssignment#principal_id}.

---

##### `principal_type`<sup>Required</sup> <a name="principal_type" id="@cdktf/provider-aws.ssoadminAccountAssignment.SsoadminAccountAssignment.Initializer.parameter.principalType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.54.1/docs/resources/ssoadmin_account_assignment#principal_type SsoadminAccountAssignment#principal_type}.

---

##### `target_id`<sup>Required</sup> <a name="target_id" id="@cdktf/provider-aws.ssoadminAccountAssignment.SsoadminAccountAssignment.Initializer.parameter.targetId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.54.1/docs/resources/ssoadmin_account_assignment#target_id SsoadminAccountAssignment#target_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.ssoadminAccountAssignment.SsoadminAccountAssignment.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.54.1/docs/resources/ssoadmin_account_assignment#id SsoadminAccountAssignment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `target_type`<sup>Optional</sup> <a name="target_type" id="@cdktf/provider-aws.ssoadminAccountAssignment.SsoadminAccountAssignment.Initializer.parameter.targetType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.54.1/docs/resources/ssoadmin_account_assignment#target_type SsoadminAccountAssignment#target_type}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.ssoadminAccountAssignment.SsoadminAccountAssignment.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-aws.ssoadminAccountAssignment.SsoadminAccountAssignmentTimeouts">SsoadminAccountAssignmentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.54.1/docs/resources/ssoadmin_account_assignment#timeouts SsoadminAccountAssignment#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ssoadminAccountAssignment.SsoadminAccountAssignment.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.ssoadminAccountAssignment.SsoadminAccountAssignment.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminAccountAssignment.SsoadminAccountAssignment.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.ssoadminAccountAssignment.SsoadminAccountAssignment.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.ssoadminAccountAssignment.SsoadminAccountAssignment.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminAccountAssignment.SsoadminAccountAssignment.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminAccountAssignment.SsoadminAccountAssignment.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.ssoadminAccountAssignment.SsoadminAccountAssignment.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.ssoadminAccountAssignment.SsoadminAccountAssignment.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminAccountAssignment.SsoadminAccountAssignment.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminAccountAssignment.SsoadminAccountAssignment.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminAccountAssignment.SsoadminAccountAssignment.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminAccountAssignment.SsoadminAccountAssignment.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminAccountAssignment.SsoadminAccountAssignment.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminAccountAssignment.SsoadminAccountAssignment.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminAccountAssignment.SsoadminAccountAssignment.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminAccountAssignment.SsoadminAccountAssignment.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminAccountAssignment.SsoadminAccountAssignment.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminAccountAssignment.SsoadminAccountAssignment.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminAccountAssignment.SsoadminAccountAssignment.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminAccountAssignment.SsoadminAccountAssignment.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.ssoadminAccountAssignment.SsoadminAccountAssignment.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.ssoadminAccountAssignment.SsoadminAccountAssignment.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.ssoadminAccountAssignment.SsoadminAccountAssignment.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminAccountAssignment.SsoadminAccountAssignment.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminAccountAssignment.SsoadminAccountAssignment.resetTargetType">reset_target_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminAccountAssignment.SsoadminAccountAssignment.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.ssoadminAccountAssignment.SsoadminAccountAssignment.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.ssoadminAccountAssignment.SsoadminAccountAssignment.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.ssoadminAccountAssignment.SsoadminAccountAssignment.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ssoadminAccountAssignment.SsoadminAccountAssignment.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.ssoadminAccountAssignment.SsoadminAccountAssignment.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.ssoadminAccountAssignment.SsoadminAccountAssignment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.ssoadminAccountAssignment.SsoadminAccountAssignment.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-aws.ssoadminAccountAssignment.SsoadminAccountAssignment.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.ssoadminAccountAssignment.SsoadminAccountAssignment.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.ssoadminAccountAssignment.SsoadminAccountAssignment.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-aws.ssoadminAccountAssignment.SsoadminAccountAssignment.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-aws.ssoadminAccountAssignment.SsoadminAccountAssignment.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.ssoadminAccountAssignment.SsoadminAccountAssignment.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ssoadminAccountAssignment.SsoadminAccountAssignment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.ssoadminAccountAssignment.SsoadminAccountAssignment.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ssoadminAccountAssignment.SsoadminAccountAssignment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.ssoadminAccountAssignment.SsoadminAccountAssignment.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ssoadminAccountAssignment.SsoadminAccountAssignment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.ssoadminAccountAssignment.SsoadminAccountAssignment.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ssoadminAccountAssignment.SsoadminAccountAssignment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.ssoadminAccountAssignment.SsoadminAccountAssignment.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ssoadminAccountAssignment.SsoadminAccountAssignment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.ssoadminAccountAssignment.SsoadminAccountAssignment.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ssoadminAccountAssignment.SsoadminAccountAssignment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.ssoadminAccountAssignment.SsoadminAccountAssignment.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ssoadminAccountAssignment.SsoadminAccountAssignment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.ssoadminAccountAssignment.SsoadminAccountAssignment.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ssoadminAccountAssignment.SsoadminAccountAssignment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.ssoadminAccountAssignment.SsoadminAccountAssignment.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ssoadminAccountAssignment.SsoadminAccountAssignment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-aws.ssoadminAccountAssignment.SsoadminAccountAssignment.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-aws.ssoadminAccountAssignment.SsoadminAccountAssignment.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.ssoadminAccountAssignment.SsoadminAccountAssignment.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.ssoadminAccountAssignment.SsoadminAccountAssignment.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.ssoadminAccountAssignment.SsoadminAccountAssignment.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ssoadminAccountAssignment.SsoadminAccountAssignment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-aws.ssoadminAccountAssignment.SsoadminAccountAssignment.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.ssoadminAccountAssignment.SsoadminAccountAssignment.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-aws.ssoadminAccountAssignment.SsoadminAccountAssignment.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-aws.ssoadminAccountAssignment.SsoadminAccountAssignment.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.ssoadminAccountAssignment.SsoadminAccountAssignment.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-aws.ssoadminAccountAssignment.SsoadminAccountAssignment.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.ssoadminAccountAssignment.SsoadminAccountAssignment.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-aws.ssoadminAccountAssignment.SsoadminAccountAssignment.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.ssoadminAccountAssignment.SsoadminAccountAssignment.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.54.1/docs/resources/ssoadmin_account_assignment#create SsoadminAccountAssignment#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.ssoadminAccountAssignment.SsoadminAccountAssignment.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.54.1/docs/resources/ssoadmin_account_assignment#delete SsoadminAccountAssignment#delete}.

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.ssoadminAccountAssignment.SsoadminAccountAssignment.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_target_type` <a name="reset_target_type" id="@cdktf/provider-aws.ssoadminAccountAssignment.SsoadminAccountAssignment.resetTargetType"></a>

```python
def reset_target_type() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-aws.ssoadminAccountAssignment.SsoadminAccountAssignment.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ssoadminAccountAssignment.SsoadminAccountAssignment.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.ssoadminAccountAssignment.SsoadminAccountAssignment.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminAccountAssignment.SsoadminAccountAssignment.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminAccountAssignment.SsoadminAccountAssignment.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a SsoadminAccountAssignment resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.ssoadminAccountAssignment.SsoadminAccountAssignment.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import ssoadmin_account_assignment

ssoadminAccountAssignment.SsoadminAccountAssignment.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.ssoadminAccountAssignment.SsoadminAccountAssignment.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.ssoadminAccountAssignment.SsoadminAccountAssignment.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import ssoadmin_account_assignment

ssoadminAccountAssignment.SsoadminAccountAssignment.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.ssoadminAccountAssignment.SsoadminAccountAssignment.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.ssoadminAccountAssignment.SsoadminAccountAssignment.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import ssoadmin_account_assignment

ssoadminAccountAssignment.SsoadminAccountAssignment.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.ssoadminAccountAssignment.SsoadminAccountAssignment.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-aws.ssoadminAccountAssignment.SsoadminAccountAssignment.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_aws import ssoadmin_account_assignment

ssoadminAccountAssignment.SsoadminAccountAssignment.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a SsoadminAccountAssignment resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.ssoadminAccountAssignment.SsoadminAccountAssignment.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-aws.ssoadminAccountAssignment.SsoadminAccountAssignment.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the SsoadminAccountAssignment to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-aws.ssoadminAccountAssignment.SsoadminAccountAssignment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing SsoadminAccountAssignment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.54.1/docs/resources/ssoadmin_account_assignment#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.ssoadminAccountAssignment.SsoadminAccountAssignment.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the SsoadminAccountAssignment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssoadminAccountAssignment.SsoadminAccountAssignment.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.ssoadminAccountAssignment.SsoadminAccountAssignment.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminAccountAssignment.SsoadminAccountAssignment.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminAccountAssignment.SsoadminAccountAssignment.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminAccountAssignment.SsoadminAccountAssignment.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminAccountAssignment.SsoadminAccountAssignment.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminAccountAssignment.SsoadminAccountAssignment.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminAccountAssignment.SsoadminAccountAssignment.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminAccountAssignment.SsoadminAccountAssignment.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminAccountAssignment.SsoadminAccountAssignment.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminAccountAssignment.SsoadminAccountAssignment.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminAccountAssignment.SsoadminAccountAssignment.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminAccountAssignment.SsoadminAccountAssignment.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminAccountAssignment.SsoadminAccountAssignment.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminAccountAssignment.SsoadminAccountAssignment.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.ssoadminAccountAssignment.SsoadminAccountAssignmentTimeoutsOutputReference">SsoadminAccountAssignmentTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminAccountAssignment.SsoadminAccountAssignment.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminAccountAssignment.SsoadminAccountAssignment.property.instanceArnInput">instance_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminAccountAssignment.SsoadminAccountAssignment.property.permissionSetArnInput">permission_set_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminAccountAssignment.SsoadminAccountAssignment.property.principalIdInput">principal_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminAccountAssignment.SsoadminAccountAssignment.property.principalTypeInput">principal_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminAccountAssignment.SsoadminAccountAssignment.property.targetIdInput">target_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminAccountAssignment.SsoadminAccountAssignment.property.targetTypeInput">target_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminAccountAssignment.SsoadminAccountAssignment.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.ssoadminAccountAssignment.SsoadminAccountAssignmentTimeouts">SsoadminAccountAssignmentTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminAccountAssignment.SsoadminAccountAssignment.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminAccountAssignment.SsoadminAccountAssignment.property.instanceArn">instance_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminAccountAssignment.SsoadminAccountAssignment.property.permissionSetArn">permission_set_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminAccountAssignment.SsoadminAccountAssignment.property.principalId">principal_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminAccountAssignment.SsoadminAccountAssignment.property.principalType">principal_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminAccountAssignment.SsoadminAccountAssignment.property.targetId">target_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminAccountAssignment.SsoadminAccountAssignment.property.targetType">target_type</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.ssoadminAccountAssignment.SsoadminAccountAssignment.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.ssoadminAccountAssignment.SsoadminAccountAssignment.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ssoadminAccountAssignment.SsoadminAccountAssignment.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.ssoadminAccountAssignment.SsoadminAccountAssignment.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.ssoadminAccountAssignment.SsoadminAccountAssignment.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.ssoadminAccountAssignment.SsoadminAccountAssignment.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.ssoadminAccountAssignment.SsoadminAccountAssignment.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.ssoadminAccountAssignment.SsoadminAccountAssignment.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.ssoadminAccountAssignment.SsoadminAccountAssignment.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.ssoadminAccountAssignment.SsoadminAccountAssignment.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.ssoadminAccountAssignment.SsoadminAccountAssignment.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.ssoadminAccountAssignment.SsoadminAccountAssignment.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.ssoadminAccountAssignment.SsoadminAccountAssignment.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.ssoadminAccountAssignment.SsoadminAccountAssignment.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.ssoadminAccountAssignment.SsoadminAccountAssignment.property.timeouts"></a>

```python
timeouts: SsoadminAccountAssignmentTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.ssoadminAccountAssignment.SsoadminAccountAssignmentTimeoutsOutputReference">SsoadminAccountAssignmentTimeoutsOutputReference</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.ssoadminAccountAssignment.SsoadminAccountAssignment.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `instance_arn_input`<sup>Optional</sup> <a name="instance_arn_input" id="@cdktf/provider-aws.ssoadminAccountAssignment.SsoadminAccountAssignment.property.instanceArnInput"></a>

```python
instance_arn_input: str
```

- *Type:* str

---

##### `permission_set_arn_input`<sup>Optional</sup> <a name="permission_set_arn_input" id="@cdktf/provider-aws.ssoadminAccountAssignment.SsoadminAccountAssignment.property.permissionSetArnInput"></a>

```python
permission_set_arn_input: str
```

- *Type:* str

---

##### `principal_id_input`<sup>Optional</sup> <a name="principal_id_input" id="@cdktf/provider-aws.ssoadminAccountAssignment.SsoadminAccountAssignment.property.principalIdInput"></a>

```python
principal_id_input: str
```

- *Type:* str

---

##### `principal_type_input`<sup>Optional</sup> <a name="principal_type_input" id="@cdktf/provider-aws.ssoadminAccountAssignment.SsoadminAccountAssignment.property.principalTypeInput"></a>

```python
principal_type_input: str
```

- *Type:* str

---

##### `target_id_input`<sup>Optional</sup> <a name="target_id_input" id="@cdktf/provider-aws.ssoadminAccountAssignment.SsoadminAccountAssignment.property.targetIdInput"></a>

```python
target_id_input: str
```

- *Type:* str

---

##### `target_type_input`<sup>Optional</sup> <a name="target_type_input" id="@cdktf/provider-aws.ssoadminAccountAssignment.SsoadminAccountAssignment.property.targetTypeInput"></a>

```python
target_type_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-aws.ssoadminAccountAssignment.SsoadminAccountAssignment.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, SsoadminAccountAssignmentTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.ssoadminAccountAssignment.SsoadminAccountAssignmentTimeouts">SsoadminAccountAssignmentTimeouts</a>]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.ssoadminAccountAssignment.SsoadminAccountAssignment.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `instance_arn`<sup>Required</sup> <a name="instance_arn" id="@cdktf/provider-aws.ssoadminAccountAssignment.SsoadminAccountAssignment.property.instanceArn"></a>

```python
instance_arn: str
```

- *Type:* str

---

##### `permission_set_arn`<sup>Required</sup> <a name="permission_set_arn" id="@cdktf/provider-aws.ssoadminAccountAssignment.SsoadminAccountAssignment.property.permissionSetArn"></a>

```python
permission_set_arn: str
```

- *Type:* str

---

##### `principal_id`<sup>Required</sup> <a name="principal_id" id="@cdktf/provider-aws.ssoadminAccountAssignment.SsoadminAccountAssignment.property.principalId"></a>

```python
principal_id: str
```

- *Type:* str

---

##### `principal_type`<sup>Required</sup> <a name="principal_type" id="@cdktf/provider-aws.ssoadminAccountAssignment.SsoadminAccountAssignment.property.principalType"></a>

```python
principal_type: str
```

- *Type:* str

---

##### `target_id`<sup>Required</sup> <a name="target_id" id="@cdktf/provider-aws.ssoadminAccountAssignment.SsoadminAccountAssignment.property.targetId"></a>

```python
target_id: str
```

- *Type:* str

---

##### `target_type`<sup>Required</sup> <a name="target_type" id="@cdktf/provider-aws.ssoadminAccountAssignment.SsoadminAccountAssignment.property.targetType"></a>

```python
target_type: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssoadminAccountAssignment.SsoadminAccountAssignment.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.ssoadminAccountAssignment.SsoadminAccountAssignment.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### SsoadminAccountAssignmentConfig <a name="SsoadminAccountAssignmentConfig" id="@cdktf/provider-aws.ssoadminAccountAssignment.SsoadminAccountAssignmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ssoadminAccountAssignment.SsoadminAccountAssignmentConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ssoadmin_account_assignment

ssoadminAccountAssignment.SsoadminAccountAssignmentConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  instance_arn: str,
  permission_set_arn: str,
  principal_id: str,
  principal_type: str,
  target_id: str,
  id: str = None,
  target_type: str = None,
  timeouts: SsoadminAccountAssignmentTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssoadminAccountAssignment.SsoadminAccountAssignmentConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminAccountAssignment.SsoadminAccountAssignmentConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminAccountAssignment.SsoadminAccountAssignmentConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminAccountAssignment.SsoadminAccountAssignmentConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminAccountAssignment.SsoadminAccountAssignmentConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminAccountAssignment.SsoadminAccountAssignmentConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminAccountAssignment.SsoadminAccountAssignmentConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminAccountAssignment.SsoadminAccountAssignmentConfig.property.instanceArn">instance_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.54.1/docs/resources/ssoadmin_account_assignment#instance_arn SsoadminAccountAssignment#instance_arn}. |
| <code><a href="#@cdktf/provider-aws.ssoadminAccountAssignment.SsoadminAccountAssignmentConfig.property.permissionSetArn">permission_set_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.54.1/docs/resources/ssoadmin_account_assignment#permission_set_arn SsoadminAccountAssignment#permission_set_arn}. |
| <code><a href="#@cdktf/provider-aws.ssoadminAccountAssignment.SsoadminAccountAssignmentConfig.property.principalId">principal_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.54.1/docs/resources/ssoadmin_account_assignment#principal_id SsoadminAccountAssignment#principal_id}. |
| <code><a href="#@cdktf/provider-aws.ssoadminAccountAssignment.SsoadminAccountAssignmentConfig.property.principalType">principal_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.54.1/docs/resources/ssoadmin_account_assignment#principal_type SsoadminAccountAssignment#principal_type}. |
| <code><a href="#@cdktf/provider-aws.ssoadminAccountAssignment.SsoadminAccountAssignmentConfig.property.targetId">target_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.54.1/docs/resources/ssoadmin_account_assignment#target_id SsoadminAccountAssignment#target_id}. |
| <code><a href="#@cdktf/provider-aws.ssoadminAccountAssignment.SsoadminAccountAssignmentConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.54.1/docs/resources/ssoadmin_account_assignment#id SsoadminAccountAssignment#id}. |
| <code><a href="#@cdktf/provider-aws.ssoadminAccountAssignment.SsoadminAccountAssignmentConfig.property.targetType">target_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.54.1/docs/resources/ssoadmin_account_assignment#target_type SsoadminAccountAssignment#target_type}. |
| <code><a href="#@cdktf/provider-aws.ssoadminAccountAssignment.SsoadminAccountAssignmentConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.ssoadminAccountAssignment.SsoadminAccountAssignmentTimeouts">SsoadminAccountAssignmentTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.ssoadminAccountAssignment.SsoadminAccountAssignmentConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.ssoadminAccountAssignment.SsoadminAccountAssignmentConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.ssoadminAccountAssignment.SsoadminAccountAssignmentConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.ssoadminAccountAssignment.SsoadminAccountAssignmentConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.ssoadminAccountAssignment.SsoadminAccountAssignmentConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.ssoadminAccountAssignment.SsoadminAccountAssignmentConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.ssoadminAccountAssignment.SsoadminAccountAssignmentConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `instance_arn`<sup>Required</sup> <a name="instance_arn" id="@cdktf/provider-aws.ssoadminAccountAssignment.SsoadminAccountAssignmentConfig.property.instanceArn"></a>

```python
instance_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.54.1/docs/resources/ssoadmin_account_assignment#instance_arn SsoadminAccountAssignment#instance_arn}.

---

##### `permission_set_arn`<sup>Required</sup> <a name="permission_set_arn" id="@cdktf/provider-aws.ssoadminAccountAssignment.SsoadminAccountAssignmentConfig.property.permissionSetArn"></a>

```python
permission_set_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.54.1/docs/resources/ssoadmin_account_assignment#permission_set_arn SsoadminAccountAssignment#permission_set_arn}.

---

##### `principal_id`<sup>Required</sup> <a name="principal_id" id="@cdktf/provider-aws.ssoadminAccountAssignment.SsoadminAccountAssignmentConfig.property.principalId"></a>

```python
principal_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.54.1/docs/resources/ssoadmin_account_assignment#principal_id SsoadminAccountAssignment#principal_id}.

---

##### `principal_type`<sup>Required</sup> <a name="principal_type" id="@cdktf/provider-aws.ssoadminAccountAssignment.SsoadminAccountAssignmentConfig.property.principalType"></a>

```python
principal_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.54.1/docs/resources/ssoadmin_account_assignment#principal_type SsoadminAccountAssignment#principal_type}.

---

##### `target_id`<sup>Required</sup> <a name="target_id" id="@cdktf/provider-aws.ssoadminAccountAssignment.SsoadminAccountAssignmentConfig.property.targetId"></a>

```python
target_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.54.1/docs/resources/ssoadmin_account_assignment#target_id SsoadminAccountAssignment#target_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.ssoadminAccountAssignment.SsoadminAccountAssignmentConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.54.1/docs/resources/ssoadmin_account_assignment#id SsoadminAccountAssignment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `target_type`<sup>Optional</sup> <a name="target_type" id="@cdktf/provider-aws.ssoadminAccountAssignment.SsoadminAccountAssignmentConfig.property.targetType"></a>

```python
target_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.54.1/docs/resources/ssoadmin_account_assignment#target_type SsoadminAccountAssignment#target_type}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.ssoadminAccountAssignment.SsoadminAccountAssignmentConfig.property.timeouts"></a>

```python
timeouts: SsoadminAccountAssignmentTimeouts
```

- *Type:* <a href="#@cdktf/provider-aws.ssoadminAccountAssignment.SsoadminAccountAssignmentTimeouts">SsoadminAccountAssignmentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.54.1/docs/resources/ssoadmin_account_assignment#timeouts SsoadminAccountAssignment#timeouts}

---

### SsoadminAccountAssignmentTimeouts <a name="SsoadminAccountAssignmentTimeouts" id="@cdktf/provider-aws.ssoadminAccountAssignment.SsoadminAccountAssignmentTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ssoadminAccountAssignment.SsoadminAccountAssignmentTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ssoadmin_account_assignment

ssoadminAccountAssignment.SsoadminAccountAssignmentTimeouts(
  create: str = None,
  delete: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssoadminAccountAssignment.SsoadminAccountAssignmentTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.54.1/docs/resources/ssoadmin_account_assignment#create SsoadminAccountAssignment#create}. |
| <code><a href="#@cdktf/provider-aws.ssoadminAccountAssignment.SsoadminAccountAssignmentTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.54.1/docs/resources/ssoadmin_account_assignment#delete SsoadminAccountAssignment#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.ssoadminAccountAssignment.SsoadminAccountAssignmentTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.54.1/docs/resources/ssoadmin_account_assignment#create SsoadminAccountAssignment#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.ssoadminAccountAssignment.SsoadminAccountAssignmentTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.54.1/docs/resources/ssoadmin_account_assignment#delete SsoadminAccountAssignment#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### SsoadminAccountAssignmentTimeoutsOutputReference <a name="SsoadminAccountAssignmentTimeoutsOutputReference" id="@cdktf/provider-aws.ssoadminAccountAssignment.SsoadminAccountAssignmentTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ssoadminAccountAssignment.SsoadminAccountAssignmentTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ssoadmin_account_assignment

ssoadminAccountAssignment.SsoadminAccountAssignmentTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssoadminAccountAssignment.SsoadminAccountAssignmentTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ssoadminAccountAssignment.SsoadminAccountAssignmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.ssoadminAccountAssignment.SsoadminAccountAssignmentTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ssoadminAccountAssignment.SsoadminAccountAssignmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ssoadminAccountAssignment.SsoadminAccountAssignmentTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminAccountAssignment.SsoadminAccountAssignmentTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminAccountAssignment.SsoadminAccountAssignmentTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminAccountAssignment.SsoadminAccountAssignmentTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminAccountAssignment.SsoadminAccountAssignmentTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminAccountAssignment.SsoadminAccountAssignmentTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminAccountAssignment.SsoadminAccountAssignmentTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminAccountAssignment.SsoadminAccountAssignmentTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminAccountAssignment.SsoadminAccountAssignmentTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminAccountAssignment.SsoadminAccountAssignmentTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminAccountAssignment.SsoadminAccountAssignmentTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminAccountAssignment.SsoadminAccountAssignmentTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ssoadminAccountAssignment.SsoadminAccountAssignmentTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ssoadminAccountAssignment.SsoadminAccountAssignmentTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminAccountAssignment.SsoadminAccountAssignmentTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.ssoadminAccountAssignment.SsoadminAccountAssignmentTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.ssoadminAccountAssignment.SsoadminAccountAssignmentTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ssoadminAccountAssignment.SsoadminAccountAssignmentTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.ssoadminAccountAssignment.SsoadminAccountAssignmentTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ssoadminAccountAssignment.SsoadminAccountAssignmentTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.ssoadminAccountAssignment.SsoadminAccountAssignmentTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ssoadminAccountAssignment.SsoadminAccountAssignmentTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.ssoadminAccountAssignment.SsoadminAccountAssignmentTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ssoadminAccountAssignment.SsoadminAccountAssignmentTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.ssoadminAccountAssignment.SsoadminAccountAssignmentTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ssoadminAccountAssignment.SsoadminAccountAssignmentTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.ssoadminAccountAssignment.SsoadminAccountAssignmentTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ssoadminAccountAssignment.SsoadminAccountAssignmentTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.ssoadminAccountAssignment.SsoadminAccountAssignmentTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ssoadminAccountAssignment.SsoadminAccountAssignmentTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.ssoadminAccountAssignment.SsoadminAccountAssignmentTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ssoadminAccountAssignment.SsoadminAccountAssignmentTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.ssoadminAccountAssignment.SsoadminAccountAssignmentTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ssoadminAccountAssignment.SsoadminAccountAssignmentTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.ssoadminAccountAssignment.SsoadminAccountAssignmentTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ssoadminAccountAssignment.SsoadminAccountAssignmentTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ssoadminAccountAssignment.SsoadminAccountAssignmentTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ssoadminAccountAssignment.SsoadminAccountAssignmentTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.ssoadminAccountAssignment.SsoadminAccountAssignmentTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-aws.ssoadminAccountAssignment.SsoadminAccountAssignmentTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-aws.ssoadminAccountAssignment.SsoadminAccountAssignmentTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ssoadminAccountAssignment.SsoadminAccountAssignmentTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ssoadminAccountAssignment.SsoadminAccountAssignmentTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminAccountAssignment.SsoadminAccountAssignmentTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminAccountAssignment.SsoadminAccountAssignmentTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminAccountAssignment.SsoadminAccountAssignmentTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminAccountAssignment.SsoadminAccountAssignmentTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ssoadminAccountAssignment.SsoadminAccountAssignmentTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.ssoadminAccountAssignment.SsoadminAccountAssignmentTimeouts">SsoadminAccountAssignmentTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.ssoadminAccountAssignment.SsoadminAccountAssignmentTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ssoadminAccountAssignment.SsoadminAccountAssignmentTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-aws.ssoadminAccountAssignment.SsoadminAccountAssignmentTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-aws.ssoadminAccountAssignment.SsoadminAccountAssignmentTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.ssoadminAccountAssignment.SsoadminAccountAssignmentTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.ssoadminAccountAssignment.SsoadminAccountAssignmentTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.ssoadminAccountAssignment.SsoadminAccountAssignmentTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, SsoadminAccountAssignmentTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.ssoadminAccountAssignment.SsoadminAccountAssignmentTimeouts">SsoadminAccountAssignmentTimeouts</a>]

---



