# `redshiftClusterSnapshot` Submodule <a name="`redshiftClusterSnapshot` Submodule" id="@cdktf/provider-aws.redshiftClusterSnapshot"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### RedshiftClusterSnapshot <a name="RedshiftClusterSnapshot" id="@cdktf/provider-aws.redshiftClusterSnapshot.RedshiftClusterSnapshot"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/redshift_cluster_snapshot aws_redshift_cluster_snapshot}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.redshiftClusterSnapshot.RedshiftClusterSnapshot.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import redshift_cluster_snapshot

redshiftClusterSnapshot.RedshiftClusterSnapshot(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  cluster_identifier: str,
  snapshot_identifier: str,
  id: str = None,
  manual_snapshot_retention_period: typing.Union[int, float] = None,
  region: str = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.redshiftClusterSnapshot.RedshiftClusterSnapshot.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.redshiftClusterSnapshot.RedshiftClusterSnapshot.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.redshiftClusterSnapshot.RedshiftClusterSnapshot.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftClusterSnapshot.RedshiftClusterSnapshot.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftClusterSnapshot.RedshiftClusterSnapshot.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftClusterSnapshot.RedshiftClusterSnapshot.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftClusterSnapshot.RedshiftClusterSnapshot.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftClusterSnapshot.RedshiftClusterSnapshot.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftClusterSnapshot.RedshiftClusterSnapshot.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftClusterSnapshot.RedshiftClusterSnapshot.Initializer.parameter.clusterIdentifier">cluster_identifier</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/redshift_cluster_snapshot#cluster_identifier RedshiftClusterSnapshot#cluster_identifier}. |
| <code><a href="#@cdktf/provider-aws.redshiftClusterSnapshot.RedshiftClusterSnapshot.Initializer.parameter.snapshotIdentifier">snapshot_identifier</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/redshift_cluster_snapshot#snapshot_identifier RedshiftClusterSnapshot#snapshot_identifier}. |
| <code><a href="#@cdktf/provider-aws.redshiftClusterSnapshot.RedshiftClusterSnapshot.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/redshift_cluster_snapshot#id RedshiftClusterSnapshot#id}. |
| <code><a href="#@cdktf/provider-aws.redshiftClusterSnapshot.RedshiftClusterSnapshot.Initializer.parameter.manualSnapshotRetentionPeriod">manual_snapshot_retention_period</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/redshift_cluster_snapshot#manual_snapshot_retention_period RedshiftClusterSnapshot#manual_snapshot_retention_period}. |
| <code><a href="#@cdktf/provider-aws.redshiftClusterSnapshot.RedshiftClusterSnapshot.Initializer.parameter.region">region</a></code> | <code>str</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktf/provider-aws.redshiftClusterSnapshot.RedshiftClusterSnapshot.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/redshift_cluster_snapshot#tags RedshiftClusterSnapshot#tags}. |
| <code><a href="#@cdktf/provider-aws.redshiftClusterSnapshot.RedshiftClusterSnapshot.Initializer.parameter.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/redshift_cluster_snapshot#tags_all RedshiftClusterSnapshot#tags_all}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.redshiftClusterSnapshot.RedshiftClusterSnapshot.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.redshiftClusterSnapshot.RedshiftClusterSnapshot.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.redshiftClusterSnapshot.RedshiftClusterSnapshot.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.redshiftClusterSnapshot.RedshiftClusterSnapshot.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.redshiftClusterSnapshot.RedshiftClusterSnapshot.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.redshiftClusterSnapshot.RedshiftClusterSnapshot.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.redshiftClusterSnapshot.RedshiftClusterSnapshot.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.redshiftClusterSnapshot.RedshiftClusterSnapshot.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.redshiftClusterSnapshot.RedshiftClusterSnapshot.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `cluster_identifier`<sup>Required</sup> <a name="cluster_identifier" id="@cdktf/provider-aws.redshiftClusterSnapshot.RedshiftClusterSnapshot.Initializer.parameter.clusterIdentifier"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/redshift_cluster_snapshot#cluster_identifier RedshiftClusterSnapshot#cluster_identifier}.

---

##### `snapshot_identifier`<sup>Required</sup> <a name="snapshot_identifier" id="@cdktf/provider-aws.redshiftClusterSnapshot.RedshiftClusterSnapshot.Initializer.parameter.snapshotIdentifier"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/redshift_cluster_snapshot#snapshot_identifier RedshiftClusterSnapshot#snapshot_identifier}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.redshiftClusterSnapshot.RedshiftClusterSnapshot.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/redshift_cluster_snapshot#id RedshiftClusterSnapshot#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `manual_snapshot_retention_period`<sup>Optional</sup> <a name="manual_snapshot_retention_period" id="@cdktf/provider-aws.redshiftClusterSnapshot.RedshiftClusterSnapshot.Initializer.parameter.manualSnapshotRetentionPeriod"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/redshift_cluster_snapshot#manual_snapshot_retention_period RedshiftClusterSnapshot#manual_snapshot_retention_period}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-aws.redshiftClusterSnapshot.RedshiftClusterSnapshot.Initializer.parameter.region"></a>

- *Type:* str

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/redshift_cluster_snapshot#region RedshiftClusterSnapshot#region}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.redshiftClusterSnapshot.RedshiftClusterSnapshot.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/redshift_cluster_snapshot#tags RedshiftClusterSnapshot#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.redshiftClusterSnapshot.RedshiftClusterSnapshot.Initializer.parameter.tagsAll"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/redshift_cluster_snapshot#tags_all RedshiftClusterSnapshot#tags_all}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.redshiftClusterSnapshot.RedshiftClusterSnapshot.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.redshiftClusterSnapshot.RedshiftClusterSnapshot.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftClusterSnapshot.RedshiftClusterSnapshot.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.redshiftClusterSnapshot.RedshiftClusterSnapshot.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.redshiftClusterSnapshot.RedshiftClusterSnapshot.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftClusterSnapshot.RedshiftClusterSnapshot.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftClusterSnapshot.RedshiftClusterSnapshot.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.redshiftClusterSnapshot.RedshiftClusterSnapshot.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.redshiftClusterSnapshot.RedshiftClusterSnapshot.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftClusterSnapshot.RedshiftClusterSnapshot.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftClusterSnapshot.RedshiftClusterSnapshot.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftClusterSnapshot.RedshiftClusterSnapshot.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftClusterSnapshot.RedshiftClusterSnapshot.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftClusterSnapshot.RedshiftClusterSnapshot.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftClusterSnapshot.RedshiftClusterSnapshot.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftClusterSnapshot.RedshiftClusterSnapshot.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftClusterSnapshot.RedshiftClusterSnapshot.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftClusterSnapshot.RedshiftClusterSnapshot.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftClusterSnapshot.RedshiftClusterSnapshot.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftClusterSnapshot.RedshiftClusterSnapshot.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftClusterSnapshot.RedshiftClusterSnapshot.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.redshiftClusterSnapshot.RedshiftClusterSnapshot.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.redshiftClusterSnapshot.RedshiftClusterSnapshot.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.redshiftClusterSnapshot.RedshiftClusterSnapshot.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftClusterSnapshot.RedshiftClusterSnapshot.resetManualSnapshotRetentionPeriod">reset_manual_snapshot_retention_period</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftClusterSnapshot.RedshiftClusterSnapshot.resetRegion">reset_region</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftClusterSnapshot.RedshiftClusterSnapshot.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftClusterSnapshot.RedshiftClusterSnapshot.resetTagsAll">reset_tags_all</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.redshiftClusterSnapshot.RedshiftClusterSnapshot.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.redshiftClusterSnapshot.RedshiftClusterSnapshot.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.redshiftClusterSnapshot.RedshiftClusterSnapshot.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.redshiftClusterSnapshot.RedshiftClusterSnapshot.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.redshiftClusterSnapshot.RedshiftClusterSnapshot.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.redshiftClusterSnapshot.RedshiftClusterSnapshot.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.redshiftClusterSnapshot.RedshiftClusterSnapshot.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-aws.redshiftClusterSnapshot.RedshiftClusterSnapshot.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.redshiftClusterSnapshot.RedshiftClusterSnapshot.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.redshiftClusterSnapshot.RedshiftClusterSnapshot.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-aws.redshiftClusterSnapshot.RedshiftClusterSnapshot.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-aws.redshiftClusterSnapshot.RedshiftClusterSnapshot.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.redshiftClusterSnapshot.RedshiftClusterSnapshot.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.redshiftClusterSnapshot.RedshiftClusterSnapshot.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.redshiftClusterSnapshot.RedshiftClusterSnapshot.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.redshiftClusterSnapshot.RedshiftClusterSnapshot.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.redshiftClusterSnapshot.RedshiftClusterSnapshot.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.redshiftClusterSnapshot.RedshiftClusterSnapshot.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.redshiftClusterSnapshot.RedshiftClusterSnapshot.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.redshiftClusterSnapshot.RedshiftClusterSnapshot.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.redshiftClusterSnapshot.RedshiftClusterSnapshot.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.redshiftClusterSnapshot.RedshiftClusterSnapshot.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.redshiftClusterSnapshot.RedshiftClusterSnapshot.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.redshiftClusterSnapshot.RedshiftClusterSnapshot.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.redshiftClusterSnapshot.RedshiftClusterSnapshot.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.redshiftClusterSnapshot.RedshiftClusterSnapshot.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.redshiftClusterSnapshot.RedshiftClusterSnapshot.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.redshiftClusterSnapshot.RedshiftClusterSnapshot.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.redshiftClusterSnapshot.RedshiftClusterSnapshot.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.redshiftClusterSnapshot.RedshiftClusterSnapshot.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-aws.redshiftClusterSnapshot.RedshiftClusterSnapshot.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-aws.redshiftClusterSnapshot.RedshiftClusterSnapshot.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.redshiftClusterSnapshot.RedshiftClusterSnapshot.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.redshiftClusterSnapshot.RedshiftClusterSnapshot.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.redshiftClusterSnapshot.RedshiftClusterSnapshot.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.redshiftClusterSnapshot.RedshiftClusterSnapshot.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-aws.redshiftClusterSnapshot.RedshiftClusterSnapshot.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.redshiftClusterSnapshot.RedshiftClusterSnapshot.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-aws.redshiftClusterSnapshot.RedshiftClusterSnapshot.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-aws.redshiftClusterSnapshot.RedshiftClusterSnapshot.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.redshiftClusterSnapshot.RedshiftClusterSnapshot.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-aws.redshiftClusterSnapshot.RedshiftClusterSnapshot.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.redshiftClusterSnapshot.RedshiftClusterSnapshot.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.redshiftClusterSnapshot.RedshiftClusterSnapshot.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_manual_snapshot_retention_period` <a name="reset_manual_snapshot_retention_period" id="@cdktf/provider-aws.redshiftClusterSnapshot.RedshiftClusterSnapshot.resetManualSnapshotRetentionPeriod"></a>

```python
def reset_manual_snapshot_retention_period() -> None
```

##### `reset_region` <a name="reset_region" id="@cdktf/provider-aws.redshiftClusterSnapshot.RedshiftClusterSnapshot.resetRegion"></a>

```python
def reset_region() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-aws.redshiftClusterSnapshot.RedshiftClusterSnapshot.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_tags_all` <a name="reset_tags_all" id="@cdktf/provider-aws.redshiftClusterSnapshot.RedshiftClusterSnapshot.resetTagsAll"></a>

```python
def reset_tags_all() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.redshiftClusterSnapshot.RedshiftClusterSnapshot.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.redshiftClusterSnapshot.RedshiftClusterSnapshot.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftClusterSnapshot.RedshiftClusterSnapshot.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftClusterSnapshot.RedshiftClusterSnapshot.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a RedshiftClusterSnapshot resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.redshiftClusterSnapshot.RedshiftClusterSnapshot.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import redshift_cluster_snapshot

redshiftClusterSnapshot.RedshiftClusterSnapshot.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.redshiftClusterSnapshot.RedshiftClusterSnapshot.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.redshiftClusterSnapshot.RedshiftClusterSnapshot.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import redshift_cluster_snapshot

redshiftClusterSnapshot.RedshiftClusterSnapshot.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.redshiftClusterSnapshot.RedshiftClusterSnapshot.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.redshiftClusterSnapshot.RedshiftClusterSnapshot.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import redshift_cluster_snapshot

redshiftClusterSnapshot.RedshiftClusterSnapshot.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.redshiftClusterSnapshot.RedshiftClusterSnapshot.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-aws.redshiftClusterSnapshot.RedshiftClusterSnapshot.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_aws import redshift_cluster_snapshot

redshiftClusterSnapshot.RedshiftClusterSnapshot.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a RedshiftClusterSnapshot resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.redshiftClusterSnapshot.RedshiftClusterSnapshot.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-aws.redshiftClusterSnapshot.RedshiftClusterSnapshot.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the RedshiftClusterSnapshot to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-aws.redshiftClusterSnapshot.RedshiftClusterSnapshot.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing RedshiftClusterSnapshot that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/redshift_cluster_snapshot#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.redshiftClusterSnapshot.RedshiftClusterSnapshot.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the RedshiftClusterSnapshot to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.redshiftClusterSnapshot.RedshiftClusterSnapshot.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.redshiftClusterSnapshot.RedshiftClusterSnapshot.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftClusterSnapshot.RedshiftClusterSnapshot.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftClusterSnapshot.RedshiftClusterSnapshot.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftClusterSnapshot.RedshiftClusterSnapshot.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftClusterSnapshot.RedshiftClusterSnapshot.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftClusterSnapshot.RedshiftClusterSnapshot.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftClusterSnapshot.RedshiftClusterSnapshot.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftClusterSnapshot.RedshiftClusterSnapshot.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftClusterSnapshot.RedshiftClusterSnapshot.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftClusterSnapshot.RedshiftClusterSnapshot.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftClusterSnapshot.RedshiftClusterSnapshot.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftClusterSnapshot.RedshiftClusterSnapshot.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftClusterSnapshot.RedshiftClusterSnapshot.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftClusterSnapshot.RedshiftClusterSnapshot.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftClusterSnapshot.RedshiftClusterSnapshot.property.kmsKeyId">kms_key_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftClusterSnapshot.RedshiftClusterSnapshot.property.ownerAccount">owner_account</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftClusterSnapshot.RedshiftClusterSnapshot.property.clusterIdentifierInput">cluster_identifier_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftClusterSnapshot.RedshiftClusterSnapshot.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftClusterSnapshot.RedshiftClusterSnapshot.property.manualSnapshotRetentionPeriodInput">manual_snapshot_retention_period_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftClusterSnapshot.RedshiftClusterSnapshot.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftClusterSnapshot.RedshiftClusterSnapshot.property.snapshotIdentifierInput">snapshot_identifier_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftClusterSnapshot.RedshiftClusterSnapshot.property.tagsAllInput">tags_all_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftClusterSnapshot.RedshiftClusterSnapshot.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftClusterSnapshot.RedshiftClusterSnapshot.property.clusterIdentifier">cluster_identifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftClusterSnapshot.RedshiftClusterSnapshot.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftClusterSnapshot.RedshiftClusterSnapshot.property.manualSnapshotRetentionPeriod">manual_snapshot_retention_period</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftClusterSnapshot.RedshiftClusterSnapshot.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftClusterSnapshot.RedshiftClusterSnapshot.property.snapshotIdentifier">snapshot_identifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftClusterSnapshot.RedshiftClusterSnapshot.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftClusterSnapshot.RedshiftClusterSnapshot.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.redshiftClusterSnapshot.RedshiftClusterSnapshot.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.redshiftClusterSnapshot.RedshiftClusterSnapshot.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.redshiftClusterSnapshot.RedshiftClusterSnapshot.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.redshiftClusterSnapshot.RedshiftClusterSnapshot.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.redshiftClusterSnapshot.RedshiftClusterSnapshot.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.redshiftClusterSnapshot.RedshiftClusterSnapshot.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.redshiftClusterSnapshot.RedshiftClusterSnapshot.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.redshiftClusterSnapshot.RedshiftClusterSnapshot.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.redshiftClusterSnapshot.RedshiftClusterSnapshot.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.redshiftClusterSnapshot.RedshiftClusterSnapshot.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.redshiftClusterSnapshot.RedshiftClusterSnapshot.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.redshiftClusterSnapshot.RedshiftClusterSnapshot.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.redshiftClusterSnapshot.RedshiftClusterSnapshot.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.redshiftClusterSnapshot.RedshiftClusterSnapshot.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.redshiftClusterSnapshot.RedshiftClusterSnapshot.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `kms_key_id`<sup>Required</sup> <a name="kms_key_id" id="@cdktf/provider-aws.redshiftClusterSnapshot.RedshiftClusterSnapshot.property.kmsKeyId"></a>

```python
kms_key_id: str
```

- *Type:* str

---

##### `owner_account`<sup>Required</sup> <a name="owner_account" id="@cdktf/provider-aws.redshiftClusterSnapshot.RedshiftClusterSnapshot.property.ownerAccount"></a>

```python
owner_account: str
```

- *Type:* str

---

##### `cluster_identifier_input`<sup>Optional</sup> <a name="cluster_identifier_input" id="@cdktf/provider-aws.redshiftClusterSnapshot.RedshiftClusterSnapshot.property.clusterIdentifierInput"></a>

```python
cluster_identifier_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.redshiftClusterSnapshot.RedshiftClusterSnapshot.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `manual_snapshot_retention_period_input`<sup>Optional</sup> <a name="manual_snapshot_retention_period_input" id="@cdktf/provider-aws.redshiftClusterSnapshot.RedshiftClusterSnapshot.property.manualSnapshotRetentionPeriodInput"></a>

```python
manual_snapshot_retention_period_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktf/provider-aws.redshiftClusterSnapshot.RedshiftClusterSnapshot.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `snapshot_identifier_input`<sup>Optional</sup> <a name="snapshot_identifier_input" id="@cdktf/provider-aws.redshiftClusterSnapshot.RedshiftClusterSnapshot.property.snapshotIdentifierInput"></a>

```python
snapshot_identifier_input: str
```

- *Type:* str

---

##### `tags_all_input`<sup>Optional</sup> <a name="tags_all_input" id="@cdktf/provider-aws.redshiftClusterSnapshot.RedshiftClusterSnapshot.property.tagsAllInput"></a>

```python
tags_all_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-aws.redshiftClusterSnapshot.RedshiftClusterSnapshot.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `cluster_identifier`<sup>Required</sup> <a name="cluster_identifier" id="@cdktf/provider-aws.redshiftClusterSnapshot.RedshiftClusterSnapshot.property.clusterIdentifier"></a>

```python
cluster_identifier: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.redshiftClusterSnapshot.RedshiftClusterSnapshot.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `manual_snapshot_retention_period`<sup>Required</sup> <a name="manual_snapshot_retention_period" id="@cdktf/provider-aws.redshiftClusterSnapshot.RedshiftClusterSnapshot.property.manualSnapshotRetentionPeriod"></a>

```python
manual_snapshot_retention_period: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-aws.redshiftClusterSnapshot.RedshiftClusterSnapshot.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `snapshot_identifier`<sup>Required</sup> <a name="snapshot_identifier" id="@cdktf/provider-aws.redshiftClusterSnapshot.RedshiftClusterSnapshot.property.snapshotIdentifier"></a>

```python
snapshot_identifier: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.redshiftClusterSnapshot.RedshiftClusterSnapshot.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `tags_all`<sup>Required</sup> <a name="tags_all" id="@cdktf/provider-aws.redshiftClusterSnapshot.RedshiftClusterSnapshot.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.redshiftClusterSnapshot.RedshiftClusterSnapshot.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.redshiftClusterSnapshot.RedshiftClusterSnapshot.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### RedshiftClusterSnapshotConfig <a name="RedshiftClusterSnapshotConfig" id="@cdktf/provider-aws.redshiftClusterSnapshot.RedshiftClusterSnapshotConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.redshiftClusterSnapshot.RedshiftClusterSnapshotConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import redshift_cluster_snapshot

redshiftClusterSnapshot.RedshiftClusterSnapshotConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  cluster_identifier: str,
  snapshot_identifier: str,
  id: str = None,
  manual_snapshot_retention_period: typing.Union[int, float] = None,
  region: str = None,
  tags: typing.Mapping[str] = None,
  tags_all: typing.Mapping[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.redshiftClusterSnapshot.RedshiftClusterSnapshotConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftClusterSnapshot.RedshiftClusterSnapshotConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftClusterSnapshot.RedshiftClusterSnapshotConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftClusterSnapshot.RedshiftClusterSnapshotConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftClusterSnapshot.RedshiftClusterSnapshotConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftClusterSnapshot.RedshiftClusterSnapshotConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftClusterSnapshot.RedshiftClusterSnapshotConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.redshiftClusterSnapshot.RedshiftClusterSnapshotConfig.property.clusterIdentifier">cluster_identifier</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/redshift_cluster_snapshot#cluster_identifier RedshiftClusterSnapshot#cluster_identifier}. |
| <code><a href="#@cdktf/provider-aws.redshiftClusterSnapshot.RedshiftClusterSnapshotConfig.property.snapshotIdentifier">snapshot_identifier</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/redshift_cluster_snapshot#snapshot_identifier RedshiftClusterSnapshot#snapshot_identifier}. |
| <code><a href="#@cdktf/provider-aws.redshiftClusterSnapshot.RedshiftClusterSnapshotConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/redshift_cluster_snapshot#id RedshiftClusterSnapshot#id}. |
| <code><a href="#@cdktf/provider-aws.redshiftClusterSnapshot.RedshiftClusterSnapshotConfig.property.manualSnapshotRetentionPeriod">manual_snapshot_retention_period</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/redshift_cluster_snapshot#manual_snapshot_retention_period RedshiftClusterSnapshot#manual_snapshot_retention_period}. |
| <code><a href="#@cdktf/provider-aws.redshiftClusterSnapshot.RedshiftClusterSnapshotConfig.property.region">region</a></code> | <code>str</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktf/provider-aws.redshiftClusterSnapshot.RedshiftClusterSnapshotConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/redshift_cluster_snapshot#tags RedshiftClusterSnapshot#tags}. |
| <code><a href="#@cdktf/provider-aws.redshiftClusterSnapshot.RedshiftClusterSnapshotConfig.property.tagsAll">tags_all</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/redshift_cluster_snapshot#tags_all RedshiftClusterSnapshot#tags_all}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.redshiftClusterSnapshot.RedshiftClusterSnapshotConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.redshiftClusterSnapshot.RedshiftClusterSnapshotConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.redshiftClusterSnapshot.RedshiftClusterSnapshotConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.redshiftClusterSnapshot.RedshiftClusterSnapshotConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.redshiftClusterSnapshot.RedshiftClusterSnapshotConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.redshiftClusterSnapshot.RedshiftClusterSnapshotConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.redshiftClusterSnapshot.RedshiftClusterSnapshotConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `cluster_identifier`<sup>Required</sup> <a name="cluster_identifier" id="@cdktf/provider-aws.redshiftClusterSnapshot.RedshiftClusterSnapshotConfig.property.clusterIdentifier"></a>

```python
cluster_identifier: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/redshift_cluster_snapshot#cluster_identifier RedshiftClusterSnapshot#cluster_identifier}.

---

##### `snapshot_identifier`<sup>Required</sup> <a name="snapshot_identifier" id="@cdktf/provider-aws.redshiftClusterSnapshot.RedshiftClusterSnapshotConfig.property.snapshotIdentifier"></a>

```python
snapshot_identifier: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/redshift_cluster_snapshot#snapshot_identifier RedshiftClusterSnapshot#snapshot_identifier}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.redshiftClusterSnapshot.RedshiftClusterSnapshotConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/redshift_cluster_snapshot#id RedshiftClusterSnapshot#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `manual_snapshot_retention_period`<sup>Optional</sup> <a name="manual_snapshot_retention_period" id="@cdktf/provider-aws.redshiftClusterSnapshot.RedshiftClusterSnapshotConfig.property.manualSnapshotRetentionPeriod"></a>

```python
manual_snapshot_retention_period: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/redshift_cluster_snapshot#manual_snapshot_retention_period RedshiftClusterSnapshot#manual_snapshot_retention_period}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-aws.redshiftClusterSnapshot.RedshiftClusterSnapshotConfig.property.region"></a>

```python
region: str
```

- *Type:* str

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/redshift_cluster_snapshot#region RedshiftClusterSnapshot#region}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.redshiftClusterSnapshot.RedshiftClusterSnapshotConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/redshift_cluster_snapshot#tags RedshiftClusterSnapshot#tags}.

---

##### `tags_all`<sup>Optional</sup> <a name="tags_all" id="@cdktf/provider-aws.redshiftClusterSnapshot.RedshiftClusterSnapshotConfig.property.tagsAll"></a>

```python
tags_all: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.10.0/docs/resources/redshift_cluster_snapshot#tags_all RedshiftClusterSnapshot#tags_all}.

---



