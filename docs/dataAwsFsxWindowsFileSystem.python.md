# `dataAwsFsxWindowsFileSystem` Submodule <a name="`dataAwsFsxWindowsFileSystem` Submodule" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsFsxWindowsFileSystem <a name="DataAwsFsxWindowsFileSystem" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.49.0/docs/data-sources/fsx_windows_file_system aws_fsx_windows_file_system}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_fsx_windows_file_system

dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  id: str,
  tags: typing.Mapping[str] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.49.0/docs/data-sources/fsx_windows_file_system#id DataAwsFsxWindowsFileSystem#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.49.0/docs/data-sources/fsx_windows_file_system#tags DataAwsFsxWindowsFileSystem#tags}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.49.0/docs/data-sources/fsx_windows_file_system#id DataAwsFsxWindowsFileSystem#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.49.0/docs/data-sources/fsx_windows_file_system#tags DataAwsFsxWindowsFileSystem#tags}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataAwsFsxWindowsFileSystem resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_fsx_windows_file_system

dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_fsx_windows_file_system

dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_fsx_windows_file_system

dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_fsx_windows_file_system

dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataAwsFsxWindowsFileSystem resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAwsFsxWindowsFileSystem to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAwsFsxWindowsFileSystem that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.49.0/docs/data-sources/fsx_windows_file_system#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataAwsFsxWindowsFileSystem to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.property.activeDirectoryId">active_directory_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.property.aliases">aliases</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.property.auditLogConfiguration">audit_log_configuration</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemAuditLogConfigurationList">DataAwsFsxWindowsFileSystemAuditLogConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.property.automaticBackupRetentionDays">automatic_backup_retention_days</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.property.backupId">backup_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.property.copyTagsToBackups">copy_tags_to_backups</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.property.dailyAutomaticBackupStartTime">daily_automatic_backup_start_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.property.deploymentType">deployment_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.property.diskIopsConfiguration">disk_iops_configuration</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemDiskIopsConfigurationList">DataAwsFsxWindowsFileSystemDiskIopsConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.property.dnsName">dns_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.property.kmsKeyId">kms_key_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.property.networkInterfaceIds">network_interface_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.property.ownerId">owner_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.property.preferredFileServerIp">preferred_file_server_ip</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.property.preferredSubnetId">preferred_subnet_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.property.securityGroupIds">security_group_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.property.skipFinalBackup">skip_final_backup</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.property.storageCapacity">storage_capacity</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.property.storageType">storage_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.property.subnetIds">subnet_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.property.throughputCapacity">throughput_capacity</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.property.vpcId">vpc_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.property.weeklyMaintenanceStartTime">weekly_maintenance_start_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `active_directory_id`<sup>Required</sup> <a name="active_directory_id" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.property.activeDirectoryId"></a>

```python
active_directory_id: str
```

- *Type:* str

---

##### `aliases`<sup>Required</sup> <a name="aliases" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.property.aliases"></a>

```python
aliases: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `audit_log_configuration`<sup>Required</sup> <a name="audit_log_configuration" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.property.auditLogConfiguration"></a>

```python
audit_log_configuration: DataAwsFsxWindowsFileSystemAuditLogConfigurationList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemAuditLogConfigurationList">DataAwsFsxWindowsFileSystemAuditLogConfigurationList</a>

---

##### `automatic_backup_retention_days`<sup>Required</sup> <a name="automatic_backup_retention_days" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.property.automaticBackupRetentionDays"></a>

```python
automatic_backup_retention_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `backup_id`<sup>Required</sup> <a name="backup_id" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.property.backupId"></a>

```python
backup_id: str
```

- *Type:* str

---

##### `copy_tags_to_backups`<sup>Required</sup> <a name="copy_tags_to_backups" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.property.copyTagsToBackups"></a>

```python
copy_tags_to_backups: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `daily_automatic_backup_start_time`<sup>Required</sup> <a name="daily_automatic_backup_start_time" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.property.dailyAutomaticBackupStartTime"></a>

```python
daily_automatic_backup_start_time: str
```

- *Type:* str

---

##### `deployment_type`<sup>Required</sup> <a name="deployment_type" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.property.deploymentType"></a>

```python
deployment_type: str
```

- *Type:* str

---

##### `disk_iops_configuration`<sup>Required</sup> <a name="disk_iops_configuration" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.property.diskIopsConfiguration"></a>

```python
disk_iops_configuration: DataAwsFsxWindowsFileSystemDiskIopsConfigurationList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemDiskIopsConfigurationList">DataAwsFsxWindowsFileSystemDiskIopsConfigurationList</a>

---

##### `dns_name`<sup>Required</sup> <a name="dns_name" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.property.dnsName"></a>

```python
dns_name: str
```

- *Type:* str

---

##### `kms_key_id`<sup>Required</sup> <a name="kms_key_id" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.property.kmsKeyId"></a>

```python
kms_key_id: str
```

- *Type:* str

---

##### `network_interface_ids`<sup>Required</sup> <a name="network_interface_ids" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.property.networkInterfaceIds"></a>

```python
network_interface_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `owner_id`<sup>Required</sup> <a name="owner_id" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.property.ownerId"></a>

