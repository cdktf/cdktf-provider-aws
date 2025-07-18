# `backupLogicallyAirGappedVault` Submodule <a name="`backupLogicallyAirGappedVault` Submodule" id="@cdktf/provider-aws.backupLogicallyAirGappedVault"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BackupLogicallyAirGappedVault <a name="BackupLogicallyAirGappedVault" id="@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/backup_logically_air_gapped_vault aws_backup_logically_air_gapped_vault}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import backup_logically_air_gapped_vault

backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  max_retention_days: typing.Union[int, float],
  min_retention_days: typing.Union[int, float],
  name: str,
  region: str = None,
  tags: typing.Mapping[str] = None,
  timeouts: BackupLogicallyAirGappedVaultTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.Initializer.parameter.maxRetentionDays">max_retention_days</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/backup_logically_air_gapped_vault#max_retention_days BackupLogicallyAirGappedVault#max_retention_days}. |
| <code><a href="#@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.Initializer.parameter.minRetentionDays">min_retention_days</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/backup_logically_air_gapped_vault#min_retention_days BackupLogicallyAirGappedVault#min_retention_days}. |
| <code><a href="#@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/backup_logically_air_gapped_vault#name BackupLogicallyAirGappedVault#name}. |
| <code><a href="#@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.Initializer.parameter.region">region</a></code> | <code>str</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/backup_logically_air_gapped_vault#tags BackupLogicallyAirGappedVault#tags}. |
| <code><a href="#@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVaultTimeouts">BackupLogicallyAirGappedVaultTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `max_retention_days`<sup>Required</sup> <a name="max_retention_days" id="@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.Initializer.parameter.maxRetentionDays"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/backup_logically_air_gapped_vault#max_retention_days BackupLogicallyAirGappedVault#max_retention_days}.

---

##### `min_retention_days`<sup>Required</sup> <a name="min_retention_days" id="@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.Initializer.parameter.minRetentionDays"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/backup_logically_air_gapped_vault#min_retention_days BackupLogicallyAirGappedVault#min_retention_days}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/backup_logically_air_gapped_vault#name BackupLogicallyAirGappedVault#name}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.Initializer.parameter.region"></a>

- *Type:* str

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/backup_logically_air_gapped_vault#region BackupLogicallyAirGappedVault#region}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/backup_logically_air_gapped_vault#tags BackupLogicallyAirGappedVault#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVaultTimeouts">BackupLogicallyAirGappedVaultTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/backup_logically_air_gapped_vault#timeouts BackupLogicallyAirGappedVault#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.resetRegion">reset_region</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.putTimeouts.parameter.create"></a>

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/backup_logically_air_gapped_vault#create BackupLogicallyAirGappedVault#create}

---

##### `reset_region` <a name="reset_region" id="@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.resetRegion"></a>

```python
def reset_region() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a BackupLogicallyAirGappedVault resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import backup_logically_air_gapped_vault

backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import backup_logically_air_gapped_vault

backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import backup_logically_air_gapped_vault

backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_aws import backup_logically_air_gapped_vault

backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a BackupLogicallyAirGappedVault resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the BackupLogicallyAirGappedVault to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing BackupLogicallyAirGappedVault that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/backup_logically_air_gapped_vault#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the BackupLogicallyAirGappedVault to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.property.tagsAll">tags_all</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVaultTimeoutsOutputReference">BackupLogicallyAirGappedVaultTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.property.maxRetentionDaysInput">max_retention_days_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.property.minRetentionDaysInput">min_retention_days_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVaultTimeouts">BackupLogicallyAirGappedVaultTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.property.maxRetentionDays">max_retention_days</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.property.minRetentionDays">min_retention_days</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `tags_all`<sup>Required</sup> <a name="tags_all" id="@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.property.tagsAll"></a>

```python
tags_all: StringMap
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.property.timeouts"></a>

```python
timeouts: BackupLogicallyAirGappedVaultTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVaultTimeoutsOutputReference">BackupLogicallyAirGappedVaultTimeoutsOutputReference</a>

---

##### `max_retention_days_input`<sup>Optional</sup> <a name="max_retention_days_input" id="@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.property.maxRetentionDaysInput"></a>

```python
max_retention_days_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_retention_days_input`<sup>Optional</sup> <a name="min_retention_days_input" id="@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.property.minRetentionDaysInput"></a>

```python
min_retention_days_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, BackupLogicallyAirGappedVaultTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVaultTimeouts">BackupLogicallyAirGappedVaultTimeouts</a>]

---

##### `max_retention_days`<sup>Required</sup> <a name="max_retention_days" id="@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.property.maxRetentionDays"></a>

```python
max_retention_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_retention_days`<sup>Required</sup> <a name="min_retention_days" id="@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.property.minRetentionDays"></a>

