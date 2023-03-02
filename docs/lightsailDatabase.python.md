# `lightsailDatabase` Submodule <a name="`lightsailDatabase` Submodule" id="@cdktf/provider-aws.lightsailDatabase"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LightsailDatabase <a name="LightsailDatabase" id="@cdktf/provider-aws.lightsailDatabase.LightsailDatabase"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/lightsail_database aws_lightsail_database}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.lightsailDatabase.LightsailDatabase.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import lightsail_database

lightsailDatabase.LightsailDatabase(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  blueprint_id: str,
  bundle_id: str,
  master_database_name: str,
  master_password: str,
  master_username: str,
  relational_database_name: str,
  apply_immediately: typing.Union[bool, IResolvable] = None,
  availability_zone: str = None,
  backup_retention_enabled: typing.Union[bool, IResolvable] = None,
  final_snapshot_name: str = None,
  id: str = None,
  preferred_backup_window: str = None,
  preferred_maintenance_window: str = None,
  publicly_accessible: typing.Union[bool, IResolvable] = None,
  skip_final_snapshot: typing.Union[bool, IResolvable] = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lightsailDatabase.LightsailDatabase.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.lightsailDatabase.LightsailDatabase.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.lightsailDatabase.LightsailDatabase.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDatabase.LightsailDatabase.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDatabase.LightsailDatabase.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDatabase.LightsailDatabase.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDatabase.LightsailDatabase.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDatabase.LightsailDatabase.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDatabase.LightsailDatabase.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDatabase.LightsailDatabase.Initializer.parameter.blueprintId">blueprint_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_database#blueprint_id LightsailDatabase#blueprint_id}. |
| <code><a href="#@cdktf/provider-aws.lightsailDatabase.LightsailDatabase.Initializer.parameter.bundleId">bundle_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_database#bundle_id LightsailDatabase#bundle_id}. |
| <code><a href="#@cdktf/provider-aws.lightsailDatabase.LightsailDatabase.Initializer.parameter.masterDatabaseName">master_database_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_database#master_database_name LightsailDatabase#master_database_name}. |
| <code><a href="#@cdktf/provider-aws.lightsailDatabase.LightsailDatabase.Initializer.parameter.masterPassword">master_password</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_database#master_password LightsailDatabase#master_password}. |
| <code><a href="#@cdktf/provider-aws.lightsailDatabase.LightsailDatabase.Initializer.parameter.masterUsername">master_username</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_database#master_username LightsailDatabase#master_username}. |
| <code><a href="#@cdktf/provider-aws.lightsailDatabase.LightsailDatabase.Initializer.parameter.relationalDatabaseName">relational_database_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_database#relational_database_name LightsailDatabase#relational_database_name}. |
| <code><a href="#@cdktf/provider-aws.lightsailDatabase.LightsailDatabase.Initializer.parameter.applyImmediately">apply_immediately</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_database#apply_immediately LightsailDatabase#apply_immediately}. |
| <code><a href="#@cdktf/provider-aws.lightsailDatabase.LightsailDatabase.Initializer.parameter.availabilityZone">availability_zone</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_database#availability_zone LightsailDatabase#availability_zone}. |
| <code><a href="#@cdktf/provider-aws.lightsailDatabase.LightsailDatabase.Initializer.parameter.backupRetentionEnabled">backup_retention_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_database#backup_retention_enabled LightsailDatabase#backup_retention_enabled}. |
| <code><a href="#@cdktf/provider-aws.lightsailDatabase.LightsailDatabase.Initializer.parameter.finalSnapshotName">final_snapshot_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_database#final_snapshot_name LightsailDatabase#final_snapshot_name}. |
| <code><a href="#@cdktf/provider-aws.lightsailDatabase.LightsailDatabase.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_database#id LightsailDatabase#id}. |
| <code><a href="#@cdktf/provider-aws.lightsailDatabase.LightsailDatabase.Initializer.parameter.preferredBackupWindow">preferred_backup_window</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_database#preferred_backup_window LightsailDatabase#preferred_backup_window}. |
| <code><a href="#@cdktf/provider-aws.lightsailDatabase.LightsailDatabase.Initializer.parameter.preferredMaintenanceWindow">preferred_maintenance_window</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_database#preferred_maintenance_window LightsailDatabase#preferred_maintenance_window}. |
| <code><a href="#@cdktf/provider-aws.lightsailDatabase.LightsailDatabase.Initializer.parameter.publiclyAccessible">publicly_accessible</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_database#publicly_accessible LightsailDatabase#publicly_accessible}. |
| <code><a href="#@cdktf/provider-aws.lightsailDatabase.LightsailDatabase.Initializer.parameter.skipFinalSnapshot">skip_final_snapshot</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_database#skip_final_snapshot LightsailDatabase#skip_final_snapshot}. |
| <code><a href="#@cdktf/provider-aws.lightsailDatabase.LightsailDatabase.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_database#tags LightsailDatabase#tags}. |
| <code><a href="#@cdktf/provider-aws.lightsailDatabase.LightsailDatabase.Initializer.parameter.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_database#tags_all LightsailDatabase#tags_all}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.lightsailDatabase.LightsailDatabase.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.lightsailDatabase.LightsailDatabase.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.lightsailDatabase.LightsailDatabase.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.lightsailDatabase.LightsailDatabase.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.lightsailDatabase.LightsailDatabase.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.lightsailDatabase.LightsailDatabase.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.lightsailDatabase.LightsailDatabase.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.lightsailDatabase.LightsailDatabase.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.lightsailDatabase.LightsailDatabase.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `blueprint_id`<sup>Required</sup> <a name="blueprint_id" id="@cdktf/provider-aws.lightsailDatabase.LightsailDatabase.Initializer.parameter.blueprintId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_database#blueprint_id LightsailDatabase#blueprint_id}.

---

##### `bundle_id`<sup>Required</sup> <a name="bundle_id" id="@cdktf/provider-aws.lightsailDatabase.LightsailDatabase.Initializer.parameter.bundleId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_database#bundle_id LightsailDatabase#bundle_id}.

---

##### `master_database_name`<sup>Required</sup> <a name="master_database_name" id="@cdktf/provider-aws.lightsailDatabase.LightsailDatabase.Initializer.parameter.masterDatabaseName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_database#master_database_name LightsailDatabase#master_database_name}.

---

##### `master_password`<sup>Required</sup> <a name="master_password" id="@cdktf/provider-aws.lightsailDatabase.LightsailDatabase.Initializer.parameter.masterPassword"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_database#master_password LightsailDatabase#master_password}.

---

##### `master_username`<sup>Required</sup> <a name="master_username" id="@cdktf/provider-aws.lightsailDatabase.LightsailDatabase.Initializer.parameter.masterUsername"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_database#master_username LightsailDatabase#master_username}.

---

##### `relational_database_name`<sup>Required</sup> <a name="relational_database_name" id="@cdktf/provider-aws.lightsailDatabase.LightsailDatabase.Initializer.parameter.relationalDatabaseName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_database#relational_database_name LightsailDatabase#relational_database_name}.

---

##### `apply_immediately`<sup>Optional</sup> <a name="apply_immediately" id="@cdktf/provider-aws.lightsailDatabase.LightsailDatabase.Initializer.parameter.applyImmediately"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_database#apply_immediately LightsailDatabase#apply_immediately}.

---

##### `availability_zone`<sup>Optional</sup> <a name="availability_zone" id="@cdktf/provider-aws.lightsailDatabase.LightsailDatabase.Initializer.parameter.availabilityZone"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_database#availability_zone LightsailDatabase#availability_zone}.

---

##### `backup_retention_enabled`<sup>Optional</sup> <a name="backup_retention_enabled" id="@cdktf/provider-aws.lightsailDatabase.LightsailDatabase.Initializer.parameter.backupRetentionEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_database#backup_retention_enabled LightsailDatabase#backup_retention_enabled}.

---

##### `final_snapshot_name`<sup>Optional</sup> <a name="final_snapshot_name" id="@cdktf/provider-aws.lightsailDatabase.LightsailDatabase.Initializer.parameter.finalSnapshotName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_database#final_snapshot_name LightsailDatabase#final_snapshot_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.lightsailDatabase.LightsailDatabase.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_database#id LightsailDatabase#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `preferred_backup_window`<sup>Optional</sup> <a name="preferred_backup_window" id="@cdktf/provider-aws.lightsailDatabase.LightsailDatabase.Initializer.parameter.preferredBackupWindow"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_database#preferred_backup_window LightsailDatabase#preferred_backup_window}.

---

##### `preferred_maintenance_window`<sup>Optional</sup> <a name="preferred_maintenance_window" id="@cdktf/provider-aws.lightsailDatabase.LightsailDatabase.Initializer.parameter.preferredMaintenanceWindow"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_database#preferred_maintenance_window LightsailDatabase#preferred_maintenance_window}.

---

##### `publicly_accessible`<sup>Optional</sup> <a name="publicly_accessible" id="@cdktf/provider-aws.lightsailDatabase.LightsailDatabase.Initializer.parameter.publiclyAccessible"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_database#publicly_accessible LightsailDatabase#publicly_accessible}.

---

##### `skip_final_snapshot`<sup>Optional</sup> <a name="skip_final_snapshot" id="@cdktf/provider-aws.lightsailDatabase.LightsailDatabase.Initializer.parameter.skipFinalSnapshot"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_database#skip_final_snapshot LightsailDatabase#skip_final_snapshot}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.lightsailDatabase.LightsailDatabase.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_database#tags LightsailDatabase#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.lightsailDatabase.LightsailDatabase.Initializer.parameter.tagsAll"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_database#tags_all LightsailDatabase#tags_all}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lightsailDatabase.LightsailDatabase.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.lightsailDatabase.LightsailDatabase.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDatabase.LightsailDatabase.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.lightsailDatabase.LightsailDatabase.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.lightsailDatabase.LightsailDatabase.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDatabase.LightsailDatabase.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.lightsailDatabase.LightsailDatabase.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDatabase.LightsailDatabase.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDatabase.LightsailDatabase.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDatabase.LightsailDatabase.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDatabase.LightsailDatabase.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDatabase.LightsailDatabase.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDatabase.LightsailDatabase.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDatabase.LightsailDatabase.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDatabase.LightsailDatabase.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDatabase.LightsailDatabase.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDatabase.LightsailDatabase.resetApplyImmediately">reset_apply_immediately</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDatabase.LightsailDatabase.resetAvailabilityZone">reset_availability_zone</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDatabase.LightsailDatabase.resetBackupRetentionEnabled">reset_backup_retention_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDatabase.LightsailDatabase.resetFinalSnapshotName">reset_final_snapshot_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDatabase.LightsailDatabase.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDatabase.LightsailDatabase.resetPreferredBackupWindow">reset_preferred_backup_window</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDatabase.LightsailDatabase.resetPreferredMaintenanceWindow">reset_preferred_maintenance_window</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDatabase.LightsailDatabase.resetPubliclyAccessible">reset_publicly_accessible</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDatabase.LightsailDatabase.resetSkipFinalSnapshot">reset_skip_final_snapshot</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDatabase.LightsailDatabase.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDatabase.LightsailDatabase.resetTagsAll">reset_tags_all</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.lightsailDatabase.LightsailDatabase.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.lightsailDatabase.LightsailDatabase.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.lightsailDatabase.LightsailDatabase.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.lightsailDatabase.LightsailDatabase.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.lightsailDatabase.LightsailDatabase.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.lightsailDatabase.LightsailDatabase.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.lightsailDatabase.LightsailDatabase.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.lightsailDatabase.LightsailDatabase.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.lightsailDatabase.LightsailDatabase.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.lightsailDatabase.LightsailDatabase.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lightsailDatabase.LightsailDatabase.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.lightsailDatabase.LightsailDatabase.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lightsailDatabase.LightsailDatabase.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.lightsailDatabase.LightsailDatabase.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lightsailDatabase.LightsailDatabase.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.lightsailDatabase.LightsailDatabase.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lightsailDatabase.LightsailDatabase.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.lightsailDatabase.LightsailDatabase.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lightsailDatabase.LightsailDatabase.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.lightsailDatabase.LightsailDatabase.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lightsailDatabase.LightsailDatabase.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.lightsailDatabase.LightsailDatabase.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lightsailDatabase.LightsailDatabase.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.lightsailDatabase.LightsailDatabase.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lightsailDatabase.LightsailDatabase.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.lightsailDatabase.LightsailDatabase.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lightsailDatabase.LightsailDatabase.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.lightsailDatabase.LightsailDatabase.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.lightsailDatabase.LightsailDatabase.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_apply_immediately` <a name="reset_apply_immediately" id="@cdktf/provider-aws.lightsailDatabase.LightsailDatabase.resetApplyImmediately"></a>

```python
def reset_apply_immediately() -> None
```

##### `reset_availability_zone` <a name="reset_availability_zone" id="@cdktf/provider-aws.lightsailDatabase.LightsailDatabase.resetAvailabilityZone"></a>

```python
def reset_availability_zone() -> None
```

##### `reset_backup_retention_enabled` <a name="reset_backup_retention_enabled" id="@cdktf/provider-aws.lightsailDatabase.LightsailDatabase.resetBackupRetentionEnabled"></a>

```python
def reset_backup_retention_enabled() -> None
```

##### `reset_final_snapshot_name` <a name="reset_final_snapshot_name" id="@cdktf/provider-aws.lightsailDatabase.LightsailDatabase.resetFinalSnapshotName"></a>

```python
def reset_final_snapshot_name() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.lightsailDatabase.LightsailDatabase.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_preferred_backup_window` <a name="reset_preferred_backup_window" id="@cdktf/provider-aws.lightsailDatabase.LightsailDatabase.resetPreferredBackupWindow"></a>

```python
def reset_preferred_backup_window() -> None
```

##### `reset_preferred_maintenance_window` <a name="reset_preferred_maintenance_window" id="@cdktf/provider-aws.lightsailDatabase.LightsailDatabase.resetPreferredMaintenanceWindow"></a>

```python
def reset_preferred_maintenance_window() -> None
```

##### `reset_publicly_accessible` <a name="reset_publicly_accessible" id="@cdktf/provider-aws.lightsailDatabase.LightsailDatabase.resetPubliclyAccessible"></a>

```python
def reset_publicly_accessible() -> None
```

##### `reset_skip_final_snapshot` <a name="reset_skip_final_snapshot" id="@cdktf/provider-aws.lightsailDatabase.LightsailDatabase.resetSkipFinalSnapshot"></a>

```python
def reset_skip_final_snapshot() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-aws.lightsailDatabase.LightsailDatabase.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_tags_all` <a name="reset_tags_all" id="@cdktf/provider-aws.lightsailDatabase.LightsailDatabase.resetTagsAll"></a>

```python
def reset_tags_all() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.lightsailDatabase.LightsailDatabase.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.lightsailDatabase.LightsailDatabase.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDatabase.LightsailDatabase.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.lightsailDatabase.LightsailDatabase.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import lightsail_database

lightsailDatabase.LightsailDatabase.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.lightsailDatabase.LightsailDatabase.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.lightsailDatabase.LightsailDatabase.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import lightsail_database

lightsailDatabase.LightsailDatabase.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.lightsailDatabase.LightsailDatabase.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.lightsailDatabase.LightsailDatabase.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import lightsail_database

lightsailDatabase.LightsailDatabase.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.lightsailDatabase.LightsailDatabase.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lightsailDatabase.LightsailDatabase.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.lightsailDatabase.LightsailDatabase.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDatabase.LightsailDatabase.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDatabase.LightsailDatabase.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDatabase.LightsailDatabase.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDatabase.LightsailDatabase.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDatabase.LightsailDatabase.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDatabase.LightsailDatabase.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDatabase.LightsailDatabase.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDatabase.LightsailDatabase.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDatabase.LightsailDatabase.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDatabase.LightsailDatabase.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDatabase.LightsailDatabase.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDatabase.LightsailDatabase.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDatabase.LightsailDatabase.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDatabase.LightsailDatabase.property.caCertificateIdentifier">ca_certificate_identifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDatabase.LightsailDatabase.property.cpuCount">cpu_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDatabase.LightsailDatabase.property.createdAt">created_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDatabase.LightsailDatabase.property.diskSize">disk_size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDatabase.LightsailDatabase.property.engine">engine</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDatabase.LightsailDatabase.property.engineVersion">engine_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDatabase.LightsailDatabase.property.masterEndpointAddress">master_endpoint_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDatabase.LightsailDatabase.property.masterEndpointPort">master_endpoint_port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDatabase.LightsailDatabase.property.ramSize">ram_size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDatabase.LightsailDatabase.property.secondaryAvailabilityZone">secondary_availability_zone</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDatabase.LightsailDatabase.property.supportCode">support_code</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDatabase.LightsailDatabase.property.applyImmediatelyInput">apply_immediately_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDatabase.LightsailDatabase.property.availabilityZoneInput">availability_zone_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDatabase.LightsailDatabase.property.backupRetentionEnabledInput">backup_retention_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDatabase.LightsailDatabase.property.blueprintIdInput">blueprint_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDatabase.LightsailDatabase.property.bundleIdInput">bundle_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDatabase.LightsailDatabase.property.finalSnapshotNameInput">final_snapshot_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDatabase.LightsailDatabase.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDatabase.LightsailDatabase.property.masterDatabaseNameInput">master_database_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDatabase.LightsailDatabase.property.masterPasswordInput">master_password_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDatabase.LightsailDatabase.property.masterUsernameInput">master_username_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDatabase.LightsailDatabase.property.preferredBackupWindowInput">preferred_backup_window_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDatabase.LightsailDatabase.property.preferredMaintenanceWindowInput">preferred_maintenance_window_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDatabase.LightsailDatabase.property.publiclyAccessibleInput">publicly_accessible_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDatabase.LightsailDatabase.property.relationalDatabaseNameInput">relational_database_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDatabase.LightsailDatabase.property.skipFinalSnapshotInput">skip_final_snapshot_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDatabase.LightsailDatabase.property.tagsAllInput">tags_all_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDatabase.LightsailDatabase.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDatabase.LightsailDatabase.property.applyImmediately">apply_immediately</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDatabase.LightsailDatabase.property.availabilityZone">availability_zone</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDatabase.LightsailDatabase.property.backupRetentionEnabled">backup_retention_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDatabase.LightsailDatabase.property.blueprintId">blueprint_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDatabase.LightsailDatabase.property.bundleId">bundle_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDatabase.LightsailDatabase.property.finalSnapshotName">final_snapshot_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDatabase.LightsailDatabase.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDatabase.LightsailDatabase.property.masterDatabaseName">master_database_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDatabase.LightsailDatabase.property.masterPassword">master_password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDatabase.LightsailDatabase.property.masterUsername">master_username</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDatabase.LightsailDatabase.property.preferredBackupWindow">preferred_backup_window</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDatabase.LightsailDatabase.property.preferredMaintenanceWindow">preferred_maintenance_window</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDatabase.LightsailDatabase.property.publiclyAccessible">publicly_accessible</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDatabase.LightsailDatabase.property.relationalDatabaseName">relational_database_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDatabase.LightsailDatabase.property.skipFinalSnapshot">skip_final_snapshot</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDatabase.LightsailDatabase.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDatabase.LightsailDatabase.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.lightsailDatabase.LightsailDatabase.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.lightsailDatabase.LightsailDatabase.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.lightsailDatabase.LightsailDatabase.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.lightsailDatabase.LightsailDatabase.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.lightsailDatabase.LightsailDatabase.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.lightsailDatabase.LightsailDatabase.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.lightsailDatabase.LightsailDatabase.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.lightsailDatabase.LightsailDatabase.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.lightsailDatabase.LightsailDatabase.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.lightsailDatabase.LightsailDatabase.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.lightsailDatabase.LightsailDatabase.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.lightsailDatabase.LightsailDatabase.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.lightsailDatabase.LightsailDatabase.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.lightsailDatabase.LightsailDatabase.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.lightsailDatabase.LightsailDatabase.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `ca_certificate_identifier`<sup>Required</sup> <a name="ca_certificate_identifier" id="@cdktf/provider-aws.lightsailDatabase.LightsailDatabase.property.caCertificateIdentifier"></a>

```python
ca_certificate_identifier: str
```

- *Type:* str

---

##### `cpu_count`<sup>Required</sup> <a name="cpu_count" id="@cdktf/provider-aws.lightsailDatabase.LightsailDatabase.property.cpuCount"></a>

```python
cpu_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="@cdktf/provider-aws.lightsailDatabase.LightsailDatabase.property.createdAt"></a>

```python
created_at: str
```

- *Type:* str

---

##### `disk_size`<sup>Required</sup> <a name="disk_size" id="@cdktf/provider-aws.lightsailDatabase.LightsailDatabase.property.diskSize"></a>

```python
disk_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `engine`<sup>Required</sup> <a name="engine" id="@cdktf/provider-aws.lightsailDatabase.LightsailDatabase.property.engine"></a>

```python
engine: str
```

- *Type:* str

---

##### `engine_version`<sup>Required</sup> <a name="engine_version" id="@cdktf/provider-aws.lightsailDatabase.LightsailDatabase.property.engineVersion"></a>

```python
engine_version: str
```

- *Type:* str

---

##### `master_endpoint_address`<sup>Required</sup> <a name="master_endpoint_address" id="@cdktf/provider-aws.lightsailDatabase.LightsailDatabase.property.masterEndpointAddress"></a>

```python
master_endpoint_address: str
```

- *Type:* str

---

##### `master_endpoint_port`<sup>Required</sup> <a name="master_endpoint_port" id="@cdktf/provider-aws.lightsailDatabase.LightsailDatabase.property.masterEndpointPort"></a>

```python
master_endpoint_port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ram_size`<sup>Required</sup> <a name="ram_size" id="@cdktf/provider-aws.lightsailDatabase.LightsailDatabase.property.ramSize"></a>

```python
ram_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `secondary_availability_zone`<sup>Required</sup> <a name="secondary_availability_zone" id="@cdktf/provider-aws.lightsailDatabase.LightsailDatabase.property.secondaryAvailabilityZone"></a>

```python
secondary_availability_zone: str
```

- *Type:* str

---

##### `support_code`<sup>Required</sup> <a name="support_code" id="@cdktf/provider-aws.lightsailDatabase.LightsailDatabase.property.supportCode"></a>

```python
support_code: str
```

- *Type:* str

---

##### `apply_immediately_input`<sup>Optional</sup> <a name="apply_immediately_input" id="@cdktf/provider-aws.lightsailDatabase.LightsailDatabase.property.applyImmediatelyInput"></a>

```python
apply_immediately_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `availability_zone_input`<sup>Optional</sup> <a name="availability_zone_input" id="@cdktf/provider-aws.lightsailDatabase.LightsailDatabase.property.availabilityZoneInput"></a>

```python
availability_zone_input: str
```

- *Type:* str

---

##### `backup_retention_enabled_input`<sup>Optional</sup> <a name="backup_retention_enabled_input" id="@cdktf/provider-aws.lightsailDatabase.LightsailDatabase.property.backupRetentionEnabledInput"></a>

```python
backup_retention_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `blueprint_id_input`<sup>Optional</sup> <a name="blueprint_id_input" id="@cdktf/provider-aws.lightsailDatabase.LightsailDatabase.property.blueprintIdInput"></a>

```python
blueprint_id_input: str
```

- *Type:* str

---

##### `bundle_id_input`<sup>Optional</sup> <a name="bundle_id_input" id="@cdktf/provider-aws.lightsailDatabase.LightsailDatabase.property.bundleIdInput"></a>

```python
bundle_id_input: str
```

- *Type:* str

---

##### `final_snapshot_name_input`<sup>Optional</sup> <a name="final_snapshot_name_input" id="@cdktf/provider-aws.lightsailDatabase.LightsailDatabase.property.finalSnapshotNameInput"></a>

```python
final_snapshot_name_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.lightsailDatabase.LightsailDatabase.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `master_database_name_input`<sup>Optional</sup> <a name="master_database_name_input" id="@cdktf/provider-aws.lightsailDatabase.LightsailDatabase.property.masterDatabaseNameInput"></a>

```python
master_database_name_input: str
```

- *Type:* str

---

##### `master_password_input`<sup>Optional</sup> <a name="master_password_input" id="@cdktf/provider-aws.lightsailDatabase.LightsailDatabase.property.masterPasswordInput"></a>

```python
master_password_input: str
```

- *Type:* str

---

##### `master_username_input`<sup>Optional</sup> <a name="master_username_input" id="@cdktf/provider-aws.lightsailDatabase.LightsailDatabase.property.masterUsernameInput"></a>

```python
master_username_input: str
```

- *Type:* str

---

##### `preferred_backup_window_input`<sup>Optional</sup> <a name="preferred_backup_window_input" id="@cdktf/provider-aws.lightsailDatabase.LightsailDatabase.property.preferredBackupWindowInput"></a>

```python
preferred_backup_window_input: str
```

- *Type:* str

---

##### `preferred_maintenance_window_input`<sup>Optional</sup> <a name="preferred_maintenance_window_input" id="@cdktf/provider-aws.lightsailDatabase.LightsailDatabase.property.preferredMaintenanceWindowInput"></a>

```python
preferred_maintenance_window_input: str
```

- *Type:* str

---

##### `publicly_accessible_input`<sup>Optional</sup> <a name="publicly_accessible_input" id="@cdktf/provider-aws.lightsailDatabase.LightsailDatabase.property.publiclyAccessibleInput"></a>

```python
publicly_accessible_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `relational_database_name_input`<sup>Optional</sup> <a name="relational_database_name_input" id="@cdktf/provider-aws.lightsailDatabase.LightsailDatabase.property.relationalDatabaseNameInput"></a>

```python
relational_database_name_input: str
```

- *Type:* str

---

##### `skip_final_snapshot_input`<sup>Optional</sup> <a name="skip_final_snapshot_input" id="@cdktf/provider-aws.lightsailDatabase.LightsailDatabase.property.skipFinalSnapshotInput"></a>

```python
skip_final_snapshot_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `tags_all_input`<sup>Optional</sup> <a name="tags_all_input" id="@cdktf/provider-aws.lightsailDatabase.LightsailDatabase.property.tagsAllInput"></a>

```python
tags_all_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-aws.lightsailDatabase.LightsailDatabase.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `apply_immediately`<sup>Required</sup> <a name="apply_immediately" id="@cdktf/provider-aws.lightsailDatabase.LightsailDatabase.property.applyImmediately"></a>

```python
apply_immediately: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `availability_zone`<sup>Required</sup> <a name="availability_zone" id="@cdktf/provider-aws.lightsailDatabase.LightsailDatabase.property.availabilityZone"></a>

```python
availability_zone: str
```

- *Type:* str

---

##### `backup_retention_enabled`<sup>Required</sup> <a name="backup_retention_enabled" id="@cdktf/provider-aws.lightsailDatabase.LightsailDatabase.property.backupRetentionEnabled"></a>

```python
backup_retention_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `blueprint_id`<sup>Required</sup> <a name="blueprint_id" id="@cdktf/provider-aws.lightsailDatabase.LightsailDatabase.property.blueprintId"></a>

```python
blueprint_id: str
```

- *Type:* str

---

##### `bundle_id`<sup>Required</sup> <a name="bundle_id" id="@cdktf/provider-aws.lightsailDatabase.LightsailDatabase.property.bundleId"></a>

```python
bundle_id: str
```

- *Type:* str

---

##### `final_snapshot_name`<sup>Required</sup> <a name="final_snapshot_name" id="@cdktf/provider-aws.lightsailDatabase.LightsailDatabase.property.finalSnapshotName"></a>

```python
final_snapshot_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.lightsailDatabase.LightsailDatabase.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `master_database_name`<sup>Required</sup> <a name="master_database_name" id="@cdktf/provider-aws.lightsailDatabase.LightsailDatabase.property.masterDatabaseName"></a>

```python
master_database_name: str
```

- *Type:* str

---

##### `master_password`<sup>Required</sup> <a name="master_password" id="@cdktf/provider-aws.lightsailDatabase.LightsailDatabase.property.masterPassword"></a>

```python
master_password: str
```

- *Type:* str

---

##### `master_username`<sup>Required</sup> <a name="master_username" id="@cdktf/provider-aws.lightsailDatabase.LightsailDatabase.property.masterUsername"></a>

```python
master_username: str
```

- *Type:* str

---

##### `preferred_backup_window`<sup>Required</sup> <a name="preferred_backup_window" id="@cdktf/provider-aws.lightsailDatabase.LightsailDatabase.property.preferredBackupWindow"></a>

```python
preferred_backup_window: str
```

- *Type:* str

---

##### `preferred_maintenance_window`<sup>Required</sup> <a name="preferred_maintenance_window" id="@cdktf/provider-aws.lightsailDatabase.LightsailDatabase.property.preferredMaintenanceWindow"></a>

```python
preferred_maintenance_window: str
```

- *Type:* str

---

##### `publicly_accessible`<sup>Required</sup> <a name="publicly_accessible" id="@cdktf/provider-aws.lightsailDatabase.LightsailDatabase.property.publiclyAccessible"></a>

```python
publicly_accessible: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `relational_database_name`<sup>Required</sup> <a name="relational_database_name" id="@cdktf/provider-aws.lightsailDatabase.LightsailDatabase.property.relationalDatabaseName"></a>

```python
relational_database_name: str
```

- *Type:* str

---

##### `skip_final_snapshot`<sup>Required</sup> <a name="skip_final_snapshot" id="@cdktf/provider-aws.lightsailDatabase.LightsailDatabase.property.skipFinalSnapshot"></a>

```python
skip_final_snapshot: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.lightsailDatabase.LightsailDatabase.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_all`<sup>Required</sup> <a name="tags_all" id="@cdktf/provider-aws.lightsailDatabase.LightsailDatabase.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lightsailDatabase.LightsailDatabase.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.lightsailDatabase.LightsailDatabase.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### LightsailDatabaseConfig <a name="LightsailDatabaseConfig" id="@cdktf/provider-aws.lightsailDatabase.LightsailDatabaseConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.lightsailDatabase.LightsailDatabaseConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import lightsail_database

lightsailDatabase.LightsailDatabaseConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  blueprint_id: str,
  bundle_id: str,
  master_database_name: str,
  master_password: str,
  master_username: str,
  relational_database_name: str,
  apply_immediately: typing.Union[bool, IResolvable] = None,
  availability_zone: str = None,
  backup_retention_enabled: typing.Union[bool, IResolvable] = None,
  final_snapshot_name: str = None,
  id: str = None,
  preferred_backup_window: str = None,
  preferred_maintenance_window: str = None,
  publicly_accessible: typing.Union[bool, IResolvable] = None,
  skip_final_snapshot: typing.Union[bool, IResolvable] = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.lightsailDatabase.LightsailDatabaseConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDatabase.LightsailDatabaseConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDatabase.LightsailDatabaseConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDatabase.LightsailDatabaseConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDatabase.LightsailDatabaseConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDatabase.LightsailDatabaseConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDatabase.LightsailDatabaseConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.lightsailDatabase.LightsailDatabaseConfig.property.blueprintId">blueprint_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_database#blueprint_id LightsailDatabase#blueprint_id}. |
| <code><a href="#@cdktf/provider-aws.lightsailDatabase.LightsailDatabaseConfig.property.bundleId">bundle_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_database#bundle_id LightsailDatabase#bundle_id}. |
| <code><a href="#@cdktf/provider-aws.lightsailDatabase.LightsailDatabaseConfig.property.masterDatabaseName">master_database_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_database#master_database_name LightsailDatabase#master_database_name}. |
| <code><a href="#@cdktf/provider-aws.lightsailDatabase.LightsailDatabaseConfig.property.masterPassword">master_password</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_database#master_password LightsailDatabase#master_password}. |
| <code><a href="#@cdktf/provider-aws.lightsailDatabase.LightsailDatabaseConfig.property.masterUsername">master_username</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_database#master_username LightsailDatabase#master_username}. |
| <code><a href="#@cdktf/provider-aws.lightsailDatabase.LightsailDatabaseConfig.property.relationalDatabaseName">relational_database_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_database#relational_database_name LightsailDatabase#relational_database_name}. |
| <code><a href="#@cdktf/provider-aws.lightsailDatabase.LightsailDatabaseConfig.property.applyImmediately">apply_immediately</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_database#apply_immediately LightsailDatabase#apply_immediately}. |
| <code><a href="#@cdktf/provider-aws.lightsailDatabase.LightsailDatabaseConfig.property.availabilityZone">availability_zone</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_database#availability_zone LightsailDatabase#availability_zone}. |
| <code><a href="#@cdktf/provider-aws.lightsailDatabase.LightsailDatabaseConfig.property.backupRetentionEnabled">backup_retention_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_database#backup_retention_enabled LightsailDatabase#backup_retention_enabled}. |
| <code><a href="#@cdktf/provider-aws.lightsailDatabase.LightsailDatabaseConfig.property.finalSnapshotName">final_snapshot_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_database#final_snapshot_name LightsailDatabase#final_snapshot_name}. |
| <code><a href="#@cdktf/provider-aws.lightsailDatabase.LightsailDatabaseConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_database#id LightsailDatabase#id}. |
| <code><a href="#@cdktf/provider-aws.lightsailDatabase.LightsailDatabaseConfig.property.preferredBackupWindow">preferred_backup_window</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_database#preferred_backup_window LightsailDatabase#preferred_backup_window}. |
| <code><a href="#@cdktf/provider-aws.lightsailDatabase.LightsailDatabaseConfig.property.preferredMaintenanceWindow">preferred_maintenance_window</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_database#preferred_maintenance_window LightsailDatabase#preferred_maintenance_window}. |
| <code><a href="#@cdktf/provider-aws.lightsailDatabase.LightsailDatabaseConfig.property.publiclyAccessible">publicly_accessible</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_database#publicly_accessible LightsailDatabase#publicly_accessible}. |
| <code><a href="#@cdktf/provider-aws.lightsailDatabase.LightsailDatabaseConfig.property.skipFinalSnapshot">skip_final_snapshot</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_database#skip_final_snapshot LightsailDatabase#skip_final_snapshot}. |
| <code><a href="#@cdktf/provider-aws.lightsailDatabase.LightsailDatabaseConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_database#tags LightsailDatabase#tags}. |
| <code><a href="#@cdktf/provider-aws.lightsailDatabase.LightsailDatabaseConfig.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_database#tags_all LightsailDatabase#tags_all}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.lightsailDatabase.LightsailDatabaseConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.lightsailDatabase.LightsailDatabaseConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.lightsailDatabase.LightsailDatabaseConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.lightsailDatabase.LightsailDatabaseConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.lightsailDatabase.LightsailDatabaseConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.lightsailDatabase.LightsailDatabaseConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.lightsailDatabase.LightsailDatabaseConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `blueprint_id`<sup>Required</sup> <a name="blueprint_id" id="@cdktf/provider-aws.lightsailDatabase.LightsailDatabaseConfig.property.blueprintId"></a>

```python
blueprint_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_database#blueprint_id LightsailDatabase#blueprint_id}.

---

##### `bundle_id`<sup>Required</sup> <a name="bundle_id" id="@cdktf/provider-aws.lightsailDatabase.LightsailDatabaseConfig.property.bundleId"></a>

```python
bundle_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_database#bundle_id LightsailDatabase#bundle_id}.

---

##### `master_database_name`<sup>Required</sup> <a name="master_database_name" id="@cdktf/provider-aws.lightsailDatabase.LightsailDatabaseConfig.property.masterDatabaseName"></a>

```python
master_database_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_database#master_database_name LightsailDatabase#master_database_name}.

---

##### `master_password`<sup>Required</sup> <a name="master_password" id="@cdktf/provider-aws.lightsailDatabase.LightsailDatabaseConfig.property.masterPassword"></a>

```python
master_password: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_database#master_password LightsailDatabase#master_password}.

---

##### `master_username`<sup>Required</sup> <a name="master_username" id="@cdktf/provider-aws.lightsailDatabase.LightsailDatabaseConfig.property.masterUsername"></a>

```python
master_username: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_database#master_username LightsailDatabase#master_username}.

---

##### `relational_database_name`<sup>Required</sup> <a name="relational_database_name" id="@cdktf/provider-aws.lightsailDatabase.LightsailDatabaseConfig.property.relationalDatabaseName"></a>

```python
relational_database_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_database#relational_database_name LightsailDatabase#relational_database_name}.

---

##### `apply_immediately`<sup>Optional</sup> <a name="apply_immediately" id="@cdktf/provider-aws.lightsailDatabase.LightsailDatabaseConfig.property.applyImmediately"></a>

```python
apply_immediately: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_database#apply_immediately LightsailDatabase#apply_immediately}.

---

##### `availability_zone`<sup>Optional</sup> <a name="availability_zone" id="@cdktf/provider-aws.lightsailDatabase.LightsailDatabaseConfig.property.availabilityZone"></a>

```python
availability_zone: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_database#availability_zone LightsailDatabase#availability_zone}.

---

##### `backup_retention_enabled`<sup>Optional</sup> <a name="backup_retention_enabled" id="@cdktf/provider-aws.lightsailDatabase.LightsailDatabaseConfig.property.backupRetentionEnabled"></a>

```python
backup_retention_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_database#backup_retention_enabled LightsailDatabase#backup_retention_enabled}.

---

##### `final_snapshot_name`<sup>Optional</sup> <a name="final_snapshot_name" id="@cdktf/provider-aws.lightsailDatabase.LightsailDatabaseConfig.property.finalSnapshotName"></a>

```python
final_snapshot_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_database#final_snapshot_name LightsailDatabase#final_snapshot_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.lightsailDatabase.LightsailDatabaseConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_database#id LightsailDatabase#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `preferred_backup_window`<sup>Optional</sup> <a name="preferred_backup_window" id="@cdktf/provider-aws.lightsailDatabase.LightsailDatabaseConfig.property.preferredBackupWindow"></a>

```python
preferred_backup_window: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_database#preferred_backup_window LightsailDatabase#preferred_backup_window}.

---

##### `preferred_maintenance_window`<sup>Optional</sup> <a name="preferred_maintenance_window" id="@cdktf/provider-aws.lightsailDatabase.LightsailDatabaseConfig.property.preferredMaintenanceWindow"></a>

```python
preferred_maintenance_window: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_database#preferred_maintenance_window LightsailDatabase#preferred_maintenance_window}.

---

##### `publicly_accessible`<sup>Optional</sup> <a name="publicly_accessible" id="@cdktf/provider-aws.lightsailDatabase.LightsailDatabaseConfig.property.publiclyAccessible"></a>

```python
publicly_accessible: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_database#publicly_accessible LightsailDatabase#publicly_accessible}.

---

##### `skip_final_snapshot`<sup>Optional</sup> <a name="skip_final_snapshot" id="@cdktf/provider-aws.lightsailDatabase.LightsailDatabaseConfig.property.skipFinalSnapshot"></a>

```python
skip_final_snapshot: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_database#skip_final_snapshot LightsailDatabase#skip_final_snapshot}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.lightsailDatabase.LightsailDatabaseConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_database#tags LightsailDatabase#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.lightsailDatabase.LightsailDatabaseConfig.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lightsail_database#tags_all LightsailDatabase#tags_all}.

---



