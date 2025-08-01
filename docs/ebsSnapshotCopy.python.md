# `ebsSnapshotCopy` Submodule <a name="`ebsSnapshotCopy` Submodule" id="@cdktf/provider-aws.ebsSnapshotCopy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EbsSnapshotCopy <a name="EbsSnapshotCopy" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/ebs_snapshot_copy aws_ebs_snapshot_copy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ebs_snapshot_copy

ebsSnapshotCopy.EbsSnapshotCopy(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  source_region: str,
  source_snapshot_id: str,
  completion_duration_minutes: typing.Union[int, float] = None,
  description: str = None,
  encrypted: typing.Union[bool, IResolvable] = None,
  id: str = None,
  kms_key_id: str = None,
  permanent_restore: typing.Union[bool, IResolvable] = None,
  region: str = None,
  storage_tier: str = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None,
  temporary_restore_days: typing.Union[int, float] = None,
  timeouts: EbsSnapshotCopyTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.Initializer.parameter.sourceRegion">source_region</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/ebs_snapshot_copy#source_region EbsSnapshotCopy#source_region}. |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.Initializer.parameter.sourceSnapshotId">source_snapshot_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/ebs_snapshot_copy#source_snapshot_id EbsSnapshotCopy#source_snapshot_id}. |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.Initializer.parameter.completionDurationMinutes">completion_duration_minutes</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/ebs_snapshot_copy#completion_duration_minutes EbsSnapshotCopy#completion_duration_minutes}. |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/ebs_snapshot_copy#description EbsSnapshotCopy#description}. |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.Initializer.parameter.encrypted">encrypted</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/ebs_snapshot_copy#encrypted EbsSnapshotCopy#encrypted}. |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/ebs_snapshot_copy#id EbsSnapshotCopy#id}. |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.Initializer.parameter.kmsKeyId">kms_key_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/ebs_snapshot_copy#kms_key_id EbsSnapshotCopy#kms_key_id}. |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.Initializer.parameter.permanentRestore">permanent_restore</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/ebs_snapshot_copy#permanent_restore EbsSnapshotCopy#permanent_restore}. |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.Initializer.parameter.region">region</a></code> | <code>str</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.Initializer.parameter.storageTier">storage_tier</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/ebs_snapshot_copy#storage_tier EbsSnapshotCopy#storage_tier}. |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/ebs_snapshot_copy#tags EbsSnapshotCopy#tags}. |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.Initializer.parameter.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/ebs_snapshot_copy#tags_all EbsSnapshotCopy#tags_all}. |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.Initializer.parameter.temporaryRestoreDays">temporary_restore_days</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/ebs_snapshot_copy#temporary_restore_days EbsSnapshotCopy#temporary_restore_days}. |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopyTimeouts">EbsSnapshotCopyTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `source_region`<sup>Required</sup> <a name="source_region" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.Initializer.parameter.sourceRegion"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/ebs_snapshot_copy#source_region EbsSnapshotCopy#source_region}.

---

##### `source_snapshot_id`<sup>Required</sup> <a name="source_snapshot_id" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.Initializer.parameter.sourceSnapshotId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/ebs_snapshot_copy#source_snapshot_id EbsSnapshotCopy#source_snapshot_id}.

---

##### `completion_duration_minutes`<sup>Optional</sup> <a name="completion_duration_minutes" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.Initializer.parameter.completionDurationMinutes"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/ebs_snapshot_copy#completion_duration_minutes EbsSnapshotCopy#completion_duration_minutes}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/ebs_snapshot_copy#description EbsSnapshotCopy#description}.

---

##### `encrypted`<sup>Optional</sup> <a name="encrypted" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.Initializer.parameter.encrypted"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/ebs_snapshot_copy#encrypted EbsSnapshotCopy#encrypted}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/ebs_snapshot_copy#id EbsSnapshotCopy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `kms_key_id`<sup>Optional</sup> <a name="kms_key_id" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.Initializer.parameter.kmsKeyId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/ebs_snapshot_copy#kms_key_id EbsSnapshotCopy#kms_key_id}.

---

##### `permanent_restore`<sup>Optional</sup> <a name="permanent_restore" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.Initializer.parameter.permanentRestore"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/ebs_snapshot_copy#permanent_restore EbsSnapshotCopy#permanent_restore}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.Initializer.parameter.region"></a>

- *Type:* str

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/ebs_snapshot_copy#region EbsSnapshotCopy#region}

---

##### `storage_tier`<sup>Optional</sup> <a name="storage_tier" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.Initializer.parameter.storageTier"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/ebs_snapshot_copy#storage_tier EbsSnapshotCopy#storage_tier}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/ebs_snapshot_copy#tags EbsSnapshotCopy#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.Initializer.parameter.tagsAll"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/ebs_snapshot_copy#tags_all EbsSnapshotCopy#tags_all}.

---

##### `temporary_restore_days`<sup>Optional</sup> <a name="temporary_restore_days" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.Initializer.parameter.temporaryRestoreDays"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/ebs_snapshot_copy#temporary_restore_days EbsSnapshotCopy#temporary_restore_days}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopyTimeouts">EbsSnapshotCopyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/ebs_snapshot_copy#timeouts EbsSnapshotCopy#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.resetCompletionDurationMinutes">reset_completion_duration_minutes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.resetEncrypted">reset_encrypted</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.resetKmsKeyId">reset_kms_key_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.resetPermanentRestore">reset_permanent_restore</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.resetRegion">reset_region</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.resetStorageTier">reset_storage_tier</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.resetTagsAll">reset_tags_all</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.resetTemporaryRestoreDays">reset_temporary_restore_days</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/ebs_snapshot_copy#create EbsSnapshotCopy#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/ebs_snapshot_copy#delete EbsSnapshotCopy#delete}.

---

##### `reset_completion_duration_minutes` <a name="reset_completion_duration_minutes" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.resetCompletionDurationMinutes"></a>

```python
def reset_completion_duration_minutes() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_encrypted` <a name="reset_encrypted" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.resetEncrypted"></a>

```python
def reset_encrypted() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_kms_key_id` <a name="reset_kms_key_id" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.resetKmsKeyId"></a>

```python
def reset_kms_key_id() -> None
```

##### `reset_permanent_restore` <a name="reset_permanent_restore" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.resetPermanentRestore"></a>

```python
def reset_permanent_restore() -> None
```

##### `reset_region` <a name="reset_region" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.resetRegion"></a>

```python
def reset_region() -> None
```

##### `reset_storage_tier` <a name="reset_storage_tier" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.resetStorageTier"></a>

```python
def reset_storage_tier() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_tags_all` <a name="reset_tags_all" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.resetTagsAll"></a>

```python
def reset_tags_all() -> None
```

##### `reset_temporary_restore_days` <a name="reset_temporary_restore_days" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.resetTemporaryRestoreDays"></a>

```python
def reset_temporary_restore_days() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a EbsSnapshotCopy resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import ebs_snapshot_copy

ebsSnapshotCopy.EbsSnapshotCopy.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import ebs_snapshot_copy

ebsSnapshotCopy.EbsSnapshotCopy.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import ebs_snapshot_copy

ebsSnapshotCopy.EbsSnapshotCopy.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_aws import ebs_snapshot_copy

ebsSnapshotCopy.EbsSnapshotCopy.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a EbsSnapshotCopy resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the EbsSnapshotCopy to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing EbsSnapshotCopy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/ebs_snapshot_copy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the EbsSnapshotCopy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.property.dataEncryptionKeyId">data_encryption_key_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.property.outpostArn">outpost_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.property.ownerAlias">owner_alias</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.property.ownerId">owner_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopyTimeoutsOutputReference">EbsSnapshotCopyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.property.volumeId">volume_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.property.volumeSize">volume_size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.property.completionDurationMinutesInput">completion_duration_minutes_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.property.encryptedInput">encrypted_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.property.kmsKeyIdInput">kms_key_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.property.permanentRestoreInput">permanent_restore_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.property.sourceRegionInput">source_region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.property.sourceSnapshotIdInput">source_snapshot_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.property.storageTierInput">storage_tier_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.property.tagsAllInput">tags_all_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.property.temporaryRestoreDaysInput">temporary_restore_days_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopyTimeouts">EbsSnapshotCopyTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.property.completionDurationMinutes">completion_duration_minutes</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.property.encrypted">encrypted</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.property.kmsKeyId">kms_key_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.property.permanentRestore">permanent_restore</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.property.sourceRegion">source_region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.property.sourceSnapshotId">source_snapshot_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.property.storageTier">storage_tier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.property.temporaryRestoreDays">temporary_restore_days</a></code> | <code>typing.Union[int, float]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `data_encryption_key_id`<sup>Required</sup> <a name="data_encryption_key_id" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.property.dataEncryptionKeyId"></a>

```python
data_encryption_key_id: str
```

- *Type:* str

---

##### `outpost_arn`<sup>Required</sup> <a name="outpost_arn" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.property.outpostArn"></a>

```python
outpost_arn: str
```

- *Type:* str

---

##### `owner_alias`<sup>Required</sup> <a name="owner_alias" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.property.ownerAlias"></a>

```python
owner_alias: str
```

- *Type:* str

---

##### `owner_id`<sup>Required</sup> <a name="owner_id" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.property.ownerId"></a>

```python
owner_id: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.property.timeouts"></a>

```python
timeouts: EbsSnapshotCopyTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopyTimeoutsOutputReference">EbsSnapshotCopyTimeoutsOutputReference</a>

---

##### `volume_id`<sup>Required</sup> <a name="volume_id" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.property.volumeId"></a>

```python
volume_id: str
```

- *Type:* str

---

##### `volume_size`<sup>Required</sup> <a name="volume_size" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.property.volumeSize"></a>

```python
volume_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `completion_duration_minutes_input`<sup>Optional</sup> <a name="completion_duration_minutes_input" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.property.completionDurationMinutesInput"></a>

```python
completion_duration_minutes_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `encrypted_input`<sup>Optional</sup> <a name="encrypted_input" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.property.encryptedInput"></a>

```python
encrypted_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `kms_key_id_input`<sup>Optional</sup> <a name="kms_key_id_input" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.property.kmsKeyIdInput"></a>

```python
kms_key_id_input: str
```

- *Type:* str

---

##### `permanent_restore_input`<sup>Optional</sup> <a name="permanent_restore_input" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.property.permanentRestoreInput"></a>

```python
permanent_restore_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `source_region_input`<sup>Optional</sup> <a name="source_region_input" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.property.sourceRegionInput"></a>

```python
source_region_input: str
```

- *Type:* str

---

##### `source_snapshot_id_input`<sup>Optional</sup> <a name="source_snapshot_id_input" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.property.sourceSnapshotIdInput"></a>

```python
source_snapshot_id_input: str
```

- *Type:* str

---

##### `storage_tier_input`<sup>Optional</sup> <a name="storage_tier_input" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.property.storageTierInput"></a>

```python
storage_tier_input: str
```

- *Type:* str

---

##### `tags_all_input`<sup>Optional</sup> <a name="tags_all_input" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.property.tagsAllInput"></a>

```python
tags_all_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `temporary_restore_days_input`<sup>Optional</sup> <a name="temporary_restore_days_input" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.property.temporaryRestoreDaysInput"></a>

```python
temporary_restore_days_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, EbsSnapshotCopyTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopyTimeouts">EbsSnapshotCopyTimeouts</a>]

---

##### `completion_duration_minutes`<sup>Required</sup> <a name="completion_duration_minutes" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.property.completionDurationMinutes"></a>

```python
completion_duration_minutes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `encrypted`<sup>Required</sup> <a name="encrypted" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.property.encrypted"></a>

```python
encrypted: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `kms_key_id`<sup>Required</sup> <a name="kms_key_id" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.property.kmsKeyId"></a>

```python
kms_key_id: str
```

- *Type:* str

---

##### `permanent_restore`<sup>Required</sup> <a name="permanent_restore" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.property.permanentRestore"></a>

```python
permanent_restore: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `source_region`<sup>Required</sup> <a name="source_region" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.property.sourceRegion"></a>

```python
source_region: str
```

- *Type:* str

---

##### `source_snapshot_id`<sup>Required</sup> <a name="source_snapshot_id" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.property.sourceSnapshotId"></a>

```python
source_snapshot_id: str
```

- *Type:* str

---

##### `storage_tier`<sup>Required</sup> <a name="storage_tier" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.property.storageTier"></a>

```python
storage_tier: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_all`<sup>Required</sup> <a name="tags_all" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `temporary_restore_days`<sup>Required</sup> <a name="temporary_restore_days" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.property.temporaryRestoreDays"></a>

```python
temporary_restore_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopy.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### EbsSnapshotCopyConfig <a name="EbsSnapshotCopyConfig" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopyConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ebs_snapshot_copy

ebsSnapshotCopy.EbsSnapshotCopyConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  source_region: str,
  source_snapshot_id: str,
  completion_duration_minutes: typing.Union[int, float] = None,
  description: str = None,
  encrypted: typing.Union[bool, IResolvable] = None,
  id: str = None,
  kms_key_id: str = None,
  permanent_restore: typing.Union[bool, IResolvable] = None,
  region: str = None,
  storage_tier: str = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None,
  temporary_restore_days: typing.Union[int, float] = None,
  timeouts: EbsSnapshotCopyTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopyConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopyConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopyConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopyConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopyConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopyConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopyConfig.property.sourceRegion">source_region</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/ebs_snapshot_copy#source_region EbsSnapshotCopy#source_region}. |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopyConfig.property.sourceSnapshotId">source_snapshot_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/ebs_snapshot_copy#source_snapshot_id EbsSnapshotCopy#source_snapshot_id}. |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopyConfig.property.completionDurationMinutes">completion_duration_minutes</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/ebs_snapshot_copy#completion_duration_minutes EbsSnapshotCopy#completion_duration_minutes}. |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopyConfig.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/ebs_snapshot_copy#description EbsSnapshotCopy#description}. |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopyConfig.property.encrypted">encrypted</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/ebs_snapshot_copy#encrypted EbsSnapshotCopy#encrypted}. |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopyConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/ebs_snapshot_copy#id EbsSnapshotCopy#id}. |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopyConfig.property.kmsKeyId">kms_key_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/ebs_snapshot_copy#kms_key_id EbsSnapshotCopy#kms_key_id}. |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopyConfig.property.permanentRestore">permanent_restore</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/ebs_snapshot_copy#permanent_restore EbsSnapshotCopy#permanent_restore}. |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopyConfig.property.region">region</a></code> | <code>str</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopyConfig.property.storageTier">storage_tier</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/ebs_snapshot_copy#storage_tier EbsSnapshotCopy#storage_tier}. |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopyConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/ebs_snapshot_copy#tags EbsSnapshotCopy#tags}. |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopyConfig.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/ebs_snapshot_copy#tags_all EbsSnapshotCopy#tags_all}. |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopyConfig.property.temporaryRestoreDays">temporary_restore_days</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/ebs_snapshot_copy#temporary_restore_days EbsSnapshotCopy#temporary_restore_days}. |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopyConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopyTimeouts">EbsSnapshotCopyTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopyConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopyConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopyConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopyConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopyConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopyConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopyConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `source_region`<sup>Required</sup> <a name="source_region" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopyConfig.property.sourceRegion"></a>

```python
source_region: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/ebs_snapshot_copy#source_region EbsSnapshotCopy#source_region}.

---

##### `source_snapshot_id`<sup>Required</sup> <a name="source_snapshot_id" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopyConfig.property.sourceSnapshotId"></a>

```python
source_snapshot_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/ebs_snapshot_copy#source_snapshot_id EbsSnapshotCopy#source_snapshot_id}.

---

##### `completion_duration_minutes`<sup>Optional</sup> <a name="completion_duration_minutes" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopyConfig.property.completionDurationMinutes"></a>

```python
completion_duration_minutes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/ebs_snapshot_copy#completion_duration_minutes EbsSnapshotCopy#completion_duration_minutes}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopyConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/ebs_snapshot_copy#description EbsSnapshotCopy#description}.

---

##### `encrypted`<sup>Optional</sup> <a name="encrypted" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopyConfig.property.encrypted"></a>

```python
encrypted: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/ebs_snapshot_copy#encrypted EbsSnapshotCopy#encrypted}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopyConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/ebs_snapshot_copy#id EbsSnapshotCopy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `kms_key_id`<sup>Optional</sup> <a name="kms_key_id" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopyConfig.property.kmsKeyId"></a>

```python
kms_key_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/ebs_snapshot_copy#kms_key_id EbsSnapshotCopy#kms_key_id}.

---

##### `permanent_restore`<sup>Optional</sup> <a name="permanent_restore" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopyConfig.property.permanentRestore"></a>

```python
permanent_restore: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/ebs_snapshot_copy#permanent_restore EbsSnapshotCopy#permanent_restore}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopyConfig.property.region"></a>

```python
region: str
```

- *Type:* str

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/ebs_snapshot_copy#region EbsSnapshotCopy#region}

---

##### `storage_tier`<sup>Optional</sup> <a name="storage_tier" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopyConfig.property.storageTier"></a>

```python
storage_tier: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/ebs_snapshot_copy#storage_tier EbsSnapshotCopy#storage_tier}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopyConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/ebs_snapshot_copy#tags EbsSnapshotCopy#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopyConfig.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/ebs_snapshot_copy#tags_all EbsSnapshotCopy#tags_all}.

---

##### `temporary_restore_days`<sup>Optional</sup> <a name="temporary_restore_days" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopyConfig.property.temporaryRestoreDays"></a>

```python
temporary_restore_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/ebs_snapshot_copy#temporary_restore_days EbsSnapshotCopy#temporary_restore_days}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopyConfig.property.timeouts"></a>

```python
timeouts: EbsSnapshotCopyTimeouts
```

- *Type:* <a href="#@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopyTimeouts">EbsSnapshotCopyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/ebs_snapshot_copy#timeouts EbsSnapshotCopy#timeouts}

---

### EbsSnapshotCopyTimeouts <a name="EbsSnapshotCopyTimeouts" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopyTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ebs_snapshot_copy

ebsSnapshotCopy.EbsSnapshotCopyTimeouts(
  create: str = None,
  delete: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopyTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/ebs_snapshot_copy#create EbsSnapshotCopy#create}. |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopyTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/ebs_snapshot_copy#delete EbsSnapshotCopy#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopyTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/ebs_snapshot_copy#create EbsSnapshotCopy#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopyTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.7.0/docs/resources/ebs_snapshot_copy#delete EbsSnapshotCopy#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### EbsSnapshotCopyTimeoutsOutputReference <a name="EbsSnapshotCopyTimeoutsOutputReference" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopyTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import ebs_snapshot_copy

ebsSnapshotCopy.EbsSnapshotCopyTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopyTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopyTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopyTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopyTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopyTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopyTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopyTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopyTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopyTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopyTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopyTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopyTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopyTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopyTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopyTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopyTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopyTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopyTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopyTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopyTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopyTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopyTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopyTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopyTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopyTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopyTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopyTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopyTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopyTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopyTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopyTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopyTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopyTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopyTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopyTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopyTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopyTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopyTimeouts">EbsSnapshotCopyTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopyTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopyTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopyTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopyTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopyTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopyTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopyTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, EbsSnapshotCopyTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.ebsSnapshotCopy.EbsSnapshotCopyTimeouts">EbsSnapshotCopyTimeouts</a>]

---



