# `dataexchangeRevisionAssets` Submodule <a name="`dataexchangeRevisionAssets` Submodule" id="@cdktf/provider-aws.dataexchangeRevisionAssets"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataexchangeRevisionAssets <a name="DataexchangeRevisionAssets" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssets"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/dataexchange_revision_assets aws_dataexchange_revision_assets}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssets.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import dataexchange_revision_assets

dataexchangeRevisionAssets.DataexchangeRevisionAssets(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  data_set_id: str,
  asset: typing.Union[IResolvable, typing.List[DataexchangeRevisionAssetsAsset]] = None,
  comment: str = None,
  finalized: typing.Union[bool, IResolvable] = None,
  force_destroy: typing.Union[bool, IResolvable] = None,
  tags: typing.Mapping[str] = None,
  timeouts: DataexchangeRevisionAssetsTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssets.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssets.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssets.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssets.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssets.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssets.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssets.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssets.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssets.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssets.Initializer.parameter.dataSetId">data_set_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/dataexchange_revision_assets#data_set_id DataexchangeRevisionAssets#data_set_id}. |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssets.Initializer.parameter.asset">asset</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAsset">DataexchangeRevisionAssetsAsset</a>]]</code> | asset block. |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssets.Initializer.parameter.comment">comment</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/dataexchange_revision_assets#comment DataexchangeRevisionAssets#comment}. |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssets.Initializer.parameter.finalized">finalized</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/dataexchange_revision_assets#finalized DataexchangeRevisionAssets#finalized}. |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssets.Initializer.parameter.forceDestroy">force_destroy</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/dataexchange_revision_assets#force_destroy DataexchangeRevisionAssets#force_destroy}. |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssets.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/dataexchange_revision_assets#tags DataexchangeRevisionAssets#tags}. |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssets.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsTimeouts">DataexchangeRevisionAssetsTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssets.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssets.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssets.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssets.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssets.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssets.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssets.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssets.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssets.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `data_set_id`<sup>Required</sup> <a name="data_set_id" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssets.Initializer.parameter.dataSetId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/dataexchange_revision_assets#data_set_id DataexchangeRevisionAssets#data_set_id}.

---

##### `asset`<sup>Optional</sup> <a name="asset" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssets.Initializer.parameter.asset"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAsset">DataexchangeRevisionAssetsAsset</a>]]

asset block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/dataexchange_revision_assets#asset DataexchangeRevisionAssets#asset}

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssets.Initializer.parameter.comment"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/dataexchange_revision_assets#comment DataexchangeRevisionAssets#comment}.

---

##### `finalized`<sup>Optional</sup> <a name="finalized" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssets.Initializer.parameter.finalized"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/dataexchange_revision_assets#finalized DataexchangeRevisionAssets#finalized}.

---

##### `force_destroy`<sup>Optional</sup> <a name="force_destroy" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssets.Initializer.parameter.forceDestroy"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/dataexchange_revision_assets#force_destroy DataexchangeRevisionAssets#force_destroy}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssets.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/dataexchange_revision_assets#tags DataexchangeRevisionAssets#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssets.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsTimeouts">DataexchangeRevisionAssetsTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/dataexchange_revision_assets#timeouts DataexchangeRevisionAssets#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssets.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssets.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssets.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssets.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssets.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssets.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssets.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssets.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssets.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssets.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssets.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssets.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssets.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssets.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssets.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssets.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssets.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssets.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssets.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssets.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssets.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssets.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssets.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssets.putAsset">put_asset</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssets.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssets.resetAsset">reset_asset</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssets.resetComment">reset_comment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssets.resetFinalized">reset_finalized</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssets.resetForceDestroy">reset_force_destroy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssets.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssets.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssets.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssets.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssets.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssets.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssets.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssets.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssets.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssets.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssets.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssets.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssets.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssets.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssets.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssets.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssets.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssets.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssets.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssets.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssets.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssets.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssets.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssets.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssets.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssets.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssets.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssets.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssets.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssets.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssets.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssets.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssets.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssets.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssets.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssets.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssets.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssets.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssets.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssets.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssets.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssets.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssets.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssets.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssets.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_asset` <a name="put_asset" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssets.putAsset"></a>

```python
def put_asset(
  value: typing.Union[IResolvable, typing.List[DataexchangeRevisionAssetsAsset]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssets.putAsset.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAsset">DataexchangeRevisionAssetsAsset</a>]]

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssets.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssets.putTimeouts.parameter.create"></a>

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/dataexchange_revision_assets#create DataexchangeRevisionAssets#create}

---

##### `reset_asset` <a name="reset_asset" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssets.resetAsset"></a>

```python
def reset_asset() -> None
```

##### `reset_comment` <a name="reset_comment" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssets.resetComment"></a>

```python
def reset_comment() -> None
```

##### `reset_finalized` <a name="reset_finalized" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssets.resetFinalized"></a>

```python
def reset_finalized() -> None
```

##### `reset_force_destroy` <a name="reset_force_destroy" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssets.resetForceDestroy"></a>

```python
def reset_force_destroy() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssets.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssets.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssets.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssets.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssets.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssets.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataexchangeRevisionAssets resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssets.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import dataexchange_revision_assets

dataexchangeRevisionAssets.DataexchangeRevisionAssets.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssets.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssets.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import dataexchange_revision_assets

dataexchangeRevisionAssets.DataexchangeRevisionAssets.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssets.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssets.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import dataexchange_revision_assets

dataexchangeRevisionAssets.DataexchangeRevisionAssets.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssets.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssets.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_aws import dataexchange_revision_assets

dataexchangeRevisionAssets.DataexchangeRevisionAssets.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataexchangeRevisionAssets resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssets.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssets.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataexchangeRevisionAssets to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssets.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataexchangeRevisionAssets that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/dataexchange_revision_assets#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssets.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataexchangeRevisionAssets to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssets.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssets.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssets.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssets.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssets.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssets.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssets.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssets.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssets.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssets.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssets.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssets.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssets.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssets.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssets.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssets.property.asset">asset</a></code> | <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetList">DataexchangeRevisionAssetsAssetList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssets.property.createdAt">created_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssets.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssets.property.tagsAll">tags_all</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssets.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsTimeoutsOutputReference">DataexchangeRevisionAssetsTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssets.property.updatedAt">updated_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssets.property.assetInput">asset_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAsset">DataexchangeRevisionAssetsAsset</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssets.property.commentInput">comment_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssets.property.dataSetIdInput">data_set_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssets.property.finalizedInput">finalized_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssets.property.forceDestroyInput">force_destroy_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssets.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssets.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsTimeouts">DataexchangeRevisionAssetsTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssets.property.comment">comment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssets.property.dataSetId">data_set_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssets.property.finalized">finalized</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssets.property.forceDestroy">force_destroy</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssets.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssets.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssets.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssets.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssets.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssets.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssets.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssets.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssets.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssets.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssets.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssets.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssets.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssets.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssets.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssets.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `asset`<sup>Required</sup> <a name="asset" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssets.property.asset"></a>

```python
asset: DataexchangeRevisionAssetsAssetList
```

- *Type:* <a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetList">DataexchangeRevisionAssetsAssetList</a>

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssets.property.createdAt"></a>

```python
created_at: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssets.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `tags_all`<sup>Required</sup> <a name="tags_all" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssets.property.tagsAll"></a>

```python
tags_all: StringMap
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssets.property.timeouts"></a>

```python
timeouts: DataexchangeRevisionAssetsTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsTimeoutsOutputReference">DataexchangeRevisionAssetsTimeoutsOutputReference</a>

---

##### `updated_at`<sup>Required</sup> <a name="updated_at" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssets.property.updatedAt"></a>

```python
updated_at: str
```

- *Type:* str

---

##### `asset_input`<sup>Optional</sup> <a name="asset_input" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssets.property.assetInput"></a>

```python
asset_input: typing.Union[IResolvable, typing.List[DataexchangeRevisionAssetsAsset]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAsset">DataexchangeRevisionAssetsAsset</a>]]

---

##### `comment_input`<sup>Optional</sup> <a name="comment_input" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssets.property.commentInput"></a>

```python
comment_input: str
```

- *Type:* str

---

##### `data_set_id_input`<sup>Optional</sup> <a name="data_set_id_input" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssets.property.dataSetIdInput"></a>

```python
data_set_id_input: str
```

- *Type:* str

---

##### `finalized_input`<sup>Optional</sup> <a name="finalized_input" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssets.property.finalizedInput"></a>

```python
finalized_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `force_destroy_input`<sup>Optional</sup> <a name="force_destroy_input" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssets.property.forceDestroyInput"></a>

```python
force_destroy_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssets.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssets.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, DataexchangeRevisionAssetsTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsTimeouts">DataexchangeRevisionAssetsTimeouts</a>]

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssets.property.comment"></a>

```python
comment: str
```

- *Type:* str

---

##### `data_set_id`<sup>Required</sup> <a name="data_set_id" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssets.property.dataSetId"></a>

```python
data_set_id: str
```

- *Type:* str

---

##### `finalized`<sup>Required</sup> <a name="finalized" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssets.property.finalized"></a>

```python
finalized: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `force_destroy`<sup>Required</sup> <a name="force_destroy" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssets.property.forceDestroy"></a>

```python
force_destroy: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssets.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssets.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssets.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataexchangeRevisionAssetsAsset <a name="DataexchangeRevisionAssetsAsset" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAsset"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAsset.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import dataexchange_revision_assets

dataexchangeRevisionAssets.DataexchangeRevisionAssetsAsset(
  create_s3_data_access_from_s3_bucket: typing.Union[IResolvable, typing.List[DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3Bucket]] = None,
  import_assets_from_s3: typing.Union[IResolvable, typing.List[DataexchangeRevisionAssetsAssetImportAssetsFromS3]] = None,
  import_assets_from_signed_url: typing.Union[IResolvable, typing.List[DataexchangeRevisionAssetsAssetImportAssetsFromSignedUrl]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAsset.property.createS3DataAccessFromS3Bucket">create_s3_data_access_from_s3_bucket</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3Bucket">DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3Bucket</a>]]</code> | create_s3_data_access_from_s3_bucket block. |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAsset.property.importAssetsFromS3">import_assets_from_s3</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromS3">DataexchangeRevisionAssetsAssetImportAssetsFromS3</a>]]</code> | import_assets_from_s3 block. |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAsset.property.importAssetsFromSignedUrl">import_assets_from_signed_url</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromSignedUrl">DataexchangeRevisionAssetsAssetImportAssetsFromSignedUrl</a>]]</code> | import_assets_from_signed_url block. |