```python
owner_id: str
```

- *Type:* str

---

##### `preferred_file_server_ip`<sup>Required</sup> <a name="preferred_file_server_ip" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.property.preferredFileServerIp"></a>

```python
preferred_file_server_ip: str
```

- *Type:* str

---

##### `preferred_subnet_id`<sup>Required</sup> <a name="preferred_subnet_id" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.property.preferredSubnetId"></a>

```python
preferred_subnet_id: str
```

- *Type:* str

---

##### `security_group_ids`<sup>Required</sup> <a name="security_group_ids" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.property.securityGroupIds"></a>

```python
security_group_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `skip_final_backup`<sup>Required</sup> <a name="skip_final_backup" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.property.skipFinalBackup"></a>

```python
skip_final_backup: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `storage_capacity`<sup>Required</sup> <a name="storage_capacity" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.property.storageCapacity"></a>

```python
storage_capacity: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `storage_type`<sup>Required</sup> <a name="storage_type" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.property.storageType"></a>

```python
storage_type: str
```

- *Type:* str

---

##### `subnet_ids`<sup>Required</sup> <a name="subnet_ids" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.property.subnetIds"></a>

```python
subnet_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `throughput_capacity`<sup>Required</sup> <a name="throughput_capacity" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.property.throughputCapacity"></a>

```python
throughput_capacity: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `vpc_id`<sup>Required</sup> <a name="vpc_id" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.property.vpcId"></a>

```python
vpc_id: str
```

- *Type:* str

---

##### `weekly_maintenance_start_time`<sup>Required</sup> <a name="weekly_maintenance_start_time" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.property.weeklyMaintenanceStartTime"></a>

```python
weekly_maintenance_start_time: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystem.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsFsxWindowsFileSystemAuditLogConfiguration <a name="DataAwsFsxWindowsFileSystemAuditLogConfiguration" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemAuditLogConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemAuditLogConfiguration.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_fsx_windows_file_system

dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemAuditLogConfiguration()
```


### DataAwsFsxWindowsFileSystemConfig <a name="DataAwsFsxWindowsFileSystemConfig" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_fsx_windows_file_system

dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  id: str,
  tags: typing.Mapping[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.49.0/docs/data-sources/fsx_windows_file_system#id DataAwsFsxWindowsFileSystem#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.49.0/docs/data-sources/fsx_windows_file_system#tags DataAwsFsxWindowsFileSystem#tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.49.0/docs/data-sources/fsx_windows_file_system#id DataAwsFsxWindowsFileSystem#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.49.0/docs/data-sources/fsx_windows_file_system#tags DataAwsFsxWindowsFileSystem#tags}.

---

### DataAwsFsxWindowsFileSystemDiskIopsConfiguration <a name="DataAwsFsxWindowsFileSystemDiskIopsConfiguration" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemDiskIopsConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemDiskIopsConfiguration.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_fsx_windows_file_system

dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemDiskIopsConfiguration()
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsFsxWindowsFileSystemAuditLogConfigurationList <a name="DataAwsFsxWindowsFileSystemAuditLogConfigurationList" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemAuditLogConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemAuditLogConfigurationList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_fsx_windows_file_system

dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemAuditLogConfigurationList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemAuditLogConfigurationList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemAuditLogConfigurationList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemAuditLogConfigurationList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemAuditLogConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemAuditLogConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemAuditLogConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemAuditLogConfigurationList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemAuditLogConfigurationList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemAuditLogConfigurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemAuditLogConfigurationList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemAuditLogConfigurationList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemAuditLogConfigurationList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemAuditLogConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemAuditLogConfigurationList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemAuditLogConfigurationList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemAuditLogConfigurationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemAuditLogConfigurationList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemAuditLogConfigurationList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsFsxWindowsFileSystemAuditLogConfigurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemAuditLogConfigurationList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemAuditLogConfigurationList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemAuditLogConfigurationList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemAuditLogConfigurationList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemAuditLogConfigurationList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsFsxWindowsFileSystemAuditLogConfigurationOutputReference <a name="DataAwsFsxWindowsFileSystemAuditLogConfigurationOutputReference" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemAuditLogConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemAuditLogConfigurationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_fsx_windows_file_system

dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemAuditLogConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemAuditLogConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemAuditLogConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemAuditLogConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemAuditLogConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemAuditLogConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemAuditLogConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemAuditLogConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemAuditLogConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemAuditLogConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemAuditLogConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemAuditLogConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemAuditLogConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemAuditLogConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemAuditLogConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemAuditLogConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemAuditLogConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemAuditLogConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemAuditLogConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemAuditLogConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemAuditLogConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemAuditLogConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemAuditLogConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemAuditLogConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemAuditLogConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemAuditLogConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemAuditLogConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemAuditLogConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemAuditLogConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemAuditLogConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemAuditLogConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemAuditLogConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemAuditLogConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemAuditLogConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemAuditLogConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemAuditLogConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemAuditLogConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemAuditLogConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemAuditLogConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemAuditLogConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemAuditLogConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemAuditLogConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemAuditLogConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemAuditLogConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemAuditLogConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemAuditLogConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemAuditLogConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemAuditLogConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemAuditLogConfigurationOutputReference.property.auditLogDestination">audit_log_destination</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemAuditLogConfigurationOutputReference.property.fileAccessAuditLogLevel">file_access_audit_log_level</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemAuditLogConfigurationOutputReference.property.fileShareAccessAuditLogLevel">file_share_access_audit_log_level</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemAuditLogConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemAuditLogConfiguration">DataAwsFsxWindowsFileSystemAuditLogConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemAuditLogConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemAuditLogConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `audit_log_destination`<sup>Required</sup> <a name="audit_log_destination" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemAuditLogConfigurationOutputReference.property.auditLogDestination"></a>

```python
audit_log_destination: str
```

- *Type:* str

---

##### `file_access_audit_log_level`<sup>Required</sup> <a name="file_access_audit_log_level" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemAuditLogConfigurationOutputReference.property.fileAccessAuditLogLevel"></a>

```python
file_access_audit_log_level: str
```

- *Type:* str

---

##### `file_share_access_audit_log_level`<sup>Required</sup> <a name="file_share_access_audit_log_level" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemAuditLogConfigurationOutputReference.property.fileShareAccessAuditLogLevel"></a>

```python
file_share_access_audit_log_level: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemAuditLogConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsFsxWindowsFileSystemAuditLogConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemAuditLogConfiguration">DataAwsFsxWindowsFileSystemAuditLogConfiguration</a>

