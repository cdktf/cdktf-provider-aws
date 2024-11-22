# `backupRestoreTestingSelection` Submodule <a name="`backupRestoreTestingSelection` Submodule" id="@cdktf/provider-aws.backupRestoreTestingSelection"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BackupRestoreTestingSelection <a name="BackupRestoreTestingSelection" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.77.0/docs/resources/backup_restore_testing_selection aws_backup_restore_testing_selection}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import backup_restore_testing_selection

backupRestoreTestingSelection.BackupRestoreTestingSelection(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  iam_role_arn: str,
  name: str,
  protected_resource_type: str,
  restore_testing_plan_name: str,
  protected_resource_arns: typing.List[str] = None,
  protected_resource_conditions: typing.Union[IResolvable, typing.List[BackupRestoreTestingSelectionProtectedResourceConditions]] = None,
  restore_metadata_overrides: typing.Mapping[str] = None,
  validation_window_hours: typing.Union[int, float] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.Initializer.parameter.iamRoleArn">iam_role_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.77.0/docs/resources/backup_restore_testing_selection#iam_role_arn BackupRestoreTestingSelection#iam_role_arn}. |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.77.0/docs/resources/backup_restore_testing_selection#name BackupRestoreTestingSelection#name}. |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.Initializer.parameter.protectedResourceType">protected_resource_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.77.0/docs/resources/backup_restore_testing_selection#protected_resource_type BackupRestoreTestingSelection#protected_resource_type}. |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.Initializer.parameter.restoreTestingPlanName">restore_testing_plan_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.77.0/docs/resources/backup_restore_testing_selection#restore_testing_plan_name BackupRestoreTestingSelection#restore_testing_plan_name}. |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.Initializer.parameter.protectedResourceArns">protected_resource_arns</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.77.0/docs/resources/backup_restore_testing_selection#protected_resource_arns BackupRestoreTestingSelection#protected_resource_arns}. |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.Initializer.parameter.protectedResourceConditions">protected_resource_conditions</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditions">BackupRestoreTestingSelectionProtectedResourceConditions</a>]]</code> | protected_resource_conditions block. |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.Initializer.parameter.restoreMetadataOverrides">restore_metadata_overrides</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.77.0/docs/resources/backup_restore_testing_selection#restore_metadata_overrides BackupRestoreTestingSelection#restore_metadata_overrides}. |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.Initializer.parameter.validationWindowHours">validation_window_hours</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.77.0/docs/resources/backup_restore_testing_selection#validation_window_hours BackupRestoreTestingSelection#validation_window_hours}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `iam_role_arn`<sup>Required</sup> <a name="iam_role_arn" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.Initializer.parameter.iamRoleArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.77.0/docs/resources/backup_restore_testing_selection#iam_role_arn BackupRestoreTestingSelection#iam_role_arn}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.77.0/docs/resources/backup_restore_testing_selection#name BackupRestoreTestingSelection#name}.

---

##### `protected_resource_type`<sup>Required</sup> <a name="protected_resource_type" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.Initializer.parameter.protectedResourceType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.77.0/docs/resources/backup_restore_testing_selection#protected_resource_type BackupRestoreTestingSelection#protected_resource_type}.

---

##### `restore_testing_plan_name`<sup>Required</sup> <a name="restore_testing_plan_name" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.Initializer.parameter.restoreTestingPlanName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.77.0/docs/resources/backup_restore_testing_selection#restore_testing_plan_name BackupRestoreTestingSelection#restore_testing_plan_name}.

---

##### `protected_resource_arns`<sup>Optional</sup> <a name="protected_resource_arns" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.Initializer.parameter.protectedResourceArns"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.77.0/docs/resources/backup_restore_testing_selection#protected_resource_arns BackupRestoreTestingSelection#protected_resource_arns}.

---

##### `protected_resource_conditions`<sup>Optional</sup> <a name="protected_resource_conditions" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.Initializer.parameter.protectedResourceConditions"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditions">BackupRestoreTestingSelectionProtectedResourceConditions</a>]]

protected_resource_conditions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.77.0/docs/resources/backup_restore_testing_selection#protected_resource_conditions BackupRestoreTestingSelection#protected_resource_conditions}

---

##### `restore_metadata_overrides`<sup>Optional</sup> <a name="restore_metadata_overrides" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.Initializer.parameter.restoreMetadataOverrides"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.77.0/docs/resources/backup_restore_testing_selection#restore_metadata_overrides BackupRestoreTestingSelection#restore_metadata_overrides}.

---

##### `validation_window_hours`<sup>Optional</sup> <a name="validation_window_hours" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.Initializer.parameter.validationWindowHours"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.77.0/docs/resources/backup_restore_testing_selection#validation_window_hours BackupRestoreTestingSelection#validation_window_hours}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.putProtectedResourceConditions">put_protected_resource_conditions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.resetProtectedResourceArns">reset_protected_resource_arns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.resetProtectedResourceConditions">reset_protected_resource_conditions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.resetRestoreMetadataOverrides">reset_restore_metadata_overrides</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.resetValidationWindowHours">reset_validation_window_hours</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_protected_resource_conditions` <a name="put_protected_resource_conditions" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.putProtectedResourceConditions"></a>

```python
def put_protected_resource_conditions(
  value: typing.Union[IResolvable, typing.List[BackupRestoreTestingSelectionProtectedResourceConditions]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.putProtectedResourceConditions.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditions">BackupRestoreTestingSelectionProtectedResourceConditions</a>]]

---

##### `reset_protected_resource_arns` <a name="reset_protected_resource_arns" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.resetProtectedResourceArns"></a>

```python
def reset_protected_resource_arns() -> None
```

##### `reset_protected_resource_conditions` <a name="reset_protected_resource_conditions" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.resetProtectedResourceConditions"></a>

```python
def reset_protected_resource_conditions() -> None
```

##### `reset_restore_metadata_overrides` <a name="reset_restore_metadata_overrides" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.resetRestoreMetadataOverrides"></a>

```python
def reset_restore_metadata_overrides() -> None
```

##### `reset_validation_window_hours` <a name="reset_validation_window_hours" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.resetValidationWindowHours"></a>

```python
def reset_validation_window_hours() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a BackupRestoreTestingSelection resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import backup_restore_testing_selection

backupRestoreTestingSelection.BackupRestoreTestingSelection.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import backup_restore_testing_selection

backupRestoreTestingSelection.BackupRestoreTestingSelection.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import backup_restore_testing_selection

backupRestoreTestingSelection.BackupRestoreTestingSelection.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_aws import backup_restore_testing_selection

backupRestoreTestingSelection.BackupRestoreTestingSelection.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a BackupRestoreTestingSelection resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the BackupRestoreTestingSelection to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing BackupRestoreTestingSelection that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.77.0/docs/resources/backup_restore_testing_selection#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the BackupRestoreTestingSelection to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.property.protectedResourceConditions">protected_resource_conditions</a></code> | <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsList">BackupRestoreTestingSelectionProtectedResourceConditionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.property.iamRoleArnInput">iam_role_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.property.protectedResourceArnsInput">protected_resource_arns_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.property.protectedResourceConditionsInput">protected_resource_conditions_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditions">BackupRestoreTestingSelectionProtectedResourceConditions</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.property.protectedResourceTypeInput">protected_resource_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.property.restoreMetadataOverridesInput">restore_metadata_overrides_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.property.restoreTestingPlanNameInput">restore_testing_plan_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.property.validationWindowHoursInput">validation_window_hours_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.property.iamRoleArn">iam_role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.property.protectedResourceArns">protected_resource_arns</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.property.protectedResourceType">protected_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.property.restoreMetadataOverrides">restore_metadata_overrides</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.property.restoreTestingPlanName">restore_testing_plan_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.property.validationWindowHours">validation_window_hours</a></code> | <code>typing.Union[int, float]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `protected_resource_conditions`<sup>Required</sup> <a name="protected_resource_conditions" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.property.protectedResourceConditions"></a>

```python
protected_resource_conditions: BackupRestoreTestingSelectionProtectedResourceConditionsList
```

- *Type:* <a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsList">BackupRestoreTestingSelectionProtectedResourceConditionsList</a>

---

##### `iam_role_arn_input`<sup>Optional</sup> <a name="iam_role_arn_input" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.property.iamRoleArnInput"></a>

```python
iam_role_arn_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `protected_resource_arns_input`<sup>Optional</sup> <a name="protected_resource_arns_input" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.property.protectedResourceArnsInput"></a>

```python
protected_resource_arns_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `protected_resource_conditions_input`<sup>Optional</sup> <a name="protected_resource_conditions_input" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.property.protectedResourceConditionsInput"></a>

```python
protected_resource_conditions_input: typing.Union[IResolvable, typing.List[BackupRestoreTestingSelectionProtectedResourceConditions]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditions">BackupRestoreTestingSelectionProtectedResourceConditions</a>]]

---

##### `protected_resource_type_input`<sup>Optional</sup> <a name="protected_resource_type_input" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.property.protectedResourceTypeInput"></a>

```python
protected_resource_type_input: str
```

- *Type:* str

---

##### `restore_metadata_overrides_input`<sup>Optional</sup> <a name="restore_metadata_overrides_input" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.property.restoreMetadataOverridesInput"></a>

```python
restore_metadata_overrides_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `restore_testing_plan_name_input`<sup>Optional</sup> <a name="restore_testing_plan_name_input" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.property.restoreTestingPlanNameInput"></a>

```python
restore_testing_plan_name_input: str
```

- *Type:* str

---

##### `validation_window_hours_input`<sup>Optional</sup> <a name="validation_window_hours_input" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.property.validationWindowHoursInput"></a>

```python
validation_window_hours_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `iam_role_arn`<sup>Required</sup> <a name="iam_role_arn" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.property.iamRoleArn"></a>

```python
iam_role_arn: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `protected_resource_arns`<sup>Required</sup> <a name="protected_resource_arns" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.property.protectedResourceArns"></a>

```python
protected_resource_arns: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `protected_resource_type`<sup>Required</sup> <a name="protected_resource_type" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.property.protectedResourceType"></a>

```python
protected_resource_type: str
```

- *Type:* str

---

##### `restore_metadata_overrides`<sup>Required</sup> <a name="restore_metadata_overrides" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.property.restoreMetadataOverrides"></a>

```python
restore_metadata_overrides: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `restore_testing_plan_name`<sup>Required</sup> <a name="restore_testing_plan_name" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.property.restoreTestingPlanName"></a>

```python
restore_testing_plan_name: str
```

- *Type:* str

---

##### `validation_window_hours`<sup>Required</sup> <a name="validation_window_hours" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.property.validationWindowHours"></a>

```python
validation_window_hours: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelection.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### BackupRestoreTestingSelectionConfig <a name="BackupRestoreTestingSelectionConfig" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import backup_restore_testing_selection

backupRestoreTestingSelection.BackupRestoreTestingSelectionConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  iam_role_arn: str,
  name: str,
  protected_resource_type: str,
  restore_testing_plan_name: str,
  protected_resource_arns: typing.List[str] = None,
  protected_resource_conditions: typing.Union[IResolvable, typing.List[BackupRestoreTestingSelectionProtectedResourceConditions]] = None,
  restore_metadata_overrides: typing.Mapping[str] = None,
  validation_window_hours: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionConfig.property.iamRoleArn">iam_role_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.77.0/docs/resources/backup_restore_testing_selection#iam_role_arn BackupRestoreTestingSelection#iam_role_arn}. |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.77.0/docs/resources/backup_restore_testing_selection#name BackupRestoreTestingSelection#name}. |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionConfig.property.protectedResourceType">protected_resource_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.77.0/docs/resources/backup_restore_testing_selection#protected_resource_type BackupRestoreTestingSelection#protected_resource_type}. |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionConfig.property.restoreTestingPlanName">restore_testing_plan_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.77.0/docs/resources/backup_restore_testing_selection#restore_testing_plan_name BackupRestoreTestingSelection#restore_testing_plan_name}. |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionConfig.property.protectedResourceArns">protected_resource_arns</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.77.0/docs/resources/backup_restore_testing_selection#protected_resource_arns BackupRestoreTestingSelection#protected_resource_arns}. |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionConfig.property.protectedResourceConditions">protected_resource_conditions</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditions">BackupRestoreTestingSelectionProtectedResourceConditions</a>]]</code> | protected_resource_conditions block. |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionConfig.property.restoreMetadataOverrides">restore_metadata_overrides</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.77.0/docs/resources/backup_restore_testing_selection#restore_metadata_overrides BackupRestoreTestingSelection#restore_metadata_overrides}. |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionConfig.property.validationWindowHours">validation_window_hours</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.77.0/docs/resources/backup_restore_testing_selection#validation_window_hours BackupRestoreTestingSelection#validation_window_hours}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `iam_role_arn`<sup>Required</sup> <a name="iam_role_arn" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionConfig.property.iamRoleArn"></a>

```python
iam_role_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.77.0/docs/resources/backup_restore_testing_selection#iam_role_arn BackupRestoreTestingSelection#iam_role_arn}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.77.0/docs/resources/backup_restore_testing_selection#name BackupRestoreTestingSelection#name}.

---

##### `protected_resource_type`<sup>Required</sup> <a name="protected_resource_type" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionConfig.property.protectedResourceType"></a>

```python
protected_resource_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.77.0/docs/resources/backup_restore_testing_selection#protected_resource_type BackupRestoreTestingSelection#protected_resource_type}.

---

##### `restore_testing_plan_name`<sup>Required</sup> <a name="restore_testing_plan_name" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionConfig.property.restoreTestingPlanName"></a>

```python
restore_testing_plan_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.77.0/docs/resources/backup_restore_testing_selection#restore_testing_plan_name BackupRestoreTestingSelection#restore_testing_plan_name}.

---

##### `protected_resource_arns`<sup>Optional</sup> <a name="protected_resource_arns" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionConfig.property.protectedResourceArns"></a>

```python
protected_resource_arns: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.77.0/docs/resources/backup_restore_testing_selection#protected_resource_arns BackupRestoreTestingSelection#protected_resource_arns}.

---

##### `protected_resource_conditions`<sup>Optional</sup> <a name="protected_resource_conditions" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionConfig.property.protectedResourceConditions"></a>

```python
protected_resource_conditions: typing.Union[IResolvable, typing.List[BackupRestoreTestingSelectionProtectedResourceConditions]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditions">BackupRestoreTestingSelectionProtectedResourceConditions</a>]]

protected_resource_conditions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.77.0/docs/resources/backup_restore_testing_selection#protected_resource_conditions BackupRestoreTestingSelection#protected_resource_conditions}

---

##### `restore_metadata_overrides`<sup>Optional</sup> <a name="restore_metadata_overrides" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionConfig.property.restoreMetadataOverrides"></a>

```python
restore_metadata_overrides: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.77.0/docs/resources/backup_restore_testing_selection#restore_metadata_overrides BackupRestoreTestingSelection#restore_metadata_overrides}.

---

##### `validation_window_hours`<sup>Optional</sup> <a name="validation_window_hours" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionConfig.property.validationWindowHours"></a>

```python
validation_window_hours: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.77.0/docs/resources/backup_restore_testing_selection#validation_window_hours BackupRestoreTestingSelection#validation_window_hours}.

---

### BackupRestoreTestingSelectionProtectedResourceConditions <a name="BackupRestoreTestingSelectionProtectedResourceConditions" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditions.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import backup_restore_testing_selection

backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditions(
  string_equals: typing.Union[IResolvable, typing.List[BackupRestoreTestingSelectionProtectedResourceConditionsStringEquals]] = None,
  string_not_equals: typing.Union[IResolvable, typing.List[BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEquals]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditions.property.stringEquals">string_equals</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringEquals">BackupRestoreTestingSelectionProtectedResourceConditionsStringEquals</a>]]</code> | string_equals block. |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditions.property.stringNotEquals">string_not_equals</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEquals">BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEquals</a>]]</code> | string_not_equals block. |

