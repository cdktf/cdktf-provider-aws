# `dataAwsResourceexplorer2Search` Submodule <a name="`dataAwsResourceexplorer2Search` Submodule" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsResourceexplorer2Search <a name="DataAwsResourceexplorer2Search" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.77.0/docs/data-sources/resourceexplorer2_search aws_resourceexplorer2_search}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_resourceexplorer2_search

dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  query_string: str,
  view_arn: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search.Initializer.parameter.queryString">query_string</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.77.0/docs/data-sources/resourceexplorer2_search#query_string DataAwsResourceexplorer2Search#query_string}. |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search.Initializer.parameter.viewArn">view_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.77.0/docs/data-sources/resourceexplorer2_search#view_arn DataAwsResourceexplorer2Search#view_arn}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `query_string`<sup>Required</sup> <a name="query_string" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search.Initializer.parameter.queryString"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.77.0/docs/data-sources/resourceexplorer2_search#query_string DataAwsResourceexplorer2Search#query_string}.

---

##### `view_arn`<sup>Optional</sup> <a name="view_arn" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search.Initializer.parameter.viewArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.77.0/docs/data-sources/resourceexplorer2_search#view_arn DataAwsResourceexplorer2Search#view_arn}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search.resetViewArn">reset_view_arn</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_view_arn` <a name="reset_view_arn" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search.resetViewArn"></a>

```python
def reset_view_arn() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataAwsResourceexplorer2Search resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_resourceexplorer2_search

dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_resourceexplorer2_search

dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_resourceexplorer2_search

dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_resourceexplorer2_search

dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataAwsResourceexplorer2Search resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAwsResourceexplorer2Search to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAwsResourceexplorer2Search that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.77.0/docs/data-sources/resourceexplorer2_search#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataAwsResourceexplorer2Search to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search.property.resourceCount">resource_count</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourceCountList">DataAwsResourceexplorer2SearchResourceCountList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search.property.resources">resources</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesList">DataAwsResourceexplorer2SearchResourcesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search.property.queryStringInput">query_string_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search.property.viewArnInput">view_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search.property.queryString">query_string</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search.property.viewArn">view_arn</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `resource_count`<sup>Required</sup> <a name="resource_count" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search.property.resourceCount"></a>

```python
resource_count: DataAwsResourceexplorer2SearchResourceCountList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourceCountList">DataAwsResourceexplorer2SearchResourceCountList</a>

---

##### `resources`<sup>Required</sup> <a name="resources" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search.property.resources"></a>

```python
resources: DataAwsResourceexplorer2SearchResourcesList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesList">DataAwsResourceexplorer2SearchResourcesList</a>

---

##### `query_string_input`<sup>Optional</sup> <a name="query_string_input" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search.property.queryStringInput"></a>

```python
query_string_input: str
```

- *Type:* str

---

##### `view_arn_input`<sup>Optional</sup> <a name="view_arn_input" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search.property.viewArnInput"></a>

```python
view_arn_input: str
```

- *Type:* str

---

##### `query_string`<sup>Required</sup> <a name="query_string" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search.property.queryString"></a>

```python
query_string: str
```

- *Type:* str

---

##### `view_arn`<sup>Required</sup> <a name="view_arn" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search.property.viewArn"></a>

```python
view_arn: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2Search.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsResourceexplorer2SearchConfig <a name="DataAwsResourceexplorer2SearchConfig" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_resourceexplorer2_search

dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  query_string: str,
  view_arn: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchConfig.property.queryString">query_string</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.77.0/docs/data-sources/resourceexplorer2_search#query_string DataAwsResourceexplorer2Search#query_string}. |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchConfig.property.viewArn">view_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.77.0/docs/data-sources/resourceexplorer2_search#view_arn DataAwsResourceexplorer2Search#view_arn}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `query_string`<sup>Required</sup> <a name="query_string" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchConfig.property.queryString"></a>

```python
query_string: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.77.0/docs/data-sources/resourceexplorer2_search#query_string DataAwsResourceexplorer2Search#query_string}.

---

##### `view_arn`<sup>Optional</sup> <a name="view_arn" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchConfig.property.viewArn"></a>

```python
view_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.77.0/docs/data-sources/resourceexplorer2_search#view_arn DataAwsResourceexplorer2Search#view_arn}.

---

### DataAwsResourceexplorer2SearchResourceCount <a name="DataAwsResourceexplorer2SearchResourceCount" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourceCount"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourceCount.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_resourceexplorer2_search

dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourceCount()
```


### DataAwsResourceexplorer2SearchResources <a name="DataAwsResourceexplorer2SearchResources" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResources"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResources.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_resourceexplorer2_search

dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResources()
```


### DataAwsResourceexplorer2SearchResourcesProperties <a name="DataAwsResourceexplorer2SearchResourcesProperties" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesProperties"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesProperties.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_resourceexplorer2_search

dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesProperties()
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsResourceexplorer2SearchResourceCountList <a name="DataAwsResourceexplorer2SearchResourceCountList" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourceCountList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourceCountList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_resourceexplorer2_search

dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourceCountList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourceCountList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourceCountList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourceCountList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourceCountList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourceCountList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourceCountList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourceCountList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourceCountList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourceCountList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourceCountList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourceCountList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourceCountList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourceCountList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourceCountList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourceCountList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourceCountList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourceCountList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourceCountList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsResourceexplorer2SearchResourceCountOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourceCountList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourceCountList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourceCountList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourceCountList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourceCountList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsResourceexplorer2SearchResourceCountOutputReference <a name="DataAwsResourceexplorer2SearchResourceCountOutputReference" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourceCountOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourceCountOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_resourceexplorer2_search

dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourceCountOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourceCountOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourceCountOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourceCountOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourceCountOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourceCountOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourceCountOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourceCountOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourceCountOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourceCountOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourceCountOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourceCountOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourceCountOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourceCountOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourceCountOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourceCountOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourceCountOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourceCountOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourceCountOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourceCountOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourceCountOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourceCountOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourceCountOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourceCountOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourceCountOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourceCountOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourceCountOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourceCountOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourceCountOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourceCountOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourceCountOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourceCountOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourceCountOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourceCountOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourceCountOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourceCountOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourceCountOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourceCountOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourceCountOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourceCountOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourceCountOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourceCountOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourceCountOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourceCountOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourceCountOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourceCountOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourceCountOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourceCountOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourceCountOutputReference.property.complete">complete</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourceCountOutputReference.property.totalResources">total_resources</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourceCountOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourceCount">DataAwsResourceexplorer2SearchResourceCount</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourceCountOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourceCountOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `complete`<sup>Required</sup> <a name="complete" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourceCountOutputReference.property.complete"></a>

```python
complete: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `total_resources`<sup>Required</sup> <a name="total_resources" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourceCountOutputReference.property.totalResources"></a>

```python
total_resources: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourceCountOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsResourceexplorer2SearchResourceCount
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourceCount">DataAwsResourceexplorer2SearchResourceCount</a>

---


### DataAwsResourceexplorer2SearchResourcesList <a name="DataAwsResourceexplorer2SearchResourcesList" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_resourceexplorer2_search

dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsResourceexplorer2SearchResourcesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsResourceexplorer2SearchResourcesOutputReference <a name="DataAwsResourceexplorer2SearchResourcesOutputReference" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_resourceexplorer2_search

dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesOutputReference.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesOutputReference.property.lastReportedAt">last_reported_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesOutputReference.property.owningAccountId">owning_account_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesOutputReference.property.properties">properties</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesPropertiesList">DataAwsResourceexplorer2SearchResourcesPropertiesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesOutputReference.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesOutputReference.property.resourceType">resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesOutputReference.property.service">service</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResources">DataAwsResourceexplorer2SearchResources</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesOutputReference.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `last_reported_at`<sup>Required</sup> <a name="last_reported_at" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesOutputReference.property.lastReportedAt"></a>

```python
last_reported_at: str
```

- *Type:* str

---

##### `owning_account_id`<sup>Required</sup> <a name="owning_account_id" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesOutputReference.property.owningAccountId"></a>

```python
owning_account_id: str
```

- *Type:* str

---

##### `properties`<sup>Required</sup> <a name="properties" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesOutputReference.property.properties"></a>

```python
properties: DataAwsResourceexplorer2SearchResourcesPropertiesList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesPropertiesList">DataAwsResourceexplorer2SearchResourcesPropertiesList</a>

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesOutputReference.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `resource_type`<sup>Required</sup> <a name="resource_type" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesOutputReference.property.resourceType"></a>

```python
resource_type: str
```

- *Type:* str

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesOutputReference.property.service"></a>

```python
service: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsResourceexplorer2SearchResources
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResources">DataAwsResourceexplorer2SearchResources</a>

---


### DataAwsResourceexplorer2SearchResourcesPropertiesList <a name="DataAwsResourceexplorer2SearchResourcesPropertiesList" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesPropertiesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesPropertiesList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_resourceexplorer2_search

dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesPropertiesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesPropertiesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesPropertiesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesPropertiesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesPropertiesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesPropertiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesPropertiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesPropertiesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesPropertiesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesPropertiesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesPropertiesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesPropertiesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesPropertiesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesPropertiesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesPropertiesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesPropertiesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesPropertiesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesPropertiesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesPropertiesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsResourceexplorer2SearchResourcesPropertiesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesPropertiesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesPropertiesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesPropertiesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesPropertiesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesPropertiesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsResourceexplorer2SearchResourcesPropertiesOutputReference <a name="DataAwsResourceexplorer2SearchResourcesPropertiesOutputReference" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesPropertiesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_resourceexplorer2_search

dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesPropertiesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesPropertiesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesPropertiesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesPropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesPropertiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesPropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesPropertiesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesPropertiesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesPropertiesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesPropertiesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesPropertiesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesPropertiesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesPropertiesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesPropertiesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesPropertiesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesPropertiesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesPropertiesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesPropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesPropertiesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesPropertiesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesPropertiesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesPropertiesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesPropertiesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesPropertiesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesPropertiesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesPropertiesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesPropertiesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesPropertiesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesPropertiesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesPropertiesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesPropertiesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesPropertiesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesPropertiesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesPropertiesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesPropertiesOutputReference.property.data">data</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesPropertiesOutputReference.property.lastReportedAt">last_reported_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesPropertiesOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesPropertiesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesProperties">DataAwsResourceexplorer2SearchResourcesProperties</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesPropertiesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesPropertiesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `data`<sup>Required</sup> <a name="data" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesPropertiesOutputReference.property.data"></a>

```python
data: str
```

- *Type:* str

---

##### `last_reported_at`<sup>Required</sup> <a name="last_reported_at" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesPropertiesOutputReference.property.lastReportedAt"></a>

```python
last_reported_at: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesPropertiesOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesPropertiesOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsResourceexplorer2SearchResourcesProperties
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsResourceexplorer2Search.DataAwsResourceexplorer2SearchResourcesProperties">DataAwsResourceexplorer2SearchResourcesProperties</a>

---



