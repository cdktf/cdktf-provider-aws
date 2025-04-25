# `dataAwsSsmPatchBaselines` Submodule <a name="`dataAwsSsmPatchBaselines` Submodule" id="@cdktf/provider-aws.dataAwsSsmPatchBaselines"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsSsmPatchBaselines <a name="DataAwsSsmPatchBaselines" id="@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselines"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.96.0/docs/data-sources/ssm_patch_baselines aws_ssm_patch_baselines}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselines.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_ssm_patch_baselines

dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselines(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  default_baselines: typing.Union[bool, IResolvable] = None,
  filter: typing.Union[IResolvable, typing.List[DataAwsSsmPatchBaselinesFilter]] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselines.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselines.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselines.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselines.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselines.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselines.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselines.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselines.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselines.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselines.Initializer.parameter.defaultBaselines">default_baselines</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.96.0/docs/data-sources/ssm_patch_baselines#default_baselines DataAwsSsmPatchBaselines#default_baselines}. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselines.Initializer.parameter.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesFilter">DataAwsSsmPatchBaselinesFilter</a>]]</code> | filter block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselines.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselines.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselines.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselines.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselines.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselines.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselines.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselines.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselines.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `default_baselines`<sup>Optional</sup> <a name="default_baselines" id="@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselines.Initializer.parameter.defaultBaselines"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.96.0/docs/data-sources/ssm_patch_baselines#default_baselines DataAwsSsmPatchBaselines#default_baselines}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselines.Initializer.parameter.filter"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesFilter">DataAwsSsmPatchBaselinesFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.96.0/docs/data-sources/ssm_patch_baselines#filter DataAwsSsmPatchBaselines#filter}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselines.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselines.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselines.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselines.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselines.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselines.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselines.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselines.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselines.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselines.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselines.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselines.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselines.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselines.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselines.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselines.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselines.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselines.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselines.resetDefaultBaselines">reset_default_baselines</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselines.resetFilter">reset_filter</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselines.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselines.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselines.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselines.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselines.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselines.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselines.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselines.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselines.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselines.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselines.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselines.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselines.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselines.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselines.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselines.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselines.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselines.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselines.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselines.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselines.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselines.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselines.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselines.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselines.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselines.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselines.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselines.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselines.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselines.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_filter` <a name="put_filter" id="@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselines.putFilter"></a>

```python
def put_filter(
  value: typing.Union[IResolvable, typing.List[DataAwsSsmPatchBaselinesFilter]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselines.putFilter.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesFilter">DataAwsSsmPatchBaselinesFilter</a>]]

---

##### `reset_default_baselines` <a name="reset_default_baselines" id="@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselines.resetDefaultBaselines"></a>

```python
def reset_default_baselines() -> None
```

##### `reset_filter` <a name="reset_filter" id="@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselines.resetFilter"></a>

```python
def reset_filter() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselines.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselines.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselines.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselines.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataAwsSsmPatchBaselines resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselines.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_ssm_patch_baselines

dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselines.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselines.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselines.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_ssm_patch_baselines

dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselines.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselines.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselines.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_ssm_patch_baselines

dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselines.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselines.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselines.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_ssm_patch_baselines

dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselines.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataAwsSsmPatchBaselines resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselines.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselines.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAwsSsmPatchBaselines to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselines.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAwsSsmPatchBaselines that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.96.0/docs/data-sources/ssm_patch_baselines#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselines.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataAwsSsmPatchBaselines to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselines.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselines.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselines.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselines.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselines.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselines.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselines.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselines.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselines.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselines.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselines.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselines.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselines.property.baselineIdentities">baseline_identities</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesBaselineIdentitiesList">DataAwsSsmPatchBaselinesBaselineIdentitiesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselines.property.filter">filter</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesFilterList">DataAwsSsmPatchBaselinesFilterList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselines.property.defaultBaselinesInput">default_baselines_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselines.property.filterInput">filter_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesFilter">DataAwsSsmPatchBaselinesFilter</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselines.property.defaultBaselines">default_baselines</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselines.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselines.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselines.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselines.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselines.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselines.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselines.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselines.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselines.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselines.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselines.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselines.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `baseline_identities`<sup>Required</sup> <a name="baseline_identities" id="@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselines.property.baselineIdentities"></a>

