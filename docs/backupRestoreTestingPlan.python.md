# `backupRestoreTestingPlan` Submodule <a name="`backupRestoreTestingPlan` Submodule" id="@cdktf/provider-aws.backupRestoreTestingPlan"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BackupRestoreTestingPlan <a name="BackupRestoreTestingPlan" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/backup_restore_testing_plan aws_backup_restore_testing_plan}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import backup_restore_testing_plan

backupRestoreTestingPlan.BackupRestoreTestingPlan(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  schedule_expression: str,
  recovery_point_selection: typing.Union[IResolvable, typing.List[BackupRestoreTestingPlanRecoveryPointSelection]] = None,
  region: str = None,
  schedule_expression_timezone: str = None,
  start_window_hours: typing.Union[int, float] = None,
  tags: typing.Mapping[str] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/backup_restore_testing_plan#name BackupRestoreTestingPlan#name}. |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.Initializer.parameter.scheduleExpression">schedule_expression</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/backup_restore_testing_plan#schedule_expression BackupRestoreTestingPlan#schedule_expression}. |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.Initializer.parameter.recoveryPointSelection">recovery_point_selection</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelection">BackupRestoreTestingPlanRecoveryPointSelection</a>]]</code> | recovery_point_selection block. |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.Initializer.parameter.region">region</a></code> | <code>str</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.Initializer.parameter.scheduleExpressionTimezone">schedule_expression_timezone</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/backup_restore_testing_plan#schedule_expression_timezone BackupRestoreTestingPlan#schedule_expression_timezone}. |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.Initializer.parameter.startWindowHours">start_window_hours</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/backup_restore_testing_plan#start_window_hours BackupRestoreTestingPlan#start_window_hours}. |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/backup_restore_testing_plan#tags BackupRestoreTestingPlan#tags}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/backup_restore_testing_plan#name BackupRestoreTestingPlan#name}.

---

##### `schedule_expression`<sup>Required</sup> <a name="schedule_expression" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.Initializer.parameter.scheduleExpression"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/backup_restore_testing_plan#schedule_expression BackupRestoreTestingPlan#schedule_expression}.

---

##### `recovery_point_selection`<sup>Optional</sup> <a name="recovery_point_selection" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.Initializer.parameter.recoveryPointSelection"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelection">BackupRestoreTestingPlanRecoveryPointSelection</a>]]

recovery_point_selection block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/backup_restore_testing_plan#recovery_point_selection BackupRestoreTestingPlan#recovery_point_selection}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.Initializer.parameter.region"></a>

- *Type:* str

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/backup_restore_testing_plan#region BackupRestoreTestingPlan#region}

---

##### `schedule_expression_timezone`<sup>Optional</sup> <a name="schedule_expression_timezone" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.Initializer.parameter.scheduleExpressionTimezone"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/backup_restore_testing_plan#schedule_expression_timezone BackupRestoreTestingPlan#schedule_expression_timezone}.

---

##### `start_window_hours`<sup>Optional</sup> <a name="start_window_hours" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.Initializer.parameter.startWindowHours"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/backup_restore_testing_plan#start_window_hours BackupRestoreTestingPlan#start_window_hours}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/backup_restore_testing_plan#tags BackupRestoreTestingPlan#tags}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.putRecoveryPointSelection">put_recovery_point_selection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.resetRecoveryPointSelection">reset_recovery_point_selection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.resetRegion">reset_region</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.resetScheduleExpressionTimezone">reset_schedule_expression_timezone</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.resetStartWindowHours">reset_start_window_hours</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_recovery_point_selection` <a name="put_recovery_point_selection" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.putRecoveryPointSelection"></a>

```python
def put_recovery_point_selection(
  value: typing.Union[IResolvable, typing.List[BackupRestoreTestingPlanRecoveryPointSelection]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.putRecoveryPointSelection.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelection">BackupRestoreTestingPlanRecoveryPointSelection</a>]]

---

##### `reset_recovery_point_selection` <a name="reset_recovery_point_selection" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.resetRecoveryPointSelection"></a>

```python
def reset_recovery_point_selection() -> None
```

##### `reset_region` <a name="reset_region" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.resetRegion"></a>

```python
def reset_region() -> None
```

##### `reset_schedule_expression_timezone` <a name="reset_schedule_expression_timezone" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.resetScheduleExpressionTimezone"></a>

```python
def reset_schedule_expression_timezone() -> None
```

##### `reset_start_window_hours` <a name="reset_start_window_hours" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.resetStartWindowHours"></a>

```python
def reset_start_window_hours() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a BackupRestoreTestingPlan resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import backup_restore_testing_plan

backupRestoreTestingPlan.BackupRestoreTestingPlan.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import backup_restore_testing_plan

backupRestoreTestingPlan.BackupRestoreTestingPlan.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import backup_restore_testing_plan

backupRestoreTestingPlan.BackupRestoreTestingPlan.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_aws import backup_restore_testing_plan

backupRestoreTestingPlan.BackupRestoreTestingPlan.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a BackupRestoreTestingPlan resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the BackupRestoreTestingPlan to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing BackupRestoreTestingPlan that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/backup_restore_testing_plan#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the BackupRestoreTestingPlan to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.property.recoveryPointSelection">recovery_point_selection</a></code> | <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionList">BackupRestoreTestingPlanRecoveryPointSelectionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.property.tagsAll">tags_all</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.property.recoveryPointSelectionInput">recovery_point_selection_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelection">BackupRestoreTestingPlanRecoveryPointSelection</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.property.scheduleExpressionInput">schedule_expression_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.property.scheduleExpressionTimezoneInput">schedule_expression_timezone_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.property.startWindowHoursInput">start_window_hours_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.property.scheduleExpression">schedule_expression</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.property.scheduleExpressionTimezone">schedule_expression_timezone</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.property.startWindowHours">start_window_hours</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `recovery_point_selection`<sup>Required</sup> <a name="recovery_point_selection" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.property.recoveryPointSelection"></a>

```python
recovery_point_selection: BackupRestoreTestingPlanRecoveryPointSelectionList
```

- *Type:* <a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionList">BackupRestoreTestingPlanRecoveryPointSelectionList</a>

---

##### `tags_all`<sup>Required</sup> <a name="tags_all" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.property.tagsAll"></a>

```python
tags_all: StringMap
```

- *Type:* cdktf.StringMap

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `recovery_point_selection_input`<sup>Optional</sup> <a name="recovery_point_selection_input" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.property.recoveryPointSelectionInput"></a>

```python
recovery_point_selection_input: typing.Union[IResolvable, typing.List[BackupRestoreTestingPlanRecoveryPointSelection]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelection">BackupRestoreTestingPlanRecoveryPointSelection</a>]]

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `schedule_expression_input`<sup>Optional</sup> <a name="schedule_expression_input" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.property.scheduleExpressionInput"></a>

```python
schedule_expression_input: str
```

- *Type:* str

---

##### `schedule_expression_timezone_input`<sup>Optional</sup> <a name="schedule_expression_timezone_input" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.property.scheduleExpressionTimezoneInput"></a>

```python
schedule_expression_timezone_input: str
```

- *Type:* str

---

##### `start_window_hours_input`<sup>Optional</sup> <a name="start_window_hours_input" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.property.startWindowHoursInput"></a>

```python
start_window_hours_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `schedule_expression`<sup>Required</sup> <a name="schedule_expression" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.property.scheduleExpression"></a>

```python
schedule_expression: str
```

- *Type:* str

---

##### `schedule_expression_timezone`<sup>Required</sup> <a name="schedule_expression_timezone" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.property.scheduleExpressionTimezone"></a>

```python
schedule_expression_timezone: str
```

- *Type:* str

---

##### `start_window_hours`<sup>Required</sup> <a name="start_window_hours" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.property.startWindowHours"></a>

```python
start_window_hours: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlan.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### BackupRestoreTestingPlanConfig <a name="BackupRestoreTestingPlanConfig" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import backup_restore_testing_plan

backupRestoreTestingPlan.BackupRestoreTestingPlanConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  schedule_expression: str,
  recovery_point_selection: typing.Union[IResolvable, typing.List[BackupRestoreTestingPlanRecoveryPointSelection]] = None,
  region: str = None,
  schedule_expression_timezone: str = None,
  start_window_hours: typing.Union[int, float] = None,
  tags: typing.Mapping[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/backup_restore_testing_plan#name BackupRestoreTestingPlan#name}. |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanConfig.property.scheduleExpression">schedule_expression</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/backup_restore_testing_plan#schedule_expression BackupRestoreTestingPlan#schedule_expression}. |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanConfig.property.recoveryPointSelection">recovery_point_selection</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelection">BackupRestoreTestingPlanRecoveryPointSelection</a>]]</code> | recovery_point_selection block. |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanConfig.property.region">region</a></code> | <code>str</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanConfig.property.scheduleExpressionTimezone">schedule_expression_timezone</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/backup_restore_testing_plan#schedule_expression_timezone BackupRestoreTestingPlan#schedule_expression_timezone}. |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanConfig.property.startWindowHours">start_window_hours</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/backup_restore_testing_plan#start_window_hours BackupRestoreTestingPlan#start_window_hours}. |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/backup_restore_testing_plan#tags BackupRestoreTestingPlan#tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/backup_restore_testing_plan#name BackupRestoreTestingPlan#name}.

---

##### `schedule_expression`<sup>Required</sup> <a name="schedule_expression" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanConfig.property.scheduleExpression"></a>

```python
schedule_expression: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/backup_restore_testing_plan#schedule_expression BackupRestoreTestingPlan#schedule_expression}.

---

##### `recovery_point_selection`<sup>Optional</sup> <a name="recovery_point_selection" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanConfig.property.recoveryPointSelection"></a>

```python
recovery_point_selection: typing.Union[IResolvable, typing.List[BackupRestoreTestingPlanRecoveryPointSelection]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelection">BackupRestoreTestingPlanRecoveryPointSelection</a>]]

recovery_point_selection block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/backup_restore_testing_plan#recovery_point_selection BackupRestoreTestingPlan#recovery_point_selection}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanConfig.property.region"></a>

```python
region: str
```

- *Type:* str

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/backup_restore_testing_plan#region BackupRestoreTestingPlan#region}

---

##### `schedule_expression_timezone`<sup>Optional</sup> <a name="schedule_expression_timezone" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanConfig.property.scheduleExpressionTimezone"></a>

```python
schedule_expression_timezone: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/backup_restore_testing_plan#schedule_expression_timezone BackupRestoreTestingPlan#schedule_expression_timezone}.

---

##### `start_window_hours`<sup>Optional</sup> <a name="start_window_hours" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanConfig.property.startWindowHours"></a>

```python
start_window_hours: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/backup_restore_testing_plan#start_window_hours BackupRestoreTestingPlan#start_window_hours}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/backup_restore_testing_plan#tags BackupRestoreTestingPlan#tags}.

---

### BackupRestoreTestingPlanRecoveryPointSelection <a name="BackupRestoreTestingPlanRecoveryPointSelection" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelection"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelection.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import backup_restore_testing_plan

backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelection(
  algorithm: str,
  include_vaults: typing.List[str],
  recovery_point_types: typing.List[str],
  exclude_vaults: typing.List[str] = None,
  selection_window_days: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelection.property.algorithm">algorithm</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/backup_restore_testing_plan#algorithm BackupRestoreTestingPlan#algorithm}. |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelection.property.includeVaults">include_vaults</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/backup_restore_testing_plan#include_vaults BackupRestoreTestingPlan#include_vaults}. |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelection.property.recoveryPointTypes">recovery_point_types</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/backup_restore_testing_plan#recovery_point_types BackupRestoreTestingPlan#recovery_point_types}. |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelection.property.excludeVaults">exclude_vaults</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/backup_restore_testing_plan#exclude_vaults BackupRestoreTestingPlan#exclude_vaults}. |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelection.property.selectionWindowDays">selection_window_days</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/backup_restore_testing_plan#selection_window_days BackupRestoreTestingPlan#selection_window_days}. |

---

##### `algorithm`<sup>Required</sup> <a name="algorithm" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelection.property.algorithm"></a>

```python
algorithm: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/backup_restore_testing_plan#algorithm BackupRestoreTestingPlan#algorithm}.

---

##### `include_vaults`<sup>Required</sup> <a name="include_vaults" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelection.property.includeVaults"></a>

```python
include_vaults: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/backup_restore_testing_plan#include_vaults BackupRestoreTestingPlan#include_vaults}.

---

##### `recovery_point_types`<sup>Required</sup> <a name="recovery_point_types" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelection.property.recoveryPointTypes"></a>

```python
recovery_point_types: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/backup_restore_testing_plan#recovery_point_types BackupRestoreTestingPlan#recovery_point_types}.

---

##### `exclude_vaults`<sup>Optional</sup> <a name="exclude_vaults" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelection.property.excludeVaults"></a>

```python
exclude_vaults: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/backup_restore_testing_plan#exclude_vaults BackupRestoreTestingPlan#exclude_vaults}.

---

##### `selection_window_days`<sup>Optional</sup> <a name="selection_window_days" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelection.property.selectionWindowDays"></a>

```python
selection_window_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.0.0/docs/resources/backup_restore_testing_plan#selection_window_days BackupRestoreTestingPlan#selection_window_days}.

---

## Classes <a name="Classes" id="Classes"></a>

### BackupRestoreTestingPlanRecoveryPointSelectionList <a name="BackupRestoreTestingPlanRecoveryPointSelectionList" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import backup_restore_testing_plan

backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> BackupRestoreTestingPlanRecoveryPointSelectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelection">BackupRestoreTestingPlanRecoveryPointSelection</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[BackupRestoreTestingPlanRecoveryPointSelection]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelection">BackupRestoreTestingPlanRecoveryPointSelection</a>]]

