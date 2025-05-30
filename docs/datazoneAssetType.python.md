# `datazoneAssetType` Submodule <a name="`datazoneAssetType` Submodule" id="@cdktf/provider-aws.datazoneAssetType"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DatazoneAssetType <a name="DatazoneAssetType" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.0/docs/resources/datazone_asset_type aws_datazone_asset_type}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import datazone_asset_type

datazoneAssetType.DatazoneAssetType(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  domain_identifier: str,
  name: str,
  owning_project_identifier: str,
  description: str = None,
  forms_input: typing.Union[IResolvable, typing.List[DatazoneAssetTypeFormsInput]] = None,
  timeouts: DatazoneAssetTypeTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.Initializer.parameter.domainIdentifier">domain_identifier</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.0/docs/resources/datazone_asset_type#domain_identifier DatazoneAssetType#domain_identifier}. |
| <code><a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.0/docs/resources/datazone_asset_type#name DatazoneAssetType#name}. |
| <code><a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.Initializer.parameter.owningProjectIdentifier">owning_project_identifier</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.0/docs/resources/datazone_asset_type#owning_project_identifier DatazoneAssetType#owning_project_identifier}. |
| <code><a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.0/docs/resources/datazone_asset_type#description DatazoneAssetType#description}. |
| <code><a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.Initializer.parameter.formsInput">forms_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeFormsInput">DatazoneAssetTypeFormsInput</a>]]</code> | forms_input block. |
| <code><a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeTimeouts">DatazoneAssetTypeTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `domain_identifier`<sup>Required</sup> <a name="domain_identifier" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.Initializer.parameter.domainIdentifier"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.0/docs/resources/datazone_asset_type#domain_identifier DatazoneAssetType#domain_identifier}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.0/docs/resources/datazone_asset_type#name DatazoneAssetType#name}.

---

##### `owning_project_identifier`<sup>Required</sup> <a name="owning_project_identifier" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.Initializer.parameter.owningProjectIdentifier"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.0/docs/resources/datazone_asset_type#owning_project_identifier DatazoneAssetType#owning_project_identifier}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.0/docs/resources/datazone_asset_type#description DatazoneAssetType#description}.

---

##### `forms_input`<sup>Optional</sup> <a name="forms_input" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.Initializer.parameter.formsInput"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeFormsInput">DatazoneAssetTypeFormsInput</a>]]

forms_input block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.0/docs/resources/datazone_asset_type#forms_input DatazoneAssetType#forms_input}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeTimeouts">DatazoneAssetTypeTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.0/docs/resources/datazone_asset_type#timeouts DatazoneAssetType#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.putFormsInput">put_forms_input</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.resetFormsInput">reset_forms_input</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_forms_input` <a name="put_forms_input" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.putFormsInput"></a>

```python
def put_forms_input(
  value: typing.Union[IResolvable, typing.List[DatazoneAssetTypeFormsInput]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.putFormsInput.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeFormsInput">DatazoneAssetTypeFormsInput</a>]]

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.putTimeouts.parameter.create"></a>

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.0/docs/resources/datazone_asset_type#create DatazoneAssetType#create}

---

##### `reset_description` <a name="reset_description" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_forms_input` <a name="reset_forms_input" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.resetFormsInput"></a>