---

##### `create_s3_data_access_from_s3_bucket`<sup>Optional</sup> <a name="create_s3_data_access_from_s3_bucket" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAsset.property.createS3DataAccessFromS3Bucket"></a>

```python
create_s3_data_access_from_s3_bucket: typing.Union[IResolvable, typing.List[DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3Bucket]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3Bucket">DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3Bucket</a>]]

create_s3_data_access_from_s3_bucket block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/dataexchange_revision_assets#create_s3_data_access_from_s3_bucket DataexchangeRevisionAssets#create_s3_data_access_from_s3_bucket}

---

##### `import_assets_from_s3`<sup>Optional</sup> <a name="import_assets_from_s3" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAsset.property.importAssetsFromS3"></a>

```python
import_assets_from_s3: typing.Union[IResolvable, typing.List[DataexchangeRevisionAssetsAssetImportAssetsFromS3]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromS3">DataexchangeRevisionAssetsAssetImportAssetsFromS3</a>]]

import_assets_from_s3 block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/dataexchange_revision_assets#import_assets_from_s3 DataexchangeRevisionAssets#import_assets_from_s3}

---

##### `import_assets_from_signed_url`<sup>Optional</sup> <a name="import_assets_from_signed_url" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAsset.property.importAssetsFromSignedUrl"></a>

```python
import_assets_from_signed_url: typing.Union[IResolvable, typing.List[DataexchangeRevisionAssetsAssetImportAssetsFromSignedUrl]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromSignedUrl">DataexchangeRevisionAssetsAssetImportAssetsFromSignedUrl</a>]]

import_assets_from_signed_url block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/dataexchange_revision_assets#import_assets_from_signed_url DataexchangeRevisionAssets#import_assets_from_signed_url}

---

### DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3Bucket <a name="DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3Bucket" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3Bucket"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3Bucket.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import dataexchange_revision_assets

dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3Bucket(
  asset_source: typing.Union[IResolvable, typing.List[DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSource]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3Bucket.property.assetSource">asset_source</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSource">DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSource</a>]]</code> | asset_source block. |

---

##### `asset_source`<sup>Optional</sup> <a name="asset_source" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3Bucket.property.assetSource"></a>

```python
asset_source: typing.Union[IResolvable, typing.List[DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSource]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSource">DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSource</a>]]

asset_source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/dataexchange_revision_assets#asset_source DataexchangeRevisionAssets#asset_source}

---

### DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSource <a name="DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSource" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSource.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import dataexchange_revision_assets

dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSource(
  bucket: str,
  key_prefixes: typing.List[str] = None,
  keys: typing.List[str] = None,
  kms_keys_to_grant: typing.Union[IResolvable, typing.List[DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceKmsKeysToGrant]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSource.property.bucket">bucket</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/dataexchange_revision_assets#bucket DataexchangeRevisionAssets#bucket}. |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSource.property.keyPrefixes">key_prefixes</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/dataexchange_revision_assets#key_prefixes DataexchangeRevisionAssets#key_prefixes}. |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSource.property.keys">keys</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/dataexchange_revision_assets#keys DataexchangeRevisionAssets#keys}. |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSource.property.kmsKeysToGrant">kms_keys_to_grant</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceKmsKeysToGrant">DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceKmsKeysToGrant</a>]]</code> | kms_keys_to_grant block. |

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSource.property.bucket"></a>

```python
bucket: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/dataexchange_revision_assets#bucket DataexchangeRevisionAssets#bucket}.

---

##### `key_prefixes`<sup>Optional</sup> <a name="key_prefixes" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSource.property.keyPrefixes"></a>

```python
key_prefixes: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/dataexchange_revision_assets#key_prefixes DataexchangeRevisionAssets#key_prefixes}.

---

##### `keys`<sup>Optional</sup> <a name="keys" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSource.property.keys"></a>

```python
keys: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/dataexchange_revision_assets#keys DataexchangeRevisionAssets#keys}.

---

##### `kms_keys_to_grant`<sup>Optional</sup> <a name="kms_keys_to_grant" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSource.property.kmsKeysToGrant"></a>

```python
kms_keys_to_grant: typing.Union[IResolvable, typing.List[DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceKmsKeysToGrant]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceKmsKeysToGrant">DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceKmsKeysToGrant</a>]]

kms_keys_to_grant block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/dataexchange_revision_assets#kms_keys_to_grant DataexchangeRevisionAssets#kms_keys_to_grant}

---

### DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceKmsKeysToGrant <a name="DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceKmsKeysToGrant" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceKmsKeysToGrant"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceKmsKeysToGrant.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import dataexchange_revision_assets

dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceKmsKeysToGrant(
  kms_key_arn: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceKmsKeysToGrant.property.kmsKeyArn">kms_key_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/dataexchange_revision_assets#kms_key_arn DataexchangeRevisionAssets#kms_key_arn}. |

---

##### `kms_key_arn`<sup>Required</sup> <a name="kms_key_arn" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceKmsKeysToGrant.property.kmsKeyArn"></a>

```python
kms_key_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/dataexchange_revision_assets#kms_key_arn DataexchangeRevisionAssets#kms_key_arn}.

---

### DataexchangeRevisionAssetsAssetImportAssetsFromS3 <a name="DataexchangeRevisionAssetsAssetImportAssetsFromS3" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromS3"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromS3.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import dataexchange_revision_assets

dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromS3(
  asset_source: typing.Union[IResolvable, typing.List[DataexchangeRevisionAssetsAssetImportAssetsFromS3AssetSource]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromS3.property.assetSource">asset_source</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromS3AssetSource">DataexchangeRevisionAssetsAssetImportAssetsFromS3AssetSource</a>]]</code> | asset_source block. |

---

##### `asset_source`<sup>Optional</sup> <a name="asset_source" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromS3.property.assetSource"></a>

```python
asset_source: typing.Union[IResolvable, typing.List[DataexchangeRevisionAssetsAssetImportAssetsFromS3AssetSource]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromS3AssetSource">DataexchangeRevisionAssetsAssetImportAssetsFromS3AssetSource</a>]]

asset_source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/dataexchange_revision_assets#asset_source DataexchangeRevisionAssets#asset_source}

---

### DataexchangeRevisionAssetsAssetImportAssetsFromS3AssetSource <a name="DataexchangeRevisionAssetsAssetImportAssetsFromS3AssetSource" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromS3AssetSource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromS3AssetSource.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import dataexchange_revision_assets

dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromS3AssetSource(
  bucket: str,
  key: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromS3AssetSource.property.bucket">bucket</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/dataexchange_revision_assets#bucket DataexchangeRevisionAssets#bucket}. |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromS3AssetSource.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/dataexchange_revision_assets#key DataexchangeRevisionAssets#key}. |

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromS3AssetSource.property.bucket"></a>

```python
bucket: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/dataexchange_revision_assets#bucket DataexchangeRevisionAssets#bucket}.

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromS3AssetSource.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/dataexchange_revision_assets#key DataexchangeRevisionAssets#key}.

---

### DataexchangeRevisionAssetsAssetImportAssetsFromSignedUrl <a name="DataexchangeRevisionAssetsAssetImportAssetsFromSignedUrl" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromSignedUrl"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromSignedUrl.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import dataexchange_revision_assets

dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromSignedUrl(
  filename: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromSignedUrl.property.filename">filename</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/dataexchange_revision_assets#filename DataexchangeRevisionAssets#filename}. |

---

##### `filename`<sup>Required</sup> <a name="filename" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromSignedUrl.property.filename"></a>

```python
filename: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/dataexchange_revision_assets#filename DataexchangeRevisionAssets#filename}.

---

### DataexchangeRevisionAssetsConfig <a name="DataexchangeRevisionAssetsConfig" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import dataexchange_revision_assets

dataexchangeRevisionAssets.DataexchangeRevisionAssetsConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  data_set_id: str,
  asset: typing.Union[IResolvable, typing.List[DataexchangeRevisionAssetsAsset]] = None,
  comment: str = None,
  finalized: typing.Union[bool, IResolvable] = None,
  force_destroy: typing.Union[bool, IResolvable] = None,
  tags: typing.Mapping[str] = None,
  timeouts: DataexchangeRevisionAssetsTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsConfig.property.dataSetId">data_set_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/dataexchange_revision_assets#data_set_id DataexchangeRevisionAssets#data_set_id}. |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsConfig.property.asset">asset</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAsset">DataexchangeRevisionAssetsAsset</a>]]</code> | asset block. |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsConfig.property.comment">comment</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/dataexchange_revision_assets#comment DataexchangeRevisionAssets#comment}. |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsConfig.property.finalized">finalized</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/dataexchange_revision_assets#finalized DataexchangeRevisionAssets#finalized}. |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsConfig.property.forceDestroy">force_destroy</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/dataexchange_revision_assets#force_destroy DataexchangeRevisionAssets#force_destroy}. |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/dataexchange_revision_assets#tags DataexchangeRevisionAssets#tags}. |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsTimeouts">DataexchangeRevisionAssetsTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `data_set_id`<sup>Required</sup> <a name="data_set_id" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsConfig.property.dataSetId"></a>

```python
data_set_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/dataexchange_revision_assets#data_set_id DataexchangeRevisionAssets#data_set_id}.

---

##### `asset`<sup>Optional</sup> <a name="asset" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsConfig.property.asset"></a>

```python
asset: typing.Union[IResolvable, typing.List[DataexchangeRevisionAssetsAsset]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAsset">DataexchangeRevisionAssetsAsset</a>]]

asset block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/dataexchange_revision_assets#asset DataexchangeRevisionAssets#asset}

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsConfig.property.comment"></a>

```python
comment: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/dataexchange_revision_assets#comment DataexchangeRevisionAssets#comment}.

---

##### `finalized`<sup>Optional</sup> <a name="finalized" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsConfig.property.finalized"></a>

```python
finalized: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/dataexchange_revision_assets#finalized DataexchangeRevisionAssets#finalized}.

---

##### `force_destroy`<sup>Optional</sup> <a name="force_destroy" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsConfig.property.forceDestroy"></a>

```python
force_destroy: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/dataexchange_revision_assets#force_destroy DataexchangeRevisionAssets#force_destroy}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/dataexchange_revision_assets#tags DataexchangeRevisionAssets#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsConfig.property.timeouts"></a>

```python
timeouts: DataexchangeRevisionAssetsTimeouts
```

- *Type:* <a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsTimeouts">DataexchangeRevisionAssetsTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/dataexchange_revision_assets#timeouts DataexchangeRevisionAssets#timeouts}

---

### DataexchangeRevisionAssetsTimeouts <a name="DataexchangeRevisionAssetsTimeouts" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import dataexchange_revision_assets

dataexchangeRevisionAssets.DataexchangeRevisionAssetsTimeouts(
  create: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsTimeouts.property.create">create</a></code> | <code>str</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.1/docs/resources/dataexchange_revision_assets#create DataexchangeRevisionAssets#create}

---

## Classes <a name="Classes" id="Classes"></a>

### DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceKmsKeysToGrantList <a name="DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceKmsKeysToGrantList" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceKmsKeysToGrantList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceKmsKeysToGrantList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import dataexchange_revision_assets

dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceKmsKeysToGrantList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceKmsKeysToGrantList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceKmsKeysToGrantList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceKmsKeysToGrantList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceKmsKeysToGrantList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceKmsKeysToGrantList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceKmsKeysToGrantList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceKmsKeysToGrantList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceKmsKeysToGrantList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceKmsKeysToGrantList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceKmsKeysToGrantList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceKmsKeysToGrantList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceKmsKeysToGrantList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceKmsKeysToGrantList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceKmsKeysToGrantList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceKmsKeysToGrantList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceKmsKeysToGrantList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceKmsKeysToGrantList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceKmsKeysToGrantList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceKmsKeysToGrantOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceKmsKeysToGrantList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceKmsKeysToGrantList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceKmsKeysToGrantList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceKmsKeysToGrantList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceKmsKeysToGrant">DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceKmsKeysToGrant</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceKmsKeysToGrantList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceKmsKeysToGrantList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceKmsKeysToGrantList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceKmsKeysToGrant]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceKmsKeysToGrant">DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceKmsKeysToGrant</a>]]

---


### DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceKmsKeysToGrantOutputReference <a name="DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceKmsKeysToGrantOutputReference" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceKmsKeysToGrantOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceKmsKeysToGrantOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import dataexchange_revision_assets

dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceKmsKeysToGrantOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceKmsKeysToGrantOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceKmsKeysToGrantOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceKmsKeysToGrantOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceKmsKeysToGrantOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceKmsKeysToGrantOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceKmsKeysToGrantOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceKmsKeysToGrantOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceKmsKeysToGrantOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceKmsKeysToGrantOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceKmsKeysToGrantOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceKmsKeysToGrantOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceKmsKeysToGrantOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceKmsKeysToGrantOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceKmsKeysToGrantOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceKmsKeysToGrantOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceKmsKeysToGrantOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceKmsKeysToGrantOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceKmsKeysToGrantOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceKmsKeysToGrantOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceKmsKeysToGrantOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceKmsKeysToGrantOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceKmsKeysToGrantOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceKmsKeysToGrantOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceKmsKeysToGrantOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceKmsKeysToGrantOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceKmsKeysToGrantOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceKmsKeysToGrantOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceKmsKeysToGrantOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceKmsKeysToGrantOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceKmsKeysToGrantOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceKmsKeysToGrantOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceKmsKeysToGrantOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceKmsKeysToGrantOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceKmsKeysToGrantOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceKmsKeysToGrantOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceKmsKeysToGrantOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceKmsKeysToGrantOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceKmsKeysToGrantOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceKmsKeysToGrantOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceKmsKeysToGrantOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceKmsKeysToGrantOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceKmsKeysToGrantOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceKmsKeysToGrantOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceKmsKeysToGrantOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceKmsKeysToGrantOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceKmsKeysToGrantOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceKmsKeysToGrantOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceKmsKeysToGrantOutputReference.property.kmsKeyArnInput">kms_key_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceKmsKeysToGrantOutputReference.property.kmsKeyArn">kms_key_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceKmsKeysToGrantOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceKmsKeysToGrant">DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceKmsKeysToGrant</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceKmsKeysToGrantOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceKmsKeysToGrantOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `kms_key_arn_input`<sup>Optional</sup> <a name="kms_key_arn_input" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceKmsKeysToGrantOutputReference.property.kmsKeyArnInput"></a>

```python
kms_key_arn_input: str
```

- *Type:* str

---

##### `kms_key_arn`<sup>Required</sup> <a name="kms_key_arn" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceKmsKeysToGrantOutputReference.property.kmsKeyArn"></a>

```python
kms_key_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceKmsKeysToGrantOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceKmsKeysToGrant]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceKmsKeysToGrant">DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceKmsKeysToGrant</a>]

---


### DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceList <a name="DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceList" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import dataexchange_revision_assets

dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSource">DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSource</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSource]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSource">DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSource</a>]]

---


### DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceOutputReference <a name="DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceOutputReference" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import dataexchange_revision_assets

dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceOutputReference.putKmsKeysToGrant">put_kms_keys_to_grant</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceOutputReference.resetKeyPrefixes">reset_key_prefixes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceOutputReference.resetKeys">reset_keys</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceOutputReference.resetKmsKeysToGrant">reset_kms_keys_to_grant</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_kms_keys_to_grant` <a name="put_kms_keys_to_grant" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceOutputReference.putKmsKeysToGrant"></a>

```python
def put_kms_keys_to_grant(
  value: typing.Union[IResolvable, typing.List[DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceKmsKeysToGrant]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceOutputReference.putKmsKeysToGrant.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceKmsKeysToGrant">DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceKmsKeysToGrant</a>]]

---

##### `reset_key_prefixes` <a name="reset_key_prefixes" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceOutputReference.resetKeyPrefixes"></a>

```python
def reset_key_prefixes() -> None
```

##### `reset_keys` <a name="reset_keys" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceOutputReference.resetKeys"></a>

```python
def reset_keys() -> None
```

##### `reset_kms_keys_to_grant` <a name="reset_kms_keys_to_grant" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceOutputReference.resetKmsKeysToGrant"></a>

```python
def reset_kms_keys_to_grant() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceOutputReference.property.kmsKeysToGrant">kms_keys_to_grant</a></code> | <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceKmsKeysToGrantList">DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceKmsKeysToGrantList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceOutputReference.property.bucketInput">bucket_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceOutputReference.property.keyPrefixesInput">key_prefixes_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceOutputReference.property.keysInput">keys_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceOutputReference.property.kmsKeysToGrantInput">kms_keys_to_grant_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceKmsKeysToGrant">DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceKmsKeysToGrant</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceOutputReference.property.bucket">bucket</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceOutputReference.property.keyPrefixes">key_prefixes</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceOutputReference.property.keys">keys</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSource">DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSource</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `kms_keys_to_grant`<sup>Required</sup> <a name="kms_keys_to_grant" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceOutputReference.property.kmsKeysToGrant"></a>

```python
kms_keys_to_grant: DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceKmsKeysToGrantList
```

- *Type:* <a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceKmsKeysToGrantList">DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceKmsKeysToGrantList</a>

---

##### `bucket_input`<sup>Optional</sup> <a name="bucket_input" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceOutputReference.property.bucketInput"></a>

```python
bucket_input: str
```

- *Type:* str

---

##### `key_prefixes_input`<sup>Optional</sup> <a name="key_prefixes_input" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceOutputReference.property.keyPrefixesInput"></a>

```python
key_prefixes_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `keys_input`<sup>Optional</sup> <a name="keys_input" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceOutputReference.property.keysInput"></a>

```python
keys_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `kms_keys_to_grant_input`<sup>Optional</sup> <a name="kms_keys_to_grant_input" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceOutputReference.property.kmsKeysToGrantInput"></a>

```python
kms_keys_to_grant_input: typing.Union[IResolvable, typing.List[DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceKmsKeysToGrant]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceKmsKeysToGrant">DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceKmsKeysToGrant</a>]]

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceOutputReference.property.bucket"></a>

```python
bucket: str
```

- *Type:* str

---

##### `key_prefixes`<sup>Required</sup> <a name="key_prefixes" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceOutputReference.property.keyPrefixes"></a>

```python
key_prefixes: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `keys`<sup>Required</sup> <a name="keys" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceOutputReference.property.keys"></a>

```python
keys: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSource]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSource">DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSource</a>]

---


### DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketList <a name="DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketList" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import dataexchange_revision_assets

dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3Bucket">DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3Bucket</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3Bucket]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3Bucket">DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3Bucket</a>]]

---


### DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketOutputReference <a name="DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketOutputReference" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import dataexchange_revision_assets

dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketOutputReference.putAssetSource">put_asset_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketOutputReference.resetAssetSource">reset_asset_source</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_asset_source` <a name="put_asset_source" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketOutputReference.putAssetSource"></a>

```python
def put_asset_source(
  value: typing.Union[IResolvable, typing.List[DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSource]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketOutputReference.putAssetSource.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSource">DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSource</a>]]

---

##### `reset_asset_source` <a name="reset_asset_source" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketOutputReference.resetAssetSource"></a>

```python
def reset_asset_source() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketOutputReference.property.accessPointAlias">access_point_alias</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketOutputReference.property.accessPointArn">access_point_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketOutputReference.property.assetSource">asset_source</a></code> | <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceList">DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketOutputReference.property.assetSourceInput">asset_source_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSource">DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSource</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3Bucket">DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3Bucket</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `access_point_alias`<sup>Required</sup> <a name="access_point_alias" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketOutputReference.property.accessPointAlias"></a>

```python
access_point_alias: str
```

- *Type:* str

---

##### `access_point_arn`<sup>Required</sup> <a name="access_point_arn" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketOutputReference.property.accessPointArn"></a>

```python
access_point_arn: str
```

- *Type:* str

---

##### `asset_source`<sup>Required</sup> <a name="asset_source" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketOutputReference.property.assetSource"></a>

```python
asset_source: DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceList
```

- *Type:* <a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceList">DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSourceList</a>

---

##### `asset_source_input`<sup>Optional</sup> <a name="asset_source_input" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketOutputReference.property.assetSourceInput"></a>

```python
asset_source_input: typing.Union[IResolvable, typing.List[DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSource]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSource">DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketAssetSource</a>]]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3Bucket]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3Bucket">DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3Bucket</a>]

---


### DataexchangeRevisionAssetsAssetImportAssetsFromS3AssetSourceList <a name="DataexchangeRevisionAssetsAssetImportAssetsFromS3AssetSourceList" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromS3AssetSourceList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromS3AssetSourceList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import dataexchange_revision_assets

dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromS3AssetSourceList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromS3AssetSourceList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromS3AssetSourceList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromS3AssetSourceList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromS3AssetSourceList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromS3AssetSourceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromS3AssetSourceList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromS3AssetSourceList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromS3AssetSourceList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromS3AssetSourceList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromS3AssetSourceList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromS3AssetSourceList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromS3AssetSourceList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromS3AssetSourceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromS3AssetSourceList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromS3AssetSourceList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromS3AssetSourceList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromS3AssetSourceList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromS3AssetSourceList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataexchangeRevisionAssetsAssetImportAssetsFromS3AssetSourceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromS3AssetSourceList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromS3AssetSourceList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromS3AssetSourceList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromS3AssetSourceList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromS3AssetSource">DataexchangeRevisionAssetsAssetImportAssetsFromS3AssetSource</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromS3AssetSourceList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromS3AssetSourceList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromS3AssetSourceList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataexchangeRevisionAssetsAssetImportAssetsFromS3AssetSource]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromS3AssetSource">DataexchangeRevisionAssetsAssetImportAssetsFromS3AssetSource</a>]]

---


### DataexchangeRevisionAssetsAssetImportAssetsFromS3AssetSourceOutputReference <a name="DataexchangeRevisionAssetsAssetImportAssetsFromS3AssetSourceOutputReference" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromS3AssetSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromS3AssetSourceOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import dataexchange_revision_assets

dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromS3AssetSourceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromS3AssetSourceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromS3AssetSourceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromS3AssetSourceOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromS3AssetSourceOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromS3AssetSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromS3AssetSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromS3AssetSourceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromS3AssetSourceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromS3AssetSourceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromS3AssetSourceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromS3AssetSourceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromS3AssetSourceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromS3AssetSourceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromS3AssetSourceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromS3AssetSourceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromS3AssetSourceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromS3AssetSourceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromS3AssetSourceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromS3AssetSourceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromS3AssetSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromS3AssetSourceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromS3AssetSourceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromS3AssetSourceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromS3AssetSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromS3AssetSourceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromS3AssetSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromS3AssetSourceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromS3AssetSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromS3AssetSourceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromS3AssetSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromS3AssetSourceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromS3AssetSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromS3AssetSourceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromS3AssetSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromS3AssetSourceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromS3AssetSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromS3AssetSourceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromS3AssetSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromS3AssetSourceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromS3AssetSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromS3AssetSourceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromS3AssetSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromS3AssetSourceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromS3AssetSourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromS3AssetSourceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromS3AssetSourceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromS3AssetSourceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromS3AssetSourceOutputReference.property.bucketInput">bucket_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromS3AssetSourceOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromS3AssetSourceOutputReference.property.bucket">bucket</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromS3AssetSourceOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromS3AssetSourceOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromS3AssetSource">DataexchangeRevisionAssetsAssetImportAssetsFromS3AssetSource</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromS3AssetSourceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromS3AssetSourceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `bucket_input`<sup>Optional</sup> <a name="bucket_input" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromS3AssetSourceOutputReference.property.bucketInput"></a>

```python
bucket_input: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromS3AssetSourceOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromS3AssetSourceOutputReference.property.bucket"></a>

```python
bucket: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromS3AssetSourceOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromS3AssetSourceOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataexchangeRevisionAssetsAssetImportAssetsFromS3AssetSource]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromS3AssetSource">DataexchangeRevisionAssetsAssetImportAssetsFromS3AssetSource</a>]

---


### DataexchangeRevisionAssetsAssetImportAssetsFromS3List <a name="DataexchangeRevisionAssetsAssetImportAssetsFromS3List" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromS3List"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromS3List.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import dataexchange_revision_assets

dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromS3List(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromS3List.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromS3List.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromS3List.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromS3List.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromS3List.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromS3List.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromS3List.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromS3List.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromS3List.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromS3List.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromS3List.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromS3List.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromS3List.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromS3List.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromS3List.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromS3List.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromS3List.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromS3List.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataexchangeRevisionAssetsAssetImportAssetsFromS3OutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromS3List.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromS3List.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromS3List.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromS3List.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromS3">DataexchangeRevisionAssetsAssetImportAssetsFromS3</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromS3List.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromS3List.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromS3List.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataexchangeRevisionAssetsAssetImportAssetsFromS3]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromS3">DataexchangeRevisionAssetsAssetImportAssetsFromS3</a>]]

---


### DataexchangeRevisionAssetsAssetImportAssetsFromS3OutputReference <a name="DataexchangeRevisionAssetsAssetImportAssetsFromS3OutputReference" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromS3OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromS3OutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import dataexchange_revision_assets

dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromS3OutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromS3OutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromS3OutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromS3OutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromS3OutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromS3OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromS3OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromS3OutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromS3OutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromS3OutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromS3OutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromS3OutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromS3OutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromS3OutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromS3OutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromS3OutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromS3OutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromS3OutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromS3OutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromS3OutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromS3OutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromS3OutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromS3OutputReference.putAssetSource">put_asset_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromS3OutputReference.resetAssetSource">reset_asset_source</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromS3OutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromS3OutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromS3OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromS3OutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromS3OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromS3OutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromS3OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromS3OutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromS3OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromS3OutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromS3OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromS3OutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromS3OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromS3OutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromS3OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromS3OutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromS3OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromS3OutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromS3OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromS3OutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromS3OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromS3OutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromS3OutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromS3OutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_asset_source` <a name="put_asset_source" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromS3OutputReference.putAssetSource"></a>

```python
def put_asset_source(
  value: typing.Union[IResolvable, typing.List[DataexchangeRevisionAssetsAssetImportAssetsFromS3AssetSource]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromS3OutputReference.putAssetSource.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromS3AssetSource">DataexchangeRevisionAssetsAssetImportAssetsFromS3AssetSource</a>]]

---

##### `reset_asset_source` <a name="reset_asset_source" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromS3OutputReference.resetAssetSource"></a>

```python
def reset_asset_source() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromS3OutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromS3OutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromS3OutputReference.property.assetSource">asset_source</a></code> | <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromS3AssetSourceList">DataexchangeRevisionAssetsAssetImportAssetsFromS3AssetSourceList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromS3OutputReference.property.assetSourceInput">asset_source_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromS3AssetSource">DataexchangeRevisionAssetsAssetImportAssetsFromS3AssetSource</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromS3OutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromS3">DataexchangeRevisionAssetsAssetImportAssetsFromS3</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromS3OutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromS3OutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `asset_source`<sup>Required</sup> <a name="asset_source" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromS3OutputReference.property.assetSource"></a>

```python
asset_source: DataexchangeRevisionAssetsAssetImportAssetsFromS3AssetSourceList
```

- *Type:* <a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromS3AssetSourceList">DataexchangeRevisionAssetsAssetImportAssetsFromS3AssetSourceList</a>

---

##### `asset_source_input`<sup>Optional</sup> <a name="asset_source_input" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromS3OutputReference.property.assetSourceInput"></a>

```python
asset_source_input: typing.Union[IResolvable, typing.List[DataexchangeRevisionAssetsAssetImportAssetsFromS3AssetSource]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromS3AssetSource">DataexchangeRevisionAssetsAssetImportAssetsFromS3AssetSource</a>]]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromS3OutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataexchangeRevisionAssetsAssetImportAssetsFromS3]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromS3">DataexchangeRevisionAssetsAssetImportAssetsFromS3</a>]

---


### DataexchangeRevisionAssetsAssetImportAssetsFromSignedUrlList <a name="DataexchangeRevisionAssetsAssetImportAssetsFromSignedUrlList" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromSignedUrlList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromSignedUrlList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import dataexchange_revision_assets

dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromSignedUrlList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromSignedUrlList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromSignedUrlList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromSignedUrlList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromSignedUrlList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromSignedUrlList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromSignedUrlList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromSignedUrlList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromSignedUrlList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromSignedUrlList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromSignedUrlList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromSignedUrlList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromSignedUrlList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromSignedUrlList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromSignedUrlList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromSignedUrlList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromSignedUrlList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromSignedUrlList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromSignedUrlList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataexchangeRevisionAssetsAssetImportAssetsFromSignedUrlOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromSignedUrlList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromSignedUrlList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromSignedUrlList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromSignedUrlList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromSignedUrl">DataexchangeRevisionAssetsAssetImportAssetsFromSignedUrl</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromSignedUrlList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromSignedUrlList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromSignedUrlList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataexchangeRevisionAssetsAssetImportAssetsFromSignedUrl]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromSignedUrl">DataexchangeRevisionAssetsAssetImportAssetsFromSignedUrl</a>]]

---


### DataexchangeRevisionAssetsAssetImportAssetsFromSignedUrlOutputReference <a name="DataexchangeRevisionAssetsAssetImportAssetsFromSignedUrlOutputReference" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromSignedUrlOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromSignedUrlOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import dataexchange_revision_assets

dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromSignedUrlOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromSignedUrlOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromSignedUrlOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromSignedUrlOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromSignedUrlOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromSignedUrlOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromSignedUrlOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromSignedUrlOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromSignedUrlOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromSignedUrlOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromSignedUrlOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromSignedUrlOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromSignedUrlOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromSignedUrlOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromSignedUrlOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromSignedUrlOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromSignedUrlOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromSignedUrlOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromSignedUrlOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromSignedUrlOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromSignedUrlOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromSignedUrlOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromSignedUrlOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromSignedUrlOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromSignedUrlOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromSignedUrlOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromSignedUrlOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromSignedUrlOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromSignedUrlOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromSignedUrlOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromSignedUrlOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromSignedUrlOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromSignedUrlOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromSignedUrlOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromSignedUrlOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromSignedUrlOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromSignedUrlOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromSignedUrlOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromSignedUrlOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromSignedUrlOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromSignedUrlOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromSignedUrlOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromSignedUrlOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromSignedUrlOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromSignedUrlOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromSignedUrlOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromSignedUrlOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromSignedUrlOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromSignedUrlOutputReference.property.filenameInput">filename_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromSignedUrlOutputReference.property.filename">filename</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromSignedUrlOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromSignedUrl">DataexchangeRevisionAssetsAssetImportAssetsFromSignedUrl</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromSignedUrlOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromSignedUrlOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `filename_input`<sup>Optional</sup> <a name="filename_input" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromSignedUrlOutputReference.property.filenameInput"></a>

```python
filename_input: str
```

- *Type:* str

---

##### `filename`<sup>Required</sup> <a name="filename" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromSignedUrlOutputReference.property.filename"></a>

```python
filename: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromSignedUrlOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataexchangeRevisionAssetsAssetImportAssetsFromSignedUrl]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromSignedUrl">DataexchangeRevisionAssetsAssetImportAssetsFromSignedUrl</a>]

---


### DataexchangeRevisionAssetsAssetList <a name="DataexchangeRevisionAssetsAssetList" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import dataexchange_revision_assets

dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataexchangeRevisionAssetsAssetOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAsset">DataexchangeRevisionAssetsAsset</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataexchangeRevisionAssetsAsset]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAsset">DataexchangeRevisionAssetsAsset</a>]]

---


### DataexchangeRevisionAssetsAssetOutputReference <a name="DataexchangeRevisionAssetsAssetOutputReference" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import dataexchange_revision_assets

dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetOutputReference.putCreateS3DataAccessFromS3Bucket">put_create_s3_data_access_from_s3_bucket</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetOutputReference.putImportAssetsFromS3">put_import_assets_from_s3</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetOutputReference.putImportAssetsFromSignedUrl">put_import_assets_from_signed_url</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetOutputReference.resetCreateS3DataAccessFromS3Bucket">reset_create_s3_data_access_from_s3_bucket</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetOutputReference.resetImportAssetsFromS3">reset_import_assets_from_s3</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetOutputReference.resetImportAssetsFromSignedUrl">reset_import_assets_from_signed_url</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_create_s3_data_access_from_s3_bucket` <a name="put_create_s3_data_access_from_s3_bucket" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetOutputReference.putCreateS3DataAccessFromS3Bucket"></a>

```python
def put_create_s3_data_access_from_s3_bucket(
  value: typing.Union[IResolvable, typing.List[DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3Bucket]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetOutputReference.putCreateS3DataAccessFromS3Bucket.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3Bucket">DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3Bucket</a>]]

---

##### `put_import_assets_from_s3` <a name="put_import_assets_from_s3" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetOutputReference.putImportAssetsFromS3"></a>

```python
def put_import_assets_from_s3(
  value: typing.Union[IResolvable, typing.List[DataexchangeRevisionAssetsAssetImportAssetsFromS3]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetOutputReference.putImportAssetsFromS3.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromS3">DataexchangeRevisionAssetsAssetImportAssetsFromS3</a>]]

---

##### `put_import_assets_from_signed_url` <a name="put_import_assets_from_signed_url" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetOutputReference.putImportAssetsFromSignedUrl"></a>

```python
def put_import_assets_from_signed_url(
  value: typing.Union[IResolvable, typing.List[DataexchangeRevisionAssetsAssetImportAssetsFromSignedUrl]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetOutputReference.putImportAssetsFromSignedUrl.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromSignedUrl">DataexchangeRevisionAssetsAssetImportAssetsFromSignedUrl</a>]]

---

##### `reset_create_s3_data_access_from_s3_bucket` <a name="reset_create_s3_data_access_from_s3_bucket" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetOutputReference.resetCreateS3DataAccessFromS3Bucket"></a>

```python
def reset_create_s3_data_access_from_s3_bucket() -> None
```

##### `reset_import_assets_from_s3` <a name="reset_import_assets_from_s3" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetOutputReference.resetImportAssetsFromS3"></a>

```python
def reset_import_assets_from_s3() -> None
```

##### `reset_import_assets_from_signed_url` <a name="reset_import_assets_from_signed_url" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetOutputReference.resetImportAssetsFromSignedUrl"></a>

```python
def reset_import_assets_from_signed_url() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetOutputReference.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetOutputReference.property.createdAt">created_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetOutputReference.property.createS3DataAccessFromS3Bucket">create_s3_data_access_from_s3_bucket</a></code> | <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketList">DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetOutputReference.property.importAssetsFromS3">import_assets_from_s3</a></code> | <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromS3List">DataexchangeRevisionAssetsAssetImportAssetsFromS3List</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetOutputReference.property.importAssetsFromSignedUrl">import_assets_from_signed_url</a></code> | <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromSignedUrlList">DataexchangeRevisionAssetsAssetImportAssetsFromSignedUrlList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetOutputReference.property.updatedAt">updated_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetOutputReference.property.createS3DataAccessFromS3BucketInput">create_s3_data_access_from_s3_bucket_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3Bucket">DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3Bucket</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetOutputReference.property.importAssetsFromS3Input">import_assets_from_s3_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromS3">DataexchangeRevisionAssetsAssetImportAssetsFromS3</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetOutputReference.property.importAssetsFromSignedUrlInput">import_assets_from_signed_url_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromSignedUrl">DataexchangeRevisionAssetsAssetImportAssetsFromSignedUrl</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAsset">DataexchangeRevisionAssetsAsset</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetOutputReference.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetOutputReference.property.createdAt"></a>

```python
created_at: str
```

- *Type:* str

---

##### `create_s3_data_access_from_s3_bucket`<sup>Required</sup> <a name="create_s3_data_access_from_s3_bucket" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetOutputReference.property.createS3DataAccessFromS3Bucket"></a>

```python
create_s3_data_access_from_s3_bucket: DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketList
```

- *Type:* <a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketList">DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3BucketList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `import_assets_from_s3`<sup>Required</sup> <a name="import_assets_from_s3" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetOutputReference.property.importAssetsFromS3"></a>

```python
import_assets_from_s3: DataexchangeRevisionAssetsAssetImportAssetsFromS3List
```

- *Type:* <a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromS3List">DataexchangeRevisionAssetsAssetImportAssetsFromS3List</a>

---

##### `import_assets_from_signed_url`<sup>Required</sup> <a name="import_assets_from_signed_url" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetOutputReference.property.importAssetsFromSignedUrl"></a>

```python
import_assets_from_signed_url: DataexchangeRevisionAssetsAssetImportAssetsFromSignedUrlList
```

- *Type:* <a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromSignedUrlList">DataexchangeRevisionAssetsAssetImportAssetsFromSignedUrlList</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `updated_at`<sup>Required</sup> <a name="updated_at" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetOutputReference.property.updatedAt"></a>

```python
updated_at: str
```

- *Type:* str

---

##### `create_s3_data_access_from_s3_bucket_input`<sup>Optional</sup> <a name="create_s3_data_access_from_s3_bucket_input" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetOutputReference.property.createS3DataAccessFromS3BucketInput"></a>

```python
create_s3_data_access_from_s3_bucket_input: typing.Union[IResolvable, typing.List[DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3Bucket]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3Bucket">DataexchangeRevisionAssetsAssetCreateS3DataAccessFromS3Bucket</a>]]

---

##### `import_assets_from_s3_input`<sup>Optional</sup> <a name="import_assets_from_s3_input" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetOutputReference.property.importAssetsFromS3Input"></a>

```python
import_assets_from_s3_input: typing.Union[IResolvable, typing.List[DataexchangeRevisionAssetsAssetImportAssetsFromS3]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromS3">DataexchangeRevisionAssetsAssetImportAssetsFromS3</a>]]

---

##### `import_assets_from_signed_url_input`<sup>Optional</sup> <a name="import_assets_from_signed_url_input" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetOutputReference.property.importAssetsFromSignedUrlInput"></a>

```python
import_assets_from_signed_url_input: typing.Union[IResolvable, typing.List[DataexchangeRevisionAssetsAssetImportAssetsFromSignedUrl]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetImportAssetsFromSignedUrl">DataexchangeRevisionAssetsAssetImportAssetsFromSignedUrl</a>]]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAssetOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataexchangeRevisionAssetsAsset]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsAsset">DataexchangeRevisionAssetsAsset</a>]

---


### DataexchangeRevisionAssetsTimeoutsOutputReference <a name="DataexchangeRevisionAssetsTimeoutsOutputReference" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import dataexchange_revision_assets

dataexchangeRevisionAssets.DataexchangeRevisionAssetsTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsTimeouts">DataexchangeRevisionAssetsTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataexchangeRevisionAssetsTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.dataexchangeRevisionAssets.DataexchangeRevisionAssetsTimeouts">DataexchangeRevisionAssetsTimeouts</a>]

---



