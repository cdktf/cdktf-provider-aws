# `dataAwsImagebuilderDistributionConfigurations` Submodule <a name="`dataAwsImagebuilderDistributionConfigurations` Submodule" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfigurations"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsImagebuilderDistributionConfigurations <a name="DataAwsImagebuilderDistributionConfigurations" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurations"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/d/imagebuilder_distribution_configurations aws_imagebuilder_distribution_configurations}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurations.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_imagebuilder_distribution_configurations

dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurations(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  filter: typing.Union[IResolvable, typing.List[DataAwsImagebuilderDistributionConfigurationsFilter]] = None,
  id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurations.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurations.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurations.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurations.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurations.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurations.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurations.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurations.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurations.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurations.Initializer.parameter.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurationsFilter">DataAwsImagebuilderDistributionConfigurationsFilter</a>]]</code> | filter block. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurations.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/imagebuilder_distribution_configurations#id DataAwsImagebuilderDistributionConfigurations#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurations.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurations.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurations.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurations.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurations.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurations.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurations.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurations.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurations.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurations.Initializer.parameter.filter"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurationsFilter">DataAwsImagebuilderDistributionConfigurationsFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/imagebuilder_distribution_configurations#filter DataAwsImagebuilderDistributionConfigurations#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurations.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/imagebuilder_distribution_configurations#id DataAwsImagebuilderDistributionConfigurations#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurations.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurations.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurations.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurations.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurations.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurations.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurations.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurations.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurations.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurations.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurations.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurations.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurations.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurations.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurations.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurations.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurations.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurations.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurations.resetId">reset_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurations.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurations.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurations.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurations.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurations.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurations.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurations.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurations.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurations.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurations.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurations.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurations.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurations.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurations.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurations.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurations.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurations.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurations.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurations.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurations.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurations.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurations.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurations.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurations.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurations.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurations.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurations.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurations.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurations.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_filter` <a name="put_filter" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurations.putFilter"></a>

```python
def put_filter(
  value: typing.Union[IResolvable, typing.List[DataAwsImagebuilderDistributionConfigurationsFilter]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurations.putFilter.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurationsFilter">DataAwsImagebuilderDistributionConfigurationsFilter</a>]]

---

##### `reset_filter` <a name="reset_filter" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurations.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurations.resetId"></a>

```python
def reset_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurations.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurations.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurations.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurations.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_imagebuilder_distribution_configurations

dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurations.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurations.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurations.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_imagebuilder_distribution_configurations

dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurations.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurations.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurations.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_imagebuilder_distribution_configurations

dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurations.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurations.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurations.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurations.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurations.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurations.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurations.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurations.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurations.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurations.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurations.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurations.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurations.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurations.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurations.property.arns">arns</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurations.property.filter">filter</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurationsFilterList">DataAwsImagebuilderDistributionConfigurationsFilterList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurations.property.names">names</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurations.property.filterInput">filter_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurationsFilter">DataAwsImagebuilderDistributionConfigurationsFilter</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurations.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurations.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurations.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurations.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurations.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurations.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurations.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurations.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurations.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurations.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurations.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurations.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurations.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurations.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `arns`<sup>Required</sup> <a name="arns" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurations.property.arns"></a>

```python
arns: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurations.property.filter"></a>

```python
filter: DataAwsImagebuilderDistributionConfigurationsFilterList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurationsFilterList">DataAwsImagebuilderDistributionConfigurationsFilterList</a>

---

##### `names`<sup>Required</sup> <a name="names" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurations.property.names"></a>

```python
names: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurations.property.filterInput"></a>

```python
filter_input: typing.Union[IResolvable, typing.List[DataAwsImagebuilderDistributionConfigurationsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurationsFilter">DataAwsImagebuilderDistributionConfigurationsFilter</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurations.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurations.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurations.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurations.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsImagebuilderDistributionConfigurationsConfig <a name="DataAwsImagebuilderDistributionConfigurationsConfig" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurationsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurationsConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_imagebuilder_distribution_configurations

dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurationsConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  filter: typing.Union[IResolvable, typing.List[DataAwsImagebuilderDistributionConfigurationsFilter]] = None,
  id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurationsConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurationsConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurationsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurationsConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurationsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurationsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurationsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurationsConfig.property.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurationsFilter">DataAwsImagebuilderDistributionConfigurationsFilter</a>]]</code> | filter block. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurationsConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/imagebuilder_distribution_configurations#id DataAwsImagebuilderDistributionConfigurations#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurationsConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurationsConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurationsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurationsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurationsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurationsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurationsConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurationsConfig.property.filter"></a>

```python
filter: typing.Union[IResolvable, typing.List[DataAwsImagebuilderDistributionConfigurationsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurationsFilter">DataAwsImagebuilderDistributionConfigurationsFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/imagebuilder_distribution_configurations#filter DataAwsImagebuilderDistributionConfigurations#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurationsConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/imagebuilder_distribution_configurations#id DataAwsImagebuilderDistributionConfigurations#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsImagebuilderDistributionConfigurationsFilter <a name="DataAwsImagebuilderDistributionConfigurationsFilter" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurationsFilter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurationsFilter.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_imagebuilder_distribution_configurations

dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurationsFilter(
  name: str,
  values: typing.List[str]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurationsFilter.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/imagebuilder_distribution_configurations#name DataAwsImagebuilderDistributionConfigurations#name}. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurationsFilter.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/imagebuilder_distribution_configurations#values DataAwsImagebuilderDistributionConfigurations#values}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurationsFilter.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/imagebuilder_distribution_configurations#name DataAwsImagebuilderDistributionConfigurations#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurationsFilter.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/imagebuilder_distribution_configurations#values DataAwsImagebuilderDistributionConfigurations#values}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAwsImagebuilderDistributionConfigurationsFilterList <a name="DataAwsImagebuilderDistributionConfigurationsFilterList" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurationsFilterList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurationsFilterList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_imagebuilder_distribution_configurations

dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurationsFilterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurationsFilterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurationsFilterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurationsFilterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurationsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurationsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurationsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurationsFilterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurationsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurationsFilterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurationsFilterList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurationsFilterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurationsFilterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurationsFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurationsFilterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurationsFilterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsImagebuilderDistributionConfigurationsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurationsFilterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurationsFilterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurationsFilterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurationsFilterList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurationsFilter">DataAwsImagebuilderDistributionConfigurationsFilter</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurationsFilterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurationsFilterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurationsFilterList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataAwsImagebuilderDistributionConfigurationsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurationsFilter">DataAwsImagebuilderDistributionConfigurationsFilter</a>]]

---


### DataAwsImagebuilderDistributionConfigurationsFilterOutputReference <a name="DataAwsImagebuilderDistributionConfigurationsFilterOutputReference" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurationsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurationsFilterOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_imagebuilder_distribution_configurations

dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurationsFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurationsFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurationsFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurationsFilterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurationsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurationsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurationsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurationsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurationsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurationsFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurationsFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurationsFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurationsFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurationsFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurationsFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurationsFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurationsFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurationsFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurationsFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurationsFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurationsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurationsFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurationsFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurationsFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurationsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurationsFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurationsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurationsFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurationsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurationsFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurationsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurationsFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurationsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurationsFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurationsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurationsFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurationsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurationsFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurationsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurationsFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurationsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurationsFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurationsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurationsFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurationsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurationsFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurationsFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurationsFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurationsFilterOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurationsFilterOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurationsFilterOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurationsFilterOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurationsFilterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurationsFilter">DataAwsImagebuilderDistributionConfigurationsFilter</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurationsFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurationsFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurationsFilterOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurationsFilterOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurationsFilterOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurationsFilterOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurationsFilterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[DataAwsImagebuilderDistributionConfigurationsFilter, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfigurations.DataAwsImagebuilderDistributionConfigurationsFilter">DataAwsImagebuilderDistributionConfigurationsFilter</a>, cdktf.IResolvable]

---