```python
def reset_forms_input() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DatazoneAssetType resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import datazone_asset_type

datazoneAssetType.DatazoneAssetType.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import datazone_asset_type

datazoneAssetType.DatazoneAssetType.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_aws import datazone_asset_type

datazoneAssetType.DatazoneAssetType.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_aws import datazone_asset_type

datazoneAssetType.DatazoneAssetType.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DatazoneAssetType resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DatazoneAssetType to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DatazoneAssetType that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.0/docs/resources/datazone_asset_type#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DatazoneAssetType to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.property.createdAt">created_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.property.createdBy">created_by</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.property.formsInput">forms_input</a></code> | <code><a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeFormsInputList">DatazoneAssetTypeFormsInputList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.property.revision">revision</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeTimeoutsOutputReference">DatazoneAssetTypeTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.property.domainIdentifierInput">domain_identifier_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.property.formsInputInput">forms_input_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeFormsInput">DatazoneAssetTypeFormsInput</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.property.owningProjectIdentifierInput">owning_project_identifier_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeTimeouts">DatazoneAssetTypeTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.property.domainIdentifier">domain_identifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.property.owningProjectIdentifier">owning_project_identifier</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.property.createdAt"></a>

```python
created_at: str
```

- *Type:* str

---

##### `created_by`<sup>Required</sup> <a name="created_by" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.property.createdBy"></a>

```python
created_by: str
```

- *Type:* str

---

##### `forms_input`<sup>Required</sup> <a name="forms_input" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.property.formsInput"></a>

```python
forms_input: DatazoneAssetTypeFormsInputList
```

- *Type:* <a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeFormsInputList">DatazoneAssetTypeFormsInputList</a>

---

##### `revision`<sup>Required</sup> <a name="revision" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.property.revision"></a>

```python
revision: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.property.timeouts"></a>