```python
min_retention_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVault.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### BackupLogicallyAirGappedVaultConfig <a name="BackupLogicallyAirGappedVaultConfig" id="@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVaultConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVaultConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import backup_logically_air_gapped_vault

backupLogicallyAirGappedVault.BackupLogicallyAirGappedVaultConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  max_retention_days: typing.Union[int, float],
  min_retention_days: typing.Union[int, float],
  name: str,
  region: str = None,
  tags: typing.Mapping[str] = None,
  timeouts: BackupLogicallyAirGappedVaultTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVaultConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVaultConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVaultConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVaultConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVaultConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVaultConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVaultConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVaultConfig.property.maxRetentionDays">max_retention_days</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/backup_logically_air_gapped_vault#max_retention_days BackupLogicallyAirGappedVault#max_retention_days}. |
| <code><a href="#@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVaultConfig.property.minRetentionDays">min_retention_days</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/backup_logically_air_gapped_vault#min_retention_days BackupLogicallyAirGappedVault#min_retention_days}. |
| <code><a href="#@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVaultConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/backup_logically_air_gapped_vault#name BackupLogicallyAirGappedVault#name}. |
| <code><a href="#@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVaultConfig.property.region">region</a></code> | <code>str</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVaultConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/backup_logically_air_gapped_vault#tags BackupLogicallyAirGappedVault#tags}. |
| <code><a href="#@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVaultConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVaultTimeouts">BackupLogicallyAirGappedVaultTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVaultConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVaultConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVaultConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVaultConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVaultConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVaultConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVaultConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `max_retention_days`<sup>Required</sup> <a name="max_retention_days" id="@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVaultConfig.property.maxRetentionDays"></a>

```python
max_retention_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/backup_logically_air_gapped_vault#max_retention_days BackupLogicallyAirGappedVault#max_retention_days}.

---

##### `min_retention_days`<sup>Required</sup> <a name="min_retention_days" id="@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVaultConfig.property.minRetentionDays"></a>

```python
min_retention_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/backup_logically_air_gapped_vault#min_retention_days BackupLogicallyAirGappedVault#min_retention_days}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVaultConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/backup_logically_air_gapped_vault#name BackupLogicallyAirGappedVault#name}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVaultConfig.property.region"></a>

```python
region: str
```

- *Type:* str

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/backup_logically_air_gapped_vault#region BackupLogicallyAirGappedVault#region}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVaultConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/backup_logically_air_gapped_vault#tags BackupLogicallyAirGappedVault#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVaultConfig.property.timeouts"></a>

```python
timeouts: BackupLogicallyAirGappedVaultTimeouts
```

- *Type:* <a href="#@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVaultTimeouts">BackupLogicallyAirGappedVaultTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/backup_logically_air_gapped_vault#timeouts BackupLogicallyAirGappedVault#timeouts}

---

### BackupLogicallyAirGappedVaultTimeouts <a name="BackupLogicallyAirGappedVaultTimeouts" id="@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVaultTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVaultTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import backup_logically_air_gapped_vault

backupLogicallyAirGappedVault.BackupLogicallyAirGappedVaultTimeouts(
  create: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVaultTimeouts.property.create">create</a></code> | <code>str</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVaultTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/backup_logically_air_gapped_vault#create BackupLogicallyAirGappedVault#create}

---

## Classes <a name="Classes" id="Classes"></a>

### BackupLogicallyAirGappedVaultTimeoutsOutputReference <a name="BackupLogicallyAirGappedVaultTimeoutsOutputReference" id="@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVaultTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVaultTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import backup_logically_air_gapped_vault

backupLogicallyAirGappedVault.BackupLogicallyAirGappedVaultTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVaultTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVaultTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVaultTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVaultTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVaultTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVaultTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVaultTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVaultTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVaultTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVaultTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVaultTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVaultTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVaultTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVaultTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVaultTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVaultTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVaultTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVaultTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVaultTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVaultTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVaultTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVaultTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVaultTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVaultTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVaultTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVaultTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVaultTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVaultTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVaultTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVaultTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVaultTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVaultTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVaultTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVaultTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVaultTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVaultTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVaultTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVaultTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVaultTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVaultTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVaultTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVaultTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVaultTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVaultTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVaultTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVaultTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVaultTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVaultTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVaultTimeouts">BackupLogicallyAirGappedVaultTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVaultTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVaultTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVaultTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVaultTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVaultTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, BackupLogicallyAirGappedVaultTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.backupLogicallyAirGappedVault.BackupLogicallyAirGappedVaultTimeouts">BackupLogicallyAirGappedVaultTimeouts</a>]

---



