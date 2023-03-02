# `dataAwsImagebuilderImageRecipe` Submodule <a name="`dataAwsImagebuilderImageRecipe` Submodule" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsImagebuilderImageRecipe <a name="DataAwsImagebuilderImageRecipe" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipe"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/d/imagebuilder_image_recipe aws_imagebuilder_image_recipe}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipe.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_imagebuilder_image_recipe

dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipe(
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
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipe.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipe.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipe.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipe.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipe.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipe.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipe.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipe.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipe.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipe.Initializer.parameter.arn">arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/imagebuilder_image_recipe#arn DataAwsImagebuilderImageRecipe#arn}. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipe.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/imagebuilder_image_recipe#id DataAwsImagebuilderImageRecipe#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipe.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/imagebuilder_image_recipe#tags DataAwsImagebuilderImageRecipe#tags}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipe.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipe.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipe.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipe.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipe.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipe.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipe.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipe.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipe.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipe.Initializer.parameter.arn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/imagebuilder_image_recipe#arn DataAwsImagebuilderImageRecipe#arn}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipe.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/imagebuilder_image_recipe#id DataAwsImagebuilderImageRecipe#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipe.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/imagebuilder_image_recipe#tags DataAwsImagebuilderImageRecipe#tags}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipe.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipe.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipe.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipe.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipe.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipe.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipe.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipe.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipe.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipe.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipe.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipe.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipe.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipe.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipe.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipe.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipe.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipe.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipe.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipe.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipe.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipe.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipe.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipe.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipe.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipe.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipe.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipe.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipe.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipe.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipe.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipe.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipe.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipe.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipe.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipe.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipe.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipe.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipe.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipe.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipe.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipe.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipe.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipe.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipe.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipe.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipe.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipe.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipe.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipe.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipe.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipe.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipe.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_imagebuilder_image_recipe

dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipe.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipe.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipe.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_imagebuilder_image_recipe

dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipe.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipe.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipe.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_imagebuilder_image_recipe

dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipe.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipe.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipe.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipe.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipe.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipe.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipe.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipe.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipe.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipe.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipe.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipe.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipe.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipe.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipe.property.blockDeviceMapping">block_device_mapping</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeBlockDeviceMappingList">DataAwsImagebuilderImageRecipeBlockDeviceMappingList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipe.property.component">component</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeComponentList">DataAwsImagebuilderImageRecipeComponentList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipe.property.dateCreated">date_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipe.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipe.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipe.property.owner">owner</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipe.property.parentImage">parent_image</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipe.property.platform">platform</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipe.property.userDataBase64">user_data_base64</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipe.property.version">version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipe.property.workingDirectory">working_directory</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipe.property.arnInput">arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipe.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipe.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipe.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipe.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipe.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipe.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipe.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipe.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipe.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipe.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipe.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipe.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipe.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipe.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipe.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipe.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipe.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `block_device_mapping`<sup>Required</sup> <a name="block_device_mapping" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipe.property.blockDeviceMapping"></a>

```python
block_device_mapping: DataAwsImagebuilderImageRecipeBlockDeviceMappingList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeBlockDeviceMappingList">DataAwsImagebuilderImageRecipeBlockDeviceMappingList</a>

---

##### `component`<sup>Required</sup> <a name="component" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipe.property.component"></a>

```python
component: DataAwsImagebuilderImageRecipeComponentList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeComponentList">DataAwsImagebuilderImageRecipeComponentList</a>

---

##### `date_created`<sup>Required</sup> <a name="date_created" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipe.property.dateCreated"></a>

```python
date_created: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipe.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipe.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `owner`<sup>Required</sup> <a name="owner" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipe.property.owner"></a>

```python
owner: str
```

- *Type:* str

---

##### `parent_image`<sup>Required</sup> <a name="parent_image" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipe.property.parentImage"></a>

```python
parent_image: str
```

- *Type:* str

---

##### `platform`<sup>Required</sup> <a name="platform" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipe.property.platform"></a>

```python
platform: str
```

- *Type:* str

---

##### `user_data_base64`<sup>Required</sup> <a name="user_data_base64" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipe.property.userDataBase64"></a>

```python
user_data_base64: str
```

- *Type:* str

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipe.property.version"></a>

```python
version: str
```

- *Type:* str

---

##### `working_directory`<sup>Required</sup> <a name="working_directory" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipe.property.workingDirectory"></a>

```python
working_directory: str
```

- *Type:* str

---

##### `arn_input`<sup>Optional</sup> <a name="arn_input" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipe.property.arnInput"></a>

```python
arn_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipe.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipe.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipe.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipe.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipe.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipe.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipe.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsImagebuilderImageRecipeBlockDeviceMapping <a name="DataAwsImagebuilderImageRecipeBlockDeviceMapping" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeBlockDeviceMapping"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeBlockDeviceMapping.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_imagebuilder_image_recipe

dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeBlockDeviceMapping()
```


### DataAwsImagebuilderImageRecipeBlockDeviceMappingEbs <a name="DataAwsImagebuilderImageRecipeBlockDeviceMappingEbs" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeBlockDeviceMappingEbs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeBlockDeviceMappingEbs.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_imagebuilder_image_recipe

dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeBlockDeviceMappingEbs()
```


### DataAwsImagebuilderImageRecipeComponent <a name="DataAwsImagebuilderImageRecipeComponent" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeComponent"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeComponent.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_imagebuilder_image_recipe

dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeComponent()
```


### DataAwsImagebuilderImageRecipeComponentParameter <a name="DataAwsImagebuilderImageRecipeComponentParameter" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeComponentParameter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeComponentParameter.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_imagebuilder_image_recipe

dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeComponentParameter()
```


### DataAwsImagebuilderImageRecipeConfig <a name="DataAwsImagebuilderImageRecipeConfig" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_imagebuilder_image_recipe

dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeConfig(
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
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeConfig.property.arn">arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/imagebuilder_image_recipe#arn DataAwsImagebuilderImageRecipe#arn}. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/imagebuilder_image_recipe#id DataAwsImagebuilderImageRecipe#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/imagebuilder_image_recipe#tags DataAwsImagebuilderImageRecipe#tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeConfig.property.arn"></a>

```python
arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/imagebuilder_image_recipe#arn DataAwsImagebuilderImageRecipe#arn}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/imagebuilder_image_recipe#id DataAwsImagebuilderImageRecipe#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/imagebuilder_image_recipe#tags DataAwsImagebuilderImageRecipe#tags}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAwsImagebuilderImageRecipeBlockDeviceMappingEbsList <a name="DataAwsImagebuilderImageRecipeBlockDeviceMappingEbsList" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeBlockDeviceMappingEbsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeBlockDeviceMappingEbsList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_imagebuilder_image_recipe

dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeBlockDeviceMappingEbsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeBlockDeviceMappingEbsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeBlockDeviceMappingEbsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeBlockDeviceMappingEbsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeBlockDeviceMappingEbsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeBlockDeviceMappingEbsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeBlockDeviceMappingEbsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeBlockDeviceMappingEbsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeBlockDeviceMappingEbsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeBlockDeviceMappingEbsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeBlockDeviceMappingEbsList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeBlockDeviceMappingEbsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeBlockDeviceMappingEbsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeBlockDeviceMappingEbsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeBlockDeviceMappingEbsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeBlockDeviceMappingEbsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsImagebuilderImageRecipeBlockDeviceMappingEbsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeBlockDeviceMappingEbsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeBlockDeviceMappingEbsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeBlockDeviceMappingEbsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeBlockDeviceMappingEbsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeBlockDeviceMappingEbsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsImagebuilderImageRecipeBlockDeviceMappingEbsOutputReference <a name="DataAwsImagebuilderImageRecipeBlockDeviceMappingEbsOutputReference" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeBlockDeviceMappingEbsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeBlockDeviceMappingEbsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_imagebuilder_image_recipe

dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeBlockDeviceMappingEbsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeBlockDeviceMappingEbsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeBlockDeviceMappingEbsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeBlockDeviceMappingEbsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeBlockDeviceMappingEbsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeBlockDeviceMappingEbsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeBlockDeviceMappingEbsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeBlockDeviceMappingEbsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeBlockDeviceMappingEbsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeBlockDeviceMappingEbsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeBlockDeviceMappingEbsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeBlockDeviceMappingEbsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeBlockDeviceMappingEbsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeBlockDeviceMappingEbsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeBlockDeviceMappingEbsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeBlockDeviceMappingEbsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeBlockDeviceMappingEbsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeBlockDeviceMappingEbsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeBlockDeviceMappingEbsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeBlockDeviceMappingEbsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeBlockDeviceMappingEbsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeBlockDeviceMappingEbsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeBlockDeviceMappingEbsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeBlockDeviceMappingEbsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeBlockDeviceMappingEbsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeBlockDeviceMappingEbsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeBlockDeviceMappingEbsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeBlockDeviceMappingEbsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeBlockDeviceMappingEbsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeBlockDeviceMappingEbsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeBlockDeviceMappingEbsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeBlockDeviceMappingEbsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeBlockDeviceMappingEbsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeBlockDeviceMappingEbsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeBlockDeviceMappingEbsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeBlockDeviceMappingEbsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeBlockDeviceMappingEbsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeBlockDeviceMappingEbsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeBlockDeviceMappingEbsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeBlockDeviceMappingEbsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeBlockDeviceMappingEbsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeBlockDeviceMappingEbsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeBlockDeviceMappingEbsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeBlockDeviceMappingEbsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeBlockDeviceMappingEbsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeBlockDeviceMappingEbsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeBlockDeviceMappingEbsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeBlockDeviceMappingEbsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeBlockDeviceMappingEbsOutputReference.property.deleteOnTermination">delete_on_termination</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeBlockDeviceMappingEbsOutputReference.property.encrypted">encrypted</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeBlockDeviceMappingEbsOutputReference.property.iops">iops</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeBlockDeviceMappingEbsOutputReference.property.kmsKeyId">kms_key_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeBlockDeviceMappingEbsOutputReference.property.snapshotId">snapshot_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeBlockDeviceMappingEbsOutputReference.property.throughput">throughput</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeBlockDeviceMappingEbsOutputReference.property.volumeSize">volume_size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeBlockDeviceMappingEbsOutputReference.property.volumeType">volume_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeBlockDeviceMappingEbsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeBlockDeviceMappingEbs">DataAwsImagebuilderImageRecipeBlockDeviceMappingEbs</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeBlockDeviceMappingEbsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeBlockDeviceMappingEbsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `delete_on_termination`<sup>Required</sup> <a name="delete_on_termination" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeBlockDeviceMappingEbsOutputReference.property.deleteOnTermination"></a>

```python
delete_on_termination: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `encrypted`<sup>Required</sup> <a name="encrypted" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeBlockDeviceMappingEbsOutputReference.property.encrypted"></a>

```python
encrypted: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `iops`<sup>Required</sup> <a name="iops" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeBlockDeviceMappingEbsOutputReference.property.iops"></a>

```python
iops: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `kms_key_id`<sup>Required</sup> <a name="kms_key_id" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeBlockDeviceMappingEbsOutputReference.property.kmsKeyId"></a>

```python
kms_key_id: str
```

- *Type:* str

---

##### `snapshot_id`<sup>Required</sup> <a name="snapshot_id" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeBlockDeviceMappingEbsOutputReference.property.snapshotId"></a>

```python
snapshot_id: str
```

- *Type:* str

---

##### `throughput`<sup>Required</sup> <a name="throughput" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeBlockDeviceMappingEbsOutputReference.property.throughput"></a>

```python
throughput: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `volume_size`<sup>Required</sup> <a name="volume_size" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeBlockDeviceMappingEbsOutputReference.property.volumeSize"></a>

```python
volume_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `volume_type`<sup>Required</sup> <a name="volume_type" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeBlockDeviceMappingEbsOutputReference.property.volumeType"></a>

```python
volume_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeBlockDeviceMappingEbsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsImagebuilderImageRecipeBlockDeviceMappingEbs
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeBlockDeviceMappingEbs">DataAwsImagebuilderImageRecipeBlockDeviceMappingEbs</a>

---


### DataAwsImagebuilderImageRecipeBlockDeviceMappingList <a name="DataAwsImagebuilderImageRecipeBlockDeviceMappingList" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeBlockDeviceMappingList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeBlockDeviceMappingList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_imagebuilder_image_recipe

dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeBlockDeviceMappingList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeBlockDeviceMappingList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeBlockDeviceMappingList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeBlockDeviceMappingList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeBlockDeviceMappingList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeBlockDeviceMappingList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeBlockDeviceMappingList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeBlockDeviceMappingList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeBlockDeviceMappingList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeBlockDeviceMappingList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeBlockDeviceMappingList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeBlockDeviceMappingList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeBlockDeviceMappingList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeBlockDeviceMappingList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeBlockDeviceMappingList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeBlockDeviceMappingList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsImagebuilderImageRecipeBlockDeviceMappingOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeBlockDeviceMappingList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeBlockDeviceMappingList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeBlockDeviceMappingList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeBlockDeviceMappingList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeBlockDeviceMappingList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsImagebuilderImageRecipeBlockDeviceMappingOutputReference <a name="DataAwsImagebuilderImageRecipeBlockDeviceMappingOutputReference" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeBlockDeviceMappingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeBlockDeviceMappingOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_imagebuilder_image_recipe

dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeBlockDeviceMappingOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeBlockDeviceMappingOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeBlockDeviceMappingOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeBlockDeviceMappingOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeBlockDeviceMappingOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeBlockDeviceMappingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeBlockDeviceMappingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeBlockDeviceMappingOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeBlockDeviceMappingOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeBlockDeviceMappingOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeBlockDeviceMappingOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeBlockDeviceMappingOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeBlockDeviceMappingOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeBlockDeviceMappingOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeBlockDeviceMappingOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeBlockDeviceMappingOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeBlockDeviceMappingOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeBlockDeviceMappingOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeBlockDeviceMappingOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeBlockDeviceMappingOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeBlockDeviceMappingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeBlockDeviceMappingOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeBlockDeviceMappingOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeBlockDeviceMappingOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeBlockDeviceMappingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeBlockDeviceMappingOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeBlockDeviceMappingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeBlockDeviceMappingOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeBlockDeviceMappingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeBlockDeviceMappingOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeBlockDeviceMappingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeBlockDeviceMappingOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeBlockDeviceMappingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeBlockDeviceMappingOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeBlockDeviceMappingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeBlockDeviceMappingOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeBlockDeviceMappingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeBlockDeviceMappingOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeBlockDeviceMappingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeBlockDeviceMappingOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeBlockDeviceMappingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeBlockDeviceMappingOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeBlockDeviceMappingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeBlockDeviceMappingOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeBlockDeviceMappingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeBlockDeviceMappingOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeBlockDeviceMappingOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeBlockDeviceMappingOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeBlockDeviceMappingOutputReference.property.deviceName">device_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeBlockDeviceMappingOutputReference.property.ebs">ebs</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeBlockDeviceMappingEbsList">DataAwsImagebuilderImageRecipeBlockDeviceMappingEbsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeBlockDeviceMappingOutputReference.property.noDevice">no_device</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeBlockDeviceMappingOutputReference.property.virtualName">virtual_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeBlockDeviceMappingOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeBlockDeviceMapping">DataAwsImagebuilderImageRecipeBlockDeviceMapping</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeBlockDeviceMappingOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeBlockDeviceMappingOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `device_name`<sup>Required</sup> <a name="device_name" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeBlockDeviceMappingOutputReference.property.deviceName"></a>

```python
device_name: str
```

- *Type:* str

---

##### `ebs`<sup>Required</sup> <a name="ebs" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeBlockDeviceMappingOutputReference.property.ebs"></a>

```python
ebs: DataAwsImagebuilderImageRecipeBlockDeviceMappingEbsList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeBlockDeviceMappingEbsList">DataAwsImagebuilderImageRecipeBlockDeviceMappingEbsList</a>

---

##### `no_device`<sup>Required</sup> <a name="no_device" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeBlockDeviceMappingOutputReference.property.noDevice"></a>

```python
no_device: str
```

- *Type:* str

---

##### `virtual_name`<sup>Required</sup> <a name="virtual_name" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeBlockDeviceMappingOutputReference.property.virtualName"></a>

```python
virtual_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeBlockDeviceMappingOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsImagebuilderImageRecipeBlockDeviceMapping
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeBlockDeviceMapping">DataAwsImagebuilderImageRecipeBlockDeviceMapping</a>

---


### DataAwsImagebuilderImageRecipeComponentList <a name="DataAwsImagebuilderImageRecipeComponentList" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeComponentList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeComponentList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_imagebuilder_image_recipe

dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeComponentList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeComponentList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeComponentList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeComponentList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeComponentList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeComponentList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeComponentList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeComponentList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeComponentList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeComponentList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeComponentList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeComponentList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeComponentList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeComponentList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeComponentList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeComponentList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsImagebuilderImageRecipeComponentOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeComponentList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeComponentList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeComponentList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeComponentList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeComponentList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsImagebuilderImageRecipeComponentOutputReference <a name="DataAwsImagebuilderImageRecipeComponentOutputReference" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeComponentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeComponentOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_imagebuilder_image_recipe

dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeComponentOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeComponentOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeComponentOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeComponentOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeComponentOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeComponentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeComponentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeComponentOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeComponentOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeComponentOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeComponentOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeComponentOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeComponentOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeComponentOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeComponentOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeComponentOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeComponentOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeComponentOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeComponentOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeComponentOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeComponentOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeComponentOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeComponentOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeComponentOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeComponentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeComponentOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeComponentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeComponentOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeComponentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeComponentOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeComponentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeComponentOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeComponentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeComponentOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeComponentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeComponentOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeComponentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeComponentOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeComponentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeComponentOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeComponentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeComponentOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeComponentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeComponentOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeComponentOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeComponentOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeComponentOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeComponentOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeComponentOutputReference.property.componentArn">component_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeComponentOutputReference.property.parameter">parameter</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeComponentParameterList">DataAwsImagebuilderImageRecipeComponentParameterList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeComponentOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeComponent">DataAwsImagebuilderImageRecipeComponent</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeComponentOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeComponentOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `component_arn`<sup>Required</sup> <a name="component_arn" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeComponentOutputReference.property.componentArn"></a>

```python
component_arn: str
```

- *Type:* str

---

##### `parameter`<sup>Required</sup> <a name="parameter" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeComponentOutputReference.property.parameter"></a>

```python
parameter: DataAwsImagebuilderImageRecipeComponentParameterList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeComponentParameterList">DataAwsImagebuilderImageRecipeComponentParameterList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeComponentOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsImagebuilderImageRecipeComponent
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeComponent">DataAwsImagebuilderImageRecipeComponent</a>

---


### DataAwsImagebuilderImageRecipeComponentParameterList <a name="DataAwsImagebuilderImageRecipeComponentParameterList" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeComponentParameterList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeComponentParameterList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_imagebuilder_image_recipe

dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeComponentParameterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeComponentParameterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeComponentParameterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeComponentParameterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeComponentParameterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeComponentParameterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeComponentParameterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeComponentParameterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeComponentParameterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeComponentParameterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeComponentParameterList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeComponentParameterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeComponentParameterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeComponentParameterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeComponentParameterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeComponentParameterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsImagebuilderImageRecipeComponentParameterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeComponentParameterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeComponentParameterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeComponentParameterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeComponentParameterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeComponentParameterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsImagebuilderImageRecipeComponentParameterOutputReference <a name="DataAwsImagebuilderImageRecipeComponentParameterOutputReference" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeComponentParameterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeComponentParameterOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_imagebuilder_image_recipe

dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeComponentParameterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeComponentParameterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeComponentParameterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeComponentParameterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeComponentParameterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeComponentParameterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeComponentParameterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeComponentParameterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeComponentParameterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeComponentParameterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeComponentParameterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeComponentParameterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeComponentParameterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeComponentParameterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeComponentParameterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeComponentParameterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeComponentParameterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeComponentParameterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeComponentParameterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeComponentParameterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeComponentParameterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeComponentParameterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeComponentParameterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeComponentParameterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeComponentParameterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeComponentParameterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeComponentParameterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeComponentParameterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeComponentParameterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeComponentParameterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeComponentParameterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeComponentParameterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeComponentParameterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeComponentParameterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeComponentParameterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeComponentParameterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeComponentParameterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeComponentParameterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeComponentParameterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeComponentParameterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeComponentParameterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeComponentParameterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeComponentParameterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeComponentParameterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeComponentParameterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeComponentParameterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeComponentParameterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeComponentParameterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeComponentParameterOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeComponentParameterOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeComponentParameterOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeComponentParameter">DataAwsImagebuilderImageRecipeComponentParameter</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeComponentParameterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeComponentParameterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeComponentParameterOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeComponentParameterOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeComponentParameterOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsImagebuilderImageRecipeComponentParameter
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsImagebuilderImageRecipe.DataAwsImagebuilderImageRecipeComponentParameter">DataAwsImagebuilderImageRecipeComponentParameter</a>

---