```python
baseline_identities: DataAwsSsmPatchBaselinesBaselineIdentitiesList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesBaselineIdentitiesList">DataAwsSsmPatchBaselinesBaselineIdentitiesList</a>

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselines.property.filter"></a>

```python
filter: DataAwsSsmPatchBaselinesFilterList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesFilterList">DataAwsSsmPatchBaselinesFilterList</a>

---

##### `default_baselines_input`<sup>Optional</sup> <a name="default_baselines_input" id="@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselines.property.defaultBaselinesInput"></a>

```python
default_baselines_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselines.property.filterInput"></a>

```python
filter_input: typing.Union[IResolvable, typing.List[DataAwsSsmPatchBaselinesFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesFilter">DataAwsSsmPatchBaselinesFilter</a>]]

---

##### `default_baselines`<sup>Required</sup> <a name="default_baselines" id="@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselines.property.defaultBaselines"></a>

```python
default_baselines: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselines.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselines.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsSsmPatchBaselinesBaselineIdentities <a name="DataAwsSsmPatchBaselinesBaselineIdentities" id="@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesBaselineIdentities"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesBaselineIdentities.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_ssm_patch_baselines

dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesBaselineIdentities()
```


### DataAwsSsmPatchBaselinesConfig <a name="DataAwsSsmPatchBaselinesConfig" id="@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_ssm_patch_baselines

dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  default_baselines: typing.Union[bool, IResolvable] = None,
  filter: typing.Union[IResolvable, typing.List[DataAwsSsmPatchBaselinesFilter]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesConfig.property.defaultBaselines">default_baselines</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.96.0/docs/data-sources/ssm_patch_baselines#default_baselines DataAwsSsmPatchBaselines#default_baselines}. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesConfig.property.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesFilter">DataAwsSsmPatchBaselinesFilter</a>]]</code> | filter block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `default_baselines`<sup>Optional</sup> <a name="default_baselines" id="@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesConfig.property.defaultBaselines"></a>

```python
default_baselines: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.96.0/docs/data-sources/ssm_patch_baselines#default_baselines DataAwsSsmPatchBaselines#default_baselines}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesConfig.property.filter"></a>

```python
filter: typing.Union[IResolvable, typing.List[DataAwsSsmPatchBaselinesFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesFilter">DataAwsSsmPatchBaselinesFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.96.0/docs/data-sources/ssm_patch_baselines#filter DataAwsSsmPatchBaselines#filter}

---

### DataAwsSsmPatchBaselinesFilter <a name="DataAwsSsmPatchBaselinesFilter" id="@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesFilter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesFilter.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_ssm_patch_baselines

dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesFilter(
  key: str,
  values: typing.List[str]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesFilter.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.96.0/docs/data-sources/ssm_patch_baselines#key DataAwsSsmPatchBaselines#key}. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesFilter.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.96.0/docs/data-sources/ssm_patch_baselines#values DataAwsSsmPatchBaselines#values}. |

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesFilter.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.96.0/docs/data-sources/ssm_patch_baselines#key DataAwsSsmPatchBaselines#key}.

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesFilter.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.96.0/docs/data-sources/ssm_patch_baselines#values DataAwsSsmPatchBaselines#values}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAwsSsmPatchBaselinesBaselineIdentitiesList <a name="DataAwsSsmPatchBaselinesBaselineIdentitiesList" id="@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesBaselineIdentitiesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesBaselineIdentitiesList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_ssm_patch_baselines

dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesBaselineIdentitiesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesBaselineIdentitiesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesBaselineIdentitiesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesBaselineIdentitiesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesBaselineIdentitiesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesBaselineIdentitiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesBaselineIdentitiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesBaselineIdentitiesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesBaselineIdentitiesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesBaselineIdentitiesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesBaselineIdentitiesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesBaselineIdentitiesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesBaselineIdentitiesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesBaselineIdentitiesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesBaselineIdentitiesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesBaselineIdentitiesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesBaselineIdentitiesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesBaselineIdentitiesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesBaselineIdentitiesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsSsmPatchBaselinesBaselineIdentitiesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesBaselineIdentitiesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesBaselineIdentitiesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesBaselineIdentitiesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesBaselineIdentitiesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesBaselineIdentitiesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsSsmPatchBaselinesBaselineIdentitiesOutputReference <a name="DataAwsSsmPatchBaselinesBaselineIdentitiesOutputReference" id="@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesBaselineIdentitiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesBaselineIdentitiesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_ssm_patch_baselines

dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesBaselineIdentitiesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesBaselineIdentitiesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesBaselineIdentitiesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesBaselineIdentitiesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesBaselineIdentitiesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesBaselineIdentitiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesBaselineIdentitiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesBaselineIdentitiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesBaselineIdentitiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesBaselineIdentitiesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesBaselineIdentitiesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesBaselineIdentitiesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesBaselineIdentitiesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesBaselineIdentitiesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesBaselineIdentitiesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesBaselineIdentitiesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesBaselineIdentitiesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesBaselineIdentitiesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesBaselineIdentitiesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesBaselineIdentitiesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesBaselineIdentitiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesBaselineIdentitiesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesBaselineIdentitiesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesBaselineIdentitiesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesBaselineIdentitiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesBaselineIdentitiesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesBaselineIdentitiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesBaselineIdentitiesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesBaselineIdentitiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesBaselineIdentitiesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesBaselineIdentitiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesBaselineIdentitiesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesBaselineIdentitiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesBaselineIdentitiesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesBaselineIdentitiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesBaselineIdentitiesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesBaselineIdentitiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesBaselineIdentitiesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesBaselineIdentitiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesBaselineIdentitiesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesBaselineIdentitiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesBaselineIdentitiesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesBaselineIdentitiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesBaselineIdentitiesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesBaselineIdentitiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesBaselineIdentitiesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesBaselineIdentitiesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesBaselineIdentitiesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesBaselineIdentitiesOutputReference.property.baselineDescription">baseline_description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesBaselineIdentitiesOutputReference.property.baselineId">baseline_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesBaselineIdentitiesOutputReference.property.baselineName">baseline_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesBaselineIdentitiesOutputReference.property.defaultBaseline">default_baseline</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesBaselineIdentitiesOutputReference.property.operatingSystem">operating_system</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesBaselineIdentitiesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesBaselineIdentities">DataAwsSsmPatchBaselinesBaselineIdentities</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesBaselineIdentitiesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesBaselineIdentitiesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `baseline_description`<sup>Required</sup> <a name="baseline_description" id="@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesBaselineIdentitiesOutputReference.property.baselineDescription"></a>

```python
baseline_description: str
```

- *Type:* str

---

##### `baseline_id`<sup>Required</sup> <a name="baseline_id" id="@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesBaselineIdentitiesOutputReference.property.baselineId"></a>

```python
baseline_id: str
```

- *Type:* str

---

##### `baseline_name`<sup>Required</sup> <a name="baseline_name" id="@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesBaselineIdentitiesOutputReference.property.baselineName"></a>

```python
baseline_name: str
```

- *Type:* str

---

##### `default_baseline`<sup>Required</sup> <a name="default_baseline" id="@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesBaselineIdentitiesOutputReference.property.defaultBaseline"></a>

```python
default_baseline: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `operating_system`<sup>Required</sup> <a name="operating_system" id="@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesBaselineIdentitiesOutputReference.property.operatingSystem"></a>

```python
operating_system: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesBaselineIdentitiesOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsSsmPatchBaselinesBaselineIdentities
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesBaselineIdentities">DataAwsSsmPatchBaselinesBaselineIdentities</a>

---


### DataAwsSsmPatchBaselinesFilterList <a name="DataAwsSsmPatchBaselinesFilterList" id="@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesFilterList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesFilterList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_ssm_patch_baselines

dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesFilterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesFilterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesFilterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesFilterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesFilterList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesFilterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesFilterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesFilterList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesFilterList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesFilterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesFilterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesFilterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesFilterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsSsmPatchBaselinesFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesFilterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesFilterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesFilterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesFilterList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesFilter">DataAwsSsmPatchBaselinesFilter</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesFilterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesFilterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesFilterList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataAwsSsmPatchBaselinesFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesFilter">DataAwsSsmPatchBaselinesFilter</a>]]

---


### DataAwsSsmPatchBaselinesFilterOutputReference <a name="DataAwsSsmPatchBaselinesFilterOutputReference" id="@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesFilterOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_ssm_patch_baselines

dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesFilterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesFilterOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesFilterOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesFilterOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesFilterOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesFilterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesFilter">DataAwsSsmPatchBaselinesFilter</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesFilterOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesFilterOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesFilterOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesFilterOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesFilterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataAwsSsmPatchBaselinesFilter]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-aws.dataAwsSsmPatchBaselines.DataAwsSsmPatchBaselinesFilter">DataAwsSsmPatchBaselinesFilter</a>]

---