---


### BackupRestoreTestingPlanRecoveryPointSelectionOutputReference <a name="BackupRestoreTestingPlanRecoveryPointSelectionOutputReference" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import backup_restore_testing_plan

backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionOutputReference.resetExcludeVaults">reset_exclude_vaults</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionOutputReference.resetSelectionWindowDays">reset_selection_window_days</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_exclude_vaults` <a name="reset_exclude_vaults" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionOutputReference.resetExcludeVaults"></a>

```python
def reset_exclude_vaults() -> None
```

##### `reset_selection_window_days` <a name="reset_selection_window_days" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionOutputReference.resetSelectionWindowDays"></a>

```python
def reset_selection_window_days() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionOutputReference.property.algorithmInput">algorithm_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionOutputReference.property.excludeVaultsInput">exclude_vaults_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionOutputReference.property.includeVaultsInput">include_vaults_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionOutputReference.property.recoveryPointTypesInput">recovery_point_types_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionOutputReference.property.selectionWindowDaysInput">selection_window_days_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionOutputReference.property.algorithm">algorithm</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionOutputReference.property.excludeVaults">exclude_vaults</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionOutputReference.property.includeVaults">include_vaults</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionOutputReference.property.recoveryPointTypes">recovery_point_types</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionOutputReference.property.selectionWindowDays">selection_window_days</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelection">BackupRestoreTestingPlanRecoveryPointSelection</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `algorithm_input`<sup>Optional</sup> <a name="algorithm_input" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionOutputReference.property.algorithmInput"></a>

