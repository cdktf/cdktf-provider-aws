# `dataAwsCodeguruprofilerProfilingGroup` Submodule <a name="`dataAwsCodeguruprofilerProfilingGroup` Submodule" id="@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsCodeguruprofilerProfilingGroup <a name="DataAwsCodeguruprofilerProfilingGroup" id="@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroup"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.50.0/docs/data-sources/codeguruprofiler_profiling_group aws_codeguruprofiler_profiling_group}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroup.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_codeguruprofiler_profiling_group

dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroup(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroup.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroup.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroup.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroup.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroup.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroup.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroup.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroup.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroup.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroup.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.50.0/docs/data-sources/codeguruprofiler_profiling_group#name DataAwsCodeguruprofilerProfilingGroup#name}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroup.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroup.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroup.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroup.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroup.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroup.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroup.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroup.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroup.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroup.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.50.0/docs/data-sources/codeguruprofiler_profiling_group#name DataAwsCodeguruprofilerProfilingGroup#name}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroup.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroup.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroup.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroup.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroup.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroup.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroup.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroup.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroup.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroup.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroup.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroup.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroup.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroup.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroup.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroup.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroup.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroup.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroup.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroup.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroup.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroup.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroup.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroup.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroup.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroup.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroup.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroup.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroup.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroup.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroup.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroup.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroup.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroup.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroup.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroup.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroup.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroup.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroup.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroup.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataAwsCodeguruprofilerProfilingGroup resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroup.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_codeguruprofiler_profiling_group

dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroup.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroup.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroup.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_codeguruprofiler_profiling_group

dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroup.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroup.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroup.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_codeguruprofiler_profiling_group

dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroup.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroup.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroup.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_codeguruprofiler_profiling_group

dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroup.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataAwsCodeguruprofilerProfilingGroup resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroup.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroup.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAwsCodeguruprofilerProfilingGroup to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAwsCodeguruprofilerProfilingGroup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.50.0/docs/data-sources/codeguruprofiler_profiling_group#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroup.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataAwsCodeguruprofilerProfilingGroup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroup.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroup.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroup.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroup.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroup.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroup.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroup.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroup.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroup.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroup.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroup.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroup.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroup.property.agentOrchestrationConfig">agent_orchestration_config</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupAgentOrchestrationConfigList">DataAwsCodeguruprofilerProfilingGroupAgentOrchestrationConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroup.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroup.property.computePlatform">compute_platform</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroup.property.createdAt">created_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroup.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroup.property.profilingStatus">profiling_status</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupProfilingStatusList">DataAwsCodeguruprofilerProfilingGroupProfilingStatusList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroup.property.tags">tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroup.property.updatedAt">updated_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroup.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroup.property.name">name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroup.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroup.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroup.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroup.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroup.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroup.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroup.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroup.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroup.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroup.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroup.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroup.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `agent_orchestration_config`<sup>Required</sup> <a name="agent_orchestration_config" id="@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroup.property.agentOrchestrationConfig"></a>

```python
agent_orchestration_config: DataAwsCodeguruprofilerProfilingGroupAgentOrchestrationConfigList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupAgentOrchestrationConfigList">DataAwsCodeguruprofilerProfilingGroupAgentOrchestrationConfigList</a>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroup.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `compute_platform`<sup>Required</sup> <a name="compute_platform" id="@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroup.property.computePlatform"></a>

```python
compute_platform: str
```

- *Type:* str

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroup.property.createdAt"></a>

```python
created_at: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroup.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `profiling_status`<sup>Required</sup> <a name="profiling_status" id="@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroup.property.profilingStatus"></a>

```python
profiling_status: DataAwsCodeguruprofilerProfilingGroupProfilingStatusList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupProfilingStatusList">DataAwsCodeguruprofilerProfilingGroupProfilingStatusList</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroup.property.tags"></a>

```python
tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `updated_at`<sup>Required</sup> <a name="updated_at" id="@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroup.property.updatedAt"></a>

```python
updated_at: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroup.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroup.property.name"></a>

```python
name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroup.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroup.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsCodeguruprofilerProfilingGroupAgentOrchestrationConfig <a name="DataAwsCodeguruprofilerProfilingGroupAgentOrchestrationConfig" id="@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupAgentOrchestrationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupAgentOrchestrationConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_codeguruprofiler_profiling_group

dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupAgentOrchestrationConfig()
```


### DataAwsCodeguruprofilerProfilingGroupConfig <a name="DataAwsCodeguruprofilerProfilingGroupConfig" id="@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_codeguruprofiler_profiling_group

dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.50.0/docs/data-sources/codeguruprofiler_profiling_group#name DataAwsCodeguruprofilerProfilingGroup#name}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.50.0/docs/data-sources/codeguruprofiler_profiling_group#name DataAwsCodeguruprofilerProfilingGroup#name}.

---

### DataAwsCodeguruprofilerProfilingGroupProfilingStatus <a name="DataAwsCodeguruprofilerProfilingGroupProfilingStatus" id="@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupProfilingStatus"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupProfilingStatus.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_codeguruprofiler_profiling_group

dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupProfilingStatus()
```


### DataAwsCodeguruprofilerProfilingGroupProfilingStatusLatestAggregatedProfile <a name="DataAwsCodeguruprofilerProfilingGroupProfilingStatusLatestAggregatedProfile" id="@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupProfilingStatusLatestAggregatedProfile"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupProfilingStatusLatestAggregatedProfile.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_codeguruprofiler_profiling_group

dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupProfilingStatusLatestAggregatedProfile()
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsCodeguruprofilerProfilingGroupAgentOrchestrationConfigList <a name="DataAwsCodeguruprofilerProfilingGroupAgentOrchestrationConfigList" id="@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupAgentOrchestrationConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupAgentOrchestrationConfigList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_codeguruprofiler_profiling_group

dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupAgentOrchestrationConfigList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupAgentOrchestrationConfigList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupAgentOrchestrationConfigList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupAgentOrchestrationConfigList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupAgentOrchestrationConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupAgentOrchestrationConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupAgentOrchestrationConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupAgentOrchestrationConfigList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupAgentOrchestrationConfigList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupAgentOrchestrationConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupAgentOrchestrationConfigList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupAgentOrchestrationConfigList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupAgentOrchestrationConfigList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupAgentOrchestrationConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupAgentOrchestrationConfigList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupAgentOrchestrationConfigList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupAgentOrchestrationConfigList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupAgentOrchestrationConfigList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupAgentOrchestrationConfigList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsCodeguruprofilerProfilingGroupAgentOrchestrationConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupAgentOrchestrationConfigList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupAgentOrchestrationConfigList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupAgentOrchestrationConfigList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupAgentOrchestrationConfigList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupAgentOrchestrationConfigList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsCodeguruprofilerProfilingGroupAgentOrchestrationConfigOutputReference <a name="DataAwsCodeguruprofilerProfilingGroupAgentOrchestrationConfigOutputReference" id="@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupAgentOrchestrationConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupAgentOrchestrationConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_codeguruprofiler_profiling_group

dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupAgentOrchestrationConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupAgentOrchestrationConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupAgentOrchestrationConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupAgentOrchestrationConfigOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupAgentOrchestrationConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupAgentOrchestrationConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupAgentOrchestrationConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupAgentOrchestrationConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupAgentOrchestrationConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupAgentOrchestrationConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupAgentOrchestrationConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupAgentOrchestrationConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupAgentOrchestrationConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupAgentOrchestrationConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupAgentOrchestrationConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupAgentOrchestrationConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupAgentOrchestrationConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupAgentOrchestrationConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupAgentOrchestrationConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupAgentOrchestrationConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupAgentOrchestrationConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupAgentOrchestrationConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupAgentOrchestrationConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupAgentOrchestrationConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupAgentOrchestrationConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupAgentOrchestrationConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupAgentOrchestrationConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupAgentOrchestrationConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupAgentOrchestrationConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupAgentOrchestrationConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupAgentOrchestrationConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupAgentOrchestrationConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupAgentOrchestrationConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupAgentOrchestrationConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupAgentOrchestrationConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupAgentOrchestrationConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupAgentOrchestrationConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupAgentOrchestrationConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupAgentOrchestrationConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupAgentOrchestrationConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupAgentOrchestrationConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupAgentOrchestrationConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupAgentOrchestrationConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupAgentOrchestrationConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupAgentOrchestrationConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupAgentOrchestrationConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupAgentOrchestrationConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupAgentOrchestrationConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupAgentOrchestrationConfigOutputReference.property.profilingEnabled">profiling_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupAgentOrchestrationConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupAgentOrchestrationConfig">DataAwsCodeguruprofilerProfilingGroupAgentOrchestrationConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupAgentOrchestrationConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupAgentOrchestrationConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `profiling_enabled`<sup>Required</sup> <a name="profiling_enabled" id="@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupAgentOrchestrationConfigOutputReference.property.profilingEnabled"></a>

```python
profiling_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupAgentOrchestrationConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsCodeguruprofilerProfilingGroupAgentOrchestrationConfig
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupAgentOrchestrationConfig">DataAwsCodeguruprofilerProfilingGroupAgentOrchestrationConfig</a>

---


### DataAwsCodeguruprofilerProfilingGroupProfilingStatusLatestAggregatedProfileList <a name="DataAwsCodeguruprofilerProfilingGroupProfilingStatusLatestAggregatedProfileList" id="@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupProfilingStatusLatestAggregatedProfileList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupProfilingStatusLatestAggregatedProfileList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_codeguruprofiler_profiling_group

dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupProfilingStatusLatestAggregatedProfileList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupProfilingStatusLatestAggregatedProfileList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupProfilingStatusLatestAggregatedProfileList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupProfilingStatusLatestAggregatedProfileList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupProfilingStatusLatestAggregatedProfileList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupProfilingStatusLatestAggregatedProfileList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupProfilingStatusLatestAggregatedProfileList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupProfilingStatusLatestAggregatedProfileList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupProfilingStatusLatestAggregatedProfileList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupProfilingStatusLatestAggregatedProfileList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupProfilingStatusLatestAggregatedProfileList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupProfilingStatusLatestAggregatedProfileList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupProfilingStatusLatestAggregatedProfileList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupProfilingStatusLatestAggregatedProfileList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupProfilingStatusLatestAggregatedProfileList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupProfilingStatusLatestAggregatedProfileList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupProfilingStatusLatestAggregatedProfileList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupProfilingStatusLatestAggregatedProfileList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupProfilingStatusLatestAggregatedProfileList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsCodeguruprofilerProfilingGroupProfilingStatusLatestAggregatedProfileOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupProfilingStatusLatestAggregatedProfileList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupProfilingStatusLatestAggregatedProfileList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupProfilingStatusLatestAggregatedProfileList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupProfilingStatusLatestAggregatedProfileList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupProfilingStatusLatestAggregatedProfileList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsCodeguruprofilerProfilingGroupProfilingStatusLatestAggregatedProfileOutputReference <a name="DataAwsCodeguruprofilerProfilingGroupProfilingStatusLatestAggregatedProfileOutputReference" id="@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupProfilingStatusLatestAggregatedProfileOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupProfilingStatusLatestAggregatedProfileOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_codeguruprofiler_profiling_group

dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupProfilingStatusLatestAggregatedProfileOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupProfilingStatusLatestAggregatedProfileOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupProfilingStatusLatestAggregatedProfileOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupProfilingStatusLatestAggregatedProfileOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupProfilingStatusLatestAggregatedProfileOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupProfilingStatusLatestAggregatedProfileOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupProfilingStatusLatestAggregatedProfileOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupProfilingStatusLatestAggregatedProfileOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupProfilingStatusLatestAggregatedProfileOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupProfilingStatusLatestAggregatedProfileOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupProfilingStatusLatestAggregatedProfileOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupProfilingStatusLatestAggregatedProfileOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupProfilingStatusLatestAggregatedProfileOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupProfilingStatusLatestAggregatedProfileOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupProfilingStatusLatestAggregatedProfileOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupProfilingStatusLatestAggregatedProfileOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupProfilingStatusLatestAggregatedProfileOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupProfilingStatusLatestAggregatedProfileOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupProfilingStatusLatestAggregatedProfileOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupProfilingStatusLatestAggregatedProfileOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupProfilingStatusLatestAggregatedProfileOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupProfilingStatusLatestAggregatedProfileOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupProfilingStatusLatestAggregatedProfileOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupProfilingStatusLatestAggregatedProfileOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupProfilingStatusLatestAggregatedProfileOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupProfilingStatusLatestAggregatedProfileOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupProfilingStatusLatestAggregatedProfileOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupProfilingStatusLatestAggregatedProfileOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupProfilingStatusLatestAggregatedProfileOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupProfilingStatusLatestAggregatedProfileOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupProfilingStatusLatestAggregatedProfileOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupProfilingStatusLatestAggregatedProfileOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupProfilingStatusLatestAggregatedProfileOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupProfilingStatusLatestAggregatedProfileOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupProfilingStatusLatestAggregatedProfileOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupProfilingStatusLatestAggregatedProfileOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupProfilingStatusLatestAggregatedProfileOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupProfilingStatusLatestAggregatedProfileOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupProfilingStatusLatestAggregatedProfileOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupProfilingStatusLatestAggregatedProfileOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupProfilingStatusLatestAggregatedProfileOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupProfilingStatusLatestAggregatedProfileOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupProfilingStatusLatestAggregatedProfileOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupProfilingStatusLatestAggregatedProfileOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupProfilingStatusLatestAggregatedProfileOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupProfilingStatusLatestAggregatedProfileOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupProfilingStatusLatestAggregatedProfileOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupProfilingStatusLatestAggregatedProfileOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupProfilingStatusLatestAggregatedProfileOutputReference.property.period">period</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupProfilingStatusLatestAggregatedProfileOutputReference.property.start">start</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupProfilingStatusLatestAggregatedProfileOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupProfilingStatusLatestAggregatedProfile">DataAwsCodeguruprofilerProfilingGroupProfilingStatusLatestAggregatedProfile</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupProfilingStatusLatestAggregatedProfileOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupProfilingStatusLatestAggregatedProfileOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `period`<sup>Required</sup> <a name="period" id="@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupProfilingStatusLatestAggregatedProfileOutputReference.property.period"></a>

```python
period: str
```

- *Type:* str

---

##### `start`<sup>Required</sup> <a name="start" id="@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupProfilingStatusLatestAggregatedProfileOutputReference.property.start"></a>

```python
start: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupProfilingStatusLatestAggregatedProfileOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsCodeguruprofilerProfilingGroupProfilingStatusLatestAggregatedProfile
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupProfilingStatusLatestAggregatedProfile">DataAwsCodeguruprofilerProfilingGroupProfilingStatusLatestAggregatedProfile</a>

---


### DataAwsCodeguruprofilerProfilingGroupProfilingStatusList <a name="DataAwsCodeguruprofilerProfilingGroupProfilingStatusList" id="@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupProfilingStatusList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupProfilingStatusList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_codeguruprofiler_profiling_group

dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupProfilingStatusList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupProfilingStatusList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupProfilingStatusList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupProfilingStatusList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupProfilingStatusList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupProfilingStatusList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupProfilingStatusList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupProfilingStatusList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupProfilingStatusList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupProfilingStatusList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupProfilingStatusList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupProfilingStatusList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupProfilingStatusList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupProfilingStatusList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupProfilingStatusList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupProfilingStatusList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupProfilingStatusList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupProfilingStatusList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupProfilingStatusList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsCodeguruprofilerProfilingGroupProfilingStatusOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupProfilingStatusList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupProfilingStatusList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupProfilingStatusList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupProfilingStatusList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupProfilingStatusList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsCodeguruprofilerProfilingGroupProfilingStatusOutputReference <a name="DataAwsCodeguruprofilerProfilingGroupProfilingStatusOutputReference" id="@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupProfilingStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupProfilingStatusOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_codeguruprofiler_profiling_group

dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupProfilingStatusOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupProfilingStatusOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupProfilingStatusOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupProfilingStatusOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupProfilingStatusOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupProfilingStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupProfilingStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupProfilingStatusOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupProfilingStatusOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupProfilingStatusOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupProfilingStatusOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupProfilingStatusOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupProfilingStatusOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupProfilingStatusOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupProfilingStatusOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupProfilingStatusOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupProfilingStatusOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupProfilingStatusOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupProfilingStatusOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupProfilingStatusOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupProfilingStatusOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupProfilingStatusOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupProfilingStatusOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupProfilingStatusOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupProfilingStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupProfilingStatusOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupProfilingStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupProfilingStatusOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupProfilingStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupProfilingStatusOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupProfilingStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupProfilingStatusOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupProfilingStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupProfilingStatusOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupProfilingStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupProfilingStatusOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupProfilingStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupProfilingStatusOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupProfilingStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupProfilingStatusOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupProfilingStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupProfilingStatusOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupProfilingStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupProfilingStatusOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupProfilingStatusOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupProfilingStatusOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupProfilingStatusOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupProfilingStatusOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupProfilingStatusOutputReference.property.latestAgentOrchestratedAt">latest_agent_orchestrated_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupProfilingStatusOutputReference.property.latestAgentProfileReportedAt">latest_agent_profile_reported_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupProfilingStatusOutputReference.property.latestAggregatedProfile">latest_aggregated_profile</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupProfilingStatusLatestAggregatedProfileList">DataAwsCodeguruprofilerProfilingGroupProfilingStatusLatestAggregatedProfileList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupProfilingStatusOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupProfilingStatus">DataAwsCodeguruprofilerProfilingGroupProfilingStatus</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupProfilingStatusOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupProfilingStatusOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `latest_agent_orchestrated_at`<sup>Required</sup> <a name="latest_agent_orchestrated_at" id="@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupProfilingStatusOutputReference.property.latestAgentOrchestratedAt"></a>

```python
latest_agent_orchestrated_at: str
```

- *Type:* str

---

##### `latest_agent_profile_reported_at`<sup>Required</sup> <a name="latest_agent_profile_reported_at" id="@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupProfilingStatusOutputReference.property.latestAgentProfileReportedAt"></a>

```python
latest_agent_profile_reported_at: str
```

- *Type:* str

---

##### `latest_aggregated_profile`<sup>Required</sup> <a name="latest_aggregated_profile" id="@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupProfilingStatusOutputReference.property.latestAggregatedProfile"></a>

```python
latest_aggregated_profile: DataAwsCodeguruprofilerProfilingGroupProfilingStatusLatestAggregatedProfileList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupProfilingStatusLatestAggregatedProfileList">DataAwsCodeguruprofilerProfilingGroupProfilingStatusLatestAggregatedProfileList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupProfilingStatusOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsCodeguruprofilerProfilingGroupProfilingStatus
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsCodeguruprofilerProfilingGroup.DataAwsCodeguruprofilerProfilingGroupProfilingStatus">DataAwsCodeguruprofilerProfilingGroupProfilingStatus</a>

---