---


### DataAwsFsxWindowsFileSystemDiskIopsConfigurationList <a name="DataAwsFsxWindowsFileSystemDiskIopsConfigurationList" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemDiskIopsConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemDiskIopsConfigurationList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_fsx_windows_file_system

dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemDiskIopsConfigurationList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemDiskIopsConfigurationList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemDiskIopsConfigurationList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemDiskIopsConfigurationList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemDiskIopsConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemDiskIopsConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemDiskIopsConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemDiskIopsConfigurationList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemDiskIopsConfigurationList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemDiskIopsConfigurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemDiskIopsConfigurationList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemDiskIopsConfigurationList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemDiskIopsConfigurationList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemDiskIopsConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemDiskIopsConfigurationList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemDiskIopsConfigurationList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemDiskIopsConfigurationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemDiskIopsConfigurationList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemDiskIopsConfigurationList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsFsxWindowsFileSystemDiskIopsConfigurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemDiskIopsConfigurationList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemDiskIopsConfigurationList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemDiskIopsConfigurationList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemDiskIopsConfigurationList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemDiskIopsConfigurationList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsFsxWindowsFileSystemDiskIopsConfigurationOutputReference <a name="DataAwsFsxWindowsFileSystemDiskIopsConfigurationOutputReference" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemDiskIopsConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemDiskIopsConfigurationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_fsx_windows_file_system

dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemDiskIopsConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemDiskIopsConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemDiskIopsConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemDiskIopsConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemDiskIopsConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemDiskIopsConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemDiskIopsConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemDiskIopsConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemDiskIopsConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemDiskIopsConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemDiskIopsConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemDiskIopsConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemDiskIopsConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemDiskIopsConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemDiskIopsConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemDiskIopsConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemDiskIopsConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemDiskIopsConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemDiskIopsConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemDiskIopsConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemDiskIopsConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemDiskIopsConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemDiskIopsConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemDiskIopsConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemDiskIopsConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemDiskIopsConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemDiskIopsConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemDiskIopsConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemDiskIopsConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemDiskIopsConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemDiskIopsConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemDiskIopsConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemDiskIopsConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemDiskIopsConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemDiskIopsConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemDiskIopsConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemDiskIopsConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemDiskIopsConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemDiskIopsConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemDiskIopsConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemDiskIopsConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemDiskIopsConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemDiskIopsConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemDiskIopsConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemDiskIopsConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemDiskIopsConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemDiskIopsConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemDiskIopsConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemDiskIopsConfigurationOutputReference.property.iops">iops</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemDiskIopsConfigurationOutputReference.property.mode">mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemDiskIopsConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemDiskIopsConfiguration">DataAwsFsxWindowsFileSystemDiskIopsConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemDiskIopsConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemDiskIopsConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `iops`<sup>Required</sup> <a name="iops" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemDiskIopsConfigurationOutputReference.property.iops"></a>

```python
iops: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemDiskIopsConfigurationOutputReference.property.mode"></a>

```python
mode: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemDiskIopsConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsFsxWindowsFileSystemDiskIopsConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsFsxWindowsFileSystem.DataAwsFsxWindowsFileSystemDiskIopsConfiguration">DataAwsFsxWindowsFileSystemDiskIopsConfiguration</a>

---