```python
algorithm_input: str
```

- *Type:* str

---

##### `exclude_vaults_input`<sup>Optional</sup> <a name="exclude_vaults_input" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionOutputReference.property.excludeVaultsInput"></a>

```python
exclude_vaults_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `include_vaults_input`<sup>Optional</sup> <a name="include_vaults_input" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionOutputReference.property.includeVaultsInput"></a>

```python
include_vaults_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `recovery_point_types_input`<sup>Optional</sup> <a name="recovery_point_types_input" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionOutputReference.property.recoveryPointTypesInput"></a>

```python
recovery_point_types_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `selection_window_days_input`<sup>Optional</sup> <a name="selection_window_days_input" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionOutputReference.property.selectionWindowDaysInput"></a>

```python
selection_window_days_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `algorithm`<sup>Required</sup> <a name="algorithm" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionOutputReference.property.algorithm"></a>

```python
algorithm: str
```

- *Type:* str

---

##### `exclude_vaults`<sup>Required</sup> <a name="exclude_vaults" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionOutputReference.property.excludeVaults"></a>

```python
exclude_vaults: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `include_vaults`<sup>Required</sup> <a name="include_vaults" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionOutputReference.property.includeVaults"></a>

```python
include_vaults: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `recovery_point_types`<sup>Required</sup> <a name="recovery_point_types" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionOutputReference.property.recoveryPointTypes"></a>

```python
recovery_point_types: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `selection_window_days`<sup>Required</sup> <a name="selection_window_days" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionOutputReference.property.selectionWindowDays"></a>

```python
selection_window_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelectionOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, BackupRestoreTestingPlanRecoveryPointSelection]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.backupRestoreTestingPlan.BackupRestoreTestingPlanRecoveryPointSelection">BackupRestoreTestingPlanRecoveryPointSelection</a>]

---



