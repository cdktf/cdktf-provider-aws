# `dataAwsImagebuilderDistributionConfiguration` Submodule <a name="`dataAwsImagebuilderDistributionConfiguration` Submodule" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsImagebuilderDistributionConfiguration <a name="DataAwsImagebuilderDistributionConfiguration" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfiguration"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/d/imagebuilder_distribution_configuration aws_imagebuilder_distribution_configuration}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfiguration.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_imagebuilder_distribution_configuration

dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfiguration(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  arn: str,
  id: str = None,
  tags: typing.Mapping[str] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfiguration.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfiguration.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfiguration.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfiguration.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfiguration.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfiguration.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfiguration.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfiguration.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfiguration.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfiguration.Initializer.parameter.arn">arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/imagebuilder_distribution_configuration#arn DataAwsImagebuilderDistributionConfiguration#arn}. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfiguration.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/imagebuilder_distribution_configuration#id DataAwsImagebuilderDistributionConfiguration#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfiguration.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/imagebuilder_distribution_configuration#tags DataAwsImagebuilderDistributionConfiguration#tags}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfiguration.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfiguration.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfiguration.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfiguration.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfiguration.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfiguration.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfiguration.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfiguration.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfiguration.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfiguration.Initializer.parameter.arn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/imagebuilder_distribution_configuration#arn DataAwsImagebuilderDistributionConfiguration#arn}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfiguration.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/imagebuilder_distribution_configuration#id DataAwsImagebuilderDistributionConfiguration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfiguration.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/imagebuilder_distribution_configuration#tags DataAwsImagebuilderDistributionConfiguration#tags}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfiguration.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfiguration.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfiguration.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfiguration.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfiguration.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfiguration.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfiguration.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfiguration.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfiguration.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfiguration.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfiguration.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfiguration.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfiguration.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfiguration.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfiguration.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfiguration.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfiguration.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfiguration.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfiguration.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfiguration.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfiguration.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfiguration.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfiguration.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfiguration.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfiguration.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfiguration.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfiguration.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfiguration.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfiguration.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfiguration.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfiguration.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfiguration.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfiguration.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfiguration.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfiguration.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfiguration.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfiguration.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfiguration.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfiguration.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfiguration.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfiguration.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfiguration.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_imagebuilder_distribution_configuration

dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfiguration.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfiguration.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfiguration.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_imagebuilder_distribution_configuration

dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfiguration.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfiguration.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_imagebuilder_distribution_configuration

dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfiguration.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfiguration.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfiguration.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfiguration.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfiguration.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfiguration.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfiguration.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfiguration.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfiguration.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfiguration.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfiguration.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfiguration.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfiguration.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfiguration.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfiguration.property.dateCreated">date_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfiguration.property.dateUpdated">date_updated</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfiguration.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfiguration.property.distribution">distribution</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionList">DataAwsImagebuilderDistributionConfigurationDistributionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfiguration.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfiguration.property.arnInput">arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfiguration.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfiguration.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfiguration.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfiguration.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfiguration.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfiguration.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfiguration.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfiguration.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfiguration.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfiguration.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfiguration.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfiguration.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfiguration.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfiguration.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfiguration.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfiguration.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfiguration.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `date_created`<sup>Required</sup> <a name="date_created" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfiguration.property.dateCreated"></a>

```python
date_created: str
```

- *Type:* str

---

##### `date_updated`<sup>Required</sup> <a name="date_updated" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfiguration.property.dateUpdated"></a>

```python
date_updated: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfiguration.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `distribution`<sup>Required</sup> <a name="distribution" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfiguration.property.distribution"></a>

```python
distribution: DataAwsImagebuilderDistributionConfigurationDistributionList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionList">DataAwsImagebuilderDistributionConfigurationDistributionList</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfiguration.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `arn_input`<sup>Optional</sup> <a name="arn_input" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfiguration.property.arnInput"></a>

```python
arn_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfiguration.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfiguration.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfiguration.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfiguration.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfiguration.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfiguration.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfiguration.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsImagebuilderDistributionConfigurationConfig <a name="DataAwsImagebuilderDistributionConfigurationConfig" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_imagebuilder_distribution_configuration

dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  arn: str,
  id: str = None,
  tags: typing.Mapping[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationConfig.property.arn">arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/imagebuilder_distribution_configuration#arn DataAwsImagebuilderDistributionConfiguration#arn}. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/imagebuilder_distribution_configuration#id DataAwsImagebuilderDistributionConfiguration#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/imagebuilder_distribution_configuration#tags DataAwsImagebuilderDistributionConfiguration#tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationConfig.property.arn"></a>

```python
arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/imagebuilder_distribution_configuration#arn DataAwsImagebuilderDistributionConfiguration#arn}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/imagebuilder_distribution_configuration#id DataAwsImagebuilderDistributionConfiguration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/imagebuilder_distribution_configuration#tags DataAwsImagebuilderDistributionConfiguration#tags}.

---

### DataAwsImagebuilderDistributionConfigurationDistribution <a name="DataAwsImagebuilderDistributionConfigurationDistribution" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistribution"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistribution.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_imagebuilder_distribution_configuration

dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistribution()
```


### DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfiguration <a name="DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfiguration" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfiguration.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_imagebuilder_distribution_configuration

dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfiguration()
```


### DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermission <a name="DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermission" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermission"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermission.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_imagebuilder_distribution_configuration

dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermission()
```


### DataAwsImagebuilderDistributionConfigurationDistributionContainerDistributionConfiguration <a name="DataAwsImagebuilderDistributionConfigurationDistributionContainerDistributionConfiguration" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionContainerDistributionConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionContainerDistributionConfiguration.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_imagebuilder_distribution_configuration

dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionContainerDistributionConfiguration()
```


### DataAwsImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationTargetRepository <a name="DataAwsImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationTargetRepository" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationTargetRepository"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationTargetRepository.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_imagebuilder_distribution_configuration

dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationTargetRepository()
```


### DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfiguration <a name="DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfiguration" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfiguration.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_imagebuilder_distribution_configuration

dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfiguration()
```


### DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationLaunchTemplate <a name="DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationLaunchTemplate" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationLaunchTemplate"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationLaunchTemplate.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_imagebuilder_distribution_configuration

dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationLaunchTemplate()
```


### DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationSnapshotConfiguration <a name="DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationSnapshotConfiguration" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationSnapshotConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationSnapshotConfiguration.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_imagebuilder_distribution_configuration

dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationSnapshotConfiguration()
```


### DataAwsImagebuilderDistributionConfigurationDistributionLaunchTemplateConfiguration <a name="DataAwsImagebuilderDistributionConfigurationDistributionLaunchTemplateConfiguration" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionLaunchTemplateConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionLaunchTemplateConfiguration.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_imagebuilder_distribution_configuration

dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionLaunchTemplateConfiguration()
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermissionList <a name="DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermissionList" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermissionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermissionList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_imagebuilder_distribution_configuration

dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermissionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermissionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermissionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermissionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermissionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermissionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermissionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermissionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermissionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermissionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermissionList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermissionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermissionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermissionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermissionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermissionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermissionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermissionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermissionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermissionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermissionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermissionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermissionOutputReference <a name="DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermissionOutputReference" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermissionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermissionOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_imagebuilder_distribution_configuration

dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermissionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermissionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermissionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermissionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermissionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermissionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermissionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermissionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermissionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermissionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermissionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermissionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermissionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermissionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermissionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermissionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermissionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermissionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermissionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermissionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermissionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermissionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermissionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermissionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermissionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermissionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermissionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermissionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermissionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermissionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermissionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermissionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermissionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermissionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermissionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermissionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermissionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermissionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermissionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermissionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermissionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermissionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermissionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermissionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermissionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermissionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermissionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermissionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermissionOutputReference.property.organizationalUnitArns">organizational_unit_arns</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermissionOutputReference.property.organizationArns">organization_arns</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermissionOutputReference.property.userGroups">user_groups</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermissionOutputReference.property.userIds">user_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermissionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermission">DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermission</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermissionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermissionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `organizational_unit_arns`<sup>Required</sup> <a name="organizational_unit_arns" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermissionOutputReference.property.organizationalUnitArns"></a>

```python
organizational_unit_arns: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `organization_arns`<sup>Required</sup> <a name="organization_arns" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermissionOutputReference.property.organizationArns"></a>

```python
organization_arns: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `user_groups`<sup>Required</sup> <a name="user_groups" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermissionOutputReference.property.userGroups"></a>

```python
user_groups: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `user_ids`<sup>Required</sup> <a name="user_ids" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermissionOutputReference.property.userIds"></a>

```python
user_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermissionOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermission
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermission">DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermission</a>

---


### DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationList <a name="DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationList" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_imagebuilder_distribution_configuration

dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationOutputReference <a name="DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationOutputReference" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_imagebuilder_distribution_configuration

dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationOutputReference.property.amiTags">ami_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationOutputReference.property.kmsKeyId">kms_key_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationOutputReference.property.launchPermission">launch_permission</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermissionList">DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermissionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationOutputReference.property.targetAccountIds">target_account_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfiguration">DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `ami_tags`<sup>Required</sup> <a name="ami_tags" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationOutputReference.property.amiTags"></a>

```python
ami_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `kms_key_id`<sup>Required</sup> <a name="kms_key_id" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationOutputReference.property.kmsKeyId"></a>

```python
kms_key_id: str
```

- *Type:* str

---

##### `launch_permission`<sup>Required</sup> <a name="launch_permission" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationOutputReference.property.launchPermission"></a>

```python
launch_permission: DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermissionList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermissionList">DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationLaunchPermissionList</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `target_account_ids`<sup>Required</sup> <a name="target_account_ids" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationOutputReference.property.targetAccountIds"></a>

```python
target_account_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfiguration">DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfiguration</a>

---


### DataAwsImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationList <a name="DataAwsImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationList" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_imagebuilder_distribution_configuration

dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationOutputReference <a name="DataAwsImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationOutputReference" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_imagebuilder_distribution_configuration

dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationOutputReference.property.containerTags">container_tags</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationOutputReference.property.targetRepository">target_repository</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationTargetRepositoryList">DataAwsImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationTargetRepositoryList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionContainerDistributionConfiguration">DataAwsImagebuilderDistributionConfigurationDistributionContainerDistributionConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `container_tags`<sup>Required</sup> <a name="container_tags" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationOutputReference.property.containerTags"></a>

```python
container_tags: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `target_repository`<sup>Required</sup> <a name="target_repository" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationOutputReference.property.targetRepository"></a>

```python
target_repository: DataAwsImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationTargetRepositoryList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationTargetRepositoryList">DataAwsImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationTargetRepositoryList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsImagebuilderDistributionConfigurationDistributionContainerDistributionConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionContainerDistributionConfiguration">DataAwsImagebuilderDistributionConfigurationDistributionContainerDistributionConfiguration</a>

---


### DataAwsImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationTargetRepositoryList <a name="DataAwsImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationTargetRepositoryList" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationTargetRepositoryList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationTargetRepositoryList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_imagebuilder_distribution_configuration

dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationTargetRepositoryList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationTargetRepositoryList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationTargetRepositoryList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationTargetRepositoryList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationTargetRepositoryList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationTargetRepositoryList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationTargetRepositoryList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationTargetRepositoryList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationTargetRepositoryList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationTargetRepositoryList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationTargetRepositoryList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationTargetRepositoryList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationTargetRepositoryList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationTargetRepositoryList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationTargetRepositoryList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationTargetRepositoryList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationTargetRepositoryOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationTargetRepositoryList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationTargetRepositoryList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationTargetRepositoryList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationTargetRepositoryList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationTargetRepositoryList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationTargetRepositoryOutputReference <a name="DataAwsImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationTargetRepositoryOutputReference" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationTargetRepositoryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationTargetRepositoryOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_imagebuilder_distribution_configuration

dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationTargetRepositoryOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationTargetRepositoryOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationTargetRepositoryOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationTargetRepositoryOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationTargetRepositoryOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationTargetRepositoryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationTargetRepositoryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationTargetRepositoryOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationTargetRepositoryOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationTargetRepositoryOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationTargetRepositoryOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationTargetRepositoryOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationTargetRepositoryOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationTargetRepositoryOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationTargetRepositoryOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationTargetRepositoryOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationTargetRepositoryOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationTargetRepositoryOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationTargetRepositoryOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationTargetRepositoryOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationTargetRepositoryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationTargetRepositoryOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationTargetRepositoryOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationTargetRepositoryOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationTargetRepositoryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationTargetRepositoryOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationTargetRepositoryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationTargetRepositoryOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationTargetRepositoryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationTargetRepositoryOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationTargetRepositoryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationTargetRepositoryOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationTargetRepositoryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationTargetRepositoryOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationTargetRepositoryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationTargetRepositoryOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationTargetRepositoryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationTargetRepositoryOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationTargetRepositoryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationTargetRepositoryOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationTargetRepositoryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationTargetRepositoryOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationTargetRepositoryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationTargetRepositoryOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationTargetRepositoryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationTargetRepositoryOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationTargetRepositoryOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationTargetRepositoryOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationTargetRepositoryOutputReference.property.repositoryName">repository_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationTargetRepositoryOutputReference.property.service">service</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationTargetRepositoryOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationTargetRepository">DataAwsImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationTargetRepository</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationTargetRepositoryOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationTargetRepositoryOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `repository_name`<sup>Required</sup> <a name="repository_name" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationTargetRepositoryOutputReference.property.repositoryName"></a>

```python
repository_name: str
```

- *Type:* str

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationTargetRepositoryOutputReference.property.service"></a>

```python
service: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationTargetRepositoryOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationTargetRepository
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationTargetRepository">DataAwsImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationTargetRepository</a>

---


### DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationLaunchTemplateList <a name="DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationLaunchTemplateList" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationLaunchTemplateList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationLaunchTemplateList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_imagebuilder_distribution_configuration

dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationLaunchTemplateList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationLaunchTemplateList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationLaunchTemplateList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationLaunchTemplateList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationLaunchTemplateList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationLaunchTemplateList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationLaunchTemplateList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationLaunchTemplateList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationLaunchTemplateList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationLaunchTemplateList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationLaunchTemplateList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationLaunchTemplateList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationLaunchTemplateList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationLaunchTemplateList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationLaunchTemplateList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationLaunchTemplateList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationLaunchTemplateOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationLaunchTemplateList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationLaunchTemplateList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationLaunchTemplateList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationLaunchTemplateList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationLaunchTemplateList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationLaunchTemplateOutputReference <a name="DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationLaunchTemplateOutputReference" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationLaunchTemplateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationLaunchTemplateOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_imagebuilder_distribution_configuration

dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationLaunchTemplateOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationLaunchTemplateOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationLaunchTemplateOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationLaunchTemplateOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationLaunchTemplateOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationLaunchTemplateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationLaunchTemplateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationLaunchTemplateOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationLaunchTemplateOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationLaunchTemplateOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationLaunchTemplateOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationLaunchTemplateOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationLaunchTemplateOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationLaunchTemplateOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationLaunchTemplateOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationLaunchTemplateOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationLaunchTemplateOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationLaunchTemplateOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationLaunchTemplateOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationLaunchTemplateOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationLaunchTemplateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationLaunchTemplateOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationLaunchTemplateOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationLaunchTemplateOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationLaunchTemplateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationLaunchTemplateOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationLaunchTemplateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationLaunchTemplateOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationLaunchTemplateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationLaunchTemplateOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationLaunchTemplateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationLaunchTemplateOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationLaunchTemplateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationLaunchTemplateOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationLaunchTemplateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationLaunchTemplateOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationLaunchTemplateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationLaunchTemplateOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationLaunchTemplateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationLaunchTemplateOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationLaunchTemplateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationLaunchTemplateOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationLaunchTemplateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationLaunchTemplateOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationLaunchTemplateOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationLaunchTemplateOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationLaunchTemplateOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationLaunchTemplateOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationLaunchTemplateOutputReference.property.launchTemplateId">launch_template_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationLaunchTemplateOutputReference.property.launchTemplateName">launch_template_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationLaunchTemplateOutputReference.property.launchTemplateVersion">launch_template_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationLaunchTemplateOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationLaunchTemplate">DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationLaunchTemplate</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationLaunchTemplateOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationLaunchTemplateOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `launch_template_id`<sup>Required</sup> <a name="launch_template_id" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationLaunchTemplateOutputReference.property.launchTemplateId"></a>

```python
launch_template_id: str
```

- *Type:* str

---

##### `launch_template_name`<sup>Required</sup> <a name="launch_template_name" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationLaunchTemplateOutputReference.property.launchTemplateName"></a>

```python
launch_template_name: str
```

- *Type:* str

---

##### `launch_template_version`<sup>Required</sup> <a name="launch_template_version" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationLaunchTemplateOutputReference.property.launchTemplateVersion"></a>

```python
launch_template_version: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationLaunchTemplateOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationLaunchTemplate
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationLaunchTemplate">DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationLaunchTemplate</a>

---


### DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationList <a name="DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationList" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_imagebuilder_distribution_configuration

dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationOutputReference <a name="DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationOutputReference" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_imagebuilder_distribution_configuration

dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationOutputReference.property.accountId">account_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationOutputReference.property.enabled">enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationOutputReference.property.launchTemplate">launch_template</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationLaunchTemplateList">DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationLaunchTemplateList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationOutputReference.property.maxParallelLaunches">max_parallel_launches</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationOutputReference.property.snapshotConfiguration">snapshot_configuration</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationSnapshotConfigurationList">DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationSnapshotConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfiguration">DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationOutputReference.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationOutputReference.property.enabled"></a>

```python
enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `launch_template`<sup>Required</sup> <a name="launch_template" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationOutputReference.property.launchTemplate"></a>

```python
launch_template: DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationLaunchTemplateList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationLaunchTemplateList">DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationLaunchTemplateList</a>

---

##### `max_parallel_launches`<sup>Required</sup> <a name="max_parallel_launches" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationOutputReference.property.maxParallelLaunches"></a>

```python
max_parallel_launches: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `snapshot_configuration`<sup>Required</sup> <a name="snapshot_configuration" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationOutputReference.property.snapshotConfiguration"></a>

```python
snapshot_configuration: DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationSnapshotConfigurationList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationSnapshotConfigurationList">DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationSnapshotConfigurationList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfiguration">DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfiguration</a>

---


### DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationSnapshotConfigurationList <a name="DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationSnapshotConfigurationList" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationSnapshotConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationSnapshotConfigurationList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_imagebuilder_distribution_configuration

dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationSnapshotConfigurationList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationSnapshotConfigurationList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationSnapshotConfigurationList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationSnapshotConfigurationList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationSnapshotConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationSnapshotConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationSnapshotConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationSnapshotConfigurationList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationSnapshotConfigurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationSnapshotConfigurationList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationSnapshotConfigurationList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationSnapshotConfigurationList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationSnapshotConfigurationList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationSnapshotConfigurationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationSnapshotConfigurationList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationSnapshotConfigurationList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationSnapshotConfigurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationSnapshotConfigurationList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationSnapshotConfigurationList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationSnapshotConfigurationList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationSnapshotConfigurationList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationSnapshotConfigurationList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationSnapshotConfigurationOutputReference <a name="DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationSnapshotConfigurationOutputReference" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationSnapshotConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationSnapshotConfigurationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_imagebuilder_distribution_configuration

dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationSnapshotConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationSnapshotConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationSnapshotConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationSnapshotConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationSnapshotConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationSnapshotConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationSnapshotConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationSnapshotConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationSnapshotConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationSnapshotConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationSnapshotConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationSnapshotConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationSnapshotConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationSnapshotConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationSnapshotConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationSnapshotConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationSnapshotConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationSnapshotConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationSnapshotConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationSnapshotConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationSnapshotConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationSnapshotConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationSnapshotConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationSnapshotConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationSnapshotConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationSnapshotConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationSnapshotConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationSnapshotConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationSnapshotConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationSnapshotConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationSnapshotConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationSnapshotConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationSnapshotConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationSnapshotConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationSnapshotConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationSnapshotConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationSnapshotConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationSnapshotConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationSnapshotConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationSnapshotConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationSnapshotConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationSnapshotConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationSnapshotConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationSnapshotConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationSnapshotConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationSnapshotConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationSnapshotConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationSnapshotConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationSnapshotConfigurationOutputReference.property.targetResourceCount">target_resource_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationSnapshotConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationSnapshotConfiguration">DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationSnapshotConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationSnapshotConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationSnapshotConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `target_resource_count`<sup>Required</sup> <a name="target_resource_count" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationSnapshotConfigurationOutputReference.property.targetResourceCount"></a>

```python
target_resource_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationSnapshotConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationSnapshotConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationSnapshotConfiguration">DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationSnapshotConfiguration</a>

---


### DataAwsImagebuilderDistributionConfigurationDistributionLaunchTemplateConfigurationList <a name="DataAwsImagebuilderDistributionConfigurationDistributionLaunchTemplateConfigurationList" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionLaunchTemplateConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionLaunchTemplateConfigurationList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_imagebuilder_distribution_configuration

dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionLaunchTemplateConfigurationList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionLaunchTemplateConfigurationList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionLaunchTemplateConfigurationList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionLaunchTemplateConfigurationList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionLaunchTemplateConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionLaunchTemplateConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionLaunchTemplateConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionLaunchTemplateConfigurationList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionLaunchTemplateConfigurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionLaunchTemplateConfigurationList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionLaunchTemplateConfigurationList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionLaunchTemplateConfigurationList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionLaunchTemplateConfigurationList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionLaunchTemplateConfigurationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionLaunchTemplateConfigurationList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionLaunchTemplateConfigurationList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsImagebuilderDistributionConfigurationDistributionLaunchTemplateConfigurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionLaunchTemplateConfigurationList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionLaunchTemplateConfigurationList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionLaunchTemplateConfigurationList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionLaunchTemplateConfigurationList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionLaunchTemplateConfigurationList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsImagebuilderDistributionConfigurationDistributionLaunchTemplateConfigurationOutputReference <a name="DataAwsImagebuilderDistributionConfigurationDistributionLaunchTemplateConfigurationOutputReference" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionLaunchTemplateConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionLaunchTemplateConfigurationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_imagebuilder_distribution_configuration

dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionLaunchTemplateConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionLaunchTemplateConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionLaunchTemplateConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionLaunchTemplateConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionLaunchTemplateConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionLaunchTemplateConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionLaunchTemplateConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionLaunchTemplateConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionLaunchTemplateConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionLaunchTemplateConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionLaunchTemplateConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionLaunchTemplateConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionLaunchTemplateConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionLaunchTemplateConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionLaunchTemplateConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionLaunchTemplateConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionLaunchTemplateConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionLaunchTemplateConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionLaunchTemplateConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionLaunchTemplateConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionLaunchTemplateConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionLaunchTemplateConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionLaunchTemplateConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionLaunchTemplateConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionLaunchTemplateConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionLaunchTemplateConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionLaunchTemplateConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionLaunchTemplateConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionLaunchTemplateConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionLaunchTemplateConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionLaunchTemplateConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionLaunchTemplateConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionLaunchTemplateConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionLaunchTemplateConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionLaunchTemplateConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionLaunchTemplateConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionLaunchTemplateConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionLaunchTemplateConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionLaunchTemplateConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionLaunchTemplateConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionLaunchTemplateConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionLaunchTemplateConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionLaunchTemplateConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionLaunchTemplateConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionLaunchTemplateConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionLaunchTemplateConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionLaunchTemplateConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionLaunchTemplateConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionLaunchTemplateConfigurationOutputReference.property.accountId">account_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionLaunchTemplateConfigurationOutputReference.property.default">default</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionLaunchTemplateConfigurationOutputReference.property.launchTemplateId">launch_template_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionLaunchTemplateConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionLaunchTemplateConfiguration">DataAwsImagebuilderDistributionConfigurationDistributionLaunchTemplateConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionLaunchTemplateConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionLaunchTemplateConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionLaunchTemplateConfigurationOutputReference.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionLaunchTemplateConfigurationOutputReference.property.default"></a>

```python
default: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `launch_template_id`<sup>Required</sup> <a name="launch_template_id" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionLaunchTemplateConfigurationOutputReference.property.launchTemplateId"></a>

```python
launch_template_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionLaunchTemplateConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsImagebuilderDistributionConfigurationDistributionLaunchTemplateConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionLaunchTemplateConfiguration">DataAwsImagebuilderDistributionConfigurationDistributionLaunchTemplateConfiguration</a>

---


### DataAwsImagebuilderDistributionConfigurationDistributionList <a name="DataAwsImagebuilderDistributionConfigurationDistributionList" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_imagebuilder_distribution_configuration

dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsImagebuilderDistributionConfigurationDistributionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsImagebuilderDistributionConfigurationDistributionOutputReference <a name="DataAwsImagebuilderDistributionConfigurationDistributionOutputReference" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_imagebuilder_distribution_configuration

dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionOutputReference.property.amiDistributionConfiguration">ami_distribution_configuration</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationList">DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionOutputReference.property.containerDistributionConfiguration">container_distribution_configuration</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationList">DataAwsImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionOutputReference.property.fastLaunchConfiguration">fast_launch_configuration</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationList">DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionOutputReference.property.launchTemplateConfiguration">launch_template_configuration</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionLaunchTemplateConfigurationList">DataAwsImagebuilderDistributionConfigurationDistributionLaunchTemplateConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionOutputReference.property.licenseConfigurationArns">license_configuration_arns</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionOutputReference.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistribution">DataAwsImagebuilderDistributionConfigurationDistribution</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `ami_distribution_configuration`<sup>Required</sup> <a name="ami_distribution_configuration" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionOutputReference.property.amiDistributionConfiguration"></a>

```python
ami_distribution_configuration: DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationList">DataAwsImagebuilderDistributionConfigurationDistributionAmiDistributionConfigurationList</a>

---

##### `container_distribution_configuration`<sup>Required</sup> <a name="container_distribution_configuration" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionOutputReference.property.containerDistributionConfiguration"></a>

```python
container_distribution_configuration: DataAwsImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationList">DataAwsImagebuilderDistributionConfigurationDistributionContainerDistributionConfigurationList</a>

---

##### `fast_launch_configuration`<sup>Required</sup> <a name="fast_launch_configuration" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionOutputReference.property.fastLaunchConfiguration"></a>

```python
fast_launch_configuration: DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationList">DataAwsImagebuilderDistributionConfigurationDistributionFastLaunchConfigurationList</a>

---

##### `launch_template_configuration`<sup>Required</sup> <a name="launch_template_configuration" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionOutputReference.property.launchTemplateConfiguration"></a>

```python
launch_template_configuration: DataAwsImagebuilderDistributionConfigurationDistributionLaunchTemplateConfigurationList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionLaunchTemplateConfigurationList">DataAwsImagebuilderDistributionConfigurationDistributionLaunchTemplateConfigurationList</a>

---

##### `license_configuration_arns`<sup>Required</sup> <a name="license_configuration_arns" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionOutputReference.property.licenseConfigurationArns"></a>

```python
license_configuration_arns: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionOutputReference.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistributionOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsImagebuilderDistributionConfigurationDistribution
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsImagebuilderDistributionConfiguration.DataAwsImagebuilderDistributionConfigurationDistribution">DataAwsImagebuilderDistributionConfigurationDistribution</a>

---



