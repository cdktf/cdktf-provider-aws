# `dataAwsImagebuilderContainerRecipe` Submodule <a name="`dataAwsImagebuilderContainerRecipe` Submodule" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsImagebuilderContainerRecipe <a name="DataAwsImagebuilderContainerRecipe" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipe"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/d/imagebuilder_container_recipe aws_imagebuilder_container_recipe}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipe.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_imagebuilder_container_recipe

dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipe(
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
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipe.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipe.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipe.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipe.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipe.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipe.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipe.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipe.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipe.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipe.Initializer.parameter.arn">arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/imagebuilder_container_recipe#arn DataAwsImagebuilderContainerRecipe#arn}. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipe.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/imagebuilder_container_recipe#id DataAwsImagebuilderContainerRecipe#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipe.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/imagebuilder_container_recipe#tags DataAwsImagebuilderContainerRecipe#tags}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipe.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipe.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipe.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipe.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipe.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipe.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipe.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipe.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipe.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipe.Initializer.parameter.arn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/imagebuilder_container_recipe#arn DataAwsImagebuilderContainerRecipe#arn}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipe.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/imagebuilder_container_recipe#id DataAwsImagebuilderContainerRecipe#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipe.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/imagebuilder_container_recipe#tags DataAwsImagebuilderContainerRecipe#tags}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipe.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipe.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipe.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipe.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipe.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipe.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipe.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipe.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipe.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipe.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipe.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipe.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipe.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipe.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipe.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipe.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipe.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipe.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipe.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipe.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipe.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipe.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipe.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipe.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipe.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipe.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipe.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipe.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipe.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipe.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipe.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipe.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipe.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipe.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipe.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipe.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipe.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipe.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipe.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipe.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipe.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipe.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipe.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipe.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipe.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipe.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipe.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipe.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipe.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipe.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipe.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipe.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipe.isConstruct"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_imagebuilder_container_recipe

dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipe.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipe.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipe.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_imagebuilder_container_recipe

dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipe.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipe.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipe.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_imagebuilder_container_recipe

dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipe.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipe.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipe.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipe.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipe.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipe.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipe.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipe.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipe.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipe.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipe.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipe.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipe.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipe.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipe.property.component">component</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentList">DataAwsImagebuilderContainerRecipeComponentList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipe.property.containerType">container_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipe.property.dateCreated">date_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipe.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipe.property.dockerfileTemplateData">dockerfile_template_data</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipe.property.encrypted">encrypted</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipe.property.instanceConfiguration">instance_configuration</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationList">DataAwsImagebuilderContainerRecipeInstanceConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipe.property.kmsKeyId">kms_key_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipe.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipe.property.owner">owner</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipe.property.parentImage">parent_image</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipe.property.platform">platform</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipe.property.targetRepository">target_repository</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeTargetRepositoryList">DataAwsImagebuilderContainerRecipeTargetRepositoryList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipe.property.version">version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipe.property.workingDirectory">working_directory</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipe.property.arnInput">arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipe.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipe.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipe.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipe.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipe.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipe.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipe.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipe.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipe.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipe.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipe.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipe.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipe.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipe.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipe.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipe.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipe.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `component`<sup>Required</sup> <a name="component" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipe.property.component"></a>

```python
component: DataAwsImagebuilderContainerRecipeComponentList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentList">DataAwsImagebuilderContainerRecipeComponentList</a>

---

##### `container_type`<sup>Required</sup> <a name="container_type" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipe.property.containerType"></a>

```python
container_type: str
```

- *Type:* str

---

##### `date_created`<sup>Required</sup> <a name="date_created" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipe.property.dateCreated"></a>

```python
date_created: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipe.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `dockerfile_template_data`<sup>Required</sup> <a name="dockerfile_template_data" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipe.property.dockerfileTemplateData"></a>

```python
dockerfile_template_data: str
```

- *Type:* str

---

##### `encrypted`<sup>Required</sup> <a name="encrypted" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipe.property.encrypted"></a>

```python
encrypted: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `instance_configuration`<sup>Required</sup> <a name="instance_configuration" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipe.property.instanceConfiguration"></a>

```python
instance_configuration: DataAwsImagebuilderContainerRecipeInstanceConfigurationList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationList">DataAwsImagebuilderContainerRecipeInstanceConfigurationList</a>

---

##### `kms_key_id`<sup>Required</sup> <a name="kms_key_id" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipe.property.kmsKeyId"></a>

```python
kms_key_id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipe.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `owner`<sup>Required</sup> <a name="owner" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipe.property.owner"></a>

```python
owner: str
```

- *Type:* str

---

##### `parent_image`<sup>Required</sup> <a name="parent_image" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipe.property.parentImage"></a>

```python
parent_image: str
```

- *Type:* str

---

##### `platform`<sup>Required</sup> <a name="platform" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipe.property.platform"></a>

```python
platform: str
```

- *Type:* str

---

##### `target_repository`<sup>Required</sup> <a name="target_repository" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipe.property.targetRepository"></a>

```python
target_repository: DataAwsImagebuilderContainerRecipeTargetRepositoryList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeTargetRepositoryList">DataAwsImagebuilderContainerRecipeTargetRepositoryList</a>

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipe.property.version"></a>

```python
version: str
```

- *Type:* str

---

##### `working_directory`<sup>Required</sup> <a name="working_directory" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipe.property.workingDirectory"></a>

```python
working_directory: str
```

- *Type:* str

---

##### `arn_input`<sup>Optional</sup> <a name="arn_input" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipe.property.arnInput"></a>

```python
arn_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipe.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipe.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipe.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipe.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipe.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipe.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipe.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsImagebuilderContainerRecipeComponent <a name="DataAwsImagebuilderContainerRecipeComponent" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponent"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponent.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_imagebuilder_container_recipe

dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponent()
```


### DataAwsImagebuilderContainerRecipeComponentParameter <a name="DataAwsImagebuilderContainerRecipeComponentParameter" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentParameter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentParameter.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_imagebuilder_container_recipe

dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentParameter()
```


### DataAwsImagebuilderContainerRecipeConfig <a name="DataAwsImagebuilderContainerRecipeConfig" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_imagebuilder_container_recipe

dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeConfig(
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
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeConfig.property.arn">arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/imagebuilder_container_recipe#arn DataAwsImagebuilderContainerRecipe#arn}. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/imagebuilder_container_recipe#id DataAwsImagebuilderContainerRecipe#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/imagebuilder_container_recipe#tags DataAwsImagebuilderContainerRecipe#tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeConfig.property.arn"></a>

```python
arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/imagebuilder_container_recipe#arn DataAwsImagebuilderContainerRecipe#arn}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/imagebuilder_container_recipe#id DataAwsImagebuilderContainerRecipe#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/imagebuilder_container_recipe#tags DataAwsImagebuilderContainerRecipe#tags}.

---

### DataAwsImagebuilderContainerRecipeInstanceConfiguration <a name="DataAwsImagebuilderContainerRecipeInstanceConfiguration" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfiguration.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_imagebuilder_container_recipe

dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfiguration()
```


### DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMapping <a name="DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMapping" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMapping"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMapping.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_imagebuilder_container_recipe

dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMapping()
```


### DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbs <a name="DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbs" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbs.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_imagebuilder_container_recipe

dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbs()
```


### DataAwsImagebuilderContainerRecipeTargetRepository <a name="DataAwsImagebuilderContainerRecipeTargetRepository" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeTargetRepository"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeTargetRepository.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_imagebuilder_container_recipe

dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeTargetRepository()
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsImagebuilderContainerRecipeComponentList <a name="DataAwsImagebuilderContainerRecipeComponentList" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_imagebuilder_container_recipe

dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsImagebuilderContainerRecipeComponentOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsImagebuilderContainerRecipeComponentOutputReference <a name="DataAwsImagebuilderContainerRecipeComponentOutputReference" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_imagebuilder_container_recipe

dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentOutputReference.property.componentArn">component_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentOutputReference.property.parameter">parameter</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentParameterList">DataAwsImagebuilderContainerRecipeComponentParameterList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponent">DataAwsImagebuilderContainerRecipeComponent</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `component_arn`<sup>Required</sup> <a name="component_arn" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentOutputReference.property.componentArn"></a>

```python
component_arn: str
```

- *Type:* str

---

##### `parameter`<sup>Required</sup> <a name="parameter" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentOutputReference.property.parameter"></a>

```python
parameter: DataAwsImagebuilderContainerRecipeComponentParameterList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentParameterList">DataAwsImagebuilderContainerRecipeComponentParameterList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsImagebuilderContainerRecipeComponent
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponent">DataAwsImagebuilderContainerRecipeComponent</a>

---


### DataAwsImagebuilderContainerRecipeComponentParameterList <a name="DataAwsImagebuilderContainerRecipeComponentParameterList" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentParameterList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentParameterList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_imagebuilder_container_recipe

dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentParameterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentParameterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentParameterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentParameterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentParameterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentParameterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentParameterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentParameterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentParameterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentParameterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentParameterList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentParameterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentParameterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentParameterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentParameterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentParameterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsImagebuilderContainerRecipeComponentParameterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentParameterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentParameterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentParameterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentParameterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentParameterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsImagebuilderContainerRecipeComponentParameterOutputReference <a name="DataAwsImagebuilderContainerRecipeComponentParameterOutputReference" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentParameterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentParameterOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_imagebuilder_container_recipe

dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentParameterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentParameterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentParameterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentParameterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentParameterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentParameterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentParameterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentParameterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentParameterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentParameterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentParameterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentParameterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentParameterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentParameterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentParameterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentParameterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentParameterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentParameterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentParameterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentParameterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentParameterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentParameterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentParameterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentParameterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentParameterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentParameterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentParameterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentParameterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentParameterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentParameterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentParameterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentParameterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentParameterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentParameterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentParameterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentParameterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentParameterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentParameterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentParameterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentParameterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentParameterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentParameterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentParameterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentParameterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentParameterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentParameterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentParameterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentParameterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentParameterOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentParameterOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentParameterOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentParameter">DataAwsImagebuilderContainerRecipeComponentParameter</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentParameterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentParameterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentParameterOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentParameterOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentParameterOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsImagebuilderContainerRecipeComponentParameter
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeComponentParameter">DataAwsImagebuilderContainerRecipeComponentParameter</a>

---


### DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsList <a name="DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsList" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_imagebuilder_container_recipe

dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference <a name="DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_imagebuilder_container_recipe

dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.property.deleteOnTermination">delete_on_termination</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.property.encrypted">encrypted</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.property.iops">iops</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.property.kmsKeyId">kms_key_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.property.snapshotId">snapshot_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.property.throughput">throughput</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.property.volumeSize">volume_size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.property.volumeType">volume_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbs">DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbs</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `delete_on_termination`<sup>Required</sup> <a name="delete_on_termination" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.property.deleteOnTermination"></a>

```python
delete_on_termination: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `encrypted`<sup>Required</sup> <a name="encrypted" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.property.encrypted"></a>

```python
encrypted: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `iops`<sup>Required</sup> <a name="iops" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.property.iops"></a>

```python
iops: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `kms_key_id`<sup>Required</sup> <a name="kms_key_id" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.property.kmsKeyId"></a>

```python
kms_key_id: str
```

- *Type:* str

---

##### `snapshot_id`<sup>Required</sup> <a name="snapshot_id" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.property.snapshotId"></a>

```python
snapshot_id: str
```

- *Type:* str

---

##### `throughput`<sup>Required</sup> <a name="throughput" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.property.throughput"></a>

```python
throughput: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `volume_size`<sup>Required</sup> <a name="volume_size" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.property.volumeSize"></a>

```python
volume_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `volume_type`<sup>Required</sup> <a name="volume_type" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.property.volumeType"></a>

```python
volume_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbs
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbs">DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbs</a>

---


### DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingList <a name="DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingList" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_imagebuilder_container_recipe

dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingOutputReference <a name="DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingOutputReference" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_imagebuilder_container_recipe

dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingOutputReference.property.deviceName">device_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingOutputReference.property.ebs">ebs</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsList">DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingOutputReference.property.noDevice">no_device</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingOutputReference.property.virtualName">virtual_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMapping">DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMapping</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `device_name`<sup>Required</sup> <a name="device_name" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingOutputReference.property.deviceName"></a>

```python
device_name: str
```

- *Type:* str

---

##### `ebs`<sup>Required</sup> <a name="ebs" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingOutputReference.property.ebs"></a>

```python
ebs: DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsList">DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingEbsList</a>

---

##### `no_device`<sup>Required</sup> <a name="no_device" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingOutputReference.property.noDevice"></a>

```python
no_device: str
```

- *Type:* str

---

##### `virtual_name`<sup>Required</sup> <a name="virtual_name" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingOutputReference.property.virtualName"></a>

```python
virtual_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMapping
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMapping">DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMapping</a>

---


### DataAwsImagebuilderContainerRecipeInstanceConfigurationList <a name="DataAwsImagebuilderContainerRecipeInstanceConfigurationList" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_imagebuilder_container_recipe

dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsImagebuilderContainerRecipeInstanceConfigurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsImagebuilderContainerRecipeInstanceConfigurationOutputReference <a name="DataAwsImagebuilderContainerRecipeInstanceConfigurationOutputReference" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_imagebuilder_container_recipe

dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationOutputReference.property.blockDeviceMapping">block_device_mapping</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingList">DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationOutputReference.property.image">image</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfiguration">DataAwsImagebuilderContainerRecipeInstanceConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `block_device_mapping`<sup>Required</sup> <a name="block_device_mapping" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationOutputReference.property.blockDeviceMapping"></a>

```python
block_device_mapping: DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingList
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingList">DataAwsImagebuilderContainerRecipeInstanceConfigurationBlockDeviceMappingList</a>

---

##### `image`<sup>Required</sup> <a name="image" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationOutputReference.property.image"></a>

```python
image: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsImagebuilderContainerRecipeInstanceConfiguration
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeInstanceConfiguration">DataAwsImagebuilderContainerRecipeInstanceConfiguration</a>

---


### DataAwsImagebuilderContainerRecipeTargetRepositoryList <a name="DataAwsImagebuilderContainerRecipeTargetRepositoryList" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeTargetRepositoryList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeTargetRepositoryList.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_imagebuilder_container_recipe

dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeTargetRepositoryList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeTargetRepositoryList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeTargetRepositoryList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeTargetRepositoryList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeTargetRepositoryList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeTargetRepositoryList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeTargetRepositoryList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeTargetRepositoryList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeTargetRepositoryList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeTargetRepositoryList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeTargetRepositoryList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeTargetRepositoryList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeTargetRepositoryList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeTargetRepositoryList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeTargetRepositoryList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeTargetRepositoryList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsImagebuilderContainerRecipeTargetRepositoryOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeTargetRepositoryList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeTargetRepositoryList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeTargetRepositoryList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeTargetRepositoryList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeTargetRepositoryList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsImagebuilderContainerRecipeTargetRepositoryOutputReference <a name="DataAwsImagebuilderContainerRecipeTargetRepositoryOutputReference" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeTargetRepositoryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeTargetRepositoryOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_aws import data_aws_imagebuilder_container_recipe

dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeTargetRepositoryOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeTargetRepositoryOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeTargetRepositoryOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeTargetRepositoryOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeTargetRepositoryOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeTargetRepositoryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeTargetRepositoryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeTargetRepositoryOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeTargetRepositoryOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeTargetRepositoryOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeTargetRepositoryOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeTargetRepositoryOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeTargetRepositoryOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeTargetRepositoryOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeTargetRepositoryOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeTargetRepositoryOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeTargetRepositoryOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeTargetRepositoryOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeTargetRepositoryOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeTargetRepositoryOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeTargetRepositoryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeTargetRepositoryOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeTargetRepositoryOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeTargetRepositoryOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeTargetRepositoryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeTargetRepositoryOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeTargetRepositoryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeTargetRepositoryOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeTargetRepositoryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeTargetRepositoryOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeTargetRepositoryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeTargetRepositoryOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeTargetRepositoryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeTargetRepositoryOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeTargetRepositoryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeTargetRepositoryOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeTargetRepositoryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeTargetRepositoryOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeTargetRepositoryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeTargetRepositoryOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeTargetRepositoryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeTargetRepositoryOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeTargetRepositoryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeTargetRepositoryOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeTargetRepositoryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeTargetRepositoryOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeTargetRepositoryOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeTargetRepositoryOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeTargetRepositoryOutputReference.property.repositoryName">repository_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeTargetRepositoryOutputReference.property.service">service</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeTargetRepositoryOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeTargetRepository">DataAwsImagebuilderContainerRecipeTargetRepository</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeTargetRepositoryOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeTargetRepositoryOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `repository_name`<sup>Required</sup> <a name="repository_name" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeTargetRepositoryOutputReference.property.repositoryName"></a>

```python
repository_name: str
```

- *Type:* str

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeTargetRepositoryOutputReference.property.service"></a>

```python
service: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeTargetRepositoryOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsImagebuilderContainerRecipeTargetRepository
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsImagebuilderContainerRecipe.DataAwsImagebuilderContainerRecipeTargetRepository">DataAwsImagebuilderContainerRecipeTargetRepository</a>

---