```python
timeouts: DatazoneAssetTypeTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeTimeoutsOutputReference">DatazoneAssetTypeTimeoutsOutputReference</a>

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `domain_identifier_input`<sup>Optional</sup> <a name="domain_identifier_input" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.property.domainIdentifierInput"></a>

```python
domain_identifier_input: str
```

- *Type:* str

---

##### `forms_input_input`<sup>Optional</sup> <a name="forms_input_input" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.property.formsInputInput"></a>

```python
forms_input_input: typing.Union[IResolvable, typing.List[DatazoneAssetTypeFormsInput]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeFormsInput">DatazoneAssetTypeFormsInput</a>]]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `owning_project_identifier_input`<sup>Optional</sup> <a name="owning_project_identifier_input" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.property.owningProjectIdentifierInput"></a>

```python
owning_project_identifier_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, DatazoneAssetTypeTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeTimeouts">DatazoneAssetTypeTimeouts</a>]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `domain_identifier`<sup>Required</sup> <a name="domain_identifier" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.property.domainIdentifier"></a>

```python
domain_identifier: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `owning_project_identifier`<sup>Required</sup> <a name="owning_project_identifier" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.property.owningProjectIdentifier"></a>

```python
owning_project_identifier: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetType.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DatazoneAssetTypeConfig <a name="DatazoneAssetTypeConfig" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import datazone_asset_type

datazoneAssetType.DatazoneAssetTypeConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  domain_identifier: str,
  name: str,
  owning_project_identifier: str,
  description: str = None,
  forms_input: typing.Union[IResolvable, typing.List[DatazoneAssetTypeFormsInput]] = None,
  timeouts: DatazoneAssetTypeTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeConfig.property.domainIdentifier">domain_identifier</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.0/docs/resources/datazone_asset_type#domain_identifier DatazoneAssetType#domain_identifier}. |
| <code><a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.0/docs/resources/datazone_asset_type#name DatazoneAssetType#name}. |
| <code><a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeConfig.property.owningProjectIdentifier">owning_project_identifier</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.0/docs/resources/datazone_asset_type#owning_project_identifier DatazoneAssetType#owning_project_identifier}. |
| <code><a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeConfig.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.0/docs/resources/datazone_asset_type#description DatazoneAssetType#description}. |
| <code><a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeConfig.property.formsInput">forms_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeFormsInput">DatazoneAssetTypeFormsInput</a>]]</code> | forms_input block. |
| <code><a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeTimeouts">DatazoneAssetTypeTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `domain_identifier`<sup>Required</sup> <a name="domain_identifier" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeConfig.property.domainIdentifier"></a>

```python
domain_identifier: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.0/docs/resources/datazone_asset_type#domain_identifier DatazoneAssetType#domain_identifier}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.0/docs/resources/datazone_asset_type#name DatazoneAssetType#name}.

---

##### `owning_project_identifier`<sup>Required</sup> <a name="owning_project_identifier" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeConfig.property.owningProjectIdentifier"></a>

```python
owning_project_identifier: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.0/docs/resources/datazone_asset_type#owning_project_identifier DatazoneAssetType#owning_project_identifier}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.0/docs/resources/datazone_asset_type#description DatazoneAssetType#description}.

---

##### `forms_input`<sup>Optional</sup> <a name="forms_input" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeConfig.property.formsInput"></a>

```python
forms_input: typing.Union[IResolvable, typing.List[DatazoneAssetTypeFormsInput]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeFormsInput">DatazoneAssetTypeFormsInput</a>]]

forms_input block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.0/docs/resources/datazone_asset_type#forms_input DatazoneAssetType#forms_input}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeConfig.property.timeouts"></a>

```python
timeouts: DatazoneAssetTypeTimeouts
```

- *Type:* <a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeTimeouts">DatazoneAssetTypeTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.0/docs/resources/datazone_asset_type#timeouts DatazoneAssetType#timeouts}

---

### DatazoneAssetTypeFormsInput <a name="DatazoneAssetTypeFormsInput" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeFormsInput"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeFormsInput.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import datazone_asset_type

datazoneAssetType.DatazoneAssetTypeFormsInput(
  map_block_key: str,
  type_identifier: str,
  type_revision: str,
  required: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeFormsInput.property.mapBlockKey">map_block_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.0/docs/resources/datazone_asset_type#map_block_key DatazoneAssetType#map_block_key}. |
| <code><a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeFormsInput.property.typeIdentifier">type_identifier</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.0/docs/resources/datazone_asset_type#type_identifier DatazoneAssetType#type_identifier}. |
| <code><a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeFormsInput.property.typeRevision">type_revision</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.0/docs/resources/datazone_asset_type#type_revision DatazoneAssetType#type_revision}. |
| <code><a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeFormsInput.property.required">required</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.0/docs/resources/datazone_asset_type#required DatazoneAssetType#required}. |

---

##### `map_block_key`<sup>Required</sup> <a name="map_block_key" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeFormsInput.property.mapBlockKey"></a>

```python
map_block_key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.0/docs/resources/datazone_asset_type#map_block_key DatazoneAssetType#map_block_key}.

---

##### `type_identifier`<sup>Required</sup> <a name="type_identifier" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeFormsInput.property.typeIdentifier"></a>

```python
type_identifier: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.0/docs/resources/datazone_asset_type#type_identifier DatazoneAssetType#type_identifier}.

---

##### `type_revision`<sup>Required</sup> <a name="type_revision" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeFormsInput.property.typeRevision"></a>

```python
type_revision: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.0/docs/resources/datazone_asset_type#type_revision DatazoneAssetType#type_revision}.

---

##### `required`<sup>Optional</sup> <a name="required" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeFormsInput.property.required"></a>

```python
required: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.0/docs/resources/datazone_asset_type#required DatazoneAssetType#required}.

---

### DatazoneAssetTypeTimeouts <a name="DatazoneAssetTypeTimeouts" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import datazone_asset_type

datazoneAssetType.DatazoneAssetTypeTimeouts(
  create: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeTimeouts.property.create">create</a></code> | <code>str</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.99.0/docs/resources/datazone_asset_type#create DatazoneAssetType#create}

---

## Classes <a name="Classes" id="Classes"></a>

### DatazoneAssetTypeFormsInputList <a name="DatazoneAssetTypeFormsInputList" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeFormsInputList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeFormsInputList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import datazone_asset_type

datazoneAssetType.DatazoneAssetTypeFormsInputList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeFormsInputList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeFormsInputList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeFormsInputList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeFormsInputList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeFormsInputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeFormsInputList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeFormsInputList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeFormsInputList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeFormsInputList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeFormsInputList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeFormsInputList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeFormsInputList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeFormsInputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeFormsInputList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeFormsInputList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeFormsInputList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeFormsInputList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeFormsInputList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DatazoneAssetTypeFormsInputOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeFormsInputList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeFormsInputList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeFormsInputList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeFormsInputList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeFormsInput">DatazoneAssetTypeFormsInput</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeFormsInputList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeFormsInputList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeFormsInputList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DatazoneAssetTypeFormsInput]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeFormsInput">DatazoneAssetTypeFormsInput</a>]]

---


### DatazoneAssetTypeFormsInputOutputReference <a name="DatazoneAssetTypeFormsInputOutputReference" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeFormsInputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeFormsInputOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import datazone_asset_type

datazoneAssetType.DatazoneAssetTypeFormsInputOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeFormsInputOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeFormsInputOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeFormsInputOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeFormsInputOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeFormsInputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeFormsInputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeFormsInputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeFormsInputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeFormsInputOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeFormsInputOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeFormsInputOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeFormsInputOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeFormsInputOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeFormsInputOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeFormsInputOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeFormsInputOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeFormsInputOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeFormsInputOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeFormsInputOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeFormsInputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeFormsInputOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeFormsInputOutputReference.resetRequired">reset_required</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeFormsInputOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeFormsInputOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeFormsInputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeFormsInputOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeFormsInputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeFormsInputOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeFormsInputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeFormsInputOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeFormsInputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeFormsInputOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeFormsInputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeFormsInputOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeFormsInputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeFormsInputOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeFormsInputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeFormsInputOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeFormsInputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeFormsInputOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeFormsInputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeFormsInputOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeFormsInputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeFormsInputOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeFormsInputOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeFormsInputOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_required` <a name="reset_required" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeFormsInputOutputReference.resetRequired"></a>

```python
def reset_required() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeFormsInputOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeFormsInputOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeFormsInputOutputReference.property.mapBlockKeyInput">map_block_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeFormsInputOutputReference.property.requiredInput">required_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeFormsInputOutputReference.property.typeIdentifierInput">type_identifier_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeFormsInputOutputReference.property.typeRevisionInput">type_revision_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeFormsInputOutputReference.property.mapBlockKey">map_block_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeFormsInputOutputReference.property.required">required</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeFormsInputOutputReference.property.typeIdentifier">type_identifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeFormsInputOutputReference.property.typeRevision">type_revision</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeFormsInputOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeFormsInput">DatazoneAssetTypeFormsInput</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeFormsInputOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeFormsInputOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `map_block_key_input`<sup>Optional</sup> <a name="map_block_key_input" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeFormsInputOutputReference.property.mapBlockKeyInput"></a>

```python
map_block_key_input: str
```

- *Type:* str

---

##### `required_input`<sup>Optional</sup> <a name="required_input" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeFormsInputOutputReference.property.requiredInput"></a>

```python
required_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `type_identifier_input`<sup>Optional</sup> <a name="type_identifier_input" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeFormsInputOutputReference.property.typeIdentifierInput"></a>

```python
type_identifier_input: str
```

- *Type:* str

---

##### `type_revision_input`<sup>Optional</sup> <a name="type_revision_input" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeFormsInputOutputReference.property.typeRevisionInput"></a>

```python
type_revision_input: str
```

- *Type:* str

---

##### `map_block_key`<sup>Required</sup> <a name="map_block_key" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeFormsInputOutputReference.property.mapBlockKey"></a>

```python
map_block_key: str
```

- *Type:* str

---

##### `required`<sup>Required</sup> <a name="required" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeFormsInputOutputReference.property.required"></a>

```python
required: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `type_identifier`<sup>Required</sup> <a name="type_identifier" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeFormsInputOutputReference.property.typeIdentifier"></a>

```python
type_identifier: str
```

- *Type:* str

---

##### `type_revision`<sup>Required</sup> <a name="type_revision" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeFormsInputOutputReference.property.typeRevision"></a>

```python
type_revision: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeFormsInputOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DatazoneAssetTypeFormsInput]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeFormsInput">DatazoneAssetTypeFormsInput</a>]

---


### DatazoneAssetTypeTimeoutsOutputReference <a name="DatazoneAssetTypeTimeoutsOutputReference" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import datazone_asset_type

datazoneAssetType.DatazoneAssetTypeTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeTimeouts">DatazoneAssetTypeTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DatazoneAssetTypeTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.datazoneAssetType.DatazoneAssetTypeTimeouts">DatazoneAssetTypeTimeouts</a>]

---



