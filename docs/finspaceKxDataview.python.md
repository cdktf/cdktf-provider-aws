# `finspaceKxDataview` Submodule <a name="`finspaceKxDataview` Submodule" id="@cdktf/provider-aws.finspaceKxDataview"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### FinspaceKxDataview <a name="FinspaceKxDataview" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.31.0/docs/resources/finspace_kx_dataview aws_finspace_kx_dataview}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import finspace_kx_dataview

finspaceKxDataview.FinspaceKxDataview(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  auto_update: typing.Union[bool, IResolvable],
  az_mode: str,
  database_name: str,
  environment_id: str,
  name: str,
  availability_zone_id: str = None,
  changeset_id: str = None,
  description: str = None,
  id: str = None,
  segment_configurations: typing.Union[IResolvable, typing.List[FinspaceKxDataviewSegmentConfigurations]] = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None,
  timeouts: FinspaceKxDataviewTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.Initializer.parameter.autoUpdate">auto_update</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.31.0/docs/resources/finspace_kx_dataview#auto_update FinspaceKxDataview#auto_update}. |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.Initializer.parameter.azMode">az_mode</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.31.0/docs/resources/finspace_kx_dataview#az_mode FinspaceKxDataview#az_mode}. |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.Initializer.parameter.databaseName">database_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.31.0/docs/resources/finspace_kx_dataview#database_name FinspaceKxDataview#database_name}. |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.Initializer.parameter.environmentId">environment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.31.0/docs/resources/finspace_kx_dataview#environment_id FinspaceKxDataview#environment_id}. |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.31.0/docs/resources/finspace_kx_dataview#name FinspaceKxDataview#name}. |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.Initializer.parameter.availabilityZoneId">availability_zone_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.31.0/docs/resources/finspace_kx_dataview#availability_zone_id FinspaceKxDataview#availability_zone_id}. |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.Initializer.parameter.changesetId">changeset_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.31.0/docs/resources/finspace_kx_dataview#changeset_id FinspaceKxDataview#changeset_id}. |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.31.0/docs/resources/finspace_kx_dataview#description FinspaceKxDataview#description}. |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.31.0/docs/resources/finspace_kx_dataview#id FinspaceKxDataview#id}. |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.Initializer.parameter.segmentConfigurations">segment_configurations</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewSegmentConfigurations">FinspaceKxDataviewSegmentConfigurations</a>]]</code> | segment_configurations block. |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.31.0/docs/resources/finspace_kx_dataview#tags FinspaceKxDataview#tags}. |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.Initializer.parameter.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.31.0/docs/resources/finspace_kx_dataview#tags_all FinspaceKxDataview#tags_all}. |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewTimeouts">FinspaceKxDataviewTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `auto_update`<sup>Required</sup> <a name="auto_update" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.Initializer.parameter.autoUpdate"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.31.0/docs/resources/finspace_kx_dataview#auto_update FinspaceKxDataview#auto_update}.

---

##### `az_mode`<sup>Required</sup> <a name="az_mode" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.Initializer.parameter.azMode"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.31.0/docs/resources/finspace_kx_dataview#az_mode FinspaceKxDataview#az_mode}.

---

##### `database_name`<sup>Required</sup> <a name="database_name" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.Initializer.parameter.databaseName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.31.0/docs/resources/finspace_kx_dataview#database_name FinspaceKxDataview#database_name}.

---

##### `environment_id`<sup>Required</sup> <a name="environment_id" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.Initializer.parameter.environmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.31.0/docs/resources/finspace_kx_dataview#environment_id FinspaceKxDataview#environment_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.31.0/docs/resources/finspace_kx_dataview#name FinspaceKxDataview#name}.

---

##### `availability_zone_id`<sup>Optional</sup> <a name="availability_zone_id" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.Initializer.parameter.availabilityZoneId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.31.0/docs/resources/finspace_kx_dataview#availability_zone_id FinspaceKxDataview#availability_zone_id}.

---

##### `changeset_id`<sup>Optional</sup> <a name="changeset_id" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.Initializer.parameter.changesetId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.31.0/docs/resources/finspace_kx_dataview#changeset_id FinspaceKxDataview#changeset_id}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.31.0/docs/resources/finspace_kx_dataview#description FinspaceKxDataview#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.31.0/docs/resources/finspace_kx_dataview#id FinspaceKxDataview#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `segment_configurations`<sup>Optional</sup> <a name="segment_configurations" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.Initializer.parameter.segmentConfigurations"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewSegmentConfigurations">FinspaceKxDataviewSegmentConfigurations</a>]]

segment_configurations block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.31.0/docs/resources/finspace_kx_dataview#segment_configurations FinspaceKxDataview#segment_configurations}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.31.0/docs/resources/finspace_kx_dataview#tags FinspaceKxDataview#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.Initializer.parameter.tagsAll"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.31.0/docs/resources/finspace_kx_dataview#tags_all FinspaceKxDataview#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewTimeouts">FinspaceKxDataviewTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.31.0/docs/resources/finspace_kx_dataview#timeouts FinspaceKxDataview#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.putSegmentConfigurations">put_segment_configurations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.resetAvailabilityZoneId">reset_availability_zone_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.resetChangesetId">reset_changeset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.resetSegmentConfigurations">reset_segment_configurations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.resetTagsAll">reset_tags_all</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_segment_configurations` <a name="put_segment_configurations" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.putSegmentConfigurations"></a>

```python
def put_segment_configurations(
  value: typing.Union[IResolvable, typing.List[FinspaceKxDataviewSegmentConfigurations]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.putSegmentConfigurations.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewSegmentConfigurations">FinspaceKxDataviewSegmentConfigurations</a>]]

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.31.0/docs/resources/finspace_kx_dataview#create FinspaceKxDataview#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.31.0/docs/resources/finspace_kx_dataview#delete FinspaceKxDataview#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.31.0/docs/resources/finspace_kx_dataview#update FinspaceKxDataview#update}.

---

##### `reset_availability_zone_id` <a name="reset_availability_zone_id" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.resetAvailabilityZoneId"></a>

```python
def reset_availability_zone_id() -> None
```

##### `reset_changeset_id` <a name="reset_changeset_id" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.resetChangesetId"></a>

```python
def reset_changeset_id() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_segment_configurations` <a name="reset_segment_configurations" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.resetSegmentConfigurations"></a>

```python
def reset_segment_configurations() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_tags_all` <a name="reset_tags_all" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.resetTagsAll"></a>

```python
def reset_tags_all() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a FinspaceKxDataview resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import finspace_kx_dataview

finspaceKxDataview.FinspaceKxDataview.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import finspace_kx_dataview

finspaceKxDataview.FinspaceKxDataview.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import finspace_kx_dataview

finspaceKxDataview.FinspaceKxDataview.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_aws import finspace_kx_dataview

finspaceKxDataview.FinspaceKxDataview.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a FinspaceKxDataview resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the FinspaceKxDataview to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing FinspaceKxDataview that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.31.0/docs/resources/finspace_kx_dataview#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the FinspaceKxDataview to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.property.createdTimestamp">created_timestamp</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.property.lastModifiedTimestamp">last_modified_timestamp</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.property.segmentConfigurations">segment_configurations</a></code> | <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewSegmentConfigurationsList">FinspaceKxDataviewSegmentConfigurationsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewTimeoutsOutputReference">FinspaceKxDataviewTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.property.autoUpdateInput">auto_update_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.property.availabilityZoneIdInput">availability_zone_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.property.azModeInput">az_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.property.changesetIdInput">changeset_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.property.databaseNameInput">database_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.property.environmentIdInput">environment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.property.segmentConfigurationsInput">segment_configurations_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewSegmentConfigurations">FinspaceKxDataviewSegmentConfigurations</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.property.tagsAllInput">tags_all_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewTimeouts">FinspaceKxDataviewTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.property.autoUpdate">auto_update</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.property.availabilityZoneId">availability_zone_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.property.azMode">az_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.property.changesetId">changeset_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.property.databaseName">database_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.property.environmentId">environment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `created_timestamp`<sup>Required</sup> <a name="created_timestamp" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.property.createdTimestamp"></a>

```python
created_timestamp: str
```

- *Type:* str

---

##### `last_modified_timestamp`<sup>Required</sup> <a name="last_modified_timestamp" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.property.lastModifiedTimestamp"></a>

```python
last_modified_timestamp: str
```

- *Type:* str

---

##### `segment_configurations`<sup>Required</sup> <a name="segment_configurations" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.property.segmentConfigurations"></a>

```python
segment_configurations: FinspaceKxDataviewSegmentConfigurationsList
```

- *Type:* <a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewSegmentConfigurationsList">FinspaceKxDataviewSegmentConfigurationsList</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.property.timeouts"></a>

```python
timeouts: FinspaceKxDataviewTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewTimeoutsOutputReference">FinspaceKxDataviewTimeoutsOutputReference</a>

---

##### `auto_update_input`<sup>Optional</sup> <a name="auto_update_input" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.property.autoUpdateInput"></a>

```python
auto_update_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `availability_zone_id_input`<sup>Optional</sup> <a name="availability_zone_id_input" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.property.availabilityZoneIdInput"></a>

```python
availability_zone_id_input: str
```

- *Type:* str

---

##### `az_mode_input`<sup>Optional</sup> <a name="az_mode_input" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.property.azModeInput"></a>

```python
az_mode_input: str
```

- *Type:* str

---

##### `changeset_id_input`<sup>Optional</sup> <a name="changeset_id_input" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.property.changesetIdInput"></a>

```python
changeset_id_input: str
```

- *Type:* str

---

##### `database_name_input`<sup>Optional</sup> <a name="database_name_input" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.property.databaseNameInput"></a>

```python
database_name_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `environment_id_input`<sup>Optional</sup> <a name="environment_id_input" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.property.environmentIdInput"></a>

```python
environment_id_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `segment_configurations_input`<sup>Optional</sup> <a name="segment_configurations_input" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.property.segmentConfigurationsInput"></a>

```python
segment_configurations_input: typing.Union[IResolvable, typing.List[FinspaceKxDataviewSegmentConfigurations]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewSegmentConfigurations">FinspaceKxDataviewSegmentConfigurations</a>]]

---

##### `tags_all_input`<sup>Optional</sup> <a name="tags_all_input" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.property.tagsAllInput"></a>

```python
tags_all_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, FinspaceKxDataviewTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewTimeouts">FinspaceKxDataviewTimeouts</a>]

---

##### `auto_update`<sup>Required</sup> <a name="auto_update" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.property.autoUpdate"></a>

```python
auto_update: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `availability_zone_id`<sup>Required</sup> <a name="availability_zone_id" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.property.availabilityZoneId"></a>

```python
availability_zone_id: str
```

- *Type:* str

---

##### `az_mode`<sup>Required</sup> <a name="az_mode" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.property.azMode"></a>

```python
az_mode: str
```

- *Type:* str

---

##### `changeset_id`<sup>Required</sup> <a name="changeset_id" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.property.changesetId"></a>

```python
changeset_id: str
```

- *Type:* str

---

##### `database_name`<sup>Required</sup> <a name="database_name" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.property.databaseName"></a>

```python
database_name: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `environment_id`<sup>Required</sup> <a name="environment_id" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.property.environmentId"></a>

```python
environment_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_all`<sup>Required</sup> <a name="tags_all" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataview.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### FinspaceKxDataviewConfig <a name="FinspaceKxDataviewConfig" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import finspace_kx_dataview

finspaceKxDataview.FinspaceKxDataviewConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  auto_update: typing.Union[bool, IResolvable],
  az_mode: str,
  database_name: str,
  environment_id: str,
  name: str,
  availability_zone_id: str = None,
  changeset_id: str = None,
  description: str = None,
  id: str = None,
  segment_configurations: typing.Union[IResolvable, typing.List[FinspaceKxDataviewSegmentConfigurations]] = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None,
  timeouts: FinspaceKxDataviewTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewConfig.property.autoUpdate">auto_update</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.31.0/docs/resources/finspace_kx_dataview#auto_update FinspaceKxDataview#auto_update}. |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewConfig.property.azMode">az_mode</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.31.0/docs/resources/finspace_kx_dataview#az_mode FinspaceKxDataview#az_mode}. |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewConfig.property.databaseName">database_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.31.0/docs/resources/finspace_kx_dataview#database_name FinspaceKxDataview#database_name}. |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewConfig.property.environmentId">environment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.31.0/docs/resources/finspace_kx_dataview#environment_id FinspaceKxDataview#environment_id}. |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.31.0/docs/resources/finspace_kx_dataview#name FinspaceKxDataview#name}. |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewConfig.property.availabilityZoneId">availability_zone_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.31.0/docs/resources/finspace_kx_dataview#availability_zone_id FinspaceKxDataview#availability_zone_id}. |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewConfig.property.changesetId">changeset_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.31.0/docs/resources/finspace_kx_dataview#changeset_id FinspaceKxDataview#changeset_id}. |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewConfig.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.31.0/docs/resources/finspace_kx_dataview#description FinspaceKxDataview#description}. |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.31.0/docs/resources/finspace_kx_dataview#id FinspaceKxDataview#id}. |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewConfig.property.segmentConfigurations">segment_configurations</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewSegmentConfigurations">FinspaceKxDataviewSegmentConfigurations</a>]]</code> | segment_configurations block. |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.31.0/docs/resources/finspace_kx_dataview#tags FinspaceKxDataview#tags}. |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewConfig.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.31.0/docs/resources/finspace_kx_dataview#tags_all FinspaceKxDataview#tags_all}. |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewTimeouts">FinspaceKxDataviewTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `auto_update`<sup>Required</sup> <a name="auto_update" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewConfig.property.autoUpdate"></a>

```python
auto_update: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.31.0/docs/resources/finspace_kx_dataview#auto_update FinspaceKxDataview#auto_update}.

---

##### `az_mode`<sup>Required</sup> <a name="az_mode" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewConfig.property.azMode"></a>

```python
az_mode: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.31.0/docs/resources/finspace_kx_dataview#az_mode FinspaceKxDataview#az_mode}.

---

##### `database_name`<sup>Required</sup> <a name="database_name" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewConfig.property.databaseName"></a>

```python
database_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.31.0/docs/resources/finspace_kx_dataview#database_name FinspaceKxDataview#database_name}.

---

##### `environment_id`<sup>Required</sup> <a name="environment_id" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewConfig.property.environmentId"></a>

```python
environment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.31.0/docs/resources/finspace_kx_dataview#environment_id FinspaceKxDataview#environment_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.31.0/docs/resources/finspace_kx_dataview#name FinspaceKxDataview#name}.

---

##### `availability_zone_id`<sup>Optional</sup> <a name="availability_zone_id" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewConfig.property.availabilityZoneId"></a>

```python
availability_zone_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.31.0/docs/resources/finspace_kx_dataview#availability_zone_id FinspaceKxDataview#availability_zone_id}.

---

##### `changeset_id`<sup>Optional</sup> <a name="changeset_id" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewConfig.property.changesetId"></a>

```python
changeset_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.31.0/docs/resources/finspace_kx_dataview#changeset_id FinspaceKxDataview#changeset_id}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.31.0/docs/resources/finspace_kx_dataview#description FinspaceKxDataview#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.31.0/docs/resources/finspace_kx_dataview#id FinspaceKxDataview#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `segment_configurations`<sup>Optional</sup> <a name="segment_configurations" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewConfig.property.segmentConfigurations"></a>

```python
segment_configurations: typing.Union[IResolvable, typing.List[FinspaceKxDataviewSegmentConfigurations]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewSegmentConfigurations">FinspaceKxDataviewSegmentConfigurations</a>]]

segment_configurations block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.31.0/docs/resources/finspace_kx_dataview#segment_configurations FinspaceKxDataview#segment_configurations}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.31.0/docs/resources/finspace_kx_dataview#tags FinspaceKxDataview#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewConfig.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.31.0/docs/resources/finspace_kx_dataview#tags_all FinspaceKxDataview#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewConfig.property.timeouts"></a>

```python
timeouts: FinspaceKxDataviewTimeouts
```

- *Type:* <a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewTimeouts">FinspaceKxDataviewTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.31.0/docs/resources/finspace_kx_dataview#timeouts FinspaceKxDataview#timeouts}

---

### FinspaceKxDataviewSegmentConfigurations <a name="FinspaceKxDataviewSegmentConfigurations" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewSegmentConfigurations"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewSegmentConfigurations.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import finspace_kx_dataview

finspaceKxDataview.FinspaceKxDataviewSegmentConfigurations(
  db_paths: typing.List[str],
  volume_name: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewSegmentConfigurations.property.dbPaths">db_paths</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.31.0/docs/resources/finspace_kx_dataview#db_paths FinspaceKxDataview#db_paths}. |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewSegmentConfigurations.property.volumeName">volume_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.31.0/docs/resources/finspace_kx_dataview#volume_name FinspaceKxDataview#volume_name}. |

---

##### `db_paths`<sup>Required</sup> <a name="db_paths" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewSegmentConfigurations.property.dbPaths"></a>

```python
db_paths: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.31.0/docs/resources/finspace_kx_dataview#db_paths FinspaceKxDataview#db_paths}.

---

##### `volume_name`<sup>Required</sup> <a name="volume_name" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewSegmentConfigurations.property.volumeName"></a>

```python
volume_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.31.0/docs/resources/finspace_kx_dataview#volume_name FinspaceKxDataview#volume_name}.

---

### FinspaceKxDataviewTimeouts <a name="FinspaceKxDataviewTimeouts" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import finspace_kx_dataview

finspaceKxDataview.FinspaceKxDataviewTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.31.0/docs/resources/finspace_kx_dataview#create FinspaceKxDataview#create}. |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.31.0/docs/resources/finspace_kx_dataview#delete FinspaceKxDataview#delete}. |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.31.0/docs/resources/finspace_kx_dataview#update FinspaceKxDataview#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.31.0/docs/resources/finspace_kx_dataview#create FinspaceKxDataview#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.31.0/docs/resources/finspace_kx_dataview#delete FinspaceKxDataview#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.31.0/docs/resources/finspace_kx_dataview#update FinspaceKxDataview#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### FinspaceKxDataviewSegmentConfigurationsList <a name="FinspaceKxDataviewSegmentConfigurationsList" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewSegmentConfigurationsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewSegmentConfigurationsList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import finspace_kx_dataview

finspaceKxDataview.FinspaceKxDataviewSegmentConfigurationsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewSegmentConfigurationsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewSegmentConfigurationsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewSegmentConfigurationsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewSegmentConfigurationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewSegmentConfigurationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewSegmentConfigurationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewSegmentConfigurationsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewSegmentConfigurationsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewSegmentConfigurationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewSegmentConfigurationsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewSegmentConfigurationsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewSegmentConfigurationsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewSegmentConfigurationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewSegmentConfigurationsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewSegmentConfigurationsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewSegmentConfigurationsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewSegmentConfigurationsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewSegmentConfigurationsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> FinspaceKxDataviewSegmentConfigurationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewSegmentConfigurationsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewSegmentConfigurationsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewSegmentConfigurationsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewSegmentConfigurationsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewSegmentConfigurations">FinspaceKxDataviewSegmentConfigurations</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewSegmentConfigurationsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewSegmentConfigurationsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewSegmentConfigurationsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[FinspaceKxDataviewSegmentConfigurations]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewSegmentConfigurations">FinspaceKxDataviewSegmentConfigurations</a>]]

---


### FinspaceKxDataviewSegmentConfigurationsOutputReference <a name="FinspaceKxDataviewSegmentConfigurationsOutputReference" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewSegmentConfigurationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewSegmentConfigurationsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import finspace_kx_dataview

finspaceKxDataview.FinspaceKxDataviewSegmentConfigurationsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewSegmentConfigurationsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewSegmentConfigurationsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewSegmentConfigurationsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewSegmentConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewSegmentConfigurationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewSegmentConfigurationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewSegmentConfigurationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewSegmentConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewSegmentConfigurationsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewSegmentConfigurationsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewSegmentConfigurationsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewSegmentConfigurationsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewSegmentConfigurationsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewSegmentConfigurationsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewSegmentConfigurationsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewSegmentConfigurationsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewSegmentConfigurationsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewSegmentConfigurationsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewSegmentConfigurationsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewSegmentConfigurationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewSegmentConfigurationsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewSegmentConfigurationsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewSegmentConfigurationsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewSegmentConfigurationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewSegmentConfigurationsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewSegmentConfigurationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewSegmentConfigurationsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewSegmentConfigurationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewSegmentConfigurationsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewSegmentConfigurationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewSegmentConfigurationsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewSegmentConfigurationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewSegmentConfigurationsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewSegmentConfigurationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewSegmentConfigurationsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewSegmentConfigurationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewSegmentConfigurationsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewSegmentConfigurationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewSegmentConfigurationsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewSegmentConfigurationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewSegmentConfigurationsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewSegmentConfigurationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewSegmentConfigurationsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewSegmentConfigurationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewSegmentConfigurationsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewSegmentConfigurationsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewSegmentConfigurationsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewSegmentConfigurationsOutputReference.property.dbPathsInput">db_paths_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewSegmentConfigurationsOutputReference.property.volumeNameInput">volume_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewSegmentConfigurationsOutputReference.property.dbPaths">db_paths</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewSegmentConfigurationsOutputReference.property.volumeName">volume_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewSegmentConfigurationsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewSegmentConfigurations">FinspaceKxDataviewSegmentConfigurations</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewSegmentConfigurationsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewSegmentConfigurationsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `db_paths_input`<sup>Optional</sup> <a name="db_paths_input" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewSegmentConfigurationsOutputReference.property.dbPathsInput"></a>

```python
db_paths_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `volume_name_input`<sup>Optional</sup> <a name="volume_name_input" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewSegmentConfigurationsOutputReference.property.volumeNameInput"></a>

```python
volume_name_input: str
```

- *Type:* str

---

##### `db_paths`<sup>Required</sup> <a name="db_paths" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewSegmentConfigurationsOutputReference.property.dbPaths"></a>

```python
db_paths: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `volume_name`<sup>Required</sup> <a name="volume_name" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewSegmentConfigurationsOutputReference.property.volumeName"></a>

```python
volume_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewSegmentConfigurationsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, FinspaceKxDataviewSegmentConfigurations]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewSegmentConfigurations">FinspaceKxDataviewSegmentConfigurations</a>]

---


### FinspaceKxDataviewTimeoutsOutputReference <a name="FinspaceKxDataviewTimeoutsOutputReference" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import finspace_kx_dataview

finspaceKxDataview.FinspaceKxDataviewTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewTimeouts">FinspaceKxDataviewTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, FinspaceKxDataviewTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.finspaceKxDataview.FinspaceKxDataviewTimeouts">FinspaceKxDataviewTimeouts</a>]

---



