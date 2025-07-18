# `dmsReplicationConfig` Submodule <a name="`dmsReplicationConfig` Submodule" id="@cdktf/provider-aws.dmsReplicationConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DmsReplicationConfig <a name="DmsReplicationConfig" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dms_replication_config aws_dms_replication_config}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import dms_replication_config

dmsReplicationConfig.DmsReplicationConfig(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  compute_config: DmsReplicationConfigComputeConfig,
  replication_config_identifier: str,
  replication_type: str,
  source_endpoint_arn: str,
  table_mappings: str,
  target_endpoint_arn: str,
  id: str = None,
  region: str = None,
  replication_settings: str = None,
  resource_identifier: str = None,
  start_replication: typing.Union[bool, IResolvable] = None,
  supplemental_settings: str = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None,
  timeouts: DmsReplicationConfigTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.Initializer.parameter.computeConfig">compute_config</a></code> | <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfig">DmsReplicationConfigComputeConfig</a></code> | compute_config block. |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.Initializer.parameter.replicationConfigIdentifier">replication_config_identifier</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dms_replication_config#replication_config_identifier DmsReplicationConfig#replication_config_identifier}. |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.Initializer.parameter.replicationType">replication_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dms_replication_config#replication_type DmsReplicationConfig#replication_type}. |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.Initializer.parameter.sourceEndpointArn">source_endpoint_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dms_replication_config#source_endpoint_arn DmsReplicationConfig#source_endpoint_arn}. |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.Initializer.parameter.tableMappings">table_mappings</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dms_replication_config#table_mappings DmsReplicationConfig#table_mappings}. |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.Initializer.parameter.targetEndpointArn">target_endpoint_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dms_replication_config#target_endpoint_arn DmsReplicationConfig#target_endpoint_arn}. |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dms_replication_config#id DmsReplicationConfig#id}. |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.Initializer.parameter.region">region</a></code> | <code>str</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.Initializer.parameter.replicationSettings">replication_settings</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dms_replication_config#replication_settings DmsReplicationConfig#replication_settings}. |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.Initializer.parameter.resourceIdentifier">resource_identifier</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dms_replication_config#resource_identifier DmsReplicationConfig#resource_identifier}. |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.Initializer.parameter.startReplication">start_replication</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dms_replication_config#start_replication DmsReplicationConfig#start_replication}. |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.Initializer.parameter.supplementalSettings">supplemental_settings</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dms_replication_config#supplemental_settings DmsReplicationConfig#supplemental_settings}. |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dms_replication_config#tags DmsReplicationConfig#tags}. |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.Initializer.parameter.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dms_replication_config#tags_all DmsReplicationConfig#tags_all}. |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigTimeouts">DmsReplicationConfigTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compute_config`<sup>Required</sup> <a name="compute_config" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.Initializer.parameter.computeConfig"></a>

- *Type:* <a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfig">DmsReplicationConfigComputeConfig</a>

compute_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dms_replication_config#compute_config DmsReplicationConfig#compute_config}

---

##### `replication_config_identifier`<sup>Required</sup> <a name="replication_config_identifier" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.Initializer.parameter.replicationConfigIdentifier"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dms_replication_config#replication_config_identifier DmsReplicationConfig#replication_config_identifier}.

---

##### `replication_type`<sup>Required</sup> <a name="replication_type" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.Initializer.parameter.replicationType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dms_replication_config#replication_type DmsReplicationConfig#replication_type}.

---

##### `source_endpoint_arn`<sup>Required</sup> <a name="source_endpoint_arn" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.Initializer.parameter.sourceEndpointArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dms_replication_config#source_endpoint_arn DmsReplicationConfig#source_endpoint_arn}.

---

##### `table_mappings`<sup>Required</sup> <a name="table_mappings" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.Initializer.parameter.tableMappings"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dms_replication_config#table_mappings DmsReplicationConfig#table_mappings}.

---

##### `target_endpoint_arn`<sup>Required</sup> <a name="target_endpoint_arn" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.Initializer.parameter.targetEndpointArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dms_replication_config#target_endpoint_arn DmsReplicationConfig#target_endpoint_arn}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dms_replication_config#id DmsReplicationConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.Initializer.parameter.region"></a>

- *Type:* str

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dms_replication_config#region DmsReplicationConfig#region}

---

##### `replication_settings`<sup>Optional</sup> <a name="replication_settings" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.Initializer.parameter.replicationSettings"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dms_replication_config#replication_settings DmsReplicationConfig#replication_settings}.

---

##### `resource_identifier`<sup>Optional</sup> <a name="resource_identifier" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.Initializer.parameter.resourceIdentifier"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dms_replication_config#resource_identifier DmsReplicationConfig#resource_identifier}.

---

##### `start_replication`<sup>Optional</sup> <a name="start_replication" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.Initializer.parameter.startReplication"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dms_replication_config#start_replication DmsReplicationConfig#start_replication}.

---

##### `supplemental_settings`<sup>Optional</sup> <a name="supplemental_settings" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.Initializer.parameter.supplementalSettings"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dms_replication_config#supplemental_settings DmsReplicationConfig#supplemental_settings}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dms_replication_config#tags DmsReplicationConfig#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.Initializer.parameter.tagsAll"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dms_replication_config#tags_all DmsReplicationConfig#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigTimeouts">DmsReplicationConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dms_replication_config#timeouts DmsReplicationConfig#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.putComputeConfig">put_compute_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.resetRegion">reset_region</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.resetReplicationSettings">reset_replication_settings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.resetResourceIdentifier">reset_resource_identifier</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.resetStartReplication">reset_start_replication</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.resetSupplementalSettings">reset_supplemental_settings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.resetTagsAll">reset_tags_all</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_compute_config` <a name="put_compute_config" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.putComputeConfig"></a>

```python
def put_compute_config(
  replication_subnet_group_id: str,
  availability_zone: str = None,
  dns_name_servers: str = None,
  kms_key_id: str = None,
  max_capacity_units: typing.Union[int, float] = None,
  min_capacity_units: typing.Union[int, float] = None,
  multi_az: typing.Union[bool, IResolvable] = None,
  preferred_maintenance_window: str = None,
  vpc_security_group_ids: typing.List[str] = None
) -> None
```

###### `replication_subnet_group_id`<sup>Required</sup> <a name="replication_subnet_group_id" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.putComputeConfig.parameter.replicationSubnetGroupId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dms_replication_config#replication_subnet_group_id DmsReplicationConfig#replication_subnet_group_id}.

---

###### `availability_zone`<sup>Optional</sup> <a name="availability_zone" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.putComputeConfig.parameter.availabilityZone"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dms_replication_config#availability_zone DmsReplicationConfig#availability_zone}.

---

###### `dns_name_servers`<sup>Optional</sup> <a name="dns_name_servers" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.putComputeConfig.parameter.dnsNameServers"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dms_replication_config#dns_name_servers DmsReplicationConfig#dns_name_servers}.

---

###### `kms_key_id`<sup>Optional</sup> <a name="kms_key_id" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.putComputeConfig.parameter.kmsKeyId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dms_replication_config#kms_key_id DmsReplicationConfig#kms_key_id}.

---

###### `max_capacity_units`<sup>Optional</sup> <a name="max_capacity_units" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.putComputeConfig.parameter.maxCapacityUnits"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dms_replication_config#max_capacity_units DmsReplicationConfig#max_capacity_units}.

---

###### `min_capacity_units`<sup>Optional</sup> <a name="min_capacity_units" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.putComputeConfig.parameter.minCapacityUnits"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dms_replication_config#min_capacity_units DmsReplicationConfig#min_capacity_units}.

---

###### `multi_az`<sup>Optional</sup> <a name="multi_az" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.putComputeConfig.parameter.multiAz"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dms_replication_config#multi_az DmsReplicationConfig#multi_az}.

---

###### `preferred_maintenance_window`<sup>Optional</sup> <a name="preferred_maintenance_window" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.putComputeConfig.parameter.preferredMaintenanceWindow"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dms_replication_config#preferred_maintenance_window DmsReplicationConfig#preferred_maintenance_window}.

---

###### `vpc_security_group_ids`<sup>Optional</sup> <a name="vpc_security_group_ids" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.putComputeConfig.parameter.vpcSecurityGroupIds"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dms_replication_config#vpc_security_group_ids DmsReplicationConfig#vpc_security_group_ids}.

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dms_replication_config#create DmsReplicationConfig#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dms_replication_config#delete DmsReplicationConfig#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dms_replication_config#update DmsReplicationConfig#update}.

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_region` <a name="reset_region" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.resetRegion"></a>

```python
def reset_region() -> None
```

##### `reset_replication_settings` <a name="reset_replication_settings" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.resetReplicationSettings"></a>

```python
def reset_replication_settings() -> None
```

##### `reset_resource_identifier` <a name="reset_resource_identifier" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.resetResourceIdentifier"></a>

```python
def reset_resource_identifier() -> None
```

##### `reset_start_replication` <a name="reset_start_replication" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.resetStartReplication"></a>

```python
def reset_start_replication() -> None
```

##### `reset_supplemental_settings` <a name="reset_supplemental_settings" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.resetSupplementalSettings"></a>

```python
def reset_supplemental_settings() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_tags_all` <a name="reset_tags_all" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.resetTagsAll"></a>

```python
def reset_tags_all() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DmsReplicationConfig resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import dms_replication_config

dmsReplicationConfig.DmsReplicationConfig.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import dms_replication_config

dmsReplicationConfig.DmsReplicationConfig.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import dms_replication_config

dmsReplicationConfig.DmsReplicationConfig.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_aws import dms_replication_config

dmsReplicationConfig.DmsReplicationConfig.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DmsReplicationConfig resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DmsReplicationConfig to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DmsReplicationConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dms_replication_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DmsReplicationConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.property.computeConfig">compute_config</a></code> | <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference">DmsReplicationConfigComputeConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigTimeoutsOutputReference">DmsReplicationConfigTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.property.computeConfigInput">compute_config_input</a></code> | <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfig">DmsReplicationConfigComputeConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.property.replicationConfigIdentifierInput">replication_config_identifier_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.property.replicationSettingsInput">replication_settings_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.property.replicationTypeInput">replication_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.property.resourceIdentifierInput">resource_identifier_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.property.sourceEndpointArnInput">source_endpoint_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.property.startReplicationInput">start_replication_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.property.supplementalSettingsInput">supplemental_settings_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.property.tableMappingsInput">table_mappings_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.property.tagsAllInput">tags_all_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.property.targetEndpointArnInput">target_endpoint_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigTimeouts">DmsReplicationConfigTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.property.replicationConfigIdentifier">replication_config_identifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.property.replicationSettings">replication_settings</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.property.replicationType">replication_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.property.resourceIdentifier">resource_identifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.property.sourceEndpointArn">source_endpoint_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.property.startReplication">start_replication</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.property.supplementalSettings">supplemental_settings</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.property.tableMappings">table_mappings</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.property.targetEndpointArn">target_endpoint_arn</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `compute_config`<sup>Required</sup> <a name="compute_config" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.property.computeConfig"></a>

```python
compute_config: DmsReplicationConfigComputeConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference">DmsReplicationConfigComputeConfigOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.property.timeouts"></a>

```python
timeouts: DmsReplicationConfigTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigTimeoutsOutputReference">DmsReplicationConfigTimeoutsOutputReference</a>

---

##### `compute_config_input`<sup>Optional</sup> <a name="compute_config_input" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.property.computeConfigInput"></a>

```python
compute_config_input: DmsReplicationConfigComputeConfig
```

- *Type:* <a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfig">DmsReplicationConfigComputeConfig</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `replication_config_identifier_input`<sup>Optional</sup> <a name="replication_config_identifier_input" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.property.replicationConfigIdentifierInput"></a>

```python
replication_config_identifier_input: str
```

- *Type:* str

---

##### `replication_settings_input`<sup>Optional</sup> <a name="replication_settings_input" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.property.replicationSettingsInput"></a>

```python
replication_settings_input: str
```

- *Type:* str

---

##### `replication_type_input`<sup>Optional</sup> <a name="replication_type_input" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.property.replicationTypeInput"></a>

```python
replication_type_input: str
```

- *Type:* str

---

##### `resource_identifier_input`<sup>Optional</sup> <a name="resource_identifier_input" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.property.resourceIdentifierInput"></a>

```python
resource_identifier_input: str
```

- *Type:* str

---

##### `source_endpoint_arn_input`<sup>Optional</sup> <a name="source_endpoint_arn_input" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.property.sourceEndpointArnInput"></a>

```python
source_endpoint_arn_input: str
```

- *Type:* str

---

##### `start_replication_input`<sup>Optional</sup> <a name="start_replication_input" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.property.startReplicationInput"></a>

```python
start_replication_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `supplemental_settings_input`<sup>Optional</sup> <a name="supplemental_settings_input" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.property.supplementalSettingsInput"></a>

```python
supplemental_settings_input: str
```

- *Type:* str

---

##### `table_mappings_input`<sup>Optional</sup> <a name="table_mappings_input" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.property.tableMappingsInput"></a>

```python
table_mappings_input: str
```

- *Type:* str

---

##### `tags_all_input`<sup>Optional</sup> <a name="tags_all_input" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.property.tagsAllInput"></a>

```python
tags_all_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `target_endpoint_arn_input`<sup>Optional</sup> <a name="target_endpoint_arn_input" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.property.targetEndpointArnInput"></a>

```python
target_endpoint_arn_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, DmsReplicationConfigTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigTimeouts">DmsReplicationConfigTimeouts</a>]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `replication_config_identifier`<sup>Required</sup> <a name="replication_config_identifier" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.property.replicationConfigIdentifier"></a>

```python
replication_config_identifier: str
```

- *Type:* str

---

##### `replication_settings`<sup>Required</sup> <a name="replication_settings" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.property.replicationSettings"></a>

```python
replication_settings: str
```

- *Type:* str

---

##### `replication_type`<sup>Required</sup> <a name="replication_type" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.property.replicationType"></a>

```python
replication_type: str
```

- *Type:* str

---

##### `resource_identifier`<sup>Required</sup> <a name="resource_identifier" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.property.resourceIdentifier"></a>

```python
resource_identifier: str
```

- *Type:* str

---

##### `source_endpoint_arn`<sup>Required</sup> <a name="source_endpoint_arn" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.property.sourceEndpointArn"></a>

```python
source_endpoint_arn: str
```

- *Type:* str

---

##### `start_replication`<sup>Required</sup> <a name="start_replication" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.property.startReplication"></a>

```python
start_replication: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `supplemental_settings`<sup>Required</sup> <a name="supplemental_settings" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.property.supplementalSettings"></a>

```python
supplemental_settings: str
```

- *Type:* str

---

##### `table_mappings`<sup>Required</sup> <a name="table_mappings" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.property.tableMappings"></a>

```python
table_mappings: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_all`<sup>Required</sup> <a name="tags_all" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `target_endpoint_arn`<sup>Required</sup> <a name="target_endpoint_arn" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.property.targetEndpointArn"></a>

```python
target_endpoint_arn: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfig.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DmsReplicationConfigComputeConfig <a name="DmsReplicationConfigComputeConfig" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import dms_replication_config

dmsReplicationConfig.DmsReplicationConfigComputeConfig(
  replication_subnet_group_id: str,
  availability_zone: str = None,
  dns_name_servers: str = None,
  kms_key_id: str = None,
  max_capacity_units: typing.Union[int, float] = None,
  min_capacity_units: typing.Union[int, float] = None,
  multi_az: typing.Union[bool, IResolvable] = None,
  preferred_maintenance_window: str = None,
  vpc_security_group_ids: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfig.property.replicationSubnetGroupId">replication_subnet_group_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dms_replication_config#replication_subnet_group_id DmsReplicationConfig#replication_subnet_group_id}. |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfig.property.availabilityZone">availability_zone</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dms_replication_config#availability_zone DmsReplicationConfig#availability_zone}. |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfig.property.dnsNameServers">dns_name_servers</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dms_replication_config#dns_name_servers DmsReplicationConfig#dns_name_servers}. |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfig.property.kmsKeyId">kms_key_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dms_replication_config#kms_key_id DmsReplicationConfig#kms_key_id}. |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfig.property.maxCapacityUnits">max_capacity_units</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dms_replication_config#max_capacity_units DmsReplicationConfig#max_capacity_units}. |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfig.property.minCapacityUnits">min_capacity_units</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dms_replication_config#min_capacity_units DmsReplicationConfig#min_capacity_units}. |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfig.property.multiAz">multi_az</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dms_replication_config#multi_az DmsReplicationConfig#multi_az}. |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfig.property.preferredMaintenanceWindow">preferred_maintenance_window</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dms_replication_config#preferred_maintenance_window DmsReplicationConfig#preferred_maintenance_window}. |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfig.property.vpcSecurityGroupIds">vpc_security_group_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dms_replication_config#vpc_security_group_ids DmsReplicationConfig#vpc_security_group_ids}. |

---

##### `replication_subnet_group_id`<sup>Required</sup> <a name="replication_subnet_group_id" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfig.property.replicationSubnetGroupId"></a>

```python
replication_subnet_group_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dms_replication_config#replication_subnet_group_id DmsReplicationConfig#replication_subnet_group_id}.

---

##### `availability_zone`<sup>Optional</sup> <a name="availability_zone" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfig.property.availabilityZone"></a>

```python
availability_zone: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dms_replication_config#availability_zone DmsReplicationConfig#availability_zone}.

---

##### `dns_name_servers`<sup>Optional</sup> <a name="dns_name_servers" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfig.property.dnsNameServers"></a>

```python
dns_name_servers: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dms_replication_config#dns_name_servers DmsReplicationConfig#dns_name_servers}.

---

##### `kms_key_id`<sup>Optional</sup> <a name="kms_key_id" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfig.property.kmsKeyId"></a>

```python
kms_key_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dms_replication_config#kms_key_id DmsReplicationConfig#kms_key_id}.

---

##### `max_capacity_units`<sup>Optional</sup> <a name="max_capacity_units" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfig.property.maxCapacityUnits"></a>

```python
max_capacity_units: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dms_replication_config#max_capacity_units DmsReplicationConfig#max_capacity_units}.

---

##### `min_capacity_units`<sup>Optional</sup> <a name="min_capacity_units" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfig.property.minCapacityUnits"></a>

```python
min_capacity_units: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dms_replication_config#min_capacity_units DmsReplicationConfig#min_capacity_units}.

---

##### `multi_az`<sup>Optional</sup> <a name="multi_az" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfig.property.multiAz"></a>

```python
multi_az: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dms_replication_config#multi_az DmsReplicationConfig#multi_az}.

---

##### `preferred_maintenance_window`<sup>Optional</sup> <a name="preferred_maintenance_window" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfig.property.preferredMaintenanceWindow"></a>

```python
preferred_maintenance_window: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dms_replication_config#preferred_maintenance_window DmsReplicationConfig#preferred_maintenance_window}.

---

##### `vpc_security_group_ids`<sup>Optional</sup> <a name="vpc_security_group_ids" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfig.property.vpcSecurityGroupIds"></a>

```python
vpc_security_group_ids: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dms_replication_config#vpc_security_group_ids DmsReplicationConfig#vpc_security_group_ids}.

---

### DmsReplicationConfigConfig <a name="DmsReplicationConfigConfig" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import dms_replication_config

dmsReplicationConfig.DmsReplicationConfigConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  compute_config: DmsReplicationConfigComputeConfig,
  replication_config_identifier: str,
  replication_type: str,
  source_endpoint_arn: str,
  table_mappings: str,
  target_endpoint_arn: str,
  id: str = None,
  region: str = None,
  replication_settings: str = None,
  resource_identifier: str = None,
  start_replication: typing.Union[bool, IResolvable] = None,
  supplemental_settings: str = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None,
  timeouts: DmsReplicationConfigTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigConfig.property.computeConfig">compute_config</a></code> | <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfig">DmsReplicationConfigComputeConfig</a></code> | compute_config block. |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigConfig.property.replicationConfigIdentifier">replication_config_identifier</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dms_replication_config#replication_config_identifier DmsReplicationConfig#replication_config_identifier}. |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigConfig.property.replicationType">replication_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dms_replication_config#replication_type DmsReplicationConfig#replication_type}. |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigConfig.property.sourceEndpointArn">source_endpoint_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dms_replication_config#source_endpoint_arn DmsReplicationConfig#source_endpoint_arn}. |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigConfig.property.tableMappings">table_mappings</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dms_replication_config#table_mappings DmsReplicationConfig#table_mappings}. |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigConfig.property.targetEndpointArn">target_endpoint_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dms_replication_config#target_endpoint_arn DmsReplicationConfig#target_endpoint_arn}. |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dms_replication_config#id DmsReplicationConfig#id}. |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigConfig.property.region">region</a></code> | <code>str</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigConfig.property.replicationSettings">replication_settings</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dms_replication_config#replication_settings DmsReplicationConfig#replication_settings}. |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigConfig.property.resourceIdentifier">resource_identifier</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dms_replication_config#resource_identifier DmsReplicationConfig#resource_identifier}. |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigConfig.property.startReplication">start_replication</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dms_replication_config#start_replication DmsReplicationConfig#start_replication}. |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigConfig.property.supplementalSettings">supplemental_settings</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dms_replication_config#supplemental_settings DmsReplicationConfig#supplemental_settings}. |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dms_replication_config#tags DmsReplicationConfig#tags}. |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigConfig.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dms_replication_config#tags_all DmsReplicationConfig#tags_all}. |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigTimeouts">DmsReplicationConfigTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compute_config`<sup>Required</sup> <a name="compute_config" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigConfig.property.computeConfig"></a>

```python
compute_config: DmsReplicationConfigComputeConfig
```

- *Type:* <a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfig">DmsReplicationConfigComputeConfig</a>

compute_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dms_replication_config#compute_config DmsReplicationConfig#compute_config}

---

##### `replication_config_identifier`<sup>Required</sup> <a name="replication_config_identifier" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigConfig.property.replicationConfigIdentifier"></a>

```python
replication_config_identifier: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dms_replication_config#replication_config_identifier DmsReplicationConfig#replication_config_identifier}.

---

##### `replication_type`<sup>Required</sup> <a name="replication_type" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigConfig.property.replicationType"></a>

```python
replication_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dms_replication_config#replication_type DmsReplicationConfig#replication_type}.

---

##### `source_endpoint_arn`<sup>Required</sup> <a name="source_endpoint_arn" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigConfig.property.sourceEndpointArn"></a>

```python
source_endpoint_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dms_replication_config#source_endpoint_arn DmsReplicationConfig#source_endpoint_arn}.

---

##### `table_mappings`<sup>Required</sup> <a name="table_mappings" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigConfig.property.tableMappings"></a>

```python
table_mappings: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dms_replication_config#table_mappings DmsReplicationConfig#table_mappings}.

---

##### `target_endpoint_arn`<sup>Required</sup> <a name="target_endpoint_arn" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigConfig.property.targetEndpointArn"></a>

```python
target_endpoint_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dms_replication_config#target_endpoint_arn DmsReplicationConfig#target_endpoint_arn}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dms_replication_config#id DmsReplicationConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigConfig.property.region"></a>

```python
region: str
```

- *Type:* str

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dms_replication_config#region DmsReplicationConfig#region}

---

##### `replication_settings`<sup>Optional</sup> <a name="replication_settings" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigConfig.property.replicationSettings"></a>

```python
replication_settings: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dms_replication_config#replication_settings DmsReplicationConfig#replication_settings}.

---

##### `resource_identifier`<sup>Optional</sup> <a name="resource_identifier" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigConfig.property.resourceIdentifier"></a>

```python
resource_identifier: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dms_replication_config#resource_identifier DmsReplicationConfig#resource_identifier}.

---

##### `start_replication`<sup>Optional</sup> <a name="start_replication" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigConfig.property.startReplication"></a>

```python
start_replication: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dms_replication_config#start_replication DmsReplicationConfig#start_replication}.

---

##### `supplemental_settings`<sup>Optional</sup> <a name="supplemental_settings" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigConfig.property.supplementalSettings"></a>

```python
supplemental_settings: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dms_replication_config#supplemental_settings DmsReplicationConfig#supplemental_settings}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dms_replication_config#tags DmsReplicationConfig#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigConfig.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dms_replication_config#tags_all DmsReplicationConfig#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigConfig.property.timeouts"></a>

```python
timeouts: DmsReplicationConfigTimeouts
```

- *Type:* <a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigTimeouts">DmsReplicationConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dms_replication_config#timeouts DmsReplicationConfig#timeouts}

---

### DmsReplicationConfigTimeouts <a name="DmsReplicationConfigTimeouts" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import dms_replication_config

dmsReplicationConfig.DmsReplicationConfigTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dms_replication_config#create DmsReplicationConfig#create}. |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dms_replication_config#delete DmsReplicationConfig#delete}. |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dms_replication_config#update DmsReplicationConfig#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dms_replication_config#create DmsReplicationConfig#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dms_replication_config#delete DmsReplicationConfig#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.4.0/docs/resources/dms_replication_config#update DmsReplicationConfig#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DmsReplicationConfigComputeConfigOutputReference <a name="DmsReplicationConfigComputeConfigOutputReference" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import dms_replication_config

dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.resetAvailabilityZone">reset_availability_zone</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.resetDnsNameServers">reset_dns_name_servers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.resetKmsKeyId">reset_kms_key_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.resetMaxCapacityUnits">reset_max_capacity_units</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.resetMinCapacityUnits">reset_min_capacity_units</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.resetMultiAz">reset_multi_az</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.resetPreferredMaintenanceWindow">reset_preferred_maintenance_window</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.resetVpcSecurityGroupIds">reset_vpc_security_group_ids</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_availability_zone` <a name="reset_availability_zone" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.resetAvailabilityZone"></a>

```python
def reset_availability_zone() -> None
```

##### `reset_dns_name_servers` <a name="reset_dns_name_servers" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.resetDnsNameServers"></a>

```python
def reset_dns_name_servers() -> None
```

##### `reset_kms_key_id` <a name="reset_kms_key_id" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.resetKmsKeyId"></a>

```python
def reset_kms_key_id() -> None
```

##### `reset_max_capacity_units` <a name="reset_max_capacity_units" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.resetMaxCapacityUnits"></a>

```python
def reset_max_capacity_units() -> None
```

##### `reset_min_capacity_units` <a name="reset_min_capacity_units" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.resetMinCapacityUnits"></a>

```python
def reset_min_capacity_units() -> None
```

##### `reset_multi_az` <a name="reset_multi_az" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.resetMultiAz"></a>

```python
def reset_multi_az() -> None
```

##### `reset_preferred_maintenance_window` <a name="reset_preferred_maintenance_window" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.resetPreferredMaintenanceWindow"></a>

```python
def reset_preferred_maintenance_window() -> None
```

##### `reset_vpc_security_group_ids` <a name="reset_vpc_security_group_ids" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.resetVpcSecurityGroupIds"></a>

```python
def reset_vpc_security_group_ids() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.property.availabilityZoneInput">availability_zone_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.property.dnsNameServersInput">dns_name_servers_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.property.kmsKeyIdInput">kms_key_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.property.maxCapacityUnitsInput">max_capacity_units_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.property.minCapacityUnitsInput">min_capacity_units_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.property.multiAzInput">multi_az_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.property.preferredMaintenanceWindowInput">preferred_maintenance_window_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.property.replicationSubnetGroupIdInput">replication_subnet_group_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.property.vpcSecurityGroupIdsInput">vpc_security_group_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.property.availabilityZone">availability_zone</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.property.dnsNameServers">dns_name_servers</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.property.kmsKeyId">kms_key_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.property.maxCapacityUnits">max_capacity_units</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.property.minCapacityUnits">min_capacity_units</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.property.multiAz">multi_az</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.property.preferredMaintenanceWindow">preferred_maintenance_window</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.property.replicationSubnetGroupId">replication_subnet_group_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.property.vpcSecurityGroupIds">vpc_security_group_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfig">DmsReplicationConfigComputeConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `availability_zone_input`<sup>Optional</sup> <a name="availability_zone_input" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.property.availabilityZoneInput"></a>

```python
availability_zone_input: str
```

- *Type:* str

---

##### `dns_name_servers_input`<sup>Optional</sup> <a name="dns_name_servers_input" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.property.dnsNameServersInput"></a>

```python
dns_name_servers_input: str
```

- *Type:* str

---

##### `kms_key_id_input`<sup>Optional</sup> <a name="kms_key_id_input" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.property.kmsKeyIdInput"></a>

```python
kms_key_id_input: str
```

- *Type:* str

---

##### `max_capacity_units_input`<sup>Optional</sup> <a name="max_capacity_units_input" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.property.maxCapacityUnitsInput"></a>

```python
max_capacity_units_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_capacity_units_input`<sup>Optional</sup> <a name="min_capacity_units_input" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.property.minCapacityUnitsInput"></a>

```python
min_capacity_units_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `multi_az_input`<sup>Optional</sup> <a name="multi_az_input" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.property.multiAzInput"></a>

```python
multi_az_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `preferred_maintenance_window_input`<sup>Optional</sup> <a name="preferred_maintenance_window_input" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.property.preferredMaintenanceWindowInput"></a>

```python
preferred_maintenance_window_input: str
```

- *Type:* str

---

##### `replication_subnet_group_id_input`<sup>Optional</sup> <a name="replication_subnet_group_id_input" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.property.replicationSubnetGroupIdInput"></a>

```python
replication_subnet_group_id_input: str
```

- *Type:* str

---

##### `vpc_security_group_ids_input`<sup>Optional</sup> <a name="vpc_security_group_ids_input" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.property.vpcSecurityGroupIdsInput"></a>

```python
vpc_security_group_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `availability_zone`<sup>Required</sup> <a name="availability_zone" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.property.availabilityZone"></a>

```python
availability_zone: str
```

- *Type:* str

---

##### `dns_name_servers`<sup>Required</sup> <a name="dns_name_servers" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.property.dnsNameServers"></a>

```python
dns_name_servers: str
```

- *Type:* str

---

##### `kms_key_id`<sup>Required</sup> <a name="kms_key_id" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.property.kmsKeyId"></a>

```python
kms_key_id: str
```

- *Type:* str

---

##### `max_capacity_units`<sup>Required</sup> <a name="max_capacity_units" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.property.maxCapacityUnits"></a>

```python
max_capacity_units: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min_capacity_units`<sup>Required</sup> <a name="min_capacity_units" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.property.minCapacityUnits"></a>

```python
min_capacity_units: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `multi_az`<sup>Required</sup> <a name="multi_az" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.property.multiAz"></a>

```python
multi_az: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `preferred_maintenance_window`<sup>Required</sup> <a name="preferred_maintenance_window" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.property.preferredMaintenanceWindow"></a>

```python
preferred_maintenance_window: str
```

- *Type:* str

---

##### `replication_subnet_group_id`<sup>Required</sup> <a name="replication_subnet_group_id" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.property.replicationSubnetGroupId"></a>

```python
replication_subnet_group_id: str
```

- *Type:* str

---

##### `vpc_security_group_ids`<sup>Required</sup> <a name="vpc_security_group_ids" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.property.vpcSecurityGroupIds"></a>

```python
vpc_security_group_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfigOutputReference.property.internalValue"></a>

```python
internal_value: DmsReplicationConfigComputeConfig
```

- *Type:* <a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigComputeConfig">DmsReplicationConfigComputeConfig</a>

---


### DmsReplicationConfigTimeoutsOutputReference <a name="DmsReplicationConfigTimeoutsOutputReference" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import dms_replication_config

dmsReplicationConfig.DmsReplicationConfigTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigTimeouts">DmsReplicationConfigTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DmsReplicationConfigTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.dmsReplicationConfig.DmsReplicationConfigTimeouts">DmsReplicationConfigTimeouts</a>]

---