---

##### `string_equals`<sup>Optional</sup> <a name="string_equals" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditions.property.stringEquals"></a>

```python
string_equals: typing.Union[IResolvable, typing.List[BackupRestoreTestingSelectionProtectedResourceConditionsStringEquals]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringEquals">BackupRestoreTestingSelectionProtectedResourceConditionsStringEquals</a>]]

string_equals block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.77.0/docs/resources/backup_restore_testing_selection#string_equals BackupRestoreTestingSelection#string_equals}

---

##### `string_not_equals`<sup>Optional</sup> <a name="string_not_equals" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditions.property.stringNotEquals"></a>

```python
string_not_equals: typing.Union[IResolvable, typing.List[BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEquals]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEquals">BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEquals</a>]]

string_not_equals block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.77.0/docs/resources/backup_restore_testing_selection#string_not_equals BackupRestoreTestingSelection#string_not_equals}

---

### BackupRestoreTestingSelectionProtectedResourceConditionsStringEquals <a name="BackupRestoreTestingSelectionProtectedResourceConditionsStringEquals" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringEquals"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringEquals.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import backup_restore_testing_selection

backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringEquals(
  key: str,
  value: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringEquals.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.77.0/docs/resources/backup_restore_testing_selection#key BackupRestoreTestingSelection#key}. |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringEquals.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.77.0/docs/resources/backup_restore_testing_selection#value BackupRestoreTestingSelection#value}. |

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringEquals.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.77.0/docs/resources/backup_restore_testing_selection#key BackupRestoreTestingSelection#key}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringEquals.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.77.0/docs/resources/backup_restore_testing_selection#value BackupRestoreTestingSelection#value}.

---

### BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEquals <a name="BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEquals" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEquals"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEquals.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import backup_restore_testing_selection

backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEquals(
  key: str,
  value: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEquals.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.77.0/docs/resources/backup_restore_testing_selection#key BackupRestoreTestingSelection#key}. |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEquals.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.77.0/docs/resources/backup_restore_testing_selection#value BackupRestoreTestingSelection#value}. |

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEquals.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.77.0/docs/resources/backup_restore_testing_selection#key BackupRestoreTestingSelection#key}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEquals.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.77.0/docs/resources/backup_restore_testing_selection#value BackupRestoreTestingSelection#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### BackupRestoreTestingSelectionProtectedResourceConditionsList <a name="BackupRestoreTestingSelectionProtectedResourceConditionsList" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import backup_restore_testing_selection

backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> BackupRestoreTestingSelectionProtectedResourceConditionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditions">BackupRestoreTestingSelectionProtectedResourceConditions</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[BackupRestoreTestingSelectionProtectedResourceConditions]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditions">BackupRestoreTestingSelectionProtectedResourceConditions</a>]]

---


### BackupRestoreTestingSelectionProtectedResourceConditionsOutputReference <a name="BackupRestoreTestingSelectionProtectedResourceConditionsOutputReference" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import backup_restore_testing_selection

backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsOutputReference.putStringEquals">put_string_equals</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsOutputReference.putStringNotEquals">put_string_not_equals</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsOutputReference.resetStringEquals">reset_string_equals</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsOutputReference.resetStringNotEquals">reset_string_not_equals</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_string_equals` <a name="put_string_equals" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsOutputReference.putStringEquals"></a>

```python
def put_string_equals(
  value: typing.Union[IResolvable, typing.List[BackupRestoreTestingSelectionProtectedResourceConditionsStringEquals]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsOutputReference.putStringEquals.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringEquals">BackupRestoreTestingSelectionProtectedResourceConditionsStringEquals</a>]]

---

##### `put_string_not_equals` <a name="put_string_not_equals" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsOutputReference.putStringNotEquals"></a>

```python
def put_string_not_equals(
  value: typing.Union[IResolvable, typing.List[BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEquals]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsOutputReference.putStringNotEquals.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEquals">BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEquals</a>]]

---

##### `reset_string_equals` <a name="reset_string_equals" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsOutputReference.resetStringEquals"></a>

```python
def reset_string_equals() -> None
```

##### `reset_string_not_equals` <a name="reset_string_not_equals" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsOutputReference.resetStringNotEquals"></a>

```python
def reset_string_not_equals() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsOutputReference.property.stringEquals">string_equals</a></code> | <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsList">BackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsOutputReference.property.stringNotEquals">string_not_equals</a></code> | <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsList">BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsOutputReference.property.stringEqualsInput">string_equals_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringEquals">BackupRestoreTestingSelectionProtectedResourceConditionsStringEquals</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsOutputReference.property.stringNotEqualsInput">string_not_equals_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEquals">BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEquals</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditions">BackupRestoreTestingSelectionProtectedResourceConditions</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `string_equals`<sup>Required</sup> <a name="string_equals" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsOutputReference.property.stringEquals"></a>

```python
string_equals: BackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsList
```

- *Type:* <a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsList">BackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsList</a>

---

##### `string_not_equals`<sup>Required</sup> <a name="string_not_equals" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsOutputReference.property.stringNotEquals"></a>

```python
string_not_equals: BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsList
```

- *Type:* <a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsList">BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsList</a>

---

##### `string_equals_input`<sup>Optional</sup> <a name="string_equals_input" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsOutputReference.property.stringEqualsInput"></a>

```python
string_equals_input: typing.Union[IResolvable, typing.List[BackupRestoreTestingSelectionProtectedResourceConditionsStringEquals]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringEquals">BackupRestoreTestingSelectionProtectedResourceConditionsStringEquals</a>]]

---

##### `string_not_equals_input`<sup>Optional</sup> <a name="string_not_equals_input" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsOutputReference.property.stringNotEqualsInput"></a>

```python
string_not_equals_input: typing.Union[IResolvable, typing.List[BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEquals]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEquals">BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEquals</a>]]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, BackupRestoreTestingSelectionProtectedResourceConditions]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditions">BackupRestoreTestingSelectionProtectedResourceConditions</a>]

---


### BackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsList <a name="BackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsList" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import backup_restore_testing_selection

backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> BackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringEquals">BackupRestoreTestingSelectionProtectedResourceConditionsStringEquals</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[BackupRestoreTestingSelectionProtectedResourceConditionsStringEquals]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringEquals">BackupRestoreTestingSelectionProtectedResourceConditionsStringEquals</a>]]

---


### BackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsOutputReference <a name="BackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsOutputReference" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import backup_restore_testing_selection

backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringEquals">BackupRestoreTestingSelectionProtectedResourceConditionsStringEquals</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringEqualsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, BackupRestoreTestingSelectionProtectedResourceConditionsStringEquals]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringEquals">BackupRestoreTestingSelectionProtectedResourceConditionsStringEquals</a>]

---


### BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsList <a name="BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsList" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import backup_restore_testing_selection

backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEquals">BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEquals</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEquals]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEquals">BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEquals</a>]]

---


### BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsOutputReference <a name="BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsOutputReference" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import backup_restore_testing_selection

backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEquals">BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEquals</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEqualsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEquals]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.backupRestoreTestingSelection.BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEquals">BackupRestoreTestingSelectionProtectedResourceConditionsStringNotEquals</a>]

---



